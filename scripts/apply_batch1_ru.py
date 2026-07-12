#!/usr/bin/env python3
"""Apply full Russian translations to all DEFI_BATCH_1 entries."""

from pathlib import Path

FILE = Path(__file__).resolve().parents[1] / "src/lib/catalog/content/defi/batch1.ts"

ENTRIES: dict[str, str] = {}


def reg(slug: str, body: str) -> None:
    key = f'"{slug}"' if slug[0].isdigit() or "-" in slug else slug
    ENTRIES[key] = body.strip()


reg("10kswap", '''
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
      "После airdrop STRK liquidity mining на Starknet DEX резко упал — классический паттерн «фарм → дамп → пустой город» на новых L2.",
    ],
    tips: [
      "Проверяй price impact на мелких парах — глубина пула на Starknet часто тонкая.",
    ],
    warnings: [
      "Неликвидные пары могут дать огромный slippage — всегда смотри превью перед подтверждением.",
    ],
  }''')

reg("9inch", '''
  "9inch": {
    short:
      "DEX на PulseChain — форк-эстетика с высоким APR на LP, когда готов к экзотике и рискам.",
    long:
      "9inch — AMM на PulseChain от команды, знакомой по 9mm и meme-брендингу 9inch. Высокие yield-цифры привлекают фармеров, но риски контрагента и smart contract выше, чем на топовых DEX.",
    tagline: "DEX PulseChain — высокий APR, высокий скептицизм.",
    highlight:
      "9inch работает на PulseChain — форке Ethereum от сообщества Richard Heart. Свапы, фарминг и staking через ve-token модель напоминают Solidly/Velodrome, но на менее ликвидной сети. APR на LP часто выглядит «слишком хорошо» — это либо emissions, либо impermanent loss в будущем. Для опытных дегенов, которые понимают риски новых chain и неаудированных форков. Не место для капитала «поставил и забыл».",
    facts: [
      "Запуск PulseChain в 2023: DEX вроде 9inch подняли TVL на миллионы за дни — потом половина ушла с первым дампом PLS.",
      "Соперничество 9inch vs 9mm — два DEX с похожим брендингом на одной chain; пользователи путали домены и теряли на phishing-клонах.",
      "ve(3,3) на micro-cap chain: lock на год ради 300% APR — день анлока часто страшнее любого медвежьего рынка.",
    ],
    tips: [
      "APR = emissions + fees. Считай реальный yield после IL, а не headline-цифру на UI.",
    ],
    warnings: [
      "PulseChain и форк-DEX — экзотика с повышенным риском smart contract и выхода из ликвидности.",
    ],
  }''')

# NOTE: remaining entries loaded from companion module to keep script maintainable
from batch1_ru_entries_part2 import ENTRIES_PART2  # noqa: E402

ENTRIES.update(ENTRIES_PART2)


def replace_entry(content: str, key: str, new_block: str) -> str:
    start_marker = f"\n  {key}: {{"
    idx = content.find(start_marker)
    if idx == -1:
        raise ValueError(f"Entry not found: {key}")
    depth = 0
    i = content.find("{", idx)
    while i < len(content):
        if content[i] == "{":
            depth += 1
        elif content[i] == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                break
        i += 1
    else:
        raise ValueError(f"Could not parse entry: {key}")
    return content[:idx] + "\n" + new_block + content[end:]


def main() -> None:
    content = FILE.read_text(encoding="utf-8")
    for key, block in ENTRIES.items():
        content = replace_entry(content, key, block)
    FILE.write_text(content, encoding="utf-8")
    print(f"Updated {len(ENTRIES)} entries in {FILE}")


if __name__ == "__main__":
    main()
