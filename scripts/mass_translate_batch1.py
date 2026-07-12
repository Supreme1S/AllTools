#!/usr/bin/env python3
"""Bulk-fix English prose in batch1_ru_content.json and regenerate batch1.ts."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
JSON_PATH = ROOT / "batch1_ru_content.json"
GENERATE = ROOT / "generate_batch1_ru.py"

# Per-slug complete Russian overrides (all user-facing fields)
OVERRIDES: dict[str, dict] = {
    "archly": {
        "highlight": "Archly.fi разворачивает Solidly-inspired mechanics: lock ARCH за veARCH, голосуй за pool emissions, LP зарабатывают trading fees + bribes. Multi-chain presence ловит рост локальных экосистем. Meta-game для DeFi strategists — bribe markets, vote optimization, dilution от новых pools. Не для новичков; награда за active management.",
        "tips": ["Перед LP проверь breakdown gauge APR — fees vs emissions vs bribes, а не headline number."],
        "warnings": ["ve-token locks длинные — early exit часто невозможен; не lock средства, которые нужны ликвидными."],
    },
    "arkm": {
        "short": "Arkham Intelligence — on-chain analytics и deanonymization labels, когда нужно знать, кто стоит за wallet.",
        "long": "Arkham — blockchain analytics platform с entity labels, wallet profiling и Intel Marketplace. Токен ARKM для доступа к platform и rewards.",
        "highlight": "Arkham.com агрегирует публичные chain data и применяет ML/heuristics для entity attribution — биржи, фонды, хакеры labeled. Intel Exchange позволяет покупать/продавать alpha о wallet identities. Спорно: privacy advocates ненавидят, трейдеры и compliance любят. Полезен для tracking smart money, hack fund flows, whale movements. Не trading venue — research tool.",
        "tips": ["Сверь labels Arkham с raw Etherscan — ML labels могут быть wrong или outdated."],
    },
    "arthswap": {
        "short": "Ведущий DEX на Astar Network — свапы и liquidity для Polkadot ecosystem parachain.",
        "long": "ArthSwap — primary AMM на Astar (Polkadot parachain) с multi-token pools и farm programs. Gateway для Substrate-ecosystem DeFi.",
        "highlight": "ArthSwap на Astar Network обслуживает Polkadot-adjacent liquidity: DOT derivatives, ASTR, ecosystem tokens. Cross-chain через Polkadot XCM расширяет reach. Fees ниже, чем на Ethereum, TVL меньше, чем у top L2 DEX. Нужен, если ты в экосистеме Astar; optional иначе.",
        "tips": ["Bridge assets на Astar через official Polkadot routes перед swap — проверь token contract."],
        "warnings": ["Parachain liquidity тоньше, чем на Ethereum L2 — size accordingly."],
    },
    "atomichub": {
        "short": "NFT marketplace на WAX — mint, buy и sell digital collectibles с zero gas fee UX.",
        "highlight": "AtomicHub на wax.atomichub.io — NFT infrastructure для WAX: creators mint collections, users trade через WAX Cloud Wallet в пару кликов. Zero gas model через resource staking. Dominant venue для gaming NFTs (Alien Worlds и др.). Не fine art OpenSea — functional gaming assets и collectibles at scale.",
        "tips": ["Проверь creator коллекции перед покупкой — scam collections копируют popular game assets."],
        "warnings": ["Gaming NFTs часто illiquid — floor price ≠ exit price для твоего specific asset."],
    },
    "aurigami": {
        "long": "Aurigami — money market на Aurora chain с algorithmic interest rates. Модель как Aave/Compound в экосистеме Near.",
        "highlight": "Aurigami Finance на Aurora предлагает supply/borrow для NEAR-wrapped и bridged assets. Aurora приносит EVM на Near — Aurigami native DeFi layer. Меньше Aave, но закрывает gap для Near community. Liquidation risks, utilization dynamics — standard lending playbook. Проверяй oracle sources и collateral factors.",
        "facts": [
            "Aurora launch as Near EVM: Aurigami среди первых lending protocols — first mover на small chain.",
            "Near ecosystem TVL never matched L2 stars — Aurigami quietly serves niche без headline hacks.",
            "Медвежий 2022: Near-native protocols потеряли users на миграцию в Arbitrum — Aurigami удержал core Near believers.",
        ],
        "tips": ["Сравни borrow APR across Aurora protocols — small ecosystem, rates могут diverge."],
        "warnings": ["Малые lending markets = thinner liquidation liquidity — volatile collateral extra risky."],
    },
    "avalaunch": {
        "highlight": "Avalaunch.app проводит IDO для Avalanche-native projects: stake AVAX или platform token за tier, участвуй в sales, claim tokens на TGE. Реальность launchpad post-2021: большинство IDO underperform, gems единицы. Due diligence по fundamentals проекта обязателен. KYC иногда требуется в зависимости от sale.",
        "facts": [
            "Launchpad golden era 2021: sales Avalaunch sold out за секунды — average ROI positive тогда, negative сейчас.",
            "AVAX ATH $146 → launchpad hype correlated — tier stakers felt rich on paper, illiquid на cliff.",
            "Rug IDOs на каждой chain: Avalaunch delisted projects после community outrage — reputation management ongoing.",
        ],
        "warnings": ["IDO ≠ investment advice — majority launchpad tokens trend to zero; size as lottery ticket."],
    },
    "avalon-finance": {
        "long": "Avalon Finance — lending protocol с фокусом на Bitcoin collateral. Unlock BTC liquidity без продажи, multi-chain deployment.",
        "highlight": "Avalon на app.avalonfinance.xyz позволяет держателям Bitcoin deposit BTC (wrapped/native forms) и borrow stablecoins. Use case «HODL but need liquidity». CeDeFi elements возможны в зависимости от product line — проверь custody model. LTV, liquidation thresholds и oracle pricing для BTC critical to monitor.",
        "facts": [
            "BTC DeFi lending вырос post-2024 ETF era — holders wanted yield и liquidity без tax event от продажи.",
            "Каждый BTC lending protocol faces same question: who holds keys? Avalon marketing emphasizes transparency — verify on-chain.",
            "Liquidation cascades на BTC collateral hurt harder — correlated dumps across all BTC-backed protocols simultaneously.",
        ],
        "tips": ["Conservative LTV на BTC — 50% safer than max allowed; volatility still bites «safe» collateral."],
        "warnings": ["BTC wrapper и custody model varies — understand what you deposit перед large amounts."],
    },
    "avnu": {
        "highlight": "Avnu.fi агрегирует Starknet DEX liquidity — пользователь получает optimal price без manually checking each venue. Похоже на 1inch на Ethereum. Поддерживает limit orders и expanding advanced features. Нужный tool по мере роста Starknet DEX fragmentation. Gas paid in STRK/ETH на Starknet.",
        "facts": [
            "Every L2 eventually gets aggregator — Avnu стал Starknet's 1inch за months of ecosystem maturity.",
            "Aggregator volume exceeds individual DEX during airdrop seasons — routing txs spike с STRK campaigns.",
            "Split routing saved users single-digit % на large swaps — adds up на whale size, invisible на $10 trades.",
        ],
        "tips": ["Slippage tolerance: 0.5% usually enough на Starknet; volatile tokens need 1%+."],
        "warnings": ["Aggregator adds smart contract layer — use official app.avnu.fi, verify URL."],
    },
    "axiom": {
        "long": "Axiom.trade — advanced trading interface для Solana ecosystem: fast execution, perp access, wallet tracking. Популярен среди memecoin и perp traders.",
        "highlight": "Axiom агрегирует Solana trading workflows: connect wallet, trade tokens и perps с minimal latency UI. Charting, order flow и social features target active traders, не long-term holders. Solana meme season drove adoption — speed matters когда token moves 50% за minutes. Не DEX сам по себе — frontend и routing layer.",
        "facts": [
            "Solana meme mania 2024–2025: terminals like Axiom, Photon, BullX competed — UX war as fierce as chain TPS war.",
            "Copy trading на Solana: follow wallet, auto-buy — made millionaires и victims same week.",
            "axiom.trade phishing clones rampant during SOL peaks — bookmark official domain.",
        ],
        "tips": ["Set slippage и priority fee перед FOMO click — Solana congested = failed or sandwiched txs."],
        "warnings": ["Memecoin trading is gambling — terminal speed doesn't fix 99% loss rate на random tokens."],
    },
    "base-name-service": {
        "long": "Base Name Service (Basenames) — naming protocol на Base L2 от Coinbase ecosystem. Register username.base linked to address.",
        "highlight": "Basenames на basename.app — on-chain names на Base: send to «alice.base» instead of 0x… Integrates с Coinbase Wallet и Base ecosystem apps. Cheaper registration than ENS на mainnet. Identity layer для social и payment use cases на Base. Resolvers, subdomains и renewals follow ENS-like model.",
        "facts": [
            "Coinbase pushed Basenames hard at Base launch — free/discounted names drove millions of registrations.",
            "ENS vs Basenames: two namespaces, potential confusion — alice.eth ≠ alice.base.",
            "Onchain Summer 2023: basename became flex PFP equivalent для Base builders.",
        ],
        "tips": ["Register primary name перед тем как someone squats your brand — cheap insurance."],
        "warnings": ["Names expire if not renewed — set reminder like domain registration."],
    },
    "bastion-protocol": {
        "long": "Bastion Protocol — money market на Aurora с cToken model similar to Compound. Near-native DeFi lending option.",
        "highlight": "Bastion на Aurora предлагает supply/borrow markets для bridged assets на Near's EVM layer. Interest rates algorithmic based on utilization. Competes с Aurigami за same user base. Smaller TVL, higher relative risk на exotic collateral. Historical Near ecosystem protocol — survived multiple market cycles на niche chain.",
        "facts": [
            "Near + Aurora dual branding confused users for years — Bastion на Aurora, not Near L1 directly.",
            "2022 Terra collapse: algorithmic stable borrowers на all lending protocols rekt — Bastion had minimal UST exposure.",
            "Bastion vs Aurigami на same chain — liquidity split hurts both; classic small ecosystem problem.",
        ],
        "tips": ["Check utilization на borrow asset — high utilization spikes borrow APR fast."],
        "warnings": ["Niche chain lending — exit liquidity и oracle reliability lower than Ethereum blue chips."],
    },
    "bebop": {
        "long": "Bebop — liquidity aggregator targeting professional и semi-pro traders. Request-for-quote model alongside AMM aggregation для better execution на size.",
        "highlight": "Bebop.xyz routes large swaps через market maker quotes и DEX liquidity — minimizes price impact vs single-pool AMM. Supports multiple chains и pairs. PMM и RFQ hybrid reduces MEV exposure для takers. Built для traders frustrated с Uniswap slippage на $100K+ trades. Gas и approval flow optimized для repeat users.",
        "facts": [
            "RFQ models gained share post-MEV awareness — Bebop rode «private market maker fills your trade» narrative.",
            "Wintermute и other MMs integrate с Bebop — institutional liquidity retail can access.",
            "Aggregator wars: 1inch, Matcha, Bebop, CowSwap — each claims best execution; truth is pair-dependent.",
        ],
        "tips": ["Compare Bebop quote с CowSwap и 1inch на same trade — best venue changes by pair и size."],
        "warnings": ["RFQ quotes expire — confirm quickly or refresh before sign."],
    },
}

# Global phrase replacements (English -> Russian) applied to all string values
PHRASES: list[tuple[str, str]] = [
    (r"\bdeploys\b", "разворачивает"),
    (r"\bruns\b", "ведёт"),
    (r"\boffers\b", "предлагает"),
    (r"\bprovides\b", "предоставляет"),
    (r"\benables\b", "позволяет"),
    (r"\buses LayerZero for\b", "использует LayerZero для"),
    (r"\buser gets\b", "пользователь получает"),
    (r"\busers get\b", "пользователи получают"),
    (r"\bAlways verify\b", "Всегда проверяй"),
    (r"\bAlways compare\b", "Всегда сравнивай"),
    (r"\bAlways read\b", "Всегда читай"),
    (r"\bCompare ", "Сравни "),
    (r"\bCheck ", "Проверь "),
    (r"\bVerify ", "Проверь "),
    (r"\bRead ", "Читай "),
    (r"\bUse ", "Используй "),
    (r"\bFor large stables compare\b", "Для крупных stables сравни"),
    (r"\bdon't assume\b", "не считай"),
    (r"\bdon't stake\b", "не stake"),
    (r"\bdon't want\b", "не хочешь"),
    (r"\bEssential tool\b", "Нужный tool"),
    (r"\bEssential venue\b", "Нужная площадка"),
    (r"\bEssential research tool\b", "Нужный research tool"),
    (r"\bNot a DEX itself\b", "Не DEX сам по себе"),
    (r"\bNot deep global liquidity\b", "Не deep global liquidity"),
    (r"\bMemecoin trading is gambling\b", "Memecoin trading — gambling"),
    (r"\bNames expire if not renewed\b", "Names expire без renewal"),
    (r"\bToken sales are high risk\b", "Token sales — high risk"),
    (r"\bCharts show price, not legitimacy\b", "Charts показывают price, не legitimacy"),
    (r"\bPublic profile exposes holdings\b", "Public profile exposes holdings"),
    (r"\bBunnyfi.io offers yield vaults similar category to Beefy\b", "Bunnyfi.io предлагает yield vaults категории Beefy"),
    (r"\bCometBridge provides cross-chain transfer UI\b", "CometBridge предоставляет cross-chain transfer UI"),
    (r"\bCompound invented modern DeFi lending UX\b", "Compound invented modern DeFi lending UX"),
    (r"\bConnext Bridge на bridge.connext.network enables\b", "Connext Bridge на bridge.connext.network позволяет"),
    (r"\bConvexfinance.com locks more veCRV than anyone\b", "Convexfinance.com locks больше veCRV, чем кто-либо"),
    (r"\bCore DAO на bridge.coredao.org uses LayerZero for\b", "Core DAO на bridge.coredao.org использует LayerZero для"),
    (r"\bSwap.cow.fi uses intent-based batch auctions\b", "Swap.cow.fi использует intent-based batch auctions"),
    (r"\bDAO Maker app.daomaker.com runs SHO sales\b", "DAO Maker app.daomaker.com проводит SHO sales"),
    (r"\bDeBank.com индексирует wallets across\b", "DeBank.com индексирует wallets across"),
    (r"\bdeBridge.finance enables asset transfers\b", "deBridge.finance позволяет asset transfers"),
    (r"\bDeSyn.io lets managers create\b", "DeSyn.io позволяет managers создавать"),
    (r"\bDex.guru combines TradingView-style charts\b", "Dex.guru combines TradingView-style charts"),
    (r"\bBlueMove.net deploys на\b", "BlueMove.net развёрнут на"),
    (r"\bBulk даёт unified trading UX across\b", "Bulk даёт unified trading UX across"),
    (r"\bBungee от Socket.tech сравнивает routes across\b", "Bungee от Socket.tech сравнивает routes across"),
    (r"\bBastion на Aurora offers supply/borrow markets\b", "Bastion на Aurora предлагает supply/borrow markets"),
    (r"\bBebop.xyz routes large swaps\b", "Bebop.xyz routes large swaps"),
]


def apply_phrases(text: str) -> str:
    for pat, repl in PHRASES:
        text = re.sub(pat, repl, text)
    return text


def main() -> None:
    data: dict[str, dict] = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    for slug, fields in OVERRIDES.items():
        if slug in data:
            data[slug].update(fields)
    for slug, entry in data.items():
        for key, val in entry.items():
            if isinstance(val, str):
                entry[key] = apply_phrases(val)
            elif isinstance(val, list):
                entry[key] = [apply_phrases(v) for v in val]
    JSON_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    subprocess.run([sys.executable, str(GENERATE)], check=True)
    print("Applied patches and regenerated batch1.ts")


if __name__ == "__main__":
    main()
