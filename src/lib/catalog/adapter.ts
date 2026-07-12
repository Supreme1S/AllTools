import type { CatalogTool } from "@/lib/catalog/types";
import { normalizeCategoryKey } from "@/lib/catalog/category-labels";
import { buildLongDescription, buildShortDescription } from "@/lib/catalog/descriptions";
import { buildProtocolDeepDive } from "@/lib/catalog/facts";
import { resolveDisplayName } from "@/lib/catalog/display-name";
import { resolveProtocolIconUrl } from "@/lib/catalog/icons";
import { getTopPlatformMeta } from "@/lib/catalog/top-platforms";
import type { Service } from "@/types";

function inferCustody(tool: CatalogTool): string {
  const cat = (tool.category ?? "").toLowerCase();
  if (cat.includes("cex")) return "custodial";
  if (cat.includes("dex") && cat.includes("бирж")) return "non-custodial";
  if (cat.includes("кошел") || cat.includes("wallet")) return "non-custodial";
  if (cat.includes("defi")) return "non-custodial";
  return "hybrid";
}

function inferFiat(tool: CatalogTool): boolean {
  const cat = (tool.category ?? "").toLowerCase();
  return (
    cat.includes("cex") ||
    cat.includes("карт") ||
    cat.includes("платеж") ||
    cat.includes("card")
  );
}

function inferP2p(tool: CatalogTool): boolean {
  const cat = (tool.category ?? "").toLowerCase();
  return cat.includes("cex");
}

export function catalogToolToService(tool: CatalogTool): Service {
  const syncedAt = new Date().toISOString();
  const short_description = buildShortDescription(tool);
  const deepDive = buildProtocolDeepDive(tool);
  return {
    id: tool.id,
    slug: tool.slug,
    name: resolveDisplayName(tool.name, tool.domain),
    domain: tool.domain,
    category: normalizeCategoryKey(tool.category) ?? "Прочее",
    subcategory: tool.enrichment?.category ?? null,
    website_url: tool.website_url,
    referral_url: tool.referral_url,
    outbound_url: tool.outbound_url,
    referral_status: tool.referral_status,
    image: resolveProtocolIconUrl(tool.image ?? tool.enrichment?.logo, tool.domain),
    short_description,
    long_description: buildLongDescription(tool),
    detail_tagline: deepDive.tagline,
    detail_insights: deepDive.insights,
    custody_type: inferCustody(tool),
    supports_fiat: inferFiat(tool),
    supports_p2p: inferP2p(tool),
    sources: tool.sources,
    top_rank: getTopPlatformMeta(tool.domain)?.rank ?? null,
    tvl_usd: tool.enrichment?.tvl ?? null,
    created_at: syncedAt,
    updated_at: syncedAt,
  };
}

export function catalogToolsToServices(tools: CatalogTool[]): Service[] {
  return tools.map(catalogToolToService);
}
