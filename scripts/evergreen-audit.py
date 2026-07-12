"""Audit all 8 guides for evergreen content — remove stale prices, years, versions."""

import re

path = '/Users/aleksei/Desktop/alltools/src/lib/mock-data.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

changes = []

# ── G1: Hardware wallet prices ──
replacements_g1 = [
    ('~$79', '≈$80'),
    ('~$169', '≈$170'),
    ('~$249', '≈$250'),
    ('~$149', '≈$150'),
]

for old, new in replacements_g1:
    if old in content:
        content = content.replace(old, new)
        changes.append(f'G1: {old} -> {new}')

# Add price disclaimer after Keystone 3 Pro description
disclaimer = (
    "\n"
    "> 📌 Цены ориентировочные на момент написания. "
    "Проверяйте актуальную стоимость на официальном сайте производителя.\n"
)

keystone_marker = "Работает с MetaMask, Rabby, OKX Wallet."
if keystone_marker in content and disclaimer not in content:
    content = content.replace(
        keystone_marker + "\n",
        keystone_marker + disclaimer,
        1
    )
    changes.append("G1: added price disclaimer after Keystone")

# ── G2: Remove detailed commissions table, fix year and version ──
g2_excerpt_old = '"Централизованные и децентрализованные биржи: комиссии, ликвидность, безопасность, риски и лучшие площадки 2026."'
g2_excerpt_new = '"Централизованные и децентрализованные биржи: комиссии, ликвидность, безопасность, риски и лучшие площадки."'
if g2_excerpt_old in content:
    content = content.replace(g2_excerpt_old, g2_excerpt_new)
    changes.append("G2: removed 2026 from excerpt")

# Uniswap v4 -> Uniswap
if "Uniswap v4, PancakeSwap, Curve." in content:
    content = content.replace("Uniswap v4, PancakeSwap, Curve.", "Uniswap, PancakeSwap, Curve.")
    changes.append("G2: Uniswap v4 -> Uniswap (AMM list)")

# Replace the detailed commissions table section
old_commissions = """## Комиссии: детальный разбор

| Биржа | Спот (мейкер/тейкер) | Фьючерсы (мейкер/тейкер) |
|-------|---------------------|------------------------|
| Binance | 0.1% / 0.1% | 0.02% / 0.04% |
| Bybit | 0.1% / 0.1% | 0.02% / 0.055% |
| OKX | 0.08% / 0.1% | 0.02% / 0.05% |
| Coinbase | 0.4% / 0.6% | 0.01% / 0.02% |
| Kraken | 0.16% / 0.26% | 0.02% / 0.05% |

> 📌 Почему на Coinbase дорого? Платите за простоту интерфейса, регуляцию и страховку. Профессионалы используют Coinbase Advanced с другими тарифами.

DEX комиссии: 0.3% стандарт на большинстве AMM + газ сети ($30-50 на Ethereum в пике, копейки на L2: Arbitrum, Optimism, Base)."""

new_commissions = """## Комиссии: что важно знать

Комиссии CEX зависят от биржи и вашего торгового объёма. Ориентировочные диапазоны: спот 0.02-0.6%, фьючерсы 0.01-0.06%. Выше объём и наличие токенов биржи на балансе — ниже ставка.

DEX комиссии: зависят от протокола и блокчейна. Базовые свопы — от 0.01% на новых AMM до 0.3% на классических. Дополнительно — газ сети (копейки на L2, доллары на Ethereum в пиковые часы).

> 📌 Всегда проверяйте актуальные комиссии на сайте биржи — они могут измениться."""

if old_commissions in content:
    content = content.replace(old_commissions, new_commissions)
    changes.append("G2: replaced detailed commissions table with evergreen paragraph")
else:
    changes.append("G2: WARNING - commissions table not found!")

# ── G3: Fix $3 billion claim ──
g3_old = "С 2021 года через мосты украдено более $3 миллиардов."
g3_new = "Мосты регулярно становятся целью крупнейших атак — совокупный ущерб исчисляется миллиардами долларов и продолжает расти."
if g3_old in content:
    content = content.replace(g3_old, g3_new)
    changes.append("G3: rephrased $3 billion claim to evergreen")

# ── G4: Remove 2026, v4, make APY evergreen ──
g4_title_old = '"DeFi-стратегии 2026: от консервативных до дегенских"'
g4_title_new = '"DeFi-стратегии: от консервативных до дегенских"'
if g4_title_old in content:
    content = content.replace(g4_title_old, g4_title_new)
    changes.append("G4: removed 2026 from title")

g4_excerpt_old = '"Обзор DeFi-стратегий на 2026 год: доходность, риски, протоколы и распределение портфеля от консервативного до агрессивного."'
g4_excerpt_new = '"Обзор DeFi-стратегий: доходность, риски, протоколы и распределение портфеля от консервативного до агрессивного."'
if g4_excerpt_old in content:
    content = content.replace(g4_excerpt_old, g4_excerpt_new)
    changes.append("G4: removed 2026 from excerpt")

g4_h1_old = "# DeFi-стратегии 2026: от консервативных до дегенских"
g4_h1_new = "# DeFi-стратегии: от консервативных до дегенских"
if g4_h1_old in content:
    content = content.replace(g4_h1_old, g4_h1_new)
    changes.append("G4: removed 2026 from H1")

g4_content_old = "В 2026 году экосистема предлагает десятки протоколов с разной доходностью и риском."
g4_content_new = "Экосистема предлагает десятки протоколов с разной доходностью и риском."
if g4_content_old in content:
    content = content.replace(g4_content_old, g4_content_new)
    changes.append("G4: removed 'В 2026 году' from intro")

# Aave v4 -> Aave
if "Aave v4" in content:
    content = content.replace("Aave v4", "Aave")
    changes.append("G4: Aave v4 -> Aave")

# Uniswap v4 in Aggressive section
if "Uniswap v4 — новый движок с hooks." in content:
    content = content.replace(
        "Uniswap v4 — новый движок с hooks.",
        "Uniswap — модульная архитектура с hooks."
    )
    changes.append("G4: Uniswap v4 -> Uniswap (Aggressive section)")

# Add APY disclaimer after intro
apy_note = (
    "\n> 📌 Доходности в таблицах — ориентировочные. "
    "Ставки меняются ежедневно в зависимости от загрузки протоколов. "
    "Проверяйте актуальные APY на сайтах протоколов перед входом в позицию."
)
degen_marker = "от -100% до +10 000%)."
if degen_marker in content and apy_note not in content:
    content = content.replace(degen_marker, degen_marker + apy_note, 1)
    changes.append("G4: added APY disclaimer")

# ── G5: No changes needed ──
changes.append("G5: verified — evergreen framework, no changes needed")

# ── G6: Fix prices and year ──
g6_year_old = "В 2026 году AI — это не хайп, а рабочий инструмент."
g6_year_new = "AI — это не хайп, а рабочий инструмент."
if g6_year_old in content:
    content = content.replace(g6_year_old, g6_year_new)
    changes.append("G6: removed 'В 2026 году'")

content = content.replace("~$20/мес", "от $20/мес")
changes.append("G6: ~$20/мес -> от $20/мес")

content = content.replace("~$10/мес", "от $10/мес")
changes.append("G6: ~$10/мес -> от $10/мес")

content = content.replace("~$15/мес", "от $15/мес")
changes.append("G6: ~$15/мес -> от $15/мес")

content = content.replace("~$5/мес", "от $5/мес")
changes.append("G6: ~$5/мес -> от $5/мес")

# Add price disclaimer
g6_disclaimer = (
    "\n> 💡 Цены указаны на момент написания. "
    "Тарифы AI-сервисов меняются — уточняйте актуальные цены на сайтах.\n"
)
g6_intro_marker = "потом добавляйте специализированные."
if g6_intro_marker in content and "Цены указаны на момент написания" not in content:
    content = content.replace(
        g6_intro_marker + "\n",
        g6_intro_marker + g6_disclaimer,
        1
    )
    changes.append("G6: added AI price disclaimer")

# ── G7: 300+ -> hundreds ──
g7_old = "Мы протестировали 300+ сервисов и свели оценку к 7 критериям."
g7_new = "Мы протестировали сотни сервисов и свели оценку к 7 критериям."
if g7_old in content:
    content = content.replace(g7_old, g7_new)
    changes.append("G7: 300+ -> сотни сервисов")

# ── G8: No changes needed ──
changes.append("G8: verified — already evergreen, no changes needed")

# ── Write back ──
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("=== Changes applied ===")
for c in changes:
    print(f"  ✓ {c}")
print("\nDone. Run 'npm run build' to verify.")
