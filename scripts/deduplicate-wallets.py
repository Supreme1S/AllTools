"""Remove duplication: short descriptions, all detail in pros/cons."""

path = '/Users/aleksei/Desktop/alltools/src/lib/mock-data.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

changes = []

# TRUST WALLET
old = (
    "Некастодиальный мультичейн-кошелёк (мобильное приложение + браузерное расширение). "
    "Поддерживает 100+ блокчейнов: Bitcoin, Ethereum, Solana, Cosmos, TON, Sui, Aptos и десятки других. "
    "220M+ пользователей — крупнейший некастодиальный кошелёк в мире. "
    "Приобретён Binance в 2018 году, с конца 2023 — независимая компания. "
    "Встроенный dApp-браузер, стейкинг, покупка через банковскую карту."
)
new = (
    "Некастодиальный мультичейн-кошелёк (мобильное приложение + браузерное расширение). "
    "Крупнейший некастодиальный кошелёк в мире. "
    "Приобретён Binance в 2018 году, с конца 2023 — независимая компания."
)
if old in content:
    content = content.replace(old, new)
    changes.append("TW")

# RABBY
old = (
    "Создан командой DeBank. Главное преимущество — предпросмотр транзакции человеческим языком до подписи. "
    "Вы видите: «Контракт X запрашивает разрешение потратить 100 USDT» вместо сырых hex-данных. "
    "Автоматически подбирает сеть под dApp. Встроенная симуляция транзакции. "
    "4M+ установок, аудит SlowMist и Least Authority."
)
new = "Создан командой DeBank. Главное преимущество — предпросмотр транзакции человеческим языком до подписи."
if old in content:
    content = content.replace(old, new)
    changes.append("Rabby")

# PHANTOM
old = (
    "Лучший выбор для экосистемы Solana. Изначально создан как Solana-кошелёк, "
    "теперь поддерживает 8 сетей: Solana, Ethereum, Base, Polygon, Sui, Bitcoin, Monad, HyperEVM. "
    "20M+ пользователей. Встроенный своп-агрегатор, стейкинг SOL, NFT-галерея, "
    "Phantom Terminal для продвинутого трейдинга и Perps."
)
new = "Лучший выбор для экосистемы Solana. Изначально создан как Solana-кошелёк, теперь мультичейн-кошелёк с 20M+ пользователей."
if old in content:
    content = content.replace(old, new)
    changes.append("Phantom")

# METAMASK
old = (
    "Стандарт индустрии. Браузерное расширение и мобильное приложение. "
    "Поддерживает Ethereum, все EVM-совместимые сети (Arbitrum, Optimism, Base, BNB Chain, Polygon и десятки других), "
    "а также Bitcoin, Solana и TRON. 30+ млн активных пользователей ежемесячно, 100M+ установок. "
    "Встроенный своп, покупка через фиат-провайдеров, управление NFT, карта MetaMask Card."
)
new = "Стандарт индустрии. Браузерное расширение и мобильное приложение. Самый распространённый Web3-кошелёк — 30M+ активных пользователей ежемесячно."
if old in content:
    content = content.replace(old, new)
    changes.append("MetaMask")

# TREZOR
old = (
    "Открытый исходный код. EAL6+ Secure Element. Поддержка passphrase (25-е слово). "
    "Safe 5 добавляет цветной сенсорный экран и поддержку сотен монет."
)
new = "Семейство аппаратных кошельков SatoshiLabs. Safe 3 — компактный, Safe 5 — флагман с сенсорным экраном."
if old in content:
    content = content.replace(old, new)
    changes.append("Trezor")

# LEDGER
old = (
    "BOLOS OS, чип Secure Element EAL5+. Закрытый исходный код. "
    "Ledger Recovery — спорная функция платного восстановления seed через третьих лиц. "
    "Работает с тысячами монет и DeFi-протоколов."
)
new = "Аппаратный кошелёк с сенсорным E Ink-экраном. Французская компания Ledger SAS."
if old in content:
    content = content.replace(old, new)
    changes.append("Ledger")

# COLD CARD
old = (
    "Биткоин-максималист. Air-gap: подпись транзакций через SD-карту. "
    "Нет USB-подключения — максимальная изоляция. Частично-подписанные биткоин-транзакции (PSBT)."
)
new = "Биткоин-максималист от Coinkite. Air-gap через SD-карту — максимальная физическая изоляция от сети."
if old in content:
    content = content.replace(old, new)
    changes.append("Coldcard")

# KEYSTONE
old = (
    "Air-gap через QR-коды. Три чипа безопасности EAL5+. "
    "Открытый исходный код. Работает с MetaMask, Rabby, OKX Wallet."
)
new = "Аппаратный кошелёк с air-gap через QR-коды. Три чипа безопасности EAL5+."
if old in content:
    content = content.replace(old, new)
    changes.append("Keystone")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("=== Changes ===")
for c in changes:
    print(f"  OK {c}")
print(f"\nTotal: {len(changes)}. Build to verify.")
