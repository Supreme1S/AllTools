"use client";

import { useState, useCallback } from "react";
import { Sword, Gift, Calculator, Newspaper } from "lucide-react";
import { TradingCalc } from "@/components/more/TradingCalc";
import { ProjectBattle } from "@/components/more/ProjectBattle";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type TileId = "battle" | "drops" | "calc" | "news" | null;

const BATTLE_TILES = [
  {
    id: "battle" as const,
    icon: Sword,
    title: "Битва",
    subtitle: "King of the hill: два проекта, один победитель.",
    cardClass: "hub-card-battle",
    cardDelay: "0.2s",
  },
  {
    id: "drops" as const,
    icon: Gift,
    title: "Чекер аирдропов",
    subtitle: "Скоро запуск — оставайтесь на связи.",
    cardClass: "hub-card-drops",
    cardDelay: "0.32s",
  },
  {
    id: "calc" as const,
    icon: Calculator,
    title: "Калькулятор",
    subtitle: "Трейдинг калькулятор: риск, винрейт, профит.",
    cardClass: "hub-card-calc",
    cardDelay: "0.42s",
  },
  {
    id: "news" as const,
    icon: Newspaper,
    title: "Новости",
    subtitle: "Релизы, листинги, апдейты и анонсы.",
    cardClass: "hub-card-news",
    cardDelay: "0.52s",
  },
];

function MoreHubTile({
  tile,
  isActive,
  onClick,
}: {
  tile: (typeof BATTLE_TILES)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={cn("hub-card", tile.cardClass, isActive && "hub-card-active")}
      onClick={onClick}
      style={{ width: "100%", textAlign: "left" }}
    >
      <span className="hub-arrow">
        <tile.icon size={20} strokeWidth={2.2} />
      </span>

      <div className="hub-card-body">
        <div className="hub-card-body-line" />
        <p className="hub-card-desc">{tile.subtitle}</p>
      </div>

      <div className="hub-label-wrap">
        <div className="hub-label hub-label-extras">
          <span className="hub-word-clip">
            <span
              className="hub-word"
              style={{ animationDelay: tile.cardDelay }}
            >
              {tile.title}
            </span>
          </span>
        </div>
        <div
          className={cn("hub-label-fill", "hub-label-extras", isActive && "hub-label-fill-active")}
          aria-hidden="true"
        >
          <span className="hub-word-clip">
            <span className="hub-word" style={{ visibility: "hidden" }}>
              {tile.title}
            </span>
          </span>
        </div>
      </div>
    </button>
  );
}

function RevealSection({ id, tools }: { id: TileId; tools: Service[] }) {
  const [dropClick, setDropClick] = useState(0);
  const DROP_MESSAGES = [
    "когда-нибудь позже..",
    "ты реально надеешься?",
    "окунь ещё глубже...",
    "🤡",
  ];

  return (
    <div className="more-reveal" key={id}>
      <div className="more-reveal-inner">
        {id === "battle" && <ProjectBattle tools={tools} />}
{id === "drops" && (
  <section className="more-section more-section-clickable" onClick={() => setDropClick((p) => Math.min(p + 1, DROP_MESSAGES.length - 1))}>
            <div className="more-section-head">
              <h2 className="more-section-title">Чекер аирдропов</h2>
            </div>
            <p className="more-placeholder-text">{DROP_MESSAGES[dropClick]}</p>
          </section>
        )}
        {id === "calc" && <TradingCalc />}
        {id === "news" && (
          <section className="more-section">
            <div className="more-section-head">
              <h2 className="more-section-title">Новости</h2>
            </div>
            <p className="more-placeholder-text">ну это не новостной сайт, нечего тут смотреть!</p>
          </section>
        )}
      </div>
    </div>
  );
}

export function MoreClient({ tools }: { tools: Service[] }) {
  const [activeTile, setActiveTile] = useState<TileId>(null);

  const openTile = useCallback((id: TileId) => {
    setActiveTile((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="page-wrap">
      <h1 className="page-title">Ещё</h1>

      <div className="hub-grid more-hub-grid">
        <div className="hub-row hub-row-top">
          {BATTLE_TILES.slice(0, 2).map((tile) => (
            <MoreHubTile
              key={tile.id}
              tile={tile}
              isActive={activeTile === tile.id}
              onClick={() => openTile(tile.id)}
            />
          ))}
        </div>
        <div className="hub-row hub-row-bottom">
          {BATTLE_TILES.slice(2).map((tile) => (
            <MoreHubTile
              key={tile.id}
              tile={tile}
              isActive={activeTile === tile.id}
              onClick={() => openTile(tile.id)}
            />
          ))}
        </div>
      </div>

      {activeTile && <RevealSection id={activeTile} tools={tools} />}
    </div>
  );
}
