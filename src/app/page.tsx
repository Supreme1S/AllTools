"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HUB_CARDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function parseDelayMs(raw: string): number {
  const trimmed = raw.trim();
  if (trimmed.endsWith("ms")) return parseFloat(trimmed);
  if (trimmed.endsWith("s")) return parseFloat(trimmed) * 1000;
  return parseFloat(trimmed) || 0;
}

const TOP_SLUGS = new Set(["/tools", "/tierlist"]);
const BOTTOM_SLUGS = new Set(["/ai", "/guides", "/more"]);

function HubCard({
  card,
}: {
  card: (typeof HUB_CARDS)[number];
}) {
  const baseMs = parseDelayMs(card.cardDelay);

  const sizeClass =
    card.slug === "/tools"
      ? "hub-label-tools"
      : card.slug === "/tierlist"
        ? "hub-label-tierlist"
        : card.slug === "/ai"
          ? "hub-label-ai"
          : card.slug === "/guides"
            ? "hub-label-guides"
            : "hub-label-extras";

  return (
    <Link href={card.slug} className={cn("hub-card", card.cardClass)}>
      <span className="hub-arrow">
        <ArrowUpRight size={20} strokeWidth={2.5} />
      </span>

      <div className="hub-card-body">
        <div className="hub-card-body-line" />
        <p className="hub-card-desc">{card.subtitle}</p>
      </div>

      <div className="hub-label-wrap">
        <div className={cn("hub-label", sizeClass)}>
          {card.title.map((word, wi) => (
            <span key={wi} className="hub-word-clip">
              <span
                className="hub-word"
                style={{ animationDelay: `${baseMs + wi * 80}ms` }}
              >
                {word}
                {wi < card.title.length - 1 ? "\u00A0" : ""}
              </span>
            </span>
          ))}
        </div>
        <div className={cn("hub-label-fill", sizeClass)} aria-hidden="true">
          {card.title.map((word, wi) => (
            <span key={wi} className="hub-word-clip">
              <span className="hub-word" style={{ visibility: "hidden" }}>
                {word}
                {wi < card.title.length - 1 ? "\u00A0" : ""}
              </span>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const topCards = HUB_CARDS.filter((c) => TOP_SLUGS.has(c.slug));
  const bottomCards = HUB_CARDS.filter((c) => BOTTOM_SLUGS.has(c.slug));

  return (
    <>
      <div className="hub-bg-layer" aria-hidden="true">
        <div className="hub-bg-aurora" />
        <div className="hub-bg-aurora-alt" />
        <div className="hub-bg-shimmer" />
        <div className="hub-bg-vignette" />
        <div className="hub-bg-grid" />
      </div>

      <div id="main-content" className="hub-stage">
        <div className="hub-frame">
          <div className="hub-row hub-row-top">
            {topCards.map((card) => (
              <HubCard key={card.slug} card={card} />
            ))}
          </div>
          <div className="hub-row hub-row-bottom">
            {bottomCards.map((card) => (
              <HubCard key={card.slug} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
