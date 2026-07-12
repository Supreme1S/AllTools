import {
  readReferralsRegistry,
} from "@/lib/catalog/referrals-config";
import { extractRootDomain } from "@/lib/catalog/brand-merge";
import { classifyReferralEligibility } from "@/lib/catalog/referral-eligibility";
import type { ReferralStatus, ReferralsRegistry } from "@/lib/catalog/types";

type ResolveInput = {
  domain: string;
  websiteUrl: string;
  category?: string | null;
  name?: string;
  enrichmentCategory?: string | null;
  registry?: ReferralsRegistry;
};

export function classifyReferralStatus(
  input: ResolveInput,
  registry: ReferralsRegistry,
): ReferralStatus {
  return classifyReferralEligibility(
    {
      domain: input.domain,
      category: input.category,
      name: input.name,
      enrichmentCategory: input.enrichmentCategory,
    },
    registry,
  );
}

function lookupReferralEntry(
  domain: string,
  registry: ReferralsRegistry,
): ReferralsRegistry["entries"][string] | undefined {
  const normalized = domain.toLowerCase().replace(/^www\./, "");
  const root = extractRootDomain(normalized);

  const keys = new Set<string>([
    normalized,
    root,
    `www.${root}`,
  ]);

  for (const key of Object.keys(registry.entries)) {
    if (extractRootDomain(key) === root) keys.add(key);
  }

  for (const key of keys) {
    const entry = registry.entries[key];
    if (entry?.url) return entry;
  }

  return undefined;
}

export function resolveOutboundUrls(
  input: ResolveInput,
  registry: ReferralsRegistry,
): {
  website_url: string;
  referral_url: string | null;
  outbound_url: string;
  referral_status: ReferralStatus;
} {
  const website_url = input.websiteUrl;
  const entry = lookupReferralEntry(input.domain, registry);
  const referral_status = classifyReferralStatus(input, registry);

  if (entry?.url) {
    return {
      website_url,
      referral_url: entry.url,
      outbound_url: entry.url,
      referral_status: entry.status ?? "ready",
    };
  }

  return {
    website_url,
    referral_url: null,
    outbound_url: website_url,
    referral_status,
  };
}

export async function resolveOutboundUrlsAsync(input: ResolveInput) {
  const registry = input.registry ?? (await readReferralsRegistry());
  return resolveOutboundUrls(input, registry);
}
