"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { ProtocolIcon } from "@/components/ProtocolIcon";
import { getTopPlatformMeta, getCategoryLabel } from "@/lib/catalog/top-platforms";
import { TIER_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { TierEntry } from "@/types";

type CategoryFilter = {
  key: string;
  label: string;
};

export function TierListClient({
  tiers,
  categories,
  labels,
}: {
  tiers: TierEntry[];
  categories: CategoryFilter[];
  labels: Record<string, string>;
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openTiers, setOpenTiers] = useState<Set<string>>(
    () => new Set<string>(),
  );

  const toggleTier = (tier: string) => {
    setOpenTiers((prev) => {
      const next = new Set(prev);
      if (next.has(tier)) next.delete(tier);
      else next.add(tier);
      return next;
    });
  };

  const totalServices = tiers.reduce((s, t) => s + t.services.length, 0);

  return (
    <div className="page-wrap">
      <h1 className="page-title">Тир-лист</h1>
      <p className="page-subtitle">
        Приоритетные площадки по уровням S–D: биржи, DeFi, кошельки,
        инфраструктура и AI — с индивидуальным обоснованием каждой позиции.
      </p>

      {/* Category filter tabs */}
      <div className="tab-bar tierlist-tab-bar">
        <button
          className={cn("tab", !activeCategory && "tab-active")}
          onClick={() => setActiveCategory(null)}
        >
          Все ({totalServices})
        </button>
        {categories.map((cat) => {
          const count = tiers.reduce(
            (s, t) =>
              s +
              t.services.filter((svc) => getTopPlatformMeta(svc.domain)?.category === cat.key)
                .length,
            0,
          );
          return (
            <button
              key={cat.key}
              className={cn("tab", activeCategory === cat.key && "tab-active")}
              onClick={() =>
                setActiveCategory(activeCategory === cat.key ? null : cat.key)
              }
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Tiers S/A/B/C/D */}
      {tiers.map((entry) => {
        if (entry.services.length === 0) return null;
        const colors = TIER_COLORS[entry.tier];
        const isOpen = openTiers.has(entry.tier);

        const visible = activeCategory
          ? entry.services.filter(
              (s) => getTopPlatformMeta(s.domain)?.category === activeCategory,
            ).length
          : entry.services.length;

        return (
          <div
            key={entry.tier}
            className={cn("tier-card", isOpen && "tier-open")}
            style={{
              "--tier-from": colors.gradFrom,
              "--tier-to": colors.gradTo,
              "--tier-glow": colors.glow,
            } as React.CSSProperties}
          >
            <div
              className="tier-header"
              onClick={() => toggleTier(entry.tier)}
            >
              <span
                className={cn(
                  "tier-letter",
                  colors.letter,
                )}
              >
                {entry.tier}
              </span>
              <div className="tier-info">
                <div className="tier-name">
                  {labels[entry.tier] || entry.tier}
                </div>
                <div className="tier-count">
                  {activeCategory
                    ? `${visible} из ${entry.services.length}`
                    : `${entry.services.length} сервис${entry.services.length !== 1 ? "ов" : ""}`}
                </div>
              </div>
              <ChevronDown size={18} className="tier-chevron" />
            </div>
            <div className={cn("tier-body", isOpen && "tier-body-open")}>
              <div className="catalog-card-grid tierlist-grid">
                {entry.services.map((s, i) => {
                  const meta = getTopPlatformMeta(s.domain);
                  const isDimmed =
                    activeCategory !== null && meta?.category !== activeCategory;
                  return (
                    <Link
                      key={s.id}
                      href={isDimmed ? "#" : `/tools/${s.slug}`}
                      className={cn(
                        "catalog-card-shell catalog-card-enter",
                        `stagger-${Math.min(i + 1, 12)}`,
                        isDimmed && "tier-card-dimmed",
                      )}
                      onClick={isDimmed ? (e) => e.preventDefault() : undefined}
                    >
                      <article className="catalog-card tier-catalog-card">
                          <div className="catalog-card-head">
                            <ProtocolIcon
                              name={s.name}
                              image={s.image}
                              domain={s.domain}
                              size={52}
                              className="catalog-card-icon"
                            />
                            <div className="catalog-card-head-text">
                              <h2 className="catalog-card-name">{s.name}</h2>
                              {meta?.category && (
                                <p className="catalog-card-domain">
                                  {getCategoryLabel(meta.category)}
                                </p>
                              )}
                            </div>
                            <ArrowUpRight
                              size={18}
                              className="catalog-card-corner"
                              aria-hidden
                            />
                          </div>

                          <p className="catalog-card-desc">
                            {meta?.tier_rationale || s.short_description}
                          </p>

                          <div className="catalog-card-foot">
                            <span className="catalog-card-category">
                              {entry.tier}-тир
                            </span>
                            <span className="catalog-card-link">Подробнее</span>
                          </div>
                        </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
