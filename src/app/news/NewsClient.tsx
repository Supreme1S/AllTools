"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { IMPACT_COLORS } from "@/lib/constants";
import type { ServiceEvent } from "@/types";

export function NewsClient({ events }: { events: ServiceEvent[] }) {
  return (
    <div className="page-wrap">
      <h1 className="page-title">Новости</h1>
      <p className="page-subtitle">
        Индустриальная хроника: релизы, листинги, апдейты, регуляторные сдвиги и значимые анонсы
      </p>

      <div className="news-feed">
        {events.map((event, i) => (
          <div
            key={event.id}
            className={`news-card fade-up stagger-${Math.min(i + 1, 12)}`}
          >
            <div className="news-card-header">
              <span
                className={`news-impact ${IMPACT_COLORS[event.impact_level] || "bg-zinc-500"}`}
              />
              <span className="news-date">{formatDate(event.happened_at)}</span>
              {event.service_name && (
                <Link
                  href={`/tools/${event.service_id}`}
                  className="news-service"
                >
                  {event.service_name}
                </Link>
              )}
            </div>
            <div className="news-title">{event.title}</div>
            <div className="news-summary">{event.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
