/** Google favicon CDN — fallback when source has no logo */
export function faviconUrl(domain: string, size = 128): string {
  const clean = domain.replace(/^www\./, "").trim();
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(clean)}&sz=${size}`;
}

export function resolveProtocolIconUrl(
  image: string | null | undefined,
  domain: string,
): string | null {
  const trimmed = image?.trim();
  if (trimmed) return trimmed;
  if (!domain?.trim()) return null;
  return faviconUrl(domain);
}
