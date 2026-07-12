/** Canonical category keys stored in catalog + shown in UI (no parens except tab counts). */
export const CATEGORY_KEYS = {
  CEX: "Биржи CEX",
  DEX: "Биржи DEX",
  DEFI: "DeFi",
  TOOLS: "Инструменты",
  WALLETS: "Кошельки",
  ANALYTICS: "Аналитика и данные",
  SERVICES: "Сервисы",
  AI: "Нейросети",
  WEB3: "Web3",
  OTHER: "Прочее",
} as const;

/** Legacy keys from sources / old catalog.json */
const LEGACY_CATEGORY_MAP: Record<string, string> = {
  "Биржи (CEX)": CATEGORY_KEYS.CEX,
  "DEX / Perp": CATEGORY_KEYS.DEX,
  "Биржи DEX": CATEGORY_KEYS.DEX,
  "DeFi & DApp": CATEGORY_KEYS.DEFI,
  "DeFi и dApps": CATEGORY_KEYS.DEFI,
  "Нейросети (ИИ)": CATEGORY_KEYS.AI,
  "Web3 Projects": CATEGORY_KEYS.WEB3,
  Проекты: CATEGORY_KEYS.WEB3,
  ИИ: CATEGORY_KEYS.AI,
};

export function normalizeCategoryKey(
  category: string | null | undefined,
): string | null {
  if (!category?.trim()) return null;
  const trimmed = category.trim();
  return LEGACY_CATEGORY_MAP[trimmed] ?? trimmed;
}

export function formatCategoryTabLabel(category: string, count: number): string {
  return `${normalizeCategoryKey(category) ?? category} (${count})`;
}

export const CATEGORY_TAB_ORDER: string[] = [
  CATEGORY_KEYS.CEX,
  CATEGORY_KEYS.DEX,
  CATEGORY_KEYS.DEFI,
  CATEGORY_KEYS.TOOLS,
  CATEGORY_KEYS.WALLETS,
  CATEGORY_KEYS.ANALYTICS,
  CATEGORY_KEYS.SERVICES,
  CATEGORY_KEYS.AI,
  CATEGORY_KEYS.WEB3,
  CATEGORY_KEYS.OTHER,
];

export const CATEGORY_HINTS: Partial<Record<string, string>> = {
  [CATEGORY_KEYS.DEX]: "On-chain биржи: spot AMM, perp, orderbook — без KYC",
  [CATEGORY_KEYS.DEFI]: "Lending, bridge, yield и прочие dApps",
  [CATEGORY_KEYS.WEB3]: "Ранние L2, квесты, testnet, airdrop",
};
