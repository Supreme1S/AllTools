"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formatCategoryTabLabel } from "@/lib/catalog/category-labels";
import { CatalogServiceCard } from "@/components/catalog/CatalogServiceCard";
import { SearchField } from "@/components/search/SearchField";
import type { Service } from "@/types";

const PAGE_SIZE = 10000;

export function CatalogPageClient({
  services,
  categories,
  initialSearch = "",
}: {
  services: Service[];
  categories: string[];
  initialSearch?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setSearch(searchParams.get("q") ?? initialSearch);
  }, [searchParams, initialSearch]);

  function updateSearch(next: string) {
    setSearch(next);
    setVisibleCount(PAGE_SIZE);
  }

  function commitSearch(raw?: string) {
    const trimmed = (raw ?? search).trim();
    const params = new URLSearchParams(searchParams.toString());
    if (trimmed) params.set("q", trimmed);
    else params.delete("q");
    const qs = params.toString();
    router.replace(qs ? `/tools?${qs}` : "/tools", { scroll: false });
  }

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    services.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, [services]);

  const totalCount = services.length;

  const filtered = useMemo(() => {
    return services.filter((s) => {
      if (activeCategory && s.category !== activeCategory) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.domain.toLowerCase().includes(q) ||
          s.short_description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [services, activeCategory, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="page-wrap catalog-page">
      <header className="catalog-hero">
        <h1 className="page-title">Каталог</h1>
        <p className="catalog-lead">
          {totalCount} сервисов, собранных вручную. Без мусора и партнёрских подборок — только то, чем пользуюсь сам или проверил лично.
        </p>
      </header>

      <div className="catalog-toolbar">
        <div className="catalog-tabs-stage">
          <div className="tab-bar catalog-tabs">
          <button
            type="button"
            className={`tab ${activeCategory === null ? "tab-active" : ""}`}
            onClick={() => {
              setActiveCategory(null);
              setVisibleCount(PAGE_SIZE);
            }}
          >
            Все ({totalCount})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`tab ${activeCategory === cat ? "tab-active" : ""}`}
              onClick={() => {
                setActiveCategory(activeCategory === cat ? null : cat);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {formatCategoryTabLabel(cat, categoryCounts[cat] || 0)}
            </button>
          ))}
          </div>
        </div>

        <div className="catalog-search-stage">
          <SearchField
            className="catalog-search"
            value={search}
            onChange={updateSearch}
            onSubmit={commitSearch}
            ariaLabel="Поиск в каталоге"
          />
        </div>
      </div>

      <div className="catalog-card-grid">
        {visible.map((s, i) => (
          <CatalogServiceCard key={s.id} service={s} index={i} />
        ))}
      </div>

      {hasMore && (
        <div className="catalog-load-more">
          <button
            type="button"
            className="catalog-load-more-btn"
            onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
          >
            Показать ещё ({filtered.length - visibleCount})
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <p className="catalog-empty">
          Ничего не нашлось — попробуй другой запрос или сбрось фильтр.
        </p>
      )}
    </div>
  );
}
