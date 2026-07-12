import {
  canonicalUrl,
  cleanWebsiteUrl,
  extractDomain,
  slugify,
} from "@/lib/catalog/normalize";
import { applyExchangeCategory } from "@/lib/catalog/exchange-classification";
import { normalizeCategoryKey } from "@/lib/catalog/category-labels";
import {
  buildBrandMergeKey,
  consolidateCatalogTools,
  pickCanonicalCategory,
  pickCanonicalName,
  pickCanonicalWebsiteUrl,
  getBrandId,
  resolveToolDisplayName,
} from "@/lib/catalog/brand-merge";
import { resolveOutboundUrls } from "@/lib/catalog/referrals";
import { matchDefiLlama } from "@/lib/catalog/sources/defillama";
import type {
  CatalogSnapshot,
  CatalogTool,
  ReferralsRegistry,
  SourceRecord,
} from "@/lib/catalog/types";

type MergedDraft = {
  names: string[];
  websiteUrls: string[];
  image: string | null;
  category: string | null;
  sources: Set<SourceRecord["source"]>;
  records: SourceRecord[];
  crypton?: SourceRecord;
  maxy?: SourceRecord;
};

function mergeDraft(existing: MergedDraft, incoming: SourceRecord): MergedDraft {
  existing.sources.add(incoming.source);
  existing.records.push(incoming);
  if (incoming.source === "crypton") existing.crypton = incoming;
  if (incoming.source === "maxy") existing.maxy = incoming;

  existing.names.push(incoming.name);
  if (!existing.image && incoming.image) existing.image = incoming.image;
  existing.websiteUrls.push(incoming.url);

  const categories = [existing.category, incoming.category].filter(Boolean) as string[];
  existing.category = pickCanonicalCategory(categories);

  return existing;
}

function buildDraftKey(record: SourceRecord): string {
  return buildBrandMergeKey(record);
}

export function mergeSourceRecords(
  crypton: SourceRecord[],
  maxy: SourceRecord[],
): MergedDraft[] {
  const drafts = new Map<string, MergedDraft>();

  for (const record of [...crypton, ...maxy]) {
    const key = buildDraftKey(record);
    const existing = drafts.get(key);
    if (existing) {
      mergeDraft(existing, record);
      continue;
    }

    drafts.set(key, {
      names: [record.name],
      websiteUrls: [record.url],
      image: record.image ?? null,
      category: record.category ?? null,
      sources: new Set([record.source]),
      records: [record],
      crypton: record.source === "crypton" ? record : undefined,
      maxy: record.source === "maxy" ? record : undefined,
    });
  }

  return [...drafts.values()];
}

async function draftToTool(
  draft: MergedDraft,
  registry: ReferralsRegistry,
): Promise<CatalogTool> {
  const brandId = getBrandId(
    extractDomain(pickCanonicalWebsiteUrl(draft.websiteUrls, undefined)),
    draft.names[0],
  );
  const websiteUrl = pickCanonicalWebsiteUrl(draft.websiteUrls, brandId);
  const domain = extractDomain(websiteUrl);
  const name = resolveToolDisplayName(
    pickCanonicalName(draft.names, brandId),
    domain,
  );
  const category = draft.category;

  const enrichment = await matchDefiLlama(name, websiteUrl);
  const websiteFromEnrichment = enrichment?.url
    ? cleanWebsiteUrl(enrichment.url)
    : cleanWebsiteUrl(websiteUrl);

  const urls = resolveOutboundUrls(
    {
      domain,
      websiteUrl: websiteFromEnrichment,
      category: category ?? enrichment?.category ?? null,
      name,
      enrichmentCategory: enrichment?.category ?? null,
      registry,
    },
    registry,
  );

  const sources = [...draft.sources];
  const verified_overlap = sources.includes("crypton") && sources.includes("maxy");
  const slug = slugify(name);

  return {
    id: slug,
    slug,
    name,
    domain,
    category: normalizeCategoryKey(category ?? enrichment?.category ?? null),
    image: draft.image ?? enrichment?.logo ?? null,
    description: null,
    website_url: urls.website_url,
    referral_url: urls.referral_url,
    outbound_url: urls.outbound_url,
    referral_status: urls.referral_status,
    sources,
    verified_overlap,
    enrichment,
  };
}

export async function buildCatalogSnapshot(
  crypton: SourceRecord[],
  maxy: SourceRecord[],
  registry: ReferralsRegistry,
): Promise<CatalogSnapshot> {
  const drafts = mergeSourceRecords(crypton, maxy);
  const rawTools = await Promise.all(drafts.map((draft) => draftToTool(draft, registry)));
  const tools = consolidateCatalogTools(rawTools, registry).map(applyExchangeCategory);
  tools.sort((a, b) => a.name.localeCompare(b.name, "ru"));

  const overlap_internal = tools.filter((tool) => tool.verified_overlap).length;

  return {
    syncedAt: new Date().toISOString(),
    stats: {
      total: tools.length,
      crypton: crypton.length,
      maxy: maxy.length,
      overlap_internal,
      with_referral: tools.filter((tool) => tool.referral_url).length,
      enriched: tools.filter((tool) => tool.enrichment).length,
      manual_exchange: tools.filter((tool) => tool.referral_status === "manual_exchange")
        .length,
      manual_kyc: tools.filter((tool) => tool.referral_status === "manual_kyc").length,
    },
    tools,
  };
}
