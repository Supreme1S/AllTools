import type { PlatformContent } from "@/lib/catalog/content/types";

export const DEFI_BATCH_2: Record<string, PlatformContent> = {
  dflow: {
    short:
      "Свапы на основе intent на Solana — маршрутизация ордеров без классического проскальзывания AMM на крупных объёмах.",
    long:
      "Dflow строит слой order flow для Solana: вместо слепого свапа через пул ты отправляешь intent, а маркет-мейкеры конкурируют за исполнение. Для крупных сделок с SOL и профессиональных трейдеров — альтернатива «тупому» маршруту через Jupiter.",
    tagline: "Intent-свап на Solana — когда AMM-маршрут уже не тот инструмент.",
    highlight:
      "Dflow позиционируется как инфраструктура для программной торговли на Solana: RFQ-механика, интеграции с экосистемой Jupiter и фокус на улучшении цены для крупных объёмов. Меньше публичного хайпа, чем у агрегаторов, но именно intent-модель набирает обороты после роста MEV и sandwich-атак на популярных парах. Для розницы на мелких свапах разница может быть минимальной — ценность раскрывается на объёмах.",
    facts: [
      "Intent-мета на Solana 2024–2025: после драмы с Jito трейдеры массово искали способы уйти от sandwich в публичном mempool — Dflow попал в эту волну как «не AMM, а аукцион».",
      "Интеграции с институциональным потоком: несколько маркет-мейкеров подключились после того, как доминирование Jupiter сделало прямую маршрутизацию через пулы менее выгодной для крупных объёмов.",
      "Охотники за airdrop гоняли объём через intent-роутеры сезон за сезоном — Dflow оказался в списках «потенциальных» у on-chain аналитиков без официального токена.",
    ],
    tips: [
      "На мелких суммах сравни котировку с jup.ag — intent иногда проигрывает по задержке и комиссиям.",
      "Для крупных свапов проверяй политику частичного исполнения и параметры дедлайна.",
    ],
    warnings: [
      "Intent ≠ гарантированная цена — маркет-мейкеры могут не заполнить ордер при экстремальной волатильности.",
    ],
  },
  eigenlayer: {
    short:
      "Restaking Ethereum — делегируй заблокированный в стейкинге ETH в AVS и получай дополнительный доход за риск slashing.",
    long:
      "EigenLayer перезапустил нарратив «заблокируй в стейкинге ещё раз»: LST и нативный ETH идут в actively validated services — оракулы, DA, мосты. Доходность выше, но риск slashing реальный и сложный для розницы.",
    tagline: "Restaking-слой Ethereum — доходность ×2, риск slashing тоже ×2.",
    highlight:
      "EigenLayer стал центром restaking-бума 2024: миллиарды TVL в LRT (Renzo, Ether.fi, Puffer) завязаны на его контракты. AVS marketplace — новый примитив: протоколы покупают экономическую безопасность у стейкеров вместо собственного набора валидаторов. Сложность для пользователя: вложенный риск — slashing на уровне beacon chain + AVS + иногда misbehavior оператора LRT.",
    facts: [
      "TVL EigenLayer перевалил за $15 млрд за месяцы после mainnet — restaking стал вторым по хайпу нарративом после LST, обогнав многие L2 по заблокированному капиталу.",
      "Запуск токена EIGEN в 2024: airdrop ранним restaker'ам и участникам программ доходности поинтов — классический цикл «собирай сейчас, сбрасывай на TGE» с волатильностью −60% от ATH за недели.",
      "Драма со slashing: сообщество месяцами спорило, достаточно ли прозрачны параметры риска AVS — один неправильно настроенный AVS мог бы стать «мини-FTX» для restaker'ов.",
    ],
    tips: [
      "Диверсифицируй между LRT-провайдерами — концентрация в одном операторе = концентрация риска slashing.",
      "Читай disclosure AVS перед делегированием — не все actively validated services одинаково зрелые.",
    ],
    warnings: [
      "Restaking slashing ещё не полностью проверен в продакшене — премия к доходности = компенсация за неизвестный tail risk.",
    ],
  },
  element: {
    short:
      "NFT-маркетплейс с фокусом на профессиональную торговлю — агрегированная ликвидность и инструменты для перекупщиков.",
    long:
      "Element.market — мультичейн NFT-маркетплейс с упором на торговые инструменты: отслеживание floor, массовый листинг, агрегированные ставки. Популярен на Ethereum и BNB Chain среди активных трейдеров, а не только коллекционеров.",
    tagline: "NFT-маркетплейс для трейдеров — не галерея, а терминал.",
    highlight:
      "Element конкурирует с Blur и OpenSea через UX для трейдеров: низкие комиссии на ряде сетей, агрегированная ликвидность с разных площадок, pro-дашборд. Не такие агрессивные токен-инсентивы, как у Blur, зато стабильнее для долгосрочного листинга. Поддержка нескольких сетей включает ETH, BSC, Polygon и др. — один интерфейс для кроссчейн NFT-арбитража.",
    facts: [
      "Войны Blur vs Element в 2023: когда Blur раздавал BLUR за bidding wars, Element удерживал долю на BSC и Polygon, где Blur слабее — региональная динамика маркетплейсов.",
      "Функция массового листинга спасла перекупщиков во время резких скачков цен meme NFT — 200 позиций за минуты вместо часов в legacy UI OpenSea.",
      "Element Pass и loyalty-кампании — попытка построить сообщество без токена уровня Blur; удержание трейдеров выше, чем у «casual gallery» пользователей.",
    ],
    tips: [
      "Сравни enforcement роялти по коллекции — на Element и OpenSea правила могут отличаться.",
      "Агрегированные ставки иногда дают лучший выход, чем продажа по floor — проверяй глубину bid.",
    ],
    warnings: [
      "Wash trading NFT на маркетплейсе не равен реальному спросу — метрики объёма обманывают.",
    ],
  },
  ens: {
    short:
      "Ethereum Name Service — домены .eth как on-chain идентичность, адресная книга и Web3-username.",
    long:
      "ENS превращает 0x... в человекочитаемое имя: alice.eth, субдомены, text records для Twitter, аватара, email. Стандартный identity-слой на Ethereum с миллионами зарегистрированных имён.",
    tagline: ".eth — когда адрес кошелька должен быть именем, а не hex.",
    highlight:
      "ENS — старейший и самый принятый naming-протокол на Ethereum: интеграции в кошельки, dApps, Lens, Farcaster. Домены — NFT (ERC-721), торгуются на вторичке. Premium-имена на аукционах, ежегодная плата за продление. Vitalik и многие core devs публично используют .eth — social proof для adoption. Субдомены позволяют DAO и брендам выдавать *.company.eth без кастодиального DNS.",
    facts: [
      "2022: airdrop $ENS держателям дал x100+ ранним регистрантам .eth — один из самых «честных» airdrop-нарративов, хотя участник с множественными аккаунтамиы тоже наелись.",
      "Драмы с продажей «vitalik.eth» не было, зато его публичный .eth стал дефолтным примером в каждом onboarding-туториале.",
      "Трёхбуквенные .eth на вторичке торгуются за десятки ETH — пузырь digital real estate 2021–2022 оставил legacy premium-инвентарь на годы.",
    ],
    tips: [
      "Продление не автоплатёж — пропустишь grace period, домен уйдёт на аукцион и его сniper'ят.",
      "Reverse resolution (имя → аватар в кошельках) требует отдельной on-chain записи.",
    ],
    warnings: [
      "Похожие homograph-домены (unicode-трюки) — фишинг через поддельный .eth в личке.",
    ],
  },
  ethena: {
    short:
      "Синтетический dollar USDe — delta-neutral доход через staked ETH и funding rates.",
    long:
      "Ethena выпускает USDe, обеспеченный delta-neutral позицией: long stETH + short perp hedge. Доход от funding и staking, но модель зависит от устойчивого положительного funding и кастодиальных компонентов.",
    tagline: "Синтетический dollar с доходностью — пока funding положительный и хедж держится.",
    highlight:
      "Ethena стала fastest-growing «стейблкоином» 2024: капитализация USDe миллиарды за месяцы благодаря агрессивному маркетингу доходности sUSDe и интеграциям CeFi/DeFi. Механика не классический overcollateralized stable — это синтетический dollar с basis trade. Points program и токен ENA добавили программа доходности-мету. Риски: отрицательный funding, кастодиальная (CEX) экспозиция для hedge leg, depeg при стрессе.",
    facts: [
      "USDe $5 млрд+ за месяцы — Ethena обогнала многие многолетние стейблкоины по темпу роста, вызвав дебаты «это stable или structured product».",
      "TGE ENA в 2024: airdrop держателям shard и LP Curve — классический сбор и сброс, но TVL остался sticky из-за жажды доходности.",
      "Паника из-за отрицательного funding зимой 2024: когда perp funding перевернулся, сообщество паниковало про устойчивость доходности — Ethena публично скорректировала параметры.",
    ],
    tips: [
      "Доходность sUSDe переменная — смотри on-chain rate, а не маркетинговый APY на лендинге.",
      "Разберись с кастодиальным hedge leg, прежде чем парковать все сбережения.",
    ],
    warnings: [
      "USDe ≠ USDC по профилю риска — синтетическая модель с CEX-хеджем и зависимостью от funding.",
    ],
  },
  "ether-fi": {
    short:
      "Liquid restaking ETH — eETH/weETH с поинтами, DeFi-композируемостью и экспозицией на EigenLayer.",
    long:
      "ether.fi — некастодиальный liquid restaking: размещаешь в стейкинге ETH, получаешь eETH, используешь в DeFi, копишь EigenLayer + ether.fi points. Один из топовых LRT наряду с Renzo и Puffer.",
    tagline: "Liquid restaking ETH — размещай в стейкинге, оборачивай, собирай баллы, повторяй.",
    highlight:
      "ether.fi позиционируется как «нативный liquid restaking»: некастодиальный набор валидаторов, eETH/weETH для кроссчейн (Arbitrum и др.), интеграции с Pendle, Morpho, Aave. Токен ETHFI после TGE — governance и fee share. Конкуренция LRT жёсткая: дифференциация через UX, децентрализацию node operator'ов и DeFi-интеграции. Риск slashing наследуется от стека EigenLayer.",
    facts: [
      "Points season гонял миллиарды через ether.fi — Pendle YT-eETH стал метой для leveraged points exposure без удержания полного ETH.",
      "TGE ETHFI в 2024: драма с FDV и давление немедленных unlock — типичный цикл LRT-токена, но удержание TVL лучше, чем у многих программа доходности-only протоколов.",
      "Нарратив «первый нативный LRT на нескольких L2» — мосты weETH стали стандартным залогом в новых lending markets за недели.",
    ],
    tips: [
      "weETH vs eETH — учитывай риск моста и принятие в DeFi по каждой сети.",
      "Leveraged points через Pendle = усиленная экспозиция на slashing, не бесплатный обед.",
    ],
    warnings: [
      "Тройной стек риска: ETH stake + EigenLayer AVS + smart contract LRT — читай disclosures.",
    ],
  },
  ethereal: {
    short:
      "Perp DEX на новой L1/L2 — leverage-трейдинг с ончейн-расчётом и метой поинтов.",
    long:
      "Ethereal (app.ethereal.trade) — децентрализованные перпетуалы с фокусом на свежую L1/L2-инфраструктуру. Типичный сценарий: глубокие стимулы ликвидности, поинты, ажиотаж вокруг миграции testnet → mainnet.",
    tagline: "Perp DEX нового цикла — поинты сейчас, токен потом.",
    highlight:
      "Ethereal входит в волну «perp DEX нового поколения» после успеха Hyperliquid: ончейн order book или гибридная модель, реферальные уровни, сезонные кампании. Для трейдеров — альтернатива CEX perp с некастодиальным хранением, но ликвидность на молодом perp DEX часто тонкая до программ стимулов. Проверяй источник oracle, механику funding и insurance fund перед крупными объёмами.",
    facts: [
      "Эра post-Hyperliquid: десятки perp DEX-клонов запустили поинты в 2024–2025 — Ethereal в когорте «trade for allocation».",
      "Войны leaderboard на testnet: топ-трейдеры иногда оказывались фиктивный объём ботами — команды ужесточали anti-множественные аккаунты перед snapshot.",
      "Интеграция с нарративом emerging L1 — perp volume как KPI для TVL-маркетинга chain перед инвесторами.",
    ],
    tips: [
      "Начинай с малого — проскальзывание на молодом perp book может быть жёстким на альтах.",
      "Отслеживай историю funding rate перед overnight-позициями.",
    ],
    warnings: [
      "Поинты не гарантируют airdrop — правила меняются, фильтры множественных аккаунтов жёсткие.",
    ],
  },
  fibrous: {
    short:
      "DEX-агрегатор на Starknet — лучший маршрут через Cairo-native ликвидность.",
    long:
      "Fibrous Finance агрегирует Starknet DEX (JediSwap, Ekubo и др.) в один swap-интерфейс. Обязательный инструмент для Starknet DeFi после возрождения экосистемы post-STRK эйрдропа.",
    tagline: "Starknet swap aggregator — один клик через все Cairo pools.",
    highlight:
      "Fibrous решает проблему фрагментации Starknet AMM: split routes, оптимизация gas на Cairo VM, чистый UX для пар STRK/ETH/USDC. Всплеск adoption Starknet после airdrop Provisions вернул пользователей — Fibrous стал дефолтным swap-слоем. Меньше chain coverage, чем у LI.FI, зато глубокая Starknet-native маршрутизация.",
    facts: [
      "Airdrop STRK в феврале 2024: объём Fibrous x10 за неделю — агрегаторы первыми съедают рост экосистемы.",
      "Starknet DeFi summer: конкуренция Fibrous vs AVNU за «default swap» — UX и fee rebates решали, а не TVL alone.",
      "Миграция на Cairo 1.0 сломала половину экосистемы — Fibrous быстрее переподключил routers, конкуренты теряли пользователей неделями.",
    ],
    tips: [
      "Сравни котировку Fibrous с прямым Ekubo/JediSwap на крупных сделках.",
      "Учитывай скачки gas Starknet при перегрузке сети.",
    ],
    warnings: [
      "Starknet всё ещё молодой L2 — риск моста и downtime sequencer отдельно от Fibrous.",
    ],
  },
  flex: {
    short:
      "Social trading и flex-культура on-chain — показ PnL, копирование сделок, геймифицированный DeFi.",
    long:
      "Flex (flexing.gg) — платформа на стыке social и trading: публичные портфели, flex cards, community challenges. Для активных трейдеров, которые торгуют не только ради PnL, но и ради скриншота.",
    tagline: "Торгуй, flex'ь, повторяй — social-слой для on-chain PnL.",
    highlight:
      "Flex ловит meme-культуру crypto Twitter: shareable PnL cards, leaderboards, сезонные соревнования, привязанные к конкретным сетям или протоколам. Не замена терминалу, а distribution layer — virality > depth. Интеграции с кошельками для read-only синхронизации портфеля. Осторожным пользователям: публичный flex = публичная мишень.",
    facts: [
      "Flex cards с PnL стали viral-форматом после bull 2021 — Flex продуктизировал то, что раньше делали в Photoshop и Collab.Land.",
      "Параллельная индустрия fake PnL скриншотов — Flex добавил on-chain verification, убив половину «симулирующий traders».",
      "Сезонные flex-соревнования во время резких скачков цен meme coin — победители иногда оказывались insider wallets, последовала драма.",
    ],
    tips: [
      "Для рейтинга достаточно read-only подключения кошелька — не выдавай права на торговлю ради места в таблице лидеров.",
    ],
    warnings: [
      "Публичный PnL привлекает мошенников и copy-trade ботов — конфиденциальность важен.",
    ],
  },
  flowx: {
    short:
      "Нативный DEX на Sui — AMM, CLMM и центр ликвидности экосистемы Move-chain DeFi.",
    long:
      "FlowX Finance — ведущий DEX-агрегатор и AMM на Sui: свапы, пулы ликвидности, выращивание доходности. Экосистема Sui росла на gaming и DeFi параллельно — FlowX стал главной торговой площадкой.",
    tagline: "Sui DeFi hub — свапы и LP там, где живёт Move-chain.",
    highlight:
      "FlowX покрывает нативные пары токенов Sui, stable-пулы и маршрутизацию через внутренние пулы. Parallel execution Sui даёт низкую задержку свапов — FlowX в маркетинге подчёркивает скорость против EVM L2. Токен FLOWX и программы выращивания доходности — типичный playbook L1 DEX. Мост с CEX/EVM через Wormhole/Native — отдельный слой риска.",
    facts: [
      "Запуск Sui mainnet в 2023: FlowX среди первых DEX — early LP на SUI/USDC давал wild APR месяцами.",
      "Нарратив интеграции DeepBook — FlowX маршрутизирует к institutional order book layer на Sui.",
      "После драмы FTX/Sui foundation (не связанной напрямую) Sui DeFi продолжал расти — TVL FlowX следовал за grants экосистемы и потоками gaming-токенов.",
    ],
    tips: [
      "Проверяй impermanent loss на волатильных Sui gaming tokens перед крупным LP.",
      "Используй официальный app.flowx.finance — phishing-клоны часты на новых L1.",
    ],
    warnings: [
      "DEX на новом L1 — smart contract audits и глубина ликвидности различаются по парам.",
    ],
  },
  fragment: {
    short:
      "NFT-маркетплейс Telegram/TON — анонимные номера, username'ы и gifts на блокчейне.",
    long:
      "Fragment.com — официальная аукционная площадка экосистемы TON от Telegram: премиальные username'ы, анонимные номера, коллекционные gifts. Мост между UX Telegram и ончейн-владением.",
    tagline: "Коллекционные активы Telegram на TON — username'ы как торгуемые активы.",
    highlight:
      "Fragment сделал цифровые активы Telegram ликвидными: аукционы @username за тысячи TON, маркетплейс gifts после запуска Telegram Gifts. Интеграция TON-кошелька, без KYC для crypto-native аудитории, массовый охват через Telegram. Вторичная торговля и price discovery для активов, которых раньше не существовало как торгуемых. Экстремальная волатильность на хайповых дропах.",
    facts: [
      "2022: аукцион Telegram username'ов на Fragment — @bank продан за 900k+ TON, mainstream media писали про «username as NFT».",
      "Telegram Gifts 2024–2025: вторичный рынок Fragment взорвался — floor gifts делали 10x во время праздничных дропов.",
      "Синергия с TON Foundation: успех Fragment вытащил TON из нарратива «мёртвая chain» в top-10 по метрике активных кошельков.",
    ],
    tips: [
      "Проверяй предмет ончейн перед P2P-сделкой — существуют фишинговые копии UI Fragment.",
      "Floor gifts волатилен — ликвидность тонкая вне топовых tier'ов.",
    ],
    warnings: [
      "Изменения политики Telegram могут повлиять на utility актива — ончейн-владение ≠ гарантированная функция платформы навсегда.",
    ],
  },
  "friend-tech": {
    short:
      "Social keys на Base — покупай доли создателей контента, спекуляция на экономике внимания.",
    long:
      "Friend.tech — покупка и продажа «keys» креаторов на Base: цена по bonding curve, держатели получают доступ в приватный чат. Вирусное лето 2023, затем обвал активности и драма с эйрдропом.",
    tagline: "Токенизированное внимание — покупай keys, продавай хайп, выходи до обвала кривой.",
    highlight:
      "Friend.tech взорвался как crypto social experiment: Base L2, аудитория рядом с Farcaster, поинты под будущий эйрдроп. Механика bonding curve: ранние покупатели зарабатывают на позднем FOMO. После хайпа TVL и объём рухнули — поучительная история про неустойчивый social DeFi. Урок: токенизация внимания работает краткосрочно, удержание аудитории — сложная задача.",
    facts: [
      "Август 2023: комиссии Friend.tech днями превышали комиссии Ethereum L1 — вирусный момент до диверсификации экосистемы Base.",
      "Эйрдроп 2024 ($FRIEND): участники программ доходности, державшие keys месяцами, получили минимальную аллокацию — backlash «пользуйся продуктом, а не собираешь баллы».",
      "Sim-swapping атаки на известных держателей keys — social DeFi создал новую поверхность атаки помимо drain кошелька.",
    ],
    tips: [
      "Exit liquidity на bonding curve тонкая для мелких аккаунтов — жёсткое проскальзывание при продаже keys.",
      "Относись к keys как к спекуляции, а не инвестиции в карьеру креатора.",
    ],
    warnings: [
      "Активность платформы рухнула с пика — вторичные рынки keys неликвидны у большинства креаторов.",
    ],
  },
  gains: {
    short:
      "gTrade на Arbitrum — синтетические perp с leverage до 150x, forex/crypto/commodities ончейн.",
    long:
      "Gains Network (gains.trade) — децентрализованная торговля с leverage через gTrade: синтетическая экспозиция, ликвидность GLP/GNS, multi-asset perp без классического order book CEX.",
    tagline: "Ончейн perp с синтетической ликвидностью — gTrade, не CEX.",
    highlight:
      "Gains — пионер синтетической perp-модели на Arbitrum/Polygon: трейдеры против пула GLP, динамические комиссии, широкий список активов включая forex-пары, редкие на DEX. Стейкинг токена GNS приносит protocol fees. Пережил несколько медвежьих рынков — старше волны хайповых perp DEX. Риски: контрагентская экспозиция GLP, история oracle manipulation на low-cap синтетических активах.",
    facts: [
      "Bear market 2022: объём gTrade держался, пока NFT умер — product-market fit perp DEX доказан рано.",
      "Токен GNS −90% от ATH, потом rebuild экосистемы — классическая survival story small-cap DeFi.",
      "Forex synthetic pairs на gTrade во время gaps TradFi hours вызывали oracle spike incidents — трейдеры жёстко учили weekend risk.",
    ],
    tips: [
      "Проверяй OI limits и spread на экзотических парах перед крупными объёмами.",
      "Доходность GLP идёт от потерь трейдеров — понимай, что ты liquidity provider для активных трейдеров.",
    ],
    warnings: [
      "Высокий leverage + synthetic oracles = liquidation cascades на тонких парах.",
    ],
  },
  galxe: {
    short:
      "Quest-платформа №1 — OAT, credentials, campaign-слой для airdrop программа доходностиing и onboarding.",
    long:
      "Galxe (ex Galaxy) — Web3 growth platform: выполняй задания, mint OAT, строй on-chain резюме. Дефолтная инфра для маркетинга проектов и поля боя участник с множественными аккаунтамиов.",
    tagline: "Quest-слой Web3 — где каждый airdrop требует 47 social tasks.",
    highlight:
      "Galxe агрегирует кампании по сетям: Twitter, Discord, on-chain tx, quiz — всё отслеживается для eligibility наград. Passport score пытается сопротивляться множественные аккаунты. Проекты платят за distribution; участники программ доходности платят временем и gas. Интеграции с 100+ сетями. Критика: checkbox-мета снижает реальное engagement, bot armies эволюционируют быстрее фильтров.",
    facts: [
      "Galxe OAT стали резюме для airdrop hunters — кошельки с 500+ OAT прозвали «Galxe warriors».",
      "Запуск токена G и Galxe Passport: controversy оценка множественных аккаунтов — легитимных пользователей флагали, боты адаптировались.",
      "Кампании Arbitrum, Optimism, zkSync дали миллионы tx — Galxe косвенно формировал L2 activity metrics для инвесторов.",
    ],
    tips: [
      "Отдельный программа доходностиing wallet от main — подписи кампаний добавляют attack surface.",
      "Passport score не идеален — не переплачивай gas на low-value кампаниях.",
    ],
    warnings: [
      "Phishing-сайты имитируют ссылки Galxe-кампаний — проверяй домен galxe.com каждый раз.",
    ],
  },
  gamma: {
    short:
      "Автоматическое управление LP для Uniswap v3 — vaults, rebalancing, liquidity as a service.",
    long:
      "Gamma Strategies (app.gamma.xyz) — managed liquidity на Uniswap v3/v4 и Pancake: депозит, vault перебалансирует range, зарабатываешь fees минус strategy risk.",
    tagline: "Uniswap v3 LP без ручного babysitting range — vault делает rebalance.",
    highlight:
      "Gamma решает сложность concentrated liquidity: пассивные LP кладут USDC/ETH в vault, strategy управляет tick ranges. Используется протоколами и DAO для treasury management. Fee share депозиторам, токен GAMMA для governance. IL всё ещё есть — automation ≠ protection. Популярен на парах Polygon, Arbitrum, Base с глубокой ликвидностью Uniswap.",
    facts: [
      "Uniswap v3 IL horror stories 2021 — Gamma vaults маркетились как «set and forget» во volatile ranges, некоторые vaults проигрывали простому hold.",
      "Partnership wave с новыми L2 launches: каждая сеть хотела «professional LP» story для DEX TVL.",
      "MEV на rebalance txs — vault strategies иногда теряли value searchers, публичные audits flagged и fixed.",
    ],
    tips: [
      "Сравни vault APY с simple hold — fees должны перекрывать IL на trending pairs.",
      "Проверяй ширину range vault strategy — узкий range = выше fees, выше IL risk.",
    ],
    warnings: [
      "Smart contract risk на vault layer поверх Uniswap — двойная attack surface.",
    ],
  },
  "gaz-zip": {
    short:
      "Кроссчейн-доставка gas — отправь нативный gas-токен на другую сеть одной транзакцией с исходной цепи.",
    long:
      "Gas.zip (slug gaz-zip, домен gas.zip) — мост специально для нативного gas: нужен ETH на Arbitrum, а есть только USDC на Base? Gas.zip доставит.",
    tagline: "Gas там, где нужен — без танцев с выводом с CEX.",
    highlight:
      "Gas.zip снимает friction онбординга: новые пользователи chain застревают без нативного токена для первой tx. Быстрая доставка gas на major L2 и L1, интеграции в кошельки и onboarding flows. Малые суммы, премия за удобство. Не универсальный мост — узкий продукт. Конкуренты: Bungee, gas-модули Jumper.",
    facts: [
      "Война UX онбординга L2 в 2024: «нет gas на новой chain» — причина №1 отвала — Gas.zip ехал на каждой волне запусков новых L2.",
      "Охотники за эйрдропами использовали Gas.zip для пополнения кошельков с множественными аккаунтами на 20 chain — всплеск объёма во время сезонов zkSync/Linea.",
      "Ошибочная отправка gas на wrong chain — кошмар поддержки; UI улучшили после обратной связи сообщества.",
    ],
    tips: [
      "Покупай чуть больше gas, чем minimum — одна failed tx снова оставит тебя без gas.",
      "Проверяй формат адреса destination chain — ошибки EVM vs non-EVM необратимы.",
    ],
    warnings: [
      "Малые bridge-контракты — проверяй официальные ссылки gas.zip, не Discord DM.",
    ],
  },
  getgems: {
    short:
      "Ведущий NFT-маркетплейс TON — gifts, коллекции, цифровые активы в экосистеме Telegram.",
    long:
      "Getgems.io — основная TON NFT-площадка наряду с Fragment: вторичная торговля, лаунчи, обёртки gifts. Розница TON заходит в NFT через Telegram — Getgems ловит этот поток.",
    tagline: "NFT-маркетплейс TON — аудитория Telegram, сделки ончейн.",
    highlight:
      "Getgems выигрывает от взрыва TON: удобный интерфейс для не-crypto пользователей, подключение TON-кошелька, глубокая интеграция с экономикой коллекционных Telegram-активов. Коллекции от партнёров TON Foundation, независимых художников, деривативов gifts. Комиссии конкурентны с EVM-маркетплейсами. Ликвидность сконцентрирована в топ-коллекциях — long tail неликвиден.",
    facts: [
      "NOT token и TON gaming NFT в 2024 — объём Getgems коррелировал с циклами хайпа Telegram mini-app.",
      "Разделение Getgems vs Fragment: Fragment — официальные аукционы Telegram, Getgems — более широкий маркетплейс — арбитраж между площадками.",
      "Фишинг «Getgems support» пикнул во время TON bull — поддельные ссылки на mint сливали кошельки еженедельно.",
    ],
    tips: [
      "Подтверждай verified badge коллекции перед покупкой — неверифицированные мошеннические схемы часты.",
      "Gas TON дешёвый, но backup кошелька критичен — сессия Telegram ≠ безопасность seed.",
    ],
    warnings: [
      "NFT floor на TON может −80% за ночь после хайпа — ликвидность исчезает быстро.",
    ],
  },
  gitcoin: {
    short:
      "Финансирование public goods — гранты, quadratic funding, зарплаты OSS crypto-инфраструктуры.",
    long:
      "Gitcoin — платформа финансирования open-source Web3: Gitcoin Grants, QF-раунды, протокол Allo. Здесь Ethereum tooling получает community funding.",
    tagline: "Финансируй то, на чём работает Ethereum — гранты, QF, public goods.",
    highlight:
      "Gitcoin Grants стал ритуалом каждого раунда: жертвовать проектам, match через quadratic funding, зарабатывать governance GTC. Passport для защита от множественных аккаунтов в QF. Поворот к Allo Protocol и Grants Stack — инфра для любого сообщества, запускающего funding rounds. Меньше хайпа post-2022, но бренд public goods по-прежнему core. Разработчики и исследователи зависят от циклов грантов.",
    facts: [
      "Рекорды раундов Gitcoin Grants: миллионы в match, периодические атаки множественных аккаунтов опустошали matching pools — Passport родился из этой боли.",
      "Запуск токена GTC в 2021: governance для grants platform — цена следовала макро, споры об utility продолжаются.",
      "Публичная поддержка Vitalik для QF сделала Gitcoin синонимом «Ethereum public goods» — политический капитал, который ни один конкурент не повторил.",
    ],
    tips: [
      "Собери Gitcoin Passport перед QF-раундом — отметка множественных аккаунтов убивает matching multiplier.",
      "Малые пожертвования многим проектам лучше одного крупного, если гоняешься за эффективностью match.",
    ],
    warnings: [
      "Одобрение гранта ≠ endorsement — due diligence проектов на тебе.",
    ],
  },
  "gluex-protocol": {
    short:
      "DEX aggregation middleware — best execution routing для кошельков и интеграторов.",
    long:
      "GlueX Protocol — слой агрегации ликвидности: smart order routing по DEX, совместимость с intent, B2B-интеграции для кошельков и dApps в поисках оптимального свапа.",
    tagline: "Swap routing infra — GlueX за UI, которым ты уже пользуешься.",
    highlight:
      "GlueX работает как инфраструктурная игра, менее заметная для розницы: API для лучшей цены по фрагментированной ликвидности, MEV-aware маршрутизация, мультичейн-экспансия. Конкуренты: 0x, 1inch API, Kyber. Ценность для интеграторов — снижение стоимости in-app swap. Токен и программы поинтов, если активны — проверяй актуальную документацию.",
    facts: [
      "Войны агрегаторов невидимы пользователям — GlueX выигрывал интеграции улучшением на basis points на институциональных объёмах.",
      "История эксплойтов router в индустрии: любой aggregation layer — мёд для хакеров — аудиты GlueX публичны, крупных инцидентов на момент написания не было.",
      "Сдвиг к intent и RFQ в 2025 — GlueX сменил messaging на «execution quality», а не «cheapest gas».",
    ],
    tips: [
      "Если свап через кошелёк идёт через GlueX, периодически сравни с прямой котировкой 1inch.",
    ],
    warnings: [
      "API-интеграторы доверяют router-контрактам — проверяй scope approve.",
    ],
  },
  guild: {
    short:
      "Web3 access control — token/NFT gating для Discord, Telegram, ончейн-ролей без ручных проверок.",
    long:
      "Guild.xyz — автоматизированное членство: держи NFT, выполни quest, получи роль. Стандартный инструмент для DAO, NFT-проектов, игровых сообществ с тысячами участников.",
    tagline: "Token gating на автомате — Discord-роли из ончейн-доказательства.",
    highlight:
      "Guild связывает кошельки с community-платформами: требования как код (min balance, конкретный NFT, credential Galxe). Заменяет ручную модерацию «пришли скриншот». Щедрый free tier, платные advanced-функции. Интеграции Galxe, Snapshot, Twitter. Ограничение: смена кошелька обходит слабые требования; серьёзный gating требует комбинации проверок.",
    facts: [
      "Каждый NFT drop 2021–2023 использовал Guild или Collab.Land — Guild победил на UX с несколькими требованиями.",
      "Продукт Guild Pin — ончейн reputation badge, попытка сделать членство переносимым между сообществами.",
      "Bot программа доходностиs с minimum NFT для входа в alpha-группы — проекты поняли: gating ≠ защита от множественных аккаунтов.",
    ],
    tips: [
      "Комбинируй NFT + activity requirements для ценных alpha-групп.",
      "Периодически пересматривай подключённые Discord permissions — отзывай устаревшие интеграции.",
    ],
    warnings: [
      "Компрометация Guild OAuth затронула многие сообщества — используй роли с минимальными правами.",
    ],
  },
  "harmony-explorer": {
    short:
      "Block explorer Harmony ONE — транзакции, валидаторы, шарды, аудит bridge-активности.",
    long:
      "Harmony Explorer (explorer.harmony.one) — официальный chain explorer для Harmony: адреса, стейкинг, кроссчейн-транзакции. Незаменим после Horizon bridge hack для отслеживания средств.",
    tagline: "Вся правда Harmony в блокчейне — обозреватель-необходимость после драмы с мостом.",
    highlight:
      "Стандартный функционал explorer для shard chain Harmony: поиск блоков, статистика валидаторов, переводы токенов. Экосистема Harmony сжалась после bridge hack 2022 ($100M+) и рыночного спада — explorer остаётся инструментом для оставшихся держателей, аудита стейков и legacy DeFi-позиций. Исторический инструмент для анализа инцидентов.",
    facts: [
      "Horizon bridge hack июнь 2022 — Harmony Explorer использовали для отслеживания потоков атакующего в реальном времени, сообщество смотрело, как средства уходят в Tornado.",
      "ONE token −95% от ATH — трафик explorer упал с экосистемой, но данные стейкинга всё ещё live.",
      "Shard-архитектура Harmony когда-то продавалась как ETH killer — вкладки шардов в explorer стали археологией для исследователей.",
    ],
    tips: [
      "Верифицируй адреса контрактов в explorer перед взаимодействием с legacy Harmony dApps.",
    ],
    warnings: [
      "Экосистема Harmony с низкой ликвидностью — вывод оставшихся активов может дать высокое проскальзывание.",
    ],
  },
  hashflow: {
    short:
      "RFQ DEX с zero slippage quotes — маркет-мейкеры конкурируют, HFT-style ончейн-исполнение.",
    long:
      "Hashflow — request-for-quote DEX: takers получают firm quotes от профессиональных маркет-мейкеров, без AMM front-running. Кроссчейн через Hashflow bridge. Governance токеном HFT.",
    tagline: "RFQ swap — firm quote, без sandwich по пути.",
    highlight:
      "Hashflow отличался от AMM-агрегаторов: RFQ-модель означает, что показанная цена — это цена исполнения (в пределах срока котировки). Популярен для объёмов на ETH, BNB, расширения на Solana. Маркет-мейкеры размещают в стейкинге репутацию и collateral. Bridge-продукт для кроссчейн RFQ. Компромисс: котировки истекают, менее подходит для illiquid long-tail токенов без покрытия MM.",
    facts: [
      "2022: объём Hashflow взлетел во время CeFi contagion — pro-трейдеры ушли в RFQ ончейн, когда counterparty risk CEX пугал после Alameda.",
      "Запуск токена HFT — стимулы маркет-мейкеров привязаны к объёму, классическая рефлексивная токеномика.",
      "Экспансия на Solana конкурировала с RFQ-модулями Jupiter — ниша для институциональных объёмов vs retail path.",
    ],
    tips: [
      "Таймер котировки короткий — подписывай быстро или обновляй.",
      "На крупных сделках проверяй reputation score MM в UI, если доступен.",
    ],
    warnings: [
      "Пробелы RFQ-покрытия на long-tail токенах — fallback на AMM может быть хуже.",
    ],
  },
  helmet: {
    short:
      "DeFi options и insurance на BSC — хедж LP, защита vault, бинарные ставки на события chain.",
    long:
      "Helmet.insure — BSC-native derivatives playground: option tokens, insurance covers, structured products для DeFi natives эпохи Binance Smart Chain.",
    tagline: "BSC DeFi hedging — options, когда Pancake LP болит.",
    highlight:
      "Helmet появился в буме BSC DeFi: options на BNB, BTC, alts; insurance на hack events и price moves. Нишевый продукт для продвинутых BSC-пользователей. Активность следовала циклу BSC — пик 2021, тише после. Исторический интерес для понимания раннего retail UX on-chain options вне Ethereum.",
    facts: [
      "BSC DeFi summer 2021: Helmet options рядом с Pancake — активные трейдеры страховали программа доходности rewards бинарными options, часто теряли с обеих сторон.",
      "Oracle manipulation на BSC options меньше, чем на EVM mainnet, но инциденты учили уроку о тонкой ликвидности strikes.",
      "Цикл токена HELmet типичен для BSC программа доходности — launch, рост, −90%, лояльная ниша осталась.",
    ],
    tips: [
      "Options на BSC — внимательно проверяй expiry и settlement token.",
    ],
    warnings: [
      "BSC DeFi эпохи с низкой планкой аудита — legacy контракты могут быть без поддержки.",
    ],
  },
  "here-finance": {
    short:
      "Hera Finance — DEX-агрегатор на Solana с split routing и минимизацией price impact.",
    long:
      "Hera Finance (slug here-finance, домен hera.finance) — Solana swap aggregator, конкурент Jupiter: multi-path splits, быстрая маршрутизация, API для интеграторов.",
    tagline: "Альтернативный Solana aggregator — маршруты, когда Jupiter не единственный выбор.",
    highlight:
      "Hera позиционируется как performance aggregator на Solana: split trades по пулам Orca, Raydium, Meteora для оптимального output. Чище UI на некоторых парах, реферальная программа для интеграторов. Доминирование Jupiter огромно, но Hera ловит пользователей, ищущих альтернативные маршруты или чуть лучшие котировки на конкретных парах. Проверяй домен hera.finance — slug here-finance legacy naming.",
    facts: [
      "Post-Jupiter эйрдrop 2024: каждый Solana aggregator охотился за нарративом «альтернатива Jupiter» — объём Hera взлетел на FOMO.",
      "Войны маршрутов aggregator во время лаунчей memecoin — split routing спасал от проскальзывания, когда один пул опустошался.",
      "Кошельки тихо добавляли Hera как secondary router — пользователи часто не знали, какой движок исполнил сделку.",
    ],
    tips: [
      "Сравни Hera vs Jupiter на одной паре для сделок >$1k.",
      "Slippage settings всё ещё важны — aggregator не устраняет волатильность memecoin.",
    ],
    warnings: [
      "Новые aggregator approve — периодически отзывай устаревшие token allowances.",
    ],
  },
  hey: {
    short:
      "Децентрализованный social на Lens — посты, collects, Web3-native лента без централизованного алго.",
    long:
      "Hey.xyz — frontend и social app на Lens Protocol: профили как NFT, подписки ончейн, креаторы монетизируют через collects и tips.",
    tagline: "Lens social client — твоя лента, твои ключи, твой граф.",
    highlight:
      "Hey — флагманский клиентский опыт Lens: децентрализованный social graph переносим между приложениями, crypto-native монетизация (paid follows, collects). Растёт с Lens v2 и нарративом миграции на Optimism. Меньше Farcaster сегодня, но сильная идеологическая Web3-база. Модерация контента децентрализована — спам и мошеннические схемы пользователи фильтруют через block lists.",
    facts: [
      "Запуск Lens Protocol в 2022 — Hey среди первых клиентов; комиссия mint profile NFT породила дебаты про «стоимость social onboarding».",
      "Племенная война Farcaster vs Lens в 2024 — сообщество Hey осталось Lens-native несмотря на VC-хайп Farcaster.",
      "Creator collects во время bull приносили ETH micro-influencer'ам — медведь высушил монетизацию, граф остался ончейн.",
    ],
    tips: [
      "Lens profile NFT — береги owner wallet, потеря кошелька = потеря social identity.",
      "Пробуй несколько Lens clients — граф один, UX разный.",
    ],
    warnings: [
      "Ончейн social = публично навсегда — думай, прежде чем постить ссылки на кошельки.",
    ],
  },
  "homora-v2": {
    short:
      "Leveraged yield программа доходностиing Alpha Homora — займ под LP, усиление программа доходности rewards, усиление IL.",
    long:
      "Homora v2 от Alpha Venture DAO — leveraged liquidity mining на Ethereum/BSC: умножай программа доходности APY заёмными активами, классический спекулянт-инструмент DeFi.",
    tagline: "Leveraged программа доходностиing — 3x yield, 3x IL, 3x liquidation fun.",
    highlight:
      "Homora v2 позволял открывать leveraged LP-позиции: депозит, займ, программа доходности с усиленной экспозицией. Пик продукта 2020–2021 DeFi summer. Несколько эксплойтов и миграций в истории Alpha ecosystem — легендарный hack Homora v1. v2 улучшили, но leveraged программа доходностиing inherently fragile в волатильности. Исторический артефакт и поучительный урок про leverage.",
    facts: [
      "Эксплойт Homora v2 в феврале 2021 — $37M+ потерь, кризис репутации Alpha Finance, экстренные патчи.",
      "Интеграция Iron Bank для borrowing — каскадные ликвидации во время краха мая 2021 снесли leveraged программа доходностиers.",
      "Токен ALPHA привязан к экосистеме — программа доходности rewards в governance token, который −95% в медвежьем рынке.",
    ],
    tips: [
      "Если есть legacy-позиции, закрывай в низкой волатильности — liquidation bots следят за долгом Homora.",
    ],
    warnings: [
      "Leveraged LP + история эксплойтов — только для историков, не для новых депозитов без актуального статуса аудита.",
    ],
  },
  "hop-exchange": {
    short:
      "Perp и spot DEX нового поколения — ончейн leverage с метой поинтов и рефералов.",
    long:
      "Hop Exchange (app.hop.exchange) — децентрализованная торговая площадка с фокусом на perp, рост через стимулы и community trading competitions.",
    tagline: "Ещё один perp DEX — гони объём, копи поинты, надеясь на токен.",
    highlight:
      "Hop Exchange следует шаблону post-2024 perp DEX: гибридная ликвидность, реферальные уровни, сезонные leaderboards. Дифференциация через выбор chain и fee structure — проверяй актуальную документацию. Молодые протоколы несут smart contract и oracle risks, стандартные для категории. Сравни funding rates с Hyperliquid, dYdX перед полной миграцией perp workflow.",
    facts: [
      "Сезон запусков perp DEX 2024–2025: Hop среди десятков, конкурирующих за spillover нарратива Hyperliquid.",
      "Реферальная пирамида — топ-рефереры иногда давали majority объёма, опасения множественные аккаунты.",
      "Trading competitions на testnet с NFT-призами — классическое user acquisition перед mainnet liquidity.",
    ],
    tips: [
      "Начинай с минимального collateral, пока insurance fund и история аудитов не ясны.",
    ],
    warnings: [
      "Неаудированные или свежеаудированные perp-контракты — используй изолированный кошелёк.",
    ],
  },
  hotstuff: {
    short:
      "Perp DEX testnet — торгуй на testnet, копи поинты перед mainnet и potential эйрдропом.",
    long:
      "Hotstuff (testnet.hotstuff.trade) — perpetual trading в testnet phase: практика leverage, leaderboard, программа наград для ранних пользователей.",
    tagline: "Testnet perp — фантики сейчас, надежды на аллокацию потом.",
    highlight:
      "Hotstuff идёт по pre-mainnet playbook: testnet tokens, simulated perp, volume campaigns под будущее распределение токена. Полезно для изучения интерфейса без риска капитала — но time cost реален. Testnet volume ≠ skill; фильтры множественных аккаунтов на mainnet могут обнулить награды. Следи за официальными анонсами дат миграции на mainnet.",
    facts: [
      "Testnet perp meta после Hyperliquid: команды поняли, что testnet engagement дешевле mainnet liquidity mining.",
      "Wash trading на testnet leaderboard — проекты обещали anti-bot на snapshot, сообщество скептично.",
      "Название Hotstuff играет на культуре «hot wallet» — меметический брендинг в переполненном perp space.",
    ],
    tips: [
      "Не повторяй паттерны mainnet-кошелька, если хочешь избежать отметка множественных аккаунтов.",
      "Баги на testnet случаются — репорти, не жди наград за находки.",
    ],
    warnings: [
      "Testnet поинты не имеют гарантированной ценности — только opportunity cost.",
    ],
  },
  hyena: {
    short:
      "Perp trading на периферии экосистемы Hyperliquid — leverage на alts с ончейн-расчётом.",
    long:
      "Hyena (app.hyena.trade) — perpetual DEX на волне Hyperliquid/L1 perp: leverage trading, поинты, нишевые листинги активов.",
    tagline: "Perp для активных трейдеров — Hyena на переполненном рынке ончейн leverage.",
    highlight:
      "Hyena конкурирует в насыщенном сегменте perp DEX: funding rates, OI caps, реферальные программы определяют UX. Безопасность chain и дизайн oracle определяют выживание после фазы стимулов. Трейдеры часто распределяют капитал между Hyperliquid, Hyena и другими для rate arb — операционная сложность. Проверяй команду, аудиты, insurance fund перед объёмами.",
    facts: [
      "Успех Hyperliquid породил adjacent perp apps — naming Hyena сигнализирует агрессивную trading culture.",
      "Funding rate arb между perp venues стал side hustle трейдеров в 2025 — Hyena в ротации некоторых desk'ов.",
      "Low-cap perp listings на новых DEX исторически — цели oracle manipulation — пользователей Hyena предупреждали после инцидентов в индустрии.",
    ],
    tips: [
      "Сверяй mark price с CEX index на неликвидных парах.",
    ],
    warnings: [
      "Новый perp DEX — assume maximum smart contract risk, пока не доказано обратное.",
    ],
  },
  hyphen: {
    short:
      "Biconomy Hyphen — быстрый liquidity bridge между Ethereum и L2/Polygon без классического 7-day exit.",
    long:
      "Hyphen от Biconomy — мгновенные кроссчейн-переводы через LP на обеих сторонах: депозит на Polygon, получение на Ethereum быстро с небольшой комиссией.",
    tagline: "Быстрый bridge — liquidity network, не optimistic rollup wait.",
    highlight:
      "Hyphen решал UX-боль медленных официальных мостов pre-2023: LP-сеть фронтит ликвидность, ребалансирует за кулисами. Интегрирован в стек Biconomy рядом с gasless meta-transactions. Конкуренция Hop, Across, Stargate снизила уникальное преимущество — поддержка продукта сместилась, когда Biconomy сфокусировался на account abstraction. Исторический инструмент для быстрых Polygon↔Ethereum moves.",
    facts: [
      "Boom Polygon 2021: пик объёма Hyphen, когда официальный bridge занимал 30+ мин, а пользователи хотели instant.",
      "IL LP на Hyphen pools во время волатильных bridge — LP узнали, что кроссчейн IL — новый зверь.",
      "AA-нарратив Biconomy 2023–2024 затмил Hyphen — bridge стал legacy продуктом в портфеле.",
    ],
    tips: [
      "Сравни комиссию Hyphen vs Across/Hop на том же маршруте — лидеры меняются по направлению.",
    ],
    warnings: [
      "Instant bridge = smart contract и solvency risk LP — лимиты размера важны.",
    ],
  },
  icecreamswap: {
    short:
      "Multi-chain DEX на Core DAO и BSC — swap, программа доходности, экосистемный токен ICE.",
    long:
      "IceCreamSwap — AMM на Core blockchain и BSC extensions: нативный swap, liquidity mining, кроссчейн-амбиции привязаны к росту экосистемы Core.",
    tagline: "Core chain DEX — swap там, где Core DAO строит.",
    highlight:
      "IceCreamSwap ехал на запуске Core DAO: нарратив Satoshi Plus consensus, ICE token программа доходностиs, BTC-aligned L1 marketing. DEX как якорь экосистемы — swap CORE, stable pairs, программа доходности rewards. Dual chain BSC history для broader reach. Типичные риски L1-native DEX: молодая chain, сконцентрированная ликвидность, зависимость от token emissions.",
    facts: [
      "Core DAO mainnet 2023 — IceCreamSwap среди первых DEX, ранние LP участники программ видели extreme APR decay curve.",
      "Цикл запуска ICE token накачка и доходность — типичная L1 DEX tokenomics, долгосрочная ценность спорна.",
      "Dual deployment BSC + Core путал пользователей — swap на wrong network терял средства еженедельно в support channels.",
    ],
    tips: [
      "Подтверждай network в кошельке перед swap — Core vs BSC RPC разные.",
    ],
    warnings: [
      "Farm APY в основном emissions — считай IL vs риск сброс токена.",
    ],
  },
  immutable: {
    short:
      "Immutable X и Immutable zkEVM — NFT и gaming L2 с gas-free mint и партнёрствами со студиями.",
    long:
      "Immutable — инфраструктура для Web3 gaming: Immutable X (StarkEx L2), Immutable zkEVM (Polygon CDK), passport wallet, гранты студиям. Дом Gods Unchained.",
    tagline: "Gaming NFT infra — mint и trade без ETH gas pain.",
    highlight:
      "Immutable построил вертикальный стек для game studios: SDK, marketplace, compliance-friendly NFT trading, zero gas mints на IMX для end users (студия платит или спонсирует). Крупные партнёрства — Guild of Guardians, история Illuvium. IMX token для staking и governance. Поворот к zkEVM для EVM compatibility при сохранении gaming focus. Конкуренты: Ronin, Beam, custom L2s.",
    facts: [
      "Gods Unchained запустился в 2019 до токена IMX — одна из longest running blockchain games, IMX airdrop игрокам 2021.",
      "Gas-free mint на Immutable X породил эру NFT spam 2021 — студии minted millions, environmental debate сместился к «кто платит».",
      "IMX token −80% от пика — gaming token sector в медведе, но pipeline студий продолжился через grants.",
    ],
    tips: [
      "Immutable Passport — единый login across games, один аккаунт, отслеживай linked wallets.",
      "IMX vs zkEVM assets на разных chains — bridge перед listing на wrong marketplace.",
    ],
    warnings: [
      "Ликвидность game NFT часто нулевая после исхода игроков — floor meaningless.",
    ],
  },
  "impossible-finance": {
    short:
      "Launchpad и DeFi на BSC — IDO, swap, stake в волну Binance Smart Chain.",
    long:
      "Impossible Finance — BSC-era launchpad с KOL rounds, swap, vaults. Governance токеном IF. Пик во время конкуренции multi-chain launchpad 2021.",
    tagline: "BSC launchpad relic — IDO memories и программа доходности ghosts.",
    highlight:
      "Impossible Finance конкурировал с DAO Maker, Polkastarter на BSC: tiered IDO access, stake IF для allocation, post-listing swap. Качество проектов варьировалось — доходность launchpad сильно skewed. Экосистема тише post-BSC decline и regulatory shift. Research tool для понимания динамики IDO cycle.",
    facts: [
      "IDO gold rush 2021: раунды Impossible oversubscribed за минуты — боты и tier staking wars.",
      "IF token staking для allocation — мелкие holders часто получали dust, киты maxed tiers.",
      "Reputational hit launchpad post-FTX — все платформы faced «is this CeFi 2.0» scrutiny.",
    ],
    tips: [
      "Legacy IF staking — проверь, поддерживаются ли контракты, перед взаимодействием.",
    ],
    warnings: [
      "IDO tokens mostly −95% — historical platform, не default для нового капитала.",
    ],
  },
  insurace: {
    short:
      "DeFi-страхование — покрытие взломов смарт-контрактов, отказа кастодиана и depeg stablecoin.",
    long:
      "InsurAce.io — децентрализованный протокол страхования: stake INSUR, андеррайти риски, подавай claim при подтверждённых инцидентах. Multi-chain каталог покрытий.",
    tagline: "Страхуй DeFi — claim при hack, если pool solvent.",
    highlight:
      "InsurAce выдаёт parametric covers на protocol hacks, exchange events и stable depegs: плати premium, получай payout при verified incident. Андеррайтеры зарабатывают premiums и несут claim risk. Конкуренты: Nexus Mutual, Unslashed. Процесс claim идёт через governance — не автоматическое bank insurance. Читай exclusions: admin key compromise и economic design failure часто excluded.",
    facts: [
      "Крах Ust/Luna 2022 — страховые claims оспаривались по индустрии, полисы InsurAce тестировали пределы «depeg cover».",
      "Множественные protocol hacks 2021–2023 — InsurAce выплачивал часть claims, отклонял другие, governance votes вызывали споры.",
      "Волатильность INSUR — андеррайтинг стал спекуляцией на сезон без hack'ов.",
    ],
    tips: [
      "Читай формулировки cover byte-by-byte — определения «smart contract cover» различаются.",
      "Диверсифицируй insurance между Nexus и InsurAce для крупных портфелей.",
    ],
    warnings: [
      "Insolvency insurance pool возможна при correlated hacks — tail risk mutualized, но не eliminated.",
    ],
  },
  "interport-by-l0": {
    short:
      "Кроссчейн bridge на LayerZero — swap и transfer между EVM chains через OFT messaging.",
    long:
      "Interport Finance (by L0) — bridge aggregator на инфраструктуре LayerZero: быстрые кроссчейн swaps, liquidity routing, OFT token transfers.",
    tagline: "LayerZero bridge UI — Interport переводит активы cross-chain.",
    highlight:
      "Interport построен на omnichain messaging LayerZero: соединяет Ethereum, BSC, Arbitrum, Avalanche и др. в едином интерфейсе. Часть meta LayerZero ecosystem campaigns — bridge volume для potential ZRO-related rewards (проверяй актуальные программы). Конкуренты: Stargate, Across. Риски: зависимость от LayerZero, industry-wide concern bridge contract exploits.",
    facts: [
      "LayerZero airdrop программа доходностиing 2023–2024 — Interport среди top bridge volume sources, вечный спор о множественных аккаунтах.",
      "Stargate vs Interport tribalism — та же L0 infra, разные liquidity networks.",
      "Эра bridge hack'ов: пользователи относились к Interport как к любому bridge — minimal approve, revoke after.",
    ],
    tips: [
      "Для крупных transfers сравни fee и time vs native canonical bridge.",
      "Отслеживай OFT token compatibility — не все токены bridge'ятся во все направления.",
    ],
    warnings: [
      "Bridge contracts — high-value targets — только official app.interport.fi.",
    ],
  },
  iswap: {
    short:
      "Кроссчейн swap tech — маршрутизация активов между сетями через агрегированную ликвидность.",
    long:
      "iSwap.tech — платформа кроссчейн-свапов, соединяющая несколько экосистем с фокусом на азиатские L1 и EVM-мосты.",
    tagline: "Кроссчейн swap — iSwap маршрутизирует, когда одного bridge недостаточно.",
    highlight:
      "iSwap даёт интерфейс для обмена токенов между блокчейнами без ручных шагов «сначала bridge, потом swap». Интеграции с региональными сетями — часть дифференциации. Меньший бренд vs Jumper/LI.FI глобально — проверяй глубину ликвидности на маршруте. Стандартные bridge-риски: семантика wrapped assets, задержка finality, промежуточные smart contracts.",
    facts: [
      "Proliferation кроссчейн-агрегаторов в 2023 — iSwap конкурировал в long tail альтернатив LI.FI.",
      "Интеграции с региональными L1 (фокус на Азию) — объём следовал циклам листингов на локальных биржах.",
      "Ошибка пользователя: отправка на wrong chain address — ticket №1 в support, UI warnings добавили после инцидентов.",
    ],
    tips: [
      "Тестируй с небольшой суммой на новом маршруте перед полным transfer.",
    ],
    warnings: [
      "Obscure routes с низкой ликвидностью — max slippage settings критичны.",
    ],
  },
  izumi: {
    short:
      "Liquidity mining DEX в стиле Uniswap v3 — токен iZi, multi-chain программа доходности на Ethereum, BNB, zkSync.",
    long:
      "iZUMi Finance — concentrated liquidity DEX + программа доходности: iziSwap, liquid boxing, cross-chain liquidity incentives. Поинты и эмиссии токена iZi.",
    tagline: "CLMM DEX + программа доходностиs — iZUMi на каждой модной chain сезона.",
    highlight:
      "iZUMi агрессивно разворачивался на сети каждого hype cycle: кампании zkSync, Linea, Scroll с mining programs. iziSwap использует concentrated liquidity model. LiquidBox — structured products для passive LP. Активный маркетинг и Galxe quests. Farm APY emission-driven — цена токена определяет real yield. Пережил несколько chain pivots.",
    facts: [
      "iZUMi программа доходности эпохи zkSync — TVL на миллиарды ненадолго, collapsed post-mining после сброс iZi.",
      "Партнёрство с Galxe campaigns — пик программа доходности-меты quest completion в 2023.",
      "Uniswap v3 license drama — iZUMi среди форков, разворачивавшихся на new L2 быстрее официального Uniswap.",
    ],
    tips: [
      "Считай APY в стабильных терминах — награды iZi волатильны.",
      "Выходи из программа доходности при пороговое падение emissions — обычно анонсируют заранее.",
    ],
    warnings: [
      "Multi-chain deployment — верифицируй official contract на каждой chain, мошеннические схемы копируют адреса.",
    ],
  },
  jumbo: {
    short:
      "DEX на Near Protocol — swap, liquidity pools, вход в DeFi экосистемы Near.",
    long:
      "Jumbo Exchange — native AMM на NEAR: быстрые swaps с fast finality, программа доходности programs, интеграция с NEAR-native wallet.",
    tagline: "NEAR DEX — swap, когда Aurora не твой путь.",
    highlight:
      "Jumbo обслуживает пользователей NEAR DeFi: простой swap interface, LP программа доходностиs, интеграция с NEAR wallet. Экосистема NEAR меньше EVM/Solana — ликвидность сконцентрирована в NEAR/STNEAR/stable pairs. Низкие fees и sub-second finality — преимущества NEAR. Кроссчейн через Rainbow Bridge — отдельный шаг.",
    facts: [
      "NEAR winter 2022–2024 — TVL Jumbo следовал циклам chain grants и developer incentives.",
      "Split Aurora EVM vs native NEAR — Jumbo ловил native NEAR token flows, у Aurora были отдельные DEX.",
      "Запуски программа доходности token типичны для NEAR DeFi — быстрый паттерн decay APR повторялся.",
    ],
    tips: [
      "Используй официальный NEAR wallet — account name human-readable, отличается от EVM.",
    ],
    warnings: [
      "Тонкая ликвидность на альтах — высокое проскальзывание по умолчанию.",
    ],
  },
  jumper: {
    short:
      "Li.Fi Jumper — кроссчейн bridge и swap aggregator, default UI для маршрутов LI.FI protocol.",
    long:
      "Jumper.exchange — frontend для LI.FI: bridge ETH на любой L2, swap по пути, gas refuel. Интегрирует Across, Stargate, Hop и десятки других.",
    tagline: "Один интерфейс для всех bridge — Jumper это LI.Fi для людей.",
    highlight:
      "Jumper стал популярным wallet embed и standalone site для cross-chain moves: сравнение маршрутов по time, cost, security tier. LI.FI SDK питает многие кошельки behind the scenes. Рекомендации маршрутов обновляются по мере сдвига bridge liquidity. Gas на destination chain через refuel. Essential tool эры multi-chain — bridge risk per underlying provider остаётся.",
    facts: [
      "Jumper спасал пользователей во время Arbitrum Odyssey — bridge+swap в один клик vs ад MetaMask network switching.",
      "LI.FI привлёк institutional round — UI Jumper синонимичен категории aggregator наряду с Socket.",
      "Страхи bridge exploit — Jumper добавил route safety labels после industry-wide травмы Ronin/Wormhole.",
    ],
    tips: [
      "Сравни «best route» vs «fastest» — cheapest может занять на 20 мин дольше.",
      "Включай gas refuel на первой tx в new L2 — избегает stuck funds.",
    ],
    warnings: [
      "Aggregator выбирает bridge — читай underlying protocol перед крупным transfer.",
    ],
  },
  jupiter: {
    short:
      "DEX aggregator №1 на Solana — лучший swap route, limit orders, DCA, perp и hub экосистемы.",
    long:
      "Jupiter (jup.ag) — сердце Solana DeFi: swap aggregation по каждому SPL pool, limit orders, perpetuals Jup, launchpad, богатая история airdrop.",
    tagline: "Если Solana торгует — Jupiter маршрутизирует, default swap brain.",
    highlight:
      "Jupiter доминирует в Solana trading: pathfinding по Orca, Raydium, Meteora, Phoenix и др.; limit orders, DCA, bridge portal. Airdrop JUP token 2024 — одно из крупнейших событий Solana — governance и fee meta. Jup.perps и LFG launchpad расширились за пределы swap. Интеграции в Phantom, Solflare по умолчанию. MEV protection и улучшения routing непрерывны.",
    facts: [
      "Airdrop JUP в янв. 2024: ~1B tokens пользователям — критерии favor consistent swappers, DCA users, volume thresholds; охотники с множественными аккаунтами в основном разорены.",
      "FOMO SOL memecoin season 2024 — Jupiter processed majority on-chain swap volume, infra strain и routing competition с Dflow.",
      "Post-airdrop Jup DAO votes on fee distribution — дебаты «должны ли JUP stakers получать perp fees» сформировали культуру governance Solana.",
    ],
    tips: [
      "Используй limit order для входов на volatile memecoins — лучше market swap на пике.",
      "DCA малыми суммами снижает timing risk на SOL pairs.",
    ],
    warnings: [
      "Memecoin swap всё ещё может fail или fill badly — slippage и honeypot tokens существуют на Solana.",
    ],
  },
  "just-cryptos": {
    short:
      "Just Cryptos на Tron — wrapped BTC/ETH (jBTC, jETH) для DeFi в сети TRON.",
    long:
      "Just Cryptos (just.network) — mint wrapped major crypto на Tron для JustLink и JustLend collateral: BTC/ETH экспозиция без выхода из экосистемы TRX.",
    tagline: "Wrapped majors на Tron — BTC экспозиция, TRX gas.",
    highlight:
      "Just Cryptos повышает capital efficiency Tron DeFi: jBTC, jETH minted против custody model, используются в lending и swap на Tron. Привязан к JUST ecosystem и Sun/Tron foundation. Custodial wrap risk — прозрачность reserves спорна vs WBTC model. Популярен в Азии среди Tron-heavy user base.",
    facts: [
      "Доминирование Tron USDT — трейдеры держали jBTC, расчёты в USDT-TRC20 в той же chain.",
      "Периодические вопросы прозрачности кастодиана — пользователи Tron DeFi исторически ставили fees выше proof-of-reserves purity.",
      "Интеграция JustLend — jBTC collateral enabled leveraged long в Tron-native стиле.",
    ],
    tips: [
      "Разберись в mint/redeem mechanism и fees перед крупной jBTC position.",
    ],
    warnings: [
      "Wrapped asset custodial risk — не эквивалент self-custody BTC.",
    ],
  },
  justlend: {
    short:
      "Ведущий lending на Tron — supply TRX/USDT, borrow, liquidity mining для JustLink ecosystem.",
    long:
      "JustLend.org — money market на TRON: депозит приносит interest, borrow против collateral, governance через токен JST.",
    tagline: "Tron Aave analog — lend USDT там, где живёт объём Tron.",
    highlight:
      "JustLend якорит TVL Tron DeFi: огромный supply USDT-TRC20 делает stablecoin lending dominant use case. Интеграция с JustStable, JustCryptos wrapped assets. Политика экосистемы Sun влияет на governance. Ставки driven by Tron-specific demand — часто отличаются от кривых Ethereum Aave. Smart contract audits есть, но Tron DeFi менее публично scrutinized, чем ETH mainnet.",
    facts: [
      "Нарратив Tron USDT > Ethereum USDT supply 2023 — TVL JustLend выиграл от stock TRC20 stablecoin.",
      "Публичный маркетинг Justin Sun — кампании JustLend tied to TRX price cycles и exchange promotions.",
      "Liquidation во время волатильности TRX — заёмщики поняли, что on-chain liquidity Tron тоньше Ethereum для крупных collateral sales.",
    ],
    tips: [
      "Следи за health factor на TRX collateral — volatility spikes быстро.",
      "USDT supply rate часто низкий — real yield может быть mining rewards, а не base APY.",
    ],
    warnings: [
      "Путаница адресов Tron — verify TRC20, не ERC20 deposit.",
    ],
  },
  justmoney: {
    short:
      "Stablecoin и swap на Tron — потоки токенов JUST ecosystem, on-chain exchange utility.",
    long:
      "Just.money — компонент Tron DeFi для stable swap и JUST-related token mechanics в портфеле Sun/JustLink.",
    tagline: "Tron stable swap — маленькая часть JUST puzzle.",
    highlight:
      "Just.money работает в стеке Tron DeFi рядом с JustSwap и JustLend: обмен stablecoin, маршрутизация токенов JST ecosystem. Меньше глобальной видимости, чем Ethereum DeFi, но обслуживает Tron-native пользователей без кроссчейн bridge. Проверяй актуальный статус продукта — приложения Tron эволюционируют с приоритетами foundation.",
    facts: [
      "Экосистема JST token взаимосвязана — пулы just.money привязаны к roadmap JustLink.",
      "Пик Tron DeFi 2021 — объём just.money рос с бычьим TRX, тихие медвежьи годы.",
      "Эра stablecoin USDD на Tron — смежные продукты реагировали на смену нарративов.",
    ],
    tips: [
      "Проверяй состав пула — на некоторых парах низкая ликвидность.",
    ],
    warnings: [
      "Scam-токены на Tron повсеместны — верифицируй контракт на Tronscan.",
    ],
  },
  "katana-roninchain-com": {
    short:
      "Katana DEX на Ronin — swap для Axie ecosystem, RON/WETH liquidity hub gaming chain.",
    long:
      "Katana (Ronin chain DEX) — official AMM на Ronin для AXS, SLP, RON, ETH pairs: gaming economy liquidity backbone.",
    tagline: "Ronin DEX — swap токенов Axie там, где живёт игра.",
    highlight:
      "Katana DEX запустился с Ronin для экономики Axie Infinity: игроки обменивают SLP, AXS без bridge на Ethereum. Ronin hack 2022 ($625M) потряс доверие — chain восстановилась, Katana остался primary on-chain venue. Ликвидность RON token сконцентрирована здесь. Gaming DeFi узкий — ликвидность следует за числом игроков, спад Axie снизил глубину.",
    facts: [
      "Ronin bridge hack март 2022 — one of largest crypto thefts ever; Katana kept running, но TVL trust cratered.",
      "Гиперинфляция Axie SLP — пулы SLP на Katana стали case study мёртвой ликвидности game token.",
      "Запуск RON 2022 — пары RON на Katana стали primary price discovery для native token Ronin.",
    ],
    tips: [
      "Проверяй проскальзывание на SLP/AXS — спреды широкие после исхода игроков.",
    ],
    warnings: [
      "История Ronin bridge — разберись в custody model отдельно от swap-контрактов Katana.",
    ],
  },
  klayswap: {
    short:
      "Ведущий DEX Klaytn — пары KLAY, ликвидность корейской экосистемы, governance KSP token.",
    long:
      "KLAYswap — dominant AMM на Klaytn blockchain popular в Korea: swap, LP, stake KSP. Enterprise chain DeFi entry point.",
    tagline: "Klaytn DEX — swap по умолчанию для корейской chain.",
    highlight:
      "KLAYswap anchors Klaytn DeFi: Klaytn Foundation partnerships, stable KLAY/USDT pools, integration Kakao ecosystem narratives. KSP stakers earn fees. Regulatory clarity Korea influences Klaytn flows differently from offshore chains. Liquidity adequate для KLAY majors, thin на long-tail.",
    facts: [
      "Маркетинг с backing Kakao — KLAYswap выиграл от нарратива «корейский Ethereum».",
      "Contagion Luna 2022 ударил по KLAY — TVL KLAYswap упал с региональным sentiment.",
      "Циклы выращивания доходности KSP token — типичный паттерн emission DEX token.",
    ],
    tips: [
      "Используй Kaikas wallet native Klaytn — MetaMask possible, но Kaikas smoother.",
    ],
    warnings: [
      "Региональные regulatory changes могут повлиять на доступ к Klaytn — проверяй local rules.",
    ],
  },
  "koi-finance": {
    short:
      "DEX на zkSync Era — swap, liquidity, native KOI token в zkSync DeFi stack.",
    long:
      "KOI Finance (dapp.koi.finance) — AMM и программа доходности на zkSync Era: ехал на хайпе zkSync, liquidity mining campaigns, гранты экосистемы.",
    tagline: "zkSync Era DEX — KOI в L2 программа доходности rotation.",
    highlight:
      "KOI Finance — один из native DEX zkSync Era, конкурировавших за TVL в ожидании airdrop zkSync: swap, LP, boost campaigns. DeFi zkSync фрагментирован — KOI захватил долю через стимулы. После ZK airdrop объём нормализовался. Стандартные риски молодого L2 DEX: emissions, IL, contract upgrades.",
    facts: [
      "zkSync Era mainnet 2023 — запуск KOI совпал с грантами ecosystem fund.",
      "ZK token airdrop июнь 2024 — TVL KOI взлетел перед snapshot, упал после — знакомый паттерн.",
      "Политика экосистемы Matter Labs — native DEXes боролись за статус «official partner».",
    ],
    tips: [
      "Проверяй emission schedule программа доходности rewards — пороговое падениеs часты post-airdrop.",
    ],
    warnings: [
      "Downtime sequencer zkSync затрагивает все dApps включая KOI — не DEX-specific fix.",
    ],
  },
  "kokonut-swap": {
    short:
      "DEX на Klaytn с coconut branding — swap, программа доходности, Korean community DeFi.",
    long:
      "Kokonut Swap — альтернатива/компаньон KLAYswap на Klaytn: тропический брендинг, LP программа доходностиs, фокус на региональное сообщество.",
    tagline: "Klaytn DEX alt — Kokonut для community программа доходности meta.",
    highlight:
      "Kokonut Swap обслуживает пользователей Klaytn, ищущих программа доходности opportunities beyond KLAYswap: нишевые пулы, community token launches, meme culture Klaytn-local. TVL меньше KLAYswap — выше проскальзывание на объёмах. Типичная динамика regional chain DEX.",
    facts: [
      "Multi-DEX экосистема Klaytn — Kokonut ловил meme token launches, которые KLAYswap листил медленнее.",
      "Слухи о community airdrop гоняли периодический объём — планы токена mostly unconfirmed.",
      "Низкий gas Klaytn — участники программ доходности ротировали между KLAYswap и Kokonut за APR.",
    ],
    tips: [
      "Верифицируй token contract на Klaytn scope перед LP.",
    ],
    warnings: [
      "История обман на small DEX regional chains — сначала проверь audit status.",
    ],
  },
  "l2pass-by-l0": {
    short:
      "LayerZero NFT passport — ончейн badge за кроссчейн-активность, символ множественные аккаунты и airdrop программа доходностиing.",
    long:
      "L2pass (l2pass.com, by L0) — mint passport NFT, отслеживающий omnichain activity LayerZero: уровни badge, сигнал eligibility кампаний.",
    tagline: "LayerZero passport NFT — flex bridge history ончейн.",
    highlight:
      "L2pass minted как identity layer экосистемы LayerZero: докажи историю кроссчейн tx, повышай tier с активностью. Использовался в маркетинговых кампаниях и резюме участников программ доходности рядом с Galxe. Не гарантирует ZRO или любой airdrop — косметика и сигнал eligibility. Mint cost + gas на нескольких chains складывается для множественные аккаунты armies.",
    facts: [
      "Ожидание airdrop LayerZero — mint L2pass обязательный пункт в чеклистах участников программ доходности 2023.",
      "Tier upgrade gas на 5+ chains — участники программ доходности тратили сотни долларов на «gold passport».",
      "Post-ZRO launch utility passport неясен — NFT floor рухнул, остался историческим артефактом.",
    ],
    tips: [
      "Не переплачивай за passport tiers, если не actively используешь LayerZero bridges.",
    ],
    warnings: [
      "Passport ≠ гарантированная аллокация токена — official L0 criteria never fully disclosed upfront.",
    ],
  },
  layer3: {
    short:
      "Quest и onboarding platform — XP, cubes, guided crypto journeys с gamification.",
    long:
      "Layer3.xyz — Web3 discovery: выполняй quests, копи XP, unlock rewards в DeFi, NFT, L2 onboarding tracks. Конкурент Galxe с фокусом на smoother UX.",
    tagline: "Gamified Web3 onboarding — quests с лучшим UX, чем checkbox hell.",
    highlight:
      "Layer3 CUBE campaigns проводят пользователей через swap, mint, stake с поясняющим UI — ниже барьер, чем raw dApp. Партнёрские протоколы покупают distribution. L3 token launched с governance. Критика: наёмный капитал выполняет quests ради наград без retention. Всё ещё эффективное привлечение пользователей для new L2 launches, нуждающихся в первых 10k wallets.",
    facts: [
      "Спекуляции airdrop Layer3 CUBE — power users собирали XP на десятках кампаний pre-token.",
      "Base и Optimism partnered с Layer3 для onboarding tracks — official endorsement boosted credibility vs pure программа доходности platforms.",
      "TGE L3 token — участники программ доходности спорили ROI vs time/gas invested, типичный цикл quest platform.",
    ],
    tips: [
      "Фокусируй quests на сетях, которые ты реально используешь — XP на dead campaigns worthless.",
      "Верифицируй ссылки layer3.xyz — phishing copies часты.",
    ],
    warnings: [
      "Quest rewards часто малы vs gas на Ethereum mainnet — выбирай L2 quests.",
    ],
  },
  layerbank: {
    short:
      "Lending protocol multi-L2 — supply/borrow на Linea, Mode, Scroll и emerging chains.",
    long:
      "LayerBank Finance — бренд cross-chain lending aggregator, быстро разворачивается на новых L2: гонится за инсентивами, наращивает ликвидность, программы доходности токена LB.",
    tagline: "L2 lending hopper — LayerBank deploys там, где land grants.",
    highlight:
      "Стратегия LayerBank: first-mover lending на новых L2 (Linea, Mode, Bob и др.) с усиленными эмиссиями. Пользователи supply stables, earn APY + points. Risk stack: new chain + new lending code + emission token volatility. Audits published, но young deployments less battle-tested than Aave v3 на mainnet.",
    facts: [
      "Linea surge 2023 — LayerBank among top TVL lending на new L2 within weeks of launch.",
      "Mode и L2 incentive wars — LayerBank rotated boosts chain to chain following grant money.",
      "LB token emission программа доходностиs — APY charts looked triple digit, real yield often negative after сброс токена.",
    ],
    tips: [
      "Supply stables before native token — lower liquidation complexity.",
      "Exit when boost ends — APY порог usually announced.",
    ],
    warnings: [
      "New L2 lending exploits happened industry-wide — size limits prudent.",
    ],
  },
  layerswap: {
    short:
      "CEX ↔ L2 bridge — вывод с Binance/Coinbase напрямую на Arbitrum, Starknet без ручных шагов.",
    long:
      "Layerswap.io — специализированный мост с централизованных бирж на L2/L1: выбери CEX, выбери сеть, получи в кошелёк. Решает боль «вывод с CEX на wrong network».",
    tagline: "CEX → L2 напрямую — Layerswap без рулетки выводов.",
    highlight:
      "Layerswap интегрирует API бирж и chain deposits: пользователь отправляет с Coinbase/Binance в Layerswap, получает на Starknet/Arbitrum/Base. Быстрый onboarding для тех, кто не знаком с on-chain bridge. Прозрачные fees. Ограниченный набор пар vs универсальные мосты — сила в CEX-specific UX. Кастодиальный шаг во время transfer — доверие к процессу Layerswap.",
    facts: [
      "Онбординг Starknet 2024 — маршрут Layerswap Starknet-CEX был essential, когда официальные CEX withdrawal networks ограничены.",
      "Ошибка пользователя с memo/tag — пик тикетов поддержки Layerswap во время busy campaigns.",
      "Конкуренция native L2 withdrawals на биржах — ниша Layerswap сжимается, когда CEX добавляют прямой Arbitrum/Base.",
    ],
    tips: [
      "Дважды проверь destination address и сеть — ошибки необратимы.",
      "Сравни комиссию Layerswap с прямым L2 withdrawal CEX, когда доступно.",
    ],
    warnings: [
      "Transfer in progress требует solvency Layerswap — следи за status page.",
    ],
  },
  lido: {
    short:
      "Liquid staking №1 — stake ETH, получи stETH, используй в DeFi без порога 32 ETH.",
    long:
      "Lido Finance — доминирующий Ethereum liquid staking: stETH/wstETH, набор node operators, интеграции повсюду. Governance LDO. Критика централизации — вечная тема.",
    tagline: "stETH everywhere — liquid stake по умолчанию, дебаты о децентрализации включены.",
    highlight:
      "Lido держит largest share Ethereum staked через pool: stETH привязан к ETH, rebasing или wstETH wrapper для DeFi. Принят как collateral в Aave, Maker, Curve — системная важность огромна. Governance LDO над fees и node operators. Критика: концентрация stake, censorship risks post-MEV, systemic smart contract risk при exploit. Всё ещё default choice для passive ETH stake с ликвидностью.",
    facts: [
      "Depeg stETH в 2022 во время Terra/Celsius — торговался по 0.93 ETH, восстановился; stress test для всей LST ecosystem.",
      "Merge 2022 — Lido beneficiaries massive после unlock staking; TVL десятки миллиардов.",
      "Пул stETH/ETH на Curve в марте 2023 во время bank turmoil — снова brief depeg, Lido выжил, конкуренты получили нарратив «diversify LST».",
    ],
    tips: [
      "wstETH для DeFi integrations — избегай сложности rebasing accounting.",
      "Следи за peg stETH на Curve — red flag при sustained discount >1%.",
    ],
    warnings: [
      "Lido systemic — protocol risk затрагивает весь Ethereum DeFi stack.",
    ],
  },
  limitless: {
    short:
      "Prediction market на Base — ставки на события, политику, crypto outcomes ончейн.",
    long:
      "Limitless.exchange — децентрализованные prediction markets на Base L2: цена shares отражает вероятность, collateral USDC, рынки событий для crypto-native аудитории.",
    tagline: "Кузен Polymarket на Base — ставь на исходы, не на графики.",
    highlight:
      "Limitless приносит UX prediction market в экосистему Base: create/buy outcome shares, resolve через oracles или governance. Конкуренты Polymarket, Azuro. Regulatory gray area глобально — geoblocks могут применяться. Ликвидность на niche events тонкая. Crypto event markets (одобрение ETF, token launches) популярны. Споры resolution редки, но возможны — читай правила рынка.",
    facts: [
      "Возрождение prediction market в цикле US election 2024 — Limitless ехал на маркетинге Base рядом с доминированием Polymarket.",
      "Драма wrong resolution industry-wide — споры UMA oracle учат «читай fine print».",
      "Grants экосистемы Base — Limitless среди consumer apps, которые Coinbase L2 хотел showcase.",
    ],
    tips: [
      "Начинай с малых сумм на illiquid markets — exit slippage brutal.",
      "Пойми источник resolution перед ставкой — oracle vs manual.",
    ],
    warnings: [
      "Prediction markets restricted во многих юрисдикциях — legal risk на пользователе.",
    ],
  },
  linea: {
    short:
      "zkEVM L2 от ConsenSys — MetaMask-native chain, ETH security, ecosystem incentives.",
    long:
      "Linea (linea.build) — zk rollup ConsenSys: EVM equivalent, MetaMask integration по умолчанию, программы поинтов Linea Surge/Voyage до токена.",
    tagline: "ConsenSys L2 — Linea с встроенным MetaMask distribution.",
    highlight:
      "Linea использует distribution ConsenSys: MetaMask default network, Infura infra, Ethereum alignment marketing. DeFi ecosystem вырос через LXP points campaigns. Конкуренты zkSync, Scroll, Starknet. Sequencer centralized как у peers. Canonical bridge с Ethereum. Developer focus — enterprise и Ethereum-native teams.",
    facts: [
      "Linea mainnet 2023 — immediate MetaMask visibility advantage vs zkSync, где нужно было manual add.",
      "Linea Surge points program — участники программ доходности bridged ETH, swapped, lent месяцами pre-token speculation.",
      "Regulatory positioning ConsenSys — Linea marketed «Ethereum aligned» vs offshore L2 narratives.",
    ],
    tips: [
      "Используй official bridge linea.build — phishing bridges часты во время points season.",
      "Отслеживай критерии аллокации LXP/LXP-L, если token pending — правила меняются.",
    ],
    warnings: [
      "Points ≠ гарантия токена — ConsenSys never promised fixed conversion rate.",
    ],
  },
  link3: {
    short:
      "CyberConnect Link3 — verified Web3 link-in-bio, on-chain profile для creators и projects.",
    long:
      "Link3.to — Web3-native хаб ссылок: verified social links, кошелёк, витрина NFT, anti-phishing для идентичностей crypto Twitter.",
    tagline: "Linktree для Web3 — verified, on-chain, меньше phishing.",
    highlight:
      "Link3 из стека CyberConnect: креаторы агрегируют Telegram, Twitter, Discord с verification badges, снижая impersonation. Проекты используют как единый official link. Интеграция с social graph CyberConnect. Free tier + premium verification. Помогает избежать fake mint links — если пользователи реально проверяют Link3.",
    facts: [
      "Эпидемия impersonation в crypto Twitter — Link3 verification стала мантрой «check link3 before mint».",
      "Эра airdrop CyberConnect CC — профили Link3 связаны с дебатами о сборе данных social graph.",
      "Phishing pages теперь подделывают сам Link3 — добавился meta-scam layer.",
    ],
    tips: [
      "Bookmark official Link3 URLs — не доверяй Google ads.",
      "Проекты должны pin Link3 в Twitter bio — привычка сообщества verify.",
    ],
    warnings: [
      "Verification badge на Link3 не аудирует smart contracts — DYOR на mints.",
    ],
  },
};
