const TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "ref",
  "referral",
  "invite",
  "invite_code",
  "roistat",
  "roistat_referrer",
  "af",
  "flow",
]);

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function normalizeName(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9а-яё +.-]/gi, "")
    .trim();
}

export function canonicalUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl);
    url.hash = "";
    url.hostname = url.hostname.replace(/^www\./, "").toLowerCase();

    for (const key of [...url.searchParams.keys()]) {
      if (TRACKING_PARAMS.has(key.toLowerCase())) {
        url.searchParams.delete(key);
      }
    }

    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return url.toString();
  } catch {
    return rawUrl.trim();
  }
}

const REFERRAL_QUERY_PARAM = /^(ref|referral|invite|inviter|aff|clac|utm_|roistat|flow)/i;

const REFERRAL_PATH =
  /^\/(r|ref|refer|referral|invite|signup|register|join|claim|pricing|share|welcome|auth)(\/|$)/i;

function hasReferralQuery(url: URL): boolean {
  for (const key of url.searchParams.keys()) {
    const lower = key.toLowerCase();
    if (REFERRAL_QUERY_PARAM.test(lower)) return true;
    if (lower.includes("referral") || lower.includes("invite") || lower.includes("inviter")) {
      return true;
    }
  }
  return false;
}

function hasReferralPath(pathname: string): boolean {
  return (
    REFERRAL_PATH.test(pathname) ||
    pathname.includes("/refer/") ||
    pathname.includes("/referral") ||
    pathname.includes("/invite") ||
    pathname.includes("/share/") ||
    pathname.includes("/double-invite")
  );
}

export function cleanWebsiteUrl(rawUrl: string): string {
  try {
    const url = new URL(canonicalUrl(rawUrl));
    const segments = url.pathname.split("/").filter(Boolean);

    for (const key of [...url.searchParams.keys()]) {
      const lower = key.toLowerCase();
      if (
        REFERRAL_QUERY_PARAM.test(lower) ||
        lower.includes("referral") ||
        lower.includes("invite") ||
        lower.includes("inviter")
      ) {
        url.searchParams.delete(key);
      }
    }

    if ((segments.length > 0 && hasReferralPath(url.pathname)) || hasReferralQuery(url)) {
      url.pathname = "/";
      url.search = "";
    }

    if (url.hostname.startsWith("share.") && segments.length >= 1) {
      url.hostname = url.hostname.replace(/^share\./, "");
      url.pathname = "/";
      url.search = "";
    }

    if (url.hostname.startsWith("referral.")) {
      url.hostname = url.hostname.replace(/^referral\./, "");
      url.pathname = "/";
      url.search = "";
    }

    if (url.pathname.includes("/pricing/")) {
      url.pathname = url.pathname.replace(/\/pricing\/[^/]+$/i, "/pricing");
    }

    const tail = url.pathname.split("/").filter(Boolean).at(-1) ?? "";
    if (/^(maxy|crypton)$/i.test(tail)) {
      url.pathname = url.pathname.replace(/\/[^/]+$/, "") || "/";
    }

    return url.toString().replace(/\/$/, "") || `${url.protocol}//${url.host}`;
  } catch {
    return rawUrl.trim();
  }
}

export function extractDomain(rawUrl: string): string {
  try {
    return new URL(rawUrl).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return slugify(rawUrl);
  }
}

export function domainsMatch(a: string, b: string): boolean {
  const da = extractDomain(a);
  const db = extractDomain(b);
  return da === db;
}

export function namesMatch(a: string, b: string): boolean {
  const na = normalizeName(a);
  const nb = normalizeName(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  return na.replace(/\s+/g, "") === nb.replace(/\s+/g, "");
}
