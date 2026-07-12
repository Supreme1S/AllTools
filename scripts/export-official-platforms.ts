import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { readCatalogSnapshot } from "../src/lib/catalog/storage";
import { cleanWebsiteUrl, extractDomain } from "../src/lib/catalog/normalize";
import {
  classifyReferralEligibility,
  referralStatusHint,
  referralStatusLabel,
  resolveExportBlockId,
} from "../src/lib/catalog/referral-eligibility";
import { readReferralsRegistry } from "../src/lib/catalog/referrals-config";
import { compareTopPlatform, getTopPlatformMeta } from "../src/lib/catalog/top-platforms";
import type { CatalogTool, ReferralStatus } from "../src/lib/catalog/types";

const DATA_DIR = path.join(process.cwd(), "data");

const BLOCKED_DOMAINS = new Set([
  "forms.gle",
  "t.me",
  "twitter.com",
  "x.com",
  "facebook.com",
  "instagram.com",
  "discord.com",
  "discord.gg",
  "youtube.com",
  "youtu.be",
  "linkedin.com",
  "medium.com",
  "reddit.com",
  "chromewebstore.google.com",
  "addons.mozilla.org",
  "apps.apple.com",
  "play.google.com",
  "google.com",
  "github.com",
  "raw.githubusercontent.com",
  "maxy.tools",
  "crypton.xyz",
  "tools.crypton.xyz",
]);

function isBlockedDomain(domain: string): boolean {
  if (BLOCKED_DOMAINS.has(domain)) return true;
  if (domain === "maxy.tools" || domain.endsWith(".maxy.tools")) return true;
  if (domain === "crypton.xyz" || domain.endsWith(".crypton.xyz")) return true;
  return false;
}

function isSafeOfficialUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return false;
    const domain = extractDomain(url);
    if (isBlockedDomain(domain)) return false;
    if (domain.endsWith(".ru") && domain.includes("discord")) return false;
    return true;
  } catch {
    return false;
  }
}

function resolveOfficialUrl(tool: CatalogTool): string {
  const candidates = [
    tool.enrichment?.url,
    tool.website_url,
  ].filter(Boolean) as string[];

  for (const raw of candidates) {
    const cleaned = cleanWebsiteUrl(raw);
    if (isSafeOfficialUrl(cleaned)) return cleaned;
  }

  const fallback = cleanWebsiteUrl(tool.website_url);
  return isSafeOfficialUrl(fallback) ? fallback : tool.website_url;
}

function escapeCsv(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

type ExportBlock = {
  id: string;
  title: string;
  order: number;
};

const EXPORT_BLOCKS: ExportBlock[] = [
  { id: "cex", title: "Биржи (CEX)", order: 1 },
  { id: "dex", title: "DEX и свопы", order: 2 },
  { id: "dex-agg", title: "DEX-агрегаторы", order: 3 },
  { id: "bridges", title: "Мосты (Bridges)", order: 4 },
  { id: "lending", title: "Lending / займы", order: 5 },
  { id: "staking", title: "Staking / restaking", order: 6 },
  { id: "derivatives", title: "Derivatives / перпы / опционы", order: 7 },
  { id: "yield", title: "Yield / фарминг", order: 8 },
  { id: "nft", title: "NFT", order: 9 },
  { id: "launchpad", title: "Launchpad", order: 10 },
  { id: "defi-other", title: "Прочий DeFi", order: 11 },
  { id: "wallets", title: "Кошельки", order: 12 },
  { id: "analytics", title: "Аналитика и данные", order: 13 },
  { id: "ai", title: "Нейросети (ИИ)", order: 14 },
  { id: "services", title: "Сервисы", order: 15 },
  { id: "tools", title: "Инструменты", order: 16 },
  { id: "web3", title: "Web3 Projects", order: 17 },
];

const BLOCK_BY_ID = new Map(EXPORT_BLOCKS.map((block) => [block.id, block]));

function needsReferralFill(status: ReferralStatus): boolean {
  return status === "manual_exchange" || status === "manual_kyc" || status === "pending";
}

type ExportRow = {
  index: number;
  blockIndex: number;
  blockId: string;
  blockTitle: string;
  topRank: number | null;
  topSegment: string | null;
  name: string;
  category: string;
  domain: string;
  official_url: string;
  sources: string;
  on_both: string;
  referral_status: ReferralStatus;
  referral_label: string;
  fill_referral: string;
  your_referral_url: string;
};

function buildTopRows(
  draftRows: Omit<ExportRow, "index" | "blockIndex" | "topRank" | "topSegment">[],
): ExportRow[] {
  const matched = draftRows
    .map((row) => {
      const meta = getTopPlatformMeta(row.domain);
      if (!meta) return null;
      return {
        ...row,
        blockId: "top",
        blockTitle: "ТОП — начни отсюда",
        topRank: meta.rank,
        topSegment: meta.segment,
      };
    })
    .filter(Boolean) as Array<
    Omit<ExportRow, "index" | "blockIndex"> & { topRank: number; topSegment: string }
  >;

  matched.sort((a, b) => compareTopPlatform(a.domain, b.domain));

  return matched.map((row, i) => ({
    ...row,
    index: i + 1,
    blockIndex: i + 1,
  }));
}

function rowToCsvColumns(row: ExportRow): string {
  return [
    row.index,
    escapeCsv(row.blockTitle),
    row.blockIndex,
    escapeCsv(row.name),
    escapeCsv(row.topSegment ?? row.category),
    row.domain,
    row.official_url,
    row.fill_referral,
    row.referral_status,
    escapeCsv(row.referral_label),
    row.your_referral_url,
    row.sources,
    row.on_both,
  ].join(",");
}

function groupRowsByBlock(
  rows: Omit<ExportRow, "index" | "blockIndex">[],
): ExportRow[] {
  const grouped = new Map<string, Omit<ExportRow, "index" | "blockIndex">[]>();

  for (const block of EXPORT_BLOCKS) {
    grouped.set(block.id, []);
  }

  for (const row of rows) {
    const bucket = grouped.get(row.blockId);
    if (bucket) bucket.push(row);
  }

  const result: ExportRow[] = [];

  for (const block of EXPORT_BLOCKS) {
    const bucket = grouped.get(block.id) ?? [];
    bucket.sort((a, b) => a.name.localeCompare(b.name, "ru"));

    bucket.forEach((row, i) => {
      result.push({
        ...row,
        topRank: row.topRank ?? null,
        topSegment: row.topSegment ?? null,
        blockIndex: i + 1,
        index: result.length + 1,
      });
    });
  }

  return result;
}

async function main() {
  const snapshot = await readCatalogSnapshot();
  if (!snapshot) {
    console.error("Run `npm run sync:catalog` first.");
    process.exitCode = 1;
    return;
  }

  const registry = await readReferralsRegistry();

  const draftRows = snapshot.tools
    .map((tool) => {
      const official_url = resolveOfficialUrl(tool);
      const domain = extractDomain(official_url);
      const blockId = resolveExportBlockId(tool);
      const block = BLOCK_BY_ID.get(blockId)!;
      const referral_status = classifyReferralEligibility(
        {
          domain,
          category: tool.category,
          name: tool.name,
          blockId,
          enrichmentCategory: tool.enrichment?.category ?? null,
        },
        registry,
      );
      return {
        blockId,
        blockTitle: block.title,
        topRank: null,
        topSegment: null,
        name: tool.name,
        category: tool.category ?? "",
        domain,
        official_url,
        sources: tool.sources.join("+"),
        on_both: tool.verified_overlap ? "yes" : "no",
        referral_status,
        referral_label: referralStatusLabel(referral_status),
        fill_referral: needsReferralFill(referral_status) ? "yes" : "no",
        your_referral_url: "",
      };
    })
    .filter((row) => isSafeOfficialUrl(row.official_url));

  const topRows = buildTopRows(draftRows);
  const rows = groupRowsByBlock(draftRows);

  await mkdir(DATA_DIR, { recursive: true });

  const csvHeader =
    "index,block,block_index,name,category,domain,official_url,fill_referral,referral_status,referral_label,your_referral_url,sources,on_both";
  const csvLines: string[] = [csvHeader];

  if (topRows.length > 0) {
    csvLines.push(
      [
        "",
        escapeCsv("=== ТОП — основные площадки (по приоритету трафика и рефок) ==="),
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ].join(","),
    );
    for (const row of topRows) {
      csvLines.push(rowToCsvColumns(row));
    }
  }

  let currentBlockId = "";
  for (const row of rows) {
    if (row.blockId !== currentBlockId) {
      currentBlockId = row.blockId;
      csvLines.push(
        [
          "",
          escapeCsv(`=== ${row.blockTitle} ===`),
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ].join(","),
      );
    }

    csvLines.push(rowToCsvColumns(row));
  }

  await writeFile(
    path.join(DATA_DIR, "platforms-official.csv"),
    `${csvLines.join("\n")}\n`,
    "utf8",
  );

  const fillCount = rows.filter((row) => row.fill_referral === "yes").length;
  const noProgramCount = rows.filter((row) => row.referral_status === "no_program").length;

  const mdLines = [
    "# AllTools — официальные ссылки для регистрации в партнёрках",
    "",
    `Сгенерировано: ${snapshot.syncedAt}`,
    `Всего площадок: **${rows.length}**`,
    `Нужно заполнить рефку: **${fillCount}** | Только обычная ссылка: **${noProgramCount}**`,
    "",
    "> Ссылки очищены от чужих ref-параметров.",
    "> **`fill_referral=yes`** — можно/нужно вставить реф-ссылку в CSV.",
    "> **`fill_referral=no`** — партнёрки нет, оставляем обычный URL, колонку не заполняй.",
    "> Внутри каждого блока — сортировка по алфавиту.",
    `> **Сверху — ТОП** (${topRows.length} площадок): биржи → perp DEX → антидетект → серверы → …`,
    "",
    "## Оглавление",
    "",
    `- [ТОП — начни отсюда](#top) — ${topRows.length}`,
    "",
  ];

  for (const block of EXPORT_BLOCKS) {
    const count = rows.filter((row) => row.blockId === block.id).length;
    if (count === 0) continue;
    const anchor = block.id;
    mdLines.push(`- [${block.title}](#${anchor}) — ${count}`);
  }

  mdLines.push("");

  if (topRows.length > 0) {
    mdLines.push("## ТОП — начни отсюда", '<a id="top"></a>', "");
    mdLines.push(
      `Площадок: **${topRows.length}** — порядок: биржи → perp DEX → агрегаторы → антидетект → VPS → прокси → SMS → …`,
      "",
    );
    mdLines.push("| # | Сегмент | Название | Официальный сайт | Рефка |");
    mdLines.push("|---:|---|---|---|---|");

    for (const row of topRows) {
      mdLines.push(
        `| ${row.blockIndex} | ${(row.topSegment ?? "").replace(/\|/g, "\\|")} | ${row.name.replace(/\|/g, "\\|")} | [${row.domain}](${row.official_url}) | ${row.referral_label} |`,
      );
    }

    mdLines.push("");
  }

  for (const block of EXPORT_BLOCKS) {
    const blockRows = rows.filter((row) => row.blockId === block.id);
    if (blockRows.length === 0) continue;

    mdLines.push(`## ${block.title}`, `<a id="${block.id}"></a>`, "");
    mdLines.push(`Площадок: **${blockRows.length}**`, "");
    mdLines.push("| # | Название | Официальный сайт | Рефка |");
    mdLines.push("|---:|---|---|---|");

    for (const row of blockRows) {
      mdLines.push(
        `| ${row.blockIndex} | ${row.name.replace(/\|/g, "\\|")} | [${row.domain}](${row.official_url}) | ${row.referral_label} |`,
      );
    }

    mdLines.push("");
  }

  await writeFile(path.join(DATA_DIR, "platforms-official.md"), `${mdLines.join("\n")}\n`, "utf8");

  console.log(`Exported ${rows.length} platforms (${fillCount} need referral, ${noProgramCount} regular-only)`);
  console.log(`  Top section: ${topRows.length} platforms`);
  for (const block of EXPORT_BLOCKS) {
    const count = rows.filter((row) => row.blockId === block.id).length;
    if (count > 0) console.log(`  ${block.title}: ${count}`);
  }
  console.log(`  data/platforms-official.csv`);
  console.log(`  data/platforms-official.md`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
