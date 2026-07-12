export type LevelId = "beginner" | "intermediate" | "advanced";

export type CategoryId =
  | "crypto"
  | "defi"
  | "ai"
  | "analytics"
  | "security"
  | "trading";

export interface TrainingResource {
  id: string;
  title: string;
  description: string;
  url: string;
  domain: string;
  level: LevelId;
  category: CategoryId;
  sourceType: "academy" | "wiki" | "course" | "docs" | "youtube";
  lang: "ru" | "en" | "multi";
  free: boolean;
  recommended?: boolean;
}

export const LEVEL_LABELS: Record<LevelId, string> = {
  beginner: "Новичок",
  intermediate: "Опытный",
  advanced: "Продвинутый",
};

export const LEVEL_SYMBOLS: Record<LevelId, string> = {
  beginner: "graduation-cap",
  intermediate: "trending-up",
  advanced: "zap",
};

export const LEVEL_DESCRIPTIONS: Record<LevelId, string> = {
  beginner: "Первые шаги в крипте и ИИ — от кошелька до первых покупок",
  intermediate: "DeFi, аналитика и тактики — для тех, кто уже в теме",
  advanced: "Арбитраж, аудит безопасности и AI-билдинг — для профи",
};

export const LEVEL_COLORS: Record<LevelId, { gradFrom: string; gradTo: string; glow: string }> = {
  beginner: { gradFrom: "#3b82f6", gradTo: "#0a0a0a", glow: "rgba(59,130,246,0.18)" },
  intermediate: { gradFrom: "#f59e0b", gradTo: "#0a0a0a", glow: "rgba(245,158,11,0.18)" },
  advanced: { gradFrom: "#ef4444", gradTo: "#0a0a0a", glow: "rgba(239,68,68,0.18)" },
};

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  crypto: "Крипта",
  defi: "DeFi",
  ai: "ИИ",
  analytics: "Аналитика",
  security: "Безопасность",
  trading: "Тактики",
};

export const SOURCE_TYPE_LABELS: Record<TrainingResource["sourceType"], string> = {
  academy: "Академия",
  wiki: "Wiki",
  course: "Курс",
  docs: "Документация",
  youtube: "YouTube",
};

export const LANG_LABELS: Record<TrainingResource["lang"], string> = {
  ru: "RU",
  en: "EN",
  multi: "Multi",
};

/** Each level's available categories (some categories don't exist at every level) */
export const LEVEL_CATEGORY_ORDER: Record<LevelId, CategoryId[]> = {
  beginner: ["crypto", "ai", "security"],
  intermediate: ["defi", "ai", "analytics", "trading", "security"],
  advanced: ["defi", "ai", "analytics", "trading", "security"],
};

export const trainingResources: TrainingResource[] = [
  // ════════════ НОВИЧОК ════════════
  {
    id: "tr-beginner-01",
    title: "Binance Academy",
    description:
      "Крупнейшая бесплатная академия в индустрии: от «что такое блокчейн» до DeFi и ончейн-анализа. Статьи, видео, глоссарий — на русском.",
    url: "https://academy.binance.com/ru",
    domain: "academy.binance.com",
    level: "beginner",
    category: "crypto",
    sourceType: "academy",
    lang: "multi",
    free: true,
    recommended: true,
  },
  {
    id: "tr-beginner-02",
    title: "Школа криптовалют Solodko",
    description:
      "28 уроков, 5 уровней сложности — от «что такое биткоин» до продвинутого анализа рынка. На русском, без воды, полностью бесплатно.",
    url: "https://solodkofv.ru/shkola-kriptovalyut/",
    domain: "solodkofv.ru",
    level: "beginner",
    category: "crypto",
    sourceType: "course",
    lang: "ru",
    free: true,
  },
  {
    id: "tr-beginner-03",
    title: "Bankless Academy",
    description:
      "Бесплатные интерактивные курсы по Web3: кошельки, DeFi, L2, DAO. С практическими заданиями и NFT-сертификатами. Английский.",
    url: "https://app.banklessacademy.com/",
    domain: "app.banklessacademy.com",
    level: "beginner",
    category: "crypto",
    sourceType: "academy",
    lang: "en",
    free: true,
  },
  {
    id: "tr-beginner-04",
    title: "Whiteboard Crypto",
    description:
      "Сложные крипто-концепции объясняются белым маркером на доске: DeFi, блокчейн, токеномика. Визуально, понятно, без терминов.",
    url: "https://www.youtube.com/@WhiteboardCrypto",
    domain: "youtube.com",
    level: "beginner",
    category: "crypto",
    sourceType: "youtube",
    lang: "en",
    free: true,
  },
  {
    id: "tr-beginner-05",
    title: "CoinMarketCap Alexandria",
    description:
      "Образовательный раздел от CoinMarketCap: статьи о криптовалютах, DeFi, трейдинге. Словарь терминов и понятные гайды.",
    url: "https://coinmarketcap.com/alexandria/",
    domain: "coinmarketcap.com",
    level: "beginner",
    category: "crypto",
    sourceType: "wiki",
    lang: "en",
    free: true,
  },
  {
    id: "tr-beginner-06",
    title: "Next.js Learn",
    description:
      "Официальный бесплатный курс Next.js от Vercel. 16 глав с практическими заданиями: роутинг, данные, аутентификация. С нуля.",
    url: "https://nextjs.org/learn",
    domain: "nextjs.org",
    level: "beginner",
    category: "ai",
    sourceType: "course",
    lang: "en",
    free: true,
  },
  {
    id: "tr-beginner-07",
    title: "Cursor IDE — первые шаги",
    description:
      "Официальные гайды Cursor: установка, AI-автодополнение, Tab, Cmd+K. Первый AI-IDE — начать билдить можно за час.",
    url: "https://docs.cursor.com/get-started",
    domain: "docs.cursor.com",
    level: "beginner",
    category: "ai",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-beginner-08",
    title: "Revoke.cash — основы безопасности",
    description:
      "Как проверять и отзывать токен-разрешения. Защита от wallet drainer-атак. Простым языком, с картинками.",
    url: "https://revoke.cash/learn",
    domain: "revoke.cash",
    level: "beginner",
    category: "security",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-beginner-09",
    title: "Ledger Academy",
    description:
      "Всё о холодном хранении крипты: как работают аппаратные кошельки, seed-фразы, защита от фишинга. Простым языком.",
    url: "https://www.ledger.com/academy",
    domain: "ledger.com",
    level: "beginner",
    category: "security",
    sourceType: "academy",
    lang: "en",
    free: true,
  },
  {
    id: "tr-beginner-10",
    title: "Bybit Learn",
    description:
      "Структурированная торговая академия: от спот-трейдинга и японских свечей до фьючерсов, индикаторов и риск-менеджмента. На русском.",
    url: "https://learn.bybit.com/",
    domain: "learn.bybit.com",
    level: "beginner",
    category: "trading",
    sourceType: "academy",
    lang: "multi",
    free: true,
  },
  {
    id: "tr-beginner-11",
    title: "Investopedia: Crypto",
    description:
      "Энциклопедия инвестиций и трейдинга: криптовалюты, блокчейн, технический анализ, свечи, индикаторы. Статьи с картинками, простым языком.",
    url: "https://www.investopedia.com/cryptocurrency-4427699",
    domain: "investopedia.com",
    level: "beginner",
    category: "trading",
    sourceType: "wiki",
    lang: "en",
    free: true,
  },

  // ════════════ ОПЫТНЫЙ ════════════
  {
    id: "tr-inter-01",
    title: "Uniswap Docs",
    description:
      "Официальная документация Uniswap: как работают AMM, пулы ликвидности, hooks в V4. От базовых концепций до тонкостей.",
    url: "https://docs.uniswap.org/",
    domain: "docs.uniswap.org",
    level: "intermediate",
    category: "defi",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-02",
    title: "Aave Documentation",
    description:
      "Официальная документация Aave — крупнейшего лендинг-протокола. Health factor, liquidation, flash loans — с нуля.",
    url: "https://docs.aave.com/hub/",
    domain: "docs.aave.com",
    level: "intermediate",
    category: "defi",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-03",
    title: "DeFi Llama Wiki",
    description:
      "Документация DeFi Llama: как читать TVL, сравнивать протоколы, анализировать доходность. Крупнейший DeFi-агрегатор.",
    url: "https://defillama.com/docs",
    domain: "defillama.com",
    level: "intermediate",
    category: "defi",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-04",
    title: "Finematics",
    description:
      "Анимированные объяснения DeFi-механик: AMM, лендинг, ликвидный стейкинг, Layer 2. Визуально, понятно, без формул.",
    url: "https://www.youtube.com/@Finematics",
    domain: "youtube.com",
    level: "intermediate",
    category: "defi",
    sourceType: "youtube",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-05",
    title: "Vercel AI SDK Docs",
    description:
      "Как добавить AI-фичи в приложение: стриминг, function calling, агенты, MCP-интеграция. От простого к сложному.",
    url: "https://sdk.vercel.ai/docs",
    domain: "sdk.vercel.ai",
    level: "intermediate",
    category: "ai",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-06",
    title: "Prompt Engineering Guide",
    description:
      "Полное руководство по промпт-инжинирингу от DAIR.AI: техники, тактики, модели, примеры. Для тех, кто хочет выжать максимум из AI.",
    url: "https://www.promptingguide.ai/",
    domain: "promptingguide.ai",
    level: "intermediate",
    category: "ai",
    sourceType: "wiki",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-07",
    title: "Claude Code Docs",
    description:
      "Интерактивный AI-агент в терминале от Anthropic: установка, IDE-интеграция, best practices. Полное руководство.",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    domain: "docs.anthropic.com",
    level: "intermediate",
    category: "ai",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-08",
    title: "Dune Analytics Docs",
    description:
      "Официальная документация Dune: SQL-запросы к блокчейну, создание дашбордов, визуализация ончейн-данных.",
    url: "https://docs.dune.com/",
    domain: "docs.dune.com",
    level: "intermediate",
    category: "analytics",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-09",
    title: "Token Terminal Docs",
    description:
      "Как анализировать фундаментальные показатели протоколов: выручка, P/E, TVL. Инструмент для инвестора.",
    url: "https://docs.tokenterminal.com/",
    domain: "docs.tokenterminal.com",
    level: "intermediate",
    category: "analytics",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-10",
    title: "Etherscan Information Center",
    description:
      "Гайды по использованию Etherscan: чтение транзакций, проверка смарт-контрактов, отслеживание кошельков.",
    url: "https://info.etherscan.com/",
    domain: "info.etherscan.com",
    level: "intermediate",
    category: "analytics",
    sourceType: "academy",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-11",
    title: "Binance Futures Guide",
    description:
      "Официальный гайд по фьючерсам Binance: типы ордеров, плечо, PnL-калькуляторы, риск-менеджмент. На русском.",
    url: "https://www.binance.com/en/support/faq/binance-futures",
    domain: "binance.com",
    level: "intermediate",
    category: "trading",
    sourceType: "academy",
    lang: "multi",
    free: true,
  },
  {
    id: "tr-inter-12",
    title: "Funding Rate Arbitrage Guide (degen0x)",
    description:
      "Полный гайд по арбитражу фандинг-ставок 2026: delta-neutral стратегии, калькулятор доходности, выбор бирж.",
    url: "https://degen0x.com/learn/funding-rate-arbitrage-guide-2026/",
    domain: "degen0x.com",
    level: "intermediate",
    category: "trading",
    sourceType: "wiki",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-12b",
    title: "Investopedia: Technical Analysis",
    description:
      "Фундаментальный учебник по теханализу: свечные модели, тренды, индикаторы, волны. То, что проходят на CMT Level 1 — в открытом доступе.",
    url: "https://www.investopedia.com/terms/t/technicalanalysis.asp",
    domain: "investopedia.com",
    level: "intermediate",
    category: "trading",
    sourceType: "wiki",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-13",
    title: "Trezor Learn",
    description:
      "Официальная академия Trezor: холодное хранение, open-source безопасность, Multi-share Backup. Для тех, кто серьёзно.",
    url: "https://trezor.io/learn",
    domain: "trezor.io",
    level: "intermediate",
    category: "security",
    sourceType: "academy",
    lang: "en",
    free: true,
  },
  {
    id: "tr-inter-14",
    title: "Gnosis Safe Docs",
    description:
      "Официальная документация Safe — главного мультисиг-стандарта: настройка, sign flow, Guard, делегирование. Защита от единой точки отказа.",
    url: "https://docs.safe.global/",
    domain: "docs.safe.global",
    level: "intermediate",
    category: "security",
    sourceType: "docs",
    lang: "en",
    free: true,
  },

  // ════════════ ПРОДВИНУТЫЙ ════════════
  {
    id: "tr-adv-01",
    title: "Cyfrin Updraft",
    description:
      "96+ часов, 200000+ студентов. Solidity, Foundry, безопасность смарт-контрактов. Индустриальный стандарт, бесплатно.",
    url: "https://updraft.cyfrin.io/",
    domain: "updraft.cyfrin.io",
    level: "advanced",
    category: "defi",
    sourceType: "course",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-02",
    title: "Ethernaut by OpenZeppelin",
    description:
      "Геймифицированное обучение безопасности: взламываешь контракты и учишься на ошибках. От простого к невозможному.",
    url: "https://ethernaut.openzeppelin.com/",
    domain: "ethernaut.openzeppelin.com",
    level: "advanced",
    category: "defi",
    sourceType: "course",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-03",
    title: "Damn Vulnerable DeFi",
    description:
      "Продвинутая DeFi-безопасность на реальных протоколах: flash loans, лендинг, DEX. Для тех, кто прошёл Ethernaut.",
    url: "https://www.damnvulnerabledefi.xyz/",
    domain: "damnvulnerabledefi.xyz",
    level: "advanced",
    category: "defi",
    sourceType: "course",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-04",
    title: "Kaggle + Google 5-Day AI Agents",
    description:
      "Бесплатный курс от Google и Kaggle: vibe coding, AI-агенты, capstone-проект. 1.5M студентов в первом запуске.",
    url: "https://www.kaggle.com/learn-guide/5-day-agents-vibecoding",
    domain: "kaggle.com",
    level: "advanced",
    category: "ai",
    sourceType: "course",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-05",
    title: "Hugging Face AI Agents Course",
    description:
      "От теории до продакшена: smolagents, LangGraph, LlamaIndex. Бесплатно, с сертификатом и лидербордом.",
    url: "https://huggingface.co/learn/agents-course",
    domain: "huggingface.co",
    level: "advanced",
    category: "ai",
    sourceType: "course",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-06",
    title: "DeepLearning.AI Agentic AI (Andrew Ng)",
    description:
      "Легендарный курс от Andrew Ng: reflection, tool use, planning, multi-agent. Бесплатно, Python intermediate.",
    url: "https://www.deeplearning.ai/alpha/courses/agentic-ai/",
    domain: "deeplearning.ai",
    level: "advanced",
    category: "ai",
    sourceType: "course",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-06b",
    title: "Flashbots Docs",
    description:
      "Официальная документация Flashbots: MEV, bundles, order flow, dark pools. Для продвинутых DeFi-трейдеров и билдеров.",
    url: "https://docs.flashbots.net/",
    domain: "docs.flashbots.net",
    level: "advanced",
    category: "trading",
    sourceType: "docs",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-07",
    title: "Messari Research",
    description:
      "Профессиональные исследования крипторынка: аналитика по секторам, квартальные отчёты, governance-обзоры.",
    url: "https://messari.io/research",
    domain: "messari.io",
    level: "advanced",
    category: "analytics",
    sourceType: "academy",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-08",
    title: "The Block Research",
    description:
      "Аналитика и дашборды от The Block: рыночные отчёты, нарративные обзоры, ончейн-метрики — стандарт индустрии.",
    url: "https://www.theblock.co/data",
    domain: "theblock.co",
    level: "advanced",
    category: "analytics",
    sourceType: "academy",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-09",
    title: "SlowMist Security Wiki",
    description:
      "База знаний от топ-компании по блокчейн-безопасности: разборы реальных взломов, типы атак, методички защиты.",
    url: "https://github.com/slowmist/Knowledge-Base",
    domain: "github.com",
    level: "advanced",
    category: "security",
    sourceType: "wiki",
    lang: "en",
    free: true,
  },
  {
    id: "tr-adv-10",
    title: "CertiK Skynet",
    description:
      "Аналитическая платформа безопасности от CertiK: сканер смарт-контрактов, рейтинги протоколов, образовательный раздел.",
    url: "https://skynet.certik.com/",
    domain: "skynet.certik.com",
    level: "advanced",
    category: "security",
    sourceType: "wiki",
    lang: "en",
    free: true,
  },
];
