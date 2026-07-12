import type { SourceRecord } from "@/lib/catalog/types";
import { canonicalUrl, extractDomain } from "@/lib/catalog/normalize";

const MAXY_PAGES = [
  "https://maxy.tools/ru/tools",
  "https://maxy.tools/ru/ai",
  "https://maxy.tools/ru/projects",
];

const SKIP_DOMAINS = new Set([
  "maxy.tools",
  "forms.gle",
  "schema.org",
  "fonts.googleapis.com",
  "www.w3.org",
  "t.me",
  "twitter.com",
  "x.com",
  "youtube.com",
  "chromewebstore.google.com",
  "addons.mozilla.org",
  "github.com",
  "apps.apple.com",
  "play.google.com",
]);

function titleFromDomain(domain: string): string {
  const base = domain.split(".")[0] ?? domain;
  return base.charAt(0).toUpperCase() + base.slice(1);
}

function extractAnchorTools(html: string, category: string | null): SourceRecord[] {
  const records: SourceRecord[] = [];
  const re = /<a href="(https:[^"]+)"[^>]*>([^<]{2,80})<\/a>/g;

  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    const url = canonicalUrl(match[1]);
    const name = match[2].replace(/->\s*$/, "").trim();
    const domain = extractDomain(url);
    if (SKIP_DOMAINS.has(domain)) continue;
    if (name.length < 2) continue;
    if (/^(click|here|link|read more|подробнее)$/i.test(name)) continue;

    records.push({
      source: "maxy",
      name,
      url,
      category,
    });
  }

  return records;
}

function extractBareUrlTools(html: string, category: string | null): SourceRecord[] {
  const records: SourceRecord[] = [];
  const re = /https:\/\/[a-z0-9.-]+(?:\/[^\s"'\\<>]*)?/gi;
  const seen = new Set<string>();

  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    const url = canonicalUrl(match[0].replace(/\\+$/, ""));
    const domain = extractDomain(url);
    if (SKIP_DOMAINS.has(domain) || seen.has(domain)) continue;
    seen.add(domain);

    records.push({
      source: "maxy",
      name: titleFromDomain(domain),
      url,
      category,
    });
  }

  return records;
}

function dedupeRecords(records: SourceRecord[]): SourceRecord[] {
  const byDomain = new Map<string, SourceRecord>();

  for (const record of records) {
    const domain = extractDomain(record.url);
    const existing = byDomain.get(domain);
    if (!existing || record.name.length > existing.name.length) {
      byDomain.set(domain, record);
    }
  }

  return [...byDomain.values()];
}

async function fetchMaxyPage(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "alltools-sync/0.1",
      Accept: "text/x-component",
      RSC: "1",
    },
  });

  if (!res.ok) {
    throw new Error(`Maxy page failed (${url}): ${res.status}`);
  }

  return res.text();
}

export async function fetchMaxyCatalog(): Promise<SourceRecord[]> {
  const collected: SourceRecord[] = [];

  for (const pageUrl of MAXY_PAGES) {
    const html = await fetchMaxyPage(pageUrl);
    const category = pageUrl.includes("/ai")
      ? "Нейросети"
      : pageUrl.includes("/projects")
        ? "Web3"
        : "Инструменты";

    collected.push(...extractAnchorTools(html, category));
    collected.push(...extractBareUrlTools(html, category));
  }

  return dedupeRecords(collected);
}
