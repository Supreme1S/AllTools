import { extractDomain, normalizeName } from "@/lib/catalog/normalize";
import type { EnrichmentRecord } from "@/lib/catalog/types";

type DefiLlamaProtocol = {
  slug: string;
  name: string;
  category?: string;
  tvl?: number;
  url?: string;
  logo?: string;
};

let cache: DefiLlamaProtocol[] | null = null;
let domainIndex: Map<string, DefiLlamaProtocol> | null = null;
let nameIndex: Map<string, DefiLlamaProtocol> | null = null;

export async function fetchDefiLlamaProtocols(): Promise<DefiLlamaProtocol[]> {
  if (cache) return cache;

  const res = await fetch("https://api.llama.fi/protocols", {
    headers: { "User-Agent": "alltools-sync/0.1" },
  });

  if (!res.ok) {
    throw new Error(`DeFiLlama protocols failed: ${res.status}`);
  }

  const data = (await res.json()) as Array<{
    slug: string;
    name: string;
    category?: string;
    tvl?: number;
    url?: string;
    logo?: string;
  }>;

  cache = data.map((item) => ({
    slug: item.slug,
    name: item.name,
    category: item.category,
    tvl: item.tvl,
    url: item.url,
    logo: item.logo,
  }));

  domainIndex = new Map();
  nameIndex = new Map();

  for (const protocol of cache) {
    if (protocol.url) {
      try {
        domainIndex.set(extractDomain(protocol.url), protocol);
      } catch {
        /* ignore */
      }
    }
    nameIndex.set(normalizeName(protocol.name), protocol);
  }

  return cache;
}

function toEnrichment(protocol: DefiLlamaProtocol, score: number): EnrichmentRecord {
  return {
    source: "defillama",
    protocolSlug: protocol.slug,
    category: protocol.category,
    tvl: protocol.tvl,
    url: protocol.url,
    logo: protocol.logo,
    matchScore: score,
  };
}

export async function matchDefiLlama(
  name: string,
  websiteUrl: string,
): Promise<EnrichmentRecord | undefined> {
  try {
    await fetchDefiLlamaProtocols();
  } catch {
    return undefined;
  }

  if (!domainIndex || !nameIndex) return undefined;

  const domain = extractDomain(websiteUrl);
  const byDomain = domainIndex.get(domain);
  if (byDomain) return toEnrichment(byDomain, 0.95);

  const byName = nameIndex.get(normalizeName(name));
  if (byName) return toEnrichment(byName, 1);

  return undefined;
}
