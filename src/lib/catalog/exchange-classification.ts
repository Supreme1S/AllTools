import { CATEGORY_KEYS, normalizeCategoryKey } from "@/lib/catalog/category-labels";
import { extractRootDomain, getBrandId } from "@/lib/catalog/brand-merge";

/** Custodial exchanges — whitelist only. */
const CEX_ROOT_DOMAINS = new Set([
  "binance.com",
  "bybit.com",
  "bitget.com",
  "okx.com",
  "kucoin.com",
  "mexc.com",
  "gate.com",
  "gate.io",
  "bingx.com",
  "coinbase.com",
  "kraken.com",
  "huobi.com",
  "htx.com",
  "bitfinex.com",
  "crypto.com",
  "coinw.com",
  "bitmart.com",
  "phemex.com",
  "bitstamp.net",
  "gemini.com",
  "poloniex.com",
  "lbank.com",
  "xt.com",
]);

const CEX_BRAND_IDS = new Set([
  "binance.com",
  "bybit.com",
  "bitget.com",
  "okx.com",
  "kucoin.com",
  "mexc.com",
  "gate",
  "bingx.com",
  "coinbase.com",
  "kraken.com",
  "huobi.com",
  "htx.com",
  "coinw.com",
]);

/** On-chain trading venues for the DEX tab. */
const DEX_EXCHANGE_ROOTS = new Set([
  "asterdex.com",
  "drift.trade",
  "extended.exchange",
  "lighter.xyz",
  "ostium.com",
  "paradex.trade",
  "edgex.exchange",
  "standx.com",
  "sushi.com",
  "hyperliquid.xyz",
  "dydx.exchange",
  "dydx.trade",
  "gmx.io",
  "uniswap.org",
  "pancakeswap.finance",
  "curve.finance",
  "balancer.fi",
  "orca.so",
  "raydium.io",
  "quickswap.exchange",
  "camelot.exchange",
  "traderjoexyz.com",
  "pangolin.exchange",
  "biswap.org",
  "spooky.fi",
  "spiritswap.finance",
  "mdex.com",
  "kyberswap.com",
  "echodex.io",
  "kriya.finance",
  "backpack.exchange",
  "backpack.app",
  "vertexprotocol.com",
  "kwenta.io",
  "mux.network",
  "aevo.xyz",
  "rabbitx.io",
  "apex.exchange",
  "orderly.network",
  "bluefin.io",
  "helixapp.com",
  "injective.com",
  "app.meteora.ag",
  "joe.xyz",
  "platypus.finance",
  "velodrome.finance",
  "aerodrome.finance",
  "baseswap.fi",
  "syncswap.xyz",
  "mute.io",
  "woofi.com",
  "thorswap.finance",
  "01.xyz",
  "spin.fi",
  "particle.trade",
  "ring.exchange",
  "oku.trade",
]);

const DEX_BRAND_IDS = new Set([
  "asterdex",
  "drift",
  "extended",
  "lighter",
  "ostium",
  "paradex",
  "edgex",
  "standx",
  "sushi",
  "hyperliquid",
  "dydx",
  "gmx",
  "uniswap",
  "pancakeswap",
  "curve",
  "balancer",
  "orca",
  "raydium",
  "quickswap",
  "camelot",
  "biswap",
  "mdex",
  "kyberswap",
  "echodex",
  "backpack",
  "pangolin",
  "spooky",
  "traderjoe",
]);

/** Aggregators, bridges, analytics — stay in DeFi / other tabs. */
const NOT_DEX_EXCHANGE_ROOTS = new Set([
  "jup.ag",
  "1inch.io",
  "cow.fi",
  "jumper.exchange",
  "rango.exchange",
  "layerswap.io",
  "bungee.exchange",
  "hop.exchange",
  "dex.guru",
  "matcha.xyz",
  "openocean.finance",
  "paraswap.io",
  "li.fi",
  "socket.tech",
  "stargate.finance",
  "across.to",
  "synapseprotocol.com",
  "gamma.xyz",
  "rubic.exchange",
  "tensor.trade",
  "bebop.xyz",
  "rhino.fi",
]);

const NON_EXCHANGE_NAME_RE =
  /\b(lending|portal|test|nft|marketplace|bridge|vault|earn|stake|insurance)\b/i;

const PERP_DOMAIN_RE =
  /drift\.|paradex\.|lighter\.|ostium\.|edgex\.|hyperliquid\.|gmx\.|asterdex\.|standx\.|extended\.|01\.xyz|particle\.trade|spin\.fi/i;

const PERP_URL_RE = /\/(perp|perps|swap|trade|exchange|futures|derivatives)(\/|$|\?)/i;

function normalizeDomain(domain: string): string {
  return domain.toLowerCase().replace(/^www\./, "");
}

export function isCexExchange(domain: string, name?: string | null): boolean {
  const root = extractRootDomain(normalizeDomain(domain));
  const brandId = getBrandId(domain, name);
  return CEX_ROOT_DOMAINS.has(root) || CEX_BRAND_IDS.has(brandId);
}

export function isDexExchange(
  domain: string,
  name?: string | null,
  websiteUrl?: string | null,
): boolean {
  const normalized = normalizeDomain(domain);
  const root = extractRootDomain(normalized);
  const brandId = getBrandId(domain, name);

  if (NOT_DEX_EXCHANGE_ROOTS.has(root)) return false;
  const nameLower = (name ?? "").toLowerCase();
  if (NON_EXCHANGE_NAME_RE.test(nameLower)) return false;
  if (/lending|portal|test-portal|symbiosis|rhino/i.test(nameLower)) return false;
  if (/lending|portal|test/i.test(normalized) && !DEX_EXCHANGE_ROOTS.has(root)) {
    return false;
  }

  if (DEX_EXCHANGE_ROOTS.has(root) || DEX_BRAND_IDS.has(brandId)) {
    return !isCexExchange(domain, name);
  }

  if (PERP_DOMAIN_RE.test(normalized)) {
    return true;
  }

  if (
    (normalized.startsWith("app.") || normalized.startsWith("pro.")) &&
    PERP_URL_RE.test(websiteUrl ?? "")
  ) {
    return true;
  }

  return false;
}

export function resolveExchangeCategory(input: {
  name: string;
  domain: string;
  website_url?: string | null;
  category?: string | null;
}): string | null {
  const normalized = normalizeCategoryKey(input.category);
  const { name, domain, website_url: websiteUrl } = input;

  if (isCexExchange(domain, name)) {
    return CATEGORY_KEYS.CEX;
  }

  if (isDexExchange(domain, name, websiteUrl)) {
    return CATEGORY_KEYS.DEX;
  }

  if (normalized === CATEGORY_KEYS.CEX || normalized === CATEGORY_KEYS.DEX) {
    return CATEGORY_KEYS.DEFI;
  }

  return normalized;
}

export function applyExchangeCategory<T extends {
  name: string;
  domain: string;
  website_url: string;
  category: string | null;
}>(tool: T): T {
  return {
    ...tool,
    category: resolveExchangeCategory(tool),
  };
}
