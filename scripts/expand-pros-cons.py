"""Add realistic pros and cons for ALL wallets in the guide."""

path = '/Users/aleksei/Desktop/alltools/src/lib/mock-data.ts'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

changes = []

# ─── TRUST WALLET ───────────────────────────────────────────────

old_tw = """Плюсы: 100+ сетей без ручной настройки RPC, 220M+ пользователей, стейкинг и покупка через карту."""

new_tw = """Плюсы: 100+ сетей без ручной настройки RPC, крупнейшая база 220M+ пользователей, встроенный dApp-браузер, стейкинг и покупка через карту, NFT-поддержка, открытый wallet-core.

Минусы: горячий кошелёк (фишинг и вредоносное ПО угрожают средствам), нет интеграции с аппаратными кошельками, браузерное расширение уступает мобильной версии."""

if old_tw in content:
    content = content.replace(old_tw, new_tw)
    changes.append("TW: expanded pros/cons")

# ─── RABBY ──────────────────────────────────────────────────────

old_rabby_pros = """Плюсы: безопасная подпись, auto chain-switch, удобный просмотр портфеля.
Минусы: только EVM-сети (100+), нет поддержки Solana/Bitcoin."""

new_rabby_pros = """Плюсы: предпросмотр транзакции с симуляцией баланса до подписи, авто-переключение сети (100+ EVM-сетей), встроенный менеджер токен-разрешений (ревок approve в один клик), поддержка аппаратных кошельков (Ledger, Trezor, Keystone), интеграция с DeBank (институциональный портфель), открытый код, аудиты SlowMist и Least Authority.

Минусы: только EVM-сети (нет Solana, Bitcoin, Sui), нет встроенной покупки за фиат, мобильная версия отстаёт от десктопной, может показаться перегруженным новичку."""

if old_rabby_pros in content:
    content = content.replace(old_rabby_pros, new_rabby_pros)
    changes.append("Rabby: expanded pros/cons")

# ─── PHANTOM ────────────────────────────────────────────────────

old_ph_pros = """Плюсы: лучший UX на рынке, 8 сетей из одной seed-фразы, Phantom Terminal.
Минусы: нет Arbitrum/Optimism/Avalanche, закрытый исходный код."""

new_ph_pros = """Плюсы: лучший UX среди всех кошельков, 8 сетей из одной seed-фразы, встроенный своп-агрегатор (Jupiter + 1inch), стейкинг SOL в один клик, NFT-галерея с эскизами, Phantom Terminal + Perps для продвинутого трейдинга, симуляция транзакций и AI-защита от скамов.

Минусы: нельзя добавить Arbitrum, Optimism, BNB Chain, Avalanche (только предустановленные сети), комиссия свопов 0.85%, Bitcoin-поддержка базовая (нет UTXO-контроля), нет MEV-защиты на EVM-свопах, горячий кошелёк."""

if old_ph_pros in content:
    content = content.replace(old_ph_pros, new_ph_pros)
    changes.append("Phantom: expanded pros/cons")

# ─── METAMASK ────────────────────────────────────────────────────

old_mm_pros = """Плюсы: совместимость со всеми dApp, огромное комьюнити, open source.
Минусы: не показывает что именно вы подписываете (слепая подпись), интерфейс перегружен."""

new_mm_pros = """Плюсы: совместимость с 17 000+ dApp — стандарт индустрии, Snaps-расширения (модульные плагины), поддержка аппаратных кошельков (Ledger, Trezor, Keystone и др.), мета-кошелёк — Ethereum, EVM, Bitcoin, Solana, TRON в одном интерфейсе, 100M+ установок, MetaMask Card, встроенный портфель.

Минусы: слепая подпись (не показывает результат транзакции до подтверждения), комиссия встроенных свопов 0.875%, нет 2FA, фишинг — главный вектор атак (30M+ пользователей = цель №1), лицензия с ограничениями для коммерческого использования."""

if old_mm_pros in content:
    content = content.replace(old_mm_pros, new_mm_pros)
    changes.append("MetaMask: expanded pros/cons")


# ─── COLD WALLETS ───────────────────────────────────────────────

# Trezor Safe 3 / Safe 5
old_trezor = """### Trezor Safe 3 (≈$80) и Safe 5 (≈$170)

Открытый исходный код. EAL6+ Secure Element. Поддержка passphrase (25-е слово). Safe 5 добавляет цветной сенсорный экран и поддержку сотен монет.
"""
new_trezor = """### Trezor Safe 3 (≈$80) и Safe 5 (≈$170)

Открытый исходный код. EAL6+ Secure Element. Поддержка passphrase (25-е слово). Safe 5 добавляет цветной сенсорный экран и поддержку сотен монет.

Плюсы: полностью открытый исходный код (аудит сообществом), чип EAL6+ (высший уровень сертификации), passphrase для правдоподобного отрицания, Shamir Backup на Safe 5.

Минусы: нет Bluetooth (только USB), нет нативной поддержки Solana.
"""
if old_trezor in content:
    content = content.replace(old_trezor, new_trezor)
    changes.append("Trezor: added pros/cons")

# Ledger Flex
old_ledger = """### Ledger Flex (≈$250)

BOLOS OS, чип Secure Element EAL5+. Закрытый исходный код. Ledger Recovery — спорная функция платного восстановления seed через третьих лиц. Работает с тысячами монет и DeFi-протоколов.
"""
new_ledger = """### Ledger Flex (≈$250)

BOLOS OS, чип Secure Element EAL5+. Закрытый исходный код. Ledger Recovery — спорная функция платного восстановления seed через третьих лиц. Работает с тысячами монет и DeFi-протоколов.

Плюсы: поддержка тысяч монет и токенов, Ledger Live (удобный UX для стейкинга и DeFi), Secure Element сертифицирован ANSSI, PIN до 8 цифр.

Минусы: закрытый исходный код (верите на слово), Ledger Recovery — seed покидает устройство, утечка данных клиентов в 2020 (email, адреса, телефоны).
"""
if old_ledger in content:
    content = content.replace(old_ledger, new_ledger)
    changes.append("Ledger: added pros/cons")

# Coldcard Mk4
old_coldcard = """### Coldcard Mk4 (≈$150)

Биткоин-максималист. Air-gap: подпись транзакций через SD-карту. Нет USB-подключения — максимальная изоляция. Частично-подписанные биткоин-транзакции (PSBT).
"""
new_coldcard = """### Coldcard Mk4 (≈$150)

Биткоин-максималист. Air-gap: подпись транзакций через SD-карту. Нет USB-подключения — максимальная изоляция. Частично-подписанные биткоин-транзакции (PSBT).

Плюсы: максимальная изоляция (air-gap через SD), только Bitcoin — минимальная поверхность атаки, PSBT для мультисиг-сценариев, анти-фишинг (проверка адреса на экране устройства).

Минусы: только Bitcoin, требует технических знаний, нет мобильного приложения.
"""
if old_coldcard in content:
    content = content.replace(old_coldcard, new_coldcard)
    changes.append("Coldcard: added pros/cons")

# Keystone 3 Pro
old_keystone = """### Keystone 3 Pro (≈$170)

Air-gap через QR-коды. Три чипа безопасности EAL5+. Открытый исходный код. Работает с MetaMask, Rabby, OKX Wallet.
"""
new_keystone = """### Keystone 3 Pro (≈$170)

Air-gap через QR-коды. Три чипа безопасности EAL5+. Открытый исходный код. Работает с MetaMask, Rabby, OKX Wallet.

Плюсы: air-gap через QR-коды (удобнее чем SD), три чипа EAL5+ (разделение секрета), открытый код, крупный сенсорный экран, поддержка MetaMask, Rabby, OKX.

Минусы: нет USB (только QR и Bluetooth на Pro-версии), аккумулятор требует зарядки, менее известен чем Trezor/Ledger.
"""
if old_keystone in content:
    content = content.replace(old_keystone, new_keystone)
    changes.append("Keystone: added pros/cons")


# ─── WRITE BACK ─────────────────────────────────────────────────

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("=== Changes applied ===")
for c in changes:
    print(f"  ✓ {c}")
print(f"\nTotal: {len(changes)} changes. Run 'npm run build' to verify.")
