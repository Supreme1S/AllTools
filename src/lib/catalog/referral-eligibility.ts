import type { CatalogTool, ReferralStatus } from "@/lib/catalog/types";
import { normalizeCategoryKey } from "@/lib/catalog/category-labels";
import { isExchangeDomain, isKycDomain } from "@/lib/catalog/referrals-config";
import type { ReferralsRegistry } from "@/lib/catalog/types";

/** Domains with known partner / affiliate programs (non-CEX). */
const AFFILIATE_DOMAINS = new Set([
  // Anti-detect & browsers
  "adspower.net",
  "adspower-ru.com",
  "share.adspower.net",
  "dolphin-anty.net",
  "go.gologin.com",
  "multilogin.com",
  "incogniton.com",
  "kameleo.io",
  "octobrowser.net",
  "octobrowser.org",
  "geelark.com",
  "app.geelark.com",
  "morelogin.com",
  "undetectable.io",
  "afina.io",
  "agentx-antidetect.com",
  // SMS & verification
  "5sim.net",
  "onlinesim.io",
  "hero-sms.com",
  "tiger-sms.com",
  "smspool.net",
  "textverified.com",
  // VPS / hosting / cloud
  "aeza.net",
  "hetzner.com",
  "hetzner.cloud",
  "contabo.com",
  "linode.com",
  "ovhcloud.com",
  "netcup.com",
  "cloudzy.com",
  "latitude.sh",
  "4vps.su",
  "hostkey.ru",
  "vdsina.ru",
  "macloud.ru",
  "ufo.hosting",
  "zomro.com",
  // Proxies
  "proxy-seller.com",
  "proxy-store.com",
  "proxy.market",
  "proxyline.net",
  "proxys.io",
  "proxywing.com",
  "proxyshard.com",
  "hydraproxy.com",
  "webshare.io",
  "travchisproxies.com",
  "px6.me",
  // Cards & payments
  "solcard.cc",
  "combo.cards",
  "cincin.cards",
  "kripicard.com",
  "kast.xyz",
  "pyyplbot.com",
  // Security / password managers
  "1password.com",
  "bitwarden.com",
  // Analytics & trading (partner programs)
  "arbitragescanner.io",
  "nansen.ai",
  "pro.nansen.ai",
  "tradingview.com",
  "cryptoquant.com",
  "glassnode.com",
  "santiment.net",
  "platform.arkhamintelligence.com",
  // Marketplaces / accounts
  "accsmarket.com",
  "accsmoll.com",
  "fire-accs.biz",
  "funpay.com",
  "plati.market",
  "lzt.market",
  "dark.shopping",
  "bestchange.com",
  "bestchange.ru",
  "gglead.org",
  // AI SaaS (typical affiliate programs)
  "writesonic.com",
  "frase.io",
  "copymonkey.app",
  "closerscopy.com",
  "easy-peasy.ai",
  "invideo.io",
  "pictory.ai",
  "synthesia.io",
  "elai.io",
  "fliki.ai",
  "lovo.ai",
  "speechify.com",
  "deepl.com",
  "notion.com",
  "cursor.com",
  "replit.com",
  "tabnine.com",
  "codeium.com",
  "elevenlabs.io",
  "beta.elevenlabs.io",
  "midjourney.com",
  "gamma.app",
  "veed.io",
  "murf.ai",
  "hypotenuse.ai",
  "wordhero.co",
  "peppercontent.io",
  "surfer.ai",
  "claude.ai",
  "app.rytr.me",
  // Misc tools
  "amlbot.com",
  "web.amlbot.com",
  "whitebird.io",
  "cielo.finance",
  "tokensniffer.com",
  "rugcheck.xyz",
  "honeypot.is",
  "pocketuniverse.app",
  // DeFi / perps / quest — публичные реф- или affiliate-программы
  "jup.ag",
  "app.gmx.io",
  "gmx.io",
  "gmx-synthetics.io",
  "dydx.exchange",
  "dydx.trade",
  "app.drift.trade",
  "drift.trade",
  "app.aevo.xyz",
  "pendle.finance",
  "galxe.com",
  "layer3.xyz",
  "app.layer3.xyz",
  "polymarket.com",
  "magiceden.io",
  "blur.io",
  "raydium.io",
  "orca.so",
  "friend.tech",
  "1inch.com",
  "app.1inch.io",
  "paraswap.io",
  "matcha.xyz",
  "kyberswap.com",
  "openocean.finance",
  "app.ether.fi",
  "ether.fi",
  "zealy.xyz",
  "intract.io",
  "app.hyperliquid.xyz",
  "hyperliquid.xyz",
  "app.paradex.trade",
  "app.lighter.xyz",
  "app.extended.exchange",
  "pro.edgex.exchange",
  "app.ostium.com",
  "standx.com",
  "asterdex.com",
  "backpack.exchange",
  "kwenta.io",
  "vertexprotocol.com",
  "app.synthetix.io",
  "gains.trade",
  "mux.network",
  "rabbitx.io",
  "vooi.io",
  "orderly.network",
  "bluefin.io",
  "app.pacifica.fi",
  "variational.io",
  "app.trade.xyz",
  "app.reya.xyz",
  "app.hyena.trade",
]);

/** Domains that never have user-facing referral programs. */
const NO_PROGRAM_DOMAINS = new Set([
  "coingecko.com",
  "coinmarketcap.com",
  "defillama.com",
  "dune.com",
  "dexscreener.com",
  "dappradar.com",
  "etherscan.io",
  "bscscan.com",
  "polygonscan.com",
  "arbiscan.io",
  "basescan.org",
  "optimistic.etherscan.io",
  "snowtrace.io",
  "blockscan.com",
  "chainlist.org",
  "revoke.cash",
  "disperse.app",
  "github.com",
  "playwright.dev",
  "selenium.dev",
  "pptr.dev",
  "bit.ly",
  "openai.com",
  "chat.openai.com",
  "aws.amazon.com",
  "academy.binance.com",
  "launchpad.binance.com",
  "crypton-prime.notion.site",
  "banklessdao.substack.com",
  "botometer.osome.iu.edu",
  "crunchbase.com",
  "dlnews.com",
  "pro.x.com",
  "blockchain.com",
  "tonviewer.com",
  "chainscheck.com",
]);

const NO_PROGRAM_NAME = /\b(scan|explorer|faucet|testnet|bridge|airdrop|testnet)\b/i;
const NO_PROGRAM_DOMAIN =
  /(?:^|\.)((?:\w+)?scan|explorer|etherscan|blockscan|faucet|testnet)(?:\.|$)/i;

export type ExportBlockId =
  | "cex"
  | "dex"
  | "dex-agg"
  | "bridges"
  | "lending"
  | "staking"
  | "derivatives"
  | "yield"
  | "nft"
  | "launchpad"
  | "defi-other"
  | "wallets"
  | "analytics"
  | "ai"
  | "services"
  | "tools"
  | "web3";

/** Blocks where referral programs are rare — default no_program unless whitelisted. */
const NO_AFFILIATE_BLOCKS = new Set<ExportBlockId>([
  "bridges",
  "dex",
  "lending",
  "staking",
  "yield",
  "wallets",
]);

/** Blocks where referral is common — default pending (user verifies on site). */
const LIKELY_REFERRAL_BLOCKS = new Set<ExportBlockId>([
  "cex",
  "derivatives",
  "dex-agg",
  "launchpad",
]);

const QUEST_WEB3_PATTERN =
  /galxe|layer3|zealy|intract|quest|guild\.xyz|taskon|rabbithole|cookie3|superfluid|intrinsic/i;

function rootDomain(domain: string): string {
  const parts = domain.toLowerCase().replace(/^www\./, "").split(".");
  return parts.length >= 2 ? parts.slice(-2).join(".") : domain;
}

function domainInSet(domain: string, set: Set<string>): boolean {
  const normalized = domain.toLowerCase().replace(/^www\./, "");
  if (set.has(normalized)) return true;
  const root = rootDomain(normalized);
  return set.has(root);
}

export type ExportBlockInput = {
  category?: string | null;
  name: string;
  domain: string;
  enrichmentCategory?: string | null;
  referral_status?: ReferralStatus;
};

export function resolveExportBlockId(tool: CatalogTool | ExportBlockInput): ExportBlockId {
  const category = normalizeCategoryKey(tool.category ?? "") ?? "";
  const llama = (
    "enrichment" in tool && tool.enrichment?.category
      ? tool.enrichment.category
      : "enrichmentCategory" in tool
        ? tool.enrichmentCategory
        : undefined
  )?.toLowerCase() ?? "";
  const name = tool.name.toLowerCase();
  const domain = tool.domain.toLowerCase();

  if (category === "Биржи CEX" || tool.referral_status === "manual_exchange") {
    return "cex";
  }
  if (category === "Кошельки" || llama === "wallets") return "wallets";
  if (category === "Аналитика и данные") return "analytics";
  if (category === "Нейросети") return "ai";
  if (category === "Сервисы") return "services";
  if (category === "Инструменты") return "tools";

  if (category === "DeFi") {
    if (llama.includes("bridge") || /\bbridge\b|мост/.test(name)) return "bridges";
    if (llama.includes("dex aggregator") || llama.includes("bridge aggregator")) {
      return llama.includes("bridge") ? "bridges" : "dex-agg";
    }
    if (
      llama.includes("dex") ||
      llama === "dexs" ||
      llama === "trading app" ||
      /\b(swap|dex|amm|pool)\b/.test(name) ||
      domain.includes("swap")
    ) {
      return "dex";
    }
    if (llama.includes("lending") || llama.includes("nft lending") || /\b(lend|borrow)\b/.test(name)) {
      return "lending";
    }
    if (
      llama.includes("staking") ||
      llama.includes("liquid staking") ||
      llama.includes("staking pool") ||
      /\b(stake|staking|restake|restaking)\b/.test(name)
    ) {
      return "staking";
    }
    if (
      llama.includes("derivatives") ||
      llama.includes("options") ||
      /\b(perp|perpetual|future|futures|option|derivative)\b/.test(name)
    ) {
      return "derivatives";
    }
    if (llama.includes("yield") || llama.includes("farm")) return "yield";
    if (llama.includes("nft")) return "nft";
    if (llama.includes("launchpad")) return "launchpad";
    return "defi-other";
  }

  return "web3";
}

export function classifyReferralEligibility(
  input: {
    domain: string;
    category?: string | null;
    name?: string;
    blockId?: ExportBlockId;
    enrichmentCategory?: string | null;
  },
  registry: ReferralsRegistry,
): ReferralStatus {
  const domain = input.domain.toLowerCase().replace(/^www\./, "");
  const name = input.name ?? "";

  const entry = registry.entries[domain];
  if (entry?.url) return entry.status ?? "ready";
  // Явный пропуск: нет рефки и не планируем (гео, KYC, не могу зарегаться)
  if (entry?.status === "no_program") return "no_program";

  if (domainInSet(domain, NO_PROGRAM_DOMAINS)) return "no_program";
  if (NO_PROGRAM_NAME.test(name) || NO_PROGRAM_DOMAIN.test(domain)) return "no_program";

  if (isExchangeDomain(domain, registry)) return "manual_exchange";
  if (isKycDomain(domain, registry)) return "manual_kyc";

  const cat = (input.category ?? "").toLowerCase();
  if (cat.includes("бирж") || cat.includes("cex")) return "manual_exchange";

  if (domainInSet(domain, AFFILIATE_DOMAINS)) return "pending";

  const blockId =
    input.blockId ??
    resolveExportBlockId({
      category: input.category,
      name,
      domain,
      enrichmentCategory: input.enrichmentCategory,
    });

  if (LIKELY_REFERRAL_BLOCKS.has(blockId)) {
    return blockId === "cex" ? "manual_exchange" : "pending";
  }

  if (blockId === "nft") return "pending";

  if (blockId === "web3" && QUEST_WEB3_PATTERN.test(`${name} ${domain}`)) {
    return "pending";
  }

  if (blockId && NO_AFFILIATE_BLOCKS.has(blockId)) return "no_program";

  // Analytics: mixed — only whitelisted ones get pending
  if (blockId === "analytics" || cat.includes("аналитик")) {
    return "no_program";
  }

  // defi-other, web3, services/tools/ai without whitelist
  if (blockId === "defi-other" || blockId === "web3") return "no_program";

  return "no_program";
}

export function referralStatusLabel(status: ReferralStatus): string {
  switch (status) {
    case "manual_exchange":
      return "биржа — нужна твоя рефка";
    case "manual_kyc":
      return "рефка после KYC / одобрения";
    case "pending":
      return "рефка возможна — проверь";
    case "no_program":
      return "скорее без рефки";
    case "ready":
      return "рефка уже настроена";
    default:
      return status;
  }
}

export function referralStatusHint(status: ReferralStatus): string {
  switch (status) {
    case "manual_exchange":
    case "manual_kyc":
    case "pending":
      return "заполни your_referral_url";
    case "no_program":
      return "обычная ссылка, рефку не ждём";
    case "ready":
      return "уже в referrals.json";
    default:
      return "";
  }
}
