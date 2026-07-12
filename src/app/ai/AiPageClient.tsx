"use client";

import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, ChevronDown } from "lucide-react";
import { SearchField } from "@/components/search/SearchField";
import { resolveOutboundUrl } from "@/lib/catalog/referral-lookup";
import { ProtocolIcon } from "@/components/ProtocolIcon";
import { AiQuiz } from "@/components/ai/AiQuiz";
import {
  AI_CATEGORIES,
  AI_IDE_TOOLS,
  AI_RESOURCE_LINKS,
  classifyAiTool,
  DEPLOY_DOMAINS,
  DEPLOY_HOSTING,
  DEPLOY_INSPIRATION,
  getAiCategoryCounts,
  HOW_TO_START_STEPS,
  MODEL_COMPARISONS,
  YOUTUBE_GUIDES_ALL,
  type AiCategoryId,
} from "@/lib/ai/config";
import type { Service } from "@/types";

/** Persists across SPA navigations but resets on full page reload.
 *  true → quiz auto-opens (fresh visit / hard refresh)
 *  false → quiz stays closed (SPA navigation from detail page) */
let quizAutoOpen = true;

export function AiPageClient({
  tools,
  featured,
}: {
  tools: Service[];
  featured: Service[];
}) {
  const [activeCategory, setActiveCategory] = useState<AiCategoryId>("all");
  const [search, setSearch] = useState("");
  const [quizOpen, setQuizOpen] = useState(quizAutoOpen);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  // Lock body scroll while quiz overlay is open
  useEffect(() => {
    if (quizOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [quizOpen]);

  const catalogRef = useRef<HTMLElement>(null);

  const categoryCounts = useMemo(() => getAiCategoryCounts(tools), [tools]);

  const filtered = useMemo(() => {
    return tools.filter((s) => {
      if (activeCategory !== "all" && classifyAiTool(s) !== activeCategory) {
        return false;
      }
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return s.name.toLowerCase().includes(q);
    });
  }, [tools, activeCategory, search]);

  const handleCloseQuiz = useCallback(() => {
    setQuizOpen(false);
    quizAutoOpen = false;
  }, []);

  const handleOpenQuiz = useCallback(() => {
    quizAutoOpen = true;
    setQuizOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleOpenCatalogFromQuiz = useCallback(() => {
    setQuizOpen(false);
    quizAutoOpen = false;
    setTimeout(() => {
      catalogRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <div className="page-wrap ai-page">
      {/* QUIZ OVERLAY */}
      {quizOpen && (
        <AiQuiz tools={tools} onClose={handleCloseQuiz} openCatalog={handleOpenCatalogFromQuiz} />
      )}

      {/* HERO */}
      <div className="ai-hero">
        <div className="ai-hero-left">
          <h1 className="page-title ai-title">ИИ</h1>
          <p className="page-subtitle ai-subtitle">
            Пошаговый старт разработки с ИИ, сравнение нейросетей под задачу, подбор IDE, покупка домена и хостинга, деплой, YouTube-гайды, официальная документация и каталог из 91+ ИИ-инструментов. Всё с ценами и ссылками — одна страница вместо десяти вкладок.
          </p>
        </div>
        <div className="ai-hero-right">
          <button type="button" className="header-link header-link-active ai-retake-btn" onClick={handleOpenQuiz}>
            Подобрать ИИ под задачу
          </button>
        </div>
      </div>

      {/* 1. СРЕДА И ОБУЧЕНИЕ */}
      <section className="ai-section" aria-labelledby="ai-learn-heading">
        <div className="ai-section-head">
          <h2 id="ai-learn-heading" className="ai-section-title">
            Как начать разрабатывать
          </h2>
          <p className="ai-section-desc">
            Пошаговые инструкции для старта — от выбора AI-модели до деплоя первого проекта.
          </p>
        </div>

        {/* How to start — 3 steps */}
        <div className="ai-howto-grid">
          {HOW_TO_START_STEPS.map((s) => (
            <div key={s.num} className="ai-howto-card">
              <div className="ai-howto-num">{s.num}</div>
              <div className="ai-howto-text">
                <h3 className="ai-howto-title">{s.title}</h3>
                <p className="ai-howto-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ВЫБОР AI ПОД ЗАДАЧУ */}
      <section className="ai-section" aria-labelledby="ai-compare-heading">
        <div className="ai-section-head">
          <h2 id="ai-compare-heading" className="ai-section-title">
            Выбор AI под задачу
          </h2>
          <p className="ai-section-desc">
            Универсального ИИ не существует. Под каждую задачу — своя модель.
          </p>
        </div>
        <div className="ai-compare-grid">
          {MODEL_COMPARISONS.map((m) => (
            <div key={m.task} className="ai-compare-card">
              <h3 className="ai-compare-task">{m.task}</h3>
              <div className="ai-compare-row">
                <div className="ai-compare-label">Лучший</div>
                <div className="ai-compare-info">
                  <div className="ai-compare-name">
                    <ProtocolIcon name={m.best.name} domain={m.best.domain} size={44} priority />
                    {m.best.name}
                  </div>
                  <div className="ai-compare-price">{m.best.price}</div>
                  <p className="ai-compare-strength">{m.best.strength}</p>
                </div>
              </div>
              <div className="ai-compare-row">
                <div className="ai-compare-label ai-compare-label-budget">Бюджет</div>
                <div className="ai-compare-info">
                  <div className="ai-compare-name">
                    <ProtocolIcon name={m.budget.name} domain={m.budget.domain} size={44} priority />
                    {m.budget.name}
                  </div>
                  <div className="ai-compare-price">{m.budget.price}</div>
                  <p className="ai-compare-strength">{m.budget.strength}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. IDE для AI-разработки */}
      <section className="ai-section" aria-labelledby="ai-ide-heading">
        <div className="ai-section-head">
          <h2 id="ai-ide-heading" className="ai-section-title">
            IDE для AI-разработки
          </h2>
          <p className="ai-section-desc">
            Среда, в которой ИИ-агент понимает ваш код и пишет его вместе с вами.
          </p>
        </div>

        <div className="ai-ide-grid">
          {AI_IDE_TOOLS.map((tool) => (
            <a
              key={tool.url}
              href={resolveOutboundUrl(tool.domain, tool.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="ai-ide-card"
            >
              <ProtocolIcon name={tool.name} domain={tool.domain} size={48} priority />
              <span className="ai-ide-name">{tool.name}</span>
              <span className="ai-ide-price">{tool.price}</span>
              <ExternalLink size={14} className="ai-ide-icon" />
            </a>
          ))}
        </div>
      </section>

      {/* 4. ДЕПЛОЙ В ПРОДАКШЕН */}
      <section className="ai-section" aria-labelledby="ai-deploy-heading">
        <div className="ai-section-head">
          <h2 id="ai-deploy-heading" className="ai-section-title">
            Как запустить проект
          </h2>
          <p className="ai-section-desc">
            От домена до хостинга и дизайн-вдохновения. Для бэкенда —
            VDS из{" "}
            <Link href="/tools?q=vps" className="ai-inline-link">
              каталога
            </Link>
            .
          </p>
        </div>

        <div className="ai-deploy-columns">
          <div className="ai-deploy-col">
            <div className="ai-deploy-col-inner">
            <h3 className="ai-subsection-title">Домены</h3>
            <div className="ai-deploy-list">
              {DEPLOY_DOMAINS.map((d) => (
                <a
                  key={d.url}
                  href={resolveOutboundUrl(d.domain, d.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-deploy-card"
                >
                  <div className="ai-deploy-card-head">
                    <span className="ai-deploy-name">
                      <ProtocolIcon name={d.name} domain={d.domain} size={44} priority />
                      {d.name}
                    </span>
                    <span className="ai-deploy-price">{d.price}</span>
                  </div>
                  <p className="ai-deploy-note">{d.note}</p>
                </a>
              ))}
            </div>
            </div>
          </div>
          <div className="ai-deploy-col">
            <div className="ai-deploy-col-inner">
            <h3 className="ai-subsection-title">Хостинг и деплой</h3>
            <div className="ai-deploy-list">
              {DEPLOY_HOSTING.map((d) => (
                <a
                  key={d.url}
                  href={resolveOutboundUrl(d.domain, d.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-deploy-card"
                >
                  <div className="ai-deploy-card-head">
                    <span className="ai-deploy-name">
                      <ProtocolIcon name={d.name} domain={d.domain} size={44} priority />
                      {d.name}
                    </span>
                    <span className="ai-deploy-price">{d.price}</span>
                  </div>
                  <p className="ai-deploy-note">{d.note}</p>
                </a>
              ))}
            </div>
            </div>
          </div>
          <div className="ai-deploy-col">
            <div className="ai-deploy-col-inner">
            <h3 className="ai-subsection-title">Дизайн-вдохновение</h3>
            <div className="ai-deploy-list">
              {DEPLOY_INSPIRATION.map((d) => (
                <a
                  key={d.url}
                  href={resolveOutboundUrl(d.domain, d.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ai-deploy-card"
                >
                  <div className="ai-deploy-card-head">
                    <span className="ai-deploy-name">
                      <ProtocolIcon name={d.name} domain={d.domain} size={44} priority />
                      {d.name}
                    </span>
                    <span className="ai-deploy-price">{d.price}</span>
                  </div>
                  <p className="ai-deploy-note">{d.note}</p>
                </a>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Гайды и документация */}
      <section className="ai-section" aria-labelledby="ai-guides-heading">
        <div className="ai-section-head">
          <h2 id="ai-guides-heading" className="ai-section-title">
            Гайды и документация
          </h2>
          <p className="ai-section-desc">
            Лучшие YouTube-гайды по ИИ-инструментам и официальная документация от создателей.
          </p>
        </div>

        <div className={`ai-collapse-card${guidesOpen ? " ai-collapse-card-open" : ""}`}>
          <button
            type="button"
            className="ai-collapse-trigger"
            onClick={() => setGuidesOpen((v) => !v)}
            aria-expanded={guidesOpen}
          >
            <div className="ai-collapse-trigger-info">
              <div className="ai-collapse-trigger-title">YouTube-гайды</div>
              <div className="ai-collapse-trigger-desc">Лучшие видео по ИИ-инструментам на 4 языках</div>
            </div>
            <span className="ai-collapse-trigger-count">{Object.values(YOUTUBE_GUIDES_ALL).reduce((s, g) => s + g.length, 0)} видео</span>
            <ChevronDown
              size={20}
              className={`ai-collapse-chevron${guidesOpen ? " ai-collapse-chevron-open" : ""}`}
            />
          </button>
          <div className={`ai-collapse-body-wrap${guidesOpen ? " ai-collapse-body-wrap-open" : ""}`}>
            <div className="ai-collapse-body">
              <div className="ai-guides-grid">
                {Object.entries(YOUTUBE_GUIDES_ALL).map(([lang, guides]) => (
                  <div key={lang} className="ai-guides-lang-card">
                    <div className="ai-guides-lang-header">
                      <span className="ai-guides-lang-flag">
                        {lang === "Русский" ? "🇷🇺" : lang === "English" ? "🇬🇧" : lang === "Español" ? "🇪🇸" : "🇨🇳"}
                      </span>
                      <span className="ai-guides-lang-name">{lang}</span>
                    </div>
                    <div className="ai-resource-row">
                      {guides.map((g) => (
                        <a
                          key={g.url}
                          href={g.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ai-resource-link"
                        >
                          <span className="ai-resource-link-label">
                            {g.label} <ExternalLink size={12} />
                          </span>
                          {g.note && <span className="ai-resource-link-note">{g.note}</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`ai-collapse-card${docsOpen ? " ai-collapse-card-open" : ""}`}>
          <button
            type="button"
            className="ai-collapse-trigger"
            onClick={() => setDocsOpen((v) => !v)}
            aria-expanded={docsOpen}
          >
            <div className="ai-collapse-trigger-info">
              <div className="ai-collapse-trigger-title">Официальная документация</div>
              <div className="ai-collapse-trigger-desc">Первоисточники от создателей — Anthropic, OpenAI, Google, Cursor</div>
            </div>
            <span className="ai-collapse-trigger-count">{AI_RESOURCE_LINKS.length} ссылок</span>
            <ChevronDown
              size={20}
              className={`ai-collapse-chevron${docsOpen ? " ai-collapse-chevron-open" : ""}`}
            />
          </button>
          <div className={`ai-collapse-body-wrap${docsOpen ? " ai-collapse-body-wrap-open" : ""}`}>
            <div className="ai-collapse-body">
              <div className="ai-resource-row">
                {AI_RESOURCE_LINKS.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ai-resource-link"
                  >
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. КАТАЛОГ ИИ */}
      <section
        className="ai-section ai-catalog-section"
        aria-labelledby="ai-catalog-heading"
        ref={catalogRef}
      >
        <div className="ai-section-head">
          <h2 id="ai-catalog-heading" className="ai-section-title">
            Каталог ИИ
          </h2>
          <p className="ai-section-desc">
            Все нейросети из AllTools — фильтр по задаче или поиск по названию.
          </p>
        </div>

        <div className="catalog-toolbar">
          <div className="tab-bar ai-tabs">
            {AI_CATEGORIES.map((cat) => {
              const count =
                cat.id === "all"
                  ? tools.length
                  : categoryCounts[cat.id as Exclude<AiCategoryId, "all">];
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`tab ${activeCategory === cat.id ? "tab-active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  title={cat.hint}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="catalog-search-stage">
            <SearchField
              className="catalog-search"
              value={search}
              onChange={setSearch}
              ariaLabel="Поиск ИИ-сервисов"
              phrases={[
                "ChatGPT",
                "Claude",
                "DeepSeek",
                "Midjourney",
                "Cursor",
                "Perplexity",
                "Gemini",
                "Copilot",
                "ElevenLabs",
                "Suno",
              ]}
            />
          </div>
        </div>

        <div className="catalog-card-grid">
          {filtered.map((s, i) => (
            <Link
              key={s.id}
              href={`/ai/${s.slug}`}
              className={`catalog-card-shell catalog-card-enter stagger-${Math.min(i + 1, 12)}`}
            >
              <article className="catalog-card">
                <div className="catalog-card-head">
                  <ProtocolIcon
                    name={s.name}
                    image={s.image}
                    domain={s.domain}
                    size={52}
                    className="catalog-card-icon"
                    priority
                  />
                  <div className="catalog-card-head-text">
                    <h2 className="catalog-card-name">{s.name}</h2>
                    <p className="catalog-card-domain">{s.domain}</p>
                  </div>
                  <ArrowUpRight size={18} className="catalog-card-corner" aria-hidden />
                </div>
                <p className="catalog-card-desc">{s.short_description}</p>
                <div className="catalog-card-foot">
                  <span className="catalog-card-category">
                    {AI_CATEGORIES.find((c) => c.id === classifyAiTool(s))?.label}
                  </span>
                  <span className="catalog-card-link">Подробнее</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="ai-empty">Ничего не найдено — попробуй другой запрос.</p>
        )}
      </section>
    </div>
  );
}
