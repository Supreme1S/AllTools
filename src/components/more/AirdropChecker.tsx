"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Search, Copy, Check, ChevronRight, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";


interface ApiResult {
  claimed: boolean; balance: string; value: number; id: string; name: string; token: string; chain: string; athPrice: number; contract: string;
}
interface CheckResult {
  wallet: string; total: number;
  claimed: ApiResult[];
  missed: { airdrop: { id: string; name: string; token: string; chain: string; athPrice: number }; estimate: number }[];
  chains: string[];
}

const DEMO_WALLETS = [
  "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  "0x28C6c06298d514Db089934071355E5743bf21d60",
];

const COINGECKO_ID_MAP: Record<string, string> = {
  UNI: "uniswap",
  "1INCH": "1inch",
  TORN: "tornado-cash",
  BADGER: "badger-dao",
  FIDA: "bonfida",
  POOL: "pooltogether",
  SFP: "safepal",
  GTC: "gitcoin",
  CVX: "convex-finance",
  OSMO: "osmosis",
  ORCA: "orca",
  RARE: "superrare",
  DYDX: "dydx",
  JUNO: "juno-network",
  PSP: "paraswap",
  ENS: "ethereum-name-service",
  AURORA: "aurora",
  CMDX: "comdex",
  SOS: "opendao",
  GAS: "gas-dao",
  LOOKS: "looksrare",
  T: "threshold-network-token",
  X2Y2: "x2y2",
  STG: "stargate-finance",
  EVMOS: "evmos",
  COW: "cow-protocol",
  CRE: "crescent-network",
  OP: "optimism",
  HOP: "hop-protocol",
  AURA: "aura-finance",
  STRD: "stride",
  KUJI: "kujira",
  SWEAT: "sweat-economy",
  SAFE: "safe",
  APT: "aptos",
  HFT: "hashflow",
  ACX: "across-protocol",
  AXL: "axelar",
  PASG: "passage",
  GLTO: "gelotto",
  BONK: "bonk",
  MARS: "mars-protocol",
  BLUR: "blur",
  ID: "space-id",
  ARB: "arbitrum",
  SUI: "sui",
  ARCH: "archway",
  NTRN: "neutron",
  WLD: "worldcoin",
  CYBER: "cyberconnect",
  SEI: "sei-network",
  TIA: "celestia",
  PYTH: "pyth-network",
  JTO: "jito",
  NLS: "nolus",
  WHALE: "white-whale",
  MANTA: "manta-network",
  ALT: "altlayer",
  WEN: "wen",
  JUP: "jupiter-exchange-solana",
  ZETA: "zetachain",
  DYM: "dymension",
  STRK: "starknet",
  AEVO: "aevo",
  ETHFI: "ether-fi",
  ENA: "ethena",
  W: "wormhole",
  PRCL: "parcl",
  TNSR: "tensor",
  REZ: "renzo",
  KMNO: "kamino-finance",
  SAGA: "saga",
  OMNI: "omni-network",
  MODE: "mode",
  EIGEN: "eigenlayer",
  FRIEND: "friend-tech",
  DRIFT: "drift-protocol",
  NOT: "notcoin",
  LISTA: "lista-dao",
  ZK: "zksync",
  ZRO: "layerzero",
  BLAST: "blast",
  ZEX: "zeta-markets",
  CLOUD: "sanctum",
  HMSTR: "hamster-kombat",
  PUFFER: "puffer-finance",
  SCR: "scroll",
  GRASS: "grass",
  HYPE: "hyperliquid",
  MOVE: "movement",
  ME: "magic-eden",
  PENGU: "pudgy-penguins",
  SWELL: "swell-network",
  DBR: "debridge-finance",
  SHARK: "sharkyfi",
  BLUE: "bluefin",
  LAYER: "solayer",
  INIT: "initia",
  NIL: "nillion",
  POLY: "polymarket",
  MASK: "metamask",
};

function getTokenIconUrlSync(token: string, contract?: string): string {
  const coingeckoId = COINGECKO_ID_MAP[token];
  if (coingeckoId) {
    return `https://assets.coingecko.com/coins/images/1/large/${coingeckoId}.png`;
  }
  if (contract) {
    return `https://www.google.com/s2/favicons?sz=64&domain=${contract.slice(2, 10)}.io`;
  }
  return `https://raw.githubusercontent.com/cryptologos-cc/logos/main/logos/${token.toLowerCase()}/${token.toLowerCase()}.svg`;
}

type Step = "input" | "loading" | "badge" | "counter" | "stats" | "top3" | "missed" | "rank" | "share";
const STEP_ORDER: Step[] = ["badge", "counter", "stats", "top3", "missed", "rank", "share"];
const STEP_LABELS = ["Бейдж", "Сумма", "Статистика", "Топ-3", "Пропущено", "Рейтинг", "Шаринг"];
const LOADING_PHRASES = [
  "Сканируем блокчейн...", "Ищем дропы с 2020 года...", "Сверяем снапшоты...",
  "Считаем Uniswap...", "Проверяем Arbitrum...", "Анализируем Solana...",
  "Ищем Hyperliquid...", "Сканируем Cosmos...", "Проверяем Optimism...",
  "Считаем zkSync...", "Ищем LayerZero...", "Анализируем EigenLayer...",
  "Считаем прибыль по ATH...", "Готовим результат...", "Почти готово...",
];





function getBadge(total: number) {
  if (total >= 50000) return { label: "🏆 Legendary", className: "drop-badge-legendary" };
  if (total >= 10000) return { label: "⭐ Gold", className: "drop-badge-gold" };
  if (total >= 1000) return { label: "🔹 Silver", className: "drop-badge-silver" };
  return { label: "🔸 Bronze", className: "drop-badge-bronze" };
}

function formatDollar(n: number) {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export function AirdropChecker() {
  const [wallets, setWallets] = useState("");
  const [results, setResults] = useState<CheckResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<Step>("input");
  const [copied, setCopied] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState(0);
  const [counterValue, setCounterValue] = useState(0);
  const counterRef = useRef<number>(0);
  const animRef = useRef<ReturnType<typeof requestAnimationFrame> | undefined>(undefined);

  useEffect(() => {
    if (step !== "loading") return;
    const id = setInterval(() => setLoadingPhrase((p) => (p + 1) % LOADING_PHRASES.length), 400);
    return () => clearInterval(id);
  }, [step]);

  

  const animateCounter = useCallback((target: number) => {
    const start = counterRef.current;
    const duration = 1500;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(start + (target - start) * eased);
      setCounterValue(val);
      if (progress < 1) animRef.current = requestAnimationFrame(tick);
      else counterRef.current = target;
    };
    animRef.current = requestAnimationFrame(tick);
  }, []);

  const check = useCallback(async () => {
    const list = wallets.split(/[\n,;]+/).map((w) => w.trim()).filter((w) => w.length >= 32);
    if (!list.length) return;
    setLoading(true);
    setStep("loading");
    setLoadingPhrase(0);
    counterRef.current = 0;
    setCounterValue(0);

    try {
      const res = await fetch(`/api/airdrops/check?address=${list[0]}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResults([{ wallet: list[0], total: data.total, claimed: data.claimed, missed: [], chains: data.chains || [] }]);
    } catch {
      setResults([{ wallet: list[0], total: 0, claimed: [], missed: [], chains: [] }]);
    }
    setLoading(false);
    setStep("badge");
  }, [wallets]);

  const result = results?.[0];
  const badge = result ? getBadge(result.total) : null;

  const goNext = () => {
    const idx = STEP_ORDER.indexOf(step as Step);
    if (idx >= 0 && idx < STEP_ORDER.length - 1) {
      const next = STEP_ORDER[idx + 1];
      setStep(next);
      if (next === "counter" && result) animateCounter(result.total);
    }
  };

  const goToStep = (s: Step) => { setStep(s); if (s === "counter" && result) animateCounter(result.total); };

  const copyShare = () => {
    if (!result) return;
    const b = getBadge(result.total);
    const text = `${b.label}\n💰 ${formatDollar(result.total)}\n🎯 ${result.claimed.length} дропов · ${result.chains.length} сетей\n\nПроверь свой: alltools.tools/more`;
    navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <section className="more-section">
      <div className="more-section-head">
        <h2 className="more-section-title">Чекер дропов</h2>
        <p className="more-section-desc">Аирдроп-история кошелька в стиле Wrapped</p>
      </div>

      {step === "input" && (
        <div className="drop-check-inputs">
          <div className="drop-wallet-input">
            <Search size={18} className="drop-input-icon" />
            <input type="text" className="drop-input" placeholder="0x... или несколько через запятую" value={wallets}
              onChange={(e) => setWallets(e.target.value)} onKeyDown={(e) => e.key === "Enter" && check()} spellCheck={false} />
          </div>
          <button type="button" className="more-cta-btn" onClick={check} disabled={loading}>Проверить</button>
          <div className="drop-demo-wallets">
            <span className="drop-demo-label">Попробуй:</span>
            {DEMO_WALLETS.map((w) => (
              <button key={w.slice(0,10)} type="button" className="drop-demo-chip" onClick={() => { setWallets(w); setTimeout(check, 100); }}>
                {w.slice(0,6)}...{w.slice(-4)}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "loading" && (
        <div className="drop-results drop-loading">
          <div className="drop-slide">
            <div className="quiz-ai-loading-ring"><div /><div /></div>
            <p className="drop-loading-text">{LOADING_PHRASES[loadingPhrase]}</p>
          </div>
        </div>
      )}

      {result && step !== "input" && step !== "loading" && (
        <div className="drop-results">
          {/* Step 1: Badge */}
          {step === "badge" && (
            <div className="drop-slide drop-slide-hero">
              <div className={cn("drop-badge-reveal", badge?.className)}>{badge?.label}</div>
              <span className="drop-wallet-addr">{result.wallet.slice(0,6)}...{result.wallet.slice(-4)}</span>
            </div>
          )}

          {/* Step 2: Counter */}
          {step === "counter" && (
            <div className="drop-slide drop-slide-hero">
              <span className="drop-total-value">{formatDollar(counterValue)}</span>
              <span className="drop-total-label">заработано на аирдропах</span>
              <span className="drop-wallet-addr">{result.wallet.slice(0,6)}...{result.wallet.slice(-4)}</span>
            </div>
          )}

          {/* Step 3: Stats */}
          {step === "stats" && (
            <div className="drop-slide">
              <span className="drop-slide-icon">📊</span>
              <h3 className="drop-slide-title">{result.claimed.length} дропов проверено через RPC</h3>
              <div className="drop-stats-grid">
                <div className="drop-stat-card">
                  <span className="drop-stat-card-value">{result.claimed.length}</span>
                  <span className="drop-stat-card-label">Получено</span>
                </div>
                <div className="drop-stat-card">
                  <span className="drop-stat-card-value">{result.chains.length}</span>
                  <span className="drop-stat-card-label">Сетей</span>
                </div>
                <div className="drop-stat-card">
                  <span className="drop-stat-card-value">{formatDollar(result.total)}</span>
                  <span className="drop-stat-card-label">Сумма</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Top 3 */}
          {step === "top3" && (
            <div className="drop-slide">
              <span className="drop-slide-icon">🥇</span>
              <h3 className="drop-slide-title">Лучшие дропы</h3>
              <div className="drop-top3-list">
                {result.claimed.slice(0, 3).map((c, i) => (
                  <div key={c.id} className={cn("drop-top3-card", i === 0 && "drop-top3-best")}>
                    <span className="drop-top3-rank">#{i + 1}</span>
                    <div className="drop-top3-info">
                      <img src={getTokenIconUrlSync(c.token, c.contract)} alt={c.token} className="drop-token-icon" />
                      <span className="drop-top3-name">{c.name}</span>
                      <span className="drop-top3-token">{c.token} · {c.chain}</span>
                    </div>
                    <span className="drop-top3-value">~{formatDollar(c.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Missed */}
          {step === "missed" && (
            <div className="drop-slide">
              <span className="drop-slide-icon">😞</span>
              <h3 className="drop-slide-title">{result.missed.length} дропов пропущено</h3>
              <p className="drop-missed-note">Вы были eligible, но не заклеймили</p>
              <div className="drop-list">
                {result.missed.slice(0, 6).map((m) => (
                  <div key={m.airdrop.id} className="drop-item drop-item-missed">
                    <span className="drop-item-name">
                      <img src={getTokenIconUrlSync(m.airdrop.token)} alt={m.airdrop.token} className="drop-token-icon" />
                      {m.airdrop.name} <span className="drop-item-token">{m.airdrop.token}</span>
                    </span>
                    <span className="drop-item-meta">~{formatDollar(m.estimate)} · {m.airdrop.chain}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Rank */}
          {step === "rank" && (
            <div className="drop-slide">
              <span className="drop-slide-icon"><Trophy size={48} /></span>
              <h3 className="drop-slide-title">{result.claimed.length} дропов подтверждено</h3>
              <p className="drop-missed-note">Данные проверены через Ethereum RPC на основе реальных балансов на снапшот-блоках</p>
              <div className="drop-stats-grid">
                <div className="drop-stat-card">
                  <span className="drop-stat-card-value">{result.claimed.length}</span>
                  <span className="drop-stat-card-label">EVM дропов</span>
                </div>
                <div className="drop-stat-card">
                  <span className="drop-stat-card-value">{result.chains.length}</span>
                  <span className="drop-stat-card-label">Сетей</span>
                </div>
                <div className="drop-stat-card">
                  <span className="drop-stat-card-value">{formatDollar(result.total)}</span>
                  <span className="drop-stat-card-label">Сумма ATH</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Share */}
          {step === "share" && (
            <div className="drop-slide drop-slide-share">
              <span className="drop-slide-icon">🎉</span>
              <h3 className="drop-slide-title">Готово!</h3>
              <p className="drop-missed-note">Поделитесь результатом или проверьте другой кошелёк</p>
              <div className="drop-actions">
                <button type="button" className="more-cta-btn" onClick={copyShare}>
                  {copied ? <><Check size={16} /> Скопировано</> : <><Copy size={16} /> Поделиться</>}
                </button>
                <button type="button" className="more-secondary-btn" onClick={() => { setResults(null); setStep("input"); }}>
                  Проверить другой
                </button>
              </div>
            </div>
          )}

          {/* Progress & next button */}
          {step !== "share" && (
            <div className="drop-controls">
              <div className="drop-progress">
                {STEP_LABELS.map((label, i) => {
                  const sid = STEP_ORDER[i];
                  const isActive = STEP_ORDER.indexOf(step) >= i;
                  return (
                    <button key={sid} type="button" className={cn("drop-progress-dot", isActive && "drop-progress-dot-active")}
                      title={label} onClick={() => goToStep(sid)}>{i + 1}</button>
                  );
                })}
              </div>
              <button type="button" className="more-secondary-btn" onClick={goNext}>
                Далее <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
