#!/usr/bin/env python3
"""Replace English sentences in batch3_ru_content.json with Russian prose."""

import json
import re
from pathlib import Path

DATA = Path(__file__).resolve().parent / "batch3_ru_content.json"

# Per-slug full Russian overrides (all text fields)
OVERRIDES: dict[str, dict] = {
    "group": {
        "highlight": "Mantle Group на group.mantle.xyz собирает участников экосystemы Mantle: форумы, кампании, ссылки на dApps. Это не протокол, а social/coordination layer для Mantle L2 (наследие BitDAO). Удобно следить за grants, hackathons и governance MNT. Сверяй внешние ссылки — community hubs часто отстают после ухода партнёров.",
        "tips": ["Сверяй campaign links с официальным Mantle Twitter перед подключением кошелька."],
        "warnings": ["Ссылки community-сайта — не endorsement; каждый dApp несёт свой smart contract risk."],
    },
    "grvt": {
        "highlight": "Grvt.io для трейдеров, которым нужна скорость уровня Binance с optional self-custody и proof of reserves через zk stack. Гибридная модель: matching off-chain, balances verifiable on-chain. Конкурирует с dYdX v4, Vertex, Hyperliquid. Token и points привлекли pro и retail flow. KYC tiers для высоких лимитов — читай geo-ограничения. Smart contract risk ниже чем у pure on-chain CLOB, но trust к оператору остаётся.",
        "tips": ["Начни с небольшого депозита и проверь latency вывода — hybrid exchanges различаются по on-chain settlement."],
        "warnings": ["Exchange tokens и points спекулятивны — trading rewards ≠ profit, если убытки больше rebates."],
    },
    "gte": {
        "highlight": "Gte.xyz — native liquidity layer для performance L2 (MegaETH alliance): low latency trading, on-chain order book или advanced AMM. Early TVL на incentives и hype partner chain. Для degens уже на target L2 с airdrop farming — не cross-chain hub. Тонкая ликвидность на launch pairs — slippage и IL elevated. Следи за audit status и связью команды с MegaETH.",
        "tips": ["Сравни routing с aggregators — native DEX редко даёт лучшую цену на thin pairs."],
        "warnings": ["Неаудированные launch contracts — малый size до community audit или time-tested deployment."],
    },
    "halliday": {
        "highlight": "Halliday.xyz упрощает «pay with any token» для разработчиков: API и widgets прячут bridges и swaps за единым checkout UX. Целевая аудитория — game studios и apps, теряющие users на wallet friction. B2B infra, не consumer wallet. Интеграции с major chains и stables; fees и settlement зависят от routing. Пользователи чаще взаимодействуют через partner apps, не напрямую с halliday.xyz.",
        "tips": ["Разработчикам: протестируй checkout на testnet с малыми суммами на всех целевых chains перед launch."],
        "warnings": ["Сбой embedded bridge блокирует платежи — следи за status page Halliday при congestion."],
    },
    "hamsterkombatgame": {
        "tips": ["При claim HMSTR используй только официальные Telegram bot links — scam claim sites пикуют на TGE."],
        "warnings": ["Meme game tokens крайне волатильны — не покупай HMSTR на деньги, которые нельзя потерять."],
    },
    "heyelsa": {
        "highlight": "App.heyelsa.ai: опиши intent («swap ETH to USDC on Base») — AI маршрутизирует в DEX/bridge integrations. Снижает UX friction для новичков; power users сверяют txs вручную перед sign. API keys и wallet connect — стандартная Web3 security. Конкурирует с Coinbase AgentKit и другими AI wallets. Риск misinterpretation AI — wrong chain или token при ambiguous prompt. Всегда review transaction preview в кошельке.",
        "tips": ["Дважды сверь token contract address, когда AI предлагает obscure assets — scam tokens копируют имена."],
        "warnings": ["Никогда не вставляй seed phrase в AI chat — Elsa и legit apps никогда не просят её."],
    },
    "hibachi": {
        "tips": ["Начни с минимального leverage на новом market — проверь поведение liquidation engine."],
        "warnings": ["Privacy features могут ограничить recourse в disputes — разберись с resolution process перед size."],
    },
    "huddle01": {
        "highlight": "Huddle01.com — Zoom-alternative с wallet login, token gating для комнат и decentralized edge nodes для media routing. DePIN angle: node operators делятся bandwidth за rewards. Используют DAO calls, NFT communities, hackathons. Качество сравнимо с Web2 для малых комнат; крупные ивенты зависят от распределения нод. Для remote Web3 teams с native crypto integrations в meetings.",
        "tips": ["Для sensitive calls используй unique room links и отключай запись, если не нужна."],
        "warnings": ["Сверяй домен huddle01.com — fake meeting links ежедневно в Discord phishing."],
    },
    "humanity": {
        "highlight": "Humanity.org решает sybil problem для airdrops и UBI: один раз подтверди человека — portable credential across apps. Palm scan и privacy-preserving proofs — спорный biometrics trade-off. Конкурирует с Worldcoin, Gitcoin Passport, Civic. Всплеск signup в airdrop seasons; long-term value зависит от integrations, принимающих Humanity credential. Читай data retention policy — biometrics чувствительны.",
        "tips": ["Используй только официальное Humanity app — fake verification apps крадут biometrics."],
        "warnings": ["Biometric identity необратима при leak — оцени privacy policy перед scan."],
    },
    "hyli": {
        "highlight": "Hyli.org — infra, где apps natively produce proofs: дешевле verifiable computation vs generic EVM loops. Цели — games, finance, identity с scalable verification. Testnet для developers; narrative пересекается с ZK app chains и app-specific rollups. Ранняя экосystemа — grants и hackathons для builders. Для разработчиков provable app paradigm, не retail trading.",
        "tips": ["Разработчикам: начни с official Hyli tutorials — proof patterns отличаются от standard Solidity."],
        "warnings": ["Ранние L1 contracts неаудированы — без production funds на experimental deployments."],
    },
    "hylo": {
        "tips": ["Следи за peg hyUSD на DEX — persistent depeg сигнализирует о collateral или confidence issues."],
        "warnings": ["Leveraged positions на Solana — congestion может задержать liquidation txs в stress events."],
    },
    "hyperbolic": {
        "tips": ["Покупателям: benchmark small job перед month-long rental — performance varies по host."],
        "warnings": ["Провайдерам: читай slashing и uptime rules — один downtime event может обнулить недельный earn."],
    },
    "hyperlane": {
        "highlight": "Hyperlane.xyz позволяет разработчикам подключать chains без ожидания official bridge partnerships — deploy Hyperlane modules, route messages, build multi-chain apps. Десятки rollups и apps post-2023. HYPER token и validator economics для securers. Пользователи через integrated dApps, не raw Hyperlane UI. Bridge risk на application layer — сверяй, какой Hyperlane route использует app.",
        "tips": ["Разработчикам: Hyperlane registry и audited route configs — не принимай default routes вслепую."],
        "warnings": ["Cross-chain messages необратимы при ошибке пользователя — дважды сверь destination chain и recipient."],
    },
    "ika": {
        "highlight": "Claim.ika.xyz — portal token claims и eligibility checks Ika network, типичный post-funding или pre-TGE portal. Ika — cross-chain infra в Sui и broader Move ecosystem. Подключи кошелёk, выполни tasks, claim allocations. Пик scam season на любом claim site — только official links из verified Ika/Sui socials. Для участников Sui ecosystem и interoperability narrative.",
        "tips": ["Закладка claim.ika.xyz только из official announcement — не кликай DM links."],
        "warnings": ["Claim portals просят только wallet connect — любой запрос seed phrase = scam."],
        "facts": [
            "Sui ecosystem 2024: десятки claim portals — fake clones крадут signatures за часы после announcement.",
            "Cross-chain на Move: Ika конкурирует с Wormhole, LayerZero — победит dev adoption.",
            "Deadline claim давит на rushed txs — пользователи approve malicious contracts в спешке.",
        ],
    },
    "incentiv": {
        "highlight": "Incentiv.net экспериментирует с non-transferable tokens и reward loops за on-chain actions — anti-sybil и pro-engagement design. Testnet campaigns награждают consistent behavior vs wash txs. Для исследователей tokenomics и фarmerов новых L1 narratives. Soulbound mechanics — ошибки permanent, unwanted SBT не продать. Roadmap governance и mainnet — типичный для новой chain.",
        "tips": ["Читай, какие actions mint soulbound tokens — часть marks irreversible reputation."],
        "warnings": ["Experimental tokenomics — не блокируй значительный капитал на untested L1."],
    },
    "infinifi": {
        "highlight": "Infinifi.xyz упаковывает fixed yield strategies для уставших от variable lending rates: curated vaults, duration choices, прозрачные fees. Конкурирует с Pendle fixed side, Notional, Element. Smart contract risk underlying protocols compounded — InfiniFi wrapper layer. Fixed rate привлекателен при high variable rates; менее при падении base rates. Сверяй maturity dates и early exit penalties.",
        "tips": ["Сравни fixed APY с Pendle implied yield — рынок иногда misprices duration."],
        "warnings": ["Fixed yield ≠ guaranteed principal — остаются smart contract и counterparty risks."],
    },
    "infinityg": {
        "highlight": "Infinityg.ai — creator economy в играх: AI tools генерируют content, blockchain фиксирует ownership и rewards creators. Narrative пересекается с AI agent gaming и modular engines. Ранняя стадия — demos, waitlists, potential token/points. Для creators с AI game assets и crypto-native monetization. Качество AI output и retention platform не доказаны at scale.",
        "tips": ["Экспортируй и бэкапь created assets off-platform — ранние platforms закрываются без migration."],
        "warnings": ["UGC IP rights мутны с AI training — читай creator ToS перед commercial use."],
        "facts": [
            "AI UGC gaming 2024–2025: Roblox + AI mods everywhere — crypto layer добавляет ownership, но не всегда players.",
            "Agent gaming hype: infinite NPC dialogue круто в demo — cost и moderation сложны at scale.",
            "Creator platform token launches: 95% ниже launch за 90 days — creator earnings в token страдают.",
        ],
    },
    "initia": {
        "highlight": "Initia.xyz продвигает «interwoven rollups» — Minitias (app chains) на Initia L1 с native interoperability и shared liquidity. Testnet и builder programs привлекли Cosmos и modular blockchain developers. INIT token и ecosystem fund поддерживают deployments. Для devs app-specific chains без full L1 from scratch. Bridge assets только через official Initia bridge.",
        "tips": ["Билдерам: Initia official SDK docs — rollup deployment ≠ single contract deploy."],
        "warnings": ["Bridge в новую Minitia — сверь chain ID; wrong network = funds in limbo."],
        "facts": [
            "Initia raised $18M+ 2024 — modular L1 sector crowded с Celestia app chains, Cosmos SDK, Arbitrum Orbit.",
            "Interwoven branding технически отличается — retail всё равно видит «ещё один L1 testnet».",
            "Ecosystem rollup quality uneven — первые Minitias часто memecoin chains до serious apps.",
        ],
    },
    "inkonchain": {
        "highlight": "Inkonchain.com — app directory Ink chain: DeFi, NFT, trading apps на Kraken-aligned L2. Нарратив: seamless path CEX → on-chain без friction. Optimism stack lineage типичен для exchange L2s. Early ecosystem incentives и Kraken user funnel. Для пользователей Kraken с self-custody DeFi и builders с exchange distribution. Стандартные L2 risks: bridge, sequencer downtime, early centralization.",
        "tips": ["Используй official Kraken/Ink bridge — third-party bridges добавляют лишний risk."],
        "warnings": ["Новый L2 sequencer centralization — следи за status page при high volatility."],
        "facts": [
            "Exchange L2 trend 2024: Ink рядом с Base (Coinbase), Scroll partners — CEXes строят on-chain moats.",
            "Kraken regulatory reputation — Ink может face stricter compliance чем anonymous L2s.",
            "App directory curated медленно — dead links часты первые месяцы после L2 launch.",
        ],
    },
    "intuition": {
        "highlight": "Intuition.systems — users и apps публикуют attestations о entities, skills, relationships: portable reputation для Web3 social и hiring. Конкурирует с EAS, Lens, Farcaster integrations. Early adopters mint и curate attestations; search UX evolving. Для builders trust layer без centralized databases. Spam attestations — сверяй reputation attester.",
        "tips": ["Перед доверием attestation сверь stake и history attester — не все stamps равны."],
        "warnings": ["Public attestations permanent on-chain — не публикуй sensitive personal data."],
        "facts": [
            "Attestation infra 2024: Intuition и EAS parallel — fragmentation standards hurts composability.",
            "Knowledge graph on-chain: storage costs limit granularity — off-chain IPFS hybrid common.",
            "Reputation markets: покупка attestations undermines graph — sybil resistance ongoing arms race.",
        ],
    },
    "io": {
        "highlight": "Io.net — DePIN flagship 2024: IO token, massive GPU count marketing, partnerships с AI startups. Workers deploy nodes, clients run training/inference jobs. Token volatility влияет на provider economics. Конкурирует с Akash, Render, AWS. Споры о real utilization vs registered GPUs в community. Для ML engineers с cheaper batch compute и GPU owners с idle hardware — с operational overhead.",
        "tips": ["Провайдерам: изолируй mining/GPU rental machines — io.net clients run arbitrary workloads."],
        "warnings": ["Произвольные compute jobs — security risk; dedicated hardware без personal data."],
        "facts": [
            "Io.net TGE 2024: IO among largest DePIN launches — FDV swings двигали sector sentiment weekly.",
            "Reported GPU count vs active jobs: skeptics highlight low utilization — team публикует dashboards.",
            "Solana-based IO token — congestion редко влияет на compute jobs, но на payouts и staking.",
        ],
    },
    "iopn": {
        "highlight": "Iopn.io строит self-sovereign identity и peer connectivity — apps без centralized gatekeepers. Testnet и developer grants для integrations. Narrative пересекается с ICP, ENS, Ceramic. Ранняя стадия — node operators и developers primary audience. Token и governance roadmap типичны для infra L1. Сверяй official IOPn channels — generic acronym attracts copycats.",
        "tips": ["Разработчикам: оцени IOPn SDK maturity vs established identity stacks перед migration."],
        "warnings": ["Ранние protocol upgrades могут ломать integrations — pin version в production apps."],
    },
    "irys": {
        "highlight": "Portal.irys.xyz — вход для developers funding storage uploads в Arweave через Irys bundler: fast uploads, lazy settlement, multi-chain payment. Rebrand Bundlr → Irys consolidated datachain vision. NFT projects, social apps, archives с permanent data. Pay once store forever — upfront cost calculation essential. Для devs с immutable media/metadata.",
        "tips": ["Оцени storage size перед upload — Arweave fees upfront; wrong file без refund."],
        "warnings": ["Permanent = permanent — не upload private keys или secrets в public storage."],
    },
    "ithaca": {
        "highlight": "Ithaca.xyz — institutional-grade options on-chain: structured products с yields и downside protection. Команда из Opyn — знает pitfalls DeFi derivatives. Для sophisticated DeFi users с Greeks, expiry, counterparty smart contract risk. Liquidity на exotic structures thin — exit до expiry может быть costly. Не для новичков — misconfigured positions теряют principal.",
        "tips": ["Читай payoff chart перед deposit — понимай max loss scenario."],
        "warnings": ["DeFi options без insurance — smart contract bug может обнулить structured position."],
    },
    "jiritsu": {
        "highlight": "Jiritsu.network — RWA и payment providers с cryptographic proofs off-chain state: bank balances, invoices, identity checks. B2B infra, не consumer app. Partnerships с fintech и tokenization platforms. Конкурирует с Chainlink Functions, Pyth, custom ZK oracle stacks. Token и node programs для early securers. Long sales cycles — retail airdrop uncertain.",
        "tips": ["Институциям: pilot с minimal value перед production RWA feed integration."],
        "warnings": ["Oracle failure в RWA misprices collateral — cascade liquidations возможны."],
    },
    "kadena": {
        "highlight": "Kadena.io когда-то продвигала enterprise-grade PoW с free gas через gas stations — KDA ecosystem проиграла EVM chains по developer adoption. 2024–2025 concerns о continuity — сверяй status перед investment. Chainweb architecture интересна technically; liquidity и dApp count упали с peak. Для legacy KDA holders и researchers — не default для new Web3 builds.",
        "tips": ["Перед любым действием с KDA сверь network status через official channels — ecosystem может быть degraded."],
        "warnings": ["Illiquid alt-L1 tokens — exit slippage extreme; не считай chain активно развивающейся без research."],
    },
    "kalshi": {
        "short": "Kalshi — kalshi.com, регулируемая биржа prediction markets в США: ставки на события через CFTC-licensed exchange.",
        "long": "Kalshi — биржа event contracts под надзором CFTC: yes/no markets на экономику, политику, погоду и другие события на kalshi.com.",
        "tagline": "Kalshi — регулируемый prediction market США.",
        "highlight": "Kalshi.com легально открывает prediction markets для пользователей из США — в отличие от офшорных crypto-платформ. Custody в USD, обязательный KYC, контракты сходятся к $0 или $1. Пересекается с нарративом Polymarket, но с TradFi compliance-слоем. Для резидентов США, которые хотят торговать событиями без crypto wallet friction. Не on-chain DeFi — риски централизованной биржи и geo-ограничения.",
        "facts": [
            "Kalshi CFTC approval 2020–2024: legal wins открыли эру US prediction markets до возвращения Polymarket в дискурс.",
            "Election cycle 2024 дал record volume — Kalshi и Polymarket mainstreamed «ставки на политику» в медиа.",
            "Regulated markets ограничивают leverage и типы событий — часть рынков Polymarket на Kalshi illegal.",
        ],
        "tips": ["Читай правила контракта про resolution source — спорные события обсуждают на форумах."],
        "warnings": ["Event contracts могут обнулиться — только risk capital; не investment advice."],
    },
    "kamino": {
        "tips": ["На multiply vaults ставь alert на collateral ratio — Solana blocks fill fast в crashes."],
        "warnings": ["Automated strategies скрывают complexity — один oracle tick может trigger cascade liquidation."],
    },
    "katana-katana-network": {
        "tips": ["Мости сначала test amount — на новых chains scams с wrong token address в первые недели."],
        "warnings": ["Mercenary capital уходит fast post-incentives — IL и token dump risk на LP pairs."],
    },
    "kerneldao": {
        "short": "Kernel DAO / Kelp — kerneldao.com/kelp liquid restaking rsETH и DeFi yield на Ethereum LRT stack.",
        "long": "Kernel DAO управляет протоколом Kelp на kerneldao.com/kelp: liquid restaking token rsETH, restaking на EigenLayer AVSs с DeFi composability.",
        "tagline": "Kelp rsETH — liquid restaking от Kernel DAO.",
        "highlight": "Kerneldao.com/kelp — портал liquid restaking Kelp DAO: стейкай ETH, получай rsETH для DeFi и restaking rewards с points. Конкурирует с Ether.fi, Renzo, Puffer в LRT-секторе post-EigenLayer. Restaking добавляет AVS slashing risk поверх Ethereum staking и smart contract layer. Points seasons разогнали TVL; post-TGE yield сжимается. Для держателей ETH, принимающих layered risk ради incremental yield.",
        "facts": [
            "LRT wars 2024: Kelp TVL billions peak — EigenLayer points meta гнала депозиты до snapshot rumors.",
            "Restaking slashing пока theoretical для большинства AVSs — первый major slash пересчитает все LRT.",
            "rsETH depeg в stress: March 2024 показал, что LRT не всегда 1:1 redeemable мгновенно.",
        ],
        "tips": ["Сравни rsETH exchange rate и redemption queue с ether.fi eETH — ликвидность differs по протоколам."],
        "warnings": ["Restaking stacks slashing risks — не считай LRT risk-free заменой ETH."],
    },
}

ENGLISH_PATTERNS = re.compile(
    r"(Verify |Early stage —|Competes with|For users |Check which |Developers:|"
    r"For sensitive |Use official |Read contract|Never paste|Before trusting|"
    r"Compare fixed|Export and backup|Institutions: run|Bridge small|Compare rsETH|"
    r"Read payoff|Estimate storage|Permanent means|Don't bridge|Don't treat|Don't upload|"
    r"Don't lock|don't accept|don't publish|don't treat|never click|never buy|"
    r"is portal for|brings prediction|targets traders|enables developers|lets users|"
    r"aims to solve|provides Zoom|builds infrastructure|hosts Ika|experiments with|"
    r"packages fixed|targets creator|pushes |hosts Ink|became DePIN|is entry for|"
    r"targets RWA|once marketed|Not on-chain|Not beginner|Not a protocol|Useful for|"
    r"Used by |Workers deploy|Monitor hyUSD|Start with minimum|Buyers: benchmark|"
    r"Providers: read|Bookmark claim|Read which actions|Builders: use|On multiply vaults|"
    r"Always review|Reduces UX|Hybrid model:|Quality competes|Peak scam|Users verify|"
    r"Governance and mainnet|Users bridge|Narrative:|Standard L2|Spam attestations|"
    r"Real utilization|Pay once store|Team lineage|Long sales cycles|Illiquid alt|"
    r"Automated strategies hide|Bridge only via|Bridge to new|Public attestations|"
    r"Arbitrary compute jobs|Early protocol upgrades|Fixed yield ≠|Soulbound mechanics|"
    r"Claim deadline|Cross-chain on Move|Agent gaming hype|Interwoven branding|"
    r"App directory quality|Knowledge graph on-chain|Reported GPU count|Bundlr →|"
    r"Options protocol exploits|Verifiable compute whitepapers|Gas station model|"
    r"Event contracts can go|Regulated markets cap|KMNO token launch|"
    r"Sushi appchain narrative|New chain vault APY|Mercenary capital exits|"
    r"Restaking stacks slashing)"
)


def main() -> None:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    for slug, patch in OVERRIDES.items():
        data[slug].update(patch)
    DATA.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    hits = []
    for slug, entry in data.items():
        for field in ("short", "long", "tagline", "highlight"):
            if ENGLISH_PATTERNS.search(entry[field]):
                hits.append(f"{slug}.{field}")
        for arr in ("facts", "tips", "warnings"):
            for i, item in enumerate(entry.get(arr, [])):
                if ENGLISH_PATTERNS.search(item):
                    hits.append(f"{slug}.{arr}[{i}]")

    if hits:
        print("Remaining English pattern hits:", len(hits))
        for h in hits[:30]:
            print(" ", h)
        if len(hits) > 30:
            print(f"  ... and {len(hits) - 30} more")
    else:
        print("No English pattern hits — OK")


if __name__ == "__main__":
    main()
