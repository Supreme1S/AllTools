"""Russian content for WEB3_BATCH_3 — 50 slugs, gate2 through kerneldao."""

ENTRIES: dict[str, dict] = {
    "gate2": {
        "short": "Второй шлюз экосистемы Oshi — on-chain вход в игры и социальные dApps на gate2.oshi.co.",
        "long": "Gate2 — часть платформы Oshi, Web3-инфраструктуры для игр и социальных приложений. Точка входа для подключения кошелька, аутентификации и взаимодействия с on-chain контентом экосистемы.",
        "tagline": "Шлюз Oshi — один вход в gaming Web3.",
        "highlight": "Gate2 на gate2.oshi.co работает как портал в экосистему Oshi: подключение кошелька, доступ к играм и социальным функциям без классического Web2-логина. Модель «шлюза» — стандарт для consumer crypto: один вход, много dApps. Ликвидность и база пользователей зависят от adoption конкретных игр на платформе. Для тех, кто уже в экосистеме Oshi, — обязательная точка; для остальных — нишевый gaming-вход.",
        "facts": [
            "Consumer gaming gates 2024–2025: десятки платформ копировали модель «один логин — много мини-игр» после успеха Telegram crypto apps.",
            "Oshi и подобные шлюзы борются за retention после airdrop season — «липкие» игры решают больше, чем красивый лендинг.",
            "Название Gate2 намекает на итерацию продукта — первые версии шлюзов часто переписывают полностью после launch week.",
        ],
        "tips": ["Проверь, какую сеть поддерживает Gate2 перед подключением — не все gaming gates multi-chain с первого дня."],
        "warnings": ["Игровой портал — риск смарт-контрактов каждой отдельной игры, а не только UI шлюза."],
    },
    "genlayer": {
        "short": "L1 с optimistic smart contracts и AI-логикой — on-chain решения, которые «думают» через LLM.",
        "long": "GenLayer — блокчейн нового типа: смарт-контракты могут вызывать AI-модели on-chain через optimistic verification. Для dApps, где нужны не только if/else, но и интерпретация текста, изображений или сложных условий.",
        "tagline": "Смарт-контракты с AI — когда кода не хватает.",
        "highlight": "GenLayer на genlayer.com предлагает смену парадигмы: контракт отправляет prompt, валидаторы проверяют output через optimistic-механизм. Сценарии — prediction markets с разрешением на естественном языке, AI-арбитраж, интеллектуальные оракулы. Ранняя стадия — экосистема разработчиков формируется, testnet активен. Риск: выводы AI недетерминированы; экономическая безопасность модели ещё не доказана в production.",
        "facts": [
            "GenLayer подняла seed от tier-1 VC с тезисом «AI + blockchain convergence» — нарратив 2024–2025 после бума ChatGPT.",
            "Optimistic AI verification — новый примитив: если два валидатора не согласны с выводом LLM, challenge game решает спор экономически.",
            "Критики сравнивают с старыми «AI oracle» проектами 2018 — GenLayer заявляет лучший crypto-economic design, рынок ждёт mainnet proof.",
        ],
        "tips": ["Разработчикам: начни с testnet docs — паттерны AI-контрактов отличаются от Solidity best practices."],
        "warnings": ["Недетерминированный AI on-chain — новая категория риска; не деплой production funds без audit trail."],
    },
    "gensyn": {
        "short": "Децентрализованные ML-вычисления — распределённая сеть для обучения AI-моделей без монополии облачных гигантов.",
        "long": "Gensyn — протокол децентрализованных вычислений для machine learning. Владельцы GPU и поставщики данных объединяются в trustless-сеть для training и inference.",
        "tagline": "Децентрализованный compute для ML без Big Tech.",
        "highlight": "Gensyn.ai строит marketplace ML compute: исследователи отправляют jobs, провайдеры исполняют на распределённом железе, верификация через cryptographic proofs. Конкурирует с io.net, Render, Bittensor в DePIN-AI секторе. Ранняя стадия с сильной академической базой. Points/testnet campaigns привлекли фармеров; adoption реальных ML-нагрузок — ключевой metric для долгосрочности.",
        "facts": [
            "Gensyn привлекла $43M+ от a16z и других — один из крупнейших раундов в DePIN-AI 2023.",
            "Testnet queue: тысячи GPU-провайдеров зарегистрировались, но реальные training jobs отставали от хайпа — классическая DePIN chicken-and-egg.",
            "ML verification on-chain — сложная задача; подход Gensyn цитируют в academic papers, production scale не доказан.",
        ],
        "tips": ["GPU-провайдерам: проверь uptime requirements и slashing rules перед подключением железа."],
        "warnings": ["DePIN points ≠ гарантированный токен — фарми ответственно, амортизация железа — реальная статья расходов."],
    },
    "getgrass": {
        "short": "DePIN bandwidth network — продай неиспользуемый интернет-трафик и заработай points за участие в AI data layer.",
        "long": "Grass (getgrass.io) — сеть, где пользователи делятся bandwidth для web scraping и сбора данных для AI training. Browser extension или desktop app, нарратив пассивного заработка.",
        "tagline": "Grass DePIN — продай bandwidth AI-компаниям.",
        "highlight": "Getgrass.io взорвался в 2024 через referral program и маркетинг «пассивного дохода»: установи extension, делись неиспользуемым bandwidth, зарабатывай Grass points. Поддержка Wynd Labs. Privacy concerns обсуждались в community — что именно роутится через твой IP. Связи с Solana ecosystem для potential token. Миллионы нод зарегистрированы; устойчивость зависит от реального B2B-спроса на bandwidth vs referral farming.",
        "facts": [
            "Grass referral links залили crypto Twitter 2024 — «sign up with my link» стал мемом наравне с Hamster Kombat.",
            "Privacy debate: sharing residential IP for scraping — legal и ethical gray zone; пользователи часто не читают ToS.",
            "100M+ nodes claimed — скептики отмечают много неактивных; B2B revenue disclosure ограничен для retail users.",
        ],
        "tips": ["Читай ToS про legal use of shared bandwidth — liability может быть на стороне пользователя."],
        "warnings": ["Sharing IP для third-party scraping — potential ToS violation ISP и privacy risk."],
    },
    "getoptimum": {
        "short": "DePIN-сеть GetOptimum — оптимизация распределённых ресурсов и routing для Web3-инфраструктуры на getoptimum.xyz.",
        "long": "GetOptimum — проект в DePIN/infrastructure space с фокусом на оптимизацию distributed resources. Testnet и points programs для ранних участников.",
        "tagline": "Optimum routing — эффективная DePIN-инфраструктура.",
        "highlight": "Getoptimum.xyz позиционируется в переполненном DePIN-рынке: optimization layer для compute, bandwidth или data routing. Ранняя стадия — сайт и app заточены на onboarding node operators и фармеров. Конкретный tech stack и tokenomics требуют проверки актуальных docs. Типичный playbook 2024: testnet → points → надежда на TGE.",
        "facts": [
            "DePIN naming explosion 2024: «Optimum», «Gradient», «Hyperbolic» — битва за mindshare в одном нарративе.",
            "Points programs без раскрытия revenue — розница фармит спекулятивно, VC ставят на TAM сектора.",
            "DePIN-инфра выживет в 2025 только с реальными enterprise-контрактами, а не счётчиком нод.",
        ],
        "tips": ["Сверяй домен getoptimum.xyz с официальными каналами — фишинг-клоны DePIN часты в сезон points."],
        "warnings": ["Ранний DePIN — токен может так и не выйти; относись к points как к лотерейному билету, не к зарплате."],
    },
}
