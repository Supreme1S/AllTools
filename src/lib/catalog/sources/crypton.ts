import type { SourceRecord } from "@/lib/catalog/types";

const CRYPTON_HOME = "https://tools.crypton.xyz/";

const CATEGORY_PATHS: { category: string; path: string }[] = [
  { category: "Кошельки", path: "/wallets/allwallets" },
  { category: "DeFi", path: "/dapps/defidapp" },
  { category: "Сервисы", path: "/services/services" },
  { category: "Нейросети", path: "/ai/ai-tools" },
  { category: "Биржи CEX", path: "/exchanges/exchanges" },
  { category: "Аналитика и данные", path: "/analytics/analytics" },
];

function decodeJsonString(value: string): string {
  try {
    return JSON.parse(`"${value}"`) as string;
  } catch {
    return value.replace(/\\u0026/g, "&");
  }
}

function parseLegacyItems(chunk: string, category: string): SourceRecord[] {
  const records: SourceRecord[] = [];
  const re =
    /"id":(\d+),"name":"((?:\\.|[^"\\])*)","url":"((?:\\.|[^"\\])*)"(?:,"image":"((?:\\.|[^"\\])*)")?/g;

  let match: RegExpExecArray | null;
  while ((match = re.exec(chunk))) {
    const name = decodeJsonString(match[2]);
    const url = decodeJsonString(match[3]);
    if (!url.startsWith("http")) continue;

    records.push({
      source: "crypton",
      externalId: Number(match[1]),
      name,
      url,
      image: match[4] ? decodeJsonString(match[4]) : null,
      category,
    });
  }

  return records;
}

function parseServiceItems(html: string, category: string): SourceRecord[] {
  const records: SourceRecord[] = [];
  const re =
    /"service":\{"id":(\d+),"name":"((?:\\.|[^"\\])*)"(?:[\s\S]*?)"url":"((?:\\.|[^"\\])*)"/g;

  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    const name = decodeJsonString(match[2]);
    const url = decodeJsonString(match[3]);
    if (!url.startsWith("http")) continue;

    const imageMatch = match[0].match(/"image":"((?:\\.|[^"\\])*)"/);
    records.push({
      source: "crypton",
      externalId: Number(match[1]),
      name,
      url,
      image: imageMatch ? decodeJsonString(imageMatch[1]) : null,
      category,
    });
  }

  return records;
}

function extractCategoryBlocks(html: string): SourceRecord[] {
  const records: SourceRecord[] = [];
  const blockRe =
    /"label":"((?:\\.|[^"\\])*)","path":"[^"]*","image":[^,]*,"totalCount":\d+,"items":\[([\s\S]*?)\]\}/g;

  let match: RegExpExecArray | null;
  while ((match = blockRe.exec(html))) {
    const category = decodeJsonString(match[1]);
    records.push(...parseLegacyItems(match[2], category));
  }

  return records;
}

function dedupeRecords(records: SourceRecord[]): SourceRecord[] {
  const byKey = new Map<string, SourceRecord>();
  for (const record of records) {
    const key = String(record.externalId ?? record.url);
    if (!byKey.has(key)) byKey.set(key, record);
  }
  return [...byKey.values()];
}

export async function fetchCryptonCatalog(): Promise<SourceRecord[]> {
  const collected: SourceRecord[] = [];

  const homeRes = await fetch(CRYPTON_HOME, {
    headers: { "User-Agent": "alltools-sync/0.1" },
  });

  if (!homeRes.ok) {
    throw new Error(`Crypton homepage failed: ${homeRes.status}`);
  }

  const homeHtml = await homeRes.text();
  collected.push(...extractCategoryBlocks(homeHtml));
  collected.push(...parseServiceItems(homeHtml, "Главная"));

  for (const { category, path } of CATEGORY_PATHS) {
    const res = await fetch(`${CRYPTON_HOME.replace(/\/$/, "")}${path}`, {
      headers: { "User-Agent": "alltools-sync/0.1" },
    });
    if (!res.ok) continue;
    const html = await res.text();
    collected.push(...extractCategoryBlocks(html));
    collected.push(...parseLegacyItems(html, category));
    collected.push(...parseServiceItems(html, category));
  }

  return dedupeRecords(collected);
}
