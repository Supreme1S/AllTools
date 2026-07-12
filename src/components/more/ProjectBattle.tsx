"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const CATEGORIES = [
  { id: "all", label: "Всё" },
  { id: "exchange", label: "Биржи" },
  { id: "defi", label: "DeFi" },
  { id: "wallet", label: "Кошельки" },
  { id: "ai", label: "ИИ" },
  { id: "token", label: "Токены" },
  { id: "airdrops", label: "Аирдропы" },
];

const TOP_100_TOKENS = [
  { name: "BTC", domain: "bitcoin.org" },
  { name: "ETH", domain: "ethereum.org" },
  { name: "USDT", domain: "tether.to" },
  { name: "BNB", domain: "bnbchain.org" },
  { name: "SOL", domain: "solana.com" },
  { name: "USDC", domain: "circle.com" },
  { name: "XRP", domain: "xrpl.org" },
  { name: "DOGE", domain: "dogecoin.com" },
  { name: "ADA", domain: "cardano.org" },
  { name: "TRX", domain: "tron.network" },
  { name: "AVAX", domain: "avax.network" },
  { name: "SHIB", domain: "shibatoken.com" },
  { name: "TON", domain: "ton.org" },
  { name: "DOT", domain: "polkadot.network" },
  { name: "LINK", domain: "chain.link" },
  { name: "WBTC", domain: "wbtc.network" },
  { name: "BCH", domain: "bitcoincash.org" },
  { name: "NEAR", domain: "near.org" },
  { name: "SUI", domain: "sui.io" },
  { name: "LTC", domain: "litecoin.org" },
  { name: "APT", domain: "aptoslabs.com" },
  { name: "UNI", domain: "uniswap.org" },
  { name: "PEPE", domain: "pepe.vip" },
  { name: "ICP", domain: "internetcomputer.org" },
  { name: "CRO", domain: "crypto.com" },
  { name: "ETC", domain: "ethereumclassic.org" },
  { name: "XLM", domain: "stellar.org" },
  { name: "HBAR", domain: "hedera.com" },
  { name: "FIL", domain: "filecoin.io" },
  { name: "ARB", domain: "arbitrum.io" },
  { name: "VET", domain: "vechain.org" },
  { name: "ATOM", domain: "cosmos.network" },
  { name: "ALGO", domain: "algorand.com" },
  { name: "GRT", domain: "thegraph.com" },
  { name: "FTM", domain: "fantom.foundation" },
  { name: "AAVE", domain: "aave.com" },
  { name: "MKR", domain: "makerdao.com" },
  { name: "RUNE", domain: "thorchain.org" },
  { name: "XMR", domain: "getmonero.org" },
  { name: "OP", domain: "optimism.io" },
  { name: "FLOW", domain: "flow.com" },
  { name: "INJ", domain: "injective.com" },
  { name: "QNT", domain: "quant.network" },
  { name: "XTZ", domain: "tezos.com" },
  { name: "RNDR", domain: "rendertoken.com" },
  { name: "IMX", domain: "immutable.com" },
  { name: "STX", domain: "stacks.co" },
  { name: "KAS", domain: "kaspa.org" },
  { name: "SEI", domain: "sei.io" },
  { name: "TIA", domain: "celestia.org" },
  { name: "EOS", domain: "eosnetwork.com" },
  { name: "THETA", domain: "thetatoken.org" },
  { name: "AXS", domain: "axieinfinity.com" },
  { name: "MNT", domain: "mantle.xyz" },
  { name: "LDO", domain: "lido.fi" },
  { name: "OKB", domain: "okx.com" },
  { name: "EGLD", domain: "multiversx.com" },
  { name: "FLR", domain: "flare.network" },
  { name: "AR", domain: "arweave.org" },
  { name: "GALA", domain: "gala.games" },
  { name: "NEO", domain: "neo.org" },
  { name: "SAND", domain: "sandbox.game" },
  { name: "ZEC", domain: "z.cash" },
  { name: "APE", domain: "apecoin.com" },
  { name: "MANA", domain: "decentraland.org" },
  { name: "DYDX", domain: "dydx.exchange" },
  { name: "HNT", domain: "helium.com" },
  { name: "CFX", domain: "confluxnetwork.org" },
  { name: "XDC", domain: "xinfin.org" },
  { name: "COMP", domain: "compound.finance" },
  { name: "TFUEL", domain: "thetatoken.org" },
  { name: "BABYDOGE", domain: "babydoge.com" },
  { name: "CHZ", domain: "chiliz.com" },
  { name: "OCEAN", domain: "oceanprotocol.com" },
  { name: "1INCH", domain: "1inch.io" },
  { name: "CRV", domain: "curve.fi" },
  { name: "SNX", domain: "synthetix.io" },
  { name: "LPT", domain: "livepeer.org" },
  { name: "GNO", domain: "gnosis.io" },
  { name: "PAXG", domain: "paxos.com" },
  { name: "HYPE", domain: "hyperliquid.xyz" },
  { name: "ZIL", domain: "zilliqa.com" },
  { name: "XEM", domain: "nem.io" },
  { name: "WOO", domain: "woo.org" },
  { name: "BICO", domain: "biconomy.io" },
  { name: "AUDIO", domain: "audius.co" },
  { name: "T", domain: "threshold.network" },
  { name: "RAY", domain: "raydium.io" },
  { name: "JUP", domain: "jup.ag" },
  { name: "PYTH", domain: "pyth.network" },
  { name: "ETHFI", domain: "ether.fi" },
  { name: "ENA", domain: "ethena.fi" },
  { name: "EIGEN", domain: "eigenlayer.xyz" },
  { name: "W", domain: "wormhole.com" },
  { name: "PENDLE", domain: "pendle.finance" },
  { name: "ZK", domain: "zksync.io" },
  { name: "ZRO", domain: "layerzero.network" },
  { name: "WLD", domain: "worldcoin.org" },
  { name: "NOT", domain: "notco.in" },
  { name: "BONK", domain: "bonkcoin.com" },
];

const AIRDROP_PROJECTS: BattleProject[] = [
  { name: "Uniswap (UNI)", domain: "ethereum", category: "airdrops" },
  { name: "1inch (1INCH)", domain: "ethereum", category: "airdrops" },
  { name: "dYdX (DYDX)", domain: "ethereum", category: "airdrops" },
  { name: "EigenLayer (EIGEN)", domain: "ethereum", category: "airdrops" },
  { name: "Jupiter (JUP)", domain: "solana", category: "airdrops" },
  { name: "Arbitrum (ARB)", domain: "arbitrum", category: "airdrops" },
  { name: "zkSync (ZK)", domain: "zksync", category: "airdrops" },
  { name: "LayerZero (ZRO)", domain: "layerzero", category: "airdrops" },
  { name: "Hyperliquid (HYPE)", domain: "hyperliquid", category: "airdrops" },
  { name: "Celestia (TIA)", domain: "cosmos", category: "airdrops" },
  { name: "Optimism (OP)", domain: "optimism", category: "airdrops" },
  { name: "StarkNet (STRK)", domain: "starknet", category: "airdrops" },
  { name: "ENS (ENS)", domain: "ethereum", category: "airdrops" },
  { name: "Wormhole (W)", domain: "solana", category: "airdrops" },
  { name: "Aptos (APT)", domain: "aptos", category: "airdrops" },
  { name: "Sui (SUI)", domain: "sui", category: "airdrops" },
  { name: "Blur (BLUR)", domain: "ethereum", category: "airdrops" },
  { name: "Jito (JTO)", domain: "solana", category: "airdrops" },
  { name: "Pyth Network (PYTH)", domain: "solana", category: "airdrops" },
  { name: "ether.fi (ETHFI)", domain: "ethereum", category: "airdrops" },
  { name: "Ethena (ENA)", domain: "ethereum", category: "airdrops" },
  { name: "Renzo (REZ)", domain: "ethereum", category: "airdrops" },
  { name: "Scroll (SCR)", domain: "scroll", category: "airdrops" },
  { name: "Magic Eden (ME)", domain: "solana", category: "airdrops" },
  { name: "Grass (GRASS)", domain: "solana", category: "airdrops" },
  { name: "Drift Protocol (DRIFT)", domain: "solana", category: "airdrops" },
  { name: "Kamino (KMNO)", domain: "solana", category: "airdrops" },
  { name: "Notcoin (NOT)", domain: "ton", category: "airdrops" },
  { name: "Berachain (BERA)", domain: "berachain", category: "airdrops" },
  { name: "Story Protocol (IP)", domain: "ethereum", category: "airdrops" },
  { name: "Solayer (LAYER)", domain: "solana", category: "airdrops" },
  { name: "Movement (MOVE)", domain: "ethereum", category: "airdrops" },
  { name: "Safe (SAFE)", domain: "ethereum", category: "airdrops" },
  { name: "Worldcoin (WLD)", domain: "optimism", category: "airdrops" },
  { name: "Gitcoin (GTC)", domain: "ethereum", category: "airdrops" },
  { name: "Sei (SEI)", domain: "cosmos", category: "airdrops" },
  { name: "Dymension (DYM)", domain: "cosmos", category: "airdrops" },
  { name: "Manta Network (MANTA)", domain: "ethereum", category: "airdrops" },
  { name: "Blast (BLAST)", domain: "ethereum", category: "airdrops" },
  { name: "Mode Network (MODE)", domain: "ethereum", category: "airdrops" },
  { name: "Aevo (AEVO)", domain: "ethereum", category: "airdrops" },
  { name: "Paraswap (PSP)", domain: "ethereum", category: "airdrops" },
  { name: "Stargate Finance (STG)", domain: "layerzero", category: "airdrops" },
  { name: "Hop Protocol (HOP)", domain: "ethereum", category: "airdrops" },
  { name: "Across Protocol (ACX)", domain: "ethereum", category: "airdrops" },
  { name: "deBridge (DBR)", domain: "solana", category: "airdrops" },
  { name: "Osmosis (OSMO)", domain: "cosmos", category: "airdrops" },
  { name: "Kaito (KAITO)", domain: "ethereum", category: "airdrops" },
  { name: "Pudgy Penguins (PENGU)", domain: "solana", category: "airdrops" },
  { name: "Hamster Kombat (HMSTR)", domain: "ton", category: "airdrops" },
  { name: "LooksRare (LOOKS)", domain: "ethereum", category: "airdrops" },
  { name: "X2Y2 (X2Y2)", domain: "ethereum", category: "airdrops" },
  { name: "Sanctum (CLOUD)", domain: "solana", category: "airdrops" },
  { name: "Tensor (TNSR)", domain: "solana", category: "airdrops" },
  { name: "Parcl (PRCL)", domain: "solana", category: "airdrops" },
  { name: "Puffer Finance (PUFFER)", domain: "ethereum", category: "airdrops" },
  { name: "Swell (SWELL)", domain: "ethereum", category: "airdrops" },
  { name: "Space ID (ID)", domain: "bsc", category: "airdrops" },
  { name: "ZetaChain (ZETA)", domain: "cosmos", category: "airdrops" },
  { name: "AltLayer (ALT)", domain: "ethereum", category: "airdrops" },
  { name: "Friend.tech (FRIEND)", domain: "base", category: "airdrops" },
  { name: "Nillion (NIL)", domain: "ethereum", category: "airdrops" },
  { name: "Initia (INIT)", domain: "cosmos", category: "airdrops" },
  { name: "CoW Swap (COW)", domain: "ethereum", category: "airdrops" },
  { name: "Convex Finance (CVX)", domain: "ethereum", category: "airdrops" },
  { name: "Aura Finance (AURA)", domain: "ethereum", category: "airdrops" },
  { name: "PolyMarket (POLY)", domain: "polygon", category: "airdrops" },
  { name: "MetaMask (MASK)", domain: "ethereum", category: "airdrops" },
  { name: "BONK (BONK)", domain: "solana", category: "airdrops" },
  { name: "Wen (WEN)", domain: "solana", category: "airdrops" },
];

interface BattleProject {
  name: string;
  domain: string;
  category: string;
  icon?: string;
  image?: string | null;
}

function pickRandom<T>(arr: T[], exclude?: T): T {
  const pool = exclude ? arr.filter((x) => x !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

const EXCLUDED_ALL = ["Инструменты", "Сервисы", "Web3"];

export function ProjectBattle({ tools }: { tools: Service[] }) {
  const [category, setCategory] = useState("all");
  const [left, setLeft] = useState<BattleProject | null>(null);
  const [right, setRight] = useState<BattleProject | null>(null);
  const [champion, setChampion] = useState<BattleProject | null>(null);
  const [voted, setVoted] = useState(false);
  const [winnerSide, setWinnerSide] = useState<"left" | "right" | null>(null);
  const [losers, setLosers] = useState<BattleProject[]>([]);

  const pool = useMemo((): BattleProject[] => {
    if (category === "token") return TOP_100_TOKENS.map((t) => ({ ...t, category: "token" }));
    if (category === "airdrops") {
      return AIRDROP_PROJECTS;
    }
    let filtered = tools;
    if (category === "all") {
      filtered = tools.filter((t) => !EXCLUDED_ALL.some((x) => t.category.includes(x)));
    } else {
      filtered = tools.filter((t) => {
        const c = t.category.toLowerCase();
        if (category === "exchange") return c.includes("биржи") || c.includes("cex") || c.includes("dex");
        if (category === "defi") return c.includes("defi");
        if (category === "wallet") return c.includes("кошел");
        if (category === "ai") return c.includes("нейросет") || c.includes("нейросети");
        return false;
      });
    }
    return filtered.map((t) => ({ name: t.name, domain: t.domain, category: t.category, image: t.image }));
  }, [tools, category]);

  const reset = useCallback(() => {
    setLosers([]);
    setChampion(null);
    setWinnerSide(null);
  }, []);

  useEffect(() => {
    if (pool.length < 2) return;
    const a = pickRandom(pool);
    const b = pickRandom(pool, a);
    setLeft(a);
    setRight(b);
    setVoted(false);
    setWinnerSide(null);
  }, [pool, reset]);

  const vote = (side: "left" | "right") => {
    if (voted || !left || !right) return;
    setVoted(true);
    const winner = side === "left" ? left : right;
    const loser = side === "left" ? right : left;
    setWinnerSide(side);
    setLosers((prev) => [...prev, loser]);

    setTimeout(() => {
      setChampion(winner);
      const remaining = pool.filter(
        (p) => p.name !== winner.name && !losers.includes(p) && p.name !== loser.name,
      );
      if (remaining.length === 0) {
        setRight(null);
      } else {
        const next = pickRandom(remaining);
        if (side === "left") setRight(next);
        else setLeft(next);
      }
      setVoted(false);
      setWinnerSide(null);
    }, 800);
  };

  if (pool.length < 2) {
    return (
      <section className="more-section">
        <div className="more-section-head">
          <h2 className="more-section-title">Битва проектов</h2>
          <p className="more-section-desc">Недостаточно проектов в этой категории</p>
        </div>
      </section>
    );
  }

  const remaining = pool.length - losers.length - (champion ? 1 : 0);

  const isAirdrop = category === "airdrops";

  return (
    <section className="more-section">
      <div className="more-section-head">
        <h2 className="more-section-title">Битва проектов</h2>
        <p className="more-section-desc">King of the hill: победитель остаётся, challenger меняется</p>
      </div>

      <div className="tab-bar more-battle-tabs">
        {CATEGORIES.map((cat) => (
          <button key={cat.id} type="button" className={cn("tab", category === cat.id && "tab-active")}
            onClick={() => { setCategory(cat.id); reset(); }}>
            {cat.label}
          </button>
        ))}
      </div>

      <div className={cn("battle-arena", isAirdrop && "battle-arena-airdrops")}>
        <button type="button" className={cn("battle-card", isAirdrop && "battle-card-airdrop", winnerSide === "left" && "battle-card-winner", winnerSide === "right" && "battle-card-fade")}
          onClick={() => vote("left")} disabled={voted}>
          {!isAirdrop && (
            <div className="battle-card-icon">
              {left?.image ? <img src={left.image} alt="" /> : left?.domain ? <img src={`https://www.google.com/s2/favicons?domain=${left.domain}&sz=64`} alt="" /> : left?.icon ? <span className="battle-card-emoji">{left.icon}</span> : <span className="battle-card-initials">{left?.name?.slice(0, 2).toUpperCase()}</span>}
            </div>
          )}
          <span className={cn("battle-card-name", isAirdrop && "battle-card-name-airdrop")}>{left?.name ?? "—"}</span>
          <span className="battle-card-domain">{left?.domain ?? ""}</span>
        </button>
        <div className="battle-vs"><span>VS</span></div>
        {right ? (
          <button type="button" className={cn("battle-card", isAirdrop && "battle-card-airdrop", winnerSide === "right" && "battle-card-winner", winnerSide === "left" && "battle-card-fade")}
            onClick={() => vote("right")} disabled={voted}>
            {!isAirdrop && (
              <div className="battle-card-icon">
                {right?.image ? <img src={right.image} alt="" /> : right?.domain ? <img src={`https://www.google.com/s2/favicons?domain=${right.domain}&sz=64`} alt="" /> : right?.icon ? <span className="battle-card-emoji">{right.icon}</span> : <span className="battle-card-initials">{right?.name?.slice(0, 2).toUpperCase()}</span>}
              </div>
            )}
            <span className={cn("battle-card-name", isAirdrop && "battle-card-name-airdrop")}>{right.name}</span>
            <span className="battle-card-domain">{right.domain}</span>
          </button>
        ) : (
          <div className={cn("battle-card battle-card-winner battle-card-crowned", isAirdrop && "battle-card-airdrop")}>
            {!isAirdrop && (
              <div className="battle-card-icon">
                {champion?.image ? <img src={champion.image} alt="" /> : champion?.domain ? <img src={`https://www.google.com/s2/favicons?domain=${champion.domain}&sz=64`} alt="" /> : champion?.icon ? <span className="battle-card-emoji">{champion.icon}</span> : <span className="battle-card-initials">{champion?.name?.slice(0, 2).toUpperCase()}</span>}
              </div>
            )}
            <span className={cn("battle-card-name", isAirdrop && "battle-card-name-airdrop")}>{champion?.name}</span>
            <span className="battle-card-domain">👑 Победитель</span>
          </div>
        )}
      </div>

      <div className="battle-footer">
        {remaining > 0 && <span className="battle-remaining">Осталось проектов: {remaining + 1}</span>}
        {remaining === 0 && champion && <span className="battle-crowned-msg">🏆 {champion.name} — абсолютный чемпион!</span>}
      </div>
    </section>
  );
}
