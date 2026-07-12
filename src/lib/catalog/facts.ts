import { normalizeCategoryKey } from "@/lib/catalog/category-labels";
import { getPlatformContent } from "@/lib/catalog/content";
import type { CatalogTool } from "@/lib/catalog/types";
import { resolveDisplayName } from "@/lib/catalog/display-name";

export type InsightKind = "fact" | "tip" | "warning" | "highlight";

export interface ProtocolInsight {
  kind: InsightKind;
  text: string;
}

export interface ProtocolDeepDive {
  tagline: string;
  insights: ProtocolInsight[];
}

/** Legacy deep dives for non-exchange categories until content registry expands */
const LEGACY_DEEP_DIVES: Record<
  string,
  { tagline?: string; insights: ProtocolInsight[] }
> = {
  phantom: {
    tagline: "Дефолтный кошелёк Solana — как MetaMask, но для SOL-экосистемы.",
    insights: [
      {
        kind: "highlight",
        text: "Phantom — #1 по UX на Solana: встроенный swap через Jupiter, NFT, Ledger — большинство dApps ожидают именно его. Поддержка Ethereum и Polygon добавлена позже, но Solana остаётся «родной» сетью.",
      },
      {
        kind: "fact",
        text: "Swap внутри кошелька маршрутизируется через Jupiter — на крупных суммах сравни quote с jup.ag напрямую.",
      },
      {
        kind: "warning",
        text: "Фишинг через fake mint / approve — классика. Подписывай только то, что понимаешь; официальный сайт — phantom.app.",
      },
    ],
  },
  jupiter: {
    tagline: "Маршрутизатор Solana — без него свап на SOL как езда без GPS.",
    insights: [
      {
        kind: "highlight",
        text: "Jupiter агрегирует Raydium, Orca, Meteora и десятки других пулов — один UI, лучший маршрут, часто экономия 1–3% на том же объёме. Limit orders и DCA underrated для SOL-ритейла.",
      },
      {
        kind: "fact",
        text: "JUP airdrop стал эталоном дискуссии про fair distribution — активные swappers получили заметные аллокации.",
      },
    ],
  },
  "1inch": {
    tagline: "Агрегатор EVM — когда не хочешь вручную сравнивать дюжину DEX.",
    insights: [
      {
        kind: "highlight",
        text: "1inch Pathfinder ищет split routes — часть сделки через Uniswap, часть через Curve, итог лучше любого single-DEX. Fusion mode — gasless swaps для пользователя, solver network платит gas.",
      },
    ],
  },
  openai: {
    tagline: "ChatGPT и экосystem — baseline AI для текста, кода и картинок.",
    insights: [
      {
        kind: "highlight",
        text: "GPT-4o / o-series — default для миллионов; API powers пол-инternet'а AI-продуктов под капотом. Custom GPTs и Projects underrated для повторяемых workflow.",
      },
      {
        kind: "tip",
        text: "Не заливай private keys и corporate secrets в публичные чаты — logs и training policy vary.",
      },
    ],
  },
  cursor: {
    tagline: "VS Code + AI — IDE, которая реально меняет скорость разработки.",
    insights: [
      {
        kind: "highlight",
        text: "Composer / Agent mode — multi-file edits за один запрос; многие перешли с «чат + копипaste» на agentic flow.",
      },
      {
        kind: "tip",
        text: "Подключай свой API key (Anthropic/OpenAI), если упираешься в лимиты подписки — часто выгоднее на heavy usage.",
      },
    ],
  },
};

function platformToInsights(content: ReturnType<typeof getPlatformContent>): ProtocolInsight[] {
  if (!content) return [];
  const insights: ProtocolInsight[] = [
    { kind: "highlight", text: content.highlight },
  ];
  for (const text of content.facts ?? []) {
    insights.push({ kind: "fact", text });
  }
  for (const text of content.tips ?? []) {
    insights.push({ kind: "tip", text });
  }
  for (const text of content.warnings ?? []) {
    insights.push({ kind: "warning", text });
  }
  return insights;
}

function domainSpecificInsight(tool: CatalogTool): ProtocolInsight | null {
  const domain = tool.domain.toLowerCase();
  if (domain.includes("testnet")) {
    return {
      kind: "warning",
      text: "Testnet-домен — не mainnet. Не отправляй реальные активы; токены здесь без рыночной стоимости.",
    };
  }
  return null;
}

function fallbackInsights(tool: CatalogTool): ProtocolInsight[] {
  const name = resolveDisplayName(tool.name, tool.domain);
  const category = normalizeCategoryKey(tool.category) ?? "Прочее";
  const insights: ProtocolInsight[] = [
    {
      kind: "highlight",
      text: `${name} — ${category}. Рабочая ссылка на ${tool.domain}; перед первым использованием проверь официальный сайт и актуальные комиссии/лимиты.`,
    },
  ];

  const domainInsight = domainSpecificInsight(tool);
  if (domainInsight) insights.push(domainInsight);

  if (tool.enrichment?.tvl) {
    insights.push({
      kind: "fact",
      text: `TVL по DefiLlama: ~$${Math.round(tool.enrichment.tvl / 1e6)}M — ориентир ликвидности, не гарантия безопасности.`,
    });
  }

  return insights.slice(0, 4);
}

export function buildProtocolDeepDive(tool: CatalogTool): ProtocolDeepDive {
  const curated = getPlatformContent(tool.slug);
  if (curated) {
    return {
      tagline: curated.tagline,
      insights: platformToInsights(curated),
    };
  }

  const legacy = LEGACY_DEEP_DIVES[tool.slug];
  if (legacy) {
    return {
      tagline:
        legacy.tagline ??
        `${resolveDisplayName(tool.name, tool.domain)} — что стоит знать до первого клика.`,
      insights: legacy.insights,
    };
  }

  const name = resolveDisplayName(tool.name, tool.domain);
  return {
    tagline: `${name} — краткий разбор перед первым депозитом, подключением или регистрацией.`,
    insights: fallbackInsights(tool),
  };
}
