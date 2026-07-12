#!/usr/bin/env tsx
/**
 * Audit, dedupe-propagate refs, and import platforms CSV.
 * Supports comma or semicolon delimiters (Excel RU export).
 *
 * Usage:
 *   tsx scripts/fix-and-import-platforms-csv.ts
 *   tsx scripts/fix-and-import-platforms-csv.ts /path/to/platforms-official.csv
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { cleanWebsiteUrl } from "../src/lib/catalog/normalize";
import {
  readReferralsRegistry,
  writeReferralsRegistry,
} from "../src/lib/catalog/referrals-config";

const DEFAULT_INPUTS = [
  path.join(process.cwd(), "data", "platforms-official.csv"),
  path.join(process.env.HOME ?? "", "Desktop", "platforms-official.csv"),
];

type Row = Record<string, string>;

function detectDelimiter(headerLine: string): "," | ";" {
  return headerLine.split(";").length > headerLine.split(",").length ? ";" : ",";
}

function parseLine(line: string, delimiter: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === delimiter && !inQuotes) {
      fields.push(current);
      current = "";
      continue;
    }
    current += char;
  }

  fields.push(current);
  return fields;
}

function escapeCsv(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function rootDomain(domain: string): string {
  const parts = domain.toLowerCase().replace(/^www\./, "").split(".");
  return parts.length >= 2 ? parts.slice(-2).join(".") : domain;
}

/** Same brand — share one referral URL. */
function brandKey(domain: string): string {
  const d = domain.toLowerCase().replace(/^www\./, "");
  if (d.includes("bybit")) return "bybit";
  if (d.includes("bitget")) return "bitget";
  if (d === "gate.io" || d === "gate.com") return "gate";
  if (d.includes("binance")) return "binance";
  if (d.includes("geelark")) return "geelark";
  if (d.includes("octobrowser")) return "octobrowser";
  if (d.includes("adspower")) return "adspower";
  if (d.includes("ether.fi")) return "ether.fi";
  if (d.includes("nansen")) return "nansen";
  if (d.includes("gologin")) return "gologin";
  if (d.includes("sushi")) return "sushi";
  if (d.includes("dolphin")) return "dolphin";
  if (d.includes("hetzner")) return "hetzner";
  if (d.includes("mexc")) return "mexc";
  if (d.includes("okx")) return "okx";
  if (d.includes("bingx")) return "bingx";
  if (d.includes("kucoin")) return "kucoin";
  if (d === "jup.ag" || d.includes("jupiter")) return "jupiter";
  if (d.includes("proxy-seller")) return "proxy-seller";
  if (d.includes("asocks")) return "asocks";
  if (d.includes("incogniton")) return "incogniton";
  if (d.includes("morelogin")) return "morelogin";
  if (d.includes("undetectable")) return "undetectable";
  if (d.includes("vdsina")) return "vdsina";
  if (d.includes("macloud")) return "macloud";
  if (d.includes("smspool")) return "smspool";
  if (d.includes("365sms")) return "365sms";
  return rootDomain(d);
}

function isSkipMarker(raw: string): boolean {
  const value = raw.trim().toLowerCase();
  return ["skip", "-", "n/a", "na", "нет", "no", "none", "пропуск", "нельзя"].includes(value);
}

function isValidRef(raw: string): boolean {
  try {
    return new URL(raw.trim()).protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeRef(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed || isSkipMarker(trimmed)) return trimmed;
  if (isValidRef(trimmed)) return trimmed;
  if (/^[a-z0-9.-]+\.[a-z]{2,}\//i.test(trimmed)) {
    const withProto = `https://${trimmed.replace(/^\/\//, "")}`;
    if (isValidRef(withProto)) return withProto;
  }
  return trimmed;
}

function rowToCsv(header: string[], row: Row): string {
  return header.map((col) => escapeCsv(row[col] ?? "")).join(",");
}

async function loadCsvRows(filePath: string): Promise<{ header: string[]; rows: Row[] } | null> {
  try {
    const raw = await readFile(filePath, "utf8");
    const lines = raw.trim().split(/\r?\n/);
    const delimiter = detectDelimiter(lines[0]);
    const header = parseLine(lines[0], delimiter);

    if (!header.includes("domain") || !header.includes("your_referral_url")) return null;

    const rows: Row[] = [];
    for (const line of lines.slice(1)) {
      if (!line.trim() || line.includes("===")) continue;

      const fields = parseLine(line, delimiter);
      if (fields.length !== header.length && fields.length === header.length + 1) {
        const urlIdx = header.indexOf("official_url");
        if (fields[urlIdx]?.endsWith(")")) {
          fields[urlIdx] = fields[urlIdx].replace(/\)+$/, "");
          fields.splice(urlIdx + 1, 1);
        }
      }

      const row: Row = {};
      header.forEach((col, i) => {
        row[col] = (fields[i] ?? "").trim();
      });

      if (row.your_referral_url.includes("без рефки")) row.your_referral_url = "";
      row.your_referral_url = normalizeRef(row.your_referral_url);
      if (row.official_url.endsWith(")")) row.official_url = row.official_url.replace(/\)+$/, "");
      row.official_url = cleanWebsiteUrl(row.official_url);

      rows.push(row);
    }

    return { header, rows };
  } catch {
    return null;
  }
}

function pickBestRef(current: string | undefined, candidate: string, fromTop: boolean): string {
  if (!isValidRef(candidate)) return current ?? "";
  if (!current || !isValidRef(current)) return candidate;
  if (fromTop && !current) return candidate;
  return current;
}

function buildRefMaps(rows: Row[]) {
  const refByDomain = new Map<string, string>();
  const refByBrand = new Map<string, string>();
  const skipDomains = new Set<string>();
  const skipBrands = new Set<string>();

  for (const row of rows) {
    const domain = row.domain.toLowerCase().replace(/^www\./, "");
    const brand = brandKey(domain);
    const ref = row.your_referral_url.trim();
    const fromTop = row.block.includes("ТОП");

    if (isSkipMarker(ref) || ref === "SKIP") {
      skipDomains.add(domain);
      skipBrands.add(brand);
      continue;
    }
    if (!isValidRef(ref)) continue;

    refByDomain.set(domain, pickBestRef(refByDomain.get(domain), ref, fromTop));
    if (!refByBrand.has(brand) || fromTop) {
      refByBrand.set(brand, ref);
    }
  }

  return { refByDomain, refByBrand, skipDomains, skipBrands };
}

function propagateRefs(rows: Row[]): number {
  const { refByDomain, refByBrand, skipDomains, skipBrands } = buildRefMaps(rows);
  let propagated = 0;

  for (const row of rows) {
    const domain = row.domain.toLowerCase().replace(/^www\./, "");
    const brand = brandKey(domain);
    const existing = row.your_referral_url.trim();

    if (isSkipMarker(existing) || existing === "SKIP") continue;
    if (isValidRef(existing)) continue;

    if (skipDomains.has(domain) || skipBrands.has(brand)) {
      row.your_referral_url = "SKIP";
      continue;
    }

    const ref = refByDomain.get(domain) ?? refByBrand.get(brand);
    if (ref && isValidRef(ref)) {
      row.your_referral_url = ref;
      propagated += 1;
    }
  }

  return propagated;
}

async function resolveInputPath(): Promise<string> {
  if (process.argv[2]) return path.resolve(process.argv[2]);

  for (const candidate of DEFAULT_INPUTS) {
    try {
      const raw = await readFile(candidate, "utf8");
      const lines = raw.trim().split(/\r?\n/);
      const delim = detectDelimiter(lines[0]);
      const header = parseLine(lines[0], delim);
      const refIdx = header.indexOf("your_referral_url");
      let filled = 0;
      for (const line of lines.slice(1)) {
        if (!line.trim() || line.includes("===")) continue;
        const ref = (parseLine(line, delim)[refIdx] ?? "").trim();
        if (isValidRef(ref)) filled += 1;
      }
      if (filled > 0) return candidate;
    } catch {
      // try next
    }
  }

  return path.join(process.cwd(), "data", "platforms-official.csv");
}

async function main() {
  const explicitPath = process.argv[2] ? path.resolve(process.argv[2]) : null;
  const sources = explicitPath
    ? [explicitPath]
    : [
        path.join(process.env.HOME ?? "", "Desktop", "platforms-official.csv"),
        path.join(process.cwd(), "data", "platforms-official.csv"),
      ];

  let header: string[] = [];
  let dataRows: Row[] = [];
  const loadedFrom: string[] = [];

  for (const source of sources) {
    const loaded = await loadCsvRows(source);
    if (!loaded || loaded.rows.length === 0) continue;

    loadedFrom.push(source);

    if (dataRows.length === 0) {
      header = loaded.header;
      dataRows = loaded.rows;
      continue;
    }

    // Merge refs from additional file into existing rows (same order/length assumed)
    if (loaded.rows.length === dataRows.length) {
      for (let i = 0; i < dataRows.length; i += 1) {
        const incoming = loaded.rows[i].your_referral_url.trim();
        if (isValidRef(incoming) && !isValidRef(dataRows[i].your_referral_url)) {
          dataRows[i].your_referral_url = incoming;
        }
      }
    } else {
      const incomingByDomain = buildRefMaps(loaded.rows).refByDomain;
      for (const row of dataRows) {
        const domain = row.domain.toLowerCase().replace(/^www\./, "");
        const incoming = incomingByDomain.get(domain);
        if (incoming && !isValidRef(row.your_referral_url)) {
          row.your_referral_url = incoming;
        }
      }
    }
  }

  if (dataRows.length === 0) {
    console.error("No CSV data found.");
    process.exitCode = 1;
    return;
  }

  const inputPath = loadedFrom.join(" + ");

  // Multi-pass: TOP fills first, then propagate to all duplicate blocks
  let totalPropagated = 0;
  for (let pass = 0; pass < 3; pass += 1) {
    totalPropagated += propagateRefs(dataRows);
  }

  const required = ["domain", "your_referral_url", "official_url", "block", "name"];
  for (const col of required) {
    if (!header.includes(col)) {
      console.error(`Missing column: ${col}`);
      process.exitCode = 1;
      return;
    }
  }

  // Remove old duplicate parse loop - dataRows already built
  const _unused = required;
  void _unused;

  // Stats
  const filled = dataRows.filter((r) => isValidRef(r.your_referral_url));
  const skipped = dataRows.filter((r) => r.your_referral_url === "SKIP");
  const uniqueDomains = new Set(filled.map((r) => r.domain.toLowerCase()));

  // Write comma CSV back to data/
  const outPath = path.join(process.cwd(), "data", "platforms-official.csv");
  const outLines: string[] = [header.join(",")];

  let sepIndex = 0;
  let currentBlock = "";

  for (const row of dataRows) {
    if (row.block !== currentBlock) {
      currentBlock = row.block;
      if (row.block.startsWith("ТОП") && sepIndex === 0) {
        outLines.push(
          [
            "",
            escapeCsv("=== ТОП — основные площадки (по приоритету трафика и рефок) ==="),
            ...Array(header.length - 2).fill(""),
          ].join(","),
        );
      } else if (row.block !== "ТОП — начни отсюда") {
        outLines.push(
          ["", escapeCsv(`=== ${row.block} ===`), ...Array(header.length - 2).fill("")].join(","),
        );
      }
      sepIndex += 1;
    }
    outLines.push(rowToCsv(header, row));
  }

  await writeFile(outPath, `${outLines.join("\n")}\n`, "utf8");

  // Import unique domain refs to referrals.json
  const registry = await readReferralsRegistry();
  let imported = 0;
  let markedSkip = 0;

  const domainBest = new Map<string, Row>();
  for (const row of dataRows) {
    const domain = row.domain.toLowerCase().replace(/^www\./, "");
    const ref = row.your_referral_url.trim();
    if (!ref) continue;

    if (isSkipMarker(ref) || ref === "SKIP") {
      if (!registry.entries[domain]) {
        registry.entries[domain] = {
          url: "",
          status: "no_program",
          updatedAt: new Date().toISOString(),
          note: `skip: ${row.name}`,
        };
        markedSkip += 1;
      }
      continue;
    }

    if (!isValidRef(ref)) continue;

    const prev = domainBest.get(domain);
    if (!prev || row.block.includes("ТОП")) {
      domainBest.set(domain, row);
    }
  }

  for (const [domain, row] of domainBest) {
    registry.entries[domain] = {
      url: row.your_referral_url.trim(),
      status: "ready",
      updatedAt: new Date().toISOString(),
      note: `imported (${row.name})`,
    };
    imported += 1;
  }

  await writeReferralsRegistry(registry);

  // Audit report
  const dupDomains = new Map<string, number>();
  for (const row of dataRows) {
    const d = row.domain.toLowerCase();
    dupDomains.set(d, (dupDomains.get(d) ?? 0) + 1);
  }
  const duplicated = [...dupDomains.entries()].filter(([, c]) => c > 1);

  const stillEmpty = dataRows.filter(
    (r) => r.fill_referral === "yes" && !isValidRef(r.your_referral_url) && r.your_referral_url !== "SKIP",
  );

  const report = [
    "# Platforms CSV — audit",
    "",
    `Input: ${inputPath}`,
    `Output: ${outPath}`,
    "",
    "## Summary",
    `- Rows: ${dataRows.length}`,
    `- Valid referral URLs (after propagate): ${filled.length}`,
    `- Unique domains with ref: ${uniqueDomains.size}`,
    `- Propagated to duplicate rows: ${totalPropagated}`,
    `- SKIP: ${skipped.length}`,
    `- Imported to referrals.json: ${imported}`,
    `- Still empty (fill_referral=yes): ${stillEmpty.length}`,
    "",
    "## Imported domains",
    ...[...uniqueDomains].sort().map((d) => `- ${d}`),
    "",
    "## Still need ref (TOP priority first)",
    ...stillEmpty
      .filter((r) => r.block.includes("ТОП"))
      .slice(0, 40)
      .map((r) => `- ${r.name} (${r.domain})`),
    stillEmpty.length > 40 ? `\n... +${stillEmpty.length - 40} more` : "",
  ].join("\n");

  const reportPath = path.join(process.cwd(), "data", "platforms-audit.md");
  await writeFile(reportPath, `${report}\n`, "utf8");

  console.log(report);
  console.log(`\nWrote ${outPath}`);
  console.log(`Wrote ${reportPath}`);
  console.log("\nNext: npm run sync:catalog");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
