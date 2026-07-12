import type { CatalogTool } from "@/lib/catalog/types";
import { normalizeCategoryKey } from "@/lib/catalog/category-labels";
import { getPlatformContent } from "@/lib/catalog/content";
import { resolveDisplayName } from "@/lib/catalog/display-name";

type DescPair = { short: string; long: string };

/** Legacy hand-written entries for categories not yet in content registry */
const LEGACY_DESCRIPTIONS: Record<string, DescPair> = {
  phantom: {
    short:
      "Кошелёк Solana и не только — быстрый вход в dApps, свапы и NFT без лишних шагов.",
    long:
      "Phantom — дефолт для Solana-экосистемы. Удобный UX, встроенный свап, мало трения. Если работаешь с SOL — почти наверняка уже знаешь.",
  },
  metamask: {
    short:
      "Классический EVM-кошелёк в браузере — подключаешься к dApps на Ethereum и L2.",
    long:
      "MetaMask — старый знакомый Web3. Не самый красивый, зато принимают везде. Для EVM-сетей всё ещё базовый выбор.",
  },
  jupiter: {
    short:
      "Агрегатор свапов на Solana — лучший курс по DEX внутри экосистемы SOL.",
    long:
      "Jupiter на Solana — как 1inch на EVM. Один интерфейс, много маршрутов. Если торгуешь на Solana — почти обязателен.",
  },
  "1inch": {
    short:
      "Агрегатор DEX — ищет лучший маршрут свапа по куче площадок за один клик.",
    long:
      "1inch экономит на slippage: собирает ликвидность с разных DEX. Удобно, когда не хочешь вручную сравнивать Uniswap, Curve и остальных.",
  },
  nansen: {
    short:
      "Ончейн-аналитика и метки кошельков — смотришь, куда двигаются «умные» деньги.",
    long:
      "Nansen — для ресёрча: labeled wallets, потоки, алерты. Не для новичка, но если копаешь ончейн — сильный инструмент.",
  },
  tradingview: {
    short:
      "Графики и индикаторы — смотришь рынок, рисуешь уровни, не только в терминале биржи.",
    long:
      "TradingView — стандарт для чартов. Биржи, акции, крипта. Если анализируешь всерьёз — почти наверняка уже открываешь его.",
  },
  cursor: {
    short:
      "IDE с ИИ внутри — пишешь код, модель дописывает контекст и правки по проекту.",
    long:
      "Cursor — VS Code + мощный AI-ассистент. Для вайбкодинга и реальных проектов сейчас один из топ-выборов.",
  },
  claude: {
    short:
      "Чат и API от Anthropic — силён в коде, длинных текстах и аккуратных ответах.",
    long:
      "Claude часто берут для ресёрча, кода и документов. Конкурент ChatGPT, но с другим «характером» — меньше воды, больше структуры.",
  },
  openai: {
    short:
      "ChatGPT и экосистема OpenAI — универсальный старт под текст, код и картинки.",
    long:
      "OpenAI — база для многих: GPT-4, Codex, DALL·E. Не единственный выбор, но если нужна одна подписка «на всё» — логичный кандидат.",
  },
  hetzner: {
    short:
      "VPS и железо без наценки за бренд — нормальный хостинг под ноды, ботов и проекты.",
    long:
      "Hetzner — рабочий хостинг для тех, кому не нужен AWS-marketing. Дешевле многих, стабильный, EU/US дата-центры.",
  },
  adspower: {
    short:
      "Антидetect-браузер под мультиаккаунты — отдельные профили, отпечатки, прокси.",
    long:
      "AdsPower — из стандартов для ферм аккаунтов и airdrop-активности. Настраиваешь профили, не смешиваешь куки и отпечатки.",
  },
  galxe: {
    short:
      "Quest-платформа — проходишь задания, получаешь NFT и роли под будущие дропы.",
    long:
      "Galxe — must-have для on-chain квестов. Проекты гоняют активность, ты собираешь OAT и роли. Airdrop-охота без Galxe редко обходится.",
  },
  bestchange: {
    short:
      "Мониторинг обменников — сравниваешь курс фиат ↔ крипта без ручного обхода сайтов.",
    long:
      "BestChange — когда нужен фиат или нестандартный обмен. Агрегирует курсы проверенных обменников, экономит время на сравнении.",
  },
  polymarket: {
    short:
      "Рынок предсказаний на блокчейне — ставишь на исход событий, не на тикер BTC.",
    long:
      "Polymarket — prediction markets в крипте. Политика, спорт, макро. Другая логика, чем spot-торговля, но ликвидность уже серьёзная.",
  },
  "ether-fi": {
    short:
      "Liquid restaking на Ethereum — stETH-подобная механика с дополнительным yield-слоем.",
    long:
      "ether.fi — restaking и LRT-токены. Для тех, кто уже в ETH-staking и хочет ещё один слой доходности (и риска).",
  },
};

const CATEGORY_SHORT: Record<string, string[]> = {
  DeFi: [
    "{name} — DeFi-протокол on-chain: lending, bridge или yield без классического посредника.",
    "{name} — dApp на {domain}: подключил кошелёк — взаимодействуешь со смарт-контрактами.",
    "{name} — on-chain сервис в категории DeFi, не биржа и не кошелёк.",
  ],
  Кошельки: [
    "{name} — кошелёк для хранения и подписи транзакций. Без него в Web3 некуда.",
    "{name} — non-custodial: ключи у тебя, ответственность тоже.",
    "{name} — подключаешься к dApps, отправляешь токены, хранишь seed offline.",
  ],
  "Аналитика и данные": [
    "{name} — данные и ончейн-метрики, не только свеча на TradingView.",
    "{name} — ресёрч-инструмент: дашборды, алерты, labeled wallets.",
    "{name} — аналитика для решений, а не для галочки в закладках.",
  ],
  Нейросети: [
    "{name} — AI под конкретную задачу: текст, код, картинки или автоматизация.",
    "{name} — нейросервис из каталога, не «топ-100 списком из Telegram».",
    "{name} — инструмент ИИ на {domain}, добавил чтобы было под рукой.",
  ],
  Инструменты: [
    "{name} — инфра: VPS, прокси, антидетект или софт под рутину.",
    "{name} — рабочий инструмент «под капотом», не для хайпа.",
    "{name} — без этого Web3-ферма или проект часто не едет.",
  ],
  Сервисы: [
    "{name} — сервис вокруг крипты: обмен, карты, обучение.",
    "{name} — не биржа, но в стеке пригодится.",
    "{name} — вспомогательная площадка на {domain}.",
  ],
  Web3: [
    "{name} — ранний Web3: L2, квесты, testnet — DYOR.",
    "{name} — экосистемный проект, может выстрелить, может нет.",
    "{name} — on-chain активность: роли, поинты, иногда дроп.",
  ],
  Прочее: [
    "{name} — сервис на {domain}, сохранил чтобы не искать в «топах».",
    "{name} — добавил в каталог, потому что встречается в рабочем стеке.",
    "{name} — ещё одна ссылка в общем списке.",
  ],
};

const CATEGORY_LONG_SUFFIX: Record<string, string> = {
  DeFi:
    "Перед крупной суммой — проверь контракт, аудит и риски impermanent loss / exploit.",
  Кошельки:
    "Seed-фразу никому не показывай. Официальный сайт — только из этой ссылки или закладок.",
  Нейросети:
    "Free tier у многих хватает для старта — не обязательно платить за всё сразу.",
  Инструменты:
    "Для ферм и инфры смотри ещё раздел «Тир-лист» — там приоритетные площадки.",
  Web3:
    "Testnet и quest ≠ mainnet-деньги. Не путай игровую активность с реальным депозитом.",
};

function hashPick(slug: string, length: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h + slug.charCodeAt(i) * (i + 1)) % length;
  }
  return h;
}

function fillTemplate(template: string, tool: CatalogTool): string {
  const name = resolveDisplayName(tool.name, tool.domain);
  return template
    .replaceAll("{name}", name)
    .replaceAll("{domain}", tool.domain);
}

export function buildShortDescription(tool: CatalogTool): string {
  if (tool.description?.trim()) return tool.description.trim();

  const curated = getPlatformContent(tool.slug);
  if (curated) return curated.short;

  const legacy = LEGACY_DESCRIPTIONS[tool.slug];
  if (legacy) return legacy.short;

  const category = normalizeCategoryKey(tool.category) ?? "Прочее";
  const templates = CATEGORY_SHORT[category] ?? CATEGORY_SHORT["Прочее"]!;
  return fillTemplate(templates[hashPick(tool.slug, templates.length)]!, tool);
}

export function buildLongDescription(tool: CatalogTool): string {
  if (tool.description?.trim()) return tool.description.trim();

  const curated = getPlatformContent(tool.slug);
  if (curated) return curated.long;

  const legacy = LEGACY_DESCRIPTIONS[tool.slug];
  if (legacy) return legacy.long;

  const short = buildShortDescription(tool);
  const category = normalizeCategoryKey(tool.category) ?? "";
  const suffix = CATEGORY_LONG_SUFFIX[category];
  if (suffix) return `${short} ${suffix}`;
  return `${short} Открыть можно напрямую на ${tool.domain} — ссылка в карточке.`;
}
