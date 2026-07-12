import { slugify, normalizeName } from "@/lib/catalog/normalize";

const GENERIC_NAMES = new Set([
  "app",
  "beta",
  "hub",
  "claim",
  "dashboard",
  "register",
  "assets",
  "builders",
  "portal",
  "testnet",
  "account",
  "accounts",
  "web3",
  "share",
  "chat",
  "bridge",
  "docs",
  "swap",
  "trade",
  "staking",
]);

const GENERIC_SUBDOMAINS = new Set([
  "app",
  "portal",
  "hub",
  "claim",
  "dashboard",
  "beta",
  "testnet",
  "accounts",
  "web3",
  "share",
  "chat",
  "bridge",
  "docs",
  "swap",
  "trade",
  "staking",
  "www",
]);

function titleCase(value: string): string {
  if (!value) return value;
  if (value.length <= 4 && value === value.toUpperCase()) return value;
  if (/^\d/.test(value)) return value.toUpperCase();
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

/** Turn `app.ethereal.trade` → `Ethereal`, `binance.com` → `Binance` */
export function deriveNameFromDomain(domain: string): string {
  const clean = domain.toLowerCase().replace(/^www\./, "");
  const parts = clean.split(".").filter(Boolean);
  if (parts.length === 0) return "Unknown";

  let brand = parts[0]!;
  if (GENERIC_SUBDOMAINS.has(parts[0]!) && parts.length >= 3) {
    brand = parts[1]!;
  } else if (parts.length >= 2) {
    brand = parts[parts.length - 2]!;
  }

  brand = brand.replace(/[-_]/g, " ").trim();
  if (!brand) return titleCase(parts[0]!);

  return brand
    .split(/\s+/)
    .map((chunk) => titleCase(chunk))
    .join(" ");
}

export function isGenericDisplayName(name: string): boolean {
  const slug = slugify(normalizeName(name));
  return GENERIC_NAMES.has(slug) || slug.length <= 2;
}

export function resolveDisplayName(name: string, domain: string): string {
  if (!isGenericDisplayName(name)) return name.trim();
  const derived = deriveNameFromDomain(domain);
  if (derived && derived !== "Unknown") return derived;
  return name.trim();
}
