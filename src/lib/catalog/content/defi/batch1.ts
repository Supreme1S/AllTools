import type { PlatformContent } from "@/lib/catalog/content/types";

export const DEFI_BATCH_1: Record<string, PlatformContent> = {
  "10kswap": {
    short:
      "AMM на Starknet — свапы и пулы ликвидности, когда нужен нативный DEX без выхода из экосистемы.",
    long:
      "10kSwap — один из ранних DEX на Starknet с классической AMM-моделью. Подходит для базовых свапов и LP, пока экосистема L2 набирает объём.",
    tagline: "Нативный AMM Starknet — свап без моста на Ethereum mainnet.",
    highlight:
      "10kSwap работает прямо в Starknet: подключаешь ArgentX или Braavos и меняешь токены on-chain с комиссиями в STRK/ETH. Концентрированная ликвидность не заявлена — это классический пул x*y=k, понятный любому, кто торговал на Uniswap v2. Объёмы скромнее, чем на зрелом L1, но для локальных пар и ранних токенов Starknet это рабочая точка входа. Следи за impermanent loss на волатильных парах и за тем, что часть токенов может быть неликвидной.",
    facts: [
      "Гонка DEX на Starknet в 2023: 10kSwap конкурировал с JediSwap и MySwap за «первый миллиард TVL» — победил тот, кто первым раздал incentives, а не тот, у кого лучший UX.",
      "Название отсылает к мем-эре «10k swaps» — сообщество любит бренды с цифрами, даже если за ними стоит обычный fork.",
      "После airdrop STRK liquidity mining на Starknet DEX резко упал — классический паттерн «сбор наград → обвал → пустой город» на новых L2.",
    ],
    tips: [
      "Проверяй price impact на мелких парах — глубина пула на Starknet часто тонкая.",
    ],
    warnings: [
      "Неликвидные пары могут дать огромный slippage — всегда смотри превью перед подтверждением.",
    ],
  },
  "9inch": {
    short:
      "DEX на PulseChain — форк-эстетика с высоким APR на LP, когда готов к экзотике и рискам.",
    long:
      "9inch — AMM на PulseChain от команды, знакомой по 9mm и meme-брендингу 9inch. Высокие yield-цифры привлекают участников программ доходности, но риски контрагента и smart contract выше, чем на топовых DEX.",
    tagline: "DEX PulseChain — высокий APR, высокий скептицизм.",
    highlight:
      "9inch работает на PulseChain — форке Ethereum от сообщества Richard Heart. Свапы, выращивание доходности и staking через ve-token модель напоминают Solidly/Velodrome, но на менее ликвидной сети. APR на LP часто выглядит «слишком хорошо» — это либо emissions, либо impermanent loss в будущем. Для опытных активных трейдеров, которые понимают риски новых chain и неаудированных форков. Не место для капитала «поставил и забыл».",
    facts: [
      "Запуск PulseChain в 2023: DEX вроде 9inch подняли TVL на миллионы за дни — потом половина ушла с первым обвалом PLS.",
      "Соперничество 9inch vs 9mm — два DEX с похожим брендингом на одной chain; пользователи путали домены и теряли на phishing-клонах.",
      "ve(3,3) на micro-cap chain: lock на год ради 300% APR — день анлока часто страшнее любого медвежьего рынка.",
    ],
    tips: [
      "APR = emissions + fees. Считай реальный yield после IL, а не headline-цифру на UI.",
    ],
    warnings: [
      "PulseChain и fork-DEX — экзотика с повышенным риском smart contract и выхода из ликвидности.",
    ],
  },
  aave: {
    short:
      "Blue-chip lending — supply/borrow, flash loans и multi-chain деплой, когда нужен проверенный money market.",
    long:
      "Aave — один из старейших и крупнейших lending-протоколов DeFi. V3 на десятках сетей, isolated markets, flash loans и институциональный слой через Aave Arc/GHO.",
    tagline: "Стандарт DeFi lending — borrow, supply, flash loan без посредника.",
    highlight:
      "Aave V3 — эталон overcollateralized lending: кладёшь ETH, берёшь USDC, платишь variable или stable rate. Isolated markets ограничивают риск заражения на новых активах. Flash loans — killer feature для арбитража и ликвидаций без upfront capital. GHO — native stablecoin протокола. Multi-chain деплой (Ethereum, Arbitrum, Polygon, Base и др.) делает Aave хабом для yield и leverage. Health factor ниже 1 — ликвидация; следи за oracle price и LTV.",
    facts: [
      "2022: Aave отклонил bug bounty $1M от whitehat — потом тот же баг нашли другие; дискуссия об ответственном disclosure vs казна протокола навсегда в истории DeFi.",
      "Эра flash loan attack 2020–2021: flash loans Aave стали оружием и инструментом — exploits на $100M+ использовали заёмный капитал за одну транзакцию.",
      "2023: Aave DAO проголосовало за запуск на zkSync и Scroll — экспансия на L2 быстрее, чем большинство TradFi-банков успели сказать «blockchain».",
    ],
    tips: [
      "Перед borrow проверь utilization rate — на высоком utilization variable APR скачет вверх за часы.",
      "На L2 gas дешевле, но ликвидность collateral может быть тоньше — риск ликвидации выше на экзотике.",
    ],
    warnings: [
      "Ликвидация автоматическая при health factor < 1 — держи буфер, особенно на волатильном collateral.",
    ],
  },
  abs: {
    short:
      "Мост Abstract L2 — перевод активов между Ethereum и consumer L2 от экосистемы Pudgy Penguins.",
    long:
      "Abs Bridge — официальный шлюз на Abstract, L2 с фокусом на consumer crypto и gaming. Депозит с Ethereum, вывод обратно через стандартную механику rollup-моста.",
    tagline: "Вход в Abstract — мост, когда зовёт penguin L2.",
    highlight:
      "Abstract — consumer L2 от Igloo Inc (Pudgy Penguins). Abs Bridge на bridge.abs.xyz — точка входа для ETH и поддерживаемых токенов с mainnet. Как у большинства optimistic/zk rollup, депозит быстрый, вывод может занимать часы или дни через challenge period. Экосистема растёт вокруг gaming и NFT — мост нужен, если ты уже в Ethereum и хочешь on-chain активность на Abstract без CEX.",
    facts: [
      "Pivot Pudgy Penguins → Abstract L2 в 2024: NFT-коллекция стала L2-брендом — редкий случай, когда JPEG-команда строит инфраструктуру.",
      "Хайп consumer L2: TVL моста скачет в launch week и падает без sticky apps — Abstract борется за retention, а не только за airdrop программа доходностиers.",
      "Коллизия имён ABS: пользователи путали bridge.abs.xyz с другими «ABS» токенами — всегда проверяй контракт на официальном сайте.",
    ],
    tips: [
      "Для крупных сумм делай тестовую tx — UI новых L2-мостов иногда показывает устаревшие адреса контрактов.",
    ],
    warnings: [
      "Вывод с L2 на Ethereum не мгновенный — закладывай время challenge period, не последний день дедлайна.",
    ],
  },
  "across-bridge": {
    short:
      "Быстрый optimistic bridge — переводы между L2 и L1 за минуты через сеть relayer.",
    long:
      "Across — cross-chain bridge от Risk Labs с optimistic verification. Relayers авансируют капитал, пользователь получает средства быстро; disputing window защищает от мошенничества.",
    tagline: "Мост за минуты, не дни — optimistic speed с ликвидностью relayer.",
    highlight:
      "Across.to — один из самых быстрых мостов в DeFi: ETH и stablecoins между Ethereum, Arbitrum, Optimism, Base, Polygon и др. Модель: relayer даёт токены на destination сразу, потом протокол settle на origin. LP зарабатывают fees за ликвидность. Интегрирован в агрегаторы (Bungee и др.). Дешевле и быстрее canonical bridge для большинства сценариев, но trust assumptions отличаются от native rollup bridge.",
    facts: [
      "Speed wars Across vs Hop vs Stargate в 2023: Across выигрывал на ETH-маршрутах по median time — маркетинг «2 minutes bridge» стал отраслевым бенчмарком.",
      "Optimistic oracle UMA лежит в core Across — один dispute может заморозить средства relayer; драма редкая, но архитектура не волшебная.",
      "Risk Labs привлекла $10M+ — мост пережил несколько медвежьих рынков без major exploit, редкость в bridge sector.",
    ],
    tips: [
      "Сравни fee + estimated time с canonical bridge — для малых сумм Across почти всегда выигрывает.",
    ],
    warnings: [
      "Риск моста остаётся: используй официальный UI across.to, не случайные клоны агрегаторов.",
    ],
  },
  alcor: {
    short:
      "Order book DEX на Antelope (EOS/WAX) — limit orders on-chain для тех, кто помнит EOS DeFi.",
    long:
      "Alcor — децентрализованная биржа с CLOB-моделью на Antelope blockchain. Работает на WAX и других форках EOSIO — ниша, но с лояльным сообществом.",
    tagline: "On-chain order book на Antelope — старая chain, настоящие limit orders.",
    highlight:
      "Alcor.exchange — редкий зверь: полноценный order book DEX не на Ethereum. Limit и market orders on-chain на WAX/Antelope с низкими fees и быстрой финальностью. NFT и gaming tokens экосистемы WAX торгуются здесь. Ликвидность не сравнить с Uniswap, но для WAX-native assets — основная площадка. Cross-chain не core feature; это локальный DEX для локальной chain.",
    facts: [
      "Золотой век EOS DeFi 2020: Alcor и Newdex делили order flow — потом Ethereum DeFi в 100 раз обогнал их объём, но WAX community осталась.",
      "Gaming NFT на WAX: миллионы micro-transactions — Alcor ловит trade flow от Alien Worlds и подобных, не whale DeFi.",
      "Rebrand Antelope от EOSIO: Alcor пережил chain politics, которые убили половину EOS dApps.",
    ],
    tips: [
      "Для WAX tokens проверяй, что пара на Alcor — основная площадка ликвидности, а не side pool.",
    ],
    warnings: [
      "Экосистема Antelope маленькая — exit liquidity на крупных позициях может быть проблемой.",
    ],
  },
  allbridge: {
    short:
      "Multi-chain bridge — переводы между EVM, Solana, Stellar и другими сетями через единый UI.",
    long:
      "Allbridge — cross-chain bridge с поддержкой десятков сетей включая non-EVM. Native и wrapped token transfers, liquidity pools на destination.",
    tagline: "Много chain — один мост, когда токены живут везде.",
    highlight:
      "Allbridge.io соединяет Ethereum, BSC, Solana, Polygon, Avalanche, Near, Stellar и др. Модель pool-based: провайдеры ликвидности зарабатывают fees, пользователи обменивают между chain. Поддержка SPL, ERC-20 и экзотических форматов. Полезен, когда нужен маршрут, которого нет у Celer или Stargate. История включает прошлые security incidents — сообщество следит за audits и upgrades.",
    facts: [
      "Hack март 2023: Allbridge потерял ~$570K из BSC pool — протокол paused, часть средств recovered; bridge sector «ещё один» moment.",
      "Solana ↔ EVM через Allbridge был hot route до доминирования Wormhole и deBridge — speed vs trust tradeoff.",
      "Интеграция Stellar — редкий мост для XLM ecosystem в DeFi; ниша, но уникальная.",
    ],
    tips: [
      "После любого bridge incident проверяй, какие pools restored — не все chains recover одинаково.",
    ],
    warnings: [
      "Cross-chain bridges — top attack vector в DeFi; не гоняй через bridge больше, чем готов потерять.",
    ],
  },
  altura: {
    short:
      "Perp и spot trading — leveraged positions и markets для активных трейдеров.",
    long:
      "Altura Trade — торговый интерфейс с perpetual и spot markets. Фокус на execution и leverage для пользователей, которым нужен terminal-style UX.",
    tagline: "Торговля с leverage — perp terminal для активных активных трейдеров.",
    highlight:
      "Altura на app.altura.trade предлагает perpetual contracts и spot trading в едином интерфейсе. Leverage, funding rates и liquidation mechanics — стандартный perp playbook. Ликвидность и поддерживаемые markets зависят от underlying infrastructure — проверяй depth перед size. Для трейдеров, которым нужен альтернативный frontend к on-chain или hybrid perp liquidity.",
    facts: [
      "Boom perp DEX 2024–2025: десятки новых terminals как Altura боролись за долю после того, как dYdX и Hyperliquid доказали размер рынка.",
      "Leverage tourism: трейдеры заходят на 20x, одна funding period — счёт разорён; Altura не исключение.",
      "app.altura.trade vs fake domains — perp terminals популярная цель для phishing; добавь official URL в закладки.",
    ],
    tips: [
      "Funding rate и open interest смотри перед hold overnight — на alt perps может съесть PnL.",
    ],
    warnings: [
      "Leveraged trading — риск ликвидации. Size position под volatility, а не под максимальный slider.",
    ],
  },
  ambient: {
    short:
      "Concentrated liquidity DEX на Ethereum — swap и LP с capital efficiency выше классического AMM.",
    long:
      "Ambient Finance (ex-CrocSwap) — next-gen AMM с ambient liquidity model на Ethereum mainnet. Меньше capital для той же глубины, чем Uniswap v2.",
    tagline: "Capital-efficient AMM — больше глубины на каждый доллар LP.",
    highlight:
      "Ambient.finance переизобретает market making: ликвидность динамически концентрируется вокруг цены, fees копятся LP. Ребренд с CrocSwap после years of development — команда с серьёзным academic DeFi background. Mainnet Ethereum focus — gas matters, но для serious size efficiency wins. Swap UI straightforward; LP требует понимания range и impermanent loss mechanics.",
    facts: [
      "Rebrand CrocSwap → Ambient 2023: years of stealth dev, community ждал «Uniswap killer» — realistic pitch скромнее, но tech solid.",
      "Ambient liquidity paper citations: academic DeFi редко доходит до mainnet; Ambient — exception с published research.",
      "Ethereum-only в multi-chain era: ставка на security и liquidity depth одной сети vs spray on every L2.",
    ],
    tips: [
      "Для LP начни с narrow range на stable pairs — IL lower, mechanics понятнее.",
    ],
    warnings: [
      "Concentrated liquidity = higher IL risk on volatile pairs при выходе price из range.",
    ],
  },
  arbitrum: {
    short:
      "Ведущий Ethereum L2 — rollup с самой глубокой DeFi-экосистемой после mainnet, низкий gas и быстрые txs.",
    long:
      "Arbitrum — optimistic rollup от Offchain Labs. Arbitrum One для general DeFi, Nova для gaming/low-cost. ARB token governance и grants для экосистемы.",
    tagline: "Ethereum, но быстрее — L2, где реально живёт DeFi.",
    highlight:
      "Arbitrum One — #1 L2 по TVL и DeFi activity: Uniswap, Aave, GMX, Camelot, Radiant — всё здесь. Nitro upgrade резко снизил fees. Sequencer centralized (пока), fraud proofs live. ARB airdrop 2023 — один из крупнейших retail airdrops в истории. Мост с Ethereum через official bridge или fast bridges (Across и др.). Developer ecosystem зрелая — если dApp на Ethereum, likely есть Arbitrum deploy.",
    facts: [
      "ARB airdrop March 2023: ~625M tokens пользователям — median claim ~$1000+, у некоторых кошельков $50K+; определил эру «loyal L2 user».",
      "Arbitrum vs Optimism L2 wars: лидерство по TVL менялось, но Arbitrum держит top spot годами на raw DeFi usage, а не только на incentives.",
      "2024: Robinhood EU использовал Arbitrum для tokenized stocks — TradFi встретился с L2 быстрее, чем многие ожидали.",
    ],
    tips: [
      "Для частых txs держи ETH на Arbitrum для gas — bridge batch, не каждый swap с mainnet.",
    ],
    warnings: [
      "Вывод через official bridge на Ethereum — 7 дней challenge period; используй fast bridge при срочности.",
    ],
  },
  arbswap: {
    short:
      "Native DEX на Arbitrum — свапы и выращивание доходности для локальных пар, когда не хочешь идти на Camelot.",
    long:
      "Arbswap — AMM DEX на Arbitrum One с swap, liquidity pools и yield программа доходностиing. Community-driven, меньше чем Camelot/Sushi на той же chain.",
    tagline: "Нативный swap Arbitrum — локальный DEX для локальных активных трейдеров.",
    highlight:
      "Arbswap.io — mid-tier AMM на Arbitrum с classic pool model и программа доходности incentives. Подходит для ecosystem tokens без deep liquidity на Uniswap. Fees ниже mainnet, но slippage на экзотических парах может быть высоким. Часть long tail Arbitrum DeFi — полезен для specific tokens, не default для ETH/USDC.",
    facts: [
      "Фрагментация DEX на Arbitrum: Camelot, Sushi, Uniswap, Ramses, Arbswap — ликвидность размазана; пользователи гоняются за APR по всем.",
      "Дампы программа доходности token: emissions Arbswap исторически следовали сценарию «launch high APR → TVL spike → token -90%».",
      "Малый DEX на большом L2: выживает на loyal community tokens, а не на объёме ETH/BTC.",
    ],
    tips: [
      "Для major pairs используй Uniswap/Camelot; Arbswap — когда нужен specific ecosystem token.",
    ],
    warnings: [
      "Farm APR в основном token emissions — считай реальный yield после падения цены программа доходности token.",
    ],
  },
  archly: {
    short:
      "ve(3,3) DEX на multiple chains — swap, LP и vote-locked emissions в Solidly-style модели.",
    long:
      "Archly Finance — AMM с ve-token governance на Base, Arbitrum, BSC и других. Bribe wars, gauge voting, concentrated liquidity variant.",
    tagline: "ve(3,3) на твоей chain — голосуй за emissions, участвуй в программах доходности со стратегией.",
    highlight:
      "Archly.fi разворачивает Solidly-inspired mechanics: lock ARCH за veARCH, голосуй за pool emissions, LP зарабатывают trading fees + bribes. Multi-chain presence ловит рост локальных экосистем. Meta-game для DeFi strategists — bribe markets, vote optimization, dilution от новых pools. Не для новичков; награда за active management.",
    facts: [
      "Solidly fork explosion 2022–2024: 100+ ve(3,3) DEX, 95% мертвы — Archly среди survivors на Base/Arbitrum.",
      "Bribe market drama: протоколы платят ve-holders за направление emissions — прозрачная коррупция, DeFi edition.",
      "ve-lock 4 года за max power: crypto years ощущаются как decades; большинство lockers не доходят до конца срока.",
    ],
    tips: [
      "Перед LP проверь breakdown gauge APR — fees vs emissions vs bribes, а не headline number.",
    ],
    warnings: [
      "ve-token locks длинные — early exit часто невозможен; не lock средства, которые нужны ликвидными.",
    ],
  },
  arkm: {
    short:
      "Arkham Intelligence — on-chain analytics и deanonymization labels, когда нужно знать, кто стоит за wallet.",
    long:
      "Arkham — blockchain analytics platform с entity labels, wallet profiling и Intel Marketplace. Токен ARKM для доступа к platform и rewards.",
    tagline: "Чей это wallet? — on-chain intelligence для детективов.",
    highlight:
      "Arkham.com агрегирует публичные chain data и применяет ML/heuristics для entity attribution — биржи, фонды, хакеры labeled. Intel Exchange позволяет покупать/продавать alpha о wallet identities. Спорно: privacy advocates ненавидят, трейдеры и compliance любят. Полезен для tracking smart money, hack fund flows, whale movements. Не trading venue — research tool.",
    facts: [
      "Arkham раскрытие личности drama 2023: платформа случайно слила planned dashboard раньше срока — паника crypto Twitter про «surveillance state».",
      "ARKM launch via Binance Launchpad — analytics token с immediate «sell the news» от airdrop hunters.",
      "Intel Marketplace: кто-то продал «кто этот hack wallet» за ETH — bounty hunter economy on-chain.",
    ],
    tips: [
      "Сверь labels Arkham с raw Etherscan — ML labels могут быть wrong или outdated.",
    ],
    warnings: [
      "Entity attribution ≠ proof — false positives случаются; не обвиняй только по label.",
    ],
  },
  arthswap: {
    short:
      "Ведущий DEX на Astar Network — свапы и liquidity для Polkadot ecosystem parachain.",
    long:
      "ArthSwap — primary AMM на Astar (Polkadot parachain) с multi-token pools и программа доходности programs. Gateway для Substrate-ecosystem DeFi.",
    tagline: "Домашний DEX Astar — свап в multi-chain backyard Polkadot.",
    highlight:
      "ArthSwap на Astar Network обслуживает Polkadot-adjacent liquidity: DOT derivatives, ASTR, ecosystem tokens. Cross-chain через Polkadot XCM расширяет reach. Fees ниже, чем на Ethereum, TVL меньше, чем у top L2 DEX. Нужен, если ты в экосистеме Astar; optional иначе.",
    facts: [
      "Astar $22M+ raised от Polychain и других — победитель parachain auction нуждался в native DeFi; ArthSwap занял слот.",
      "Polkadot DeFi vs Ethereum: доля объёма меньше, но loyal builders; ArthSwap пережил bear, когда многие parachain dApps — нет.",
      "ASTR token incentives гнали TVL peaks — post-incentive retention всегда главный тест.",
    ],
    tips: [
      "Bridge assets на Astar через official Polkadot routes перед swap — проверь token contract.",
    ],
    warnings: [
      "Parachain liquidity тоньше, чем на Ethereum L2 — size accordingly.",
    ],
  },
  atomichub: {
    short:
      "NFT marketplace на WAX — mint, buy и sell digital collectibles с zero gas fee UX.",
    long:
      "AtomicHub — крупнейший NFT marketplace на WAX blockchain. Gaming items, collectibles, drops без Ethereum gas pain.",
    tagline: "NFT без gas pain — WAX marketplace для gaming collectibles.",
    highlight:
      "AtomicHub на wax.atomichub.io — NFT infrastructure для WAX: creators mint collections, users trade через WAX Cloud Wallet в пару кликов. Zero gas model через resource staking. Dominant venue для gaming NFTs (Alien Worlds и др.). Не fine art OpenSea — functional gaming assets и collectibles at scale.",
    facts: [
      "WAX NFT volume peaked 2021–2022 с play-to-earn — AtomicHub обработал миллионы txs, когда Ethereum NFTs стоили $50 gas.",
      "AtomicAssets standard на WAX — template-based NFTs позволили game studios mint миллионы дёшево.",
      "P2E collapse: volume AtomicHub рухнул с ценами токенов — infrastructure осталась, hype — нет.",
    ],
    tips: [
      "Проверь creator коллекции перед покупкой — scam collections копируют popular game assets.",
    ],
    warnings: [
      "Gaming NFTs часто illiquid — floor price ≠ exit price для твоего specific asset.",
    ],
  },
  aurigami: {
    short:
      "Lending protocol на Aurora (Near) — supply, borrow и yield на EVM-compatible Near L2.",
    long:
      "Aurigami — money market на Aurora chain с algorithmic interest rates. Модель как Aave/Compound в экосистеме Near.",
    tagline: "Lend и borrow на Aurora — money market Near на EVM.",
    highlight:
      "Aurigami Finance на Aurora предлагает supply/borrow для NEAR-wrapped и bridged assets. Aurora приносит EVM на Near — Aurigami native DeFi layer. Меньше Aave, но закрывает gap для Near community. Liquidation risks, utilization dynamics — standard lending playbook. Проверяй oracle sources и collateral factors.",
    facts: [
      "Aurora launch as Near EVM: Aurigami среди первых lending protocols — first mover на small chain.",
      "Near ecosystem TVL never matched L2 stars — Aurigami quietly serves niche без headline hacks.",
      "Медвежий 2022: Near-native protocols потеряли users на миграцию в Arbitrum — Aurigami удержал core Near believers.",
    ],
    tips: [
      "Сравни borrow APR across Aurora protocols — small ecosystem, rates могут diverge.",
    ],
    warnings: [
      "Малые lending markets = thinner liquidation liquidity — volatile collateral extra risky.",
    ],
  },
  avalaunch: {
    short:
      "Launchpad на Avalanche — IDO и продажи токенов для новых проектов экосистемы AVAX.",
    long:
      "Avalaunch — децентрализованная fundraising platform на Avalanche. Stakers получают allocation в IDO через tier system.",
    tagline: "IDO pad экосистемы AVAX — stake за allocation, ape responsibly.",
    highlight:
      "Avalaunch.app проводит IDO для Avalanche-native projects: stake AVAX или platform token за tier, участвуй в sales, claim tokens на TGE. Реальность launchpad post-2021: большинство IDO underperform, gems единицы. Due diligence по fundamentals проекта обязателен. KYC иногда требуется в зависимости от sale.",
    facts: [
      "Launchpad golden era 2021: sales Avalaunch sold out за секунды — average ROI positive тогда, negative сейчас.",
      "AVAX ATH $146 → launchpad hype correlated — tier stakers felt rich on paper, illiquid на порог.",
      "Rug IDOs на каждой chain: Avalaunch delisted projects после community outrage — reputation management ongoing.",
    ],
    tips: [
      "Читай vesting schedule перед IDO — liquid на TGE vs 12-month порог меняет math полностью.",
    ],
    warnings: [
      "IDO ≠ investment advice — majority launchpad tokens trend to zero; size as lottery ticket.",
    ],
  },
  avnu: {
    short:
      "DEX aggregator на Starknet — лучший маршрут свапа через AMMs в одной транзакции.",
    long:
      "Avnu — smart order routing на Starknet, splitting trades across JediSwap, 10kSwap, SithSwap и др. за best price.",
    tagline: "Лучший маршрут свапа на Starknet — один клик, много пулов.",
    highlight:
      "Avnu.fi агрегирует Starknet DEX liquidity — пользователь получает optimal price без manually checking each venue. Похоже на 1inch на Ethereum. Поддерживает limit orders и expanding advanced features. Нужный tool по мере роста Starknet DEX fragmentation. Gas paid in STRK/ETH на Starknet.",
    facts: [
      "Every L2 eventually gets aggregator — Avnu стал Starknet's 1inch за months of ecosystem maturity.",
      "Aggregator volume exceeds individual DEX during airdrop seasons — routing txs spike с STRK campaigns.",
      "Split routing saved users single-digit % на large swaps — adds up на whale size, invisible на $10 trades.",
    ],
    tips: [
      "Slippage tolerance: 0.5% usually enough на Starknet; volatile tokens need 1%+.",
    ],
    warnings: [
      "Aggregator adds smart contract layer — use official app.avnu.fi, verify URL.",
    ],
  },
  axiom: {
    short:
      "Pro trading terminal на Solana — perps, spot и analytics в одном UI для speed traders.",
    long:
      "Axiom.trade — advanced trading interface для Solana ecosystem: fast execution, perp access, wallet tracking. Популярен среди memecoin и perp traders.",
    tagline: "Speed trading Solana — terminal для clicks per second.",
    highlight:
      "Axiom агрегирует Solana trading workflows: connect wallet, trade tokens и perps с minimal latency UI. Charting, order flow и social features target active traders, не long-term holders. Solana meme season drove adoption — speed matters когда token moves 50% за minutes. Не DEX сам по себе — frontend и routing layer.",
    facts: [
      "Solana meme mania 2024–2025: terminals like Axiom, Photon, BullX competed — UX war as fierce as chain TPS war.",
      "Copy trading на Solana: follow wallet, auto-buy — made millionaires и victims same week.",
      "axiom.trade phishing clones rampant during SOL peaks — bookmark official domain.",
    ],
    tips: [
      "Set slippage и priority fee перед FOMO click — Solana congested = failed or sandwiched txs.",
    ],
    warnings: [
      "Memecoin trading — gambling — terminal speed doesn't fix 99% loss rate на random tokens.",
    ],
  },
  "base-name-service": {
    short:
      "ENS на Base — human-readable .base names для wallet и on-chain identity.",
    long:
      "Base Name Service (Basenames) — naming protocol на Base L2 от Coinbase ecosystem. Register username.base linked to address.",
    tagline: "Yourname.base — identity на L2 от Coinbase.",
    highlight:
      "Basenames на basename.app — on-chain names на Base: send to «alice.base» instead of 0x… Integrates с Coinbase Wallet и Base ecosystem apps. Cheaper registration than ENS на mainnet. Identity layer для social и payment use cases на Base. Resolvers, subdomains и renewals follow ENS-like model.",
    facts: [
      "Coinbase pushed Basenames hard at Base launch — free/discounted names drove millions of registrations.",
      "ENS vs Basenames: two namespaces, potential confusion — alice.eth ≠ alice.base.",
      "Onchain Summer 2023: basename became flex PFP equivalent для Base builders.",
    ],
    tips: [
      "Register primary name перед тем как someone squats your brand — cheap insurance.",
    ],
    warnings: [
      "Names expire без renewal — set reminder like domain registration.",
    ],
  },
  "bastion-protocol": {
    short:
      "Lending на Aurora/Near — algorithmic rates для supply и borrow в Near EVM ecosystem.",
    long:
      "Bastion Protocol — money market на Aurora с cToken model similar to Compound. Near-native DeFi lending option.",
    tagline: "Compound vibes на Aurora — lending экосистемы Near.",
    highlight:
      "Bastion на Aurora предлагает supply/borrow markets для bridged assets на Near's EVM layer. Interest rates algorithmic based on utilization. Competes с Aurigami за same user base. Smaller TVL, higher relative risk на exotic collateral. Historical Near ecosystem protocol — survived multiple market cycles на niche chain.",
    facts: [
      "Near + Aurora dual branding confused users for years — Bastion на Aurora, not Near L1 directly.",
      "2022 Terra collapse: algorithmic stable borrowers на all lending протоколы разорены — Bastion had minimal UST exposure.",
      "Bastion vs Aurigami на same chain — liquidity split hurts both; classic small ecosystem problem.",
    ],
    tips: [
      "Проверь utilization на borrow asset — high utilization spikes borrow APR fast.",
    ],
    warnings: [
      "Niche chain lending — exit liquidity и oracle reliability lower than Ethereum blue chips.",
    ],
  },
  bebop: {
    short:
      "Professional DEX aggregator — RFQ и aggregated liquidity для size trades с minimal slippage.",
    long:
      "Bebop — liquidity aggregator targeting professional и semi-pro traders. Request-for-quote model alongside AMM aggregation для better execution на size.",
    tagline: "Размер имеет значение — RFQ aggregation для тех, кто двигает рынок.",
    highlight:
      "Bebop.xyz routes large swaps через market maker quotes и DEX liquidity — minimizes price impact vs single-pool AMM. Supports multiple chains и pairs. PMM и RFQ hybrid reduces MEV exposure для takers. Built для traders frustrated с Uniswap slippage на $100K+ trades. Gas и approval flow optimized для repeat users.",
    facts: [
      "RFQ models gained share post-MEV awareness — Bebop rode «private market maker fills your trade» narrative.",
      "Wintermute и other MMs integrate с Bebop — institutional liquidity retail can access.",
      "Aggregator wars: 1inch, Matcha, Bebop, CowSwap — each claims best execution; truth is pair-dependent.",
    ],
    tips: [
      "Сравни Bebop quote с CowSwap и 1inch на same trade — best venue changes by pair и size.",
    ],
    warnings: [
      "RFQ quotes expire — confirm quickly or refresh before sign.",
    ],
  },
  "beefy-finance": {
    short:
      "Yield optimizer — auto-compound vaults across chains, когда не хочешь вручную harvest каждый день.",
    long:
      "Beefy Finance — multi-chain yield aggregator. Deposit LP or single assets, vault auto-compounds rewards into more yield.",
    tagline: "Поставил vault — забыл harvest — auto-compound на 30+ chain.",
    highlight:
      "Beefy.finance разворачивает vault-стратегии на BSC, Ethereum, Arbitrum, Polygon, Fantom и десятках других сетей. Принимает LP-токены или активы, участвует в программах доходности награды, продаёт и реинвестирует автоматически — экономит gas и время по сравнению с ручным compound. Токен BIFI даёт долю revenue. Стратегии различаются по риску: stable pools безопаснее, спекулянт программа доходностиs — выше APY и выше риск обмана. Всегда читай strategy contract и underlying protocol.",
    facts: [
      "Beefy пережил медвежий 2022, когда многие yield aggregators умерли — мем «billion dollar compounding» стал брендом доверия.",
      "Vault hack 2021 на старой стратегии — Beefy компенсировала и ужесточила approval process; playbook прозрачности.",
      "Multi-chain vault count 1000+: вручную не аудируешь все — держись blue chip underlying pools.",
    ],
    tips: [
      "Предпочитай vaults с audited underlying (Curve, Uniswap) экзотическим single-audit программа доходностиs.",
    ],
    warnings: [
      "Auto-compound ≠ safe — vault strategy может потерять, если underlying программа доходности обман или взлом.",
    ],
  },
  benqi: {
    short:
      "Core lending и liquid staking на Avalanche — QI markets plus sAVAX для staking liquidity.",
    long:
      "Benqi — leading Avalanche DeFi: money markets for supply/borrow and sAVAX liquid staking token. AVAX ecosystem pillar.",
    tagline: "Опора DeFi Avalanche — lend, borrow, stake без lock AVAX.",
    highlight:
      "Benqi.fi ведёт supply/borrow markets (QI) и liquid staking (sAVAX) на Avalanche C-Chain. sAVAX представляет заблокированный в стейкинге AVAX, пригодный в DeFi — composability win. Глубокая интеграция с Avalanche DeFi stack. Механика ликвидации стандартная; волатильность AVAX движет collateral risk. Native AVAX yield + DeFi leverage в одной точке экосистемы.",
    facts: [
      "Benqi годами доминировал в Avalanche lending TVL — неофициальное звание «Aave of AVAX».",
      "AVAX -90% от ATH stress-tested ликвидации Benqi — протокол выстоял, часть пользователей — нет.",
      "sAVAX depeg scare во время хаоса FTX — восстановился; момент доверия к LST для Avalanche.",
    ],
    tips: [
      "sAVAX полезен как DeFi collateral; сравни borrow rate vs staking yield перед leverage loop.",
    ],
    warnings: [
      "Depeg liquid staking token в панике рынка — не считай 1:1 AVAX гарантией всегда.",
    ],
  },
  bitcow: {
    short:
      "MEV-aware trading на Bitcoin L2 — свапы с защитой от sandwich на emerging BTC DeFi.",
    long:
      "BitCow — DEX/trading на Bitcoin Layer 2 с фокусом на честное исполнение и MEV mitigation для BTC trades.",
    tagline: "Честные свапы на Bitcoin L2 — меньше sandwich, больше satoshis.",
    highlight:
      "BitCow.xyz работает в пространстве Bitcoin L2 DeFi: свапы и ликвидность, пока BTC ecosystem расширяется за пределы store of value. MEV protection narrative похож на CowSwap на Ethereum. Инфраструктура BTC DeFi на ранней стадии — ликвидность растёт, но тоньше, чем на Ethereum. Для пионеров, исследующих programmable money на Bitcoin.",
    facts: [
      "Bitcoin DeFi renaissance 2024–2025: Ordinals, Runes, L2 — BitCow среди инструментов, ловящих волну.",
      "BTC maxis vs DeFi спекулянтs — вечный спор; BitCow обслуживает меньшинство, которому нужно и то, и другое.",
      "Каждый новый BTC L2 заявляет «native Bitcoin DeFi» — большинство ликвидности всё ещё экспериментальное.",
    ],
    tips: [
      "Начни с малых сумм — BTC L2 bridges и DEX liquidity ещё созревают.",
    ],
    warnings: [
      "Модели безопасности BTC L2 сильно различаются — разберись с мостом перед депозитом.",
    ],
  },
  bitgenie: {
    short:
      "Bitcoin ecosystem platform — tools и markets на стыке BTC и DeFi utility.",
    long:
      "BitGenie — платформа в Bitcoin DeFi/inscriptions space с trading, tools или launchpad features в зависимости от фазы продукта.",
    tagline: "Bitcoin utility play — когда BTC нужен не только HODL.",
    highlight:
      "BitGenie.io участвует в расширении Bitcoin ecosystem за пределы простых переводов — inscriptions, swaps и ecosystem tools по мере эволюции рынка. Сектор движется быстро; продуктовая поверхность меняется с BTC L2 и meta trends. Для пользователей уже на Bitcoin DeFi frontier, исследующих новые интерфейсы.",
    facts: [
      "Ordinals explosion породил десятки Bit* брендов — BitGenie среди имён, борющихся за Bitcoin DeFi mindshare.",
      "Inscription summer 2023: платформы взлетали и падали с floor prices — инфраструктура пережила hype cycles.",
      "Bitcoin DeFi UX всё ещё clunky vs Solana one-click — BitGenie и peers закрывают gap.",
    ],
    tips: [
      "Проверь, какой Bitcoin L2 или layer использует BitGenie — совместимость с кошельком критична.",
    ],
    warnings: [
      "Ранний BTC DeFi — smart contract и bridge risk выше, чем у зрелых Ethereum протоколов.",
    ],
  },
  bitstar: {
    short:
      "Trading и DeFi platform — swap и earn products для retail crypto users.",
    long:
      "BitStar — multi-feature crypto platform с swap, earn и возможными launchpad elements на bitstar.pro.",
    tagline: "Swap и earn hub — retail DeFi в одном dashboard.",
    highlight:
      "BitStar.pro предлагает консолидированные DeFi-ish сервисы: token swaps, yield products и promotional campaigns. Mid-tier platform без tier-1 audit brand — due diligence по каждому продукту отдельно. Полезен как aggregator entry, если ecosystem matches твоим chains и tokens.",
    facts: [
      "Bit* naming crowded в crypto — BitStar часто путают с unrelated projects; проверяй domain bitstar.pro.",
      "Retail DeFi platforms взлетают на bull и затихают на bear — TVL говорит правду.",
      "Promotional APR campaigns: читай fine print про lock period и withdrawal fees.",
    ],
    tips: [
      "Earn products — отдельный risk от swap; разные contracts, разные audits.",
    ],
    warnings: [
      "Non-blue-chip platforms — не депозить больше, чем готов потерять полностью.",
    ],
  },
  bloctoswap: {
    short:
      "DEX на Flow blockchain — свапы для Flow NFT и token ecosystem с Blocto wallet UX.",
    long:
      "BloctoSwap — AMM на Flow с интеграцией Blocto wallet. Низкий friction для Flow-native users и NBA Top Shot adjacent ecosystem.",
    tagline: "Дружелюбный DEX Flow — свап через Blocto wallet в пару тапов.",
    highlight:
      "BloctoSwap на swap.blocto.app обслуживает Flow blockchain — Cadence smart contracts, consumer-friendly onboarding через Blocto. Ликвидность для FLOW и ecosystem tokens. Не deep DeFi — доступные свапы для Flow community и NFT collectors, выводящих активы in/out.",
    facts: [
      "Flow позиционировался как consumer chain — BloctoSwap matched UX для non-crypto-native Top Shot users.",
      "Layoffs Dapper Labs и pivot Flow: ecosystem сжался, но core DEX продолжил обслуживать loyal base.",
      "Flow DeFi TVL never exploded — BloctoSwap остаётся modest, functional, niche.",
    ],
    tips: [
      "Blocto wallet — smoothest Flow DEX experience; wallet fragmentation hurts на Flow.",
    ],
    warnings: [
      "Thin pools на Flow — проверяй liquidity перед крупными swaps.",
    ],
  },
  bluemove: {
    short:
      "Leading DEX на Sui и Aptos — Move-language chains native AMM с concentrated liquidity.",
    long:
      "BlueMove — primary DEX на Sui и Aptos Move VM chains. Swap, LP, launchpad features по мере роста ecosystem.",
    tagline: "DEX Move chain — ликвидность Sui и Aptos в одном бренде.",
    highlight:
      "BlueMove.net разворачивает на Sui и Aptos — ставка на Move language ecosystem независимо от того, какая L1 победит. Swap и liquidity pools для native tokens; historically strong during airdrop и incentive seasons. Multi-chain brand снижает single-chain risk. Конкуренция Cetus на Sui и других давит на fees и incentives.",
    facts: [
      "Sui mainnet launch 2023: BlueMove day-one DEX — first mover advantage в gold rush новой L1.",
      "Move VM chains compete: Sui vs Aptos — BlueMove hedged обе в отличие от chain-maximalist DEX.",
      "Incentive программа доходностиing на new L1s: BlueMove TVL correlated с token emission schedule, не organic volume.",
    ],
    tips: [
      "Same brand, different chains — проверь correct network перед connect wallet.",
    ],
    warnings: [
      "New L1 DEX liquidity volatile — IL и риск обмана на fresh token pairs.",
    ],
  },
  blur: {
    short:
      "Pro NFT marketplace — zero fees для traders, bidding и analytics для serious flippers.",
    long:
      "Blur.io — NFT marketplace для professional traders: aggregation, portfolio tools, zero marketplace fees, BLUR token incentives.",
    tagline: "NFT trading terminal — нулевые fees, максимальная скорость, pro tools.",
    highlight:
      "Blur потряс OpenSea trader-first design: floor sweeps, portfolio views, debates про royalty enforcement и эра BLUR airdrop программа доходностиing. Aggregates listings across marketplaces. Lending (Blend) integrated для NFT-backed loans. Ethereum NFT focus — не multi-chain general marketplace. Controversial among creators за royalty stance; beloved flippers за economics.",
    facts: [
      "Blur airdrop Season 1–2 распределил сотни миллионов BLUR — defined 2023 NFT trader behavior.",
      "OpenSea vs Blur market share war: Blur took #1 volume weeks running — first real OpenSea challenger.",
      "Blend NFT lending: borrow ETH against Punk или Azuki — liquidation auctions стали spectator sport.",
    ],
    tips: [
      "Проверь royalty и marketplace fee по коллекции перед list — Blur rules differ от OpenSea.",
    ],
    warnings: [
      "NFT lending liquidation — floor drop может уничтожить collateral value; borrow conservatively.",
    ],
  },
  bulk: {
    short:
      "Trading terminal — aggregated execution и tools для active on-chain traders.",
    long:
      "Bulk.trade — professional trading interface с fast routing, analytics и workflow tools для DeFi traders.",
    tagline: "Торгуй bulk — terminal speed для on-chain size.",
    highlight:
      "Bulk даёт unified trading UX across supported chains и venues — minimizing tab switching для active traders. Charting, order execution и portfolio views target users, которым тесно в basic swap UI. Part of growing category DeFi terminals, конкурирующих на latency и feature depth.",
    facts: [
      "Terminal wars 2024: dozens «fastest swap UI» — Bulk among names targeting pro segment, не retail.",
      "Aggregator backend matters less than frontend speed, когда memecoins move 100%/hour.",
      "Phishing clones follow every popular terminal — verify bulk.trade SSL и bookmarks.",
    ],
    tips: [
      "Test с small trade first на new terminal — confirm routing и slippage behavior.",
    ],
    warnings: [
      "Terminal — frontend only; underlying DEX и chain risks unchanged.",
    ],
  },
  bungee: {
    short:
      "Bridge aggregator от Socket — один UI для лучшего cross-chain маршрута и fee.",
    long:
      "Bungee.exchange — aggregates bridges (Across, Stargate, Hop и др.) для optimal cross-chain transfer по time и cost.",
    tagline: "Один bridge UI для всех — агрегация Socket.",
    highlight:
      "Bungee от Socket.tech сравнивает routes across major bridges: different paths, fees и ETA shown transparently. User picks или auto-selects best. Refuel feature sends gas token на destination chain — решает боль «bridged USDC but no ETH for gas». Нужный tool для multi-chain DeFi users, уставших проверять пять bridge sites.",
    facts: [
      "Socket powered половину DeFi aggregator integrations — Bungee consumer face того же routing engine.",
      "Refuel feature saved millions «stuck on new chain» support tickets across crypto Twitter.",
      "Bridge aggregator не убирает bridge risk — just picks which protocol to trust this time.",
    ],
    tips: [
      "Enable refuel с small native amount на first bridge to new chain — prevents stuck funds.",
    ],
    warnings: [
      "Aggregators route through third-party bridges — each has own trust assumptions.",
    ],
  },
  bunnyfi: {
    short:
      "Yield программа доходностиing platform — auto-compound и vault strategies на supported chains.",
    long:
      "Bunnyfi — yield optimizer с vault products, auto-harvesting и reinvesting программа доходности rewards.",
    tagline: "Фарми без ежедневного harvest — Bunny делает compound.",
    highlight:
      "Bunnyfi.io предлагает yield vaults similar category to Beefy — deposit, strategy compounds rewards. Smaller footprint; verify audits и underlying protocols before deposit. APR headlines driven by token emissions — real yield often lower.",
    facts: [
      "Yield aggregator sector crowded post-2020 — Bunnyfi among long tail competing for same программа доходности tokens.",
      "Auto-compound saves gas for small участники программ — economics matter only above certain deposit size.",
      "Farm token -95% destroys compounded gains — math cruel на high APR vaults.",
    ],
    tips: [
      "Проверь underlying программа доходности protocol audit status перед Bunny vault deposit.",
    ],
    warnings: [
      "Optimizer adds smart contract layer on top of программа доходности — stacked risk.",
    ],
  },
  cashmere: {
    short:
      "Stable swap bridge — optimized для USDC/USDT transfers между chains с minimal slippage.",
    long:
      "Cashmere — cross-chain bridge с фокусом на stablecoin transfers, low slippage и competitive fees via optimized routing.",
    tagline: "Stablecoins cross chains smoothly — minimal depeg on bridge.",
    highlight:
      "Cashmere.exchange решает stablecoin bridge pain: крупные USDC moves между Ethereum, Arbitrum, Base и др. с tight peg и clear fees. Stable-focused design снижает volatility during bridge vs bridge volatile tokens. Полезен для moving dry powder между chains под opportunities.",
    facts: [
      "Stablecoin bridge competition fierce — Cashmere vs Across vs Stargate на USDC routes.",
      "USDC circle CCTP changed bridge landscape 2023 — native burn/mint safer than liquidity pool bridges.",
      "Bridge slippage на stables should be ~0 — if not, something wrong с pool liquidity.",
    ],
    tips: [
      "Для крупных stables сравни Cashmere quote с CCTP-native bridges на supported routes.",
    ],
    warnings: [
      "Всегда проверяй receiving USDC contract address на destination — fake stables exist.",
    ],
  },
  "celer-cbridge": {
    short:
      "Celer cBridge — established cross-chain bridge с liquidity pools и wide chain support.",
    long:
      "cBridge от Celer Network — pool-based bridge connecting 40+ chains. Fast transfers, liquidity provider yields, deep integrations.",
    tagline: "40+ chain connected — OG liquidity bridge всё ещё роутит.",
    highlight:
      "cBridge.celer.network — veteran cross-chain bridge: deposit на source, LP pool pays destination. Supports EVM, Cosmos и more. Integrated в many wallets и dApps. History of security upgrades after 2022 incident — protocol improved monitoring. LP earns fees; пользователи получают speed vs canonical bridge.",
    facts: [
      "August 2022 cBridge hack: ~$240K exploited, quick pause and fix — smaller than Ronin but wake-up call.",
      "Celer founded by PhD team from UIUC — academic cred rare among bridge teams.",
      "cBridge volume peaks during chain launches — everyone bridge to программа доходности new airdrop.",
    ],
    tips: [
      "Проверь transfer limits и estimated time in UI — large transfers may hit pool caps.",
    ],
    warnings: [
      "Pool-based bridges have liquidity constraints — max transfer depends on destination pool depth.",
    ],
  },
  cetus: {
    short:
      "Top DEX на Sui — concentrated liquidity AMM, ecosystem hub для Move DeFi.",
    long:
      "Cetus Protocol — leading DEX на Sui с CLMM model, deep integrations и CETUS token incentives.",
    tagline: "Центр ликвидности Sui — CLMM для экосистемы Move.",
    highlight:
      "Cetus.zone доминирует Sui DEX volume: concentrated liquidity pools, swap aggregator integration, launchpad support. Official-ish status в Sui ecosystem grants и partnerships. CETUS incentives drive LP; post-airdrop retention key metric. Нужная площадка для any Sui DeFi user.",
    facts: [
      "Cetus mainnet day one with Sui — captured majority DEX share while BlueMove split Aptos focus.",
      "Sui Foundation backed ecosystem DEX narrative — Cetus benefited from grants и co-marketing.",
      "CLMM на new L1: LPs learned concentrated liquidity painful lesson from Uniswap v3 again.",
    ],
    tips: [
      "For Sui swaps default to Cetus aggregator view — checks internal pools first.",
    ],
    warnings: [
      "New ecosystem tokens extremely volatile — IL на concentrated ranges hurts fast.",
    ],
  },
  chainspot: {
    short:
      "Cross-chain swap hub — exchange tokens между networks через aggregated liquidity.",
    long:
      "Chainspot — platform для cross-chain token swaps, combining bridge и DEX routing в unified flow.",
    tagline: "Swap across chains — один flow от token A на chain X до B на chain Y.",
    highlight:
      "Chainspot.io упрощает multi-hop trades: user specifies source chain/token и destination — backend routes bridge + swap. Reduces manual steps vs bridge then swap separately. Fee и time estimates upfront. Useful для opportunistic cross-chain arb и portfolio rebalancing.",
    facts: [
      "Cross-chain swap UX improved 2023–2025 — Chainspot among interfaces hiding bridge+DEX complexity.",
      "Every aggregator faces same pain: one broken hop fails entire route — customer support nightmare.",
      "Chainspot volume correlates с alt season — quiet когда everyone stays on one chain.",
    ],
    tips: [
      "Allow slippage buffer на cross-chain swaps — two hops compound price uncertainty.",
    ],
    warnings: [
      "Multi-hop trades increase failure points — start with moderate size.",
    ],
  },
  coinlist: {
    short:
      "Token launch platform — compliance-heavy sales для early access к топ проектам до биржи.",
    long:
      "CoinList.co — regulated token sale platform hosting Solana, Filecoin, Oceans и other historic launches. KYC required, lottery or auction formats.",
    tagline: "Ранние токены до CEX — KYC, lottery, надежда.",
    highlight:
      "CoinList проводил some of most famous token sales: Solana at $0.04, Flow, Mina и dozens more. Compliance-first approach vs pure crypto спекулянт launchpads. Sales often lottery из-за oversubscription. Post-sale tokens vest or unlock on schedule. Reputation: legitimate platform, but returns vary wildly by project и entry price.",
    facts: [
      "Solana CoinList sale 2020: $0.04 per SOL — best ROI in platform history, created permanent FOMO for every future sale.",
      "CoinList Mini и Karma system — программа доходностиing reputation for allocation became part-time job for launch hunters.",
      "Not immune to bad sales: projects that listed strong still сбросили 80% — platform legit ≠ token profit.",
    ],
    tips: [
      "Читай unlock schedule before sale — liquid at listing vs 12-month vest changes exit strategy.",
    ],
    warnings: [
      "Token sales — high risk — past Solana returns won't repeat; most sales underperform.",
    ],
  },
  cometbridge: {
    short:
      "Cross-chain bridge — transfer assets между supported networks через Comet liquidity protocol.",
    long:
      "CometBridge — bridge interface на cometbridge.app routing cross-chain transfers for ecosystem tokens и stables.",
    tagline: "Мост под кометой — cross-chain, когда звёзды сходятся.",
    highlight:
      "CometBridge предоставляет cross-chain transfer UI connecting supported L1/L2 networks. Part of long tail bridge market — verify security audits, supported routes и liquidity before large transfers. Useful когда specific token or chain route not covered by major aggregators.",
    facts: [
      "Bridge proliferation 2023–2024: hundreds of interfaces, dozen secure backends — Comet among niche routers.",
      "New bridge UIs spike usage during airdrop campaigns — sustainability depends on repeat users.",
      "Всегда сравнивай with Bungee/Across before using unknown bridge — fee и safety tradeoff.",
    ],
    tips: [
      "Test bridge with minimum amount on new route before moving size.",
    ],
    warnings: [
      "Lesser-known bridges carry higher smart contract и liquidity risk — DYOR.",
    ],
  },
  compound: {
    short:
      "OG DeFi lending — algorithmic rates, cTokens и governance через COMP since 2018.",
    long:
      "Compound Finance — pioneer algorithmic money market на Ethereum. Supply earns interest, borrow against collateral, COMP rewards for early users.",
    tagline: "OG DeFi lending — где cTokens и liquidity mining начались.",
    highlight:
      "Compound изобрёл modern DeFi lending UX: deposit ETH → receive cETH → earn APR; borrow against it. COMP liquidity mining June 2020 kicked off DeFi Summer. v3 focuses on efficiency и isolation. Less multi-chain than Aave but Ethereum mainnet institutionally recognized. Governance via COMP holders — proposal drama frequent.",
    facts: [
      "COMP yield программа доходностиing June 2020: TVL 0 → $1B in weeks — invented liquidity mining, changed crypto forever.",
      "Compound Treasury proposal 2021: attempted corporate structure for protocol — legal innovation ahead of DAO law.",
      "2021 bug: $80M at risk, whitehat saved funds — Compound compensated generously; responsible disclosure win.",
    ],
    tips: [
      "Mainnet gas makes Compound best for larger positions — small deposits eat yield on gas.",
    ],
    warnings: [
      "Governance can change collateral factors — monitor proposals if heavily borrowed.",
    ],
  },
  "connext-bridge": {
    short:
      "Modular bridge (Everclear) — fast cross-chain transfers через intent-based routing.",
    long:
      "Connext (rebranding toward Everclear) — cross-chain interoperability using modular intent architecture for fast cheap transfers.",
    tagline: "Intents cross chains — modular bridge Connext/Everclear.",
    highlight:
      "Connext Bridge на bridge.connext.network позволяет cross-chain swaps и transfers with solver network filling intents. Evolved toward Everclear brand for clearing layer vision. Competitive with Across и Socket on speed. Technical architecture emphasizes modularity — integrations across growing chain set.",
    facts: [
      "Connext → Everclear pivot 2024: rebrand reflected shift from bridge to clearing network narrative.",
      "Intent-based bridge 2024 hot trend — Connext early mover before Anoma и others mainstreamed term.",
      "Bridge sector consolidation: survivors differentiate on UX и solver liquidity, not just chain count.",
    ],
    tips: [
      "Сравни Connext quote with Bungee aggregation — may route through same solvers differently.",
    ],
    warnings: [
      "Intent systems rely on solver honesty и liquidity — rare failures possible on exotic routes.",
    ],
  },
  convex: {
    short:
      "Curve booster — max CVX rewards и simplified Curve/Frax staking без lock complexity.",
    long:
      "Convex Finance — deposits Curve LP tokens, maximizes CRV rewards, aggregates veCRV power. Dominates Curve gauge wars.",
    tagline: "Curve yield на стероидах — veCRV power без lock.",
    highlight:
      "Convexfinance.com locks больше veCRV, чем кто-либо — LPs deposit Curve pool tokens, earn boosted CRV + CVX + fees without managing veCRV locks. Central to Curve ecosystem economics since 2021. vlCVX holders vote gauges и receive bribes. Frax и other integrations expanded scope. Smart contract battle-tested but Curve dependency means Curve risk = Convex risk.",
    facts: [
      "Convex launch 2021: TVL $0 → $15B in months — most successful Curve meta-protocol ever.",
      "Gauge wars: protocols paid Convex voters millions in bribes — DeFi political economy thesis material.",
      "CRV price -90% hurt CVX holders harder — leveraged bet on Curve ecosystem revenue.",
    ],
    tips: [
      "Understand you earn CRV, CVX и pool fees — diversify exit timing on three tokens.",
    ],
    warnings: [
      "Convex is Curve wrapper — if Curve pool exploited, Convex LPs affected.",
    ],
  },
  "core-bridge-by-l0": {
    short:
      "Official Core DAO bridge через LayerZero — BTC staking chain ↔ multichain assets.",
    long:
      "Core Bridge (LayerZero) — cross-chain gateway for Core blockchain connecting BTC-aligned L1 with EVM ecosystems via LayerZero OFT.",
    tagline: "Gateway Core chain — LayerZero мост для экосистемы Satoshi Plus.",
    highlight:
      "Core DAO на bridge.coredao.org использует LayerZero для token transfers between Core и Ethereum, BSC и др. Core combines Bitcoin hash power и delegated staking — bridge links that ecosystem to broader DeFi. LayerZero speed with Core-native token support. Проверь official bridge contract for CORE и wrapped assets.",
    facts: [
      "Core launch 2023 with Satoshi Plus consensus — bridge essential for DeFi beyond native chain.",
      "LayerZero integration meant Core users участвовали ZRO eligibility — bridge txs partly управляемый множественными аккаунтами.",
      "BTC staking narrative 2024: Core positioned at intersection — bridge connects story to usable DeFi.",
    ],
    tips: [
      "Confirm destination token contract on Core — wrapped assets have multiple versions historically.",
    ],
    warnings: [
      "New L1 bridges — wait for audit maturity before life-changing sums.",
    ],
  },
  cowswap: {
    short:
      "MEV-protected DEX — batch auctions от CoW Protocol, traders не платят sandwich tax.",
    long:
      "CowSwap (CoW Protocol) — DEX aggregating via batch auctions where solvers compete to fill orders at best price, MEV returned to users.",
    tagline: "Торговля защищена от MEV — solvers конкурируют, surplus остаётся тебе.",
    highlight:
      "Swap.cow.fi использует intent-based batch auctions: sign order, solver executes in batch with price improvement. MEV protection core value — no sandwich on your swap. Integrates Uniswap, Curve и др. as liquidity sources. Gasless orders possible via relayers. ETH mainnet primary venue; growing L2 support. Preferred whales и DAOs moving size on-chain.",
    facts: [
      "CoW Protocol name from «Coincidence of Wants» — economic concept became MEV solution brand.",
      "Solver competition returned $100M+ MEV surplus to users cumulative — rare DeFi win for retail.",
      "Gnosis merged ecosystem alignment — CoW DAO governance independent but GNO family connections.",
    ],
    tips: [
      "Используй limit orders for non-urgent trades — solvers may wait for better batch price.",
    ],
    warnings: [
      "Order expiry matters — unfilled orders need resign; не считай instant fill.",
    ],
  },
  crodex: {
    short:
      "DEX на Cronos — swap и программа доходности в Crypto.com ecosystem chain.",
    long:
      "Crodex — AMM на Cronos chain (Crypto.com EVM) with swaps, liquidity pools и yield программа доходностиs.",
    tagline: "Нативный DEX Cronos — swap в экосистеме CRO.",
    highlight:
      "Crodex.app обслуживает Cronos DeFi users — CRO pairs, ecosystem tokens, программа доходности incentives. Cronos activity tied to Crypto.com marketing и CRO price cycles. Не deep global liquidity — functional for Cronos-native assets when you're already in chain via Crypto.com bridge.",
    facts: [
      "Cronos launch 2021 with $500M marketing — Crodex among first DEXes riding CRO hype wave.",
      "CRO -90% from ATH drained Cronos DeFi TVL — Crodex quiet but operational.",
      "Crypto.com app integration drove users who never used MetaMask — different demographic than Ethereum DeFi.",
    ],
    tips: [
      "Bridge CRO via official Crypto.com Cronos bridge — third-party routes add risk.",
    ],
    warnings: [
      "Ecosystem chain concentration risk — Cronos activity follows CRO price и CEX marketing.",
    ],
  },
  "dao-maker": {
    short:
      "Launchpad и incubator — SHO sales, strong holder offerings для retail early access.",
    long:
      "DAO Maker — token launch platform with Strong Holder Offerings (SHO), staking tiers и venture incubator backing projects.",
    tagline: "SHO launchpad — stake DAO, молись за allocation.",
    highlight:
      "DAO Maker app.daomaker.com ведёт SHO sales: stake DAO token for allocation weight, participate in vetted project launches. Incubator track record includes notable names (mixed outcomes). KYC common. 2021 hack history — platform upgraded security since. Launchpad returns heavily skewed — few winners, many losers.",
    facts: [
      "August 2021 hack: ~$7M stolen from user wallets via compromised widget — DAO Maker rebuilt trust slowly.",
      "SHO format copied across industry — DAO Maker's brand became verb for «staking for allocation».",
      "Top SHO winners (ORAO, etc.) created permanent FOMO — statistical survivors, not guaranteed formula.",
    ],
    tips: [
      "Tier weight from DAO staking — calculate cost of capital vs expected allocation EV.",
    ],
    warnings: [
      "Launchpad tokens often сброс at unlock — не stake life savings for lottery tickets.",
    ],
  },
  debank: {
    short:
      "DeFi portfolio tracker — все wallets и chains в одном dashboard с social feed.",
    long:
      "DeBank — read-only portfolio aggregator across 100+ chains. Net worth, DeFi positions, swap interface и Web3 social layer.",
    tagline: "Всё, что есть on-chain — один dashboard, все chain.",
    highlight:
      "DeBank.com индексирует wallets на Ethereum, L2s, Solana, BSC и dozens more — unified net worth и protocol breakdown. DeFi swap и bridge integrated. Social feed («Web3 profile») shows on-chain activity publicly unless privacy adjusted. Нужный research tool for whale watching и self-audit. Read-only by default — connects wallet only for tx signing when swapping.",
    facts: [
      "DeBank became default «check that wallet» tool — influencers раскрыли свою личность через публичные профили.",
      "Rank feature gamified net worth — культура демонстрации успеха в крипте, выраженная в USD в таблице лидеров.",
      "DeBank swap aggregator volume significant — portfolio app became trading entry point organically.",
    ],
    tips: [
      "Adjust privacy settings if you не хочешь full portfolio public on DeBank profile.",
    ],
    warnings: [
      "Public profile exposes holdings — конфиденциальность risk for large wallets.",
    ],
  },
  debridge: {
    short:
      "Fast cross-chain bridge — swaps и transfers с DLN (DeBridge Liquidity Network) solver model.",
    long:
      "deBridge — interoperability protocol for cross-chain swaps, messaging и DLN intent fulfillment across 20+ chains.",
    tagline: "Cross-chain на скорости — DLN solvers исполняют intent.",
    highlight:
      "deBridge.finance позволяет asset transfers и arbitrary message passing across EVM и Solana. DLN uses off-chain solvers with on-chain settlement — competitive speed vs Across. deBridge points campaign drove volume 2024. Growing integrations in wallets и dApps. Проверь supported asset list — not every token on every route.",
    facts: [
      "deBridge points airdrop программа доходностиing 2024: volume exploded — спор о множественных аккаунтах followed every points program.",
      "Solana ↔ EVM through deBridge captured flow as Wormhole faced competition.",
      "Cross-chain messaging позволяет more than transfers — NFT и governance use cases expanding.",
    ],
    tips: [
      "Сравни deBridge fee/time with Bungee quote on same route — winner varies daily.",
    ],
    warnings: [
      "Solver model trust assumptions — use official app for large cross-chain moves.",
    ],
  },
  dedust: {
    short:
      "Leading DEX на TON — swap и pools для Telegram/crypto native TON ecosystem.",
    long:
      "DeDust.io — primary AMM на The Open Network (TON) with deep integration into Telegram Web3 ecosystem.",
    tagline: "Главный swap TON — хаб ликвидности Telegram chain.",
    highlight:
      "DeDust доминирует TON DEX volume post-Telegram crypto push: swap TON, jettons, LP pools. Native TON wallet integration smooth for Telegram users. Ecosystem growth tied to Telegram mini-apps и NOTcoin wave. Competes with Ston.fi for TON liquidity — check both for best price.",
    facts: [
      "TON revival 2024 via Telegram: DeDust volume 100x as mini-app users discovered on-chain swap.",
      "NOT и meme jettons on TON — DeDust frontline for memecoin casino on Telegram chain.",
      "Dedust vs Ston.fi TON DEX war mirrors every L1 — incentives decide LP loyalty.",
    ],
    tips: [
      "Используй TON-native wallet (Tonkeeper) for best DeDust UX — MetaMask not applicable here.",
    ],
    warnings: [
      "Meme jettons on TON mostly zero value — treat as speculation not investment.",
    ],
  },
  defibox: {
    short:
      "DeFi suite на EOS — swap, lending, stablecoin в одной экосистеме Antelope chain.",
    long:
      "Defibox — comprehensive DeFi platform на EOS/Antelope: swap, USN stablecoin, lending и resource management.",
    tagline: "EOS DeFi all-in-one — swap, lend, mint USN.",
    highlight:
      "Defibox.io — DeFi hub экосистемы EOS, older than most L2 DeFi. Swap pools, USN algorithmic stablecoin, lending markets. Loyal EOS community product; tiny vs Ethereum but functional for EOS-native assets. Historical significance in early DeFi beyond ETH.",
    facts: [
      "EOS DeFi peak 2020–2021: Defibox TVL in hundreds of millions when EOS price alive.",
      "USN stablecoin depeg scares tested Defibox — survived where Terra didn't, different mechanism.",
      "Block.one EOS abandonment hurt all ecosystem apps — Defibox persisted on community EOS forks.",
    ],
    tips: [
      "Confirm which EOS fork/network Defibox разворачивает on — Antelope fragmentation continues.",
    ],
    warnings: [
      "EOS ecosystem shrunk — liquidity и developer activity far below peak.",
    ],
  },
  desyn: {
    short:
      "Structured DeFi products — on-chain fund pools, LSD и yield strategies as vaults.",
    long:
      "DeSyn Protocol — decentralized structured products platform for creating и investing in on-chain fund pools и yield strategies.",
    tagline: "Structured products DeFi — pools со стратегией, не просто APY.",
    highlight:
      "DeSyn.io позволяет managers создавать tokenized strategy pools — LSD combinations, yield aggregations, structured returns. Investors deposit into pools with transparent on-chain rules. Niche between raw программа доходностиing и TradFi funds. Smart contract risk on custom strategies — read pool composition before entry.",
    facts: [
      "Structured products in DeFi repeatedly attempted since 2020 — DeSyn among survivors in bear market.",
      "LSD boom 2023: DeSyn pools packaged stETH + rewards strategies — composability marketing.",
      "On-chain fund manager reputation unenforceable — past performance ≠ future, especially in crypto.",
    ],
    tips: [
      "Читай pool strategy contract и underlying assets — structured ≠ safe.",
    ],
    warnings: [
      "Custom strategy pools carry manager и smart contract risk — no FDIC.",
    ],
  },
  dexguru: {
    short:
      "DEX analytics aggregator — charts, pool data и trading interface across chains.",
    long:
      "DexGuru (dex.guru) — analytics и trading front-end aggregating DEX data, charts и swap execution multi-chain.",
    tagline: "Chart, analyze, swap — DEX terminal с data layer.",
    highlight:
      "Dex.guru объединяет TradingView-style charts для on-chain pairs с aggregated swap execution. Отслеживай new pools, liquidity changes и whale trades. Tool для power user DEX traders, которым нужны data + execution без смены tab. Supported chains: Ethereum, BSC, Polygon и др. Guru Network token для ecosystem incentives.",
    facts: [
      "DexGuru rose as Dextools competitor — cleaner UI won segment active DEX traders.",
      "New pool alerts saved спекулянтs и created bag holders — speed to ape unchanged outcome variance.",
      "Aggregator analytics + swap: data moat harder than execution — DexGuru bet on both.",
    ],
    tips: [
      "Проверь contract address на chart — совпадает ли с token, который хочешь купить; scam pairs клонируют names.",
    ],
    warnings: [
      "Charts показывают price, не legitimacy — обманные токены chart beautifully, пока не перестанут.",
    ],
  },
};
