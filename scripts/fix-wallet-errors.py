"""Fix factual errors in wallet descriptions — both guide content and tool cards."""

path = '/Users/aleksei/Desktop/alltools/src/lib/mock-data.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

changes = []

# ─── TRUST WALLET ───────────────────────────────────────────────

# 1. Guide: replace "принадлежит Binance" with accurate description
old_tw_minus = "Минусы: принадлежит Binance (централизованный риск), только мобильная версия."
new_tw_minus = "Минусы: ранее приобретён Binance (работает независимо), нет десктоп-приложения."
if old_tw_minus in content:
    content = content.replace(old_tw_minus, new_tw_minus)
    changes.append("TW guide: fixed ownership claim + removed 'only mobile'")

# 2. Guide: "70+ блокчейнов" -> "100+ блокчейнов"
old_tw_chains = "Поддерживает 70+ блокчейнов: Bitcoin, Ethereum, Solana, Cosmos и другие."
new_tw_chains = "Поддерживает 100+ блокчейнов: Bitcoin, Ethereum, Solana, Cosmos, TON, Sui, Aptos и десятки других. 220M+ пользователей — крупнейший некастодиальный кошелёк в мире."
if old_tw_chains in content:
    content = content.replace(old_tw_chains, new_tw_chains)
    changes.append("TW guide: 70+ -> 100+ chains, added user count")

# 3. Guide: "Мобильный кошелёк экосистемы Binance" — more accurate
old_tw_desc = "Мобильный кошелёк экосистемы Binance."
new_tw_desc = "Некастодиальный мультичейн-кошелёк (мобильное приложение + браузерное расширение)."
if old_tw_desc in content:
    content = content.replace(old_tw_desc, new_tw_desc)
    changes.append("TW guide: updated description (not just Binance ecosystem)")

# 4. Guide: "Плюсы: мультичейн из коробки, простота для новичков."
old_tw_plus = "Плюсы: мультичейн из коробки, простота для новичков."
new_tw_plus = "Плюсы: 100+ сетей без ручной настройки RPC, 220M+ пользователей, стейкинг и покупка через карту."
if old_tw_plus in content:
    content = content.replace(old_tw_plus, new_tw_plus)
    changes.append("TW guide: updated pros")

# 5. Tool card long_description: fix 70+ -> 100+, remove "интегрированный в экосистему Binance"
old_tw_tool_long = (
    "Trust Wallet — мобильный некастодиальный кошелёк, интегрированный в экосистему Binance с 2018 года. "
    "Поддерживает свыше 70 блокчейнов, включая Bitcoin, Ethereum, BNB Chain, Solana и многие другие. "
)
new_tw_tool_long = (
    "Trust Wallet — некастодиальный мультичейн-кошелёк (мобильное приложение и браузерное расширение). "
    "Поддерживает свыше 100 блокчейнов, включая Bitcoin, Ethereum, BNB Chain, Solana, TON, Sui и многие другие. "
    "220M+ пользователей — крупнейший некастодиальный кошелёк в мире. "
)
if old_tw_tool_long in content:
    content = content.replace(old_tw_tool_long, new_tw_tool_long)
    changes.append("TW tool card: fixed chains, users, removed Binance dependency")

# 6. Tool card short_description
old_tw_tool_short = "Мультичейн-хранилище от экосистемы Binance. Стейкинг, dApp-браузер, открытый код."
new_tw_tool_short = "Мультичейн-кошелёк с 220M+ пользователей. 100+ сетей, стейкинг, dApp-браузер."
if old_tw_tool_short in content:
    content = content.replace(old_tw_tool_short, new_tw_tool_short)
    changes.append("TW tool card: fixed short_description")


# ─── METAMASK ───────────────────────────────────────────────────

# 7. Guide: "Ethereum и все EVM-совместимые сети" -> add Bitcoin, Solana, TRON
old_mm_guide = (
    "Стандарт индустрии. Браузерное расширение и мобильное приложение. "
    "Поддерживает Ethereum и все EVM-совместимые сети (Arbitrum, Optimism, Base, BNB Chain, Polygon и десятки других). "
    "30+ млн пользователей. Встроенный своп, покупка через фиат-провайдеров, управление NFT."
)
new_mm_guide = (
    "Стандарт индустрии. Браузерное расширение и мобильное приложение. "
    "Поддерживает Ethereum, все EVM-совместимые сети (Arbitrum, Optimism, Base, BNB Chain, Polygon и десятки других), "
    "а также Bitcoin, Solana и TRON. 30+ млн активных пользователей ежемесячно, 100M+ установок. "
    "Встроенный своп, покупка через фиат-провайдеров, управление NFT, карта MetaMask Card."
)
if old_mm_guide in content:
    content = content.replace(old_mm_guide, new_mm_guide)
    changes.append("MM guide: added Bitcoin/Solana/TRON support, MetaMask Card")

# 8. Tool card long_description for MetaMask
old_mm_tool_long = (
    "MetaMask — некастодиальное хранилище в формате браузерного расширения и нативного мобильного приложения. "
    "Покрывает Ethereum и весь спектр EVM-совместимых сетей — Arbitrum, Optimism, Polygon, BNB Chain и десятки других. "
)
new_mm_tool_long = (
    "MetaMask — некастодиальное хранилище в формате браузерного расширения и нативного мобильного приложения. "
    "Покрывает Ethereum, весь спектр EVM-совместимых сетей (Arbitrum, Optimism, Polygon, BNB Chain и десятки других), "
    "а также Bitcoin, Solana и TRON. "
)
if old_mm_tool_long in content:
    content = content.replace(old_mm_tool_long, new_mm_tool_long)
    changes.append("MM tool card: added Bitcoin/Solana/TRON")

# 9. MetaMask tool short_description
old_mm_tool_short = "Стандарт де-факто для EVM-экосистем. Браузерное расширение и мобильный кастодиан."
new_mm_tool_short = "Стандарт де-факто с 30M+ MAU. Ethereum, EVM, Bitcoin, Solana. Браузер и мобильное приложение."
if old_mm_tool_short in content:
    content = content.replace(old_mm_tool_short, new_mm_tool_short)
    changes.append("MM tool card: fixed short_description")


# ─── RABBY ──────────────────────────────────────────────────────

# 10. Guide: "относительно новый (2022)" -> more accurate
old_rabby_year = "Минусы: только EVM-сети, относительно новый (2022)."
new_rabby_year = "Минусы: только EVM-сети (100+), нет поддержки Solana/Bitcoin."
if old_rabby_year in content:
    content = content.replace(old_rabby_year, new_rabby_year)
    changes.append("Rabby guide: removed 'new (2022)', updated EVM count")

# 11. Guide: add user count to Rabby description
old_rabby_desc = (
    "Создан командой DeBank. Главное преимущество — предпросмотр транзакции человеческим языком до подписи. "
    "Вы видите: «Контракт X запрашивает разрешение потратить 100 USDT» вместо сырых hex-данных. "
    "Автоматически подбирает сеть под dApp. Встроенная симуляция транзакции."
)
new_rabby_desc = (
    "Создан командой DeBank. Главное преимущество — предпросмотр транзакции человеческим языком до подписи. "
    "Вы видите: «Контракт X запрашивает разрешение потратить 100 USDT» вместо сырых hex-данных. "
    "Автоматически подбирает сеть под dApp. Встроенная симуляция транзакции. "
    "4M+ установок, аудит SlowMist и Least Authority."
)
if old_rabby_desc in content:
    content = content.replace(old_rabby_desc, new_rabby_desc)
    changes.append("Rabby guide: added install count, audit info")

# 12. Tool card for Rabby — seems mostly ok, but can add user count
old_rabby_tool_long = (
    "Rabby Wallet — браузерное расширение от команды DeBank, спроектированное для радикального улучшения UX в DeFi. "
)
new_rabby_tool_long = (
    "Rabby Wallet — браузерное расширение, десктоп и мобильное приложение от команды DeBank. "
    "4M+ установок. Спроектирован для радикального улучшения UX в DeFi. "
)
if old_rabby_tool_long in content:
    content = content.replace(old_rabby_tool_long, new_rabby_tool_long)
    changes.append("Rabby tool card: added platforms + install count")


# ─── PHANTOM ────────────────────────────────────────────────────

# 13. Guide: "Ethereum и Polygon" -> full chain list
old_ph_guide = (
    "Лучший выбор для экосистемы Solana. Изначально создан как Solana-кошелёк, "
    "теперь поддерживает также Ethereum и Polygon. "
    "Интуитивный интерфейс, встроенный своп, стейкинг SOL в один клик, просмотр NFT с эскизами."
)
new_ph_guide = (
    "Лучший выбор для экосистемы Solana. Изначально создан как Solana-кошелёк, "
    "теперь поддерживает 8 сетей: Solana, Ethereum, Base, Polygon, Sui, Bitcoin, Monad, HyperEVM. "
    "20M+ пользователей. Встроенный своп-агрегатор, стейкинг SOL, NFT-галерея, "
    "Phantom Terminal для продвинутого трейдинга и Perps."
)
if old_ph_guide in content:
    content = content.replace(old_ph_guide, new_ph_guide)
    changes.append("Phantom guide: updated to 8 chains, 20M users, Terminal + Perps")

# 14. Guide: Phantom минусы
old_ph_minus = "Минусы: ограниченная EVM-поддержка (не все dApp), закрытый исходный код."
new_ph_minus = "Минусы: нет Arbitrum/Optimism/Avalanche, закрытый исходный код."
if old_ph_minus in content:
    content = content.replace(old_ph_minus, new_ph_minus)
    changes.append("Phantom guide: updated cons")

# 15. Guide: Phantom плюсы
old_ph_plus = "Плюсы: безупречный UX на Solana, скорость, стейкинг из коробки."
new_ph_plus = "Плюсы: лучший UX на рынке, 8 сетей из одной seed-фразы, Phantom Terminal."
if old_ph_plus in content:
    content = content.replace(old_ph_plus, new_ph_plus)
    changes.append("Phantom guide: updated pros")

# 16. Tool card long_description for Phantom
old_ph_tool_long = (
    "Phantom — некастодиальный кошелёк, взявший на себя роль витрины экосистемы Solana "
    "и расширивший поддержку на Ethereum и Polygon. "
)
new_ph_tool_long = (
    "Phantom — некастодиальный кошелёк с 20M+ пользователей. "
    "Поддерживает 8 сетей: Solana, Ethereum, Base, Polygon, Sui, Bitcoin, Monad, HyperEVM. "
)
if old_ph_tool_long in content:
    content = content.replace(old_ph_tool_long, new_ph_tool_long)
    changes.append("Phantom tool card: updated chains + user count")

# 17. Tool card short_description for Phantom
old_ph_tool_short = "Флагманский кошелёк Solana-экосистемы. Мультичейн, встроенные свопы, NFT-галерея."
new_ph_tool_short = "Флагман Solana-экосистемы с 20M+ пользователей. 8 сетей, свопы, NFT, Perps."
if old_ph_tool_short in content:
    content = content.replace(old_ph_tool_short, new_ph_tool_short)
    changes.append("Phantom tool card: fixed short_description")


# ─── WRITE BACK ─────────────────────────────────────────────────

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("=== Changes applied ===")
for c in changes:
    print(f"  ✓ {c}")
print(f"\nTotal: {len(changes)} changes. Run 'npm run build' to verify.")
