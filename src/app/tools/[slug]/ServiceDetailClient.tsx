"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { ProtocolIcon } from "@/components/ProtocolIcon";
import { formatDate } from "@/lib/utils";
import { lookupReferralUrl } from "@/lib/catalog/referral-lookup";
import { IMPACT_COLORS } from "@/lib/constants";
import type { InsightKind, Service, ServiceEvent } from "@/types";

const INSIGHT_META: Record<
  InsightKind,
  { label: string; icon: typeof Sparkles; className: string }
> = {
  highlight: {
    label: "Главное",
    icon: Sparkles,
    className: "detail-insight-highlight",
  },
  fact: {
    label: "Факт",
    icon: Zap,
    className: "detail-insight-fact",
  },
  tip: {
    label: "Совет",
    icon: Lightbulb,
    className: "detail-insight-tip",
  },
  warning: {
    label: "Риск",
    icon: AlertTriangle,
    className: "detail-insight-warning",
  },
};

const INSIGHT_ORDER: InsightKind[] = ["highlight", "fact", "tip", "warning"];

const INSIGHT_PLURAL: Partial<Record<InsightKind, string>> = {
  fact: "Факты",
  tip: "Советы",
  warning: "Риски",
};

function groupInsightsByKind(insights: { kind: InsightKind; text: string }[]) {
  const groups = new Map<InsightKind, string[]>();

  for (const insight of insights) {
    const items = groups.get(insight.kind) ?? [];
    items.push(insight.text);
    groups.set(insight.kind, items);
  }

  return INSIGHT_ORDER.filter((kind) => groups.has(kind)).map((kind) => ({
    kind,
    texts: groups.get(kind)!,
  }));
}

function formatTvl(value: number): string {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
}

export function ServiceDetailClient({
  service,
  events,
}: {
  service: Service;
  events: ServiceEvent[];
}) {
  const outbound =
    (service.domain ? lookupReferralUrl(service.domain) : null) ??
    (service.outbound_url ||
    service.website_url);
  const insights = service.detail_insights ?? [];
  const insightGroups = groupInsightsByKind(insights);

  return (
    <div className="page-wrap service-detail-page">
      <Link href="/tools" className="back-link">
        <ArrowLeft size={15} />
        Каталог
      </Link>

      <header className="service-detail-header">
        <div className="service-detail-header-identity">
          <ProtocolIcon
            name={service.name}
            image={service.image}
            domain={service.domain}
            size={56}
            className="service-detail-icon"
          />
          <div className="service-detail-header-text">
            <h1 className="service-detail-title">{service.name}</h1>
            <p className="service-detail-domain">{service.domain}</p>
            <p className="service-detail-overview">
              {service.long_description || service.short_description}
            </p>
          </div>
        </div>

        <div className="service-detail-header-panel">
          {outbound && (
            <a
              href={outbound}
              target="_blank"
              rel="noopener noreferrer"
              className="service-detail-cta"
            >
              <ExternalLink size={16} aria-hidden />
              Открыть платформу
            </a>
          )}
        </div>
      </header>

      <div className="service-detail-body">
        {insightGroups.length > 0 && (
          <div className="detail-card detail-card-insights">
            <h2>Разбор</h2>
            <p className="detail-insights-lead">
              Что стоит знать — без маркетингового шума, с акцентом на практику
              и риски.
            </p>
            <div className="detail-insights-grid">
              {insightGroups.map(({ kind, texts }) => {
                const meta = INSIGHT_META[kind];
                const Icon = meta.icon;
                const label =
                  texts.length > 1
                    ? (INSIGHT_PLURAL[kind] ?? meta.label)
                    : meta.label;

                return (
                  <article
                    key={kind}
                    className={`detail-insight ${meta.className}`}
                  >
                    <div className="detail-insight-head">
                      <Icon size={15} aria-hidden />
                      <span>{label}</span>
                    </div>
                    {texts.length === 1 ? (
                      <p>{texts[0]}</p>
                    ) : (
                      <ul className="detail-insight-list">
                        {texts.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {events.length > 0 && (
          <div className="detail-card service-detail-events">
            <h2>События</h2>
            {events.map((event) => (
              <div key={event.id} className="detail-event-row">
                <div className="detail-event-meta">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${IMPACT_COLORS[event.impact_level] || "bg-zinc-500"}`}
                  />
                  <span className="detail-event-date">
                    {formatDate(event.happened_at)}
                  </span>
                </div>
                <div className="detail-event-title">{event.title}</div>
                <div className="detail-event-summary">{event.summary}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
