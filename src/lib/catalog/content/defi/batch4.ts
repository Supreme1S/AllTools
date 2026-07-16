import type { PlatformContent } from "@/lib/catalog/content/types";

export const DEFI_BATCH_4: Record<string, PlatformContent> = {
  "rocket-pool": {
    short:
      "Децентрализованный стейкинг ETH — rETH без 32 ETH и без кастодиального валидатора.",
    long:
      "Rocket Pool даёт ликвидный стейкинг через rETH и minipools для операторов нод с 8 ETH. Альтернатива Lido с более распределённым набором валидаторов — если важен нарратив децентрализации.",
    tagline: "Ликвидный стейкинг без монополии одного оператора.",
    highlight:
      "Rocket Pool — один из старейших протоколов децентрализованного стейкинга на Ethereum: внесите ETH, получите rETH с накопленной доходностью, используйте в DeFi как залог. Модель minipool позволяет соло-стейкерам запускать валидаторы с меньшим порогом через залог RPL. Конкуренция с Lido и Frax жёсткая, но Rocket Pool сохраняет бренд «самого децентрализованного LST» среди старожилов. Токен RPL — залог и управление; риск слashing распределён между операторами и протоколом.",
    facts: [
      "Merge 2022: TVL Rocket Pool взлетел, пока сообщество спорило «Lido слишком большой» — rETH стал символом антицентрализации в войнах стейкинга.",
      "Архитектура minipool: 16 ETH от пула + 16 ETH от оператора — модель, которую годами копировали новые LST-проекты.",
      "Требования к залогу RPL менялись через governance — операторы неделями обсуждали экономику в CT после каждого голосования.",
    ],
    tips: [
      "Сравните peg rETH/ETH и APR со stETH перед крупным депозитом — спред бывает на волатильности.",
      "Операторы нод: следите за коэффициентом залога RPL — недозалог minipool = принудительный выход.",
    ],
    warnings: [
      "Риск смарт-контрактов и слashing — LST не банковский депозит, штрафы валидаторов бьют по курсу rETH.",
    ],
  },
  rubic: {
    short:
      "Кроссчейн-агрегатор свапов — один интерфейс, множество мостов и DEX-маршрутов.",
    long:
      "Rubic агрегирует свапы и мосты между сетями. Удобен для разовых кроссчейн-переводов, когда не хочется вручную маршрутизировать через три протокола.",
    tagline: "Агрегатор для «перекинуть токен с chain A на chain B».",
    highlight:
      "Rubic собирает котировки из DEX, мостов и собственных источников ликвидности — пользователь видит лучший маршрут по цене и времени. Покрытие multi-chain шире, чем у UI одного моста, но агрегатор добавляет слой смарт-контрактов и риск партнёров. Токен RBC исторически давал скидки на комиссии. Для опытных пользователей часто дешевле напрямую через Stargate/Across; Rubic выигрывает на удобстве и необычных маршрутах.",
    facts: [
      "Кроссчейн-лето 2021: объём Rubic взлетел на мостовом мета — затем медвежий рынок сжал комиссии агрегаторов на месяцы.",
      "Инциденты рядом с экосистемой партнёрских мостов научили пользователей проверять финальную целевую сеть, а не только UI Rubic.",
      "SDK Rubic интегрировали в кошельки и dApps — B2B-маршрут иногда важнее розничного объёма свапов.",
    ],
    tips: [
      "Сравните котировку Rubic с прямым мостом на Stargate/Across для сумм >$5k — наценка агрегатора заметна.",
    ],
    warnings: [
      "Длинные маршруты = больше hops = больше точек отказа; поддержка застрявших tx идёт через партнёрские мосты, не мгновенно.",
    ],
  },
  satori: {
    short:
      "Perp DEX на EVM — ончейн-деривативы с фокусом на альт-рынки.",
    long:
      "Satori Finance — площадка бессрочных фьючерсов для трейдеров, которым нужен on-chain perp без KYC на CEX. Ликвидность и поддержку сетей проверяйте перед размером позиции.",
    tagline: "Ончейн-perps для тех, кто перерос spot-only DeFi.",
    highlight:
      "Satori строит торговлю perp с oracle-ценообразованием и cross-margin механикой, знакомой бывшим пользователям CEX. Капитализация меньше, чем у GMX или Hyperliquid, но нишевые alt perp-рынки иногда появляются раньше мажоров. Points и incentive-кампании типичны для perp DEX на стадии роста. Стандартные perp-риски: ликвидация, funding, смарт-контракты — плюс более тонкая ликвидность на альтах.",
    facts: [
      "Бум perp DEX 2023–2024: десятки новых площадок, включая Satori, боролись за программа доходности-объём — удержание сложнее привлечения.",
      "Задержка oracle на волатильных альтах — классическая боль perp DEX; посты сообщества о плохих исполнениях на спайках не редкость.",
      "Расширение на несколько сетей (где поддерживается) — каждая новая сеть = свежий риск онбординга через мост.",
    ],
    tips: [
      "Начинайте с isolated margin и небольшого размера — ликвидность на альтах может исчезнуть за секунду.",
    ],
    warnings: [
      "Плечо on-chain ликвидируется автоматически — нет службы поддержки «пожалуйста, закройте мою позицию».",
    ],
  },
  scroll: {
    short:
      "zkEVM L2 на Ethereum — EVM-совместимый rollup с ZK validity proofs.",
    long:
      "Scroll — Ethereum L2 с нативным zkEVM: деплой Solidity как на mainnet, gas ниже, безопасность от Ethereum + ZK-доказательства. DeFi-экосистема растёт после mainnet.",
    tagline: "zkEVM L2 — безопасность Ethereum, ZK-математика, опыт EVM-разработки.",
    highlight:
      "Mainnet Scroll запустился после долгого testnet-периода: Aave, DEX и мосты подключаются. Для разработчиков — минимальное трение от Ethereum; для пользователей — мост ETH/токенов и участие в программах доходности ранних incentive экосистемы. Токен SCR и нарратив airdrop привязаны к активности. Конкуренция с zkSync Era, Linea, Blast жёсткая — ликвидность фрагментирована между L2. Время вывода через мост зависит от cadence генерации доказательств Scroll.",
    facts: [
      "Mainnet Scroll 2023: airdrop-хантеры месяцами гоняли txs — «Scroll season» стало мемом в кругах L2-участников программ доходности.",
      "Дебаты zkEVM vs optimistic rollup: Scroll ставит на ZK-финальность, сообщество постоянно сравнивает со стеком zkSync.",
      "Нативный мост + сторонние мосты (Stargate и др.) — пользователи иногда теряли средства на неправильном UI моста в первые дни.",
    ],
    tips: [
      "Официальный мост Scroll для первого депозита — сторонние только после проверки контракта.",
    ],
    warnings: [
      "L2 ≠ безопасность mainnet с первого дня — аудируйте новые протоколы на Scroll перед крупными депозитами.",
    ],
  },
  "sirius-finance": {
    short:
      "Stableswap и ликвидность на Polkadot/Astar — DeFi в стиле 4Pool для экосистемы DOT.",
    long:
      "Sirius Finance — нативный DEX Astar с фокусом на stableswap и пары активов Polkadot. Для тех, кто в экосистеме DOT/KSM и ищет пулы в духе Curve.",
    tagline: "Stableswap-хаб Astar — DeFi экосистемы DOT без CEX.",
    highlight:
      "Sirius построил сбалансированные пулы для стейблов и токенов экосистемы на Astar (parachain Polkadot). Токен SRX — governance и incentive для LP. Глобальный TVL меньше, чем у Ethereum blue chips, но региональная ликвидность DOT часто концентрируется здесь. Нужен Substrate-кошелёк (Polkadot.js, Talisman) — другой UX-стек, чем у пользователей только с MetaMask.",
    facts: [
      "Astar dApp staking + Sirius LP — комбо, которое DOT-участники программ доходности гоняли для двойных наград в 2022–2023.",
      "Эра аукционов слотов parachain: Sirius рос вместе с TVL Astar, затем медвежий рынок сжал кроссчейн DOT DeFi.",
      "Название 4Pool — отсылка к культуре Curve; Sirius позиционировался как «Curve для Polkadot».",
    ],
    tips: [
      "Кошелёк: Talisman или SubWallet — одного MetaMask недостаточно для всех активов Astar.",
    ],
    warnings: [
      "Активы через parachain-мост несут дополнительный риск моста Polkadot ↔ Ethereum — проверяйте происхождение актива.",
    ],
  },
  socialswap: {
    short:
      "Community-driven DEX на BSC — свапы и программы доходности с social/token-gated элементами.",
    long:
      "SocialSwap — DEX на BNB Chain с social/community-углом. Стандартные AMM-свапы и yield-программы для BSC-активных трейдеров; тщательная проверка tokenomics обязательна.",
    tagline: "BSC DEX с social-слоем — программа доходности-мета на Binance Smart Chain.",
    highlight:
      "SocialSwap работает в переполненном пространстве BSC DEX (доминирование PancakeSwap). Дифференциация через community-фичи и native SOS/token incentive. Типичные риски BSC: анонимные команды, высокий APY в программах доходности, impermanent loss на meme-парах. Для небольших экспериментальных LP — ок; для крупных сумм — держитесь audited blue chips на Pancake или Thena.",
    facts: [
      "Сезон программ доходности BSC 2021: десятки запусков в духе SocialSwap — большинство TVL испарилось за месяцы.",
      "Эксперименты с social token gating на DEX — ниша, но показала спрос на «community-owned» swap UI.",
      "Vampire attacks PancakeSwap на форки BSC — классический паттерн; удержание SocialSwap = реальное сообщество, а не только APY.",
    ],
    tips: [
      "APY >500% = вероятный обвал emission-токена — план выхода до порогового снижения.",
    ],
    warnings: [
      "Неаудированные контракты и анонимные команды — относитесь к депозитам как к высокорисковой спекуляции.",
    ],
  },
  solend: {
    short:
      "Ведущий lending-протокол на Solana — borrow/lend с flash loans и isolated pools.",
    long:
      "Solend — аналог Aave на Solana: депозит залога, займ, yield. Governance SLND и risk parameters по пулам. Базовая инфраструктура SOL DeFi lending.",
    tagline: "OG lending на Solana — залоговый займ без банка.",
    highlight:
      "Solend доминировал в lending на Solana до конкуренции Marginfi и Kamino. Модель процентных ставок в духе Compound; flash loans для arb-ботов. Драма взлома main pool 2022 (whale account) — протокол выжил, но напоминание про oracle и governance risk. Стейкеры SLND участвуют в fee revenue. Кошелёк: Phantom/Backpack; держите SOL на комиссии.",
    facts: [
      "Ноябрь 2022: кризис whale Solend — governance vote о принудительной ликвидации одного кошелька потряс нарратив «децентрализации DeFi» на часы.",
      "Коллапс FTX: TVL Solend упал, но протокол продолжил работу — lending-инфра Solana оказалась устойчивее CEX.",
      "Объём flash loans на Solend питает Jupiter arb-ботов — невидимый backbone Solana DeFi.",
    ],
    tips: [
      "Следите за health factor при займах — обновления oracle на Solana быстрее, чем вы проверяете Telegram.",
    ],
    warnings: [
      "Isolated pools безопаснее; риск концентрации main pool выше — читайте параметры пула перед крупным депозитом.",
    ],
  },
  "space-id": {
    short:
      "Web3 name service — домены .bnb, .arb и универсальный identity-слой.",
    long:
      "SPACE ID регистрирует human-readable домены между сетями (BNB, Arbitrum и др.). Токен ID — governance и скидки. Альтернатива ENS на multichain.",
    tagline: "Multichain-домены — стиль ENS, нативно для BNB/Arbitrum.",
    highlight:
      "SPACE ID вырос на буме доменов BNB Chain: регистрация name.bnb, использование как alias кошелька, торговля на вторичном рынке. Интеграция Arbitrum Name Service расширила охват. Мета перепродажи доменов как ENS 2021 — премиум-имена торгуются за тысячи. Стейкинг токена ID и referral-механики. Проверяйте официальный регистратор space.id — typosquat-домены повсюду.",
    facts: [
      "Rush доменов BNB Chain 2023: регистрации space.id взлетели — нарратив «digital land grab» повторил playbook ENS.",
      "Партнёрство с Arbitrum: SPACE ID стал default naming layer для части dApps Arbitrum — ставка экосистемы на UX.",
      "Floor цены на вторичном рынке рухнули после хайпа — инвесторы в домены дважды усвоили урок неликвидности.",
    ],
    tips: [
      "Регистрируйте варианты бренда заранее — сквоттеры быстрее юристов в Web3.",
    ],
    warnings: [
      "Домен ≠ верифицированная личность — фишинговые сайты используют похожие .bnb имена.",
    ],
  },
  spacefi: {
    short:
      "DEX на zkSync Era — свапы, программы доходности и токен экосистемы SpaceFi.",
    long:
      "SpaceFi — нативный DEX на zkSync с AMM-пулами и yield-программами. Ранняя ставка на DeFi zkSync Era; ликвидность тоньше, чем у SyncSwap или Maverick.",
    tagline: "DEX zkSync Era — программы доходности L2-incentive, пока экосистема молода.",
    highlight:
      "SpaceFi запустился с волной mainnet zkSync Era — incentive токена SPACE для LP и трейдеров. Стандартные пулы в стиле Uniswap v2 плюс программа доходности-контракты. Конкуренция жёсткая на zkSync: SyncSwap, iZUMi, Maverick делят ликвидность. Мост через официальный мост zkSync первым. IL и эмиссионный сброс на программа доходности-токены — стандартная экономика L2 DEX.",
    facts: [
      "Неделя запуска zkSync Era: всплеск TVL SpaceFi на txs airdrop-участников программ доходности — типичный паттерн «first movers» на новом L2.",
      "Графики emission токена SPACE — участники программ доходности выходят к датам порогового снижения, TVL выглядит как кардиограмма.",
      "Volume war SpaceFi vs SyncSwap на zkSync — меньший DEX живёт на нишевых парах и лояльном сообществе.",
    ],
    tips: [
      "Сравните slippage свапа со SyncSwap на той же паре перед крупной сделкой.",
    ],
    warnings: [
      "APY программ доходности в основном emission-токены — считайте в USD, а не в SPACE APR.",
    ],
  },
  stargate: {
    short:
      "Кроссчейн-мост на LayerZero — unified liquidity pools, токен STG.",
    long:
      "Stargate — флагманский мост экосистемы LayerZero: нативные переводы активов между Ethereum, Arbitrum, Optimism, BNB и др. Стейкинг STG за governance и награды.",
    tagline: "Мост LayerZero — omnichain-ликвидность без wrapped mess.",
    highlight:
      "Stargate решил «bridge trilemma» в маркетинге через unified liquidity pools и мгновенную гарантированную финальность на поддерживаемых маршрутах. Глубокая интеграция со стандартом LayerZero OFT — многие токены запускаются omnichain через стек Stargate/LZ. Emission STG исторически питали LP incentive; экономика после запуска токена эволюционировала. Риск эксплойта моста управляется аудитами, но зависимость от LayerZero = системный фактор. Default-мост для многих multichain-протоколов.",
    facts: [
      "Запуск Stargate 2022: TVL миллиарды за недели — нарратив LayerZero доминировал в кроссчейн-дискурсе месяцами.",
      "Airdrop и программы доходности STG: пользователи гоняли туда-обратно для eligibility — мем о трате gas, но TVL был реальным.",
      "Драма токенов LayerZero–Stargate 2023: сообщество раскололось по emission и treasury — урок governance для omnichain-инфры.",
    ],
    tips: [
      "Дисбаланс пула на destination может добавить fee — проверьте баланс пула Stargate перед мостом.",
    ],
    warnings: [
      "Поддельные сайты claim STG не исчезают — только официальный stargate.finance.",
    ],
  },
  starknet: {
    short:
      "ZK rollup L2 — контракты Cairo, экосистема Starknet и токен STRK.",
    long:
      "Starknet — Ethereum L2 от StarkWare с нативной Cairo VM (не EVM). Растущий DeFi: JediSwap, Ekubo, Nostra, Paradex. Кошелёк: Argent/Braavos.",
    tagline: "Cairo L2 — не default MetaMask, но экосистема STRK реальна.",
    highlight:
      "Mainnet Starknet принёс токен STRK, airdrop и волну нативных приложений. Кривая разработки на Cairo круче, чем на Solidity — но производительность и ZK-доказательства сильны. DeFi-стек созревает: DEX, lending, perps (Paradex), домены (Starknet.ID). Мост с Ethereum через официальный StarkGate; сторонние мосты существуют. Account abstraction нативно — social recovery в Argent X. Фрагментированная ликвидность vs Arbitrum/Base.",
    facts: [
      "Airdrop STRK 2024: одно из крупнейших распределений L2 — участники программ доходности годами готовились через активность на Starknet.",
      "Миграция Cairo 1.0: разработчики месяцами портили контракты — обсуждения «tech debt Starknet» в CT.",
      "Треугольник Paradex + Nostra + JediSwap — DeFi-стек Starknet 2024 наконец стал usable vs пустой mainnet 2023.",
    ],
    tips: [
      "Кошелёк: Argent X или Braavos — backup seed критичен, AA recovery ≠ сброс пароля CEX.",
    ],
    warnings: [
      "Не EVM — отправка на wrong network теряет средства; дважды проверяйте формат адреса Starknet.",
    ],
  },
  "starknet-id": {
    short:
      "Identity и домены на Starknet — имена .stark, профили, верификация.",
    long:
      "Starknet.ID — naming и identity-слой для Starknet: регистрация имени, привязка socials, использование в dApps. Компаньон кошельков Argent/Braavos.",
    tagline: ".stark домены — human-readable адреса на Cairo L2.",
    highlight:
      "Starknet.ID даёт ENS-подобный опыт на Starknet: регистрация alice.stark, PFP и verified credentials. Интеграции с dApps экосистемы для display names. Токен ID и mint fees. Вторичный рынок премиум-имён. защита от множественных аккаунтов через verification badges — quest-платформы используют Starknet.ID как identity anchor.",
    facts: [
      "Mint rush Starknet.ID привязан к eligibility airdrop STRK — домены стали инструментом защита от множественных аккаунтов для квестов.",
      "Интеграция с Argent X: display names в кошельке — UX-победа, которую ENS на Ethereum оттачивал годами.",
      "Аукционы премиум .stark: короткие имена торговались за сотни STRK — знакомый цикл спекуляции из ENS.",
    ],
    tips: [
      "Минтите core identity рано — gas на Starknet дешевле сожаления о покупке на вторичке.",
    ],
    warnings: [
      "Verified badge ≠ KYC — scammers покупают домены, похожие на официальные проекты.",
    ],
  },
  stashh: {
    short:
      "NFT-маркетплейс на Secret Network — торговля NFT с сохранением приватности.",
    long:
      "Stashh — маркетплейс для NFT Secret Network с опциями private metadata. Ниша для privacy-focused коллекционеров; нужен SCRT-кошелёк.",
    tagline: "Private NFT на Secret — metadata не всегда на публичном IPFS.",
    highlight:
      "Secret Network позволяет шифровать private data on-chain; Stashh использует это для NFT, где важна приватность metadata. Экосистема меньше по объёму vs Ethereum или Solana NFT, но уникальный value prop. Keplr с поддержкой Secret. Royalty и creator tools — стандарт маркетплейса. Ликвидность на вторичке тонкая — price discovery сложен для уникальных privacy NFT.",
    facts: [
      "Эксперименты Secret NFT 2022: Stashh позиционировался как «SuperRare с приватностью» — объём не догнал хайп, ниша застряла.",
      "Волатильность цены SCRT напрямую влияет на pricing создателей — USD floor mental math сложнее для покупателей.",
      "Privacy NFT в regulatory gray zone — часть создателей избегала публичного продвижения, ограничивая рост маркетплейса.",
    ],
    tips: [
      "Кошелёк: Keplr с Secret — тестовый mint перед sweep коллекции.",
    ],
    warnings: [
      "Private metadata = сложнее due diligence — проверяйте репутацию создателя off-chain.",
    ],
  },
  "storm-fi": {
    short:
      "DeFi на TON — Storm Trade perps и ликвидность через Telegram-native UX.",
    long:
      "Storm.FI (Storm Trade) — деривативы и DeFi на The Open Network с глубокой интеграцией Telegram. TON-кошелёк через Tonkeeper/Tonhub.",
    tagline: "Perp DeFi в экосистеме Telegram — скорость TON, mobile-first.",
    highlight:
      "Storm Trade приносит perp-трейдинг на TON — экосистема едет на волне Telegram mini-apps и momentum TON Foundation. Mobile-first UX через Telegram-ботов и web apps. Ликвидность растёт с расширением DeFi TON (STON.fi и др.). Стандартные perp-риски плюс зрелость смарт-контрактов новой сети. Points и TON incentive-кампании двигают объём.",
    facts: [
      "Нарратив Telegram + TON 2024: Storm и peers видели всплеск объёма на онбординге mini-apps — мем «CEX в вашем чате».",
      "Notcoin и hype cycle TON притянули retail в Storm perps — funding rates дикие в meme-сезоны.",
      "Storm на TON vs established perp DEX: insurance funds тоньше — размер позиций соответственно.",
    ],
    tips: [
      "Кошелёк Tonkeeper — держите TON на gas; ссылки Telegram bot проверяйте через официальные каналы.",
    ],
    warnings: [
      "Фишинговые Telegram-боты имитируют UI Storm — только ссылки с официального storm.tg.",
    ],
  },
  "sumer-money": {
    short:
      "Кроссчейн lending — borrow/lend активов между несколькими L1/L2 сетями.",
    long:
      "Sumer Money — omnichain lending-протокол: депозит на одной сети, займ на другой через cross-chain messaging. Новизна, но bridge/oracle risk усложнён.",
    tagline: "Lending без границ сетей — trade-off сложности.",
    highlight:
      "Sumer строит unified lending market между сетями — capital efficiency для multichain natives. Базовая кроссчейн-инфра (зависимости класса LayerZero/Wormhole) добавляет слой к стандартным lending-рискам: oracle, ликвидация, latency моста. Governance токена SMR. Для уставших от siloed Aave instances per chain — compelling; для risk-averse — проще lend per-chain на blue chips.",
    facts: [
      "Хайп cross-chain lending 2023: Sumer среди проектов с обещанием «Aave, но omnichain» — аудиты и рост TVL рассказали историю выживания.",
      "Первые cross-chain liquidation events индустрии — пользователи Sumer узнали, что latency между сетями влияет на обновление health factor.",
      "Points-кампании на нескольких сетях — участники программ доходности гоняли залог через мосты для eligibility, временно раздувая TVL.",
    ],
    tips: [
      "Займ на той же сети, что и крупнейший залог, когда возможно — меньше lag cross-chain ликвидации.",
    ],
    warnings: [
      "Сбой cross-chain messaging = застрявшие позиции — не мгновенный fix поддержки.",
    ],
  },
  sunswap: {
    short:
      "Ведущий DEX на TRON — токен SUN, stablecoin-пары и хаб DeFi TRON.",
    long:
      "SunSwap — основной AMM на TRON для USDT-TRC20 и пар TRX. Кошелёк TronLink; огромный объём stablecoin, регуляторное давление на экосистему TRON отдельно.",
    tagline: "DEX TRON — король USDT-ликвидности на TRC20 rails.",
    highlight:
      "SunSwap обслуживает огромный объём USDT на TRON — сеть известна переводами и stablecoin-активностью. Программы доходности и governance токена SUN. Низкие комиссии, высокий throughput. Опасения по централизации TRON и история SEC (Justin Sun) — макрориск отдельно от механики протокола. Для нативов TRON — свап по умолчанию; для остальных часто точка входа конвертации USDT-TRC20.",
    facts: [
      "USDT на TRON часто превышает transfer count USDT на Ethereum — SunSwap захватывает swap slice этого потока.",
      "Pump-and-программа доходности циклы токена SUN привязаны к маркетингу Justin Sun — love-hate отношения CT годами.",
      "Взломы TronLink через malicious dApp approvals — пользователи SunSwap не застрахованы от TRON phishing.",
    ],
    tips: [
      "TronLink: периодически отзывайте неактивные approvals — TRON approval scams часты.",
    ],
    warnings: [
      "Регуляторный и centralization risk TRON — учитывайте отдельно от аудита смарт-контрактов SunSwap.",
    ],
  },
  superbridge: {
    short:
      "UI моста для OP Stack chains — Optimism, Base, Mode и семейство L2.",
    long:
      "Superbridge — популярный frontend для официальных нативных мостов OP Stack. Простые депозиты ETH/токенов на Base, Optimism, Mode, Zora и др.",
    tagline: "UX моста OP Stack — официальные маршруты, чистый UI.",
    highlight:
      "Superbridge агрегирует официальные bridge-контракты для L2 экосистемы Optimism — не проприетарную логику моста, а доверенный UI-слой. Пользователи предпочитают его raw bridge-контрактам за ясность и отслеживание статуса. 7-дневный challenge period вывода на optimistic rollups всё ещё действует — Superbridge не сокращает модель безопасности. Необходимый инструмент для онбординга Base и OP Stack.",
    facts: [
      "Запуск Base 2023: трафик Superbridge взлетел — стал ответом по умолчанию «как завести ETH на Base» в CT.",
      "Superbridge vs bridge.xyz vs native portals — UI wars, те же underlying OP-контракты.",
      "Обучение UX вывода: новички ждут мгновенный L2→L1 — status pages Superbridge болезненно учат challenge period.",
    ],
    tips: [
      "Вывод L2→L1: планируйте 7 дней или платите third-party LP за instant (с fee).",
    ],
    warnings: [
      "Поддельные сайты Superbridge — URL superbridge.app; добавьте официальный в закладки.",
    ],
  },
  superform: {
    short:
      "Кроссчейн yield vaults — один депозит, маршрутизация в лучшие vaults на любой сети.",
    long:
      "SuperForm — vault aggregator между сетями: депозит USDC/ETH, протокол маршрутизирует в yield strategies на Arbitrum, Optimism, Polygon и др. Экосистема токена SUPER.",
    tagline: "Yield vaults без ручного bridge hop каждую неделю.",
    highlight:
      "SuperForm абстрагирует multichain yield программа доходностиing: пользователи депозитят в unified vault tokens (SuperPositions), curators/strategies распределяют cross-chain. Messaging класса LayerZero двигает капитал. Премия за удобство vs DIY; стек смарт-контрактов глубже — vault + bridge + destination protocol. Yield варьируется; не все strategies аудированы одинаково. Мощный инструмент для пассивных искателей multichain yield.",
    facts: [
      "SuperForm привлёк инвестиции в narrative cross-chain yield 2023 — pitch «one click Yearn everywhere» откликнулся у уставших участников программ доходности.",
      "Модель SuperPosition NFT/token — новая модель учёта; бухгалтеры и пользователи путались изначально.",
      "Репутация strategy curator важна — один плохой destination vault бьёт по NAV всего SuperForm pool.",
    ],
    tips: [
      "Читайте, какие underlying protocols использует ваш vault — SuperForm абстрагировал, риск не устранён.",
    ],
    warnings: [
      "Cross-chain vault = наслоенный риск смарт-контрактов; выход может lag при congestion моста.",
    ],
  },
  superrare: {
    short:
      "Кураторский маркетплейс crypto art 1/1 — премиум NFT, бренд с приоритетом художника.",
    long:
      "SuperRare — OG кураторская NFT art-платформа: работы single-edition, gallery culture, токен RARE. Не PFP floor sweeps — стиль fine art collector.",
    tagline: "Галерея crypto art 1/1 — до PFP boom и после.",
    highlight:
      "SuperRare запустился в 2018 — ветеран crypto art scene. Художники минтят уникальные работы; коллекционеры bid в ETH. Social features, spaces и governance $RARE. Объём ниже пика 2021, но бренд сохраняется среди art-focused коллекционеров. Роялти исторически enforced on-chain — дебаты после optional royalties OpenSea. Gas Ethereum mainnet на mints — L2 experiments ограничены.",
    facts: [
      "Beeple и ранняя волна crypto art: SuperRare рядом с Foundation определили «serious art NFT» до доминирования BAYC PFP.",
      "Пик 2021: отдельные продажи SuperRare за сотни ETH — реальность floor 2023 смиряла спекулянтов.",
      "Запуск токена $RARE: сообщество раскололось — художники vs спекулянты по направлению платформы.",
    ],
    tips: [
      "Изучайте историю художника off-platform — curated ≠ investment advice.",
    ],
    warnings: [
      "Неликвидный рынок 1/1 — bid может быть единственным выходом месяцами.",
    ],
  },
  swapbased: {
    short:
      "DEX на Base — форк Uniswap с BASE incentive и локальными программами доходности.",
    long:
      "SwapBased — AMM на Base chain на волне запуска L2. Стандартные v2-style pools; конкуренция с Aerodrome, Uniswap на Base за ликвидность.",
    tagline: "Native DEX fork на Base — программа доходности-мета на Coinbase L2.",
    highlight:
      "SwapBased запустился с incentive экосистемы Base — программы доходности BASE или protocol token для LP. Fork economics знакомы: высокий APY, decay emission, mercenary capital TVL. Aerodrome доминирует ve(3,3) narrative на Base; SwapBased занимает нишевые пары. IL на волатильных Base meme coins реален. Тщательная проверка команды и аудитов перед long-term liquidity home.",
    facts: [
      "Месяц запуска Base: десятки Uniswap forks, включая SwapBased, боролись за внимание участников программ доходности — большинство TVL временное.",
      "Memecoin-пары на Base 2024: всплески объёма SwapBased коррелировали с DEGEN и friend.tech adjacent tokens.",
      "Fork wars: SwapBased vs BaseSwap vs others — пользователи гонятся за emission, протоколы за mercenary LP.",
    ],
    tips: [
      "Выходите из программы доходности до порога эмиссии — исход TVL предсказуем.",
    ],
    warnings: [
      "Forked контракты с modified admin keys — читайте timelock и ownership.",
    ],
  },
  swell: {
    short:
      "Liquid restaking — rswETH и L2 restaking products, Swell Network.",
    long:
      "Swell — liquid restaking protocol: stake ETH, получите rswETH, участвуйте в restaking rewards EigenLayer. Токен SWELL и points-кампании.",
    tagline: "Restaking yield в liquid token — EigenLayer без 32 ETH.",
    highlight:
      "Swell конкурирует в crowded LRT space (Ether.fi, Renzo, Puffer): deposit ETH, liquid restaking token, использование в DeFi. Мета поинтов до токена гнала депозиты; после запуска SWELL экономика сдвинулась. Restaking stacks validator + AVS slashing risk — новее classic LST. L2 restake products Swell расширяют narrative beyond vanilla rswETH.",
    facts: [
      "Boom EigenLayer restaking 2024: TVL Swell миллиарды за недели — культура «points» leaderboard peaked industry-wide.",
      "LRT depeg scares на волатильности ETH — spread rswETH/ETH нервно мониторили в CT.",
      "Запуск токена SWELL: участники программ доходности ротировали в следующий points protocol — классическая миграция mercenary capital.",
    ],
    tips: [
      "Сравните yield rswETH vs eETH/rzETH net of DeFi utility — headline APR misleading.",
    ],
    warnings: [
      "Restaking slashing cascades не доказаны at scale — stacked risk vs stETH alone.",
    ],
  },
  "symbiosis-swap": {
    short:
      "Кроссчейн AMM и маршрутизация — свап любого токена между 30+ сетями.",
    long:
      "Symbiosis Finance — протокол кроссчейн-свапов с собственными пулами ликвидности и маршрутизацией. Токен SIS; альтернатива Stargate/Rubic на некоторых маршрутах.",
    tagline: "Один свап, много сетей — движок маршрутизации Symbiosis.",
    highlight:
      "Symbiosis строит кроссчейн-пулы ликвидности, позволяя напрямую обменивать токены на разных сетях без обязательного предварительного моста в стейбл. sTokens представляют кроссчейн-активы в пулах. Покрытие широкое на EVM и некоторых non-EVM сетях. Конкуренция агрегаторов жёсткая; Symbiosis выигрывает на отдельных экзотических маршрутах. Стандартные риски смарт-контрактов моста плюс комиссии за дисбаланс пула.",
    facts: [
      "Symbiosis расширился на Bitcoin и non-EVM сети — маркетинг «any-to-any» свапа на пике multichain-эры.",
      "Программы доходности с эмиссией токена SIS — TVL следовал за ценой токена, классический рефлексивный цикл DeFi.",
      "Партнёрские интеграции с кошельками для встроенного кроссчейн-свапа — B2B-объём иногда превышает сайт.",
    ],
    tips: [
      "Проверяйте расчётное время прибытия — кроссчейн-свапы не всегда мгновенны.",
    ],
    warnings: [
      "Неудачные кроссчейн-tx требуют тикета в поддержку с хешем транзакции — всегда сохраняйте хеши.",
    ],
  },
  symmetric: {
    short:
      "DEX со сбалансированными пулами на Telos — stableswap и weighted pools для экосистемы TLOS.",
    long:
      "Symmetric Finance на Telos EVM — stableswap и weighted pools в духе Curve. Incentive токена SYM; нишевый хаб ликвидности DeFi Telos.",
    tagline: "Stableswap Telos — маленькая сеть, знакомая AMM-математика.",
    highlight:
      "Symmetric приносит stableswap в стиле Curve на Telos — низкие комиссии, EVM-совместимая сеть с иным набором валидаторов, чем у Ethereum. LP-инсентивы в SYM. Объём скромен по сравнению с крупными сетями; полезен для нативных стейблов Telos и wrapped-активов. Настройка кошелька Telos (MetaMask с кастомным RPC) — дополнительное трение для чужаков.",
    facts: [
      "Запуск Telos EVM принёс Ethereum-инструменты на Telos — Symmetric среди первых DEX, захвативших миграционную ликвидность.",
      "Weighted pools для пар TLOS — обучение IL повторялось для LP на малых сетях.",
      "Конкуренция Symmetric vs Telos Swap — экосистема слишком мала для нескольких победителей в долгую.",
    ],
    tips: [
      "Добавьте Telos RPC в MetaMask перед подключением — неверная сеть = неудачные tx.",
    ],
    warnings: [
      "TVL малой сети — крупный свап сильно двигает цену.",
    ],
  },
  synfutures: {
    short:
      "Ончейн futures DEX — Oyster AMM для perps и фьючерсов с датой экспирации на нескольких сетях.",
    long:
      "SynFutures — децентрализованная торговля фьючерсами с моделью Oyster AMM. v3 на Base, Arbitrum, BNB; perps и фьючерсы без классического стакана заявок.",
    tagline: "Фьючерсы on-chain — Oyster AMM вместо matching engine CEX.",
    highlight:
      "SynFutures v3 «Oyster» объединяет concentrated liquidity с фьючерсами — торговля деривативами BTC/ETH/альтов on-chain. Развёртывание на нескольких сетях после уроков v2. Governance токена F. Ликвидность тоньше CEX; механика oracle и funding требует обучения трейдера. Ниша на фоне Hyperliquid/GMX, но гибрид AMM-фьючерсов с отличиями.",
    facts: [
      "Миграция SynFutures v2→v3: перезапуск продукта после раннего объёма — команда поставила на модель Oyster для реланча v3.",
      "Развёртывания на Base и Arbitrum в 2024: погоня за волной объёма L2-деривативов рядом с Avantis и др.",
      "Название Oyster AMM — маркетинг пытался отличиться от толпы generic perp-форков.",
    ],
    tips: [
      "Начинайте с мажоров (BTC/ETH) — ликвидность alt futures часто односторонняя.",
    ],
    warnings: [
      "AMM-фьючерсы могут иметь более широкий спред, чем CEX — slippage на крупном размере.",
    ],
  },
  "telos-swap": {
    short:
      "Нативный DEX на Telos — свапы и пулы для TLOS и токенов экосистемы Telos.",
    long:
      "Telos Swap (tswaps.com) — основной swap-интерфейс на Telos EVM. Компаньон Symmetric для DeFi Telos; проверяйте глубину ликвидности по каждой паре.",
    tagline: "DEX Telos — локальный свап токенов экосистемы TLOS.",
    highlight:
      "Telos Swap обеспечивает AMM-торговлю на Telos — низкие комиссии, EVM-совместимость. Пары с нативными проектами Telos и wrapped-активами. Меньшая экосистема — slippage на неосновных парах. Полезен для резидентов Telos; кроссчейн-пользователи редко делают мост только ради Telos Swap, если нет стимула доходности.",
    facts: [
      "Позиционирование Telos как «быстрый EVM side chain» — Telos Swap выиграл от дешёвых экспериментальных txs.",
      "Экосистемные гранты иногда поднимали APR конкретных пулов — временные всплески TVL.",
      "Telos vs крупные L2: мало разработчиков — DEX-инновации медленнее, для базовых задач надёжность ок.",
    ],
    tips: [
      "Проверяйте контракт токена в Telos explorer — scam-токены быстро попадают в листинг на малых DEX.",
    ],
    warnings: [
      "Неликвидные пулы — риск front-run ниже, но выход с убытком при обмане всё равно лёгок.",
    ],
  },
  tensor: {
    short:
      "Pro NFT-маркетплейс на Solana — AMM для NFT, инструменты ставок, фокус на трейдерах.",
    long:
      "Tensor — торговая платформа NFT на Solana для профи: ставки на коллекции, NFT AMM, аналитика. Токен TNSR; бросил вызов доминированию Magic Eden в сегменте трейдеров.",
    tagline: "Solana NFT terminal — Magic Eden для активных трейдеров с графиками.",
    highlight:
      "Tensor выпустил фичи, которые Magic Eden медленно внедрял: ставки на всю коллекцию, NFT AMM (TensorSwap), аналитика в реальном времени, программы лояльности. Airdrop TNSR трейдерам в 2024 — одно из крупнейших на Solana. Доля объёма vs Magic Eden колеблется. Кошелёк: Phantom/Backpack. Политика роялти — отраслевой дебат. Для NFT-перекупщиков на Solana — Tensor часто выбор по умолчанию.",
    facts: [
      "Войны Tensor vs Magic Eden 2023–2024: принуждение роялти и pro-инструменты раскололи сообщество Solana NFT.",
      "Airdrop TNSR: активные трейдеры получили награды — мета «торговля NFT как способ заработка» достигла пика.",
      "TensorSwap AMM: мгновенная продажа NFT в пул — инновацию ликвидности скопировали другие маркетплейсы.",
    ],
    tips: [
      "Ставки на коллекции — настройте price alerts; преимущество скорости Tensor только если следите за рынком.",
    ],
    warnings: [
      "NFT AMM-пулы могут gap на тонких коллекциях — проверяйте глубину пула перед мгновенной продажей.",
    ],
  },
  "test-portal": {
    short:
      "Testnet-портал Dango exchange — песочница для экспериментов с протоколом Dango.",
    long:
      "Test-portal на test-portal.dango.exchange — тестовая среда для функций Dango exchange. Не mainnet-средства; для разработки и предпросмотра.",
    tagline: "Dango testnet playground — фальшивые деньги, настоящие баги.",
    highlight:
      "Dango test portal позволяет попробовать механику биржи до mainnet: свапы, депозиты, UI-потоки на testnet-токенах. Необходим для разработчиков и раннего сообщества. Нет реальной экономической ценности — testnet ETH/токены из faucets. Баги ожидаемы; сообщайте через официальные каналы. Риск путаницы, если пользователи принимают testnet за mainnet-домен.",
    facts: [
      "Testnet-порталы стандартны до mainnet — сообщество Dango использовало portal для циклов обратной связи перед публичным запуском.",
      "Пользователи иногда переводят через мост реальные активы в неверную сеть — всегда проверяйте watermark «testnet» в UI.",
      "Quest-платформы иногда линкуют testnet-задачи — участник с множественными аккаунтамиы генерируют шумовые данные для протоколов.",
    ],
    tips: [
      "Используйте отдельный кошелёк для testnet — не засоряйте историю main-кошелька.",
    ],
    warnings: [
      "Никогда не отправляйте mainnet-активы на testnet-адреса — безвозвратно.",
    ],
  },
  thorlending: {
    short:
      "Lending в экосистеме THORChain — borrow/lend через интерфейс Thorswap.",
    long:
      "ThorLending (Thorswap finance app) — lending-продукты, привязанные к кроссчейн-ликвидности THORChain. DeFi-расширение экосистемы RUNE; нюансы кроссчейн-залога.",
    tagline: "Lending-слой THORChain — DeFi-растяжка экосистемы RUNE.",
    highlight:
      "Thorswap расширился за пределы swap в lending — использует кроссчейн-пулы THORChain для borrow/lend. RUNE как нативный актив; кроссчейн-залог с inbound-адресами THORChain. Сложность выше vs простой Aave; награды для нативов THORChain. История halt THORChain — системный риск для всех ecosystem apps во время пауз сети.",
    facts: [
      "Эксплойты и halts THORChain 2021–2022: ecosystem apps, включая lending, паузились вместе — «риск сети = риск приложения».",
      "Ребрендинг и расширение продуктов Thorswap — lending добавлен, чтобы удержать RUNE DeFi-пользователей после эры только swap.",
      "Кроссчейн-ликвидации залога во время волатильности RUNE — болезненные уроки для ранних заёмщиков.",
    ],
    tips: [
      "Следите за halt status THORChain — lending заморожен во время чрезвычайных ситуаций сети.",
    ],
    warnings: [
      "Риск консенсуса нод THORChain отдельно от lending-контракта — наслоенные зависимости.",
    ],
  },
  thruster: {
    short:
      "Ведущий DEX на Blast — native yield, points и Thruster incentives.",
    long:
      "Thruster Finance — доминирующий Blast L2 DEX с native yield на idle-активах до pre-launch hype. Драйвер мета BLAST points; конкуренция с Blaster, Ambient.",
    tagline: "Король DEX Blast L2 — points season сделал его знаменитым.",
    highlight:
      "Thruster взлетел на запуске Blast L2 — native rebasing ETH/USDB yield плюс комиссии DEX. LP-инсентивы и points-кампании привлекли наёмный капитал. Стандартный AMM плюс продвинутые фичи со временем. После запуска токена BLAST — вызов удержания. Регуляторные и sustainability-вопросы экосистемы Blast затрагивают все native apps.",
    facts: [
      "Blast gold points 2024: Thruster TVL на вершине L2 — участники программ доходности депозитили миллиарды для спекулятивного airdrop.",
      "Native yield на DEX LP — новая механика; бухгалтеры и пользователи спорили, yield это доход или rebase.",
      "Post-airdrop падение TVL по всей Blast — тест удержания Thruster продолжается.",
    ],
    tips: [
      "Если участвуете в программах доходности points — следите за официальными критериями Blast, не слухами в Twitter threads.",
    ],
    warnings: [
      "Points ≠ гарантированная ценность airdrop — альтернативная стоимость заблокированной ликвидности реальна.",
    ],
  },
  tofunft: {
    short:
      "Multichain NFT-маркетплейс — BNB, Polygon, Avalanche и др., доступный минт.",
    long:
      "TofuNFT — маркетплейс на нескольких L1/L2 с низким порогом минта для создателей. Объём средний; популярен в BNB и Polygon NFT-сообществах.",
    tagline: "Multichain NFT-базар — минт дёшево, проверяй качество.",
    highlight:
      "TofuNFT агрегирует торговлю NFT на сетях, где OpenSea слабее — BNB Chain, Polygon, Avalanche и др. Удобные инструменты минта привлекли спам-коллекции рядом с легитимными проектами. Токен TOFU — исторические инсентивы. Роялти и стандарты верификации различаются по сетям. Осторожно с неверифицированными коллекциями — маркетплейс ≠ кураторство.",
    facts: [
      "BNB Chain NFT boom 2021: TofuNFT захватил объём, который OpenSea игнорировал — победа регионального маркетплейса.",
      "Спам-минты — репутация TofuNFT пострадала от низкокачественных коллекций; поиск в UI ухудшился.",
      "Стратегия мультичейн-экспансии: мастер на всех сетях, эксперт ни на одной — vs фокус Tensor/Magic Eden.",
    ],
    tips: [
      "Фильтруйте только verified-коллекции — неверифицированные минты с высоким scam-ratio.",
    ],
    warnings: [
      "Подделки коллекций — проверяйте адрес контракта из официального Twitter проекта.",
    ],
  },
  tokensoft: {
    short:
      "Платформа распределения токенов — compliant vesting, SAFTs и cap table on-chain.",
    long:
      "TokenSoft — инфраструктура для token launches: онбординг инвесторов, KYC, vesting schedules, treasury management. B2B для проектов, не retail swap.",
    tagline: "Launch infra для команд — vesting и compliance, не DEX.",
    highlight:
      "TokenSoft обслуживает crypto-стартапы, которым нужно регулируемое распределение токенов — не торговая площадка. Клиенты настраивают vesting пороги, investor portals и ограничения переводов. Используется серьёзными раундами рядом с Carta-class equity overlap. Пользователи взаимодействуют как инвесторы, получающие аллокацию — не активные трейдеры на свапах. Безопасность credentials investor portal критична.",
    facts: [
      "ICO-волна 2017–2021: TokenSoft среди compliance-first дистрибьюторов, когда SEC scrutiny вырос.",
      "Календари unlock на TokenSoft — CT следит за пороги для VC сброс-нарративов по portfolio-токенам.",
      "Не consumer DeFi — включение в каталог отражает infra жизненного цикла токена, не yield программа доходностиing.",
    ],
    tips: [
      "Инвесторам: проверяйте email-домен tokensoft.io — фишинговые порталы имитируют vesting claims.",
    ],
    warnings: [
      "Компрометация vesting portal = кража токенов — 2FA и hardware wallet для claims.",
    ],
  },
  "ton-diamonds": {
    short:
      "NFT-маркетплейс на TON — diamonds branding, Telegram-native collectibles.",
    long:
      "TON Diamonds — NFT-платформа на The Open Network с коллекционками в gem-тематике и интеграцией Telegram-сообщества. Кошелёк Tonkeeper; едет на hype cycles TON.",
    tagline: "NFT marketplace TON — коллекционки экосистемы Telegram.",
    highlight:
      "TON Diamonds marketplace листит NFT-коллекции на TON — низкие комиссии, быстрая финальность, mobile-first через Telegram. Объём привязан к retail-волнам TON (Notcoin era и др.). Вторичная ликвидность сильно варьируется по коллекциям. Стандартные NFT-риски: обманный сбросs, fake collections, неликвидные floors.",
    facts: [
      "Возрождение TON NFT 2024: маркетплейсы, включая TON Diamonds, видели всплески выпусков на онбординге Telegram-пользователей.",
      "Getgems конкурирует как лидер TON NFT — TON Diamonds ниша на отдельных коллекциях.",
      "Telegram bot scams подделывают ссылки TON Diamonds — только официальный ton.diamonds.",
    ],
    tips: [
      "Tonkeeper — проверяйте адрес NFT-коллекции в TON explorer перед покупкой.",
    ],
    warnings: [
      "Meme NFT floors могут обнулиться за ночь — размер позиции как entertainment budget.",
    ],
  },
  tonstarter: {
    short:
      "Launchpad на TON — IDO и token launches для Telegram/TON projects.",
    long:
      "Tonstarter — fundraising platform для проектов экосистемы TON. Стейк/участие в launches; нужен TON-кошелёк. Риск launchpad = разброс качества проектов.",
    tagline: "TON IDO pad — ранние токены, высокий failure rate — норма индустрии.",
    highlight:
      "Tonstarter связывает TON-проекты с retail-инвесторами через launchpad-механику — allocation lottery или FCFS, vesting terms по проекту. Успех привязан к росту экосистемы TON и преимуществу дистрибуции через Telegram. Историческая статистика launchpad жестока по индустрии — большинство токенов underwater. DYOR по команде, tokenomics и unlock schedule обязателен.",
    facts: [
      "Push TON Foundation 2024: launchpads вроде Tonstarter умножились — supply IDO превысил demand быстро.",
      "Доступ к аудитории Telegram — уникальная дистрибуция, также уникальная scam-аудитория при плохом проекте.",
      "Post-launch сбросы стандартны — участники launchpad научились продавать начальный рост или держать bags.",
    ],
    tips: [
      "Читайте unlock schedule перед IDO — VC пороги могут совпасть с вашим vesting на той же неделе.",
    ],
    warnings: [
      "Launchpad KYC data — проверяйте официальный сайт; fake Tonstarter presales часты.",
    ],
  },
  trisolaris: {
    short:
      "Ведущий DEX на Aurora (NEAR) — токен Tri, программы доходности и ликвидность экосистемы NEAR.",
    long:
      "Trisolaris — основной AMM на Aurora EVM layer, построенный на NEAR. UX как у ETH с NEAR backend; TRI incentives для LP.",
    tagline: "Aurora DEX NEAR — EVM tools, NEAR consensus underneath.",
    highlight:
      "Aurora приносит EVM в NEAR Protocol; Trisolaris захватывает DEX-ликвидность для активов Aurora и bridged ETH/токенов. TRI token программа доходностиs исторически двигали TVL. Экосистема NEAR меньше Ethereum L2 — ликвидность концентрируется на мажорных парах. Rainbow Bridge для активов; latency моста и NEAR account model путают новичков.",
    facts: [
      "Запуск Aurora 2021: Trisolaris среди первых DEX — момент NEAR DeFi до того, как L2 explosion украл нарратив.",
      "NEAR war с Ukrainian hacktivism не связан — но halts NEAR chain исторически били по uptime Aurora DEX.",
      "TRI emission программа доходностиs — наёмные LP, знакомый паттерн на каждом emerging chain DEX.",
    ],
    tips: [
      "MetaMask + Aurora RPC — NEAR native wallet отдельно, если переводите через мост с NEAR напрямую.",
    ],
    warnings: [
      "Меньшая экосистема — обманный токены листятся быстро; держитесь verified-пар.",
    ],
  },
  ubeswap: {
    short:
      "Ведущий DEX на Celo — mobile-first chain, пары cUSD/cEUR stable.",
    long:
      "Ubeswap — основной DEX на Celo для mobile и emerging market пользователей. Пулы CELO, cUSD, cEUR; интеграция с Valora wallet.",
    tagline: "DEX Celo — stablecoins и mobile money DeFi.",
    highlight:
      "Celo спроектирован для кошельков по номеру телефона и stable-активов; Ubeswap даёт swap и liquidity infrastructure. Governance токена UBE. Real-world adoption Celo (Mento stables) отделён от DeFi TVL. Комиссии ниже Ethereum; нишевое, но лояльное сообщество. MiniPay и Valora onboarding paths.",
    facts: [
      "Нарратив Celo «mobile DeFi» 2020–2022: Ubeswap — центральная swap-площадка до обсуждений pivot Celo в L2.",
      "Интеграция Mento stablecoin — cUSD pools глубоки относительно размера сети.",
      "Celo governance drama и смены фокуса — Ubeswap адаптировал пулы по мере эволюции экосистемы.",
    ],
    tips: [
      "Valora wallet удобен для Celo — MetaMask тоже работает с Celo RPC.",
    ],
    warnings: [
      "Риск depeg cUSD исторически низок, но следите за резервами Mento в стресс-событиях.",
    ],
  },
  unframed: {
    short:
      "NFT-маркетплейс на Starknet — native Cairo ecosystem art и collectibles.",
    long:
      "Unframed — Starknet-native NFT marketplace с минтом, торговлей и creator tools. Кошелёк Argent/Braavos; культурный хаб экосистемы STRK.",
    tagline: "NFT home Starknet — Cairo creators, L2 gas дешевле vs Ethereum.",
    highlight:
      "Unframed построил NFT-инфраструктуру для Starknet до созревания экосистемы — галереи, drops, вторичная торговля. Выигрывает от низкого gas в STRK-эру vs Ethereum mainnet mints. Объём следует волнам роста пользователей Starknet. Конкуренция от Ekubo-adjacent и multichain маркетплейсов. UX кошелька Starknet улучшается, но трение vs только MetaMask.",
    facts: [
      "Ранние дни Starknet NFT: Unframed среди немногих маркетплейсов — пустые полки до прихода STRK airdrop пользователей.",
      "STRK airdrop 2024: всплеск объёма выпусков, когда новые пользователи исследовали Starknet NFT scene.",
      "Эволюция стандартов Cairo NFT — ранние коллекции требовали апгрейдов, путаница покупателей с metadata.",
    ],
    tips: [
      "Минтите на Starknet, когда сеть спокойна — даже L2 congested во время hyped drops.",
    ],
    warnings: [
      "Проверяйте коллекцию по официальным ссылкам Unframed — Starknet phishing молод, но растёт.",
    ],
  },
  unifi: {
    short:
      "Cross-chain trading protocol — unified liquidity across Ethereum, BNB, Tron и др.",
    long:
      "Unifi Protocol — cross-chain AMM и trading с uTokens, связывающими ликвидность. Токен UNFI; B2B integrations с multichain проектами.",
    tagline: "Cross-chain AMM — uToken model связывает ликвидность пулов.",
    highlight:
      "Unifi создаёт uTokens, представляющие активы на разных сетях в unified pools — трейдеры обменивают с кроссчейн-settlement через validators/relayers протокола. Старая cross-chain DeFi архитектура до доминирования LayerZero. TVL скромен vs эра Stargate; всё ещё работает на Tron, BNB, Ethereum interfaces. Риски смарт-контрактов и validator set; governance UNFI.",
    facts: [
      "Unifi early cross-chain AMM 2020 — до LayerZero команды широко экспериментировали с uToken architecture.",
      "Tron и BNB integrations — Unifi нашёл ниши, где Ethereum-centric мосты слабы.",
      "Падение цены UNFI от ATH — коммодитизация cross-chain infra била меньшие протоколы.",
    ],
    tips: [
      "Проверяйте, какой chain interface используете — ликвидность не всегда равна cross-chain.",
    ],
    warnings: [
      "Legacy cross-chain протоколы — проверяйте текущий статус аудита перед крупными свапами.",
    ],
  },
  "unstoppable-domains": {
    short:
      "Web3 domains — .crypto, .nft, .x и др., адреса кошельков как human names.",
    long:
      "Unstoppable Domains — покупка NFT-доменов (.crypto, .polygon и др.) для crypto payments и identity. Без renewal fees на многих TLD; интеграция с 800+ apps.",
    tagline: "Купи раз — владей навсегда: домены для payments и identity.",
    highlight:
      "Unstoppable Domains продал миллионы доменов как NFT на Polygon — без recurring renewal в отличие от ENS. Домены принимают 300+ cryptocurrencies, Web3-сайты, верификация identity. Корпоративные партнёрства (Brave, Opera). Запуск .x TLD в 2024 расширил бренд. Domain flipping и trademark disputes знакомы. Не та же архитектура, что ENS на Ethereum L1.",
    facts: [
      "Domain gold rush 2021: Unstoppable и ENS оба на пике — нарратив «digital real estate» до краха.",
      "Выбор Polygon для минта: gas дёшев, но purists предпочитают ENS на Ethereum L1 для credibility.",
      "UD free claim promos — миллионы выпусков; вторичный рынок flooded, premium-имена всё ещё торгуются.",
    ],
    tips: [
      "Привязывайте домен только к primary wallet — приём payments раскрывает историю связанного адреса.",
    ],
    warnings: [
      "Trademark squatting legal risk — покупка nike.crypto ≠ владение брендом Nike.",
    ],
  },
  "vector-finance": {
    short:
      "Yield и leverage на Avalanche — Vector pools, связь с экосистемой Platypus.",
    long:
      "Vector Finance — Avalanche DeFi для boosted yields и leveraged strategies, исторически связан с экосистемой Platypus Finance. Токен VTOR; сложная механика пулов.",
    tagline: "Yield booster Avalanche — leverage на знакомых Platypus активах.",
    highlight:
      "Vector предлагал leveraged yield на stableswap LP tokens и активах экосистемы AVAX — усиливает доходность и риски. Platypus exploit 2023 повредил доверие к смежной экосистеме. VTOR emissions стимулировали LP. Только для опытных пользователей; ликвидация и depeg cascades возможны на stablecoin leverage plays.",
    facts: [
      "Platypus hack февраль 2023: Vector и ecosystem TVL рухнули за ночь — урок contagion для Avalanche DeFi.",
      "Stablecoin leverage loops на Vector — работали до depeg или exploit; risk managers содрогались.",
      "Post-hack recovery медленный — Vector напомнил: leveraged yield ≠ safe yield.",
    ],
    tips: [
      "При использовании leverage — мониторьте health factor intraday в волатильные дни AVAX.",
    ],
    warnings: [
      "Leveraged stable pools могут потерять peg correlation — max loss > vanilla LP.",
    ],
  },
  velocore: {
    short:
      "ve(3,3) DEX на Linea и zkSync — Velocore AMM с vote-escrow emissions.",
    long:
      "Velocore — solidly-style DEX на Linea и zkSync Era с veVC tokenomics. LP подкупают voters за emissions; multichain ve(3,3) experiment.",
    tagline: "ve(3,3) on L2s — формула Velodrome, экспортированная на восток.",
    highlight:
      "Velocore приносит vote-escrow DEX model на новые L2 — concentrated liquidity, gauge voting, bribe markets. Конкурирует с native ростом SyncSwap и Aerodrome на Base (другая сеть). Наёмный капитал следует за emissions; цена VC token волатильна. Forks Solidly требуют audit scrutiny на каждое deployment.",
    facts: [
      "Solidly fork wave 2022–2024: Velocore на Linea/zkSync — каждая сеть получила свою ve(3,3) главу.",
      "Bribe markets на Velocore — протоколы платили за gauge votes; DeFi politica mini drama еженедельно.",
      "Multichain ve token logistics путают voters — какой chain veVC важен для какого пула?",
    ],
    tips: [
      "Vote escrow lock duration — длиннее lock = больше power, нулевая ликвидность до unlock.",
    ],
    warnings: [
      "Dump emission token на пороги разблокировки — APR chart врёт без прогноза цены токена.",
    ],
  },
  velodrome: {
    short:
      "Доминирующий ve(3,3) DEX на Optimism — токен VELO, хаб ликвидности OP Mainnet.",
    long:
      "Velodrome Finance — основной слой ликвидности Optimism: свапы с низким slippage, gauge voting, bribe marketplace. Aerodrome — аналог на Base.",
    tagline: "Движок ликвидности Optimism — ve(3,3) сделан правильно на OP.",
    highlight:
      "Velodrome успешно скопировал модель Solidly на Optimism — глубокая ликвидность на нативных парах OP, блокировка veVELO за vote power, протоколы подкупают за emissions. Интеграции с Optimism governance и ecosystem grants. Апгрейд Slipstream concentrated liquidity. Цена VELO и график emission двигают LP economics. Aerodrome на Base делит фокус команды, но общее codebase lineage.",
    facts: [
      "Запуск Velodrome спас DEX-ликвидность Optimism post-Synthetix epoch — стал маршрутизатором по умолчанию для OP tokens.",
      "Optimism RetroPGF: Velodrome неоднократно получал гранты — нарратив public goods для DEX infra.",
      "Aerodrome на Base 2023 — команда доказала, что ve(3,3) playbook переносим на OP Stack chains.",
    ],
    tips: [
      "Проверяйте slipstream vs classic pools — лучшая capital efficiency на поддерживаемых парах.",
    ],
    warnings: [
      "Hype Bribe APY игнорирует риск цены VELO — расчёт net yield обязателен.",
    ],
  },
  "venus-protocol": {
    short:
      "Ведущий lending на BNB Chain — залог BNB, займы в stables, governance XVS.",
    long:
      "Venus Protocol — Compound/Aave на BSC: supply BNB и BEP-20, borrow stables, liquid staking tokens. Токен XVS; пережил несколько stress events.",
    tagline: "OG money market BSC — baseline lending BNB DeFi.",
    highlight:
      "Venus исторически доминирует в lending BNB Chain — глубокие рынки BNB и stablecoin. vBNB, vUSDT vaults знакомы BSC программа доходностиers. May 2021 LUNA/UST contagion ударил Venus жёстко — bad debt socialized, уроки oracle design. Восстановился и эволюционировал risk parameters. Близость к экосистеме Binance — marketing и scrutiny оба высоки.",
    facts: [
      "May 2021 Venus cascade: проблемы LUNA price oracle — $200M+ bad debt, trauma event BNB chain DeFi.",
      "BNB bull runs: Venus TVL следует за ценой BNB — reflexive loop для chain-native lending.",
      "История VAI stablecoin неровная — эпизоды depeg научили пользователей BSC: риск стейблкоина касается и algo stables.",
    ],
    tips: [
      "Мониторьте collateral factors после Venus governance votes — parameters меняются тихо.",
    ],
    warnings: [
      "Крупные движения цены BNB — liquidation cascades быстры на crowded BNB collateral.",
    ],
  },
  "wombat-exchange": {
    short:
      "Stableswap на BNB Chain — stables с низким slippage, токен WOM, multichain expansion.",
    long:
      "Wombat Exchange — Curve-style stableswap, оптимизирован для BEP-20 stables и LSTs. WOM emissions; расширился за BNB на Arbitrum.",
    tagline: "Stableswap specialist BNB — USDT/BUSD pools глубоки для size.",
    highlight:
      "Invariant Wombat для correlated assets — USDT/BUSD/DAI swaps с minimal slippage на BNB Chain. WOM token vote-escrow и LP incentives. Cross-chain Wombat deployments пытались multichain stable liquidity. Конкуренция Thenafi и Pancake stable pools. IL ниже на stables, но smart contract и depeg risk остаются.",
    facts: [
      "BNB stableswap wars: Wombat vs Pancake v3 stables — Wombat выиграл specialist reputation на size trades.",
      "WOM price cycles привязаны к emission APY — участники программ участвовали, сбросed, repeat.",
      "Arbitrum expansion — multichain WOM logistics добавили complexity для voters и LP.",
    ],
    tips: [
      "Stable pools всё ещё depeg — мониторьте историю BUSD/TUSD на BNB stress events.",
    ],
    warnings: [
      "Algorithmic stables в pools — один depeg drains correlated LP.",
    ],
  },
  woofi: {
    short:
      "DEX WOO Network — WOOFi swap с sPMM-ликвидностью, multichain-агрегатор.",
    long:
      "WooFi (WOOFi Swap) — DEX-продукт WOO Network с synthetic proactive market maker. Низкий slippage на мажорах; стейкинг WOO за долю комиссий.",
    tagline: "sPMM DEX — market maker math on-chain, multichain.",
    highlight:
      "WOOFi разворачивает sPMM (synthetic Proactive Market Maker) для конкурентных цен на BTC/ETH/stables между сетями. Часть broader WOO Network (CeFi MM + DeFi). Стейкинг WOO захватывает комиссии протокола. Cross-chain WOOFi через мосты WOO. Гибридная CeFi-DeFi зависимость — market makers WOO Network обеспечивают ликвидность; учитывайте trade-offs централизации.",
    facts: [
      "CeFi-корни WOO Network: ликвидность WOOFi частично от professional MMs — иная trust model vs pure AMM.",
      "Multichain rollout WOOFi — тот же бренд на BNB, Avalanche, Polygon; WOO emissions координируются.",
      "Bear market 2022: просадка WOO token ударила по нарративу staker yield — fee share реален, но цена токена волатильна.",
    ],
    tips: [
      "Крупные свапы на WOOFi — сравните с aggregators 1inch/OpenOcean на той же сети.",
    ],
    warnings: [
      "sPMM опирается на участников WOO Network — не fully permissionless liquidity.",
    ],
  },
  xexchange: {
    short:
      "Ведущий DEX на MultiversX (Elrond) — свапы EGLD, интеграция Maiar.",
    long:
      "xExchange — native DEX на MultiversX blockchain (formerly Elrond). EGLD pairs, liquidity токенов экосистемы; UX xPortal/Maiar wallet.",
    tagline: "DEX MultiversX — swap hub экосистемы EGLD.",
    highlight:
      "MultiversX — high-throughput chain с sharding; xExchange даёт AMM infrastructure для EGLD и ecosystem projects. Tight integration с xPortal wallet — mobile-first audience. MEX token historical role. Меньший global DeFi footprint, но dominant within MultiversX. Bridge assets через official MultiversX bridge перед swap.",
    facts: [
      "Rebrand Elrond → MultiversX 2022 — xExchange удержал пользователей через путаницу при смене названия.",
      "Maiar app integration — xExchange swaps embedded в mobile UX, редкость среди chains.",
      "EGLD price correlation с xExchange TVL — chain-native reflexivity standard.",
    ],
    tips: [
      "xPortal wallet для smoothest MultiversX DeFi — backup seed обязателен.",
    ],
    warnings: [
      "Меньшая сеть — token scams листятся на xExchange быстро; verify official channels проекта.",
    ],
  },
  "xy-finance": {
    short:
      "Cross-chain bridge aggregator — XY Finance маршрутизирует активы через 20+ сетей.",
    long:
      "XY Finance — one-stop cross-chain transfer и swap aggregator. Токен XY; конкурирует с Socket, Bungee, Rubic на route optimization.",
    tagline: "Bridge aggregator — лучший маршрут, много провайдеров под капотом.",
    highlight:
      "XY Finance агрегирует ликвидность нескольких мостов и DEX — пользователи получают quoted path для кроссчейн-переводов. Покрывает EVM и отдельные non-EVM сети. Слой агрегатора добавляет удобство и наценку на комиссию vs прямой мост. История эксплойтов partner bridge по отрасли — прозрачность маршрута XY показывает underlying protocols, которые стоит аудировать.",
    facts: [
      "Cross-chain aggregator boom 2022: XY среди SDK integrations в wallets — volume partly invisible на website.",
      "XY token incentives для routers и LP — reflexive TVL during token ростs.",
      "Сбой partner bridge 2023 по отрасли — пользователи XY научились читать underlying route hops.",
    ],
    tips: [
      "Раскрывайте детали маршрута в UI — для крупных переводов предпочитайте меньше hops.",
    ],
    warnings: [
      "Маршруты с longest ETA часто cheapest — компромисс время vs комиссия vs риск.",
    ],
  },
  zealy: {
    short:
      "Платформа квестов и роста сообщества — задачи, XP, leaderboard для Web3-проектов.",
    long:
      "Zealy (ex-Crew3) — платформа, где проекты проводят квесты (Twitter, Discord, on-chain tasks) за награды и рост сообщества. Не DeFi-протокол — growth infra.",
    tagline: "Quest board для crypto-маркетинга — сбор XP, возможно airdrop.",
    highlight:
      "Zealy хостит тысячи кампаний проектов: выполняйте social tasks, зарабатывайте XP, поднимайтесь в leaderboard за потенциальные token rewards. программы доходности с множественными аккаунтами повсюду — проекты иногда плохо фильтруют. Пользователи подключают кошелёк и socials — компромисс приватности. Полезно для открытия новых проектов; затраты времени высоки при неопределённой отдаче. Токен ZEALY — если применимо к governance платформы.",
    facts: [
      "Rebrand Crew3 → Zealy 2023 — войны quest-платформ с Galxe, Layer3 за marketing budgets проектов.",
      "Airdrop-участники программ доходности с multi-account Zealy — проекты ответили anti-множественные аккаунты on-chain task requirements.",
      "Медвежий рынок: участие в квестах оставалось высоким, качество token rewards падало — дебаты труд vs награда.",
    ],
    tips: [
      "Приоритет квестам от funded projects с подтверждённым токеном — XP сам по себе бесполезен.",
    ],
    warnings: [
      "Подключение кошелька к quest platforms — используйте burner для подозрительных новых проектов.",
    ],
  },
  zeta: {
    short:
      "Perp DEX на Solana — Zeta Markets, orderbook perps с низкой задержкой.",
    long:
      "Zeta Markets — биржа perpetual futures на Solana с orderbook interface. Токен ZEX; конкурирует с Drift, Jupiter perps за SOL-деривативы.",
    tagline: "Orderbook perps Solana — скорость сети = скорость исполнения.",
    highlight:
      "Zeta предлагает perp trading на Solana с cross-margin и конкурентными комиссиями на SOL, BTC, ETH perps. Orderbook model vs AMM perps. Интеграции с экосистемой кошельков Solana. Insurance fund и liquidation engine — стандартный perp stack. Доля объёма смещается с point campaigns и запуском Jupiter perps.",
    facts: [
      "Zeta — ранний Solana perp рядом с Mango (pre-hack) — выжившие поделили долю рынка после коллапса Mango.",
      "История outage Solana: perp-трейдеры не могли adjust margin — liveness сети = trading risk.",
      "Токен ZEX и incentives — программа доходности meta гнала всплески объёма между паузами organic traders.",
    ],
    tips: [
      "Держите extra SOL для liquidation guard в волатильные сессии.",
    ],
    warnings: [
      "Orderbook тонкий на альтах — slippage и funding swings усилены.",
    ],
  },
  zklend: {
    short:
      "Native lending на zkSync Era — borrow/lend с security model zkSync.",
    long:
      "zkLend — money market на zkSync Era: supply ETH/stables, borrow against collateral. Токен ZK; конкурирует с растущим DeFi stack Era.",
    tagline: "Lending zkSync Era — Aave-like на ZK L2.",
    highlight:
      "zkLend приносит isolated и cross-collateral lending на zkSync Era — знакомые DeFi primitives с экономией gas на L2. Points и ZK token aligned с incentive экосистемы zkSync. Oracle и liquidation parameters по каждому активу. TVL меньше Aave на mainnet, но native для Era программа доходностиers. Мост через official zkSync portal.",
    facts: [
      "zkSync Era DeFi 2023–2024: zkLend среди первых lending protocols — захватил ранние депозиты участников программ доходности.",
      "Запуск ZK token привязан к активности экосистемы — пользователи zkLend следили за критериями аллокации.",
      "Exploits L2 lending по отрасли редки, но oracle misconfigurations — аудиты zkLend публичны, всё равно DYOR.",
    ],
    tips: [
      "Используйте тот же кошелёк, что и для zkSync airdrop activity — иногда correlated с future rewards.",
    ],
    warnings: [
      "Новый protocol на новом L2 — увеличивайте депозиты постепенно, не рискуйте залогом безрассудно.",
    ],
  },
  zksync: {
    short:
      "ZK rollup L2 от Matter Labs — zkSync Era EVM, нативный account abstraction.",
    long:
      "zkSync — Ethereum L2 с zkSync Era (EVM) и Lite (payments). Токен ZK, масштабный airdrop 2024, экосистема DEX/lending/perps растёт.",
    tagline: "Matter Labs ZK L2 — Era mainnet, ZK cred, EVM compat.",
    highlight:
      "Mainnet zkSync Era принёс EVM dApps с ZK validity proofs — SyncSwap, iZUMi, zkLend и др. Нативный account abstraction и paymasters — UX со спонсорством gas. Распределение ZK token спорное, но масштабное. Мост через official portal.zksync.io. Конкуренция с Scroll, Linea, Base за liquidity. Hyperchains roadmap для ZK Stack app chains.",
    facts: [
      "Июнь 2024 ZK airdrop: одно из крупнейших L2 token events — eligibility drama длилась неделями в CT.",
      "OG-пользователи zkSync Lite годами ждали Era — терпение вознаградилось неравномерно.",
      "Дебаты Matter Labs vs community о decentralization sequencing — narrative battle продолжается.",
    ],
    tips: [
      "Только official bridge для первых средств — fake zkSync sites — вечная цель фишинга.",
    ],
    warnings: [
      "Не все «zkSync» tokens official — scam tokens airdrop'ят в кошельки свободно.",
    ],
  },
  zorascan: {
    short:
      "Мост и explorer Zora Network — L2 для создателей, культура NFT-выпусков.",
    long:
      "ZoraScan (bridge.zora.energy) — интерфейс моста и explorer для Zora Network L2. Подключите Ethereum к Zora для дешёвых NFT-выпусков и creator coins.",
    tagline: "Вход в Zora L2 — создатели переводят через мост ETH, минтят onchain.",
    highlight:
      "Zora эволюционировала от NFT-протокола к creator-focused L2 — ZoraScan/bridge онбордит ETH в Zora Network. Superbridge тоже поддерживает OP Stack маршрут Zora. Creator coins и комиссии за минт ниже, чем на Ethereum mainnet. Экосистема токена ZORA. Explorer отслеживает txs на Zora chain — полезен для отладки выпусков.",
    facts: [
      "Запуск Zora Network 2023: pitch creator economy — трафик моста взлетел на hyped mint weeks.",
      "Base и Zora обе гонятся за creator mindshare — разные сети, пересекающиеся художественные сообщества.",
      "Спам-минты Zora vs quality art — explorer показывает объём, кураторство остаётся человеческой задачей.",
    ],
    tips: [
      "Бриджите небольшой ETH сначала — подтвердите workflow минта перед крупным депозитом создателя.",
    ],
    warnings: [
      "Creator coins спекулятивны — минт ≠ одобрение инвестиции; rugs есть и на Zora.",
    ],
  },
};
