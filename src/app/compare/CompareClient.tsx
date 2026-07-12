"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { cn, getCategoryLabel, getCustodyLabel } from "@/lib/utils";
import { COMPARISON_METRICS } from "@/lib/constants";
import type { Service } from "@/types";

const MAX_SELECTED = 5;
const CHIP_LIMIT = 80;

export function CompareClient({ services }: { services: Service[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_SELECTED) return prev;
      return [...prev, id];
    });
  };

  const selectedServices = useMemo(
    () => services.filter((s) => selected.includes(s.id)),
    [services, selected],
  );

  const chipPool = useMemo(() => {
    const q = search.trim().toLowerCase();
    let list = services;
    if (q) {
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.domain.toLowerCase().includes(q),
      );
    } else {
      list = [...services]
        .sort((a, b) => (a.top_rank ?? 99) - (b.top_rank ?? 99))
        .slice(0, CHIP_LIMIT);
    }
    return list.slice(0, q ? 120 : CHIP_LIMIT);
  }, [services, search]);

  return (
    <div className="page-wrap">
      <h1 className="page-title">Сравнение</h1>
      <p className="page-subtitle">
        Выберите до {MAX_SELECTED} платформ для параллельного сопоставления по
        ключевым характеристикам
      </p>

      <div className="search-input-wrapper compare-search">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Найти платформу по названию или домену..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="compare-chips">
        {chipPool.map((s) => {
          const isActive = selected.includes(s.id);
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={cn(
                "compare-chip",
                isActive ? "compare-chip-active" : "compare-chip-inactive",
              )}
            >
              {s.name}
            </button>
          );
        })}
      </div>

      {!search.trim() && services.length > CHIP_LIMIT && (
        <p className="compare-hint muted-text">
          Показаны приоритетные {CHIP_LIMIT} из {services.length}. Введите
          запрос, чтобы найти остальные.
        </p>
      )}

      {selectedServices.length > 0 && (
        <div className="compare-table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Метрика</th>
                {selectedServices.map((s) => (
                  <th key={s.id}>{s.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_METRICS.map((metric) => (
                <tr key={metric.key}>
                  <td>{metric.label}</td>
                  {selectedServices.map((s) => {
                    const val = s[metric.key as keyof Service];
                    let display: string;
                    if (metric.key === "category") {
                      display = getCategoryLabel(String(val));
                    } else if (metric.key === "custody_type") {
                      display = getCustodyLabel(String(val));
                    } else if (typeof val === "boolean") {
                      display = val ? "Да" : "Нет";
                    } else {
                      display = String(val ?? "—");
                    }
                    return <td key={s.id}>{display}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
