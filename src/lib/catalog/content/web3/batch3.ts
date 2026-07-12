import type { PlatformContent } from "@/lib/catalog/content/types";

export const WEB3_BATCH_3: Record<string, PlatformContent> = {
  gate2: {
    short:
      "Второй шлюз экосистемы Oshi — on-chain вход в игры и социальные dApps на gate2.oshi.co.",
    long:
      "Gate2 — часть платформы Oshi, Web3-инфраструктуры для игр и социальных приложений. Точка входа для подключения кошелька, аутентификации и взаимодействия с on-chain контентом экосистемы.",
    tagline: "Шлюз Oshi — один вход в игровой Web3.",
    highlight:
      "Gate2 на gate2.oshi.co работает как портал в экосистему Oshi: подключение кошелька, доступ к играм и социальным функциям без классического Web2-логина. Модель «шлюза» — стандарт для consumer crypto: один вход, много dApps. Ликвидность и база пользователей зависят от внедрение конкретных игр на платформе. Для тех, кто уже в экосистеме Oshi, — обязательная точка; для остальных — нишевый игровой-вход.",
    facts: [
      "Consumer игровой gates 2024–2025: десятки платформ копировали модель «один логин — много мини-игр» после успеха Telegram crypto приложения.",
      "Oshi и подобные шлюзы борются за удержание после airdrop сезон — «липкие» игры решают больше, чем красивый лендинг.",
      "Название Gate2 намекает на итерацию продукта — первые версии шлюзов часто переписывают полностью после запуск week.",
    ],
    tips: [
      "Проверь, какую сеть поддерживает Gate2 перед подключением — не все игровой gates multi-chain с первого дня.",
    ],
    warnings: [
      "Игровой портал — риск смарт-контрактов каждой отдельной игры, а не только UI шлюза.",
    ],
  },
  genlayer: {
    short:
      "L1 с optimistic smart контракт и AI-логикой — on-chain решения, которые «думают» через LLM.",
    long:
      "GenLayer — блокчейн нового типа: смарт-контракты могут вызывать AI-модели on-chain через оптимистичную верификацию. Для dApps, где нужны не только if/else, но и интерпретация текста, изображений или сложных условий.",
    tagline: "Смарт-контракты с AI — когда кода не хватает.",
    highlight:
      "GenLayer на genlayer.com предлагает смену парадигмы: контракт отправляет prompt, валидаторы проверяют output через optimistic-механизм. Сценарии — prediction рынки с разрешением на естественном языке, AI-арбитраж, интеллектуальные оракулы. Ранняя стадия — экосистема разработчиков формируется, testnet активен. Риск: выводы AI недетерминированы; экономическая безопасность модели ещё не доказана в production.",
    facts: [
      "GenLayer подняла seed от tier-1 VC с тезисом «AI + blockchain convergence» — нарратив 2024–2025 после бума ChatGPT.",
      "Optimistic AI verification — новый примитив: если два валидатора не согласны с выводом LLM, challenge game решает спор экономически.",
      "Критики сравнивают с старыми «AI oracle» проектами 2018 — GenLayer заявляет лучший crypto-economic дизайн, рынок ждёт мейннет подтверждение.",
    ],
    tips: [
      "Разработчикам: начни с testnet docs — паттерны AI-контрактов отличаются от Solidity best practices.",
    ],
    warnings: [
      "Недетерминированный AI on-chain — новая категория риска; не деплой production funds без audit trail.",
    ],
  },
  gensyn: {
    short:
      "Децентрализованные ML-вычисления — распределённая сеть для обучения AI-моделей без монополии облачных гигантов.",
    long:
      "Gensyn — протокол децентрализованных вычислений для машина learning. Владельцы GPU и поставщики данных объединяются в trustless-сеть для training и inference.",
    tagline: "Децентрализованные вычисления для ML без Big Tech.",
    highlight:
      "Gensyn.ai строит marketplace ML compute: исследователи отправляют задания, провайдеры исполняют на распределённом железе, верификация через криптографические доказательства. Конкурирует с io.net, Render, Bittensor в DePIN-AI секторе. Ранняя стадия с сильной академической базой. баллы/testnet кампании привлекли добытчиков; внедрение реальных ML-нагрузок — ключевой metric для долгосрочности.",
    facts: [
      "Gensyn привлекла $43M+ от a16z и других — один из крупнейших раундов в DePIN-AI 2023.",
      "Testnet queue: тысячи GPU-провайдеров зарегистрировались, но реальные training задача отставали от хайпа — классическая DePIN chicken-and-egg.",
      "ML verification on-chain — сложная задача; подход Gensyn цитируют в academic papers, production scale не доказан.",
    ],
    tips: [
      "GPU-провайдерам: проверь время работы requirements и slashing rules перед подключением железа.",
    ],
    warnings: [
      "DePIN баллы ≠ гарантированный токен — добывай ответственно, амортизация железа — реальная статья расходов.",
    ],
  },
  getgrass: {
    short:
      "DePIN пропускная способность сеть — продай неиспользуемый интернет-трафик и заработай баллы за участие в AI данные слой.",
    long:
      "Grass (getgrass.io) — сеть, где пользователи делятся пропускная способность для web scraping и сбора данных для AI training. Browser extension или desktop приложения, нарратив пассивного заработка.",
    tagline: "Grass DePIN — продай пропускная способность AI-компаниям.",
    highlight:
      "Getgrass.io взорвался в 2024 через реферальный program и маркетинг «пассивного дохода»: установи extension, делись неиспользуемым пропускная способность, зарабатывай Grass баллы. Поддержка Wynd Labs. приватность concerns обсуждались в сообщество — что именно роутится через твой IP. Связи с Solana ecosystem для potential токены. Миллионы нод зарегистрированы; устойчивость зависит от реального B2B-спроса на пропускная способность vs реферальный добыча.",
    facts: [
      "Grass реферальный ссылки залили crypto Twitter 2024 — «sign up with my ссылка» стал мемом наравне с Hamster Kombat.",
      "приватность debate: sharing residential IP для scraping — legal и ethical gray zone; пользователи часто не читают ToS.",
      "100M+ nodes claimed — скептики отмечают много неактивных; B2B revenue disclosure ограничен для розничные пользователи.",
    ],
    tips: [
      "Читай ToS про legal use of shared пропускная способность — liability может быть на стороне пользователя.",
    ],
    warnings: [
      "Sharing IP для third-party scraping — potential ToS violation ISP и приватность риск.",
    ],
  },
  getoptimum: {
    short:
      "DePIN-сеть GetOptimum — оптимизация распределённых ресурсов и маршрутизация для Web3-инфраструктуры на getoptimum.xyz.",
    long:
      "GetOptimum — проект в DePIN/инфраструктура space с фокусом на оптимизацию distributed resources. Testnet и баллы programs для ранних участников.",
    tagline: "Optimum маршрутизация — эффективная DePIN-инфраструктура.",
    highlight:
      "Getoptimum.xyz позиционируется в переполненном DePIN-рынке: optimization слой для compute, пропускная способность или данные маршрутизация. Ранняя стадия — сайт и приложения заточены на onboarding операторы нод и добытчиков. Конкретный tech stack и tokenomics требуют проверки актуальных docs. Типичный playbook 2024: testnet → баллы → надежда на TGE.",
    facts: [
      "DePIN naming explosion 2024: «Optimum», «Gradient», «Hyperbolic» — битва за mindshare в одном нарративе.",
      "баллы programs без раскрытия revenue — розница добывает спекулятивно, VC ставят на TAM сектора.",
      "DePIN-инфраструктура выживет в 2025 только с реальными корпоративный-контрактами, а не счётчиком нод.",
    ],
    tips: [
      "Сверяй домен getoptimum.xyz с официальными каналами — фишинг-клоны DePIN часты в сезон баллы.",
    ],
    warnings: [
      "Ранний DePIN — токен может так и не выйти; относись к баллы как к лотерейному билету, не к зарплате.",
    ],
  },
  getoro: {
    short:
      "доходность-приложение на app.getoro.xyz — on-chain квесты и пассивные стратегии для ранних пользователей.",
    long:
      "GetOro — Web3-приложение с фокусом на доходность opportunities, квесты и сообщество награды. Точка входа для подключения кошелька и участия в программах ранней активности.",
    tagline: "GetOro — доходность-квесты для ранних пользователей.",
    highlight:
      "app.getoro.xyz предлагает типичный ранний-stage crypto UX: подключение кошелёк, выполняй задания, получай баллы или boosted доходность на поддерживаемых активах. Модель зависит от партнёрских протоколов и emissions — проверяй актуальные pools перед депозитом. Для добытчиков airdrop meta и доходность chasers, готовых к smart контракт риск на молодых платформах. Не blue-chip DeFi — due diligence обязателен.",
    facts: [
      "доходность aggregator приложения 2024–2025: десятки «oro/gold» брендов конкурировали за кошелёк подключение — удержание решает реальный APR, не реферальный.",
      "баллы + доходность combo: пользователи часто не различают organic доходность и inflationary токены награды.",
      "партнёрские протокол риск: если underlying хранилище compromised, UI GetOro не защитит депозит.",
    ],
    tips: [
      "Сверяй адрес контракта хранилище с официальным Discord/Twitter партнёра — не только с UI приложения.",
    ],
    warnings: [
      "Высокий displayed APR часто = emissions — учитывай dilution и unlock schedule токена.",
    ],
  },
  gigaverse: {
    short:
      "On-chain RPG Gigaverse — dungeon crawler с NFT-персонажами и прогрессом в экосистеме Abstract/Ethereum.",
    long:
      "Gigaverse (gigaverse.io) — crypto-нативная игра в жанре dungeon RPG: mint персонажей, прохождение подземелий, on-chain loot и сезонные ивенты.",
    tagline: "Gigaverse — подземелья, loot и on-chain прогресс.",
    highlight:
      "Gigaverse строит липкий игровой цикл: персонажи, снаряжение, забеги по подземельям и сезоны таблиц лидеров на gigaverse.io. Интеграции с L2 вроде Abstract снижают газ для казуальных сессий. Модель «игра → NFT → вторичный рынок» знакома по Axie era, но команда делает упор на fun-first. Для геймеров Web3 и коллекционеров NFT. Следи за минимальной ценой персонажей и полезностью в новых сезонах — без полезности NFT быстро обесцениваются.",
    facts: [
      "Abstract игровой wave 2024–2025: Gigaverse среди первых titles на chain — конкуренция с Parallel, Pirate Nation за mindshare.",
      "Dungeon RPG on-chain: газ цена per run matters — выбор L2 определяет, playable ли игра для mass рынок.",
      "сезон resets и power creep — типичная модель live-service crypto игры; ранний adopters иногда теряют edge после rebalance.",
    ],
    tips: [
      "Перед mint персонажа проверь secondary floor и активный player количество — пустой dungeon = мёртвая игра.",
    ],
    warnings: [
      "Игровые NFT волатильны — не покупай gear на пике сезон хайп без понимания post-сезон utility.",
    ],
  },
  glacier: {
    short:
      "Modular данные слой Glacier — верифицируемый storage и indexing для AI и DePIN на glacier.io.",
    long:
      "Glacier сеть — инфраструктура данных для Web3 и AI: decentralized indexing, верифицируемый storage и данные availability для dApps и ML pipelines.",
    tagline: "Glacier — данные слой для AI × Web3.",
    highlight:
      "Glacier.io позиционируется на пересечении данных для обучения AI и блокчейн-верифицируемости: провайдеры хранят и индексируют наборы данных, клиенты получают доказательства целостности. Конкурирует с Filecoin, Arweave, Celestia-adjacent narratives в данные availability. Тестнет-кампании и программы нод для ранних операторов. Для dev teams, которым нужен trustless данные pipeline, и DePIN добытчики с storage capacity. Revenue модели ещё формируется — баллы сезон ≠ sustainable business.",
    facts: [
      "AI данные licensing 2024: Glacier и аналоги пытались monetize «consented datasets» — legal framework отстаёт от crypto speed.",
      "Modular DA stack: данные layers multiply — победят те, у кого реальные платящие AI-клиенты, а не счётчик нод.",
      "Storage DePIN history: Sia/Storj decades of «replace AWS» — розница всё ещё предпочитает S3 для production.",
    ],
    tips: [
      "Операторам нод: проверь пропускная способность и storage гарантии сервиса в docs — слабое железо не квалифицируется на награды.",
    ],
    warnings: [
      "данные слой токены часто опережают мейннет utility — не вкладывайся в железо только ради баллы.",
    ],
  },
  glob: {
    short:
      "Shaga GLOB — DePIN cloud игровой на glob.shaga.xyz: раздавай compute и играй в distributed game streaming.",
    long:
      "Glob (Shaga) — decentralized cloud игровой сеть: операторы нод предоставляют GPU для streaming, игроки получают низкий-latency сессии через P2P/edge маршрутизация.",
    tagline: "Shaga GLOB — cloud игровой без центрального DC.",
    highlight:
      "Glob.shaga.xyz — игровой-focused DePIN от Shaga: операторы запускают nodes с GPU, игроки подключаются к сессии без классического Stadia-style central DC. Latency и качество зависят от geographic дистрибуция nodes — ранние сети patchy. баллы и реферальный programs привлекли добытчиков; реальный тест — тянет ли AAA-titles стабильно. Для любопытных геймеров и владельцев GPU с idle capacity. приватность: игровой traffic через third-party nodes — читай ToS.",
    facts: [
      "Cloud игровой DePIN 2024: Shaga, Aethir, LiquidSky — «Netflix для игры on blockchain» на каждом слайде.",
      "Latency убивает cloud игровой: decentralized nodes без dense coverage проигрывают GeForce NOW в metro areas.",
      "Пересечение GPU DePIN: один RTX 4090 добывают на io.net, Render, Shaga — двойной добыча может нарушать ToS.",
    ],
    tips: [
      "Операторам нод: измерь upload пропускная способность и ping — cloud игровой требует stable низкий-latency uplink.",
    ],
    warnings: [
      "Ранний DePIN игровой — сессии могут обрываться; не заменяет локальный игровой для competitive play.",
    ],
  },
  gobob: {
    short:
      "BOB (Build on Bitcoin) — hybrid L2 на gobob.xyz: Ethereum programmability с Bitcoin безопасность narrative.",
    long:
      "BOB — rollup/hybrid chain, соединяющий Bitcoin ликвидность и Ethereum smart контракт ecosystem. Мосты, DeFi и BTC-backed приложения на gobob.xyz.",
    tagline: "BOB hybrid L2 — Build on Bitcoin.",
    highlight:
      "Gobob.xyz продвигает «Bitcoin Renaissance»: BTC не только store of ценность, но и collateral/programmable слой через BOB hybrid дизайн. Ecosystem приложения, мост из Bitcoin, EVM-compatible execution. Конкурирует с Stacks, Merlin, Botanix за BTC L2 mindshare. ранний мост риск и wrapped BTC assumptions — стандартные предупреждения. Для BTC holders, желающих DeFi без полного exit в alt-L1, и разработчики on Bitcoin narrative.",
    facts: [
      "BTC L2 gold rush 2024–2025: BOB, Merlin, B² — десятки chain заявляют «реальный Bitcoin DeFi» до доказательства TVL.",
      "Wrapped BTC мост history: каждый hack учит одному — сверяй custodian и audit моста перед крупным transfer.",
      "Hybrid L2 marketing vs безопасность модели: пользователи часто не читают, нативная ли BTC on L2 или IOU.",
    ],
    tips: [
      "Перед мост сверь официальный мост контракт address — BTC L2 phishing sites множатся каждый квартал.",
    ],
    warnings: [
      "мост и wrapped BTC — elevated smart контракт риск; не держи life savings в L2 BTC IOUs.",
    ],
  },
  godaylight: {
    short:
      "Daylight onchain identity — godaylight.com связывает приложения, награды и учётные данные в единый кошелёк слой.",
    long:
      "Daylight — платформа onchain identity и награды: пользователи собирают учётные данные, участвуют в кампании и подключают приложения через единый профиль на godaylight.com.",
    tagline: "Daylight — onchain identity и награды hub.",
    highlight:
      "Godaylight.com строит «операционную систему для on-chain жизни»: подключи кошелёк, собирай бейджи и учётные данные, получай награды от партнёрских приложений. Пересекается с нарративами социального графа и лояльности — не чистый DeFi. Энергетический и экологический углы в брендинге привлекают ESG-любопытных пользователей. Ранняя стадия — кампании и баллы; долгосрочная ценность в сетевых эффектах между приложениями. Для опытных пользователей, собирающих on-chain репутацию, и приложений, ищущих верифицированную аудиторию.",
    facts: [
      "Onchain identity 2024: Daylight, Galxe, Passport stacks overlap — усталость от десятого «подключение кошелёк для badge».",
      "награды without ликвидность: баллы от identity приложения редко конвертируются в meaningful токены ценность at TGE.",
      "партнёрские приложения churn: если партнёры уходят, credential graph теряет utility для end пользователи.",
    ],
    tips: [
      "Разделяй кошелёк для identity добыча и основной savings — sybil и партнёрские leaks случаются.",
    ],
    warnings: [
      "Identity платформы агрегируют кошелёк history — приватность trade-off vs награды.",
    ],
  },
  gokite: {
    short:
      "Testnet Kite AI на testnet.gokite.ai — AI-нативная blockchain для ранних пользователей и разработчиков.",
    long:
      "GoKite / Kite AI — L1 с фокусом на AI нагрузки и on-chain inference. Testnet для транзакций, faucet и разработчики onboarding.",
    tagline: "Kite AI testnet — blockchain для AI-нативный приложения.",
    highlight:
      "Testnet.gokite.ai — точка входа в AI × blockchain meta: faucet токены, развёртыва контракт, возможные квесты за on-chain activity. Kite позиционируется как chain, оптимизированная под AI agent транзакции и модели-related primitives. Конкуренция с GenLayer, Ritual, Sentient за тот же нарратив. газ из faucet бесплатный, но время фarmera — реальная цена. Проверяй официальные каналы — testnet phishing UI распространён.",
    facts: [
      "AI L1 testnet сезон 2024–2025: Kite среди десятков chains hunting «100k активный кошельки» metric.",
      "Faucet бот drain testnet токены — captcha и social auth стали standard anti-sybil.",
      "Testnet контракт и addresses могут полностью измениться перед мейннет — не считай их permanent.",
    ],
    tips: [
      "Веди отдельный testnet-кошелёк — не импортируй мейннет seed на непроверенных сайтах.",
    ],
    warnings: [
      "Testnet activity ≠ guaranteed airdrop — infra L1 часто награждают devs, а не казуальный clickers.",
    ],
  },
  gomble: {
    short:
      "Gomble игры — Web3 game studio на gomble.io с казуальный titles и tokenized награды для mobile audience.",
    long:
      "Gomble — корейская/глобальная game studio в Web3: казуальный и mid-core игры, NFT интеграция, seasonal события на gomble.io.",
    tagline: "Gomble — казуальный Web3 игры и seasonal события.",
    highlight:
      "Gomble.io выпускает mobile-friendly crypto игры с токены и NFT layers: SpaceKids и другие titles в portfolio. Модель studio — IP + сообщество события + партнёрские chain интеграции. Для казуальный gamers из Telegram/Asia рынки, привыкших к gacha и ежедневные квесты. токены economics зависят от DAU — без удержание post-airdrop типичный dump. Следи за официальный announcements по TGE и NFT utility.",
    facts: [
      "Korean Web3 игровой 2023–2024: studios like Gomble rode LINE/Kaia ecosystem waves — global reach still patchy.",
      "казуальный crypto игры: 90% DAU drops after токены запуск week — studio survival needs non-crypto fun.",
      "Multi-game studio риск: one hit title carries токены; flopped sequel drags whole ecosystem.",
    ],
    tips: [
      "Перед in-приложения purchases проверь, on-chain или off-chain активы — refund policy часто отсутствует.",
    ],
    warnings: [
      "Game токены highly speculative — относись к in-game earnings как к entertainment, не к income.",
    ],
  },
  gonative: {
    short:
      "Native протокол на gonative.cc — межсетевой ликвидность и Bitcoin-нативная DeFi primitives.",
    long:
      "нативная (gonative.cc) — протокол межсетевой ликвидность с фокусом на Bitcoin и major активы: lending, свопы и unified ликвидность across supported chains.",
    tagline: "нативная — межсетевой ликвидность с Bitcoin angle.",
    highlight:
      "Gonative.cc предлагает unified ликвидность слой для активы across chains — особенно BTC and stables. интеграции с мосты и L2 партнёры. Для тех, кто ищет доходность на BTC без custodial CEX, и трейдеров, нуждающихся в межсетевой depth. Smart контракт and мост риск compounded — каждая новая chain интеграция добавляет attack surface. Сравни rates с established lending (Aave, Compound) перед крупным депозитом.",
    facts: [
      "BTC DeFi 2024: нативная конкурирует с Lombard, Solv, Bedrock за «productive Bitcoin» narrative.",
      "межсетевой ликвидность protocols face oracle and мост correlation риск — один мост hack cascades.",
      "New protocols offer high APR to bootstrap TVL — sustainability question at month 6 post-TGE.",
    ],
    tips: [
      "Выясни, какой мост custody твоего BTC — нативная UI может route через несколько wrappers.",
    ],
    warnings: [
      "Не депозить весь BTC stack в неаудированный межсетевой хранилище — диверсифицируй протоколы.",
    ],
  },
  google: {
    short:
      "Google Cloud Web3 — Blockchain Node Engine и инфраструктура для нод Ethereum/Bitcoin в корпоративном облаке.",
    long:
      "Google Cloud предлагает управляемую блокчейн-инфраструктуру: Blockchain Node Engine для Ethereum и Bitcoin, BigQuery-наборы крипто-данных, партнёрства с Web3-проектами.",
    tagline: "Google Cloud — корпоративная Web3-инфраструктура нод.",
    highlight:
      "Несмотря на общий slug в каталоге, Google Cloud — ключевой TradFi-облачный игрок в Web3-инфраструктуре: управляемые ноды без самостоятельного хостинга, гарантии сервиса для институтов, интеграции с биржами и аналитикой. Не потребительский кошелёк или DEX — B2B-слой. Разработчики и институты используют для надёжного RPC, соответствующего требованиям развёртывания и конвейеров данных. Ценообразование корпоративного уровня — не замена бесплатным публичным RPC для розничных degens.",
    facts: [
      "Google Blockchain Node Engine запуск 2023: Big Tech legitimizes «run your own node without DevOps» для banks.",
      "BigQuery public crypto datasets — researchers и chain analytics firms строят на Google pipes ежедневные.",
      "Cloud concentration irony: decentralization ethos vs AWS/GCP dependency для majority dApp backends.",
    ],
    tips: [
      "Для production dApps сравни GCP node pricing с Alchemy/Infura — managed services differ on rate limits.",
    ],
    warnings: [
      "корпоративный cloud ≠ decentralized — jurisdictional shutdown риск для sanctioned regions.",
    ],
  },
  gpu: {
    short:
      "GPU.net — DePIN marketplace GPU compute для AI training, rendering и Web3 нагрузки.",
    long:
      "GPU.net — decentralized сеть GPU поставщики: rent compute для ML, rendering, игровой and blockchain validation tasks.",
    tagline: "GPU.net — decentralized GPU marketplace.",
    highlight:
      "Gpu.net соединяет supply (GPU owners) и demand (AI startups, miners, render farms). токены incentives bootstrap сеть; реальный sustainability needs paying customers vs баллы добытчики. Конкурирует с io.net, Akash, Render в crowded DePIN-GPU sector. поставщики check оборудование whitelist, время работы SLAs, выплата in native токены vs stable. Buyers compare latency, reliability and цена vs AWS/GCP — DePIN wins on margin sometimes, loses on поддержка.",
    facts: [
      "GPU.net токены запуск 2024 amid io.net хайп — sector TVL and токены prices highly correlated to AI narrative news cycle.",
      "Consumer GPU добыча: electricity цена часто exceeds токены награды after halving хайп — spreadsheet before rig.",
      "Double-добыча same GPU across multiple DePIN приложения may violate ToS on all платформы.",
    ],
    tips: [
      "Провайдерам: мониторь GPU temperature и power draw — 24/7 добыча сокращает lifespan железа.",
    ],
    warnings: [
      "токены-denominated payouts volatile — считай breakeven в USD, не по токены ATH.",
    ],
  },
  gradient: {
    short:
      "Gradient сеть DePIN — app.gradient.network: edge nodes через browser extension для distributed AI compute.",
    long:
      "Gradient — DePIN сеть где пользователи run lightweight nodes (часто browser extension) contributing compute/пропускная способность для AI and Web3 инфраструктура.",
    tagline: "Gradient — edge nodes в browser для DePIN.",
    highlight:
      "app.gradient.network exploded in реферальный сезон: install extension, stay online, earn Gradient баллы. модели similar to Grass — passive participation narrative. корпоративный demand для edge compute still proving; добытчики dominate ранний metrics. Multi-tier реферальный boosted growth; sustainability depends on B2B контракт. Для тех, кто готов делиться browser resources — читай политика приватности carefully.",
    facts: [
      "Browser DePIN 2024: Gradient and Grass led «install extension get rich» meme — antivirus vendors flagged some extensions.",
      "реферальный MLM dynamics: top referrers capture disproportionate баллы — розничные late joiners get crumbs.",
      "Extension permissions: broad host access = безопасность риск if команда compromised or sold.",
    ],
    tips: [
      "Запускай Gradient в отдельном browser profile — limit экспозиция logged-in сессии.",
    ],
    warnings: [
      "Browser extensions с сеть access — uninstall если проект замолчал или команда anonymous.",
    ],
  },
  group: {
    short:
      "Mantle Group hub на group.mantle.xyz — сообщество, управление и social слой экосистемы Mantle сеть.",
    long:
      "Group.mantle.xyz — официальный сообщество hub Mantle: discussions, события, ecosystem discovery и coordination для MNT holders и разработчики.",
    tagline: "Mantle Group — сообщество hub L2 экосистемы.",
    highlight:
      "Mantle Group на group.mantle.xyz собирает участников экосystemы Mantle: форумы, кампании, ссылки на dApps. Это не протокол, а social/coordination слой для Mantle L2 (наследие BitDAO). Удобно следить за гранты, hackathons и управление MNT. Сверяй внешние ссылки — сообщество hubs часто отстают после ухода партнёров.",
    facts: [
      "Mantle rebrand из BitDAO L2 2023: сообщество платформы rebuilt to match new identity — old ссылки still confuse пользователи.",
      "L2 сообщество hubs compete with Discord для attention — on-chain reputation интеграции still immature.",
      "MNT incentives для сообщество participation часто front-load marketing, taper after TVL milestones.",
    ],
    tips: [
      "Сверяй кампания ссылки с официальным Mantle Twitter перед подключением кошелька.",
    ],
    warnings: [
      "Ссылки сообщество-сайта — не endorsement; каждый dApp несёт свой smart контракт риск.",
    ],
  },
  grvt: {
    short:
      "GRVT hybrid биржа — grvt.io с zk инфраструктура: CEX-grade UX и self-custody options для perps и spot.",
    long:
      "GRVT (Gravity) — hybrid crypto биржа combining off-chain matching with on-chain settlement and zk proofs. Perpetuals, spot and institutional features on grvt.io.",
    tagline: "GRVT — hybrid биржа с zk settlement.",
    highlight:
      "Grvt.io для трейдеров, которым нужна скорость уровня Binance с optional self-custody и подтверждение of reserves через zk stack. Гибридная модель: matching off-chain, balances верифицируемый on-chain. Конкурирует с dYdX v4, Vertex, Hyperliquid. токены и баллы привлекли pro и розничные flow. KYC tiers для высоких лимитов — читай geo-ограничения. Smart контракт риск ниже чем у pure on-chain CLOB, но trust к оператору остаётся.",
    facts: [
      "Hybrid биржа wave 2024: GRVT, Hyperliquid, EdgeX fought для perp volume after FTX — trust UX mattered as much as комиссии.",
      "Zk подтверждение marketing: not all пользователи verify proofs — «zk-backed» becomes label without пользователь-facing verification tools.",
      "баллы seasons on биржи: wash trading inflates leaderboard — teams развёртыва sybil detection before TGE.",
    ],
    tips: [
      "Начни с небольшого депозита и проверь latency вывода — hybrid биржи различаются по on-chain settlement.",
    ],
    warnings: [
      "биржа токены и баллы спекулятивны — trading награды ≠ profit, если убытки больше возвраты.",
    ],
  },
  gte: {
    short:
      "GTE DEX на gte.xyz — нативная trading на MegaETH и high-производительность L2 ecosystem с on-chain order book narrative.",
    long:
      "GTE — decentralized биржа tied to MegaETH/high-speed L2 ecosystem: свопы, ликвидность and trading primitives on gte.xyz.",
    tagline: "GTE — native DEX для speed-focused L2.",
    highlight:
      "Gte.xyz — native ликвидность слой для производительность L2 (MegaETH alliance): низкий latency trading, on-chain order book или advanced AMM. ранний TVL на incentives и хайп партнёрские chain. Для degens уже на target L2 с airdrop добыча — не межсетевой hub. Тонкая ликвидность на запуск pairs — slippage и IL elevated. Следи за audit status и связью команды с MegaETH.",
    facts: [
      "MegaETH ecosystem DEX race 2024–2025: GTE launches alongside dozen «нативная биржа» brands — большинство TVL is mercenary.",
      "производительность L2 DEX marketing emphasizes latency — розничные swappers still care about depth, not milliseconds.",
      "Incentive добыча exit: TVL -80% within недели of emissions drop — pattern repeated on Blast, Mode, etc.",
    ],
    tips: [
      "Сравни маршрутизация с aggregators — native DEX редко даёт лучшую цену на thin pairs.",
    ],
    warnings: [
      "Неаудированные запуск контракт — малый size до сообщество audit или время-tested deployment.",
    ],
  },
  halliday: {
    short:
      "Halliday payments — halliday.xyz unified платёжный интерфейс и межсетевой payments API для игры и приложения.",
    long:
      "Halliday — payments инфраструктура для Web3: embeddable платёжный интерфейс, multi-asset payments, межсетевой маршрутизация для игры and consumer приложения.",
    tagline: "Halliday — межсетевой payments для приложения и игры.",
    highlight:
      "Halliday.xyz упрощает «pay with any токены» для разработчиков: API и widgets прячут мосты и свопы за единым платёжный интерфейс UX. Целевая аудитория — game studios и приложения, теряющие пользователи на кошелёк friction. B2B infra, не consumer кошелёк. Интеграции с major chains и stables; комиссии и settlement зависят от маршрутизация. Пользователи чаще взаимодействуют через партнёрские приложения, не напрямую с halliday.xyz.",
    facts: [
      "Web3 payments infra 2024: Halliday, Crossmint, Thirdweb payments — fight для по умолчанию embed in Unity/Unreal plugins.",
      "платёжный интерфейс abstraction hides мост риск — пользователь may not know asset wrapped during payment flow.",
      "Game studio внедрение: studios want fiat-like UX — crypto-нативная платёжный интерфейс still <5% of mobile game revenue.",
    ],
    tips: [
      "Разработчикам: протестируй платёжный интерфейс на testnet с малыми суммами на всех целевых chains перед запуск.",
    ],
    warnings: [
      "Сбой embedded мост блокирует платежи — следи за status page Halliday при congestion.",
    ],
  },
  hamsterkombatgame: {
    short:
      "Hamster Kombat — Telegram тап-игра на hamsterkombatgame.io с токеном HMSTR и миллионами пользователей.",
    long:
      "Hamster Kombat — вирусное Telegram-мини-приложение: тапай хомяка, улучшай статы CEO биржи, зарабатывай внутриигровые монеты, конвертируемые в токен HMSTR.",
    tagline: "Hamster Kombat — Telegram тап-игра и HMSTR.",
    highlight:
      "Hamsterkombatgame.io оседлал волну Telegram Open Network 2024: сотни миллионов тапов, реферальные деревья, ежедневные шифр-квесты. Модель «клон Notcoin» — огромная база пользователей, спорное распределение токенов. Бенефициар экосистемы TON; пользователи добывали через ботов, вызывая античит-меры команды. Ценовое поведение после TGE типично для тап-игр — пик хайпа, долгий спад. Для казуальных пользователей Telegram; серьёзные инвесторы относятся как к высокорискованной мем-экспозиции.",
    facts: [
      "Hamster Kombat заявил 300M+ игроков до TGE — одно из крупнейших Telegram-криптоприложений; конверсия в активных ончейн-пользователей значительно ниже.",
      "Бот-добыча вынудил команду дисквалифицировать аккаунты — дебаты о «справедливом раздаче» доминировали в сообществе TON неделями.",
      "Кладбище тап-to-earn: Notcoin — исключение, большинство клонов около нуля через месяцы после запуска.",
    ],
    tips: [
      "При claim HMSTR используй только официальные Telegram бот ссылки — scam claim sites пикуют на TGE.",
    ],
    warnings: [
      "Meme game токены крайне волатильны — не покупай HMSTR на деньги, которые нельзя потерять.",
    ],
  },
  hana: {
    short:
      "Hana Network — hana.network: приватные платежи и модульная цепочка для конфиденциальных транзакций.",
    long:
      "Hana — блокчейн-сеть, сфокусированная на сохраняющих приватность платежах и модульной архитектуре для приложений, требующих конфиденциального состояния.",
    tagline: "Hana — сеть приватных платежей.",
    highlight:
      "Hana.network строит рельсы приватных платежей — скрывая суммы и получателей, где позволяет дизайн, сохраняя механизмы соответствия требованиям. Тестнет и ранние приложения для денежных переводов и потребительских платёжных сценариев. Конкурирует с приложениями экосистемы Zcash, потребительским слоем Aztec, интеграциями Railgun. Регуляторное внимание к цепочкам приватности — пользователи должны понимать юрисдикцию. Для privacy-conscious пользователей и разработчиков конфиденциальных платёжных потоков.",
    facts: [
      "Регуляторное давление на privacy-цепи 2024: правила AML ЕС давят на биржи исключать privacy-монеты — Hana должна навигировать compliance-историю.",
      "Модульная приватность: команды отделяют compliance-модуль от ядра приватности — дизайн всё ещё эволюционирует глобально.",
      "Тестнет privacy-цепей привлекает как легитимных пользователей, так и опасения отмывания — репутационный риск для ранних последователей.",
    ],
    tips: [
      "Функции приватности только с пониманием законов в твоей стране — не все юрисдикции разрешают скрытые транзакции.",
    ],
    warnings: [
      "Технология приватности ≠ иммунитет от правоохранительных органов — on/off рампы отслеживаемы.",
    ],
  },
  helioschain: {
    short:
      "Helios Chain app.helioschain.network — L1/блокчейн-платформа с тестнетом и dApps экосистемы для ранних пользователей.",
    long:
      "Helios Chain — блокчейн-проект с порталом приложений на app.helioschain.network: подключение кошелька, кран, приложения экосистемы и кампании сообщества.",
    tagline: "Helios Chain — portal новой L1 экосystemы.",
    highlight:
      "App.helioschain.network служит панелью управления экосистемы Helios: отслеживание ончейн-активности, задания тестнета, ссылки на нативные dApps. Типичный GTM нового L1 — привлечь кошельки до зрелости мейннета. Фармеры накапливают транзакции для потенциальных ретро-наград; разработчики развёртывают тестовые контракты. Сверяй официальные домены — распространённое имя Helios порождает клоны. Газ из крана; реальная цена — время и опсек гигиены кошелька.",
    facts: [
      "Коллизия имён новых L1: «Helios» используется множеством несвязанных цепочек — всегда проверяй chain ID и официальные соцсети.",
      "Метрики портала тестнета накручены сибил-ботами — команды ужесточают подтверждение-of-human со временем.",
      "Качество приложений экосистемы различается — ранние dApps L1 часто неаудированные форки.",
    ],
    tips: [
      "Документируй ончейн-активность со скриншотами и хешами транзакций — некоторые ретро-программы требуют ручного подтверждения.",
    ],
    warnings: [
      "Не мости активы мейннета в непроверенные контракты Helios — только тестнет до официального моста мейннета.",
    ],
  },
  hemi: {
    short:
      "Hemi сеть — hemi.xyz Bitcoin + Ethereum programmability: modular L2 с BTC and EVM interoperability.",
    long:
      "Hemi — сеть, соединяющая миры Bitcoin и Ethereum: программируемость, межсетевая передача сообщений и единая модель безопасности на hemi.xyz.",
    tagline: "Hemi — Bitcoin meets Ethereum programmability.",
    highlight:
      "Hemi.xyz promotes dual-stack дизайн: тап Bitcoin ликвидность and безопасность narrative while enabling EVM-compatible приложения. Portal для testnet/мейннет activities, вклад, and ecosystem dApps. Part of crowded BTC L2 / hybrid chain sector post-Ordinals boom. мост риск and wrapped asset assumptions standard. баллы and node programs для ранний participants. Для BTC maxis exploring DeFi и EVM devs targeting Bitcoin holders.",
    facts: [
      "Hemi raised из tier VCs in BTC L2 wave 2024 — sector funding outpaced actual bridged BTC volume.",
      "Bitcoin renaissance marketing: dozens of chains claim «first реальный BTC DeFi» — differentiation is tech, not slogans.",
      "Modular BTC L2 дизайн debates: purists reject any pegged BTC on sidechains.",
    ],
    tips: [
      "Сравни Hemi мост дизайн с Stacks/Merlin — understand custodian модели before deposit.",
    ],
    warnings: [
      "Wrapped BTC on new L2 — smart контракт риск; start with minimum test amount.",
    ],
  },
  heyelsa: {
    short:
      "Hey Elsa AI — app.heyelsa.ai crypto assistant для свопы, portfolio и DeFi actions через natural language.",
    long:
      "Elsa — AI-powered crypto copilot: chat interface для executing свопы, bridging, and portfolio questions across supported chains.",
    tagline: "Elsa AI — DeFi через natural language chat.",
    highlight:
      "app.heyelsa.ai: опиши intent («свопы ETH to USDC on база») — AI маршрутизирует в DEX/мост интеграции. Снижает UX friction для новичков; опытные пользователи сверяют txs вручную перед sign. API keys и кошелёк подключение — стандартная Web3 безопасность. Конкурирует с Coinbase AgentKit и другими AI кошельки. Риск misinterpretation AI — wrong chain или токены при ambiguous prompt. Всегда review транзакции preview в кошельке.",
    facts: [
      "AI crypto assistants 2024–2025: Elsa, HeyAnon, Bankr — race to по умолчанию «ChatGPT для on-chain» before reliability catches up.",
      "LLM hallucination on токены addresses caused пользователь losses — leading приложения add confirmation steps and address books.",
      "кошелёк подключение to AI приложения: malicious update could свопы recipient — verify приложения signature and домен.",
    ],
    tips: [
      "Дважды сверь токены контракт address, когда AI предлагает obscure активы — scam токены копируют имена.",
    ],
    warnings: [
      "Никогда не вставляй seed phrase в AI chat — Elsa и legit приложения никогда не просят её.",
    ],
  },
  hibachi: {
    short:
      "Hibachi perp DEX — hibachi.xyz privacy-preserving derivatives trading с on-chain settlement.",
    long:
      "Hibachi — decentralized perpetuals биржа emphasizing приватность: trade perps with reduced on-chain footprint and competitive комиссии on hibachi.xyz.",
    tagline: "Hibachi — приватность perps DEX.",
    highlight:
      "Hibachi.xyz enters приватность × perps niche: traders wanting leverage without full position transparency on public mempool. Architecture may use encryption or delayed disclosure — read docs для trust модели. Конкурирует с dYdX, Hyperliquid, RabbitX. ликвидность bootstrapped через incentives; ранний рынки may have wide spreads. Для experienced perp traders comfortable with smart контракт and oracle риски plus приватность trade-offs.",
    facts: [
      "приватность perps 2024: niche after regulators targeted mixers — биржи balance функции приватности with соответствие требованиям.",
      "Perp DEX wars: new entrants offer баллы — professional flow stays where ликвидность deepest.",
      "Oracle manipulation on низкий-ликвидность perp рынки — classic exploit vector для new DEXs.",
    ],
    tips: [
      "Начни с минимального leverage на новом рынок — проверь поведение liquidation engine.",
    ],
    warnings: [
      "функции приватности могут ограничить recourse в disputes — разберись с resolution process перед size.",
    ],
  },
  huddle01: {
    short:
      "Huddle01 — huddle01.com decentralized video meetings и реальный-время comms infra для Web3 teams.",
    long:
      "Huddle01 — Web3-нативная communication платформа: video calls, streaming, and DePIN-powered RTC инфраструктура для dApps and communities.",
    tagline: "Huddle01 — Web3 video calls и RTC infra.",
    highlight:
      "Huddle01.com — Zoom-alternative с кошелёк login, токены gating для комнат и decentralized edge nodes для media маршрутизация. DePIN angle: операторы нод делятся пропускная способность за награды. Используют DAO calls, NFT communities, hackathons. Качество сравнимо с Web2 для малых комнат; крупные ивенты зависят от распределения нод. Для remote Web3 teams с нативная crypto интеграции в meetings.",
    facts: [
      "Web3 Zoom alternatives 2023–2024: Huddle01, Meet with кошелёк — внедрение spikes during bull, drops in bear.",
      "DePIN RTC: latency-sensitive — decentralized маршрутизация harder than storage DePIN.",
      "токены-gated meetings leak when share ссылки public — opssec still пользователь responsibility.",
    ],
    tips: [
      "Для sensitive calls используй unique room ссылки и отключай запись, если не нужна.",
    ],
    warnings: [
      "Сверяй домен huddle01.com — fake meeting ссылки ежедневно в Discord phishing.",
    ],
  },
  humanity: {
    short:
      "Humanity протокол — humanity.org подтверждение-of-humanity identity без централизованного KYC monopoly.",
    long:
      "Humanity протокол — decentralized identity сеть verifying unique humans через biometrics/palm scan and on-chain учётные данные on humanity.org.",
    tagline: "Humanity протокол — подтверждение of personhood on-chain.",
    highlight:
      "Humanity.org решает sybil problem для airdrops и UBI: один раз подтверди человека — portable credential across приложения. Palm scan и privacy-preserving proofs — спорный biometrics trade-off. Конкурирует с Worldcoin, Gitcoin Passport, Civic. Всплеск signup в airdrop seasons; долгий-term ценность зависит от интеграции, принимающих Humanity credential. Читай данные удержание policy — biometrics чувствительны.",
    facts: [
      "подтверждение of personhood wars 2024: Humanity vs Worldcoin — orb vs palm scan optics доминировали headlines.",
      "Airdrop добытчики hate PoP до it excludes their sybil farms — then they hate exclusion.",
      "Biometric данные breach риск: centralized storage of scans = honeypot — decentralization клеймы need technical audit.",
    ],
    tips: [
      "Используй только официальное Humanity приложения — fake verification приложения крадут biometrics.",
    ],
    warnings: [
      "Biometric identity необратима при leak — оцени политика приватности перед scan.",
    ],
  },
  hyli: {
    short:
      "Hyli — hyli.org modular blockchain для provable приложения и efficient on-chain/off-chain execution.",
    long:
      "Hyli (formerly Hylé) — L1 focused on provable applications: разработчики write приложения with нативная подтверждение generation, chain verifies efficiently.",
    tagline: "Hyli — blockchain для provable applications.",
    highlight:
      "Hyli.org — infra, где приложения natively produce proofs: дешевле верифицируемый computation vs generic EVM loops. Цели — игры, finance, identity с масштабируемый verification. Testnet для разработчики; narrative пересекается с ZK приложения chains и приложения-specific rollups. Ранняя экосystemа — гранты и hackathons для разработчики. Для разработчиков provable приложения paradigm, не розничные trading.",
    facts: [
      "Hyli rebrand из Hylé 2024: name change confused ранний followers — verify docs on hyli.org только.",
      "Provable приложения meta competes with Cairo/Starknet, Risc ноль приложения chains — разработчики mindshare battle.",
      "New L1 without consumer приложения: airdrop добытчики развёртыва hello-world контракт — teams filter sybil через complexity gates.",
    ],
    tips: [
      "Разработчикам: начни с официальный Hyli tutorials — подтверждение patterns отличаются от standard Solidity.",
    ],
    warnings: [
      "Ранние L1 контракт неаудированы — без production funds на experimental deployments.",
    ],
  },
  hylo: {
    short:
      "Hylo на Solana — hylo.so synthetic dollar и leveraged стратегии для advanced DeFi пользователи.",
    long:
      "Hylo — Solana DeFi протокол offering hyUSD stablecoin and leverage products: mint, stake, and manage leveraged экспозиция on hylo.so/leverage.",
    tagline: "Hylo — synthetic dollar и leverage на Solana.",
    highlight:
      "Hylo.so provides Solana-нативная stable and leverage primitives — hyUSD backed by протокол дизайн, leverage module для amplified стратегии. Конкурирует с Kamino, Marginfi, Sanctum in Solana DeFi stack. Advanced пользователи только: liquidation, depeg, and oracle риски familiar из Maker/Reflexer playbooks adapted to Solana speed. High APY displays may reflect токены emissions — parse organic доходность.",
    facts: [
      "Solana DeFi 2024 comeback: Hylo launched amid memecoin ликвидность flood — stable protocols fight для trust after FTX.",
      "Synthetic stables depeg history: UST lesson applies to any algo stable — monitor collateral ratio панели управления.",
      "Leverage on fast chain: liquidations happen in seconds — keep health buffer wider than on Ethereum.",
    ],
    tips: [
      "Следи за peg hyUSD на DEX — persistent depeg сигнализирует о collateral или confidence issues.",
    ],
    warnings: [
      "Leveraged positions на Solana — congestion может задержать liquidation txs в stress события.",
    ],
  },
  hyperbolic: {
    short:
      "Hyperbolic GPU cloud — app.hyperbolic.ai marketplace AI compute и GPU аренда для training/inference.",
    long:
      "Hyperbolic — decentralized GPU cloud платформа on app.hyperbolic.ai: rent GPUs для AI нагрузки or supply оборудование to сеть.",
    tagline: "Hyperbolic — GPU cloud marketplace для AI.",
    highlight:
      "app.hyperbolic.ai joins DePIN-GPU cluster: researchers and startups rent H100/A100-class compute cheaper than hyperscalers when supply available. поставщики stake оборудование, earn токены/баллы. Конкурирует с io.net, Lambda, CoreWeave розничные narrative. Reliability and поддержка below AWS — acceptable для batch задача, risky для production гарантии сервиса. баллы seasons привлечь добытчики; verify задача completion and выплата history before big оборудование investment.",
    facts: [
      "Hyperbolic naming sits in DePIN cluster with Gradient, Optimum — marketers love calculus terms для GPU brands.",
      "H100 supply crunch 2023–2024: DePIN GPU networks promised access — списки ожидания still долгий для premium SKUs.",
      "Crypto-paid compute: токены цена drop can make provider economics negative mid-контракт.",
    ],
    tips: [
      "Покупателям: benchmark small задача перед month-долгий аренда — производительность различается по host.",
    ],
    warnings: [
      "Провайдерам: читай slashing и время работы rules — один downtime event может обнулить недельный earn.",
    ],
  },
  hyperlane: {
    short:
      "Hyperlane — hyperlane.xyz permissionless interoperability: межсетевой messaging для приложения и токены мосты.",
    long:
      "Hyperlane — modular interoperability протокол: any chain can permissionlessly подключение, send messages and токены через Hyperlane API on hyperlane.xyz.",
    tagline: "Hyperlane — permissionless межсетевой messaging.",
    highlight:
      "Hyperlane.xyz позволяет разработчикам подключать chains без ожидания официальный мост partnerships — развёртыва Hyperlane modules, route messages, build multi-chain приложения. Десятки rollups и приложения post-2023. HYPER токены и validator economics для securers. Пользователи через integrated dApps, не raw Hyperlane UI. мост риск на application слой — сверяй, какой Hyperlane route использует приложения.",
    facts: [
      "Hyperlane raised из Variant, Galaxy — interoperability infra hot after multichain UX became bottleneck 2022–2024.",
      "Permissionless connections mean malicious warp routes possible — приложения must curate trusted routes.",
      "Interoperability токены launches 2025 crowded — ценность accrues to chains with реальный fee revenue, not message количество alone.",
    ],
    tips: [
      "Разработчикам: Hyperlane registry и audited route configs — не принимай по умолчанию routes вслепую.",
    ],
    warnings: [
      "межсетевой messages необратимы при ошибке пользователя — дважды сверь destination chain и recipient.",
    ],
  },
  ika: {
    short:
      "Ika claim portal — claim.ika.xyz для токены дистрибуция и onboarding в Sui межсетевой ecosystem.",
    long:
      "Ika — interoperability протокол on Sui ecosystem with claim portal at claim.ika.xyz для токены allocations, награды and сеть participation.",
    tagline: "Ika — Sui ecosystem interoperability и клеймы.",
    highlight:
      "Claim.ika.xyz — portal токены клеймы и eligibility checks Ika сеть, типичный post-funding или pre-TGE portal. Ika — межсетевой infra в Sui и broader Move ecosystem. Подключи кошелёk, выполни tasks, claim allocations. Пик scam сезон на любом claim site — только официальный ссылки из verified Ika/Sui socials. Для участников Sui ecosystem и interoperability narrative.",
    facts: [
      "Sui ecosystem 2024: десятки claim portals — fake клоны крадут signatures за часы после анонс.",
      "межсетевой на Move: Ika конкурирует с Wormhole, LayerZero — победит dev внедрение.",
      "Deadline claim давит на rushed txs — пользователи approve malicious контракт в спешке.",
    ],
    tips: [
      "Закладка claim.ika.xyz только из официального анонса — не кликай ссылки из DM.",
    ],
    warnings: [
      "Claim portals просят только кошелёк подключение — любой запрос seed phrase = scam.",
    ],
  },
  incentiv: {
    short:
      "Incentiv сеть — incentiv.net L1 с soulbound incentives и gamified on-chain economy.",
    long:
      "Incentiv — blockchain сеть designing tokenomics around soulbound токены and behavioral incentives on incentiv.net.",
    tagline: "Incentiv — L1 с soulbound incentive дизайн.",
    highlight:
      "Incentiv.net экспериментирует с non-transferable токены и reward loops за on-chain actions — anti-sybil и pro-engagement дизайн. Testnet кампании награждают consistent behavior vs wash txs. Для исследователей tokenomics и фarmerов новых L1 narratives. Soulbound mechanics — ошибки permanent, unwanted SBT не продать. дорожная карта управление и мейннет — типичный для новой chain.",
    facts: [
      "Soulbound токены хайп 2022–2024: Incentiv builds chain-level SBT — UX friction high для normies.",
      "Anti-sybil через SBT: добытчики create one identity per person constraint — рынки для verified аккаунты emerge illegally.",
      "New L1 incentive дизайн: game theory looks elegant in whitepaper, breaks under mercenary capital.",
    ],
    tips: [
      "Читай, какие actions mint soulbound токены — часть marks irreversible reputation.",
    ],
    warnings: [
      "Experimental tokenomics — не блокируй значительный капитал на untested L1.",
    ],
  },
  infinifi: {
    short:
      "InfiniFi — infinifi.xyz unified fixed доходность протокол: стабильный доход через curated DeFi стратегии.",
    long:
      "InfiniFi — DeFi протокол aggregating fixed-rate доходность products: deposit stables or supported активы, receive predictable returns on infinifi.xyz.",
    tagline: "InfiniFi — fixed доходность в одном протоколе.",
    highlight:
      "Infinifi.xyz упаковывает fixed доходность стратегии для уставших от variable lending rates: curated хранилища, duration choices, прозрачные комиссии. Конкурирует с Pendle fixed side, Notional, Element. Smart контракт риск underlying protocols compounded — InfiniFi wrapper слой. Fixed rate привлекателен при high variable rates; менее при падении база rates. Сверяй зрелость dates и ранний exit penalties.",
    facts: [
      "Fixed доходность meta 2024: Pendle TVL billions — InfiniFi and peers fight для «set and forget stables» segment.",
      "Fixed rate часто achieved через derivatives — пользователь may not see underlying counterparty риск.",
      "стратегия curator failure: one bad underlying протокол drags entire fixed хранилище — diversification matters.",
    ],
    tips: [
      "Сравни fixed APY с Pendle implied доходность — рынок иногда misprices duration.",
    ],
    warnings: [
      "Fixed доходность ≠ guaranteed principal — остаются smart контракт и counterparty риски.",
    ],
  },
  infinityg: {
    short:
      "Infinity Ground — infinityg.ai AI × игровой платформа: UGC, agents и on-chain game активы.",
    long:
      "Infinity Ground — платформа combining AI agents, пользователь-generated game content and Web3 ownership on infinityg.ai.",
    tagline: "Infinity Ground — AI игровой и UGC платформа.",
    highlight:
      "Infinityg.ai — creator economy в играх: AI tools генерируют content, blockchain фиксирует ownership и награды creators. Narrative пересекается с AI agent игровой и modular engines. Ранняя стадия — демо, списки ожидания, potential токены/баллы. Для creators с AI game активы и crypto-нативная monetization. Качество AI output и удержание платформа не доказаны at scale.",
    facts: [
      "AI UGC игровой 2024–2025: Roblox + AI mods everywhere — crypto слой добавляет ownership, но не всегда players.",
      "Agent игровой хайп: infinite NPC dialogue круто в демо — цена и moderation сложны at scale.",
      "Creator платформа токены launches: 95% ниже запуск за 90 days — creator earnings в токены страдают.",
    ],
    tips: [
      "Экспортируй и бэкапь created активы off-платформа — ранние платформы закрываются без migration.",
    ],
    warnings: [
      "UGC IP rights мутны с AI training — читай creator ToS перед commercial use.",
    ],
  },
  initia: {
    short:
      "Initia — initia.xyz modular L1 «interwoven rollups»: приложения-specific chains с unified ликвидность.",
    long:
      "Initia — blockchain платформа для launching interwoven rollups: each приложения gets optimized chain while sharing Initia ликвидность and безопасность on initia.xyz.",
    tagline: "Initia — interwoven rollups и modular L1.",
    highlight:
      "Initia.xyz продвигает «interwoven rollups» — Minitias (приложения chains) на Initia L1 с нативная interoperability и shared ликвидность. Testnet и builder programs привлекли Cosmos и modular blockchain разработчики. INIT токены и ecosystem fund поддерживают deployments. Для devs приложения-specific chains без full L1 из scratch. мост активы только через официальный Initia мост.",
    facts: [
      "Initia raised $18M+ 2024 — modular L1 sector crowded с Celestia приложения chains, Cosmos SDK, Arbitrum Orbit.",
      "Interwoven branding технически отличается — розничные всё равно видит «ещё один L1 testnet».",
      "Ecosystem rollup качество uneven — первые Minitias часто memecoin chains до серьёзный приложения.",
    ],
    tips: [
      "Билдерам: Initia официальный SDK docs — rollup deployment ≠ single контракт развёртыва.",
    ],
    warnings: [
      "мост в новую Minitia — сверь chain ID; wrong сеть = funds in limbo.",
    ],
  },
  inkonchain: {
    short:
      "Ink L2 — inkonchain.com Kraken-backed Ethereum L2 для DeFi и on-chain приложения с CEX интеграция narrative.",
    long:
      "Ink — слой 2 blockchain из Kraken ecosystem on inkonchain.com/приложения: EVM-compatible, focused on trading and DeFi with биржа мост advantages.",
    tagline: "Ink onchain — Kraken L2 для DeFi приложения.",
    highlight:
      "Inkonchain.com — приложения directory Ink chain: DeFi, NFT, trading приложения на Kraken-aligned L2. Нарратив: бесшовный path CEX → on-chain без friction. Optimism stack lineage типичен для биржа L2s. ранний ecosystem incentives и Kraken пользователь funnel. Для пользователей Kraken с self-custody DeFi и разработчики с биржа дистрибуция. Стандартные L2 риски: мост, sequencer downtime, ранний centralization.",
    facts: [
      "биржа L2 trend 2024: Ink рядом с база (Coinbase), Scroll партнёры — CEXes строят on-chain moats.",
      "Kraken regulatory reputation — Ink может face stricter соответствие требованиям чем anonymous L2s.",
      "приложения directory curated медленно — dead ссылки часты первые месяцы после L2 запуск.",
    ],
    tips: [
      "Используй официальный Kraken/Ink мост — third-party мосты добавляют лишний риск.",
    ],
    warnings: [
      "Новый L2 sequencer centralization — следи за status page при high volatility.",
    ],
  },
  intuition: {
    short:
      "Intuition Systems — intuition.systems decentralized knowledge graph и on-chain attestations для trust.",
    long:
      "Intuition — протокол для creating and querying decentralized attestations, identity signals and knowledge graph on intuition.systems.",
    tagline: "Intuition — on-chain knowledge graph и attestations.",
    highlight:
      "Intuition.systems — пользователи и приложения публикуют attestations о entities, skills, relationships: portable reputation для Web3 social и hiring. Конкурирует с EAS, Lens, Farcaster интеграции. ранний adopters mint и curate attestations; search UX evolving. Для разработчики trust слой без centralized databases. Spam attestations — сверяй reputation attester.",
    facts: [
      "Attestation infra 2024: Intuition и EAS parallel — fragmentation standards hurts composability.",
      "Knowledge graph on-chain: storage costs limit granularity — off-chain IPFS hybrid распространённый.",
      "Reputation рынки: покупка attestations undermines graph — sybil resistance ongoing arms race.",
    ],
    tips: [
      "Перед доверием attestation сверь stake и history attester — не все stamps равны.",
    ],
    warnings: [
      "Public attestations permanent on-chain — не публикуй sensitive личный данные.",
    ],
  },
  io: {
    short:
      "io.net — децентрализованный GPU-кластер для AI и ML: агрегирует простаивающие GPU в облако по требованию.",
    long:
      "Io.net — DePIN-сеть, агрегирующая предложение GPU из дата-центров и потребителей в масштабируемый AI-вычислительный кластер на io.net.",
    tagline: "io.net — децентрализованный GPU-кластер для AI.",
    highlight:
      "Io.net — DePIN-флагман 2024: токен IO, массивный маркетинг количества GPU, партнёрства с AI-стартапами. Рабочие развёртывают ноды, клиенты запускают задачи обучения и инференса. Волатильность токена влияет на экономику поставщиков. Конкурирует с Akash, Render, AWS. Споры о реальной утилизации против зарегистрированных GPU в сообществе. Для ML-инженеров с более дешёвыми пакетными вычислениями и владельцев GPU с простаивающим оборудованием — с операционными накладными расходами.",
    facts: [
      "Io.net TGE 2024: IO среди крупнейших запусков DePIN — колебания FDV двигали настроение сектора еженедельно.",
      "Заявленное количество GPU против активных задач: скептики указывают на низкую утилизацию — команда публикует дашборды.",
      "Токен IO на базе Solana — перегрузка сети редко влияет на вычислительные задачи, но на выплаты и вклад.",
    ],
    tips: [
      "Провайдерам: изолируй машины для майнинга/аренды GPU — клиенты io.net запускают произвольные нагрузки.",
    ],
    warnings: [
      "Произвольные вычислительные задачи — риск безопасности; выделенное оборудование без личных данных.",
    ],
  },
  iopn: {
    short:
      "IOPn — iopn.io open internet протокол: decentralized identity и connectivity слой для Web3 приложения.",
    long:
      "IOPn — blockchain протокол для decentralized identity, данные ownership and open internet primitives on iopn.io.",
    tagline: "IOPn — open internet протокол on blockchain.",
    highlight:
      "Iopn.io строит self-sovereign identity и peer connectivity — приложения без centralized gatekeepers. Testnet и разработчики гранты для интеграции. Narrative пересекается с ICP, ENS, Ceramic. Ранняя стадия — операторы нод и разработчики primary audience. токены и управление дорожная карта типичны для infra L1. Сверяй официальный IOPn channels — generic acronym attracts copycats.",
    facts: [
      "Open internet протокол branding 2024: many проекты claim «new internet» — differentiation требует shipped приложения.",
      "Identity L1 fatigue: пользователи already have ENS, Lens handles — IOPn must prove incremental ценность.",
      "операторы нод incentives without demand — DePIN pattern repeats до корпоративный pilots land.",
    ],
    tips: [
      "Разработчикам: оцени IOPn SDK зрелость vs established identity stacks перед migration.",
    ],
    warnings: [
      "Ранние протокол upgrades могут ломать интеграции — pin version в production приложения.",
    ],
  },
  irys: {
    short:
      "Irys portal — portal.irys.xyz permanent данные storage (ex-Bundlr) для Arweave и multi-chain приложения.",
    long:
      "Irys — decentralized данные слой для permanent storage and programmable datachain; portal.irys.xyz для uploads, funding and разработчики tools.",
    tagline: "Irys — permanent storage и datachain portal.",
    highlight:
      "Portal.irys.xyz — вход для разработчики funding storage uploads в Arweave через Irys bundler: fast uploads, lazy settlement, multi-chain payment. Rebrand Bundlr → Irys consolidated datachain vision. NFT проекты, social приложения, archives с permanent данные. Pay once store forever — upfront цена calculation essential. Для devs с immutable media/metadata.",
    facts: [
      "Bundlr → Irys rebrand 2024: existing интеграции updated — old docs still confuse разработчики.",
      "Arweave permanent storage: pay once — but приложения frontends still need hosting elsewhere.",
      "Irys datachain expands beyond Arweave bundling — watch сеть upgrades для pricing changes.",
    ],
    tips: [
      "Оцени storage size перед upload — Arweave комиссии upfront; wrong file без refund.",
    ],
    warnings: [
      "Permanent = permanent — не upload private keys или secrets в public storage.",
    ],
  },
  ithaca: {
    short:
      "Ithaca протокол — ithaca.xyz structured products и options DeFi от команды Opyn heritage.",
    long:
      "Ithaca — DeFi протокол для options and structured products: structured доходность, hedging tools on ithaca.xyz из experienced derivatives команда.",
    tagline: "Ithaca — options и structured DeFi products.",
    highlight:
      "Ithaca.xyz — ончейн-опционы институционального уровня: структурированные продукты с доходностью и защитой от падения. Команда из Opyn — знает подводные камни DeFi-деривативов. Для искушённых пользователей DeFi с греками, экспирацией, риском смарт-контрактов контрагента. ликвидность на exotic structures thin — exit до expiry может быть costly. Не для новичков — misconfigured positions теряют principal.",
    facts: [
      "Opyn Squeeth era pioneers — Ithaca carries lessons из 2022 DeFi options blowups.",
      "Structured products marketing hides complexity — розничные часто buys «high доходность» without reading payoff diagram.",
      "Options протокол exploits 2023–2024: oracle and ликвидность pool attacks — audit history matters.",
    ],
    tips: [
      "Читай payoff chart перед deposit — понимай max loss scenario.",
    ],
    warnings: [
      "DeFi options без insurance — smart контракт bug может обнулить structured position.",
    ],
  },
  jiritsu: {
    short:
      "Jiritsu сеть — jiritsu.network верифицируемый off-chain compute и oracles для RWA и payments.",
    long:
      "Jiritsu — инфраструктура для верифицируемый off-chain данные and computation: ZK/подтверждение-based oracles для реальный-world активы and fintech on jiritsu.network.",
    tagline: "Jiritsu — верифицируемый compute для RWA.",
    highlight:
      "Jiritsu.network — RWA и payment поставщики с cryptographic proofs off-chain state: bank balances, invoices, identity checks. B2B infra, не consumer приложения. Partnerships с fintech и tokenization платформы. Конкурирует с Chainlink Functions, Pyth, custom ZK oracle stacks. токены и node programs для ранний securers. долгий sales cycles — розничные airdrop uncertain.",
    facts: [
      "RWA oracle meta 2024–2025: Jiritsu, Chainlink, RedStone compete для tokenized treasury интеграции.",
      "верифицируемый compute whitepapers abundant — production bank интеграции scarce and NDA-shrouded.",
      "Regulatory clarity on RWA oracles lag — подтверждение of reserve ≠ legal ownership transfer.",
    ],
    tips: [
      "Институциям: pilot с minimal ценность перед production RWA feed интеграция.",
    ],
    warnings: [
      "Oracle failure в RWA misprices collateral — cascade liquidations возможны.",
    ],
  },
  kadena: {
    short:
      "Kadena — kadena.io PoW L1 с Pact smart контракт; исторически корпоративный-focused chain в трудном положении.",
    long:
      "Kadena — подтверждение-of-work blockchain with Pact language, chainweb multi-chain architecture and корпоративный partnerships on kadena.io.",
    tagline: "Kadena — PoW L1 и Pact smart контракт.",
    highlight:
      "Kadena.io когда-то продвигала корпоративный-grade PoW с free газ через газ stations — KDA ecosystem проиграла EVM chains по разработчики внедрение. 2024–2025 concerns о continuity — сверяй status перед investment. Chainweb architecture интересна technically; ликвидность и dApp количество упали с пик. Для legacy KDA holders и researchers — не по умолчанию для новых Web3-сборок.",
    facts: [
      "Kadena пик 2021–2022: KDA top-50 рынок cap — TVL and dev activity never matched хайп.",
      "газ station модели subsidized txs — unsustainable without treasury refill; economics strained in bear.",
      "Pact language niche: no EVM compatibility — мост to Ethereum ecosystem limited разработчики pool.",
    ],
    tips: [
      "Перед любым действием с KDA сверь сеть status через официальный channels — ecosystem может быть degraded.",
    ],
    warnings: [
      "Illiquid alt-L1 токены — exit slippage extreme; не считай chain активно развивающейся без research.",
    ],
  },
  kalshi: {
    short:
      "Kalshi — kalshi.com, регулируемая биржа prediction рынки в США: ставки на события через CFTC-licensed биржа.",
    long:
      "Kalshi — биржа event контракт под надзором CFTC: yes/no рынки на экономику, политику, погоду и другие события на kalshi.com.",
    tagline: "Kalshi — регулируемый prediction рынок США.",
    highlight:
      "Kalshi.com легально открывает prediction рынки для пользователей из США — в отличие от офшорных crypto-платформ. Custody в USD, обязательный KYC, контракты сходятся к $0 или $1. Пересекается с нарративом Polymarket, но с TradFi соответствие требованиям-слоем. Для резидентов США, которые хотят торговать событиями без crypto кошелёк friction. Не on-chain DeFi — риски централизованной биржи и geo-ограничения.",
    facts: [
      "Kalshi CFTC approval 2020–2024: legal wins открыли эру US prediction рынки до возвращения Polymarket в дискурс.",
      "Избирательный цикл 2024 дал рекордные объёмы — Kalshi и Polymarket вывели «ставки на политику» в мейнстрим медиа.",
      "Regulated рынки ограничивают leverage и типы событий — часть рынков Polymarket на Kalshi illegal.",
    ],
    tips: [
      "Читай правила контракта про resolution source — спорные события обсуждают на форумах.",
    ],
    warnings: [
      "Event контракт могут обнулиться — только риск capital; не investment advice.",
    ],
  },
  kamino: {
    short:
      "Kamino Finance — свопы.kamino.finance Solana DeFi hub: lending, ликвидность хранилища и automated стратегии.",
    long:
      "Kamino — leading Solana DeFi протокол: CLMM ликвидность, multiply стратегии, lending рынки and свопы interface on свопы.kamino.finance.",
    tagline: "Kamino — automated ликвидность и lending на Solana.",
    highlight:
      "Kamino.finance became core Solana DeFi after FTX collapse recovery: auto-compounding хранилища, leveraged LP, kmno управление токены. свопы subdomain handles маршрутизация; main приложения для хранилища and lending. High yields on volatile pairs = high IL and liquidation риск on multiply. интеграции with Jupiter, Sanctum, restaking narratives. Для experienced Solana DeFi пользователи — monitor health factor on leveraged positions.",
    facts: [
      "Kamino TVL billions пик 2024 Solana сезон — multiply хранилища amplified both gains and liquidations in memecoin volatility.",
      "KMNO токены запуск followed баллы сезон — добытчики debated sybil rules and allocation fairness.",
      "Solana congestion March 2024: liquidations failed to land — пользователи lost more than expected in stress test.",
    ],
    tips: [
      "На multiply хранилища ставь alert на collateral ratio — Solana blocks fill fast в crashes.",
    ],
    warnings: [
      "Automated стратегии скрывают complexity — один oracle tick может trigger cascade liquidation.",
    ],
  },
  "katana-katana-network": {
    short:
      "Сеть Katana — katana.network, DeFi-цепочка от Sushi: доходность, хранилища и приложения экосистемы на выделенном L2.",
    long:
      "Katana — оптимизированный под DeFi блокчейн от Sushi Labs на katana.network: нативная доходность, хранилища и dApp экосистемы с дистрибуцией бренда Sushi.",
    tagline: "Katana — DeFi-цепочка от экосистемы Sushi.",
    highlight:
      "Katana.network запускается как appchain/L2-площадка для экосистемы Sushi: концентрированная ликвидность, стратегии хранилищ, партнёрские протоколы мигрируют ради стимулов. Привязан к токеномике Sushi и казначейству — кросс-промо из пользовательской базы DEX Sushi. Ранний наёмный TVL от эмиссий типичен. Для лоялистов Sushi и добытчиков доходности, гоняющихся за бустом новых цепочек. Мост только через официальный мост Katana; проверяй chain ID в кошельке.",
    facts: [
      "Нарратив appchain Sushi 2024–2025: Katana присоединяется к тренду DEX-брендов, запускающих собственные цепочки — накопление ценности токенов обсуждается.",
      "Коллизия имён с исторической «Katana» от Ronin — проверь, что katana.network не несвязанный проект.",
      "APY хранилищ новой цепочки — в основном эмиссии; устойчивая доходность требует органических комиссий за свопы после завершения стимулов.",
    ],
    tips: [
      "Сначала мости тестовую сумму — на новых цепочках скамы с неправильными адресами токенов в первые недели нередки.",
    ],
    warnings: [
      "Наёмный капитал уходит быстро после стимулов — риск непостоянных потерь и обвала токенов на LP-парах.",
    ],
  },
  kerneldao: {
    short:
      "Kernel DAO / Kelp — kerneldao.com/kelp liquid restaking rsETH и DeFi доходность на Ethereum LRT stack.",
    long:
      "Kernel DAO управляет протоколом Kelp на kerneldao.com/kelp: liquid restaking токены rsETH, restaking на EigenLayer AVSs с DeFi composability.",
    tagline: "Kelp rsETH — liquid restaking от Kernel DAO.",
    highlight:
      "Kerneldao.com/kelp — портал liquid restaking Kelp DAO: вкладывай ETH, получай rsETH для DeFi и restaking награды с баллы. Конкурирует с Ether.fi, Renzo, Puffer в LRT-секторе post-EigenLayer. Restaking добавляет AVS slashing риск поверх Ethereum вклад и smart контракт слой. баллы seasons разогнали TVL; post-TGE доходность сжимается. Для держателей ETH, принимающих layered риск ради incremental доходность.",
    facts: [
      "LRT wars 2024: Kelp TVL billions пик — EigenLayer баллы meta гнала депозиты до snapshot rumors.",
      "Restaking slashing пока theoretical для большинства AVSs — первый major slash пересчитает все LRT.",
      "rsETH depeg в stress: March 2024 показал, что LRT не всегда 1:1 redeemable мгновенно.",
    ],
    tips: [
      "Сравни rsETH биржа rate и redemption queue с ether.fi eETH — ликвидность differs по протоколам.",
    ],
    warnings: [
      "Restaking stacks slashing риски — не считай LRT риск-free заменой ETH.",
    ],
  },
};
