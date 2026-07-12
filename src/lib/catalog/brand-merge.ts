import {
  cleanWebsiteUrl,
  extractDomain,
  normalizeName,
  slugify,
} from "@/lib/catalog/normalize";
import { deriveNameFromDomain, isGenericDisplayName } from "@/lib/catalog/display-name";
import { normalizeCategoryKey } from "@/lib/catalog/category-labels";
import { resolveOutboundUrls } from "@/lib/catalog/referrals";
import type { CatalogTool, ReferralsRegistry, SourceRecord } from "@/lib/catalog/types";

/** Same company, different registrable domains */
const BRAND_ALIASES: Record<string, string> = {
  "gate.io": "gate",
  "gate.com": "gate",
  "phantom.app": "phantom",
  "phantom.com": "phantom",
  "backpack.app": "backpack",
  "backpack.exchange": "backpack",
  "dydx.exchange": "dydx",
  "dydx.trade": "dydx",
  "bestchange.ru": "bestchange",
  "bestchange.com": "bestchange",
  "hetzner.cloud": "hetzner",
  "hetzner.com": "hetzner",
};

/** Canonical display names for merged brands */
const CANONICAL_NAMES: Record<string, string> = {
  gate: "Gate.io",
  "binance.com": "Binance",
  "bybit.com": "Bybit",
  "bitget.com": "Bitget",
  "okx.com": "OKX",
  "openai.com": "OpenAI",
  "debridge.finance": "deBridge",
  "nansen.ai": "Nansen",
  "1inch.io": "1inch",
  "zksync.io": "zkSync",
  "kucoin.com": "KuCoin",
  "mexc.com": "MEXC",
  "coinbase.com": "Coinbase",
  phantom: "Phantom",
  backpack: "Backpack",
  dydx: "dYdX",
  bestchange: "BestChange",
  hetzner: "Hetzner",
};

/** Stable homepage URLs for merged brands */
const CANONICAL_WEBSITES: Record<string, string> = {
  gate: "https://www.gate.com",
  "binance.com": "https://www.binance.com",
  "bybit.com": "https://www.bybit.com",
  "bitget.com": "https://www.bitget.com",
  "okx.com": "https://www.okx.com",
  "openai.com": "https://openai.com",
};

/** Stable slugs for well-known brands (avoid losing /tools/bybit after merge) */
const CANONICAL_SLUGS: Record<string, string> = {
  gate: "gate-io",
  "binance.com": "binance",
  "bybit.com": "bybit",
  "bitget.com": "bitget",
  "okx.com": "okx",
  "openai.com": "openai",
  "debridge.finance": "debridge",
  "nansen.ai": "nansen",
  "1inch.io": "1inch",
  "zksync.io": "zksync",
  phantom: "phantom",
  backpack: "backpack",
  dydx: "dydx",
  bestchange: "bestchange",
  hetzner: "hetzner",
};

const GENERIC_NAMES = new Set([
  "app",
  "beta",
  "hub",
  "claim",
  "dashboard",
  "register",
  "assets",
  "builders",
]);

const SUBPRODUCT_NAME =
  /\b(web3|wallet|bridge|scan|explorer|launchpad|academy|farming|loan|earn|frontier|platform|portfolio|card)\b/i;

const CATEGORY_PRIORITY: Record<string, number> = {
  "Биржи CEX": 100,
  "Биржи (CEX)": 100,
  "Биржи DEX": 88,
  "DEX / Perp": 88,
  "Кошельки": 80,
  "DeFi": 70,
  "DeFi и dApps": 70,
  "DeFi & DApp": 70,
  "Аналитика и данные": 60,
  "Нейросети": 55,
  "Нейросети (ИИ)": 55,
  "Инструменты": 40,
  "Сервисы": 35,
  "Web3": 30,
  "Проекты": 30,
  "Web3 Projects": 30,
  "Прочее": 0,
};

export function extractRootDomain(domain: string): string {
  const normalized = domain.toLowerCase().replace(/^www\./, "");
  const parts = normalized.split(".");
  if (parts.length <= 2) return normalized;
  return parts.slice(-2).join(".");
}

export function getBrandId(domain: string, name?: string | null): string {
  const root = extractRootDomain(domain);
  if (BRAND_ALIASES[root]) return BRAND_ALIASES[root];

  const nameSlug = name ? slugify(normalizeName(name)) : "";
  if (nameSlug && nameSlug !== "app" && BRAND_ALIASES[nameSlug]) {
    return BRAND_ALIASES[nameSlug];
  }

  return root;
}

function scoreDomain(domain: string): number {
  let score = 100;
  const lower = domain.toLowerCase();
  if (/^(partner|referral|affiliate|invite)\./.test(lower)) score -= 60;
  if (/^(app|web3|pro|share|chat|bridge|explorer|launchpad|academy|accounts)\./.test(lower)) {
    score -= 35;
  }
  if (lower.split(".").length === 2) score += 25;
  if (lower === extractRootDomain(lower)) score += 15;
  return score;
}

function scoreWebsiteUrl(url: string): number {
  try {
    const cleaned = cleanWebsiteUrl(url);
    const parsed = new URL(cleaned);
    let score = scoreDomain(parsed.hostname.replace(/^www\./, ""));
    const segments = parsed.pathname.split("/").filter(Boolean);
    if (segments.length === 0) score += 30;
    else if (segments.length === 1 && /^en|ru|uk|zh$/i.test(segments[0]!)) score += 20;
    else score -= segments.length * 8 + parsed.pathname.length * 0.2;
    return score;
  } catch {
    return 0;
  }
}

export function pickCanonicalDomain(domains: string[]): string {
  const unique = [...new Set(domains.filter(Boolean))];
  if (unique.length === 0) return "";
  return unique.sort((a, b) => scoreDomain(b) - scoreDomain(a))[0]!;
}

export function pickCanonicalWebsiteUrl(urls: string[], brandId?: string): string {
  if (brandId && CANONICAL_WEBSITES[brandId]) {
    return CANONICAL_WEBSITES[brandId];
  }
  const unique = [...new Set(urls.filter(Boolean))];
  if (unique.length === 0) return "";
  const cleaned = unique.map((url) => cleanWebsiteUrl(url));
  return cleaned.sort((a, b) => scoreWebsiteUrl(b) - scoreWebsiteUrl(a))[0]!;
}

function scoreName(name: string, brandId: string): number {
  const trimmed = name.trim();
  if (!trimmed) return -1000;

  let score = 50;
  const slug = slugify(normalizeName(trimmed));

  if (CANONICAL_NAMES[brandId]?.toLowerCase() === trimmed.toLowerCase()) {
    score += 200;
  }
  if (GENERIC_NAMES.has(slug)) score -= 200;
  if (SUBPRODUCT_NAME.test(trimmed)) score -= 80;
  if (trimmed.length <= 12) score += 20;
  if (trimmed.length >= 24) score -= 15;

  // Prefer "Bitget" over "BitGet"
  if (/^[A-Z][a-z]+(\s[A-Z][a-z]+)?$/.test(trimmed)) score += 10;

  return score;
}

export function pickCanonicalName(names: string[], brandId: string): string {
  if (CANONICAL_NAMES[brandId]) return CANONICAL_NAMES[brandId];

  const unique = [...new Set(names.map((n) => n.trim()).filter(Boolean))];
  if (unique.length === 0) return "Unknown";
  if (unique.length === 1) return unique[0]!;

  return unique.sort((a, b) => scoreName(b, brandId) - scoreName(a, brandId))[0]!;
}

export function resolveToolDisplayName(name: string, domain: string): string {
  const trimmed = name.trim();
  if (!isGenericDisplayName(trimmed)) return trimmed;
  const derived = deriveNameFromDomain(domain);
  return derived !== "Unknown" ? derived : trimmed;
}

export function pickCanonicalCategory(categories: (string | null | undefined)[]): string | null {
  const unique = [...new Set(categories.filter(Boolean) as string[])];
  if (unique.length === 0) return null;
  return unique.sort(
    (a, b) => (CATEGORY_PRIORITY[b] ?? 10) - (CATEGORY_PRIORITY[a] ?? 10),
  )[0]!;
}

export function buildBrandMergeKey(record: Pick<SourceRecord, "url" | "name">): string {
  const domain = extractDomain(record.url);
  return getBrandId(domain, record.name);
}

function mergeSourceLists(
  left: SourceRecord["source"][],
  right: SourceRecord["source"][],
): SourceRecord["source"][] {
  return [...new Set([...left, ...right])];
}

function mergeCatalogToolGroup(
  group: CatalogTool[],
  registry: ReferralsRegistry,
): CatalogTool {
  const brandId = getBrandId(
    group[0]!.domain,
    group.map((tool) => tool.name).join(" "),
  );

  const domain = pickCanonicalDomain(group.map((tool) => tool.domain));
  const name = resolveToolDisplayName(
    pickCanonicalName(
      group.map((tool) => tool.name),
      brandId,
    ),
    domain,
  );
  const websiteUrl = pickCanonicalWebsiteUrl(
    group.map((tool) => tool.website_url),
    brandId,
  );
  const category = pickCanonicalCategory(group.map((tool) => tool.category));
  const enrichment =
    group.find((tool) => tool.enrichment)?.enrichment ??
    group.find((tool) => tool.image)?.enrichment;
  const image =
    group.find((tool) => tool.image)?.image ??
    enrichment?.logo ??
    null;

  const urls = resolveOutboundUrls(
    {
      domain,
      websiteUrl,
      category,
      name,
      enrichmentCategory: enrichment?.category ?? null,
      registry,
    },
    registry,
  );

  const slug = CANONICAL_SLUGS[brandId] ?? slugify(name);
  const sources = mergeSourceLists(
    group.flatMap((tool) => tool.sources),
    [],
  );

  return {
    id: slug,
    slug,
    name,
    domain,
    category: normalizeCategoryKey(category),
    image,
    description: group.find((tool) => tool.description)?.description ?? null,
    website_url: urls.website_url,
    referral_url: urls.referral_url,
    outbound_url: urls.outbound_url,
    referral_status: urls.referral_status,
    sources,
    verified_overlap: group.some((tool) => tool.verified_overlap),
    enrichment,
  };
}

export function ensureUniqueSlugs(tools: CatalogTool[]): CatalogTool[] {
  const slugCounts = new Map<string, number>();
  for (const tool of tools) {
    slugCounts.set(tool.slug, (slugCounts.get(tool.slug) ?? 0) + 1);
  }

  const taken = new Set<string>();

  return tools.map((tool) => {
    if ((slugCounts.get(tool.slug) ?? 0) <= 1) {
      taken.add(tool.slug);
      return tool;
    }

    const suffix = extractRootDomain(tool.domain).replace(/\./g, "-");
    let candidate = `${tool.slug}-${suffix}`.slice(0, 80);
    let index = 2;
    while (taken.has(candidate)) {
      candidate = `${tool.slug}-${suffix}-${index}`.slice(0, 80);
      index++;
    }
    taken.add(candidate);
    return { ...tool, id: candidate, slug: candidate };
  });
}

export function consolidateCatalogTools(
  tools: CatalogTool[],
  registry: ReferralsRegistry,
): CatalogTool[] {
  const groups = new Map<string, CatalogTool[]>();

  for (const tool of tools) {
    const key = getBrandId(tool.domain, tool.name);
    const bucket = groups.get(key);
    if (bucket) bucket.push(tool);
    else groups.set(key, [tool]);
  }

  const merged = [...groups.values()].map((group) =>
    group.length === 1 ? group[0]! : mergeCatalogToolGroup(group, registry),
  );

  merged.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  return ensureUniqueSlugs(merged);
}

export function lookupReferralDomain(domain: string): string {
  return pickCanonicalDomain([domain, extractRootDomain(domain)]);
}
