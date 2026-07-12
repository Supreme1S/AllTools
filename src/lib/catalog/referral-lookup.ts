import referralRegistry from "../../../data/referrals.json";

function extractRootDomain(domain: string): string {
  const normalized = domain.toLowerCase().replace(/^www\./, "");
  const parts = normalized.split(".");
  if (parts.length <= 2) return normalized;
  return parts.slice(-2).join(".");
}

/**
 * Resolves a domain to its referral URL if one exists in the registry.
 * Returns the referral URL if found with "ready" status, otherwise null.
 * Safe for both client and server components — uses a static JSON import.
 */
export function lookupReferralUrl(domain: string): string | null {
  if (!domain) return null;
  const normalized = domain.toLowerCase().replace(/^www\./, "");
  const root = extractRootDomain(normalized);
  const entries: Record<string, { url?: string; status?: string }> = referralRegistry.entries;

  // Exact match
  if (entries[normalized]?.url && entries[normalized]?.status === "ready") {
    return entries[normalized].url;
  }
  if (entries[root]?.url && entries[root]?.status === "ready") {
    return entries[root].url;
  }

  // Subdomain / alias match by root domain
  for (const key of Object.keys(entries)) {
    if (
      extractRootDomain(key) === root &&
      entries[key]?.url &&
      entries[key]?.status === "ready"
    ) {
      return entries[key].url;
    }
  }

  return null;
}

/**
 * Returns the referral URL for a domain if available, otherwise the default URL.
 * Convenience wrapper for UI links.
 */
export function resolveOutboundUrl(
  domain: string,
  defaultUrl: string,
): string {
  return lookupReferralUrl(domain) ?? defaultUrl;
}
