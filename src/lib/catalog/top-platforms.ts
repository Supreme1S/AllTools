/**
 * Тир-лист: индивидуальные оценки площадок по категориям.
 *
 * Каждая категория имеет собственную шкалу S/A/B/C/D.
 * S в «Кошельки» ≠ S в «Биржи CEX» — это лидер своей ниши.
 * Пустые тиры допустимы: если в категории нет бенчмарка, S не заполняется.
 *
 * S — отраслевой бенчмарк: без компромиссов.
 * A — превосходная площадка с малозначительными оговорками.
 * B — надёжное решение с осознанными компромиссами.
 * C — средний эшелон: для специфических задач.
 * D — нишевый инструмент или зона риска.
 */
import { CATEGORY_KEYS } from "@/lib/catalog/category-labels";

export type TopPlatformEntry = {
  /** Основной домен площадки */
  domain: string;
  /** Альтернативные домены (partner-поддомены, зеркала) */
  aliases?: string[];
  /** Слаг в PlatformContent */
  slug: string;
  tier: "S" | "A" | "B" | "C" | "D";
  /** 1-2 предложения: почему площадка в этом тире */
  tier_rationale: string;
  /** Категория для тир-листа (CATEGORY_KEYS) */
  category: string;
};

const C = CATEGORY_KEYS;

export const TOP_PLATFORM_ENTRIES: TopPlatformEntry[] = [
  // ═══════════════════════════════════════════════════════════════
  // БИРЖИ CEX
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "binance.com",
    slug: "binance",
    tier: "S",
    tier_rationale:
      "Крупнейшая ликвидность в индустрии, минимальные комиссии, глубочайший стакан. Пережила все криптозимы и остаётся эталоном безопасности на уровне кастодиальных бирж.",
    category: C.CEX,
  },
  {
    domain: "bybit.com",
    slug: "bybit",
    tier: "S",
    tier_rationale:
      "Топ-3 мира по объёму бессрочных контрактов, единый торговый счёт, компенсация рекордного взлома ($1.5 млрд) за дни без остановки торгов.",
    category: C.CEX,
  },
  {
    domain: "okx.com",
    slug: "okx",
    tier: "A",
    tier_rationale:
      "Топ-5 по объёму, сильная Web3-экосистема, качественный API. До S не хватает глубины стакана на мейджорах и консервативности в листингах.",
    category: C.CEX,
  },
  {
    domain: "bitget.com",
    slug: "bitget",
    tier: "A",
    tier_rationale:
      "Сильнейший копитрейдинг и агрессивные листинги альтов. Ликвидность на мейджорах уступает топ-3, но для копирования стратегий — одна из лучших.",
    category: C.CEX,
  },
  {
    domain: "kraken.com",
    slug: "kraken",
    tier: "A",
    tier_rationale:
      "Эталонная безопасность и Proof of Reserves с 2014 года. Идеальна для фиат-он/офф-рампа и хранения. Меньше альтов и деривативов, чем у топ-3.",
    category: C.CEX,
  },
  {
    domain: "coinbase.com",
    slug: "coinbase",
    tier: "A",
    tier_rationale:
      "Публичная компания на NASDAQ, полная регуляторная прозрачность. Дорогие комиссии, слабее деривативная линейка — но для хранения и фиата абсолютная безопасность.",
    category: C.CEX,
  },
  {
    domain: "mexc.com",
    slug: "mexc",
    tier: "A",
    tier_rationale:
      "Самые ранние листинги альтов среди всех бирж, минимальные комиссии на споте. Без KYC на малых объёмах. Не хватает институциональной ликвидности.",
    category: C.CEX,
  },
  {
    domain: "gate.com",
    aliases: ["gate.io"],
    slug: "gate-io",
    tier: "B",
    tier_rationale:
      "Широкая линейка альтов и ранние листинги, но ликвидность на мейджорах уступает топ-3, а поддержка медленнее. Нишевый инструмент для альт-охоты.",
    category: C.CEX,
  },
  {
    domain: "kucoin.com",
    slug: "kucoin",
    tier: "B",
    tier_rationale:
      "Ветеран с гигантским списком альтов и Launchpad-историей. После судебных рисков в США и оттока объёмов позиции ослабли. Надёжный второй эшелон.",
    category: C.CEX,
  },
  {
    domain: "bingx.com",
    slug: "bingx",
    tier: "B",
    tier_rationale:
      "Крепкий середняк: копитрейдинг, фьючи, нормальный UX. Конкурирует с Bitget, но проигрывает по бренду и ликвидности.",
    category: C.CEX,
  },
  {
    domain: "htx.com",
    aliases: ["huobi.com"],
    slug: "htx",
    tier: "B",
    tier_rationale:
      "Бывшая Huobi с китайской аудиторией. Скандальный ребрендинг и отток после смены владельцев. Работает, но репутация под вопросом.",
    category: C.CEX,
  },
  {
    domain: "backpack.app",
    aliases: ["backpack.exchange"],
    slug: "backpack",
    tier: "B",
    tier_rationale:
      "Биржа с фокусом на Solana-экосистему и xNFT-интеграции. Быстрорастущий объём, понятный интерфейс. Молодая — меньше истории, чем у старожилов.",
    category: C.CEX,
  },
  {
    domain: "coinw.com",
    slug: "coinw",
    tier: "C",
    tier_rationale:
      "Нишевая биржа с азиатским фокусом, слабая западная узнаваемость. Держится за счёт локальной базы и листингов, но ликвидность скромная.",
    category: C.CEX,
  },
  {
    domain: "standx.com",
    slug: "standx",
    tier: "C",
    tier_rationale:
      "Нишевая биржа без значительного объёма и узнаваемости. Работает, но альтернатив в B-тире десятки.",
    category: C.CEX,
  },
  // ═══════════════════════════════════════════════════════════════
  // БИРЖИ DEX
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "hyperliquid.xyz",
    slug: "hyperliquid",
    tier: "S",
    tier_rationale:
      "Самый быстрый ончейн-ордербук в индустрии. Де-факто стандарт децентрализованных бессрочных контрактов: ончейн-прозрачность без компромиссов по скорости.",
    category: C.DEX,
  },
  {
    domain: "jup.ag",
    slug: "jupiter",
    tier: "S",
    tier_rationale:
      "Лидер Solana-экосистемы по объёмам агрегации, лучший роутинг сделок, zero-fee листинги. Де-факто стандарт DEX-торговли на Solana.",
    category: C.DEX,
  },
  {
    domain: "app.uniswap.org",
    slug: "uniswap",
    tier: "S",
    tier_rationale:
      "Крупнейший DEX по TVL и объёмам в истории. Создал категорию AMM, без единого взлома смарт-контрактов v2/v3. Де-факто стандарт DeFi-обменов.",
    category: C.DEX,
  },
  {
    domain: "app.gmx.io",
    aliases: ["gmx.io"],
    slug: "gmx",
    tier: "A",
    tier_rationale:
      "Пионер perp DEX на Arbitrum/Avalanche: модель GLP доказала устойчивость через несколько циклов. До S не хватает скорости CLOB на волатильности.",
    category: C.DEX,
  },
  {
    domain: "dydx.exchange",
    aliases: ["dydx.trade"],
    slug: "dydx",
    tier: "A",
    tier_rationale:
      "Самая близкая к CEX механика среди DEX: полноценный CLOB на Cosmos. Прозрачность ончейн-расчётов и аудиты без взломов. Меньше пар, чем Hyperliquid.",
    category: C.DEX,
  },
  {
    domain: "app.aevo.xyz",
    slug: "aevo",
    tier: "A",
    tier_rationale:
      "Опционы и бессрочные контракты под одной крышей на L2. Сильный продукт для хеджирования, но ликвидность опционных книг уступает CEX-аналогам.",
    category: C.DEX,
  },
  {
    domain: "app.drift.trade",
    slug: "drift",
    tier: "A",
    tier_rationale:
      "Лучший perp DEX на Solana после Jupiter: CLOB + кросс-маржа, быстрорастущий TVL. Уступает Hyperliquid по числу пар и глубине стакана.",
    category: C.DEX,
  },
  {
    domain: "pancakeswap.finance",
    slug: "pancakeswap",
    tier: "B",
    tier_rationale:
      "Главный DEX экосистемы BSC: высокие объёмы, сиропные пулы, NFT-маркетплейс. Минус — централизован вокруг BSC и меньше аудитов, чем Uniswap.",
    category: C.DEX,
  },
  {
    domain: "raydium.io",
    slug: "raydium",
    tier: "B",
    tier_rationale:
      "Ключевой AMM Solana с интеграцией ордербука Serum. Широкий охват пар, но конкуренция с Jupiter и Orca снижает долю рынка.",
    category: C.DEX,
  },
  {
    domain: "curve.finance",
    slug: "curve",
    tier: "B",
    tier_rationale:
      "Эталон stable swap — минимальное проскальзывание на стейблкоинах. Ключевой инфраструктурный элемент DeFi. Минус — сложность интерфейса для новичков.",
    category: C.DEX,
  },
  {
    domain: "sushi.com",
    slug: "sushiswap",
    tier: "B",
    tier_rationale:
      "Ветеран DEX с кроссчейн-присутствием в 30+ сетях. xSwap-агрегатор и продуктовая линейка шире Uniswap. Стабильный протокол с живым DAO.",
    category: C.DEX,
  },
  {
    domain: "kyberswap.com",
    slug: "kyberswap",
    tier: "B",
    tier_rationale:
      "Один из старейших агрегаторов с KyberZap и elastic pools. Широкий охват EVM-сетей, но маркетинговая доля скромнее, чем у 1inch.",
    category: C.DEX,
  },
  {
    domain: "matcha.xyz",
    slug: "matcha",
    tier: "B",
    tier_rationale:
      "Лучший UX среди агрегаторов: лимитные ордера, gasless-торговля, кроссчейн-роутинг. Чуть меньше покрытие сетей, чем у 1inch.",
    category: C.DEX,
  },
  {
    domain: "app.paradex.trade",
    slug: "paradex",
    tier: "C",
    tier_rationale:
      "Perp DEX от команды Paradigm на StarkNet. Сильный бэкграунд, но StarkNet-экосистема ограничивает аудиторию и ликвидность.",
    category: C.DEX,
  },
  {
    domain: "app.lighter.xyz",
    slug: "lighter",
    tier: "C",
    tier_rationale:
      "Perp DEX на Arbitrum с CLOB. Технологически интересен, но объёмы и ликвидность пока не позволяют войти в B-тир.",
    category: C.DEX,
  },
  {
    domain: "pro.edgex.exchange",
    slug: "pro",
    tier: "C",
    tier_rationale:
      "Perp DEX с модульной архитектурой, новое поколение после IntentX. Интересная технология, но малый TVL и короткая история.",
    category: C.DEX,
  },
  {
    domain: "app.extended.exchange",
    slug: "extended",
    tier: "C",
    tier_rationale:
      "Инновационный подход к ончейн-деривативам, но платформа молодая — не хватает боевого крещения в медвежьем рынке.",
    category: C.DEX,
  },
  {
    domain: "app.balancer.fi",
    slug: "balancer",
    tier: "C",
    tier_rationale:
      "AMM с настраиваемыми весами пулов и boosted pools. Технически элегантен, но проиграл Uniswap и Curve по TVL и узнаваемости.",
    category: C.DEX,
  },

  // ═══════════════════════════════════════════════════════════════
  // DeFi
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "aave.com",
    slug: "aave",
    tier: "S",
    tier_rationale:
      "Крупнейший lending-протокол с $40B+ TVL на пике. 10+ сетей, без критических эксплойтов смарт-контрактов с v2. Де-факто стандарт кредитования в DeFi.",
    category: C.DEFI,
  },
  {
    domain: "lido.fi",
    slug: "lido",
    tier: "S",
    tier_rationale:
      "Крупнейший ликвидный стейкинг: 30%+ всего застейканного ETH. stETH — самый ликвидный LST, основа DeFi-экономики на Ethereum.",
    category: C.DEFI,
  },
  {
    domain: "ether.fi",
    slug: "ether-fi",
    tier: "A",
    tier_rationale:
      "Крупнейший liquid restaking, некастодиальные валидаторы, eETH как ликвидный стандарт для EigenLayer-экосистемы. Оговорка — риск слэшинга наследуется от стека.",
    category: C.DEFI,
  },
  {
    domain: "pendle.finance",
    slug: "pendle",
    tier: "A",
    tier_rationale:
      "Токенизация будущей доходности — уникальная механика YT/PT. Стала метой для leveraged points exposure. Сложный продукт для новичков.",
    category: C.DEFI,
  },
  {
    domain: "eigenlayer.xyz",
    slug: "eigenlayer",
    tier: "A",
    tier_rationale:
      "Создал категорию restaking: $19B+ TVL на пике, AVS-экосистема, фундаментально меняет безопасность Ethereum. Риск — сложность AVS и каскадных слэшингов.",
    category: C.DEFI,
  },
  {
    domain: "morpho.org",
    slug: "morpho",
    tier: "A",
    tier_rationale:
      "Lending-оптимизатор с Morpho Blue — более эффективные ставки через peer-to-peer matching поверх Aave/Compound. Растущий TVL, сильные аудиты.",
    category: C.DEFI,
  },
  {
    domain: "app.compound.finance",
    slug: "compound",
    tier: "B",
    tier_rationale:
      "Пионер lending с 2018 года, создал стандарт cToken. Стабилен, но TVL и инновации уступают Aave. Надёжный выбор для пассивного дохода.",
    category: C.DEFI,
  },
  {
    domain: "convexfinance.com",
    slug: "convex",
    tier: "B",
    tier_rationale:
      "Главный агрегатор Curve-ликвидности: бустит CRV-вознаграждения, захватил контроль над Curve DAO. Зависимость от Curve — риск при миграции на другие AMM.",
    category: C.DEFI,
  },
  {
    domain: "ethena.fi",
    slug: "ethena",
    tier: "B",
    tier_rationale:
      "USDe — синтетический доллар на дельта-нейтральной стратегии. Инновационный подход, но модель не протестирована в затяжном bear market.",
    category: C.DEFI,
  },
  {
    domain: "polymarket.com",
    slug: "polymarket",
    tier: "B",
    tier_rationale:
      "Флагман prediction markets: $47B+ объёма, прозрачные ончейн-ставки. До S не хватает децентрализации — инфраструктура централизована на Polygon PoS.",
    category: C.DEFI,
  },
  {
    domain: "beefy.finance",
    slug: "beefy-finance",
    tier: "C",
    tier_rationale:
      "Автокомпаундер доходности на 20+ сетях. Удобен для пассивного фарминга, но стратегии несут риск протоколов, в которые Beefy вкладывает.",
    category: C.DEFI,
  },
  {
    domain: "mav.xyz",
    slug: "maverick",
    tier: "C",
    tier_rationale:
      "Новый AMM с динамическими пулами ликвидности. Инновационная механика, но TVL мал, протокол молодой.",
    category: C.DEFI,
  },
  {
    domain: "galxe.com",
    slug: "galxe",
    tier: "C",
    tier_rationale:
      "Крупнейшая квест-платформа, но качество кампаний падает: фермеры и боты доминируют. Инструмент для аирдроп-охоты, не инвестиций.",
    category: C.DEFI,
  },
  {
    domain: "layer3.xyz",
    slug: "layer3",
    tier: "C",
    tier_rationale:
      "Образовательные квесты с геймификацией. Конкурирует с Galxe, но аудитория меньше. Полезно для онбординга, не для заработка.",
    category: C.DEFI,
  },

  // ═══════════════════════════════════════════════════════════════
  // КОШЕЛЬКИ
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "metamask.io",
    slug: "metamask",
    tier: "S",
    tier_rationale:
      "Самый распространённый некастодиальный кошелёк: 30M+ MAU, 143M+ загрузок. Поддержка 11+ сетей, де-факто стандарт Web3-входа без оговорок.",
    category: C.WALLETS,
  },
  {
    domain: "ledger.com",
    slug: "ledger",
    tier: "S",
    tier_rationale:
      "Аппаратный кошелёк с 10+ годами без удалённого взлома чипа. Изолированный secure element, поддержка 5000+ токенов. Эталон холодного хранения.",
    category: C.WALLETS,
  },
  {
    domain: "trustwallet.com",
    slug: "trust-wallet",
    tier: "S",
    tier_rationale:
      "Официальный кошелёк Binance с 220M+ загрузок. 110+ блокчейнов, встроенный dApp-браузер, стейкинг. Де-факто самый популярный мобильный мультичейн-кошелёк.",
    category: C.WALLETS,
  },
  {
    domain: "trezor.io",
    slug: "trezor",
    tier: "A",
    tier_rationale:
      "Первый аппаратный кошелёк (2014), open-source, Shamir-бэкап. До S не хватает поддержки Solana и аппаратной изоляции на уровне Ledger.",
    category: C.WALLETS,
  },
  {
    domain: "phantom.app",
    slug: "phantom",
    tier: "A",
    tier_rationale:
      "Главный кошелёк экосистемы Solana: NFT-галерея, встроенный своп, мультичейн (Solana, ETH, Bitcoin, Base, Sui). 15M+ MAU, лучший UX в нише.",
    category: C.WALLETS,
  },
  {
    domain: "rabby.io",
    slug: "rabby",
    tier: "A",
    tier_rationale:
      "Лучший десктопный кошелёк для DeFi-пользователей: симуляция транзакций, автопереключение сетей, whitelist-защита. Моложе MetaMask, но UX на голову выше.",
    category: C.WALLETS,
  },
  {
    domain: "rainbow.me",
    slug: "rainbow",
    tier: "B",
    tier_rationale:
      "Красивейший мобильный кошелёк с ENS-интеграцией. Отличный UX, но меньше сетей, чем MetaMask или Trust Wallet. Для Ethereum-экосистемы — идеален.",
    category: C.WALLETS,
  },
  {
    domain: "keplr.app",
    slug: "keplr",
    tier: "B",
    tier_rationale:
      "Де-факто стандарт для Cosmos-экосистемы: IBC-трансферы, стейкинг, airdrop-claiming. Вне Cosmos-мира почти бесполезен.",
    category: C.WALLETS,
  },
  {
    domain: "zerion.io",
    slug: "zerion-wallet",
    tier: "B",
    tier_rationale:
      "Кошелёк с встроенным DeFi-трекером и портфельной аналитикой. Отличный UX для мониторинга, но как кошелёк уступает MetaMask по экосистеме.",
    category: C.WALLETS,
  },
  {
    domain: "safe.global",
    slug: "safe",
    tier: "B",
    tier_rationale:
      "Стандарт мультисиг-кошельков для DAO и команд. Безопасность через множественные подписи. Для розничного пользователя избыточен и сложен.",
    category: C.WALLETS,
  },
  {
    domain: "argent.xyz",
    slug: "argent",
    tier: "C",
    tier_rationale:
      "Смарт-контрактный кошелёк с social recovery и 2FA. Передовая технология, но ограничен zkSync и StarkNet, аудитория мала.",
    category: C.WALLETS,
  },
  {
    domain: "onekey.so",
    slug: "onekey",
    tier: "C",
    tier_rationale:
      "Аппаратный + софтовый кошелёк с открытым исходным кодом. Дешевле Ledger, но меньше аудитов и история безопасности короче.",
    category: C.WALLETS,
  },
  {
    domain: "tangem.com",
    slug: "tangem",
    tier: "C",
    tier_rationale:
      "Аппаратный кошелёк в формате банковской карты — удобно носить. Без экрана и кнопок: для крупных сумм Ledger/Trezor надёжнее.",
    category: C.WALLETS,
  },
  {
    domain: "safepal.com",
    slug: "safepal",
    tier: "C",
    tier_rationale:
      "Бюджетный аппаратный кошелёк от партнёра Binance Labs. Хороший старт для новичков, но проигрывает Ledger/Trezor по безопасности.",
    category: C.WALLETS,
  },

  // ═══════════════════════════════════════════════════════════════
  // ИНСТРУМЕНТЫ (VPS, прокси, антидетект, SMS, карты, обменники)
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "adspower.net",
    aliases: ["adspower-ru.com"],
    slug: "ads-power",
    tier: "A",
    tier_rationale:
      "Лидер по числу пользователей. Бесплатный тариф на 2 профиля, RPA-автоматизация, синхронизация. Частые обновления, но бывают баги после мажорных релизов.",
    category: C.TOOLS,
  },
  {
    domain: "dolphin-anty.net",
    slug: "dolphinanty",
    tier: "A",
    tier_rationale:
      "Самый популярный антидетект-браузер с профильным Telegram-комьюнити и интеграциями автоматизации. Стабильность выше среднего по рынку.",
    category: C.TOOLS,
  },
  {
    domain: "go.gologin.com",
    slug: "gologin",
    tier: "A",
    tier_rationale:
      "Кроссплатформенный антидетект с нативным WebRTC-менеджментом и мобильным приложением. Стабильность на уровне Dolphin, но дороже.",
    category: C.TOOLS,
  },
  {
    domain: "hetzner.cloud",
    aliases: ["hetzner.com"],
    slug: "hetzner",
    tier: "A",
    tier_rationale:
      "Индустриальный стандарт VPS: лучший цена/производительность, немецкая надёжность, мгновенный деплой. TOS ограничивает крипто-ноды.",
    category: C.TOOLS,
  },
  {
    domain: "aeza.net",
    slug: "aeza",
    tier: "A",
    tier_rationale:
      "Русскоязычный VPS-провайдер с гео-роутингом и гибкими тарифами. Крипто-платежи без вопросов. Моложе Hetzner — меньше истории аптайма.",
    category: C.TOOLS,
  },
  {
    domain: "webshare.io",
    slug: "webshare",
    tier: "A",
    tier_rationale:
      "10 бесплатных прокси на старте, удобное API, датацентровые + резидентные. Отличный выбор для разработчиков и малых объёмов.",
    category: C.TOOLS,
  },
  {
    domain: "5sim.net",
    slug: "5sim",
    tier: "A",
    tier_rationale:
      "Лучшее соотношение цены и покрытия среди SMS-активаторов. Интеграции с антидетектами через плагины. Де-факто замена закрывшемуся SMS-Activate.",
    category: C.TOOLS,
  },
  {
    domain: "bestchange.ru",
    aliases: ["bestchange.com"],
    slug: "bestchange",
    tier: "A",
    tier_rationale:
      "Главный мониторинг обменников СНГ с 2007 года. Автоматический сбор курсов 500+ обменников. Ветеран рынка с живой аудиторией.",
    category: C.TOOLS,
  },
  // --- Инструменты B ---
  {
    domain: "multilogin.com",
    slug: "multi-login",
    tier: "B",
    tier_rationale:
      "Один из пионеров антидетекта с Mimic-браузером и StealthFox. Цена выше рынка, обновления реже конкурентов, но fingerprint-защита на высоте.",
    category: C.TOOLS,
  },
  {
    domain: "octobrowser.net",
    aliases: ["octobrowser.org"],
    slug: "octo-browser",
    tier: "B",
    tier_rationale:
      "Антидетект с балансом цены и качества, встроенные шаблоны автоматизации. Крепкий середняк.",
    category: C.TOOLS,
  },
  {
    domain: "geelark.com",
    slug: "geelark",
    tier: "B",
    tier_rationale:
      "Мобильный антидетект с эмуляцией Android/iOS. Нишевый инструмент для мобильных ферм.",
    category: C.TOOLS,
  },
  {
    domain: "incogniton.com",
    slug: "incogniton",
    tier: "B",
    tier_rationale:
      "Антидетект с Selenium-интеграцией и командной работой. Меньше сообщество, чем у Dolphin/Ads, но стабилен.",
    category: C.TOOLS,
  },
  {
    domain: "contabo.com",
    slug: "contabo",
    tier: "B",
    tier_rationale:
      "Дешёвые VDS с немецким ЦОДом. Хорош для долгосрочных проектов, но UI устарел, поддержка медленная.",
    category: C.TOOLS,
  },
  {
    domain: "linode.com",
    slug: "linode",
    tier: "B",
    tier_rationale:
      "Надёжный VPS из США, поглощён Akamai. Простая панель, предсказуемые цены. Проигрывает Hetzner по цене.",
    category: C.TOOLS,
  },
  {
    domain: "ovhcloud.com",
    slug: "ovhcloud",
    tier: "B",
    tier_rationale:
      "Французский гигант: bare-metal, VPS, домены. Пожар 2021 подорвал репутацию, но масштаб и инфраструктура всё ещё топ.",
    category: C.TOOLS,
  },
  {
    domain: "vdsina.ru",
    slug: "vdsina",
    tier: "B",
    tier_rationale:
      "Российский VPS со своими ЦОДами и быстрой поддержкой на русском. Ограниченная география — только РФ/СНГ.",
    category: C.TOOLS,
  },
  {
    domain: "hostkey.ru",
    slug: "hostkey",
    tier: "B",
    tier_rationale:
      "Нидерландский хостинг с русскоязычной поддержкой, GPU-серверы. Хорош под специфические задачи.",
    category: C.TOOLS,
  },
  {
    domain: "netcup.com",
    slug: "netcup",
    tier: "B",
    tier_rationale:
      "Немецкий VPS с низкими ценами на длинных контрактах. Отличное железо, но сложный онбординг и немецкоязычный интерфейс.",
    category: C.TOOLS,
  },
  {
    domain: "proxy-seller.com",
    slug: "proxyseller",
    tier: "B",
    tier_rationale:
      "Широкий выбор: датацентровые, резидентские, ISP, мобильные. API и быстрая выдача. Цены выше среднего.",
    category: C.TOOLS,
  },
  {
    domain: "proxy-store.com",
    slug: "proxystore",
    tier: "B",
    tier_rationale:
      "Доступные цены на IPv4/IPv6, нормальное API. Меньше пул резидентных прокси, чем у asocks.",
    category: C.TOOLS,
  },
  {
    domain: "proxy.market",
    slug: "proxy-market",
    tier: "B",
    tier_rationale:
      "Русскоязычный агрегатор прокси с гибкими тарифами. Стабильность средняя — на высоконагруженных задачах бывают сбои.",
    category: C.TOOLS,
  },
  {
    domain: "proxyline.net",
    slug: "proxyline",
    tier: "B",
    tier_rationale:
      "Дешёвые прокси с посуточной оплатой. Хорош для тестов, но для продакшена стабильность уступает лидерам.",
    category: C.TOOLS,
  },
  {
    domain: "onlinesim.io",
    slug: "onlinesim",
    tier: "B",
    tier_rationale:
      "Большой выбор стран, встроенные рефанды за неудачные активации. Покрытие чуть уже, чем у 5sim, но цены ниже.",
    category: C.TOOLS,
  },
  {
    domain: "textverified.com",
    slug: "textverified",
    tier: "B",
    tier_rationale:
      "Американский SMS-активатор с фокусом на US-номера. Качество высокое, но география ограничена.",
    category: C.TOOLS,
  },
  {
    domain: "smspool.net",
    slug: "smspool",
    tier: "B",
    tier_rationale:
      "Бюджетный SMS-активатор для крупных объёмов. API удобное, но поддержка слабее лидеров.",
    category: C.TOOLS,
  },
  {
    domain: "solcard.cc",
    slug: "solcard",
    tier: "B",
    tier_rationale:
      "Виртуальные карты для крипто-трат с привязкой к Solana. Нишевый продукт — работает, но экосистема мала.",
    category: C.TOOLS,
  },
  // --- Инструменты C ---
  {
    domain: "kameleo.io",
    slug: "kameleo",
    tier: "C",
    tier_rationale:
      "Антидетект с мобильным профилированием. Уступает лидерам по стабильности обновлений и размеру комьюнити.",
    category: C.TOOLS,
  },
  {
    domain: "morelogin.com",
    slug: "morelogin",
    tier: "C",
    tier_rationale:
      "Бюджетный антидетект с ограниченной функциональностью. Базовые задачи закрывает, для сложных схем не подходит.",
    category: C.TOOLS,
  },
  {
    domain: "undetectable.io",
    slug: "undetectable",
    tier: "C",
    tier_rationale:
      "Старый антидетект, проигрывает новым игрокам по UX и fingerprint-защите.",
    category: C.TOOLS,
  },
  {
    domain: "afina.io",
    slug: "afina",
    tier: "C",
    tier_rationale:
      "Российский антидетект для нишевых задач. Маленькое комьюнити, редкие обновления.",
    category: C.TOOLS,
  },
  {
    domain: "agentx-antidetect.com",
    slug: "agentx-antidetect",
    tier: "C",
    tier_rationale:
      "Молодой антидетект без доказанной стабильности. Потенциал есть, но для продакшена рано.",
    category: C.TOOLS,
  },
  {
    domain: "4vps.su",
    slug: "4vps",
    tier: "C",
    tier_rationale:
      "Бюджетный российский VPS. Базовые потребности закрывает, но аптайм и поддержка уступают европейским провайдерам.",
    category: C.TOOLS,
  },
  {
    domain: "cloudzy.com",
    slug: "cloudzy",
    tier: "C",
    tier_rationale:
      "Дешёвый VPS с крипто-платежами. Стабильность ниже среднего по рынку.",
    category: C.TOOLS,
  },
  {
    domain: "macloud.ru",
    slug: "macloud",
    tier: "C",
    tier_rationale:
      "Нишевый хостинг для Mac-ориентированных задач. Специфический продукт, не для широкого применения.",
    category: C.TOOLS,
  },
  {
    domain: "ufo.hosting",
    slug: "ufo-hosting",
    tier: "C",
    tier_rationale:
      "Молодой хостинг с броским брендом. Мало отзывов, короткая история аптайма.",
    category: C.TOOLS,
  },
  {
    domain: "zomro.com",
    slug: "zomro",
    tier: "C",
    tier_rationale:
      "Универсальный хостинг: от shared до VPS. Подходит для простых сайтов, для высоконагруженных задач — слабоват.",
    category: C.TOOLS,
  },
  {
    domain: "proxys.io",
    slug: "proxys",
    tier: "C",
    tier_rationale:
      "Базовые прокси без уникальных фич. Цены средние, пул ограниченный.",
    category: C.TOOLS,
  },
  {
    domain: "hydraproxy.com",
    slug: "hydraheaders",
    tier: "C",
    tier_rationale:
      "Нишевый прокси-сервис с ограниченным пулом IP. Полезен для узких задач, но не универсален.",
    category: C.TOOLS,
  },
  {
    domain: "px6.me",
    slug: "proxy6",
    tier: "C",
    tier_rationale:
      "Дешёвые IPv4/IPv6 прокси для нетребовательных задач. Стабильность и скорость ниже рынка.",
    category: C.TOOLS,
  },
  {
    domain: "hero-sms.com",
    slug: "hero-sms",
    tier: "C",
    tier_rationale:
      "Бюджетный SMS-активатор с малым покрытием стран. Базовые задачи закрывает, для масштаба не хватит.",
    category: C.TOOLS,
  },
  {
    domain: "tiger-sms.com",
    slug: "tiger-sms",
    tier: "C",
    tier_rationale:
      "Аналог hero-sms с похожими ограничениями. Бюджетный вариант для разовых активаций.",
    category: C.TOOLS,
  },
  {
    domain: "combo.cards",
    slug: "combo",
    tier: "C",
    tier_rationale:
      "Виртуальные карты с крипто-пополнением. Рынок насыщен аналогами, без явного преимущества.",
    category: C.TOOLS,
  },
  {
    domain: "cincin.cards",
    slug: "cincin",
    tier: "C",
    tier_rationale:
      "Ещё одни крипто-карты. Конкуренция высокая, продукт без сильной дифференциации.",
    category: C.TOOLS,
  },
  {
    domain: "kripicard.com",
    slug: "kripicard",
    tier: "C",
    tier_rationale:
      "Карты с крипто-конвертацией. Базовый продукт без значительных отличий от аналогов.",
    category: C.TOOLS,
  },
  // --- Инструменты D ---
  {
    domain: "accsmarket.com",
    slug: "accsmarket",
    tier: "D",
    tier_rationale:
      "Маркетплейс аккаунтов со всеми рисками серого рынка: нет гарантий, частые баны купленных аккаунтов, нулевая защита покупателя.",
    category: C.TOOLS,
  },
  {
    domain: "accsmoll.com",
    slug: "accsmoll",
    tier: "D",
    tier_rationale:
      "Аналогично accsmarket: аккаунты с рук без гарантий. D-тир — зона высокого риска.",
    category: C.TOOLS,
  },
  {
    domain: "funpay.com",
    slug: "funpay",
    tier: "D",
    tier_rationale:
      "Биржа цифровых товаров с арбитражной системой. Риск скама и спорных сделок выше, чем на специализированных площадках.",
    category: C.TOOLS,
  },
  {
    domain: "lzt.market",
    slug: "lztmarket",
    tier: "D",
    tier_rationale:
      "Серый маркетплейс с высокой долей мошеннических сделок. Только для тех, кто понимает риски.",
    category: C.TOOLS,
  },
  {
    domain: "plati.market",
    slug: "plati-market",
    tier: "D",
    tier_rationale:
      "Универсальный маркетплейс цифровых товаров без специализации. Безопасность сделок минимальная.",
    category: C.TOOLS,
  },

  // ═══════════════════════════════════════════════════════════════
  // АНАЛИТИКА И ДАННЫЕ
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "tradingview.com",
    slug: "tradingview",
    tier: "S",
    tier_rationale:
      "Индустриальный стандарт графического анализа: 100M+ пользователей, Pine Script, брокерские интеграции. Альтернатив с сопоставимым UX не существует.",
    category: C.ANALYTICS,
  },
  {
    domain: "defillama.com",
    slug: "defi-llama",
    tier: "S",
    tier_rationale:
      "Самый полный бесплатный DeFi-агрегатор данных: TVL по всем протоколам, open-source адаптеры. Стандарт индустрии для ончейн-метрик.",
    category: C.ANALYTICS,
  },
  {
    domain: "dune.com",
    slug: "dune",
    tier: "S",
    tier_rationale:
      "Главная платформа ончейн-аналитики с публичными дашбордами. SQL-запросы к блокчейнам, сообщество аналитиков. Бесплатный уровень для всех.",
    category: C.ANALYTICS,
  },
  {
    domain: "nansen.ai",
    slug: "nansen",
    tier: "A",
    tier_rationale:
      "Лучшая ончейн-аналитика с лейблами кошельков и Smart Money-дашбордами. Частный инструмент аналитиков хедж-фондов. Минус — дорогая подписка.",
    category: C.ANALYTICS,
  },
  {
    domain: "glassnode.com",
    slug: "glassnode",
    tier: "A",
    tier_rationale:
      "Эталон ончейн-метрик: SOPR, MVRV, NUPL и десятки индикаторов. Создатели концепции on-chain analysis. Платный доступ ограничивает аудиторию.",
    category: C.ANALYTICS,
  },
  {
    domain: "cryptoquant.com",
    slug: "cryptoquant",
    tier: "A",
    tier_rationale:
      "Ключевой конкурент Glassnode с фокусом на биржевые потоки и Exchange Reserve. Стандарт метрик резервов CEX. Интерфейс уступает TradingView.",
    category: C.ANALYTICS,
  },
  {
    domain: "coingecko.com",
    slug: "coingecko",
    tier: "A",
    tier_rationale:
      "Главный бесплатный агрегатор рыночных данных: цены, объёмы, Fundamental-метрики. Альтернатива CoinMarketCap с более прозрачной методологией.",
    category: C.ANALYTICS,
  },
  {
    domain: "coinmarketcap.com",
    slug: "coinmarketcap",
    tier: "A",
    tier_rationale:
      "Самый посещаемый агрегатор рыночных данных, принадлежит Binance. Широкий охват, но методология рейтингов непрозрачна.",
    category: C.ANALYTICS,
  },
  {
    domain: "messari.io",
    slug: "messari",
    tier: "B",
    tier_rationale:
      "Глубокие исследовательские отчёты и governance-агрегатор. Профессиональный инструмент, но большая часть контента за paywall.",
    category: C.ANALYTICS,
  },
  {
    domain: "platform.arkhamintelligence.com",
    slug: "platform",
    tier: "B",
    tier_rationale:
      "Деанон кошельков в промышленном масштабе. Уникальный продукт на стыке OSINT и ончейн-аналитики. Этические вопросы и централизация данных — оговорка.",
    category: C.ANALYTICS,
  },
  {
    domain: "arbitragescanner.io",
    slug: "arbitragescanner-io",
    tier: "C",
    tier_rationale:
      "Мониторинг арбитражных возможностей между биржами. Полезный инструмент, но данные не всегда реального времени, задержки снижают практическую пользу.",
    category: C.ANALYTICS,
  },

  // ═══════════════════════════════════════════════════════════════
  // СЕРВИСЫ (безопасность, утилиты, NFT, AML)
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "opensea.io",
    slug: "opensea",
    tier: "B",
    tier_rationale:
      "Первый и крупнейший NFT-маркетплейс. Для коллекционеров всё ещё основной, но комиссии высокие, а Blur оттянул трейдеров.",
    category: C.SERVICES,
  },
  {
    domain: "blur.io",
    slug: "blur",
    tier: "B",
    tier_rationale:
      "Трейдерский NFT-маркетплейс с нулевыми комиссиями. Захватил рынок профессиональных флипперов, но розничный UX проигрывает OpenSea.",
    category: C.SERVICES,
  },
  {
    domain: "magiceden.io",
    slug: "magic-eden",
    tier: "B",
    tier_rationale:
      "Лидер NFT-маркетплейсов на Solana и Bitcoin Ordinals. Мультичейн-стратегия расширяет аудиторию, комиссии выше локальных конкурентов.",
    category: C.SERVICES,
  },
  {
    domain: "rugcheck.xyz",
    slug: "rugcheck",
    tier: "C",
    tier_rationale:
      "Быстрая проверка Solana-токенов на rug pull риски. Must-have для мемкоин-трейдинга на Solana, но узкая специализация.",
    category: C.SERVICES,
  },
  {
    domain: "pocketuniverse.app",
    slug: "pocketuniverse",
    tier: "C",
    tier_rationale:
      "Симулятор транзакций перед подписанием — видишь, что отдаёшь контракту. Умный инструмент, но не панацея от фишинга.",
    category: C.SERVICES,
  },
  {
    domain: "tokensniffer.com",
    slug: "token-sniffer",
    tier: "C",
    tier_rationale:
      "Автоматическая проверка токенов на скам-паттерны. Быстрый чекер для дегенов, но не замена полноценному DYOR.",
    category: C.SERVICES,
  },
  {
    domain: "web.amlbot.com",
    slug: "amlbot",
    tier: "C",
    tier_rationale:
      "AML-проверка кошельков для комплаенса. Полезный, но нишевый инструмент — нужен не каждому пользователю.",
    category: C.SERVICES,
  },
  {
    domain: "1password.com",
    slug: "1password",
    tier: "C",
    tier_rationale:
      "Отличный менеджер паролей, но для крипто-индустрии вторичен — не решает задачи хранения сид-фраз и приватных ключей.",
    category: C.SERVICES,
  },
  {
    domain: "bitwarden.com",
    slug: "bitwarden",
    tier: "C",
    tier_rationale:
      "Бесплатный опенсорсный менеджер паролей. Лучше 1Password по духу, но UX проще и без крипто-специфики.",
    category: C.SERVICES,
  },
  {
    domain: "kast.xyz",
    slug: "kast",
    tier: "C",
    tier_rationale:
      "Крипто-карты и платежи с Web3-интеграцией. Перспективно, но продукт молодой — нужна проверка временем.",
    category: C.SERVICES,
  },

  // ═══════════════════════════════════════════════════════════════
  // НЕЙРОСЕТИ И AI
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "cursor.com",
    slug: "cursor",
    tier: "A",
    tier_rationale:
      "Лучшая AI-IDE для разработки: контекст всего проекта, автодополнение на уровне файлов, агентный режим. Меняет процесс разработки. Требует подписки Pro.",
    category: C.AI,
  },
  {
    domain: "claude.ai",
    slug: "claude",
    tier: "A",
    tier_rationale:
      "Лучшая модель для генерации кода и длинного контекста. 200K-токенное окно, артефакты, MCP-интеграции. Специализация на reasoning.",
    category: C.AI,
  },
  {
    domain: "midjourney.com",
    slug: "midjorney",
    tier: "B",
    tier_rationale:
      "Лучшая генерация изображений на рынке. Эстетика и качество вне конкуренции. Минус — привязка к Discord, нет API для автоматизации.",
    category: C.AI,
  },
  {
    domain: "notion.com",
    slug: "notion-ai",
    tier: "B",
    tier_rationale:
      "AI-ассистент внутри Notion: суммаризация, перевод, генерация в контексте заметок. Удобно для работы с базой знаний, но не замена выделенному AI.",
    category: C.AI,
  },
  {
    domain: "deepl.com",
    slug: "deepl",
    tier: "B",
    tier_rationale:
      "Самый точный машинный перевод для европейских языков. Лучше Google Translate для профессионального использования. Не хватает азиатских языков.",
    category: C.AI,
  },
  {
    domain: "replit.com",
    slug: "replit",
    tier: "B",
    tier_rationale:
      "Облачная IDE с AI-агентом, деплоем в один клик. Быстрый прототип без настройки окружения. Для продакшен-проектов маловато.",
    category: C.AI,
  },
  {
    domain: "writesonic.com",
    slug: "writersonic",
    tier: "C",
    tier_rationale:
      "AI-копирайтер, проигрывающий ChatGPT и Claude по качеству текста. Был силён до GPT-4, сейчас в роли догоняющего.",
    category: C.AI,
  },
  {
    domain: "codeium.com",
    slug: "codeium",
    tier: "C",
    tier_rationale:
      "Бесплатный AI-автокомплит для кода. Хорош на старте, но уступает Copilot и Cursor по глубине контекста.",
    category: C.AI,
  },
  {
    domain: "tabnine.com",
    slug: "tabnine",
    tier: "C",
    tier_rationale:
      "Ветеран AI-дополнения кода, проиграл гонку Copilot и Cursor. Всё ещё работает, но пользователи массово переходят.",
    category: C.AI,
  },
  {
    domain: "beta.elevenlabs.io",
    slug: "eleven",
    tier: "C",
    tier_rationale:
      "Лучшая генерация голоса на рынке, но цена высокая, бесплатный тир урезан. Для коммерческого использования дорого.",
    category: C.AI,
  },
  {
    domain: "invideo.io",
    slug: "invideo",
    tier: "C",
    tier_rationale:
      "AI-видеогенератор с ограниченным контролем над результатом. Конкуренты вроде Runway дают больше творческого контроля.",
    category: C.AI,
  },
  {
    domain: "synthesia.io",
    slug: "synthesia",
    tier: "C",
    tier_rationale:
      "AI-аватары для видео. Нишевый корпоративный продукт, для обычных пользователей избыточен.",
    category: C.AI,
  },
  {
    domain: "gamma.app",
    slug: "gammaai",
    tier: "C",
    tier_rationale:
      "AI-презентации за секунды. Удобно для черновиков, но результат требует доработки вручную.",
    category: C.AI,
  },

  // ═══════════════════════════════════════════════════════════════
  // WEB3 (L2, мосты, инфраструктура)
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "arbitrum.io",
    slug: "arbitrum",
    tier: "A",
    tier_rationale:
      "Крупнейший L2 по TVL, зрелая экосистема dApp, низкие комиссии. До S не хватает децентрализации — централизованный секвенсор.",
    category: C.WEB3,
  },
  {
    domain: "base.org",
    slug: "base",
    tier: "A",
    tier_rationale:
      "L2 от Coinbase с поддержкой гиганта. Быстрорастущая экосистема, но сильная централизация и зависимость от Coinbase.",
    category: C.WEB3,
  },
  {
    domain: "zksync.io",
    slug: "zksync",
    tier: "A",
    tier_rationale:
      "Первый zkEVM в мейннете, технологический прорыв. Токен ZK распределён широко, но adoption и TVL пока уступают Arbitrum.",
    category: C.WEB3,
  },
  {
    domain: "wormhole.com",
    slug: "wormhole",
    tier: "A",
    tier_rationale:
      "Главный кроссчейн-мост: 45+ сетей, $70B+ переведено. После взлома 2022 ($320M) усилена безопасность. Стандарт интероперабельности.",
    category: C.WEB3,
  },
  {
    domain: "portal.polygon.technology",
    slug: "polygon-bridge",
    tier: "B",
    tier_rationale:
      "Ветеран sidechain/L2 с крупнейшей экосистемой dApp. Переход на Polygon 2.0 и zkEVM снижает зависимость от сайдчейна. Уже не топ-1 L2.",
    category: C.WEB3,
  },
  {
    domain: "app.optimism.io",
    slug: "optimism-bridge",
    tier: "B",
    tier_rationale:
      "Пионер Optimistic rollups, Superchain-экосистема. OP Stack используют десятки проектов, но как самостоятельный L2 уступает Arbitrum.",
    category: C.WEB3,
  },
  {
    domain: "scroll.io",
    slug: "scroll",
    tier: "B",
    tier_rationale:
      "zkEVM с сильной командой и фокусом на совместимость с Ethereum. Моложе zkSync, меньше TVL и экосистема dApp.",
    category: C.WEB3,
  },
  {
    domain: "linea.build",
    slug: "linea",
    tier: "B",
    tier_rationale:
      "zkEVM от ConsenSys/MetaMask. Сильный бэкграунд, нативная интеграция с MetaMask. Мало TVL и экосистема в ранней стадии.",
    category: C.WEB3,
  },
  {
    domain: "starknet.io",
    slug: "starknet",
    tier: "B",
    tier_rationale:
      "Самый технологически продвинутый L2 на STARK-доказательствах. Мощная технология, но сложный онбординг и мало пользователей.",
    category: C.WEB3,
  },
  // --- Web3 DeFi bridges and infrastructure ---
  {
    domain: "app.ostium.com",
    slug: "ostium",
    tier: "C",
    tier_rationale:
      "Торговля RWA-активами на ончейне. Интересный заход на реальные активы, но рынок RWA пока мал, ликвидность ограничена.",
    category: C.WEB3,
  },
  // ═══════════════════════════════════════════════════════════════
  // ТОПОВЫЕ AI (Нейросети)
  // ═══════════════════════════════════════════════════════════════
  {
    domain: "chat.openai.com",
    slug: "chatgpt",
    tier: "S",
    tier_rationale:
      "Самый популярный AI-чат в мире — GPT-4o, генерация текста, кода и изображений. Бесплатный тариф покрывает большинство задач.",
    category: C.AI,
  },
  {
    domain: "claude.ai",
    slug: "claude",
    tier: "S",
    tier_rationale:
      "Лучший для длинных текстов, кода и аналитики. Sonnet — топ для разработчиков. Бесплатный тариф с высокими лимитами.",
    category: C.AI,
  },
  {
    domain: "deepseek.com",
    slug: "deepseek",
    tier: "A",
    tier_rationale:
      "Бесплатный китайский AI — конкурент GPT-4o. Открытый исходный код, мощный в коде, контекст 1M токенов.",
    category: C.AI,
  },
  {
    domain: "gemini.google.com",
    slug: "gemini",
    tier: "A",
    tier_rationale:
      "AI от Google — бесплатный Gemini 2.5 Pro, мультимодальный, интеграция с сервисами Google.",
    category: C.AI,
  },
  {
    domain: "perplexity.ai",
    slug: "perplexity",
    tier: "A",
    tier_rationale:
      "AI-поисковик с источниками — задаёшь вопрос, получаешь ответ с реальными ссылками. Бесплатный тариф.",
    category: C.AI,
  },
  {
    domain: "stability.ai",
    slug: "stable-diffusion",
    tier: "S",
    tier_rationale:
      "Open-source модель генерации изображений. SDXL и SD3 — стандарт индустрии. Бесплатно, локально, без цензуры.",
    category: C.AI,
  },
  {
    domain: "midjourney.com",
    slug: "midjourney",
    tier: "S",
    tier_rationale:
      "Лучшее качество генерации изображений — фотореализм и арт. От $10/мес. Выбор профессионалов.",
    category: C.AI,
  },
  {
    domain: "runwayml.com",
    slug: "runway",
    tier: "A",
    tier_rationale:
      "AI для видео №1 — генерация по тексту, стилизация, удаление фона. Gen-3 Alpha — топ-генератор видео.",
    category: C.AI,
  },
  {
    domain: "huggingface.co",
    slug: "hugging-face",
    tier: "S",
    tier_rationale:
      "GitHub для AI-моделей — сотни тысяч открытых моделей, датасетов и демо. Бесплатный хостинг ML-проектов.",
    category: C.AI,
  },
  {
    domain: "character.ai",
    slug: "character-ai",
    tier: "A",
    tier_rationale:
      "Миллионы AI-персонажей для общения — от исторических до вымышленных. Бесплатно без ограничений.",
    category: C.AI,
  },
  {
    domain: "firefly.adobe.com",
    slug: "adobe-firefly",
    tier: "A",
    tier_rationale:
      "AI в Photoshop — генеративная заливка, замена фона, расширение изображений. Интеграция с Creative Cloud.",
    category: C.AI,
  },
  {
    domain: "suno.ai",
    slug: "suno-ai",
    tier: "A",
    tier_rationale:
      "Генерация музыки по тексту — от попсы до симфонии. Бесплатный тариф, v4 с улучшенным качеством.",
    category: C.AI,
  },
  {
    domain: "grammarly.com",
    slug: "grammarly",
    tier: "A",
    tier_rationale:
      "Стандарт проверки английского — грамматика, стиль, тон. Расширение для браузера, бесплатный тариф.",
    category: C.AI,
  },
  {
    domain: "cursor.com",
    slug: "cursor",
    tier: "S",
    tier_rationale:
      "IDE с AI — VS Code форк с Claude/GPT интеграцией. Agent режим для мультифайловых правок. Стандарт AI-разработки.",
    category: C.AI,
  },
  {
    domain: "github.com",
    slug: "github-copilot",
    tier: "S",
    tier_rationale:
      "AI-автодополнение от GitHub — встроен в IDE, контекст проекта. Бесплатно для open-source. Стандарт индустрии.",
    category: C.AI,
  },
  {
    domain: "mistral.ai",
    slug: "mistral",
    tier: "A",
    tier_rationale:
      "Европейский AI-чат (Le Chat) — открытые модели, приватность данных. Бесплатный тариф.",
    category: C.AI,
  },
  {
    domain: "poe.com",
    slug: "poe",
    tier: "A",
    tier_rationale:
      "Агрегатор AI-чатов — ChatGPT, Claude, Gemini в одном интерфейсе. Бесплатный тариф с доступом к десяткам моделей.",
    category: C.AI,
  },

];

// ═══════════════════════════════════════════════════════════════
// Хелперы
// ═══════════════════════════════════════════════════════════════

const DOMAIN_INDEX = new Map<string, TopPlatformEntry>();

for (const entry of TOP_PLATFORM_ENTRIES) {
  const key = entry.domain.toLowerCase().replace(/^www\./, "");
  if (!DOMAIN_INDEX.has(key)) {
    DOMAIN_INDEX.set(key, entry);
  }
  for (const alias of entry.aliases ?? []) {
    const aliasKey = alias.toLowerCase().replace(/^www\./, "");
    if (!DOMAIN_INDEX.has(aliasKey)) {
      DOMAIN_INDEX.set(aliasKey, entry);
    }
  }
}

export interface TopPlatformMeta {
  tier: "S" | "A" | "B" | "C" | "D";
  segment: string;
  slug: string;
  tier_rationale: string;
  category: string;
  order: number;
  rank: number;
}

const TIER_WEIGHT: Record<string, number> = { S: 0, A: 1, B: 2, C: 3, D: 4 };

function computeRank(tier: string, order: number): number {
  return (TIER_WEIGHT[tier] ?? 5) * 1000 + order;
}

export function getTopPlatformMeta(domain: string): TopPlatformMeta | null {
  const normalized = domain.toLowerCase().replace(/^www\./, "");

  const direct = DOMAIN_INDEX.get(normalized);
  if (direct) {
    const order = TOP_PLATFORM_ENTRIES.indexOf(direct);
    return {
      tier: direct.tier,
      segment: direct.tier,
      slug: direct.slug,
      tier_rationale: direct.tier_rationale,
      category: direct.category,
      order,
      rank: computeRank(direct.tier, order),
    };
  }

  const parts = normalized.split(".");
  const root = parts.length >= 2 ? parts.slice(-2).join(".") : normalized;
  const byRoot = DOMAIN_INDEX.get(root);
  if (byRoot) {
    const order = TOP_PLATFORM_ENTRIES.indexOf(byRoot);
    return {
      tier: byRoot.tier,
      segment: byRoot.tier,
      slug: byRoot.slug,
      tier_rationale: byRoot.tier_rationale,
      category: byRoot.category,
      order,
      rank: computeRank(byRoot.tier, order),
    };
  }

  return null;
}

export function compareTopPlatform(a: string, b: string): number {
  const ma = getTopPlatformMeta(a);
  const mb = getTopPlatformMeta(b);
  if (ma && mb) {
    if (ma.tier !== mb.tier) {
      return TIER_WEIGHT[ma.tier] - TIER_WEIGHT[mb.tier];
    }
    return ma.order - mb.order;
  }
  if (ma) return -1;
  if (mb) return 1;
  return 0;
}

export function getTierlistCategories(): string[] {
  const cats = new Set<string>();
  for (const entry of TOP_PLATFORM_ENTRIES) {
    cats.add(entry.category);
  }
  const CAT_ORDER = [
    C.CEX, C.DEX, C.DEFI, C.WALLETS, C.TOOLS,
    C.ANALYTICS, C.SERVICES, C.AI, C.WEB3,
  ] as string[];
  return Array.from(cats).sort((a, b) => {
    return CAT_ORDER.indexOf(a) - CAT_ORDER.indexOf(b);
  });
}

export function getCategoryLabel(cat: string): string {
  const labels: Record<string, string> = {
    [C.CEX]: "Биржи CEX",
    [C.DEX]: "Биржи DEX",
    [C.DEFI]: "DeFi",
    [C.WALLETS]: "Кошельки",
    [C.TOOLS]: "Инструменты",
    [C.ANALYTICS]: "Аналитика",
    [C.SERVICES]: "Сервисы",
    [C.AI]: "Нейросети",
    [C.WEB3]: "Web3",
  };
  return labels[cat] ?? cat;
}
