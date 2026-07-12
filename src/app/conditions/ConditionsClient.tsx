"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExternalLink, Search } from "lucide-react";
import { getCategoryLabel, getCustodyLabel } from "@/lib/utils";
import { lookupReferralUrl } from "@/lib/catalog/referral-lookup";
import type { Service } from "@/types";

type SortKey = "name" | "category" | "custody_type";

export function ConditionsClient({ services }: { services: Service[] }) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");

  const filtered = useMemo(() => {
    let list = services;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) => {
      const aVal = a[sortKey].toLowerCase();
      const bVal = b[sortKey].toLowerCase();
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
      return 0;
    });
  }, [services, search, sortKey]);

  return (
    <div className="page-wrap">
      <h1 className="page-title">Сводка</h1>
      <p className="page-subtitle">
        Таблица по всем платформам: кастоди, фиат, P2P, категория и домен
      </p>

      <div className="search-input-wrapper">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Поиск по платформе или категории..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2 mb-5 flex-wrap">
        <button className="sort-btn" onClick={() => setSortKey("name")}>
          По названию
        </button>
        <button className="sort-btn" onClick={() => setSortKey("category")}>
          По категории
        </button>
        <button className="sort-btn" onClick={() => setSortKey("custody_type")}>
          По кастоди
        </button>
      </div>

      <div className="conditions-table-wrap">
        <table className="conditions-table">
          <thead>
            <tr>
              <th>Платформа</th>
              <th>Категория</th>
              <th>Кастоди</th>
              <th>Фиат</th>
              <th>P2P</th>
              <th>Сайт</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td>
                  <Link href={`/tools/${s.slug}`} className="service-link">
                    {s.name}
                  </Link>
                </td>
                <td>{getCategoryLabel(s.category)}</td>
                <td>{getCustodyLabel(s.custody_type)}</td>
                <td>
                  {s.supports_fiat ? (
                    <span className="badge-yes">Да</span>
                  ) : (
                    <span className="badge-no">Нет</span>
                  )}
                </td>
                <td>
                  {s.supports_p2p ? (
                    <span className="badge-yes">Да</span>
                  ) : (
                    <span className="badge-no">Нет</span>
                  )}
                </td>
                <td>
                  {s.website_url && (
                    <a
                      href={
                        (s.domain ? lookupReferralUrl(s.domain) : null) ??
                        (s.outbound_url ||
                        s.website_url)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="muted-text text-center py-12 text-sm">
          Ничего не найдено.
        </p>
      )}
    </div>
  );
}
