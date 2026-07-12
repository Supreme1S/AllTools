export const SITE_NAME = "AllTools";

export const CATEGORIES: { value: string; label: string }[] = [
  { value: "exchange", label: "Биржи" },
  { value: "instant_exchange", label: "Обменники" },
  { value: "wallet", label: "Кошельки" },
  { value: "bridge", label: "Бриджи" },
  { value: "analytics", label: "Аналитика" },
  { value: "card_payment", label: "Карты и платежи" },
  { value: "dex_aggregator", label: "DEX-агрегаторы" },
];

export const TIER_CONFIG: Record<string, number> = {
  S: 80,
  A: 70,
  B: 60,
  C: 45,
  D: 0,
};

export const TIER_ORDER = ["S", "A", "B", "C", "D"] as const;

export const TIER_COLORS: Record<
  string,
  { ring: string; bg: string; border: string; barGradient: string; letter: string; chevron: string; gradFrom: string; gradTo: string; glow: string }
> = {
  S: {
    ring: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/30",
    barGradient: "from-red-400 to-[#0a0a0a]",
    letter: "text-white",
    chevron: "text-red-400",
    gradFrom: "#ef4444",
    gradTo: "#0a0a0a",
    glow: "rgba(239,68,68,0.18)",
  },
  A: {
    ring: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    barGradient: "from-orange-400 to-[#0a0a0a]",
    letter: "text-white",
    chevron: "text-orange-400",
    gradFrom: "#fb923c",
    gradTo: "#0a0a0a",
    glow: "rgba(251,146,60,0.18)",
  },
  B: {
    ring: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
    barGradient: "from-yellow-400 to-[#0a0a0a]",
    letter: "text-white",
    chevron: "text-yellow-400",
    gradFrom: "#facc15",
    gradTo: "#0a0a0a",
    glow: "rgba(250,204,21,0.18)",
  },
  C: {
    ring: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    barGradient: "from-blue-400 to-[#0a0a0a]",
    letter: "text-white",
    chevron: "text-blue-400",
    gradFrom: "#60a5fa",
    gradTo: "#0a0a0a",
    glow: "rgba(96,165,250,0.18)",
  },
  D: {
    ring: "text-zinc-500",
    bg: "bg-zinc-500/10",
    border: "border-zinc-500/30",
    barGradient: "from-zinc-400 to-[#0a0a0a]",
    letter: "text-white",
    chevron: "text-zinc-400",
    gradFrom: "#a1a1aa",
    gradTo: "#0a0a0a",
    glow: "rgba(161,161,170,0.18)",
  },
};

export const CUSTODY_TYPES = [
  { value: "non-custodial", label: "Некастодиальный" },
  { value: "custodial", label: "Кастодиальный" },
  { value: "hybrid", label: "Гибридный" },
];

export const IMPACT_COLORS: Record<number, string> = {
  1: "bg-zinc-500",
  2: "bg-blue-400",
  3: "bg-yellow-400",
  4: "bg-orange-400",
  5: "bg-red-400",
};

export const HUB_CARD_WEIGHTS: Record<string, number> = {
  "/tools": 5,
  "/tierlist": 4,
  "/ai": 3,
  "/guides": 2,
  "/more": 1,
};

export const NAV_ITEMS = [
  {
    href: "/tools",
    label: "Каталог",
    description: "900+ платформ: биржи, DeFi, кошельки, AI, антидетект, VPS и сервисы",
  },
  {
    href: "/tierlist",
    label: "Тир-лист",
    description: "Приоритетные площадки по уровням S–D: где торговать, хранить и работать",
  },
  {
    href: "/ai",
    label: "ИИ",
    description: "Нейросети под задачу: чаты, код, картинки, видео, голос и продуктивность",
  },
  {
    href: "/guides",
    label: "Гайды",
    description: "Пошаговые инструкции, разборы сервисов и практические схемы",
  },
  {
    href: "/more",
    label: "Ещё",
    description: "FAQ, битва проектов, чекер дропов, калькулятор трейдера и новости",
  },
] as const;

export const HUB_CARDS: {
  slug: string;
  title: string[];
  subtitle: string;
  size: string;
  cardClass: string;
  cardDelay: string;
  weight: number;
}[] = [
  {
    slug: "/tools",
    title: ["Каталог"],
    subtitle:
      "900+ сервисов — биржи, DeFi, кошельки, AI, инфра. Поиск, фильтры по категориям, ссылки на каждый протокол.",
    size: "lg",
    cardClass: "hub-card-tools",
    cardDelay: "50ms",
    weight: HUB_CARD_WEIGHTS["/tools"],
  },
  {
    slug: "/tierlist",
    title: ["Тир-лист"],
    subtitle:
      "Приоритетные площадки по уровням S–D: биржи, perp DEX, инфраструктура и сервисы — что смотреть в первую очередь.",
    size: "md",
    cardClass: "hub-card-tierlist",
    cardDelay: "0.2s",
    weight: HUB_CARD_WEIGHTS["/tierlist"],
  },
  {
    slug: "/ai",
    title: ["ИИ"],
    subtitle:
      "Нейросети под задачу: чаты, IDE, картинки, видео, голос. Топ-выбор, гайды по выбору и полный каталог AI-сервисов.",
    size: "md",
    cardClass: "hub-card-ai",
    cardDelay: "0.32s",
    weight: HUB_CARD_WEIGHTS["/ai"],
  },
  {
    slug: "/guides",
    title: ["Гайды"],
    subtitle:
      "Пошаговые инструкции и разборы: биржи, кошельки, DeFi и рабочие сервисы — как пользоваться, а не просто ссылка.",
    size: "md",
    cardClass: "hub-card-guides",
    cardDelay: "0.42s",
    weight: HUB_CARD_WEIGHTS["/guides"],
  },
  {
    slug: "/more",
    title: ["Ещё"],
    subtitle:
      "FAQ, битва проектов, чекер дропов, калькулятор трейдера и новости индустрии.",
    size: "wide",
    cardClass: "hub-card-extras",
    cardDelay: "0.52s",
    weight: HUB_CARD_WEIGHTS["/more"],
  },
];

export const COMPARISON_METRICS = [
  { key: "category", label: "Категория" },
  { key: "custody_type", label: "Кастоди" },
  { key: "supports_fiat", label: "Фиат" },
  { key: "supports_p2p", label: "P2P" },
  { key: "website_url", label: "Сайт" },
];

export const GUIDE_CATEGORIES = [
  { value: "strategy", label: "Тактики" },
  { value: "review", label: "Разборы платформ" },
  { value: "security", label: "Защита" },
  { value: "beginner", label: "С нуля" },
];
