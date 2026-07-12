"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, GraduationCap, TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProtocolIcon } from "@/components/ProtocolIcon";
import {
  type TrainingResource,
  type LevelId,
  type CategoryId,
  LEVEL_LABELS,
  LEVEL_SYMBOLS,
  LEVEL_DESCRIPTIONS,
  LEVEL_COLORS,
  CATEGORY_LABELS,
  SOURCE_TYPE_LABELS,
  LANG_LABELS,
} from "@/lib/training-resources";
import type { Guide } from "@/types";

const LEVEL_ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  "graduation-cap": GraduationCap,
  "trending-up": TrendingUp,
  "zap": Zap,
};

const LEVEL_ORDER: LevelId[] = ["beginner", "intermediate", "advanced"];

const ALL_CATEGORIES: { key: CategoryId; label: string }[] = [
  { key: "crypto", label: "Крипта" },
  { key: "defi", label: "DeFi" },
  { key: "ai", label: "ИИ" },
  { key: "analytics", label: "Аналитика" },
  { key: "security", label: "Безопасность" },
  { key: "trading", label: "Тактики" },
];

export function GuidesClient({
  resources,
  guides,
}: {
  resources: TrainingResource[];
  guides: Guide[];
}) {
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [openLevels, setOpenLevels] = useState<Set<LevelId>>(
    () => new Set<LevelId>(),
  );

  const toggleLevel = (level: LevelId) => {
    setOpenLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  };

  const getCategoryCount = (key: CategoryId) =>
    resources.filter((r) => r.category === key).length;

  const visibleCategories = ALL_CATEGORIES.filter(
    (cat) => getCategoryCount(cat.key) > 0,
  );

  const totalResources = resources.length;

  return (
    <div className="page-wrap">
      <h1 className="page-title">Гайды</h1>
      <p className="page-subtitle">
        3 уровня обучения по всем разделам платформы — от первого кошелька до
        DeFi-тактик и ИИ-билдинга. Выбери свой уровень и начни.
      </p>

      {/* Category filter tabs — 1:1 as TierListClient */}
      <div className="tab-bar tierlist-tab-bar">
        <button
          className={cn("tab", !activeCategory && "tab-active")}
          onClick={() => setActiveCategory(null)}
        >
          Все ({totalResources})
        </button>
        {visibleCategories.map((cat) => (
          <button
            key={cat.key}
            className={cn("tab", activeCategory === cat.key && "tab-active")}
            onClick={() =>
              setActiveCategory(activeCategory === cat.key ? null : cat.key)
            }
          >
            {cat.label} ({getCategoryCount(cat.key)})
          </button>
        ))}
      </div>

      {/* Tier-cards — 1:1 as TierListClient */}
      {LEVEL_ORDER.map((level) => {
        const levelResources = resources.filter((r) => r.level === level);
        if (levelResources.length === 0) return null;

        const colors = LEVEL_COLORS[level];
        const isOpen = openLevels.has(level);
        const Icon = LEVEL_ICONS[LEVEL_SYMBOLS[level]];

        const visible = activeCategory
          ? levelResources.filter((r) => r.category === activeCategory).length
          : levelResources.length;

        return (
          <div
            key={level}
            className={cn("tier-card", isOpen && "tier-open")}
            style={
              {
                "--tier-from": colors.gradFrom,
                "--tier-to": colors.gradTo,
                "--tier-glow": colors.glow,
              } as React.CSSProperties
            }
          >
            <div className="tier-header" onClick={() => toggleLevel(level)}>
              <span className="tier-letter">
                <Icon size={64} strokeWidth={1} />
              </span>
              <div className="tier-info">
                <div className="tier-name">
                  {LEVEL_LABELS[level]} — {LEVEL_DESCRIPTIONS[level]}
                </div>
                <div className="tier-count">
                  {activeCategory
                    ? `${visible} из ${levelResources.length}`
                    : `${levelResources.length} ресурс${levelResources.length !== 1 ? "ов" : ""}`}
                </div>
              </div>
              <ChevronDown size={18} className="tier-chevron" />
            </div>
            <div className={cn("tier-body", isOpen && "tier-body-open")}>
              <div className="catalog-card-grid tierlist-grid">
                {levelResources.map((r, i) => {
                  const isDimmed =
                    activeCategory !== null && r.category !== activeCategory;
                  return (
                    <a
                      key={r.id}
                      href={isDimmed ? "#" : r.url}
                      target={isDimmed ? undefined : "_blank"}
                      rel={isDimmed ? undefined : "noopener noreferrer"}
                    className={cn(
                      "catalog-card-shell",
                      isDimmed && "tier-card-dimmed",
                    )}
                      onClick={isDimmed ? (e) => e.preventDefault() : undefined}
                    >
                      <article className="catalog-card tier-catalog-card">
                        <div className="catalog-card-head">
                          <ProtocolIcon
                            name={r.title}
                            domain={r.domain}
                            size={52}
                            className="catalog-card-icon"
                          />
                          <div className="catalog-card-head-text">
                            <div className="catalog-card-name-row">
                              <h2 className="catalog-card-name">{r.title}</h2>
                              {r.recommended && (
                                <span className="catalog-card-badge">
                                  Начни с этого
                                </span>
                              )}
                            </div>
                            <p className="catalog-card-domain">
                              {SOURCE_TYPE_LABELS[r.sourceType]}
                              {" · "}
                              {LANG_LABELS[r.lang]}
                              {r.free ? " · Бесплатно" : ""}
                            </p>
                          </div>
                          <ArrowUpRight
                            size={18}
                            className="catalog-card-corner"
                            aria-hidden
                          />
                        </div>

                        <p className="catalog-card-desc">{r.description}</p>

                        <div className="catalog-card-foot">
                          <span className="catalog-card-category">
                            {CATEGORY_LABELS[r.category]}
                          </span>
                          <span className="catalog-card-link">Перейти</span>
                        </div>
                      </article>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

      {/* Our Guides section */}
      <div className="section-head" style={{ marginTop: 32 }}>
        <span className="section-head-title">Наши гайды</span>
        <div className="section-head-line" />
      </div>
      <div className="catalog-card-grid">
        {guides
          .filter((g) => g.published)
          .map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.slug}`}
              className="catalog-card-shell"
            >
              <article className="catalog-card">
                <h2 className="catalog-card-name">{guide.title}</h2>
                <p className="catalog-card-desc">{guide.excerpt}</p>
              </article>
            </Link>
          ))}
      </div>
    </div>
  );
}
