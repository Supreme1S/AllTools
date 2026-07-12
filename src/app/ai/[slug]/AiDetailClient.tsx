"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Zap,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  DollarSign,
  Play,
} from "lucide-react";
import { ProtocolIcon } from "@/components/ProtocolIcon";
import type { PlatformContent } from "@/lib/catalog/content/types";
import { classifyAiTool, AI_CATEGORIES } from "@/lib/ai/config";
import { lookupReferralUrl } from "@/lib/catalog/referral-lookup";
import type { Service } from "@/types";
import {
  getUseCases,
  getQuickStart,
  getPros,
  getCons,
  getPricingTiers,
  getDefaultTips,
  getDefaultWarnings,
  getOutboundUrl,
} from "@/lib/ai/tool-data";

export function AiDetailClient({
  service,
  content,
}: {
  service: Service;
  content: PlatformContent | null;
}) {
  const categoryId = classifyAiTool(service);
  const categoryLabel =
    AI_CATEGORIES.find((c) => c.id === categoryId)?.label ?? "ИИ";
  const outboundUrl =
    (service.domain ? lookupReferralUrl(service.domain) : null) ??
    (service.outbound_url ||
    service.website_url ||
    getOutboundUrl(service.slug, service.domain));
  const description =
    content?.long ?? service.long_description ?? service.short_description;

  return (
    <div className="page-wrap ai-detail-page">
      <Link href="/ai" className="back-link">
        <ArrowLeft size={15} />
        ИИ
      </Link>

      {/* 1. Header + Description — merged */}
      <header className="ai-detail-header">
        <div className="ai-detail-header-row">
          <div className="ai-detail-header-left">
            <ProtocolIcon
              name={service.name}
              image={service.image}
              domain={service.domain}
              size={56}
              className="ai-detail-header-icon"
            />
            <div className="ai-detail-header-text">
              <h1 className="ai-detail-title">{service.name}</h1>
              <span className="catalog-card-category ai-detail-badge">
                {categoryLabel}
              </span>
            </div>
          </div>
          <div className="ai-detail-header-right">
            <a
              href={outboundUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="header-link header-link-active"
            >
              Открыть
              <ExternalLink size={16} />
            </a>
            {service.domain && (
              <p className="ai-detail-domain">{service.domain}</p>
            )}
          </div>
        </div>
        {description && (
          <>
            <hr className="ai-detail-header-divider" />
            <p className="ai-detail-header-desc">{description}</p>
          </>
        )}
      </header>

      {/* 2. Возможности и задачи — merged use-cases + highlight */}
      <div className="ai-detail-card ai-detail-capabilities">
        <div className="ai-detail-card-head">
          <Sparkles size={18} />
          <h3>Возможности и задачи</h3>
        </div>
        <div className="ai-detail-card-body">
          <p className="ai-detail-capabilities-lead">
            {content?.highlight ?? `${service.name} — AI-инструмент из категории «Нейросети». Подходит для решения повседневных задач: от генерации текста и кода до создания изображений и анализа данных.`}
          </p>
          <ul className="ai-detail-list ai-detail-list-check">
            {getUseCases(service.slug).map((uc, i) => (
              <li key={i}>
                <CheckCircle size={14} />
                <span>{uc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Стоимость */}
      <div className="ai-detail-card ai-detail-pricing-block ai-detail-full">
        <div className="ai-detail-card-head">
          <DollarSign size={18} />
          <h3>Стоимость</h3>
        </div>
        <div className="ai-detail-card-body">
          <div className="ai-detail-pricing-grid">
            {getPricingTiers(service.slug).map((tier, i) => (
              <div key={i} className="ai-detail-pricing-card">
                <div className="ai-detail-pricing-name">{tier.name}</div>
                <div className="ai-detail-pricing-price">{tier.price}</div>
                <ul className="ai-detail-pricing-features">
                  {tier.features.map((f, j) => (
                    <li key={j}>
                      <CheckCircle size={12} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Плюсы / Минусы и риски */}
      <div className="ai-detail-proscons">
        <div className="ai-detail-proscons-card ai-detail-pros">
          <h4 className="ai-detail-proscons-title">
            <CheckCircle size={18} />
            Плюсы
          </h4>
          <ul className="ai-detail-list">
            {getPros(service.slug, content).map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="ai-detail-proscons-card ai-detail-cons">
          <h4 className="ai-detail-proscons-title">
            <AlertTriangle size={18} />
            Минусы и риски
          </h4>
          <ul className="ai-detail-list">
            {[
              ...getCons(service.slug, content),
              ...(content?.warnings ?? getDefaultWarnings(service.slug)),
            ].map((c, i) => (
              <li key={i}>
                <AlertTriangle size={12} className="ai-detail-cons-marker" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. Практические советы */}
      <div className="ai-detail-card ai-detail-tips ai-detail-full">
        <div className="ai-detail-card-head">
          <Lightbulb size={18} />
          <h3>Практические советы</h3>
        </div>
        <div className="ai-detail-card-body">
          <ul className="ai-detail-list">
            {(content?.tips ?? getDefaultTips(service.slug)).map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 6. С чего начать */}
      <div className="ai-detail-card ai-detail-full">
        <div className="ai-detail-card-head">
          <Play size={18} />
          <h3>С чего начать</h3>
        </div>
        <div className="ai-detail-card-body">
          <div className="ai-detail-steps">
            {getQuickStart(service.slug).map((step, i) => (
              <div key={i} className="ai-detail-step">
                <span className="ai-detail-step-num">{i + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Факты */}
      {(content?.facts ?? []).length > 0 && (
        <div className="ai-detail-card ai-detail-full">
          <div className="ai-detail-card-head">
            <Zap size={18} />
            <h3>Факты</h3>
          </div>
          <div className="ai-detail-card-body">
            <div className="ai-detail-facts-grid">
              {(content?.facts ?? []).map((fact, i) => (
                <div key={i} className="ai-detail-fact-item">
                  <Zap size={14} />
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
