import type { PlatformContent } from "@/lib/catalog/content/types";

export const WEB3_BATCH_4: Record<string, PlatformContent> = {
  kgen: {
    short:
      "Игровая Web3-платформа с квестами и on-chain наградами — когда геймплей и крипто-экономика связаны в одном приложении.",
    long:
      "KGeN (kgen.io) объединяет игровые активности, квесты и токенизированные награды для сообщества геймеров. Платформа ориентирована на вовлечение через play-to-earn механики и партнёрства с игровыми студиями.",
    tagline: "Квесты, награды и on-chain прогресс в играх.",
    highlight:
      "KGeN строит мост между casual gaming и Web3: пользователи выполняют задания, участвуют в ивентах и получают on-chain rewards. Экосистема растёт через интеграции с играми и NFT-коллекциями. Для геймеров, которые хотят монетизировать время в игре без полного погружения в DeFi. Следи за условиями квестов и сроками claim — типичная модель «активность → баллы → токен».",
    facts: [
      "Gaming × Web3 2024–2025: платформы вроде KGeN конкурировали за retention после краха P2E — выжили те, кто сделал награды вторичными, а не основным доходом.",
      "Партнёрские квесты с game studios часто дают ранний доступ к NFT или whitelist — фермеры гоняют multi-account, команды борются с sybil.",
      "On-chain rewards без sticky gameplay: классический паттерн «добыча ивента → обвал токена → пустая платформа» повторяется у большинства gaming hubs.",
    ],
    tips: [
      "Читай правила квеста до старта — часть наград требует минимального on-chain баланса или KYC-партнёра.",
    ],
    warnings: [
      "Игровые токены и NFT-награды волатильны — не считай их гарантированным доходом.",
    ],
  },
  kiichain: {
    short:
      "Тестнет KiiChain — экспериментальная L1 для ранних пользователей и разработчиков, которые хотят протестировать сеть до mainnet.",
    long:
      "KiiChain (kiichain.io) — блокчейн-проект в стадии testnet. Пользователи подключают кошельки, выполняют транзакции и участвуют в ранних программах для будущего mainnet.",
    tagline: "Ранний доступ к новой L1 через testnet.",
    highlight:
      "Тестнет KiiChain на kiichain.io — точка входа для ранних пользователей: faucet, базовые транзакции, возможные квесты от команды. Типичный сценарий для новых L1 — накопление on-chain активности перед потенциальным airdrop. Gas бесплатный или из faucet, но время и внимание — реальная цена. Проверяй официальные каналы, не клоны testnet UI.",
    facts: [
      "Testnet-сезон 2024–2025: десятки новых L1 конкурировали за «100k wallets» — KiiChain в той же волне hunt за ранней активностью.",
      "Faucet abuse: боты выжимают testnet tokens за минуты — команды вводят captcha, GitHub auth и rate limits.",
      "Testnet ≠ mainnet: контракты, адреса и токены могут полностью измениться перед запуском — не храни ценность on-chain.",
    ],
    tips: [
      "Веди отдельный кошелёк для testnet — не смешивай с mainnet seed phrase на сомнительных сайтах.",
    ],
    warnings: [
      "Фишинг testnet-сайтов распространён — всегда проверяй URL на официальном Twitter/Discord проекта.",
    ],
  },
  kintsu: {
    short:
      "Liquid staking на Monad и смежных сетях — вкладывай нативный токен и получай LST для DeFi без разблокировки.",
    long:
      "Kintsu (kintsu.xyz/staking) — протокол liquid staking: депозит MON или других поддерживаемых активов, получение receipt-токена для yield и composability в DeFi.",
    tagline: "Стейк без заморозки ликвидности.",
    highlight:
      "Kintsu позволяет вкладывать в экосистеме Monad без потери ликвидности: LST можно использовать в lending, LP и других протоколах. Модель знакома по Lido и Rocket Pool, но на молодой chain с повышенными рисками smart contract и slashing. APR зависит от network rewards и commission протокола. Для тех, кто уже держит MON и хочет compound без ручного restaking.",
    facts: [
      "Liquid staking на pre-mainnet chains: Kintsu и аналоги запускаются до полной зрелости сети — early LST часто торгуются с дисконтом к номиналу.",
      "Monad hype 2024–2025: staking-провайдеры конкурировали за первый billion TVL — marketing APR выше, чем sustainable yield после TGE.",
      "Slashing на молодых сетях ещё не battle-tested — LST premium = компенсация за tail risk, который розница недооценивает.",
    ],
    tips: [
      "Сравни exchange rate LST с 1:1 — persistent depeg сигнализирует о проблемах ликвидности или доверии.",
    ],
    warnings: [
      "Smart contract риск на новой chain выше, чем у Lido на Ethereum — не вкладывай весь капитал в один протокол.",
    ],
  },
  kuru: {
    short:
      "DEX на emerging L2 — обмены и ликвидность для локальных пар, когда нужна нативная торговая площадка в экосистеме.",
    long:
      "Kuru (kuru.io) — децентрализованная биржа в Web3-экосистеме с AMM или order book моделью. Точка входа для обменов и LP на поддерживаемых сетях.",
    tagline: "Локальная ликвидность для своей chain.",
    highlight:
      "Kuru.io — DEX для пользователей, которые уже в целевой сети и не хотят мостить активы ради обмена. Объёмы обычно скромнее топовых агрегаторов, зато для нативных токенов экосистемы это часто основная площадка. Следи за slippage на тонких парах и audit status контрактов. Типичный early-stage DEX с emissions-driven TVL.",
    facts: [
      "Micro-DEX на новых L2: первые недели TVL растёт на incentives, потом падает на 80% — Kuru в типичном цикле «launch → farm → exit».",
      "Конкуренция с агрегаторами: Jupiter и 1inch забирают flow, локальные DEX живут на экзотических парах и pre-listing токенах.",
      "Phishing-клоны DEX UI — классика: один символ в домене, и пользователь approve'ит malicious контракт.",
    ],
    tips: [
      "Проверяй price impact перед крупным обменом — глубина пула на новых DEX часто минимальна.",
    ],
    warnings: [
      "Неаудированные контракты и низкая ликвидность — комбо для потери средств на IL и rug.",
    ],
  },
  lagrange: {
    short:
      "ZK coprocessor и инфраструктура доказательств — verifiable compute off-chain с on-chain verification для DeFi и cross-chain.",
    long:
      "Lagrange (lagrange.dev) строит ZK-инфраструктуру: coprocessors для тяжёлых вычислений, которые верифицируются on-chain. Используется протоколами для pricing, indexing и proof-based interoperability.",
    tagline: "ZK coprocessor с on-chain proof.",
    highlight:
      "Lagrange — инфраструктурный слой ZK era: вместо expensive on-chain computation протоколы делегируют расчёты coprocessor и получают succinct proof. Применения — DeFi pricing, cross-chain state, verifiable analytics. Для разработчиков и power users, которые интегрируют ZK в dApps. Не consumer app — это dev tooling и B2B infra с потенциальным token/nodes layer для early participants.",
    facts: [
      "ZK coprocessor meta 2024: Lagrange конкурировала с Risc Zero и SP1 за «default proof layer» — победит интеграция, не TPS на landing page.",
      "Succinct и Lagrange пересекаются в ZK infra space — инвесторы и devrel активно переключают внимание между проектами каждый квартал.",
      "Proof generation time vs cost: coprocessor экономит gas, но добавляет latency — не каждый DeFi flow готов ждать секунды на proof.",
    ],
    tips: [
      "Если участвуешь в dev/testnet программе — документируй on-chain proof submissions для potential retroactive rewards.",
    ],
    warnings: [
      "ZK infra проекты долго без consumer product — «ранняя активность» может не конвертироваться в airdrop.",
    ],
  },
  layeredge: {
    short:
      "Edge computing L2 — децентрализованная инфраструктура на границе сети для Web3-приложений с низкой задержкой.",
    long:
      "LayerEdge (layeredge.io) — проект на стыке edge computing и blockchain: распределённые ноды ближе к пользователю для быстрого исполнения и verifiable workloads.",
    tagline: "Edge compute для Web3-инфраструктуры.",
    highlight:
      "LayerEdge позиционируется как infra для приложений, которым нужна скорость edge + guarantees blockchain. Модель может включать node operators, staking и task marketplace. Early stage — testnet, квесты, onboarding разработчиков. Для тех, кто добывает infra-narrative (DePIN, edge, ZK) параллельно с L2 meta. Следи за официальными анонсами tokenomics.",
    facts: [
      "DePIN + edge 2024–2025: LayerEdge в одном кластере с io.net и аналогами — «запусти ноду, получи баллы» стало стандартным GTM.",
      "Edge latency promises часто тестируются только в demo — production load на distributed nodes другая история.",
      "Infra airdrop hunters запускают VPS farms — команды ужесточают hardware attestation и geo requirements.",
    ],
    tips: [
      "Для node programs читай minimum specs — undersized VPS не засчитывается в rewards.",
    ],
    warnings: [
      "Запуск ноды на непроверенном софте — риск для сервера; используй изолированную VM.",
    ],
  },
  layerhub: {
    short:
      "Агрегатор протоколов и аналитика — hub для Polymarket и смежных prediction/DeFi инструментов в одном интерфейсе.",
    long:
      "LayerHub (layerhub.xyz) — навигационный слой и analytics hub для Web3-протоколов, включая Polymarket и другие markets. Упрощает discovery и мониторинг позиций.",
    tagline: "Один вход в протоколы и prediction markets.",
    highlight:
      "LayerHub агрегирует ссылки, метрики и контекст вокруг популярных Web3-протоколов — особенно prediction markets вроде Polymarket. Не замена нативному UI, а overlay для трейдеров и researchers. Полезен для сравнения markets, tracking exposure и быстрого перехода в нужный протокол. Проверяй, что outbound links ведут на официальные домены, не referral-клоны.",
    facts: [
      "Prediction market boom 2024: агрегаторы вроде LayerHub выросли на трафике «куда ставить на выборы» — SEO и crypto Twitter дали organic growth.",
      "Hub-сайты часто не custody funds — ценность в curation; outdated links после rebrand протокола — типичная боль пользователей.",
      "Polymarket доминировал narrative — LayerHub и аналоги конкурировали за «default bookmark» у political bettors.",
    ],
    tips: [
      "Перед ставкой на prediction market всё равно сверяй resolution rules на официальном сайте протокола.",
    ],
    warnings: [
      "Агрегатор не гарантирует актуальность контрактов — всегда verify URL и market ID on-chain.",
    ],
  },
  linera: {
    short:
      "Blockchain с microchains — параллельные цепочки приложений для масштабирования без классического sharding UX.",
    long:
      "Linera (portal.linera.net) — L1 с архитектурой microchains: каждое приложение может иметь свою chain с общей security. Testnet и developer portal для ранних билдеров.",
    tagline: "Масштаб через параллельные app-chains.",
    highlight:
      "Linera предлагает модель, где dApps получают dedicated microchain вместо конкуренции за block space одной monolithic chain. Portal.linera.net — вход для wallet, faucet и dev tools. Для разработчиков Rust/Wasm и пользователей testnet-квестов. Narrative — масштаб web2 с гарантиями web3. Early stage: активность on-chain может учитываться в future rewards programs.",
    facts: [
      "Microchain narrative 2023–2024: Linera привлекла внимание после публикаций ex-Meta researchers — academic pedigree ≠ mainnet traction.",
      "Testnet wallet downloads скачками коррелируют с airdrop rumors — реальная dev activity измеряется commits, не tx count.",
      "Конкуренция с Aptos/Sui Move chains — Linera выбирает Wasm path, другой developer stack, та же битва за builders.",
    ],
    tips: [
      "Для dev grant programs готовь working demo на testnet — tx farming без кода реже конвертируется в allocation.",
    ],
    warnings: [
      "Testnet tokens не имеют ценности — не покупай «Linera accounts» у перекупщиков.",
    ],
  },
  linktr: {
    short:
      "Официальный Linktree Succinct Labs — все ссылки на ZK infra, testnet и socials в одном месте.",
    long:
      "Linktr (linktr.ee/succinctlabs) — агрегированная страница ссылок Succinct Labs, команды за SP1 и ZK proof infrastructure. Точка входа в документацию, Discord и программы.",
    tagline: "Один клик до ZK infra и community Succinct Labs.",
    highlight:
      "Succinct Labs — один из ключевых игроков ZK VM (SP1) и proof generation stack. Их Linktree собирает официальные ресурсы: GitHub, docs, testnet, careers. Для ZK-native developers и airdrop hunters, которые следят за proof infrastructure meta. Не dApp — navigation hub. Всегда сверяй, что переходишь с linktr.ee/succinctlabs, а не с typosquatting clone.",
    facts: [
      "Succinct SP1 launch 2024: «prove anything in Rust» стало мемом среди ZK devs — Linktree traffic взлетел в launch week.",
      "ZK infra funding 2024–2025: Succinct подняла significant round — конкуренция с Risc Zero за default zkVM heated up.",
      "Linktree как official link hub — стандарт для crypto teams после ban waves в social; один broken link = тысячи confused users.",
    ],
    tips: [
      "Bookmark официальный Linktree — в ZK space много fake Discord invites в Google Ads.",
    ],
    warnings: [
      "Не вводи seed phrase на сайтах, на которые попал через неофициальные Linktree-клоны.",
    ],
  },
  litvm: {
    short:
      "LitVM — EVM-совместимая среда на Lit Protocol для программируемых ключей и verifiable Web3 actions.",
    long:
      "LitVM (litvm.com) развивает EVM execution layer в экосистеме Lit Protocol: smart contracts + MPC/TEE keys для условного signing и automation.",
    tagline: "EVM на Lit Protocol с programmable keys.",
    highlight:
      "Lit Protocol известен PKP (programmable key pairs) и decentralized signing. LitVM расширяет story до полноценного EVM runtime для dApps, которым нужны automated on-chain actions с distributed key management. Сценарии — AI agents, limit orders, account abstraction patterns. Для developers и early node operators в Lit ecosystem. Следи за testnet milestones и integration docs.",
    facts: [
      "Lit Protocol pivoted от «NFT licensing» к core infra для signing — LitVM часть этой эволюции 2023–2025.",
      "MPC + EVM combo редкость: security audits здесь critical — один bug в key material = total loss.",
      "Agent economy hype 2025: LitVM позиционируется под AI agents with on-chain wallets — narrative ahead of product-market fit.",
    ],
    tips: [
      "При интеграции PKP читай scope permissions — over-permissive Lit Actions = attack surface.",
    ],
    warnings: [
      "Programmable keys ≠ custodial recovery — потеря access conditions может навсегда заблокировать assets.",
    ],
  },
  logx: {
    short:
      "Perpetual DEX — торговля фьючерсами on-chain с leverage на поддерживаемых L2 и alt-L1.",
    long:
      "LogX (app.logx.network) — децентрализованная биржа perpetual contracts: long/short с leverage, funding rates, on-chain settlement без CEX custody.",
    tagline: "Leverage on-chain без KYC-биржи.",
    highlight:
      "LogX.network конкурирует в crowded perp DEX sector: GMX, dYdX, Hyperliquid и десятки clone. Преимущество — deployment на emerging chains с incentives для early traders. Funding, liquidation и oracle risk — стандартный набор perp risks. Для experienced traders, не для «first crypto buy». Проверяй open interest, depth и audit перед крупными позициями.",
    facts: [
      "Perp DEX wars 2024: новые chains платят traders rebates за volume — wash trading inflated metrics на half of perp venues.",
      "LogX и аналоги на L2 часто запускаются до mature oracle infra — flash crash liquidation cascades случались на multiple perp DEX.",
      "Points season на perps: professional MM dominate leaderboard — retail farms funding fees net negative.",
    ],
    tips: [
      "Начни с малого leverage на новой perp DEX — liquidation engine и mark price могут отличаться от CEX.",
    ],
    warnings: [
      "Perpetual contracts с высоким leverage могут ликвидировать позицию за минуты — используй stop-loss on-chain где доступно.",
    ],
  },
  lombard: {
    short:
      "Bitcoin liquid staking — LBTC и мост BTC в DeFi без продажи базового актива, когда нужен yield на BTC.",
    long:
      "Lombard Finance (lombard.finance) выпускает LBTC — liquid staked Bitcoin для использования в lending, restaking и DeFi на Ethereum и partner chains.",
    tagline: "Yield на BTC без выхода из exposure.",
    highlight:
      "Lombard позиционирует LBTC как institution-grade wrapped/staked BTC: custody partners, proof of reserves, integrations с Pendle, Aave-style protocols. Narrative — «BTCFi» и restaking на Bitcoin capital. Риски: bridge/custody assumptions, smart contract on destination chain, depeg LBTC. Для holders BTC, которые хотят DeFi yield с пониманием layered risk.",
    facts: [
      "BTCFi summer 2024: Lombard, Babylon, Solv конкурировали за «canonical Bitcoin LST» — TVL race до $1B+ за месяцы.",
      "LBTC integrations с EigenLayer-style restaking — nested risk: BTC → LST → restaking → points, три слоя trust.",
      "Custody transparency debates: каждый BTC LST проходил через «show me the reserves» Twitter threads после FTX trauma.",
    ],
    tips: [
      "Сравни LBTC peg с native BTC price на DEX — persistent discount = red flag liquidity or trust.",
    ],
    warnings: [
      "Wrapped/staked BTC несёт custodial и smart contract риск — не эквивалент self-custody Bitcoin.",
    ],
  },
  loyalty: {
    short:
      "Loyalty program Camp Network — on-chain баллы и награды за активность в creator economy.",
    long:
      "Loyalty (loyalty.campnetwork.xyz) — программа лояльности Camp Network: квесты, referrals, engagement metrics для будущих rewards в creator-focused L2/L1.",
    tagline: "Поинты за активность в creator chain.",
    highlight:
      "Camp Network строит infra для creators и IP on-chain. Loyalty portal трекает участие: social tasks, on-chain txs, referrals. Классическая модель pre-TGE points farming. Для пользователей, которые верят в creator economy narrative и готовы тратить time on quests. Sybil resistance varies — multi-wallet farming может дисквалифицировать.",
    facts: [
      "Creator chain meta 2024–2025: Camp, Story Protocol, SEI NFT pushes — loyalty portals выглядят одинаково, differentiation в IP tooling.",
      "Referral leaderboard wars: top referrers часто оказываются paid KOL networks, не organic community.",
      "Points ≠ token guarantee: TGE delay или reduced allocation — стандартное разочарование season farmers.",
    ],
    tips: [
      "Стабильная активность с одного кошелька часто ценится выше, чем 50 sybil-кошельков с минимальным tx.",
    ],
    warnings: [
      "Не покупай «loyalty accounts» — ToS большинства программ запрещает transfer и банит покупателей.",
    ],
  },
  magicnewton: {
    short:
      "Web3-проект Magic Newton — early-stage платформа с community-driven growth и on-chain компонентами.",
    long:
      "Magic Newton (magicnewton.com) — emerging Web3 project: landing, community programs и potential token/NFT layer для early participants.",
    tagline: "Ранний Web3-проект с фокусом на community.",
    highlight:
      "Magic Newton на ранней стадии поиска product-market fit: сайт, социальные кампании, возможные листы ожидания или mint-механики. Типичная точка входа для охотников за airdrop и NFT-коллекционеров, отслеживающих новые бренды до мейнстримного внимания. Минимальный due diligence — проверяй doxx команды, статус аудита и адреса контрактов перед любым депозитом. Хайп-цикл короткий.",
    facts: [
      "Pre-launch Web3-бренды 2024: сотни проектов с названиями «Magic*» — дифференциация только через delivery, не через лендинг.",
      "Community growth hacks: конкурсы Discord-приглашений раздувают количество участников без реального вовлечения — vanity-метрика.",
      "Mint FOMO циклы: sellout за первые 24h ≠ долгосрочная ценность — secondary floor часто ниже mint price через неделю.",
    ],
    tips: [
      "Проверяй contract на block explorer перед mint — unverified contract = elevated rug risk.",
    ],
    warnings: [
      "Early-stage projects без audit — не вкладывай больше, чем готов потерять полностью.",
    ],
  },
  magmastaking: {
    short:
      "Magma staking — liquid или native staking в экосистеме новой chain с receipt-токенами для DeFi.",
    long:
      "Magmastaking (magmastaking.xyz) — интерфейс вклада для нативного токена поддерживаемой сети: делегирование валидаторам, награды, опциональный LST.",
    tagline: "Делегирование и yield на chain-native token.",
    highlight:
      "Портал Magma staking упрощает делегирование для нетехнических держателей: выбор валидатора, отображение APR, механика компаундинга. Может быть официальным или community-built фронтендом — сверяй с документацией. Стейкинг на молодых chain несёт риск slashing и unbonding period. Для держателей, участвующих в безопасности сети и потенциальных retroactive rewards.",
    facts: [
      "Распространение сторонних staking UI: каждая новая Cosmos/alt-L1 получает 5+ фронтендов — не все официальные, часть — фишинг.",
      "Централизация валидаторов: top 3 часто держат >50% stake — мем про Nakamoto coefficient становится реальным governance risk.",
      "Unbonding period 14–28 дней: вкладчики не успевают выйти при падении — «liquid» альтернативы есть, но добавляют contract risk.",
    ],
    tips: [
      "Диверсифицируй между несколькими валидаторами — не делегируй 100% одному оператору.",
    ],
    warnings: [
      "Slashing за double-sign или downtime реален — изучай track record валидатора перед делегированием.",
    ],
  },
  mahojin: {
    short:
      "Платформа AI workflows — автоматизация задач и generative pipelines с Web3-интеграциями для creators.",
    long:
      "Mahojin (app.mahojin.ai/workflows) — платформа AI workflows: composable pipelines для image, text и automation tasks с optional on-chain hooks.",
    tagline: "Собирай AI workflows с Web3-native hooks.",
    highlight:
      "Mahojin позиционируется на пересечении AI agents и Web3: пользователи строят workflows, подключают модели и могут монетизировать или токенизировать результаты. app.mahojin.ai/workflows — интерфейс конструктора. Для creators и разработчиков, экспериментирующих с AI-автоматизацией. Token/crypto слой может включать credits, NFT outputs или points — следи за актуальной моделью в официальной документации.",
    facts: [
      "AI x Web3 2024–2025: десятки платформ обещали «agents with wallets» — Mahojin в одной когорте с MyShell, Virtuals — победитель пока не ясен.",
      "Workflow-платформы живут или умирают на ценах model API — субсидированные credits заканчиваются, пользователи уходят, когда pricing становится реальным.",
      "On-chain AI outputs (NFT mint генераций) пикнули в 2024 — utility beyond speculation ограничена.",
    ],
    tips: [
      "Тестируй workflows на free tier перед оплатой credits — quality varies по model routing.",
    ],
    warnings: [
      "AI-generated content может нарушать copyright — commercial use на свой legal risk.",
    ],
  },
  manta: {
    short:
      "Modular ZK L1/L2 — privacy-preserving транзакции и параллельные execution layers в экосистеме Manta Network.",
    long:
      "Manta Network (manta.network) — modular blockchain stack: Manta Pacific (L2), privacy features через ZK, native token MANTA и ecosystem dApps.",
    tagline: "Modular ZK и privacy в multi-chain stack.",
    highlight:
      "Manta Pacific — OP Stack L2 с акцентом на privacy и modular deployment. Эра New Parachain эволюционировала в более широкий modular narrative. Пользователи bridge ассеты, используют privacy pools (где legal), участвуют в ecosystem DeFi и NFT. MANTA token — governance и incentives. Post-airdrop chain конкурирует за sticky TVL, не только farmers. Privacy features под глобальным regulatory scrutiny.",
    facts: [
      "MANTA airdrop январь 2024: farmers получили allocation, token dumped 60%+ from open — textbook «farm → TGE → exit» на new L2.",
      "Manta Atlantic vs Pacific rebrand confusion: users bridged wrong network — support tickets flooded Discord месяцами.",
      "Privacy pool regulatory pressure 2024: projects с privacy features дистанцировались от sanctioned flows — compliance стал marketing talking point.",
    ],
    tips: [
      "Проверяй bridge destination — у Manta несколько network names; wrong chain = stuck funds until support.",
    ],
    warnings: [
      "Privacy tools не exempt from local laws — использование mixers/privacy pools может иметь legal implications.",
    ],
  },
  mantrachain: {
    short:
      "MANTRA Chain — Cosmos SDK L1 для Real World Assets и compliant tokenization в regulated DeFi.",
    long:
      "MANTRA Chain (mantrachain.io) — permissioned-friendly Cosmos chain для RWA: tokenized securities, regulated DeFi modules, OM token ecosystem.",
    tagline: "RWA и compliant DeFi на Cosmos.",
    highlight:
      "MANTRA (ex- MANTRA DAO) pivot к RWA chain: licensed frameworks, institutional partnerships, Cosmos IBC connectivity. Целевая аудитория — issuers и investors в tokenized real estate, funds, bonds. Retail участвует через OM staking, ecosystem dApps и potential RWA products. Regulatory clarity как selling point vs pure degen chains. Due diligence на каждый RWA product отдельно.",
    facts: [
      "RWA narrative 2024–2025: MANTRA, Ondo, Centrifuge конкурировали за «trillion dollar TAM» slides — on-chain RWA still single-digit billions.",
      "Cosmos RWA hub ambition: MANTRA vs Noble vs Osmosis RWA modules — fragmentation ликвидности across IBC.",
      "OM token rebrand from legacy MANTRA DAO DeFi — long-term holders прошли multiple tokenomics pivots.",
    ],
    tips: [
      "Каждый RWA product on MANTRA имеет own prospectus — читай перед invest, не только chain marketing.",
    ],
    warnings: [
      "Tokenized securities могут быть restricted by jurisdiction — geo-blocks apply.",
    ],
  },
  mavryk: {
    short:
      "Mavryk Network — Tezos-based L1 для tokenized assets и on-chain governance с enterprise RWA focus.",
    long:
      "Mavryk (mavryk.org) строит blockchain на Tezos technology stack для RWA tokenization, smart contracts и institutional adoption.",
    tagline: "Tezos DNA для RWA и on-chain finance.",
    highlight:
      "Mavryk опирается на экспертизу Tezos ecosystem: formal verification culture, on-chain upgrade mechanism, RWA use cases. Платформа для asset issuers, developers и validators в сети Mavryk. Early stage относительно Ethereum RWA giants — ставка на Tezos-aligned community и compliance tooling. Staking, governance и builder grants — типичные точки входа.",
    facts: [
      "Tezos RWA revival attempt: после лет «NFT art chain» identity, форки вроде Mavryk гонятся за institutional narrative.",
      "Formal verification marketing vs реальность: не все deployed contracts formally verified — читай audit reports per app.",
      "RWA chain launch cycle: mainnet announcement → validator set → empty dApp store → проверка терпения believer-ов.",
    ],
    tips: [
      "Следи за official mavryk.org для validator delegation — commission rates vary 5–20%.",
    ],
    warnings: [
      "New L1 token liquidity thin — large buys/sells резко двигают цену на DEX.",
    ],
  },
  mawari: {
    short:
      "Spatial streaming infra — decentralized CDN для XR, gaming и immersive content delivery at the edge.",
    long:
      "Mawari (mawari.net) — DePIN проект для spatial computing: distributed nodes стримят 3D/XR контент с низкой задержкой и token incentives.",
    tagline: "Децентрализованный стриминг для XR и immersive media.",
    highlight:
      "Mawari бьёт в bottleneck metaverse/XR — bandwidth и latency для 3D streams. Node operators предоставляют capacity, зарабатывают tokens, пользователи получают более быстрый immersive experiences. Пересечение DePIN, gaming и AI-generated 3D content hype. Hardware и bandwidth требования для nodes — читай specs. Early adopters — XR developers и DePIN farmers с серьёзным uplink.",
    facts: [
      "Metaverse infra 2023–2025: Mawari пережила hype cycle, когда Meta свернула планы — pivoted к B2B spatial streaming.",
      "DePIN node ROI-расчёты часто игнорируют electricity и bandwidth caps — residential ISP-провайдеры режут heavy upload.",
      "XR content delivery патенты и кодеки — legal слой так же сложен, как tokenomics для streaming DePIN.",
    ],
    tips: [
      "Запускай ноду на выделенном канале — shared WiFi редко тянет sustained upload для streaming rewards.",
    ],
    warnings: [
      "Token rewards на DePIN колеблются с utilization сети — не покупай hardware только по peak APR calculator.",
    ],
  },
  mayan: {
    short:
      "Cross-chain swap aggregator — быстрые переводы и обмены через Wormhole и Solana для multi-chain users.",
    long:
      "Mayan Finance (mayan.finance) — cross-chain DEX aggregator: обмены и мост активов между Ethereum, Solana и Wormhole-connected chains с competitive routing.",
    tagline: "Cross-chain swaps через Wormhole routing.",
    highlight:
      "Mayan работает в слое bridge aggregator: сравнивает маршруты, использует Wormhole messaging, оптимизирует скорость и стоимость vs canonical bridges. Интегрирован в Jupiter и другие UI для Solana-origin flows. Bridge risk остаётся — smart contract, relayer и wrapped asset assumptions. Для пользователей, часто переводящих stablecoins и majors между chains. Всегда сравнивай с native bridge для крупных сумм.",
    facts: [
      "Wormhole exploit 2022 hangover: каждый Wormhole-dependent bridge борется с дефицитом доверия — Mayan добавила insurance/partnership messaging.",
      "Cross-chain aggregator wars: Mayan vs deBridge vs Across на Solana routes — комиссии упали почти до нуля в борьбе за market share.",
      "Solana comeback 2024 разогнал Mayan volume — ETH-SOL corridor стал самым busy после восстановления от FTX collapse.",
    ],
    tips: [
      "Для крупных переводов сначала тестируй малой суммой — адрес destination token должен совпадать с expected wrapper.",
    ],
    warnings: [
      "Bridge hacks исторически стоили billions — diversify bridge usage, не держи wrapped funds долго.",
    ],
  },
  megaeth: {
    short:
      "MegaETH testnet — high-performance Ethereum L2 с extreme throughput для stress-test и раннего доступа разработчиков.",
    long:
      "MegaETH (testnet.megaeth.com) — experimental L2 с высоким TPS и низкой latency на Ethereum security model. Testnet для builders и power users.",
    tagline: "Скорость L2 следующего поколения на testnet.",
    highlight:
      "MegaETH позиционирует себя как real-time blockchain: sub-second blocks, высокий throughput для demanding apps — игры, платежи, on-chain order books. Testnet phase: faucet, деплой контрактов, транзакции для потенциальных retroactive rewards. Под пристальным вниманием VC и L2 researchers. Конкуренция с Monad, Sei, Solana на speed narrative. Testnet instability ожидаема — не для production funds.",
    facts: [
      "MegaETH привлекла значительное funding pre-mainnet — «fastest EVM» claims разожгли benchmark wars с Monad в Crypto Twitter 2024.",
      "Testnet TPS marketing vs реальные user txs: synthetic load tests достигали 100k TPS, wallet sends всё ещё в очереди во время hype events.",
      "Performance L2 token launches 2025 crowded — MegaETH конкурирует с дюжиной chains за одну и ту же когорту airdrop farmers.",
    ],
    tips: [
      "Разработчикам: деплой простого контракта + sustained usage лучше one-click faucet grab для potential recognition.",
    ],
    warnings: [
      "Testnet state resets возможны — не считай testnet assets permanent proof без backups.",
    ],
  },
  meteora: {
    short:
      "Solana DLMM DEX — concentrated liquidity bins, dynamic fees и yield для LP на самой активной chain memecoin era.",
    long:
      "Meteora (app.meteora.ag) — ведущая Solana DEX с Dynamic Liquidity Market Maker: bin-based LP, vaults, alpha pools и launch integrations.",
    tagline: "Concentrated liquidity engine для Solana.",
    highlight:
      "Meteora стала core Solana DeFi infra post-FTX: DLMM позволяет LP выбирать price ranges как Uniswap v3, но с bin mechanics под волатильные мемкоины. Vaults, dynamic pools и Jupiter-интеграции гонят volume. MET token и points seasons привлекли farmers. High yield = высокий IL risk на токсичных парах. Для опытных Solana LP-игроков и launch snipers, не для set-and-forget stablecoin farming.",
    facts: [
      "Memecoin supercycle 2024 на Solana: Meteora volume сравнялся с Raydium — DLMM bins идеальны для отлова launch volatility.",
      "MET airdrop speculation подогрела wash LP — команды ужесточили sybil detection перед утечками о snapshot.",
      "Dynamic fee pools во время launch week приносили LP 1000%+ APR — на следующей неделе тот же пул получал токсичный IL от -90% обвала токена.",
    ],
    tips: [
      "На DLMM narrow bins умножают IL — расширяй range или используй vaults, если не управляешь позицией активно.",
    ],
    warnings: [
      "Новые token pools могут быть rug pulls — проверь mint authority revoked и что liquidity не контролируется одним wallet.",
    ],
  },
  metri: {
    short:
      "DeFi portfolio dashboard — трекинг позиций, yield и health metrics across chains в unified UI.",
    long:
      "Metri (app.metri.xyz) — analytics и portfolio app для Web3: wallet aggregation, DeFi position tracking, alerts и insights.",
    tagline: "Единый дашборд DeFi-позиций и yield.",
    highlight:
      "Metri подключает wallets read-only и показывает DeFi exposure: lending health, LP IL estimates, staking rewards across supported chains. Конкурирует с Zapper, DeBank, Rotki. Ценность для пользователей с разбросанными позициями, которым нужен single-pane view перед ребалансировкой. Не кастодиальное решение — подключай кошелёк осторожно, проверяй domain app.metri.xyz. Premium features могут включать advanced analytics или tax exports.",
    facts: [
      "Portfolio tracker sector post-DeFi summer: Metri и конкуренты борются за default bookmark — integrations важнее UI polish.",
      "Read-only wallet connect всё ещё рискует malicious signature requests, если UI compromised — всегда проверяй transaction preview.",
      "Tax season вызывает spikes трафика в 3x — трекеры падают под нагрузкой, stale prices вводят в заблуждение при ребалансировке.",
    ],
    tips: [
      "Используй burner wallet для первого connect test, если сомневаешься в легитимности — или проверь через официальный Twitter link.",
    ],
    warnings: [
      "Dashboard APY estimates часто gross, не net of IL и fees — не полагайся слепо на финансовые решения.",
    ],
  },
  mezo: {
    short:
      "Bitcoin DeFi chain — economic layer для BTC holders от Thesis с tBTC и native Bitcoin apps.",
    long:
      "Mezo (mezo.org) — Bitcoin-aligned L1/L2 из Thesis ecosystem: tBTC integration, borrowing, earning на BTC без продажи.",
    tagline: "Bitcoin economic layer для yield и apps.",
    highlight:
      "Mezo расширяет Bitcoin beyond store of value: залочь BTC (через tBTC и партнёров), доступ к DeFi примитивам под Bitcoin culture — longer time preference, другой UX чем Ethereum degen defaults. Thesis pedigree (Keep tBTC) добавляет credibility против случайных BTC L2. Early mainnet/testnet phases с incentives для BTC depositors. Custody и bridge assumptions наследуют tBTC model — читай документацию.",
    facts: [
      "Bitcoin L2/L1 explosion 2024–2025: Mezo, Stacks, Core, Bitlayer — «real Bitcoin DeFi» marketing war за одних и тех же HODL-еров.",
      "Thesis tBTC history: годы разработки до scale — Mezo делает ставку, что community доверяет бренду больше новых BTC wrappers.",
      "BTC maxi skepticism: «не трогай свои монеты» vs chasers за yield — Mezo целится в прагматичную середину.",
    ],
    tips: [
      "Сравни Mezo BTC yield с opportunity cost чистого self-custody — net APY после всех fees и bridge costs.",
    ],
    warnings: [
      "Любой BTC на non-native chain wrapped — smart contract и bridge risk applies к «Bitcoin DeFi».",
    ],
  },
  miden: {
    short:
      "Miden rollup — ZK-optimized execution environment для high-throughput apps с privacy-friendly design.",
    long:
      "Miden (miden.xyz) — ZK rollup stack originally from Polygon lineage, focused on client-side proving и scalable private execution.",
    tagline: "Client-side proofs и scalable execution на ZK rollup.",
    highlight:
      "Miden использует STARK-based VM для efficient proving: пользователи могут генерировать proofs client-side, снижая server bottleneck. Целится в payments, gaming и enterprise workflows, которым нужны scale + auditability. Developer-focused stage: testnet, Miden Assembly language, grants. Для ZK-инженеров и ранних testnet-участников. Evolution from Polygon Miden до independent roadmap — следи за официальными каналами для network status.",
    facts: [
      "Polygon выделила multiple ZK projects 2023–2024 — Miden identity отделена от zkEVM, confusing для экосистемных аутсайдеров.",
      "Client-side proving снижает server costs, но переносит вычисления на user device — mobile proving всё ещё immature.",
      "ZK rollup token speculation: testnet txs без токена ≠ будущая allocation — Miden farmers среди наиболее sophisticated sybil.",
    ],
    tips: [
      "Разработчикам: Miden tutorials вознаграждают working circuits/programs больше, чем empty wallet txs.",
    ],
    warnings: [
      "ZK tooling — steep learning curve; временные инвестиции могут не окупиться, если mainnet timeline сдвинется на годы.",
    ],
  },
  midl: {
    short:
      "Bitcoin DeFi protocol — smart contracts и financial primitives, нативно закреплённые на безопасности Bitcoin.",
    long:
      "Midl (midl.xyz) — платформа, приносящая DeFi в Bitcoin ecosystem: lending, swaps или structured products с Bitcoin как base layer.",
    tagline: "DeFi примитивы на Bitcoin rails.",
    highlight:
      "Midl участвует в BTCFi волне: финансовые приложения без выхода из Bitcoin narrative. Реализация может использовать L2, sidechain или metaprotocol — проверь архитектуру в документации. Ранние пользователи bridge или wrap BTC, взаимодействуют с dApps, добывают points. Переполненный сектор с protocol risk — отличай Midl, читая technical design, а не marketing slogans.",
    facts: [
      "Bitcoin DeFi naming collision: Midl vs Mezo vs Merlin — пользователи путают домены, фишинг процветает на схожести.",
      "Ordinals и Runes hype 2024 оттянул dev attention — BTC DeFi протоколы конкурировали за один и тот же ограниченный пул разработчиков.",
      "Wrapper liquidity fragmentation: BTC на 10 chains, ни на одной нет Ethereum-level глубины — боль slippage реальна для крупных размеров.",
    ],
    tips: [
      "Выясни, какое именно BTC-представление использует Midl — разные wrappers, разные trust assumptions.",
    ],
    warnings: [
      "Новые BTC DeFi протоколы — высокий risk; исходи из незрелости smart contract до multiple audits и времени на mainnet.",
    ],
  },
  milkyway: {
    short:
      "Liquid staking hub — restaking и LST aggregation для modular Cosmos и emerging PoS ecosystems.",
    long:
      "MilkyWay (milkyway.zone) — liquid staking protocol across modular blockchains: вкладывай, получай milk* LST токены, используй в DeFi и restaking modules.",
    tagline: "Liquid staking для modular PoS chains.",
    highlight:
      "MilkyWay таргетирует interchain staking: депозит на поддерживаемых chains, liquid receipt token, участие в restaking narratives (EigenLayer-style на Cosmos). Zone hub для нескольких network deployments. Points и TGE speculation разогнали early TVL. Slashing cascades и depeg risks на молодых LST — стандартные предупреждения применимы. Для natives экосистем Cosmos/modular.",
    facts: [
      "Modular staking 2024: MilkyWay, Stride, pStake конкурировали на Celestia/Initia ecosystems — путаница с LST ticker rampant.",
      "Restaking на Cosmos менее зрелый, чем EigenLayer — tail risk плохо priced в headline APR.",
      "Airdrop farmers ротировали LST между протоколами еженедельно — TVL мерценари, sticky users редки.",
    ],
    tips: [
      "Следи за exchange rate milk LST — медленный depeg хуже резкого, сигнализирует о creeping insolvency.",
    ],
    warnings: [
      "Restaking slashing ещё не fully observed в production — историческая safety LST ≠ будущая guarantee.",
    ],
  },
  minara: {
    short:
      "AI crypto assistant — чат-интерфейс для research, trading insights и on-chain analysis с referral onboarding.",
    long:
      "Minara (minara.ai) — AI-powered crypto copilot: market analysis, token research, portfolio Q&A и workflow automation для трейдеров.",
    tagline: "Crypto research и trading assistant на базе AI.",
    highlight:
      "Minara оборачивает LLM-возможности для crypto natives: спрашивай про tokens, narratives, risks; получай синтезированные ответы с optional data hooks. Referral codes в URL (напр. home?code=...) — типичная петля роста. Не financial advice — риски галлюцинаций модели и stale data. Конкурирует с Kaito, Cookie, специализированными Telegram-ботами. Полезен для ускорения research, опасен при слепом копировании trade ideas.",
    facts: [
      "AI crypto assistants 2024–2025: поток продуктов, у единиц — proprietary data moats — Minara в переполненном пространстве «ChatGPT for crypto».",
      "Referral code войны: инфлюенсеры толкают Minara codes — рост платформы привязан к выплатам KOL, а не к organic product love.",
      "LLM давали wrong token addresses во множестве crypto bots по всей индустрии — одна опечатка = необратимая отправка.",
    ],
    tips: [
      "Всегда проверяй contract addresses и prices on-chain или через CoinGecko — не доверяй AI output alone для транзакций.",
    ],
    warnings: [
      "AI responses не investment advice — модели убедительно выдумывают citations и метрики.",
    ],
  },
  mira: {
    short:
      "Mira Network — decentralized AI inference и verifiable ML workloads на blockchain infrastructure.",
    long:
      "Mira Network (mira.network) — AI x crypto protocol: distributed inference, model serving rewards и proof of contribution для node operators.",
    tagline: "Верифицируемый AI inference on-chain.",
    highlight:
      "Mira объединяет AI compute marketplace с crypto incentives: providers запускают модели, пользователи платят в tokens, verification layer гарантирует качество. Narrative overlaps DePIN и AI agents. Early testnet/mainnet с points для operators и users. GPU requirements для серьёзного участия. Sector hype экстремален — due diligence на actual inference demand vs token emissions.",
    facts: [
      "Decentralized AI compute 2024: Mira, io.net, Ritual, Sentient — «NVIDIA on blockchain» на всех слайдах, utilization часто <20%.",
      "Model piracy и licensing: serving GPT-class моделей на crypto networks поднимает legal questions, редко встречающиеся в pitch decks.",
      "Points farming с fake inference jobs — протоколы борются с sybil через attestation и benchmark tasks.",
    ],
    tips: [
      "Node operators: считай GPU depreciation vs token rewards — многие DePIN ноды убыточны при розничных ценах на электричество.",
    ],
    warnings: [
      "AI crypto tokens highly speculative — revenue fundamentals часто lag narrative на годы.",
    ],
  },
  moca: {
    short:
      "Moca Network — identity и reputation layer от Animoca для interoperable digital ID across games и Web3.",
    long:
      "Moca Network (moca.network) — AIR (Account, Identity, Reputation) инфраструктура: portable credentials, loyalty и verification across Animoca ecosystem и partners.",
    tagline: "Portable identity для gaming Web3.",
    highlight:
      "При поддержке Animoca Brands, Moca стремится быть identity rails для gaming и open metaverse: одна репутация across titles, KYC-lite опции для compliant apps, партнёрские интеграции. MOCA token для governance и incentives. Realm Points и partner quests разогнали adoption pre-TGE. Для gamers и NFT collectors уже в орбите Animoca. Privacy и data portability компромиссы — читай policy.",
    facts: [
      "Animoca identity play: Moca vs традиционные gaming accounts — ставка на monetary value cross-game репутации.",
      "MOCA token launch 2024: держатели Animoca ecosystem ожидали allocation — дебаты о insider vs community split.",
      "Identity networks cold start problem: ценность пропорциональна партнёрским приложениям — chicken and egg до онбординга AAA.",
    ],
    tips: [
      "Привязывай только wallets, которые хочешь связать с public reputation — identity permanent on-chain.",
    ],
    warnings: [
      "Portable identity = portable surveillance — понимай, к каким data получают доступ партнёры.",
    ],
  },
  mode: {
    short:
      "Mode Network — OP Stack L2 с incentives для developers и users, фокус на DeFi и NFT growth на Ethereum rollup.",
    long:
      "Mode (app.mode.network) — Ethereum L2 на OP Stack: low fees, sequencer revenue sharing, airdrop campaigns и ecosystem grants.",
    tagline: "OP Stack с rewards для ecosystem growth.",
    highlight:
      "Mode отличился sequencer fee sharing для приложений и агрессивными points-программами (Early Mode). DeFi, NFT и social apps деплоятся ради дешёвого газа. MODE token post-airdrop: governance и incentives. Bridge from Ethereum, используй ecosystem dApps, добывай ответственно, зная что мерценарный капитал вращается быстро. Стандартизация OP Stack = лёгкий dev onboarding, но и copy-paste конкуренты.",
    facts: [
      "Mode airdrop March 2024: активные пользователи получили MODE — post-TGE TVL упал, когда farmers мигрировали на следующий L2 points season.",
      "Sequencer revenue sharing — новинка при запуске; немногие приложения заработали meaningful share без top-tier volume.",
      "Superchain membership: Mode пользуется OP collective upgrades — также разделяет narrative fatigue с Base, Zora, другими OP L2.",
    ],
    tips: [
      "Проверяй official app.mode.network/early для current incentive programs — правила меняются каждый season.",
    ],
    warnings: [
      "L2 points farming переполнен — gas и time cost могут превысить стоимость token allocation после TGE dump.",
    ],
  },
  "monad-fantasy-top": {
    short:
      "Fantasy Top на Monad — trading card game с crypto-native механиками на хайповой L1 testnet/community.",
    long:
      "Monad Fantasy Top (monad.fantasy.top) — fantasy card/trading game, интегрированная с Monad ecosystem: собирай, соревнуйся, получай on-chain rewards.",
    tagline: "Карточная игра на хайповой chain Monad.",
    highlight:
      "Fantasy Top катается на хайпе Monad-сообщества: карточные механики, таблицы лидеров, потенциальные NFT-карты и token rewards. Social/competitive петля для верующих в Monad во время ожидания pre-mainnet. Не core Monad инфраструктура — community/game слой. Типичные crypto game риски: неустойчивые token rewards, низкая retention post-airdrop. Весело, если любишь TCG и уже Monad-ориентирован.",
    facts: [
      "Monad ecosystem игры pre-mainnet: десятки запущены на subdomain — большинство заброшено в течение месяцев после запуска.",
      "Fantasy card crypto games 2024: Parallel, Otherside миниигры — retention <5% после завершения начального airdrop quest.",
      "Таблицы лидеров sybil с ботами — команды игр сбрасывают seasons, когда farming становится очевидным.",
    ],
    tips: [
      "Считай in-game assets спекулятивными — не переплачивай на secondary, не поняв sink mechanics.",
    ],
    warnings: [
      "Контракты неаудированных игр — депозить только то, что можешь потерять полностью.",
    ],
  },
  "monad-monad-xyz": {
    short:
      "Monad testnet — высокопроизводительная parallel EVM L1 testnet для devs и airdrop hunters перед mainnet.",
    long:
      "Monad testnet (testnet.monad.xyz) — публичный testnet parallel execution Ethereum-совместимой L1. Faucet, деплой, stress test перед mainnet launch.",
    tagline: "Parallel EVM на скорости, которую ждали.",
    highlight:
      "Monad сгенерировала massive anticipation: parallel execution, optimistic parallelization, заявления о высоком TPS на совместимом EVM байткоде. testnet.monad.xyz — официальный faucet и точка входа в сеть. Разработчики деплоят Solidity; пользователи гоняют транзакции для потенциальных retroactive rewards. Возможны сбросы сети и изменения правил. Доминирующий narrative в 2024-2025 L1 hype cycle наряду с MegaETH. Нет mainnet = нет production funds.",
    facts: [
      "Monad привлекла $225M+ — одна из наиболее профинансированных L1 до запуска, давление deliver mainnet performance, matching benchmarks.",
      "Testnet sybil industrial complex: фирмы продавали пакеты «Monad wallet activity» — команда явно боролась с wash txs.",
      "Parallel EVM debugging сложнее для разработчиков — subtle race conditions, невидимые на sequential Ethereum.",
    ],
    tips: [
      "Следи за официальным Monad Discord для faucet updates — публичные faucets drained за минуты во время hype spikes.",
    ],
    warnings: [
      "Scam-сайты имитируют testnet.monad.xyz — bookmark official URL, не импортируй seed в неизвестный faucet.",
    ],
  },
  morph: {
    short:
      "Morph L2 — consumer-friendly Ethereum rollup с low fees и UX focus для mass adoption dApps.",
    long:
      "Morph (morph.network) — Ethereum L2 с акцентом на consumer UX: дешёвые транзакции, партнёрства с fiat on-ramps, дружественный онбординг для non-crypto natives.",
    tagline: "Ethereum scaling для mainstream UX.",
    highlight:
      "Morph дифференцируется на consumer positioning против pure DeFi L2: payments, social, gaming сценарии с упрощёнными wallet flows. Tech stack гибридный — проверяй документацию для current architecture (Optimistic/ZK components развивались). Ecosystem incentives для разработчиков, строящих consumer apps. Конкурирует с Base, Scroll на narrative «easy Web3». Bridge from Ethereum, исследуй dApp store.",
    facts: [
      "Consumer L2 positioning 2024: Morph, Base, LightLink — борются за slogan «next billion users».",
      "Morph mainnet milestones отслеживались против funding — задержка в consumer apps = сдвиг narrative к infra-only.",
      "Fiat on-ramp partnerships варьируются по региону — «глобальный consumer L2» часто geo-restricted на практике.",
    ],
    tips: [
      "Разработчикам: consumer dApps нуждаются в mobile-first — desktop-only не попадёт в stated target audience Morph.",
    ],
    warnings: [
      "New L2 bridge contracts — проверяй official bridge URL на morph.network перед крупными переводами.",
    ],
  },
  morpho: {
    short:
      "Morpho — lending optimizer поверх Aave/Compound с P2P matching для лучших rates и Morpho Blue isolated markets.",
    long:
      "Morpho (morpho.org) — DeFi lending layer: Morpho Optimizers улучшают rates на blue-chip markets; Morpho Blue enables permissionless isolated lending markets.",
    tagline: "Лучшие lending rates через P2P matching.",
    highlight:
      "Morpho sits между users и base protocols: unmatched borrow demand matched peer-to-peer для лучших ставок, fallback to pool liquidity. Morpho Blue — modular lending primitive с isolated markets, ограничивающими contagion risk. Интегрированные wallets и aggregators. MORPHO token для governance. Institutional и retail supply/borrow. Smart contract risk смягчён аудитами и battle-tested deployments, но Blue markets варьируются по curator quality.",
    facts: [
      "Morpho TVL crossed $2B+ 2024 — одна из немногих DeFi infra побед во время bear market, Coinbase и другие интегрировались.",
      "Morpho Blue launch: permissionless markets enabled exotic collateral — некоторые markets illiquid с oracle risk.",
      "P2P matching idle большинство часов на long-tail assets — улучшение ставок реально на ETH/USDC majors, marginal на alts.",
    ],
    tips: [
      "На Morpho Blue проверяй market curator, oracle type и LLTV перед supplying exotic collateral.",
    ],
    warnings: [
      "Isolated markets всё ещё могут получить bad debt, если oracle fails — не все markets equal risk, несмотря на shared brand.",
    ],
  },
  movementlabs: {
    short:
      "Movement Labs — Move VM L2, приносящая Aptos/Sui-style безопасность в Ethereum ecosystem via fast finality rollup.",
    long:
      "Movement Labs (movementlabs.xyz) — разрабатывает Movement Network: Move language execution на Ethereum-connected инфраструктуре, testnet и dev programs.",
    tagline: "Move VM в Ethereum ecosystem.",
    highlight:
      "Movement ставит на то, что Move VM resource model предотвращает целые классы багов, мучающих Solidity. Двойное подключение к Ethereum для liquidity и Move для dev experience. Testnet phases, hackathons, ожидание MOVE token. Разработчики из экосистем Aptos/Sui — естественные мигранты. Bridge, деплой Move contracts, добывай testnet ответственно. Конкуренция с native Move chains и EVM stalwarts.",
    facts: [
      "Movement raised $38M+ Series A — Move on Ethereum narrative поляризующий: пуристы говорят оставаться native, прагматики хотят ETH liquidity.",
      "Testnet Move-Eth bridge bugs распространены на ранних этапах — команды приостанавливают bridge во время инцидентов, пользователи stuck часами.",
      "MOVE token airdrop speculation гнала bot traffic — Movement ужесточила proof-of-human для faucets.",
    ],
    tips: [
      "Solidity разработчикам, изучающим Move: resource model инвертирует паттерны — заложи время на Move tutorial перед деплоем.",
    ],
    warnings: [
      "Cross-VM bridges historically high exploit surface — не паркуй крупную ликвидность в testnet bridge.",
    ],
  },
  multipli: {
    short:
      "Multipli — yield aggregation и structured products для crypto capital с акцентом на sustainable returns.",
    long:
      "Multipli (multipli.fi) — DeFi yield platform: curated strategies, vaults или staking products, combining multiple revenue sources.",
    tagline: "Structured yield для crypto capital.",
    highlight:
      "Multipli упаковывает сложные yield strategies в более простые user flows: депозит stablecoins или majors, протокол маршрутизирует в lending, LP, incentives. Прозрачность composition strategies критична — читай vault docs. Доходность отражает риски underlying protocols. Конкурирует с Yearn, Beefy на specific chains. Не безрисковые сбережения — smart contract, strategy и depeg risks наслаиваются.",
    facts: [
      "Yield aggregator sector post-2022: выжившие акцентируют risk grading — Multipli в когорте, восстанавливающей trust после Celsius/BlockFi trauma.",
      "Structured product yields часто включают token emissions — real yield fraction раскрывается редко в headline APY.",
      "Vault strategy changes без user vote — governance trust issue, повторяющееся across aggregators.",
    ],
    tips: [
      "Проверяй, какие протоколы использует vault — если одна нога obscure fork, treat APY as risk premium.",
    ],
    warnings: [
      "Past yield не guarantee future — strategy, работающая в bull, может bleed в bear или low incentive season.",
    ],
  },
  multivmlabs: {
    short:
      "MultiVM Labs — research и infra для multi-virtual machine execution на одной chain (EVM + Move + WASM).",
    long:
      "MultiVM Labs (multivmlabs.com) — строит инфраструктуру, позволяющую multiple VM types на shared blockchain security и state layer.",
    tagline: "Одна chain, много virtual machines.",
    highlight:
      "MultiVM thesis: разработчики выбирают лучшую VM для use case без фрагментации ликвидности между цепями. Technical research intensive — testnets, grants, developer docs. Early stage infra play для sophisticated builders и VC, ставящих на VM abstraction trend. Synergy с Movement, Polygon multi-VM narratives. Участие через dev programs, не consumer app.",
    facts: [
      "Multi-VM narrative 2024–2025: каждая L1 заявляет «VM agnostic» — execution fragmentation problem не решена индустрией.",
      "Cross-VM contract calls latency выше маркетинговых слайдов — composability tradeoffs реальны.",
      "Labs-stage projects часто acqui-hired до token — MultiVM path uncertain для airdrop hunters.",
    ],
    tips: [
      "Следи за GitHub activity, а не Twitter hype — ценность infra в commits, не в AMA.",
    ],
    warnings: [
      "Experimental architecture — исходи из breakage на testnet, без production financial dependencies.",
    ],
  },
  myriad: {
    short:
      "Myriad Markets — prediction markets платформа для ставок на события с on-chain settlement и market discovery.",
    long:
      "Myriad (myriad.markets) — decentralized prediction markets: создавай и торгуй outcome shares на politics, crypto, sports и custom events.",
    tagline: "Ставки на события on-chain.",
    highlight:
      "Myriad даёт Polymarket-style потоки на своей инфраструктуре: страницы markets, цены от AMM или order book, USDC settlement. Referral links в URL отслеживают affiliates. Regulatory landscape для prediction markets различается — могут применяться geo restrictions. Для пользователей, ищущих event-driven trading exposure. Проверяй market resolution sources и dispute process перед крупными ставками.",
    facts: [
      "Prediction market boom вокруг US elections 2024: volume на всех платформах surged — Myriad поймала wave с niche markets.",
      "Long-tail market liquidity thin — slippage на obscure events хуже, чем на Polymarket majors.",
      "Resolution disputes на decentralized markets: UMA-style oracle delays payout — capital locked во время dispute window.",
    ],
    tips: [
      "Читай resolution criteria буквально — ambiguous wording вызывала потери на множестве prediction platforms по всей индустрии.",
    ],
    warnings: [
      "Prediction markets могут быть illegal или restricted в твоей jurisdiction — compliance на пользователе.",
    ],
  },
  myshell: {
    short:
      "MyShell — платформа для создания и монетизации AI agents и voice bots с crypto-native ownership layer.",
    long:
      "MyShell (myshell.ai) — AI consumer platform: создавай chatbots, voice agents, делись в marketplace, token incentives для creators и users.",
    tagline: "Создавай и монетизируй AI agents.",
    highlight:
      "MyShell демократизирует создание ботов без heavy coding: templates, voice cloning (в рамках policy), Shell NFT/agent ownership. Crypto слой для credits, rewards, потенциальный token SHELL. Взорвалась в AI agent meta 2024 наравне с Character.ai Web3-конкурентами. Качество варьируется по creator — marketplace discovery сложный. Privacy concerns с voice data — читай terms.",
    facts: [
      "MyShell user growth 2024: millions registered — retention debated; многие пользователи farm points, затем churn.",
      "SHELL token TGE watched как барометр для AI agent sector — sector correlation высокая.",
      "Voice cloning abuse headlines: платформы, включая MyShell, ужесточили moderation после deepfake инцидентов.",
    ],
    tips: [
      "Popular agents копируются — проверяй official creator перед переплатой за «exclusive» bot.",
    ],
    warnings: [
      "Voice и persona NFTs могут нарушать celebrity IP — legal risk для buyers и creators.",
    ],
  },
  n1: {
    short:
      "N1 blockchain — high-performance L1 с фокусом на low latency financial applications и on-chain order books.",
    long:
      "N1 (n1.xyz) — next-gen L1, нацеленная на trading и финансовые нагрузки: быстрая finality, native order book или high-throughput execution.",
    tagline: "L1 для on-chain finance и speed.",
    highlight:
      "N1 продаёт performance для DeFi-native apps: perps, spot CLOB, платежи, требующие детерминированной низкой задержки. Testnet/mainnet phases с developer grants. Конкурирует с Sei, dYdX chain, Hyperliquid L1 narrative. Раннее участие через testnet транзакции и ecosystem apps. Token speculation — стандарт для невыпущенной L1. Проверяй technical claims против independent benchmarks, не только internal demos.",
    facts: [
      "Financial L1 specialization 2024: N1, Sei v2, Hyperliquid L1 — переполненная ниша trade execution.",
      "On-chain order book chains заявляют CEX-like speed — mobile wallet UX всё ещё отстаёт от Binance.",
      "Testnet trading competitions с prize pools привлекают wash volume — метрики завышены pre-mainnet.",
    ],
    tips: [
      "Разработчикам: financial apps нуждаются в надёжных oracle — интегрируй multiple sources на N1 заранее.",
    ],
    warnings: [
      "Токены незапущенных L1 неликвидны на pre-markets — pre-market pricing манипулируем insiders.",
    ],
  },
  nado: {
    short:
      "Nado perpetuals — on-chain фьючерсное trading приложение с leverage на supported L2 infrastructure.",
    long:
      "Nado (app.nado.xyz/perpetuals) — perp DEX интерфейс: long/short crypto assets, funding rates, portfolio management on-chain.",
    tagline: "Leverage trading без CEX custody.",
    highlight:
      "Nado.perpetuals предлагает стандартный perp DEX набор функций: margin, ползунок leverage, liquidation prices, PnL tracking. Развёртывание на chain и глубина ликвидности определяют usability — проверяй open interest перед входом в позицию. Points или referral programs могут стимулировать volume. Тот же risk profile, что у GMX/Hyperliquid: oracle manipulation, liquidation cascades, smart contract bugs. Только для experienced derivatives traders.",
    facts: [
      "Perp DEX launch rate 2024–2025: новая площадка еженедельно — Nado борется за liquidity в long tail.",
      "Funding rate арбитраж привлекает pros — розница платит funding, неосознанно держа популярную сторону переполненных сделок.",
      "app.nado.xyz phishing clones появились в течение недель после traffic spike — bookmark official link.",
    ],
    tips: [
      "Используй isolated margin, если доступен — cross margin на volatile alt-ах ликвидирует весь счёт быстрее.",
    ],
    warnings: [
      "Leverage усиливает потери — движение на 10x против тебя стирает margin; нет recourse в отличие от TradFi broker.",
    ],
  },
  nexira: {
    short:
      "Nexira AI — Web3-native AI платформа, combining generative tools с blockchain rewards и data ownership hooks.",
    long:
      "Nexira (nexira.ai) — AI x crypto продукт: generative features, agent workflows, потенциальный tokenized access или contributor rewards.",
    tagline: "Generative AI с Web3 incentives.",
    highlight:
      "Nexira позиционируется в насыщенном AI+crypto рынке: differentiated features TBD — изучи platform docs для текущего состояния. Может включать text/image generation, crypto-specific fine-tuning, points for usage. Ранний продукт — ожидай быстрой итерации. Сравни с MyShell, Minara, Kaito перед инвестицией времени. Не financial advice от AI outputs.",
    facts: [
      "AI platform launch rate 2024: сотни — Nexira конкурирует за внимание без Big Tech бюджетов.",
      "Crypto AI tokens в среднем -80% от ATH post-TGE — общесекторально, не обязательно project-specific.",
      "Data ownership marketing часто сводится к standard ToS на практике — читай legal, не claims на лендинге.",
    ],
    tips: [
      "Сначала free tier — оцени output quality перед подпиской или покупкой platform token.",
    ],
    warnings: [
      "AI-generated investment content unreliable — не исполняй trades с выхода Nexira без верификации.",
    ],
  },
  nexus: {
    short:
      "Nexus Network — verifiable compute и distributed proving инфраструктура для ZK и general workloads.",
    long:
      "Nexus (nexus.xyz) — decentralized compute network: node operators предоставляют proof generation и computation, клиенты платят за verifiable work.",
    tagline: "Verifiable compute network для ZK era.",
    highlight:
      "Nexus целится в bottleneck ZK adoption — дорогую proof generation — через distributed prover network. Разработчики отправляют jobs, сеть возвращает proofs для on-chain verification. DePIN встречает ZK infra. Node operators нуждаются в серьёзном hardware; пользователи включают L2 и dApps. Token incentives для early network bootstrap. Конкурирует с Succinct prover network, Gevulot и другими.",
    facts: [
      "Prover network meta 2025: Nexus привлекла funding наряду с peers — победителю нужны paying customers, не только node count.",
      "GPU shortage cycles влияют на prover economics — AWS spot дешевле home rig во время bear.",
      "Verifiable compute бесполезен, если клиент не верифицирует on-chain — integration burden на разработчиках тормозит adoption.",
    ],
    tips: [
      "Node operators: мониторь job queue utilization — idle hardware earns nothing, несмотря на APR calculators.",
    ],
    warnings: [
      "Early network tokens волатильны — hardware ROI calculations часто устаревают за недели.",
    ],
  },
  noble: {
    short:
      "Noble Chain — Cosmos appchain для native stablecoin issuance и RWA dollars across IBC ecosystem.",
    long:
      "Noble (noble.xyz) — Cosmos SDK chain, purpose-built для tokenized dollars (USDC native issuance) и asset forwarding over IBC.",
    tagline: "Native stablecoins для Cosmos IBC.",
    highlight:
      "Noble решил fragmented bridged USDC на Cosmos: native mint через Circle partnership, IBC forwarding к Osmosis, Celestia, dYdX chain и другим. Essential infra для Cosmos DeFi — ликвидность заходит через Noble. NOBL token опционален для governance/fees в зависимости от roadmap. Для Cosmos пользователей Noble — plumbing, не speculation — но token traders существуют. Доверяй Circle + Noble validator set для целостности USDC.",
    facts: [
      "Noble USDC launch transformed Cosmos DeFi 2023 — до Noble bridged stablecoins доминировали с худшим UX.",
      "IBC channel failures во время upgrades замораживают USDC — CosmWasm/Osmosis инциденты научили пользователей держать buffer gas tokens.",
      "RWA expansion на Noble 2024–2025: tokenized assets beyond USDC — regulatory framing careful.",
    ],
    tips: [
      "При IBC transferring USDC проверяй channel status на mintscan — paused channels временно strand funds.",
    ],
    warnings: [
      "IBC bridges менее знакомы Ethereum пользователям — wrong memo или channel = delayed recovery support tickets.",
    ],
  },
  nodeops: {
    short:
      "NodeOps Network — marketplace и инструментарий для деплоя blockchain nodes across multiple networks с одним интерфейсом.",
    long:
      "NodeOps (nodeops.network) — упрощает запуск validator, RPC и testnet нод: monitoring, updates, multi-chain dashboard для operators.",
    tagline: "Управление blockchain-нодами из одного hub.",
    highlight:
      "NodeOps целится в профессиональных и полупрофессиональных node runners, уставших от жонглирования скриптами per chain. Подписная или token-модель для automation, alerts, one-click deploy templates. Конкурирует с Allnodes, institutional bare metal. Полезен для testnet farmers, масштабирующихся на много сетей, и реальных валидаторов, ищущих ops инструментарий. Security critical — NodeOps credentials защищают ценные ключи.",
    facts: [
      "Node operator tooling market рос с L1 proliferation — NodeOps vs DIY Ansible scripts компромисс.",
      "Testnet node farms для airdrops: операторы запускали 50+ цепей — инструменты типа NodeOps стали necessity.",
      "Компрометация centralized node management dashboard = multi-chain катастрофа — honeypot для атакующих.",
    ],
    tips: [
      "Используй 2FA и separate keys per network даже с unified dashboard — containment радиуса поражения.",
    ],
    warnings: [
      "Не загружай validator private keys в untrusted SaaS — проверь NodeOps security model и audits.",
    ],
  },
  nodepay: {
    short:
      "NodePay — DePIN сеть, вознаграждающая users за sharing bandwidth и compute через browser extension или app.",
    long:
      "NodePay (app.nodepay.ai) — децентрализованный обмен bandwidth и ресурсами: установи клиент, делись idle capacity, зарабатывай points/tokens.",
    tagline: "Монетизация idle bandwidth через DePIN.",
    highlight:
      "NodePay следует playbook Grass, Dawn, Gradient: лёгкий клиент маршрутизирует пассивный network contribution к «AI data» или bandwidth buyers. Дашборд app.nodepay.ai трекает earnings и referrals. Sybil detection ужесточается industry-wide — multi-device farms банят. Privacy policy стоит прочитать — какой traffic идёт через твоё соединение. Earnings часто ниже electricity+expectation для розничных пользователей.",
    facts: [
      "DePIN bandwidth apps 2024–2025: NodePay, Grass, Dawn конкурировали — referral leaderboard dominated by VPN farms из Вьетнама.",
      "Corporate networks prohibit такие приложения — сотрудников увольняли за запуск bandwidth sharing на work laptops.",
      "Token TGE delays common — points holders ждали 12+ месяцев по всей индустрии, размывая энтузиазм.",
    ],
    tips: [
      "Запускай на isolated home network segment — не на машине с чувствительным corporate VPN.",
    ],
    warnings: [
      "Sharing bandwidth несёт abuse risk, если network misused — понимай liability terms в ToS.",
    ],
  },
};
