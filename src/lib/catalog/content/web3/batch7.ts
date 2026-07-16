import type { PlatformContent } from "@/lib/catalog/content/types";

export const WEB3_BATCH_7: Record<string, PlatformContent> = {
  talus: {
    short:
      "Экосистема AI-агентов на Sui — центр лояльности и инфраструктура для on-chain агентов с токеном $US.",
    long:
      "Talus Network строит слой для децентрализованных AI-агентов на Move VM (Sui). Hub.talus.network — точка входа в loyalty-программу и наград сообщества.",
    tagline: "AI-агенты на Sui — когда боты получают кошелёк и on-chain репутацию.",
    highlight:
      "Talus позиционирует себя как центр для AI-агентов: смарт-контракты на Sui управляют логикой агентов, а центр лояльности собирает активность пользователей для будущих наград. Экосистема на стыке DePIN, AI и Move — ставка на то, что автономные агенты станут полноценными экономическими участниками on-chain. Для ранних пользователей hub — место регистрации активности; для разработчиков — SDK и документация по примитивам агентов. Следи за официальными анонсами — правила loyalty меняются по фазам кампании.",
    facts: [
      "Talus привлёк внимание на пересечении AI×crypto хайпа 2024–2025 — десятки проектов заявили «экономику агентов», Talus выбрал Sui как слой исполнения.",
      "Loyalty hub talus.network стал стандартным шагом в чеклистах охотников за airdrop — активность в hub коррелировала с ростом community перед TGE.",
      "Move VM на Sui даёт параллельное исполнение — для нагрузки агентов это аргумент против конкурентов на EVM, хотя экосистема Sui меньше.",
    ],
    tips: [
      "Следи за официальными анонсами Talus в Discord/X — правила loyalty меняются по фазам кампании.",
    ],
    warnings: [
      "Проекты agent-economy на ранней стадии — токен и tokenomics могут измениться до mainnet.",
    ],
  },
  tanssi: {
    short:
      "Appchain-as-a-Service — запуск собственной parachain за минуты через Tanssi на Polkadot-стеке.",
    long:
      "Tanssi Network упрощает деплой application-specific blockchains: shared security, быстрый launch и tooling для dev-команд без собственного validator set.",
    tagline: "Своя chain за день — appchain infra без головной боли с валидаторами.",
    highlight:
      "Tanssi.network предлагает модель container chain (контейнерная цепь): проект получает выделенную среду исполнения с наследованием безопасности от Tanssi ретранслятора. Это ответ на боль «хочу свою chain, но не хочу запускать 100 валидаторов». Для gaming, DeFi и enterprise dApps — альтернатива типового L2. Testnet и faucet активны; основная ценность для разработчиков, не для розничных трейдеров. Конкуренция с сабнетами Avalanche и Orbit-цепями Arbitrum — каждый L1/L2 продаёт «свою chain», Tanssi ставит на стек Polkadot.",
    facts: [
      "Appchain meta 2024: после успеха Cosmos и Polkadot экосистем Tanssi пришёл с питч «безопасность Polkadot без мук аукциона».",
      "Tanssi testnet привлёк сотни dev-команд — метрика «chains launched» стала ключевым показателем для инвесторов в appchain infra.",
      "Конкуренция с сабнетами Avalanche и Orbit-цепями Arbitrum — каждый L1/L2 продаёт «свою chain», Tanssi ставит на стек Polkadot.",
    ],
    tips: [
      "Для dev-команд начни с Tanssi docs и testnet faucet перед production deploy.",
    ],
    warnings: [
      "Appchain = отдельный риск ликвидности и моста — пользователи должны понимать, на какой chain они работают.",
    ],
  },
  tempo: {
    short:
      "Payments-focused L1 от команды Stripe alumni — стабильные платежи и низкая latency для stablecoin transfers.",
    long:
      "Tempo (docs.tempo.xyz) — новый blockchain с фокусом на payments: оптимизация под USDC/stable transfers, faucet для testnet и developer-first onboarding.",
    tagline: "Chain для платежей — когда stablecoin transfer должен быть как Venmo.",
    highlight:
      "Tempo позиционируется как платёжная магистраль нового поколения: не general-purpose DeFi L1, а инфраструктура для merchant и consumer payments on-chain. Faucet на docs.tempo.xyz — точка входа в testnet. Команда с опытом в TradFi/платежах (связи с экосистемой Stripe) — редкий профиль в crypto. Для разработчиков payment apps и stablecoin wallets — early ecosystem с потенциалом грантов. Payments chains конкурируют с CCTP, Lightning и L2 stable rails — Tempo должен доказать UX, а не только слайды про TPS.",
    facts: [
      "Анонс Tempo в 2025 вызвал волну «выпускники Stripe строят chain» — нарратив платежей вернулся после лет доминирования DeFi.",
      "Faucet testnet стал первой точкой входа — тысячи dev-кошельков до mainnet, классический сценарий новых L1.",
      "Payment chains конкурируют с CCTP, Lightning и L2 stable rails — Tempo должен доказать UX, а не только слайды про TPS.",
    ],
    tips: [
      "Подключись к testnet через официальный faucet — не используй mainnet bridges до анонса.",
    ],
    warnings: [
      "Pre-mainnet chain — контракты и tokenomics могут измениться; не депозить production funds.",
    ],
  },
  teneo: {
    short:
      "DePIN-сеть сбора данных — dashboard.teneo.pro для запуска node и участия в data marketplace.",
    long:
      "Teneo Protocol — decentralized data collection network: пользователи запускают nodes, собирают публичные web/data feeds и получают rewards за качественные данные.",
    tagline: "DePIN для данных — node за rewards, не за мемы.",
    highlight:
      "Dashboard.teneo.pro — центр управления Teneo node: регистрация, мониторинг аптайм, claim rewards. Модель DePIN — операторы на железе и софте поставляют инфраструктуру данных, протокол агрегирует и продаёт доступ. Конкуренты: Grass, Hivemapper, Ocean — каждый в своей нише. Teneo фокусируется на структурированных потоках данных для AI и аналитики. Для участников важны stable internet и compliance с terms of data collection. DePIN boom 2024: Teneo среди проектов, где «запусти ноду дома» стало подработкой для crypto natives.",
    facts: [
      "DePIN boom 2024: Teneo среди проектов, где «запусти node дома» стало подработкой для crypto natives.",
      "Нарратив data marketplace: AI жаждет данных — DePIN-проекты ловят волну, но юридически серые зоны остаются.",
      "Запуск дашборд совпал с points-кампаниями — операторы node гоняли аптайм ради будущего airdrop.",
    ],
    tips: [
      "Проверь hardware requirements и regional restrictions перед запуском node.",
    ],
    warnings: [
      "Сбор данных может иметь legal implications — читай ToS и local privacy laws.",
    ],
  },
  theo: {
    short:
      "On-chain trading platform — perps и spot-рынками на theo.xyz для активных crypto traders.",
    long:
      "Theo — trading venue с perpetual и spot-рынками. Фокус на execution speed и clean UX для degens и semi-профи traders.",
    tagline: "Торговля на Theo — perp-терминал без лишнего шума.",
    highlight:
      "Theo.xyz предлагает leveraged trading и spot в единый интерфейс. Часть волны новых perp-фронтендов после успеха Hyperliquid — каждый chain и команда хочет свой «профессиональный терминал». Проверяй глубину ликвидности, ставки финансирования и поддерживаемый залог перед входом в позицию. Не голубая фишка среди DEX — обязательный due diligence по аудитам и модели хранения. Реферальная программа и механика баллов часто разгоняют ранний объём — органическая торговля идёт за стимулами, а не наоборот.",
    facts: [
      "Взрыв perp-терминалов 2024–2025: Theo среди десятков новых торговых интерфейсов, охотящихся за аудиторией Hyperliquid.",
      "Реферальная программа и баллы часто разгоняют ранний объём — органическая торговля идёт за стимулами, а не наоборот.",
      "Фишинг-клоны преследуют каждый новый perp бренд — добавь theo.xyz в закладки и проверяй SSL.",
    ],
    tips: [
      "Начни с минимального размера — проверь проскальзывание и механику ликвидации на тестовой сделке.",
    ],
    warnings: [
      "Leveraged trading — риск полной ликвидации; не торгуй заёмными средствами.",
    ],
  },
  theoriq: {
    short:
      "Theoriq — координация роя AI-агентов on-chain: swarm intelligence для DeFi и автоматизации стратегий.",
    long:
      "Theoriq.ai строит протокол, где множество AI-агентов коллективно принимают решения — от allocation до on-chain actions. AI×Web3 infra, не розничный обмен.",
    tagline: "Theoriq — рой агентов вместо одного «умного» бота.",
    highlight:
      "Theoriq объединяет LLM-агентов, ончейн-исполнение и экономику стимулов: агенты голосуют, координируют и исполняют стратегии через смарт-контракты. Для DeFi это обещание «децентрализованный quant desk»; для фермеров — testnet, квесты и ранний доступ. Риски: логика чёрного ящика, зависимость от оракулов и неопределённость токеномики. Следи за theoriq.ai и не переводи средства на «Theoriq presale» из Telegram.",
    facts: [
      "Нарратив роевого AI 2024–2025: Theoriq в одном ряду с проектами координации агентов — капитал пришёл быстрее рабочих демо.",
      "Коллективное решение агентов звучит как sci-fi — на практике бутылочным горлышком в задержке инференса и стоимости ончейн-транзакций.",
      "Testnet-квесты Theoriq попали в чеклисты охотников за airdrop вместе с Ritual и другими AI×crypto именами.",
    ],
    tips: [
      "Разработчикам: начни с sandbox и одного агента — swarm complexity растёт экспоненциально.",
    ],
    warnings: [
      "AI-стратегии on-chain — эксперимент; не депозить капитал, который не готов потерять из-за bug или bad trade.",
    ],
  },
  theradius: {
    short:
      "Theradius — on-chain social layer и community markets: радиус доверия вокруг identity и reputation.",
    long:
      "Theradius.xyz экспериментирует с social graph, reputation и tokenized community mechanics. Ранняя экосистема — следи за roadmap на официальном сайте.",
    tagline: "Theradius — социальный граф с skin in the game.",
    highlight:
      "Theradius позиционируется как протокол для community-native экономики: участники строят reputation, участвуют в markets вокруг social signals и получают on-chain incentives. Не классический DeFi DEX — скорее социальная инфраструктура с криптопримитивами. Для early adopters — подключение кошелька, квесты и community events. Ликвидность и product-market fit на ранней стадии — проверяй активность в официальных каналах, не только landing page.",
    facts: [
      "Сезон social protocol 2023–2025: Farcaster, Lens и десятки «radius» брендов — выживают те, у кого липкое community.",
      "Reputation on-chain — вечный питч: «ваш Twitter, но с деньгами»; retention часто слабее hype.",
      "Фишинг-клоны social dApp копируют connect wallet UI — theradius.xyz проверяй по закладке, не по рекламе.",
    ],
    tips: [
      "Подпишись на официальный X/Discord — продуктовые апдейты часто только там.",
    ],
    warnings: [
      "Ранняя стадия — token launch и правила snapshot могут измениться без предупреждения.",
    ],
  },
  titandex: {
    short:
      "Titandex — perp DEX с фокусом на глубину и скорость исполнения для активных трейдеров.",
    long:
      "Titandex.io — торговая площадка деривативов on-chain: бессрочные контракты, маржа и ликвидность пулов. Для тех, кто ищет альтернативу CEX perp.",
    tagline: "Titandex — perp DEX, где важны funding и глубина книги.",
    highlight:
      "Titandex входит в волну новых perp DEX post-2023: единый интерфейс, leverage, oracle-цены и incentive-кампании для раннего объёма. Сравнивай эффективный спред, ставки финансирования и ликвидность на твоих парах с Hyperliquid, dYdX и GMX. Аудиты и модель хранения — обязательная проверка перед крупной позицией. Поинты и реферальная программа часто разгоняют wash-объём — реальные трейдеры смотрят на глубину стакана, не на таблицу лидеров.",
    facts: [
      "Perp DEX wars 2024: десятки новых брендов боролись за farm-объём — удержание трейдеров сложнее привлечения.",
      "Wash-трейдинг на инсентив-программах — классика ранних DEX: таблицу лидеров ≠ реальная ликвидность.",
      "Фишинг-клоны Titandex с fake deposit — еженедельная головная боль новых perp брендов.",
    ],
    tips: [
      "Начни с малого размера и isolated margin — проверь ликвидацию на волатильной паре.",
    ],
    warnings: [
      "Плечо on-chain ликвидируется автоматически — health factor держи с запасом.",
    ],
  },
  towns: {
    short:
      "Towns — децентрализованный group chat on-chain: сообщества с токен-gated доступом и governance.",
    long:
      "Towns.com строит encrypted group messaging с Web3 ownership — spaces принадлежат community, а не централизованному серверу.",
    tagline: "Towns — Telegram, но комната принадлежит holders.",
    highlight:
      "Towns объединяет сквозное шифрование сообщений, ончейн-членство и токен-гейтинг пространств: создатели запускают town, участники покупают или earn доступ, governance решает правила. Для NFT-коллекций и DAO — альтернатива Discord со слоем владения. Для пользователей — мобильный/десктопный клиент и подключение кошелька. Риски: UX messaging apps высокий бар, competition с Farcaster/Lens/Telegram, и регуляторные вопросы вокруг зашифрованных коммуникаций.",
    facts: [
      "Towns поднял заметный раунд от a16z crypto — нарратив «децентрализованный Discord» вернулся после зимы Clubhouse.",
      "Токен-гейтинг чат-комнаты: хайп 2022, затем затишье — Towns пытается вернуть утилитарность через ончейн-владение.",
      "Зашифрованный групповой чат + криптокошелёк — трение UX: каждый лишний тап теряет 30% обычных пользователей по отраслевым бенчмаркам.",
    ],
    tips: [
      "Создавай town с чёткими rules membership — spam и bot farms ломают gated communities быстро.",
    ],
    warnings: [
      "Не публикуй seed phrase или private keys в town chats — social engineering через «support» не редкость.",
    ],
  },
  trade: {
    short:
      "Trade.xyz — perp-терминал с рынком BTC-USDC и unified UX для leveraged crypto trading.",
    long:
      "App.trade.xyz — on-chain trading interface для бессрочных контрактов и spot. Entry point каталога — пара BTC-USDC.",
    tagline: "Trade.xyz — BTC perp без лишних вкладок.",
    highlight:
      "Trade.xyz позиционируется как чистый perp-фронтенд: подключаешь кошелёк, выбираешь рынок (BTC-USDC и др.), торгуешь с плечом. Часть новой волны «профессиональных терминалов» после успеха Hyperliquid — каждая команда хочет свой кусок объёма perp-торговли. Реферальная программа в разработке — следи за официальными условиями. Проверяй funding, slippage и liquidation price перед размер позиции. Не CEX — риски смарт-контрактов и оракулов остаются.",
    facts: [
      "BTC-USDC perp — самая ликвидная пара на любом новом DEX; Trade.xyz ставит её в центр URL каталога.",
      "Referral pending в каталоге — типично для pre-launch incentive design до TGE или публичной программы.",
      "Perp frontends 2025: пользователи сравнивают Trade с Variational, Hyperliquid — побеждает UX + глубина, не только points.",
    ],
    tips: [
      "Сравни effective fee и funding с привычной площадкой на том же размер позиции — aggregated UI не всегда cheapest.",
    ],
    warnings: [
      "Leveraged positions — автоликвидация без margin call; не торгуй на последние средства.",
    ],
  },
  tradegenius: {
    short:
      "Tradegenius — AI-assisted trading insights и analytics для crypto markets, когда нужен copilot, а не blind degen.",
    long:
      "Tradegenius.com предлагает инструменты анализа, сигналы и AI-помощь для трейдеров. Не DEX как таковой — скорее аналитический слой поверх рынков.",
    tagline: "Tradegenius — AI-подсказки для трейдера, не замена risk management.",
    highlight:
      "Tradegenius комбинирует market data, on-chain analytics и резюме в стиле LLM для торговых решений. Для розничных трейдеров — дашборд и alerts; для профи — API и настраиваемые вотчлисты. Важно: AI-сигналы ≠ гарантированная альфа — бэктест и бумажная торговля перед реальным капиталом. Проверяй модель подписки, источники данных и политику конфиденциальности. Не подключай exchange API keys с withdraw permissions — read-only достаточно для analytics.",
    facts: [
      "AI trading tools boom 2024: сотни «ChatGPT for trading» landing pages — Tradegenius в cohort serious analytics, не meme bots.",
      "Retail traders overfit на historical AI signals — один regime change обнуляет «winning strategy» за неделю.",
      "API key leaks через third-party дашбордs — классический вектор drain; read-only keys industry standard.",
    ],
    tips: [
      "Используй AI output как input, не как order button — финальное решение и risk за тобой.",
    ],
    warnings: [
      "Не давай withdraw permissions сторонним analytics — только read-only API keys.",
    ],
  },
  treehouse: {
    short:
      "Treehouse — fixed income DeFi: tAssets и структурированный yield из staking, lending и RWA-подобных стратегий.",
    long:
      "Treehouse.finance строит протокол токенизированный фиксированный доход на Ethereum и за его пределами — «bonds» и yield products для DeFi natives.",
    tagline: "Treehouse — доходность со структурой, не только farm-and-pray.",
    highlight:
      "Treehouse предлагает tAssets — tokenized yield instruments с определённым сроком и risk profile. Для держателей стейблкоинов и ETH — способ получить структурированную доходность без ручного ребаланса между протоколами. Прозрачность ончейн, но базовые стратегии включают кредитование, ревклад и кредитный риск. Проверяй аудированные контракты, исторический NAV и просадки. Не банковский депозит — smart contracts, контрагентов и стратегий.",
    facts: [
      "Нарратив DeFi с фиксированным доходом 2024: после повышения ставок доходность TradFi упала — Treehouse и аналоги питчили «ончейн-облигации».",
      "Бум ревклада влиял на стратегии Treehouse — корреляция с колебаниями TVL экосистемы EigenLayer.",
      "Structured products в DeFi: один плохой залоговый актив — и «fixed» yield становится переменным убытком.",
    ],
    tips: [
      "Читай prospectus каждого tAsset — срок, состав залога и ликвидность выхода различаются.",
    ],
    warnings: [
      "Yield ≠ guaranteed; smart contracts и credit risk протоколов-партнёров остаются.",
    ],
  },
  trex: {
    short:
      "Trex — Bitcoin-native ecosystem: инфраструктура и приложения вокруг BTC без отхода от base layer narrative.",
    long:
      "Trex.xyz строит продукты и координационный слой для Bitcoin ecosystem — от tooling до community programs. Ранняя стадия — следи за trex.xyz.",
    tagline: "Trex — Bitcoin ecosystem hub, не очередной типового L2 питч.",
    highlight:
      "Trex позиционируется в нишу, дружественную BTC-максималистам: продукты и партнёрства вокруг модели безопасности Bitcoin, не «очередной клон EVM». Для Bitcoin natives — potential гранты, testnet и ecosystem apps. Для спекулянтов — ранний нарратив до ясного запуска токена. Конкуренция со Stacks, Botanix, Lightning-приложениями — каждый заявляет «настоящий Bitcoin DeFi». Проверяй только trex.xyz и verified social accounts.",
    facts: [
      "Bitcoin L2/L1.5 wave 2024–2025: Trex среди проектов, ловящих «BTC is back» narrative после ETF approval.",
      "Ecosystem hubs без shipping product — pattern: landing page + Discord + «soon» — Trex нужно доказать shipping.",
      "Fake «Trex token» на DEX появляется в день любого BTC brand анонса — проверяй contract source.",
    ],
    tips: [
      "Отделяй official Trex announcements от community rumors в CT.",
    ],
    warnings: [
      "Pre-product ecosystem — не инвестируй через unofficial presale или DM «early allocation».",
    ],
  },
  trustalabs: {
    short:
      "Trusta Labs — AI-powered trust scoring и anti-sybil для Web3: кто реальный user, а кто farm-bot.",
    long:
      "Trustalabs.ai строит reputation и identity layer для airdrops, quests и protocol onboarding — ML против сибил-армий.",
    tagline: "Trusta — скор доверия, когда каждый второй аккаунт — ферма.",
    highlight:
      "Trusta Labs анализирует ончейн и оффчейн-сигналы для оценки доверия: protocols используют API чтобы фильтровать sybil в campaigns и allocation. Для пользователей — «хороший» скор может открыть eligibility; для фермеров — кошмар. Компромиссы приватности: сколько данных ты отдаёшь за доступ. Партнёрства с L2 и квест-платформами растут — следи за trustalabs.ai docs. Не путай с unrelated «Trusta» tokens.",
    facts: [
      "Sybil wars 2024: после крупных airdrop protocols нанимали Trusta-подобные scoring — farmers ответили multi-wallet arms race.",
      "Trust скор как привратник: легитимные пользователи иногда flagged false positive — тикеты в саппорт и апелляции стали новой нормой.",
      "AI reputation layer — hot B2B in crypto; розничных трейдеров rarely sees product, feels outcome in airdrop eligibility.",
    ],
    tips: [
      "Веди один «main» кошелёк с organic history — scatter wallets hurt оценки доверияs на некоторых campaigns.",
    ],
    warnings: [
      "Trust скор opaque — алгоритм может измениться; не гарантия airdrop allocation.",
    ],
  },
  tryyourbest: {
    short:
      "Try Your Best (TYB) — brand loyalty on-chain: квесты, rewards и community engagement для любителей брендов.",
    long:
      "Tryyourbest.tyb.xyz — платформа TYB, где бренды запускают on-chain loyalty programs, а пользователи earn за активность и UGC.",
    tagline: "TYB — loyalty program бренда, но с кошельком и раздачами.",
    highlight:
      "TYB (Try Your Best) соединяет потребительские бренды и Web3-механику: пользователи вступают в бренд-сообщества, выполняют квесты, собирают награды и NFT-подобные бейджи. Для брендов — CRM 2.0 с криптонативной аудиторией; для пользователей — early доступ и раздачи от партнёров. Не DeFi — слой потребительского вовлечения. Проверяй privacy при linking social accounts. Скам-клоны часто имитируют популярные бренд-кампании.",
    facts: [
      "Brand loyalty Web3 2023–2025: Nike, Starbucks experiments — TYB infrastructure для smaller брендов wanting same playbook.",
      "UGC quests создают всплески вовлечения — then обрыв удержания when rewards pause; брендов learn hard lesson.",
      "Fake TYB campaign links in Instagram DMs — classic drain vector targeting brand fans.",
    ],
    tips: [
      "Участвуй только в кампаниях с верифицированным аккаунтом бренда — перепроверяй на официальном Twitter/IG бренда.",
    ],
    warnings: [
      "Не подписывай unlimited token approvals ради «brand points» — scope approve минимально.",
    ],
  },
  tusky: {
    short:
      "Tusky — decentralized storage wallet: Arweave и permaweb доступ через app.tusky.io с Web3 логина.",
    long:
      "Tusky (app.tusky.io) — клиент для хранения файлов в permaweb: загрузка, шеринг и управление данными без монополии централизованного облака.",
    tagline: "Tusky — облако, которое не удалит файлы по whim CEO.",
    highlight:
      "Tusky упрощает Arweave/permaweb storage для обычных пользователей: подключи кошелёк, upload files, pay storage once (or via bundlers), data persists. Для создателей NFT — хостинг метаданных; для архивистов — цензуроустойчивое хранилище. Не бесплатно как Google Drive — модель единоразовой оплаты в AR. UX улучшается, но крипто-онбординг остаётся трением. Конкуренты: Irys (Bundlr), Akord — сравнивай цены и скорость извлечения.",
    facts: [
      "Arweave storage narrative: «pay once, store forever» — Tusky делает UX palatable для non-technical создателей.",
      "NFT-метаданные на Arweave пережили сбои IPFS — Tusky едет на питче перманентности после отказов централизованных хостов.",
      "Bundlr/Irys integration changes fee structure — users confused when quote differs from last upload.",
    ],
    tips: [
      "Проверь file размер позиции limits и current AR/Irys fees перед bulk upload — cost не linear для huge files.",
    ],
    warnings: [
      "Permaweb ≠ editable — опечатка в metadata permanent; double-check before upload.",
    ],
  },
  unavatar: {
    short:
      "Unavatar — универсальный API аватаров по username/social handle: картинка профиля для apps и дашбордs.",
    long:
      "Unavatar.io агрегирует авatars из Twitter/X, GitHub, Gravatar и др. — утилитарность service, часто embed в Web3 дашбордs.",
    tagline: "Unavatar — одна ссылка, аватар из любой соцсети.",
    highlight:
      "Unavatar — developer утилитарность, не crypto protocol: GET запрос по username возвращает avatar image from multiple providers. В каталоге Web3 часто используется в таблиц лидеров, social торговых интерфейсов и квест-платформами (пример URL: unavatar.io/x/variational_io). Fallback chain когда primary provider fails. Для разработчиков — бесплатный тир и CDN; для пользователей — кошелёк не нужен. Приватность: запрос раскрывает интерес к конкретному handle в логах Unavatar.",
    facts: [
      "Unavatar от @Diego Haz — популярен в dev-Twitter как подключаемый микросервис аватаров.",
      "Web3 дашбордs embed Unavatar for CT identity — Variational и аналоги show faces without building own scraper.",
      "Изменения API провайдеров (лимиты Twitter/X) ломают резолвинг аватаров — бремя поддержки Unavatar реально.",
    ],
    tips: [
      "Разработчикам: кешируй ответы Unavatar — не долби API на каждой загрузке страницы.",
    ],
    warnings: [
      "Не используй Unavatar as security identity — avatars spoofable, не authentication.",
    ],
  },
  unichain: {
    short:
      "Unichain — L2 от Uniswap Labs: быстрые обмены, lower fees и home chain для Uniswap ecosystem.",
    long:
      "Unichain.org — OP Stack L2, built for DeFi with Uniswap as якорным приложением. Портал Explore для экосистемных dApps и моста.",
    tagline: "Unichain — L2, где Uniswap не гость, а хозяин.",
    highlight:
      "Uniswap Labs запустила Unichain как выделенный L2 для ликвидности и торговли: субсекундные блоки, низкие комиссии, нативная интеграция с видением Uniswap v4. Для LP и трейдеров — мост активов, обмен, исследуй экосистемные приложения на unichain.org/explore. Incentive programs и potential UNI-related rewards drive early activity. Конкуренция с Base, Arbitrum — Unichain ставит на brand Uniswap + developer гранты. Стандартные риски L2: мост, секвенсор, баги контрактов.",
    facts: [
      "Анонс Unichain 2024 — «Uniswap строит собственный L2» встряхнул ландшафт роллапов; Base и Arbitrum внимательно следили.",
      "Flashblocks sub-second UX — marketing win; real test = liquidity depth vs Ethereum mainnet Uniswap.",
      "Bridge to Unichain — top phishing target day one; fake bridge UI drained wallets within hours of launch.",
    ],
    tips: [
      "Bridge через official unichain.org links — verify URL character by character.",
    ],
    warnings: [
      "New L2 — audit maturity lower than Ethereum mainnet; start with small amounts.",
    ],
  },
  union: {
    short:
      "Union — протокол interoperability: IBC-style messaging и перевод активов между heterogeneous chains.",
    long:
      "Union.build строит ZK-мостовую инфраструктуру и кроссчейн-координацию — связь Cosmos, Ethereum и дальше.",
    tagline: "Union — мост нового поколения, не multisig 2019 года.",
    highlight:
      "Union фокусируется на с минимизацией доверия bridging через ZK proofs и модульный стек интероперабельности. Для цепей — плагин для безопасной передачи сообщений; для пользователей — перевод активов без травмы от старых взломов мостов. Тестнет-квесты и операции нод привлекают инфраструктура-энтузиастов. Конкуренты: Wormhole, LayerZero, Hyperlane — каждый заявляет превосходство в безопасности. Union ставит на ZK-верификацию — следи за union.build и вехами мейннета.",
    facts: [
      "Взломы мостов стоили миллиарды в 2022–2024 — питч Union «ZK-верифицирован» отозвался у пользователей, обожжённых Ronin и Wormhole.",
      "Ветераны экосистемы IBC пришли в Union — гонка за инженеров интероперабельности в Cosmos разгорелась.",
      "Объём testnet bridge часто на 90% боты — метрики не равны доверию mainnet в день запуска.",
    ],
    tips: [
      "Протестируй малые суммы на testnet — изучи finality times в каждом направлении.",
    ],
    warnings: [
      "Cross-chain bridge — максимальная attack surface в Web3; не переводи больше, чем готов потерять.",
    ],
  },
  uptopia: {
    short:
      "Uptopia — social gaming portal на portal.uptopia.xyz: quests, points и community metaverse-lite experience.",
    long:
      "Uptopia.xyz строит геймифицированный социальный слой — портал для событий, наград и ончейн-участия. Экосистемный хаб на ранней стадии.",
    tagline: "Uptopia — квесты и points в social gaming обёртке.",
    highlight:
      "Portal.uptopia.xyz — точка входа в Uptopia ecosystem: подключи кошелёк, выполни квесты, заработай баллы и вступают в seasonal campaigns. Не AAA-игровая студия — скорее комьюнити-платформа с Web3-стимулами. Для охотников за airdrop — очередной пункт чеклиста; для обычных пользователей — mini-games и социальные функции. Зрелость продукта варьируется — проверяй официальные каналы на активные сезоны и спящий портал.",
    facts: [
      "Волна геймифицированных порталов 2024: усталость от Galxe толкала проекты к кастомным порталам вроде Uptopia — UX неравномерный.",
      "Points seasons сбрасываются без предупреждения — фермеры научились делать screenshot таблицу лидеров еженедельно.",
      "Неактивный портал остаётся онлайн — пользователи подключают устаревшие контракты; проверяй дату последнего официального твита.",
    ],
    tips: [
      "Подтверди активный season в официальном X перед тратой gas на квесты.",
    ],
    warnings: [
      "Малоактивные portals — выше риск scam-клонов; проверяй SSL и social links.",
    ],
  },
  usecorn: {
    short:
      "Corn — Bitcoin DeFi chain: usecorn.com hub для BTC yield, мостов и native Bitcoin finance apps.",
    long:
      "Usecorn.com — entry to Corn Network ecosystem: Bitcoin-ориентированные приложения L2/L1 for yield, lending and trading with BTC as первостепенным активом.",
    tagline: "Corn — DeFi, где BTC не второстепенный guest asset.",
    highlight:
      "Corn Network targets «Bitcoin DeFi» niche: заворачивай BTC, зарабатывай доходность, use DeFi primitives without leaving Bitcoin security narrative. Usecorn.com — marketing and app hub. Competition intense — Merlin, B², Botanix fight for same users. Bridge security и BTC peg mechanics — critical due diligence. Ранние стимулы разгоняют TVL — органическое использование сложнее измерить.",
    facts: [
      "Войны TVL в BTC DeFi 2024–2025: Corn вышел в переполненное поле после возрождения Bitcoin через ETF.",
      "Поинт-кампании раздули TVL — падение после TGE исторически 40–70% на похожих цепях.",
      "Фейковые сайты моста Corn — скамеры покупают рекламу Google выше официального usecorn.com.",
    ],
    tips: [
      "Начни с малого теста BTC-моста — подтверди адрес получения и финальность на цепи назначения.",
    ],
    warnings: [
      "Bridged BTC ≠ native BTC модель хранения — разберись с wrapper issuer и redemption.",
    ],
  },
  usual: {
    short:
      "Usual — RWA stablecoin protocol: usual.money mints USD0 backed by real-world assets и DeFi collateral.",
    long:
      "Usual.money issues USD0 stablecoin with transparency on reserves — bridge between доходность TradFi and on-chain liquidity.",
    tagline: "Usual — стейбл с RWA backing, не только алгоритмический peg.",
    highlight:
      "Usual Protocol tokenizes treasury and credit exposure into USD0 — users mint/redeem against approved collateral basket. For DeFi — stablecoin for LP and lending; for ищущих доходность — базовая доходность RWA minus protocol fees. Post-UST world — reserve transparency is marketing and survival. Check usual.money дашбордs for backing composition. Smart contract, custody and RWA контрагентов risks apply.",
    facts: [
      "Гонка RWA stablecoin 2024: Usual конкурировал с Ethena, Ondo — каждый заявлял «real yield» превосходство.",
      "TVL USD0 после запуска рос на стимулах — скептики следили за очередями погашения в стресс-сценариях.",
      "Дебаты о раскрытии RWA backing — community требует on-chain proof of reserves, а не PDF reports.",
    ],
    tips: [
      "Следи за backing mix — сдвиг от T-bills к рискованному credit меняет risk profile незаметно.",
    ],
    warnings: [
      "Depeg стейбла возможен — нет FDIC; размер позиций соответственно.",
    ],
  },
  vana: {
    short:
      "Vana — data DAO для AI: пользователи contribute datasets, получают ownership и rewards в decentralized data economy.",
    long:
      "Vana.org координирует датасеты, принадлежащие сообществу, для ML-обучения — альтернатива дата-монополиям Big Tech.",
    tagline: "Vana — твои данные в DAO, не в silo Google.",
    highlight:
      "Vana строит network of DataDAOs: участники загружают structured data, валидаторы проверяют качество, buyers (AI labs) pay доступ. Token incentives align contributors and curators. For ML engineers — licensed datasets; for individuals — монетизация данных, которые создаёшь. Privacy and consent critical — read vana.org policies. AI×crypto crowded — Vana differentiates on data ownership narrative.",
    facts: [
      "Vana подняла заметный раунд в волне data DAO — сравнения с Ocean Protocol неизбежны.",
      "Квесты data contribution привлекли sybil uploads — контроль качества стал бутылочным горлышком.",
      "AI-обучение на пользовательских данных — GDPR и иски о согласии нависают над всем сектором.",
    ],
    tips: [
      "Не загружай персональные данные других людей — юридическая ответственность остаётся на загрузившем.",
    ],
    warnings: [
      "Токеномика данных экспериментальна — неликвидность и регуляторный риск высоки.",
    ],
  },
  vestmarkets: {
    short:
      "Vest Markets — perp и derivatives trading на trade.vestmarkets.com с focus на emerging markets pairs.",
    long:
      "Vestрынки — ончейн-торговая платформа для позиций с плечом. Trade.vestmarkets.com — primary interface каталога.",
    tagline: "Vest Markets — perp trading terminal для active traders.",
    highlight:
      "Vest Markets offers perpetual contracts with web trading UI: подключи кошелёк, select market, manage margin. Part of long tail perp DEX competition — сравнивай комиссии, funding and oracle sources with устоявшимися площадками. Liquidity on alt pairs may be thin — slippage hurts размер позиции. Audit status and команда doxxing — verify before depositing collateral.",
    facts: [
      "Emerging markets crypto trading grew 2024 — Vest positioned for regions underserved by US-centric CEX.",
      "Thin liquidity perp DEX: one whale order moves price 5% — retail stops hunted on low depth books.",
      "New perp brand weekly — Vest fights for mindshare against Hyperliquid, dYdX, GMX simultaneously.",
    ],
    tips: [
      "Проверь глубину order book перед размер позиции — используй limit orders на illiquid парах.",
    ],
    warnings: [
      "Деривативы — total loss возможен на leveraged positions; дисциплина stop-loss обязательна.",
    ],
  },
  vlayer: {
    short:
      "Vlayer — zk proofs для web data: verifiable fetch of HTTP/API responses on-chain без trust oracle middleman.",
    long:
      "Vlayer.xyz builds coprocessor infra — prove real-world web data in smart contracts via zero-knowledge.",
    tagline: "Vlayer — «источник правды» из интернета, доказуемо on-chain.",
    highlight:
      "Vlayer enables smart contracts to consume verified оффчейн data (APIs, websites) with ZK proofs of authenticity. Use cases: prediction market resolution, RWA price feeds, identity checks. Developer infra — not retail app. Partners integrate vlayer SDK; users feel it in dApps using verified web proofs. Proving cost and latency — practical limits. Follow vlayer.xyz docs for supported proof types.",
    facts: [
      "ZK coprocessor race 2024: vlayer, TLSNotary, Reclaim — each attacks oracle trust problem differently.",
      "Web2 API terms often prohibit on-chain republishing — legal gray zone for verified fetch products.",
      "First production integrations — wow demos; mainnet cost per proof still limits frequency.",
    ],
    tips: [
      "Builders: prototype on testnet — proof generation time affects UX directly.",
    ],
    warnings: [
      "Verified fetch ≠ verified truth — garbage API in, garbage proof out.",
    ],
  },
  vooi: {
    short:
      "Vooi — multi-chain perp DEX на app.vooi.io: unified margin и cross-chain trading experience.",
    long:
      "Vooi.io aggregates perpetual trading across chains — app.vooi.io entry with referral support in catalog.",
    tagline: "Vooi — perp на нескольких chain без десяти вкладок.",
    highlight:
      "Vooi нацелен на фрагментированный UX perp: один интерфейс, несколько бэкендов цепей, общая абстракция аккаунта где возможно. Referral link in catalog (pending program) — verify official terms on app.vooi.io. Compare funding, supported assets and withdrawal paths per chain. Cross-chain perp adds bridge risk on top of trading risk — understand settlement flow.",
    facts: [
      "Multi-chain perp 2024 narrative — Vooi among apps chasing Hyperliquid refugees across L2s.",
      "Referral code CAD7J3U in catalog URL — typical growth loop; terms change pre-TGE.",
      "Cross-chain margin accounting bugs — nightmare scenario users post about on new perp aggregators.",
    ],
    tips: [
      "Withdraw profits to cold wallet periodically — don't leave размер позиции on unaudited new DEX.",
    ],
    warnings: [
      "Cross-chain + leverage — compound risk; start small until trust established.",
    ],
  },
  wallet: {
    short:
      "Wallet.tx.xyz — кошелёк экосystem Tempo: payments-focused wallet для stablecoin transfers и testnet onboarding.",
    long:
      "Wallet on wallet.tx.xyz ties to Tempo chain — send/receive stables with UX optimized for payments, not DeFi degens.",
    tagline: "Tempo Wallet — кошелёк для платежей, не для 100 pending swaps.",
    highlight:
      "Tempo wallet (wallet.tx.xyz) дополняет платёжный нарратив Tempo L1: чистый поток отправки, низкие комиссии, интеграция тестнет-крана. Если Tempo преуспеет как платёжная магистраль, wallet is default onboarding. Early stage — features evolve with mainnet. Не храни крупные балансы на бета-кошельках — используй аппаратный кошелёк для сбережений, горячий для экспериментов.",
    facts: [
      "Payment chain + native wallet pattern — Tempo copies successful L2 onboarding playbooks.",
      "wallet.tx.xyz легко опечататься при фишинге — добавь в закладки официальную ссылку из docs.tempo.xyz.",
      "Beta wallet keys — user error loses funds; no bank recovery hotline.",
    ],
    tips: [
      "Link wallet from official Tempo docs only — avoid search engine ads.",
    ],
    warnings: [
      "Beta software — backup seed phrase before experimenting; treat as hot wallet only.",
    ],
  },
  walletconnect: {
    short:
      "WalletConnect — open protocol connecting dApps и mobile/desktop wallets: сканируй QR, подписывай транзакции безопасно.",
    long:
      "WalletConnect.network — industry standard for WalletConnect v2: thousands of wallets and dApps interoperate without browser extension lock-in.",
    tagline: "WalletConnect — мост между dApp и твоим кошельком.",
    highlight:
      "WalletConnect lets users connect MetaMask Mobile, Rainbow, Trust and hundreds others to any dApp via зашифрованную сессию and QR/диплинк. For пользователей — verify domain in wallet before approve; for devs — SDK integration standard. WalletConnect Network adds relay incentives and decentralization roadmap. Скам-dApps злоупотребляют WalletConnect ежедневно — кошелёк показывает источник, пользователь должен его прочитать.",
    facts: [
      "WalletConnect v2 migration 2023 — broke legacy dApps; ecosystem consolidated on relay network.",
      "Phishing sites trigger WalletConnect — user approves on fake Uniswap, drains in seconds.",
      "WalletConnect token WCT launch 2024 — community debated utility vs pure governance.",
    ],
    tips: [
      "Всегда проверяй, что dApp URL в кошельке совпадает с сайтом в браузере — mismatch = scam.",
    ],
    warnings: [
      "Не делись WalletConnect URI с незнакомцами — возможен session hijack.",
    ],
  },
  walrus: {
    short:
      "Walrus — decentralized storage на Sui: walrus.xyz для blob storage и publish data on-chain cheaply.",
    long:
      "Walrus Protocol on Sui provides programmable storage — разработчики хранят большие блобы with стирающим кодированием and Sui coordination.",
    tagline: "Walrus — хранилище для Sui dApps, не AWS invoice.",
    highlight:
      "Walrus (Mysten/Sui ecosystem) offers decentralized blob storage integrated with Sui transactions: games, NFTs and AI apps store media on Walrus, anchor hashes on-chain. For разработчиков — SDK and testnet; for пользователей — feel via apps using Walrus backends. Compare with Arweave (permanent) and IPFS (pinning) — Walrus optimized for Sui composability.",
    facts: [
      "Walrus launch on Sui — storage narrative paired with Sui gaming and AI agent boom 2024.",
      "Стирающее кодирование снижает стоимость против полной репликации — компромиссы по задержке извлечения обсуждаются разработчиками.",
      "Sui ecosystem гранты pushed Walrus integrations — many demos, fewer production apps yet.",
    ],
    tips: [
      "Разработчикам: тестируй задержку извлечения под нагрузкой — дешёвое хранилище ничего не значит, если медленное.",
    ],
    warnings: [
      "Decentralized storage immature — don't sole-copy critical data without backup strategy.",
    ],
  },
  wardenprotocol: {
    short:
      "Warden Protocol — intent-based DeFi на Cosmos: app.wardenprotocol.org для orders, AI-assisted execution и cross-chain actions.",
    long:
      "Warden on Cosmos SDK — users express intents («swap X for best Y»), solvers compete to fill on-chain.",
    tagline: "Warden — говори intent, не собирай swap tx вручную.",
    highlight:
      "Warden Protocol combines intent architecture with AI agents for DeFi execution: connect on app.wardenprotocol.org, set intent, protocol routes across DEXs and chains. Points campaigns and testnet common for Cosmos apps. Risks: solver collusion, MEV, smart contracts bugs. For Cosmos natives — familiar wallet (Keplr/Leap); for others — learning curve.",
    facts: [
      "DeFi на основе намерений 2024: Anoma, Uniswap UniswapX, Warden — нарратив горяч, принятие неравномерное.",
      "Cosmos app-chain revival — Warden among post-IBC projects chasing DeFi volume return.",
      "AI + intent marketing — users expect magic; failed intents from illiquid routes frustrate early.",
    ],
    tips: [
      "Устанавливай границы проскальзывания в намерениях — солверы оптимизируют для себя без ограничений.",
    ],
    warnings: [
      "Intent signing still approves token доступ — read permissions carefully.",
    ],
  },
  welf: {
    short:
      "Welf — consumer Web3 finance hub на welf.com: onboarding, cards или payments products для crypto natives.",
    long:
      "Welf.com — fintech-meets-Web3 платформа на ранней стадии; проверяй актуальные продукты на сайте.",
    tagline: "Welf — crypto finance для everyday spending narrative.",
    highlight:
      "Welf positions at intersection of traditional fintech UX and crypto rails — potential card, wallet or reward products depending on launch phase. For catalog tracking — monitor welf.com for official product announcements. Consumer crypto crowded (Crypto.com, Coinbase Card) — Welf must differentiate on fees or rewards. KYC and regional availability gate most пользователей.",
    facts: [
      "Crypto card wave 2021–2024: dozens launched, many на паузе after issuer partner exits.",
      "Consumer Web3 needs compliance budget — small командаs struggle vs Coinbase scale.",
      "Бренд Welf общий — проверяй SSL welf.com; несвязанные токены «Welf» существуют на DEX.",
    ],
    tips: [
      "Read fee schedule and FX markup before using any crypto card product.",
    ],
    warnings: [
      "Custodial products — not your keys; understand bankruptcy exposure.",
    ],
  },
  wormhole: {
    short:
      "Wormhole — cross-chain messaging и token bridge: wormhole.com connects Ethereum, Solana, Cosmos и 30+ chains.",
    long:
      "Wormhole protocol powers transfers and generic messaging between major L1s/L2s — backbone for multichain DeFi.",
    tagline: "Wormhole — мост между экосистемами, когда один chain мало.",
    highlight:
      "Wormhole Portal (wormhole.com) — official UI for bridging assets; W token governs protocol. Huge hack history ($320M 2022) led to security overhaul and guardian network hardening — still top bridge target for scammers fake sites. For пользователей — only official portal, verify token addresses on destination. For devs — Wormhole Connect embeds bridging. Native USDC CCTP competes on some routes.",
    facts: [
      "2022 Wormhole hack — one of largest bridge exploits; protocol survived, trust rebuilt slowly.",
      "Airdrop токена W 2024 — ранние пользователи моста праздновали; сибил-фильтры спорны.",
      "Fake Wormhole sites perennial — Google ads and Discord DM links drain weekly.",
    ],
    tips: [
      "Bookmark wormhole.com — never bridge from links in unsolicited messages.",
    ],
    warnings: [
      "Bridging delays and stuck transfers happen — support scammers impersonate help desks.",
    ],
  },
  xion: {
    short:
      "Xion — consumer L1 от Burnt: xion.burnt.com, onboarding без seed phrase через passkeys и fiat-friendly UX.",
    long:
      "Xion (xion.burnt.com) targets mainstream пользователей — abstract crypto complexity, gasless feel, Web2-smooth signup.",
    tagline: "Xion — chain для нормойies, не только для seed phrase veterans.",
    highlight:
      "Burnt's Xion removes friction: аккаунты на passkey, спонсируемый газ, встроенные потребительские приложения. For crypto natives — feels centralized-ish; for newcomers — feature. Testnet campaigns and mainnet apps on xion.burnt.com. Конкуренция: Solana Mobile, социальные приложения Base. Trade-off: модель хранения and recovery differ from pure EOA wallets.",
    facts: [
      "Нарратив потребительской цепи 2024–2025: Xion, игровые телефоны Sui — битва за некрипто-пользователя.",
      "Seedless onboarding — users love until they need cross-wallet portability.",
      "Бренд Burnt из пепла NFT — пивот Xion под присмотром ранних коллекционеров Burnt.",
    ],
    tips: [
      "Understand recovery flow before depositing — passkey loss scenarios differ by device.",
    ],
    warnings: [
      "Abstracted custody — read who holds keys and dispute resolution terms.",
    ],
  },
  xo: {
    short:
      "XO Market — prediction markets на beta.xo.market: торгуй исходами событий on-chain.",
    long:
      "Beta.xo.market — interface для markets на sports, crypto events и macro outcomes — shares on predictions.",
    tagline: "XO — ставь на исход, но через shares, не букмекер.",
    highlight:
      "XO Market offers prediction market UX: browse markets, buy YES/NO shares, profit on correct resolution. Beta tag means product evolving — liquidity varies wildly by event. Regulatory gray zones by jurisdiction — verify eligibility. Compare resolution rules with Polymarket/Kalshi before размер позиции. Криптонативная аудитория, ончейн-расчёты.",
    facts: [
      "Prediction market renaissance post-Polymarket 2024 — XO among challengers for crypto event niches.",
      "Beta liquidity: tight spreads on Super Bowl, empty books on obscure crypto governance votes.",
      "Resolution disputes — small markets suffer oracle ambiguity; read fine print.",
    ],
    tips: [
      "Начни с ликвидных mainstream events — изучи механику перед exotic markets.",
    ],
    warnings: [
      "Geographic restrictions могут действовать — обход через VPN может заморозить средства.",
    ],
  },
  xter: {
    short:
      "Xter.io — Web3 gaming platform: launch games, NFT assets и player rewards в одной экосystem.",
    long:
      "Xter aggregates game publishing tools and player-facing hub — quests, раздачи и marketplace для blockchain games.",
    tagline: "Xter — игровой хаб, где progress и assets on-chain.",
    highlight:
      "Xter.io supports game studios and players: discover games, подключи кошелёк, earn campaign rewards. Not single AAA title — platform play like Gala with regional focus. Token and NFT раздачи drive user spikes; retention depends on fun, not only incentives. Verify game contract addresses on xter.io — third-party fake games common.",
    facts: [
      "Web3 gaming platform glut 2023–2025 — Xter competes with Immutable, Ronin, dozens regional hubs.",
      "Play-to-earn hangover — users skeptical; platforms push «fun first» marketing again.",
      "Fake Xter game APKs — Android malware vector targeting охотников за airdrop.",
    ],
    tips: [
      "Download games only from official xter.io links — not Telegram files.",
    ],
    warnings: [
      "In-game assets illiquid — don't buy NFT gear as investment without active player base.",
    ],
  },
  yala: {
    short:
      "Yala — BTC-backed stablecoin protocol на yala.org: mint stable assets against Bitcoin collateral cross-chain.",
    long:
      "Yala.org brings Bitcoin collateralized stablecoins to multiple ecosystems — DeFi with BTC as backbone.",
    tagline: "Yala — стейбл на BTC, не на vapor collateral.",
    highlight:
      "Yala enables minting stable value from BTC deposits — bridge BTC, mint stable, use in partner DeFi apps. Competes with Atomicals, Liquid, and EVM wrapped-BTC stable projects. Oracle and liquidation mechanics define safety — read yala.org docs. Early incentives attract TVL; redemption stress untested until bear liquidation cascade.",
    facts: [
      "Нарратив стейбла под залог BTC укрепился после ETF — Yala едет на институциональном комфорте BTC.",
      "Cross-chain BTC collateral — bridge risk stacks on top of CDP risk.",
      "Liquidation cascades in 2022 taught market — BTC not immune to rapid depeg of stable products.",
    ],
    tips: [
      "Monitor collateral ratio and liquidation thresholds — BTC volatility still extreme.",
    ],
    warnings: [
      "Stable minted from crypto collateral can depeg — no lender of last resort.",
    ],
  },
  yaps: {
    short:
      "Yaps — Kaito AI social scoring на yaps.kaito.ai: измеряет influence и mindshare в Crypto Twitter.",
    long:
      "Yaps.kaito.ai tracks «yaps» — engagement metrics for CT accounts; projects use for marketing and airdrop eligibility signals.",
    tagline: "Yaps — скор за CT активность, когда tweets = resume.",
    highlight:
      "Kaito's Yaps quantifies crypto social influence: post quality, engagement, topic relevance feed into leaderboard scores. For создателей — visibility to projects seeking ambassadors; for projects — identify genuine voices vs bot farms. Спорно: геймификация провоцирует шитпостинг; фермеры оптимизируются под алгоритм. Не кошелёк — подключай аккаунт X по правилам Kaito.",
    facts: [
      "Kaito yaps таблицу лидеров 2024 — CT personalities competed publicly; drama when ranks shifted weekly.",
      "Projects used Yaps scores for marketing budgets — «pay the yappers» became industry phrase.",
      "Algorithm gaming — reply gangs and coordinated engagement inflated scores until filters updated.",
    ],
    tips: [
      "Authentic topical posts beat spam — Kaito filters evolve against obvious farming.",
    ],
    warnings: [
      "Social скор ≠ investment advice — sponsored yaps common, disclose conflicts.",
    ],
  },
  yellow: {
    short:
      "Yellow — DeFi/trading infrastructure на yellow.org: liquidity, perp или yield products depending on launch phase.",
    long:
      "Yellow.org — Web3 financial protocol на ранней/ evolving stage; verify live products on official site.",
    tagline: "Yellow — финансовый layer, следи за актуальным продуктом.",
    highlight:
      "Yellow brand in crypto often tied to trading or structured products — check yellow.org for current offering (perp, options, yield vault). Generic name attracts scam tokens — only interact via verified contracts linked from official site. Каналы сообщества анонсируют запуски функций; лендинг может отставать.",
    facts: [
      "Single-word color brands in crypto — high scam confusion; yellow.org must fight impersonators.",
      "DeFi protocol pivots common — Yellow roadmap may change quarter to quarter.",
      "Audit absence on new products — users aped anyway during bull; bear exposes exploits.",
    ],
    tips: [
      "Verify contract address from yellow.org docs — never from Discord «official» pin by mod impersonator.",
    ],
    warnings: [
      "Unaudited contracts — cap exposure until third-party review published.",
    ],
  },
  yupp: {
    short:
      "Yupp — AI model arena на yupp.ai: сравни ответы LLM side-by-side и vote за лучший.",
    long:
      "Yupp.ai crowdsources human preference data for AI training — chat, compare models, earn rewards.",
    tagline: "Yupp — голосуй за лучший AI, данные идут в training.",
    highlight:
      "Yupp gamifies model evaluation: prompt models, blind-compare outputs, vote winner. Data feeds AI labs improving RLHF. Crypto rewards and Web3 логина optional layers — core is preference collection. For AI enthusiasts — playground; for farmers — repetitive voting risks account flag. Privacy: prompts may be logged for training.",
    facts: [
      "Human preference data valuable post-ChatGPT — Yupp among platforms paying for votes.",
      "Model arena memes — users discovered favorite small models beat GPT on niche prompts.",
      "Фарминг наград через скриптовые голоса — платформы банят пакетные действия; политика добросовестного использования строгая.",
    ],
    tips: [
      "Thoughtful votes beat speed-farming — account quality matters for rewards.",
    ],
    warnings: [
      "Don't enter secrets or PII in prompts — data used for model training.",
    ],
  },
  zama: {
    short:
      "Zama — FHE для blockchain: confidential смарт-контракты с homomorphic encryption на zama.org.",
    long:
      "Zama.org pioneers fully homomorphic encryption in Web3 — compute on encrypted data without decrypting on-chain.",
    tagline: "Zama — контракты с секретом на уровне математики, не trust me bro.",
    highlight:
      "Zama builds fhEVM and tooling so developers write confidential DeFi, voting and identity apps. Данные зашифрованы end-to-end, валидаторы вычисляют вслепую. For privacy maximalists — holy grail; for devs — performance and learning curve real. Partnerships with major L1s announced — follow zama.org developer docs. ZAMA token community anticipated — verify official announcements only.",
    facts: [
      "FHE considered slower than ZK for many tasks — Zama optimization papers watched by researchers.",
      "Confidential token transfers — dream for institutions entering DeFi without transparent books.",
      "Fake ZAMA token lists on DEX before official launch — classic crypto scam pattern.",
    ],
    tips: [
      "Developers start with Zama Concrete library tutorials — FHE unlike нормойal Solidity.",
    ],
    warnings: [
      "Experimental cryptography — not production-ready for all use cases; audit before mainnet funds.",
    ],
  },
  "zee-verse": {
    short:
      "Zeeverse — Web3 RPG на zee-verse.com: monsters, PvE/PvP и NFT progression в fantasy setting.",
    long:
      "Zee-verse.com — blockchain game with playable characters, land and token economy; earn-through-gameplay model.",
    tagline: "Zeeverse — лови монстров on-chain, progress = assets.",
    highlight:
      "Zeeverse combines turn-based RPG mechanics with Web3 ownership: heroes, items and land as NFTs, battles and quests for rewards. For gamers — client download and wallet connect; for спекулянтов — token and land volatility. Post-2022 P2E crash — sustainable fun questioned; команда updates roadmap on official channels. Gas and chain choice affect UX.",
    facts: [
      "Zeeverse survived P2E winter when many RPG tokens went -95% — small loyal player base remained.",
      "NFT land speculation 2022 peak — empty maps common when player count dropped.",
      "Эмиссия игровых токенов против заработков игроков — напряжение токеномики вызывало дебаты в сообществе.",
    ],
    tips: [
      "Try free-to-play path before buying land NFTs — verify active player population.",
    ],
    warnings: [
      "In-game tokens highly volatile — don't spend rent money on digital monsters.",
    ],
  },
  zerobase: {
    short:
      "Zerobase — perp/trading app на app.zerobase.pro с referral onboarding и points campaigns.",
    long:
      "App.zerobase.профи — trading interface для leveraged crypto markets; catalog includes referral code parameter.",
    tagline: "Zerobase — perp-терминал с реферальным входом.",
    highlight:
      "Zerobase offers perp or advanced торговых интерфейсов with growth via referral codes (catalog: ?code=21FI4). Verify official app.zerobase.pro domain — typosquat common. Compare liquidity and fees with established DEX before depositing. Points seasons may inflate volume — distinguish organic from farmed.",
    facts: [
      "Referral code in URL — growth hack; terms change when program goes public or ends.",
      "New perp apps launch weekly 2025 — Zerobase fights for same degens as Trade.xyz, Vooi.",
      "Referral таблицу лидеров farmers — wash-объём to climb tiers; protocol may clawback rewards.",
    ],
    tips: [
      "Confirm referral terms still active — expired codes sometimes still in old blog posts.",
    ],
    warnings: [
      "Leveraged trading — liquidation wipes account; not learning tool with life savings.",
    ],
  },
  zeusnetwork: {
    short:
      "Zeus Network — Bitcoin liquidity на Solana: zeusnetwork.xyz bridges BTC trustlessly для DeFi on Solana.",
    long:
      "Zeusnetwork.xyz connects Bitcoin and Solana ecosystems — deposit BTC, mint zBTC, use in Solana DeFi apps.",
    tagline: "Zeus — BTC на Solana без централизованного custodian bridge.",
    highlight:
      "Zeus Network uses cryptographic protocols to bring native BTC liquidity to Solana DeFi — lending, LP, perp collateral. Competes with wBTC, tBTC, Portal. Security model and validator set — read zeusnetwork.xyz technical docs. Solana DeFi spikes drive zBTC demand; bridge outages strand users historically industry-wide.",
    facts: [
      "BTC on Solana narrative 2024 — Zeus among bridges after Jupiter and Kamino hunger for BTC collateral.",
      "Trust-minimized BTC bridge marketing — users still wait for battle-tested years like wBTC.",
      "Solana network outages — DeFi positions frozen; BTC bridge users feel double stress.",
    ],
    tips: [
      "Bridge small test amount first — confirm mint address of zBTC on Solana explorer.",
    ],
    warnings: [
      "Bridged BTC carries smart contracts risk — not same as holding in Bitcoin wallet.",
    ],
  },
  zircuit: {
    short:
      "Zircuit — ZK rollup L2 на zircuit.com: EVM-compatible chain с security focus и ecosystem incentives.",
    long:
      "Zircuit L2 combines optimistic and ZK elements for Ethereum scaling — bridge, swap and farm on zircuit.com.",
    tagline: "Zircuit — L2 с ZK security narrative и farm seasons.",
    highlight:
      "Zircuit launched as Ethereum L2 with emphasis on секвенсор security and hybrid proof system. Users bridge ETH, interact with DeFi apps, earn season points. Фермеры airdrop заполонили тестнет/мейннет рано — сибил-фильтры вероятны. Compare with zkSync, Scroll, Linea — crowded L2 field. Official bridge only from zircuit.com.",
    facts: [
      "Сезонные баллы Zircuit 2024 — фермеры депозитили, мостили, обменивали ежедневно ради гипотетического airdrop.",
      "Hybrid ZK/optimistic marketing — technologists debated if best of both or complexity burden.",
      "L2 airdrop fatigue 2025 — users question ROI of another bridge-and-swap season.",
    ],
    tips: [
      "Diversify L2 farming time — no guarantee Zircuit token or allocation materializes.",
    ],
    warnings: [
      "Season rules change — snapshot criteria often undisclosed until last minute.",
    ],
  },
  zkverify: {
    short:
      "ZkVerify — parachain для universal ZK proof verification: zkverify.io validates proofs from any chain.",
    long:
      "Zkverify.io provides dedicated verification layer — submit proofs, get cheap on-chain attestation for Polkadot and beyond.",
    tagline: "ZkVerify — нотариус для zero-knowledge proofs.",
    highlight:
      "ZkVerify builds infrastructure where rollups and apps outsource proof verification to specialized chain — reduces cost on L1/L2 origin chains. For developers — SDK and testnet; for token holders — potential staking of verification nodes. Niche infra — understand if your use case needs universal verifier vs native rollup proof.",
    facts: [
      "Стоимость верификации доказательств двигала экономику L2 — zkVerify ставит на специализацию как blob-пространство на Ethereum.",
      "Polkadot parachain slot — zkVerify in interoperability + ZK infrastructure cohort.",
      "Безопасность универсального верификатора — один баг влияет на множество подключённых систем; объём аудита критичен.",
    ],
    tips: [
      "Integrators benchmark verification cost vs posting proof on home chain — not always cheaper.",
    ],
    warnings: [
      "Infra tokens speculative — revenue to token link often unclear early stage.",
    ],
  },
  zofai: {
    short:
      "Zofai — AI agents для on-chain automation на zofai.io: bots выполняют DeFi tasks по твоим rules.",
    long:
      "Zofai.io deploys configurable AI agents for trading, monitoring and executing smart contracts interactions.",
    tagline: "Zofai — делегируй рутину агенту, но контроль оставь у себя.",
    highlight:
      "Zofai lets users set agent strategies: monitor pools, execute swaps, alert on conditions — AI layer over wallet actions. Риски: неправильная конфигурация агента, разрешения ключей, галлюцинации модели, триггерящие плохие сделки. Начни с оповещений read-only перед автоисполнением. Crowded AI agent space — verify zofai.io audits and permission model.",
    facts: [
      "AI trading agents 2024 hype — Zofai among tools promising «set and forget DeFi».",
      "Agent with unlimited token approval — кошмар when prompt injection attacks surface.",
      "Пользователи делятся скриншотами стратегий агентов — копитрейдинг без понимания вызвал потери.",
    ],
    tips: [
      "Cap agent spending limits and token approvals — revoke after session.",
    ],
    warnings: [
      "Autonomous agents can lose funds faster than manual trading — test with small amounts.",
    ],
  },
  zora: {
    short:
      "Zora — creator platform и L2 на zora.co: mint NFT, creator coins и social feed для on-chain media.",
    long:
      "Zora.co evolved from NFT minting to creator economy hub — Zora Network L2 for cheap mints and trading.",
    tagline: "Zora — mint и monetize creativity on-chain, не только jpeg flip.",
    highlight:
      "Zora supports создателей minting media as NFTs, launching creator coins and building on-chain social graph. Zora Network L2 снижает стоимость минта против мейннета Ethereum. 2024–2025 creator coin meta brought attention and volatility — coins can pump and dump on single posts. For collectors — discover emerging artists; for создателей — direct monetization without platform rent. Используй официальное приложение zora.co; проверяй контракты коллекций.",
    facts: [
      "Creator coins Zora 2024 — инфлюенсеры CT запускали монеты; некоторые с миллионом MCAP за часы, -90% на следующей неделе.",
      "NFT mint platform since early days — Zora pivoted to social + coins staying relevant post-OpenSea volume drop.",
      "Fake Zora mint links — scammers clone mint pages for hyped раздачи; official zora.co only.",
    ],
    tips: [
      "Research creator track record before buying creator coin — most illiquid after initial hype.",
    ],
    warnings: [
      "Creator coins extremely speculative — can lose entire position on low liquidity exit.",
    ],
  },
};
