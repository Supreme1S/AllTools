#!/usr/bin/env python3
"""Build batch1_ru_content.json with full Russian prose for all 55 DEFI_BATCH_1 entries."""

import json
from pathlib import Path

OUT = Path(__file__).resolve().parent / "batch1_ru_content.json"

CONTENT: dict[str, dict] = {}

# Slugs order matches defi-batch-1.json
CONTENT["10kswap"] = {
    "short": "AMM на Starknet — свапы и пулы ликвидности, когда нужен нативный DEX без выхода из экосистемы.",
    "long": "10kSwap — один из ранних DEX на Starknet с классической AMM-моделью. Подходит для базовых свапов и LP, пока экосистема L2 набирает объём.",
    "tagline": "Нативный AMM Starknet — свап без моста на Ethereum mainnet.",
    "highlight": "10kSwap работает прямо в Starknet: подключаешь ArgentX или Braavos и меняешь токены on-chain с комиссиями в STRK/ETH. Концентрированная ликвидность не заявлена — это классический пул x*y=k, понятный любому, кто торговал на Uniswap v2. Объёмы скромнее, чем на зрелом L1, но для локальных пар и ранних токенов Starknet это рабочая точка входа. Следи за impermanent loss на волатильных парах и за тем, что часть токенов может быть неликвидной.",
    "facts": [
        "Гонка DEX на Starknet в 2023: 10kSwap конкурировал с JediSwap и MySwap за «первый миллиард TVL» — победил тот, кто первым раздал incentives, а не тот, у кого лучший UX.",
        "Название отсылает к мем-эре «10k swaps» — сообщество любит бренды с цифрами, даже если за ними стоит обычный fork.",
        "После airdrop STRK liquidity mining на Starknet DEX резко упал — классический паттерн «фарм → дамп → пустой город» на новых L2.",
    ],
    "tips": ["Проверяй price impact на мелких парах — глубина пула на Starknet часто тонкая."],
    "warnings": ["Неликвидные пары могут дать огромный slippage — всегда смотри превью перед подтверждением."],
}

CONTENT["9inch"] = {
    "short": "DEX на PulseChain — форк-эстетика с высоким APR на LP, когда готов к экзотике и рискам.",
    "long": "9inch — AMM на PulseChain от команды, знакомой по 9mm и meme-брендингу 9inch. Высокие yield-цифры привлекают фармеров, но риски контрагента и smart contract выше, чем на топовых DEX.",
    "tagline": "DEX PulseChain — высокий APR, высокий скептицизм.",
    "highlight": "9inch работает на PulseChain — форке Ethereum от сообщества Richard Heart. Свапы, фарминг и staking через ve-token модель напоминают Solidly/Velodrome, но на менее ликвидной сети. APR на LP часто выглядит «слишком хорошо» — это либо emissions, либо impermanent loss в будущем. Для опытных дегенов, которые понимают риски новых chain и неаудированных форков. Не место для капитала «поставил и забыл».",
    "facts": [
        "Запуск PulseChain в 2023: DEX вроде 9inch подняли TVL на миллионы за дни — потом половина ушла с первым дампом PLS.",
        "Соперничество 9inch vs 9mm — два DEX с похожим брендингом на одной chain; пользователи путали домены и теряли на phishing-клонах.",
        "ve(3,3) на micro-cap chain: lock на год ради 300% APR — день анлока часто страшнее любого медвежьего рынка.",
    ],
    "tips": ["APR = emissions + fees. Считай реальный yield после IL, а не headline-цифру на UI."],
    "warnings": ["PulseChain и форк-DEX — экозотика с повышенным риском smart contract и выхода из ликвидности."],
}

CONTENT["aave"] = {
    "short": "Blue-chip lending — supply/borrow, flash loans и multi-chain деплой, когда нужен проверенный money market.",
    "long": "Aave — один из старейших и крупнейших lending-протоколов DeFi. V3 на десятках сетей, isolated markets, flash loans и институциональный слой через Aave Arc/GHO.",
    "tagline": "Стандарт DeFi lending — borrow, supply, flash loan без посредника.",
    "highlight": "Aave V3 — эталон overcollateralized lending: кладёшь ETH, берёшь USDC, платишь variable или stable rate. Isolated markets ограничивают риск заражения на новых активах. Flash loans — killer feature для арбитража и ликвидаций без upfront capital. GHO — native stablecoin протокола. Multi-chain деплой (Ethereum, Arbitrum, Polygon, Base и др.) делает Aave хабом для yield и leverage. Health factor ниже 1 — ликвидация; следи за oracle price и LTV.",
    "facts": [
        "2022: Aave отклонил bug bounty $1M от whitehat — потом тот же баг нашли другие; дискуссия об ответственном disclosure vs казна протокола навсегда в истории DeFi.",
        "Эра flash loan attack 2020–2021: flash loans Aave стали оружием и инструментом — exploits на $100M+ использовали заёмный капитал за одну транзакцию.",
        "2023: Aave DAO проголосовало за запуск на zkSync и Scroll — экспансия на L2 быстрее, чем большинство TradFi-банков успели сказать «blockchain».",
    ],
    "tips": [
        "Перед borrow проверь utilization rate — на высоком utilization variable APR скачет вверх за часы.",
        "На L2 gas дешевле, но ликвидность collateral может быть тоньше — риск ликвидации выше на экзотике.",
    ],
    "warnings": ["Ликвидация автоматическая при health factor < 1 — держи буфер, особенно на волатильном collateral."],
}

# Import remaining entries from part files
from batch1_content_part2 import PART2  # noqa: E402
from batch1_content_part3 import PART3  # noqa: E402

CONTENT.update(PART2)
CONTENT.update(PART3)


def main() -> None:
    slugs = json.loads(
        (Path(__file__).resolve().parent / "defi-batch-1.json").read_text(encoding="utf-8")
    )
    ordered = [s["slug"] for s in slugs]
    missing = [s for s in ordered if s not in CONTENT]
    if missing:
        raise SystemExit(f"Missing translations for: {missing}")
    ordered_content = {k: CONTENT[k] for k in ordered}
    OUT.write_text(json.dumps(ordered_content, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(ordered_content)} entries to {OUT}")


if __name__ == "__main__":
    main()
