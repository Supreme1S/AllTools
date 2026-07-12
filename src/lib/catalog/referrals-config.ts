import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { ReferralsRegistry } from "@/lib/catalog/types";

const DATA_DIR = path.join(process.cwd(), "data");
const REFERRALS_PATH = path.join(DATA_DIR, "referrals.json");

const DEFAULT_EXCHANGE_DOMAINS = [
  "binance.com",
  "accounts.binance.com",
  "okx.com",
  "www.okx.com",
  "bybit.com",
  "www.bybit.com",
  "kraken.com",
  "coinbase.com",
  "kucoin.com",
  "gate.io",
  "mexc.com",
  "bitget.com",
  "htx.com",
  "bingx.com",
  "backpack.exchange",
  "hyperliquid.xyz",
  "app.hyperliquid.xyz",
];

const DEFAULT_KYC_DOMAINS = [
  "binance.com",
  "accounts.binance.com",
  "okx.com",
  "kraken.com",
  "coinbase.com",
  "bitget.com",
];

export function getReferralsPath() {
  return REFERRALS_PATH;
}

export function emptyRegistry(): ReferralsRegistry {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    entries: {},
    manual_kyc_domains: DEFAULT_KYC_DOMAINS,
    exchange_domains: DEFAULT_EXCHANGE_DOMAINS,
  };
}

export async function readReferralsRegistry(): Promise<ReferralsRegistry> {
  try {
    const raw = await readFile(REFERRALS_PATH, "utf8");
    return JSON.parse(raw) as ReferralsRegistry;
  } catch {
    return emptyRegistry();
  }
}

export async function writeReferralsRegistry(registry: ReferralsRegistry) {
  await mkdir(DATA_DIR, { recursive: true });
  registry.updatedAt = new Date().toISOString();
  await writeFile(REFERRALS_PATH, `${JSON.stringify(registry, null, 2)}\n`, "utf8");
}

export function isExchangeDomain(domain: string, registry: ReferralsRegistry): boolean {
  const normalized = domain.toLowerCase();
  return registry.exchange_domains.some(
    (item) => normalized === item || normalized.endsWith(`.${item}`),
  );
}

export function isKycDomain(domain: string, registry: ReferralsRegistry): boolean {
  const normalized = domain.toLowerCase();
  return registry.manual_kyc_domains.some(
    (item) => normalized === item || normalized.endsWith(`.${item}`),
  );
}
