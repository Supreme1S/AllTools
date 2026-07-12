"use client";

import { useState, useCallback, useMemo, useRef } from "react";
import { ArrowLeft, ArrowRight, X, Sparkles } from "lucide-react";
import { resolveOutboundUrl } from "@/lib/catalog/referral-lookup";
import {
  QUIZ_Q1,
  QUIZ_Q2,
  QUIZ_Q3,
  QUIZ_CATEGORY_LABELS,
  SHORTCUT_RESULTS,
  type QuizAnswers,
  type QuizStep,
  type QuizResult,
} from "@/lib/ai/config";
import type { Service } from "@/types";
import { AiLogoCarousel } from "./AiLogoCarousel";
import { ProtocolIcon } from "@/components/ProtocolIcon";

type Phase = "intro" | "questions" | "results" | "loading";
type Step = 0 | 1 | 2; // 0=Q1, 1=Q2, 2=Q3

const FALLBACK_RESULTS: QuizResult[] = [
  {
    name: "ChatGPT",
    domain: "chat.openai.com",
    slug: "openai",
    why: "Универсальный старт — от текстов до кода. Бесплатный тир с GPT-4o справляется с большинством задач. Сервис подбора временно недоступен.",
  },
];

export function AiQuiz({
  tools,
  onClose,
  openCatalog,
}: {
  tools: Service[];
  onClose: () => void;
  openCatalog: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState<Step>(0);
  const [leaving, setLeaving] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [shortcutResults, setShortcutResults] = useState(false);
  const [aiResults, setAiResults] = useState<QuizResult[] | null>(null);
  const [aiError, setAiError] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const handleClose = useCallback(() => {
    abortRef.current?.abort();
    setLeaving(true);
    setTimeout(onClose, 450);
  }, [onClose]);

  const handleStart = useCallback(() => {
    setPhase("questions");
  }, []);

  const handleBack = useCallback(() => {
    abortRef.current?.abort();
    if (phase === "loading") {
      setPhase("questions");
      setStep(2);
      return;
    }
    if (phase === "results") {
      setShortcutResults(false);
      setAiResults(null);
      setAiError(false);
      setPhase("questions");
      setStep(shortcutResults ? 0 : 2);
      return;
    }
    if (step === 0) {
      setPhase("intro");
      return;
    }
    if (step === 1) {
      setStep(0);
      return;
    }
    setStep(1);
  }, [step, phase, shortcutResults]);

  const callAiPersonalize = useCallback(
    (finalAnswers: QuizAnswers) => {
      const controller = new AbortController();
      abortRef.current = controller;

      setPhase("loading");
      setAiError(false);

      // Send all tools — AI is smart enough to pick the right ones per task+budget
      const categoryTools = tools
        .map((t) => ({
          name: t.name,
          domain: t.domain,
          slug: t.slug,
          short_description: t.short_description,
          image: t.image,
        }))
        .slice(0, 40); // keep prompt compact (~3000 tokens max)

      fetch("/api/ai/personalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers, tools: categoryTools }),
        signal: controller.signal,
      })
        .then(async (res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          if (data.results?.length) {
            setAiResults(data.results);
            setPhase("results");
          } else {
            throw new Error("No results from AI");
          }
        })
        .catch((err) => {
          if (err.name === "AbortError") return;
          console.error("AI personalize error:", err);
          setAiError(true);
          setPhase("results");
        });
    },
    [tools],
  );

  const handleAnswer = useCallback(
    (stepId: string, optionId: string) => {
      setAnswers((prev) => ({ ...prev, [stepId]: optionId }));

      if (stepId === "task") {
        if (optionId === "chat") {
          setShortcutResults(true);
          setPhase("results");
          return;
        }
        setPulse(true);
        setTimeout(() => {
          setStep(1);
          setPulse(false);
        }, 220);
        return;
      }

      if (stepId === "q2") {
        setPulse(true);
        setTimeout(() => {
          setStep(2);
          setPulse(false);
        }, 220);
        return;
      }

      if (stepId === "budget") {
        const finalAnswers = { ...answers, budget: optionId } as QuizAnswers;
        setPulse(true);
        setTimeout(() => {
          setPulse(false);
          callAiPersonalize(finalAnswers);
        }, 220);
      }
    },
    [answers, callAiPersonalize],
  );

  const task = answers.task ?? "";
  const q2Config = task && task !== "chat" ? QUIZ_Q2[task] : null;
  const currentStep: QuizStep | null =
    step === 0
      ? QUIZ_Q1
      : step === 1 && q2Config
        ? { id: "q2", question: q2Config.question, options: q2Config.options }
        : step === 2
          ? QUIZ_Q3
          : null;

  const totalSteps = 3;
  const displayResults = shortcutResults
    ? SHORTCUT_RESULTS
    : aiResults && aiResults.length > 0
      ? aiResults
      : FALLBACK_RESULTS;
  const taskLabel = QUIZ_CATEGORY_LABELS[task] ?? "";

  const toolMap = useMemo(() => {
    const map = new Map<string, Service>();
    for (const t of tools) {
      map.set(t.slug, t);
      map.set(
        t.domain.toLowerCase().replace(/^www\./, ""),
        t,
      );
      map.set(t.name.toLowerCase(), t);
    }
    return map;
  }, [tools]);

  const getToolImage = (r: QuizResult): string | null => {
    const tool = toolMap.get(r.slug) ??
      toolMap.get(r.domain.toLowerCase().replace(/^www\./, "")) ??
      toolMap.get(r.name.toLowerCase());
    return tool?.image ?? r.image ?? null;
  };

  const isAiPowered = !shortcutResults && aiResults && aiResults.length > 0;

  return (
    <div
      className={`ai-quiz-overlay${leaving ? " ai-quiz-overlay-leaving" : ""}`}
    >
      <div
        className={`ai-quiz-card${phase === "intro" ? " ai-quiz-card-intro" : ""}`}
      >
        {/* ── NAV TOP BAR ── */}
        <div className="quiz-nav-top">
          <button
            type="button"
            className={`quiz-nav-back-top${phase === "intro" ? " quiz-nav-back-top-hidden" : ""}`}
            onClick={handleBack}
          >
            <ArrowLeft size={14} /> Назад
          </button>
          <button
            type="button"
            className="quiz-nav-skip-top"
            onClick={handleClose}
          >
            <X size={14} /> Закрыть
          </button>
        </div>

        <div className="quiz-stage">
          {/* ── INTRO ── */}
          <div
            className={`quiz-slide${phase === "intro" ? " quiz-slide-active" : " quiz-slide-out"}`}
          >
            <AiLogoCarousel tools={tools} />
            <h3 className="quiz-intro-title">
              Давайте подберем ИИ для ваших задач
            </h3>
            <p className="quiz-intro-desc">
              Ответьте на несколько вопросов — AI-консультант подберёт
              инструменты персонально под вас.
            </p>
            <button
              type="button"
              className="header-link header-link-active quiz-start-btn"
              onClick={handleStart}
            >
              Подобрать
            </button>
          </div>

          {/* ── QUESTIONS ── */}
          {currentStep && (
            <div
              className={`quiz-slide${phase === "questions" ? " quiz-slide-active" : " quiz-slide-out"}${pulse ? " quiz-slide-pulse" : ""}`}
            >
              {step >= 1 && taskLabel && (
                <div className="quiz-category-badge">{taskLabel}</div>
              )}
              <div className="quiz-progress">
                <span className="quiz-progress-label">
                  Вопрос {step + 1} из {totalSteps}
                </span>
                <div className="quiz-progress-bar">
                  <div
                    className="quiz-progress-fill"
                    style={{
                      width: `${((step + 1) / totalSteps) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <h3 className="quiz-question">{currentStep.question}</h3>
              <div className="quiz-options">
                {currentStep.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className="quiz-option"
                    onClick={() => handleAnswer(currentStep.id, opt.id)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── AI LOADING ── */}
          <div
            className={`quiz-slide${phase === "loading" ? " quiz-slide-active" : " quiz-slide-out"}`}
          >
            <div className="quiz-ai-loading">
              <div className="quiz-ai-loading-ring">
                <div className="quiz-ai-loading-ring-inner" />
                <div className="quiz-ai-loading-ring-glow" />
              </div>
              <div className="quiz-ai-loading-text">
                <p className="quiz-ai-loading-line">Ищу лучшие инструменты</p>
                <p className="quiz-ai-loading-line">Анализирую каталог из сотен AI</p>
                <p className="quiz-ai-loading-line">Сверяю с вашим бюджетом</p>
                <p className="quiz-ai-loading-line">Учитываю вашу задачу</p>
                <p className="quiz-ai-loading-line">Сравниваю тарифы и фичи</p>
                <p className="quiz-ai-loading-line">Проверяю реальные цены</p>
                <p className="quiz-ai-loading-line">Фильтрую по отзывам рынка</p>
                <p className="quiz-ai-loading-line">Ищу скрытые возможности</p>
                <p className="quiz-ai-loading-line">Подбираю топ-3 для вас</p>
                <p className="quiz-ai-loading-line">Учитываю лимиты бесплатных</p>
                <p className="quiz-ai-loading-line">Смотрю Pro и Enterprise</p>
                <p className="quiz-ai-loading-line">Проверяю совместимость</p>
                <p className="quiz-ai-loading-line">Ищу аналоги и замены</p>
                <p className="quiz-ai-loading-line">Финальный отбор лучших</p>
                <p className="quiz-ai-loading-line">Готовлю рекомендации</p>
              </div>
            </div>
          </div>

          {/* ── RESULTS ── */}
          <div
            className={`quiz-slide${phase === "results" ? " quiz-slide-active" : " quiz-slide-out"}`}
          >
            <div className="quiz-results-title-row">
              <h3 className="quiz-results-title">
                {shortcutResults
                  ? "Лучшие для общения — бесплатно"
                  : isAiPowered
                    ? "AI подобрал под вашу задачу"
                    : aiError
                      ? "Сервис временно недоступен"
                      : ""}
              </h3>
              {isAiPowered && (
                <span className="quiz-ai-badge">
                  <Sparkles size={12} /> AI
                </span>
              )}
            </div>
            {aiError && (
              <p className="quiz-error-msg">
                AI-консультант не ответил. Показываем базовую рекомендацию.
                Попробуйте ещё раз позже.
              </p>
            )}
            <div className="quiz-results-grid">
              {displayResults.slice(0, 3).map((r, i) => {
                const tool =
                  toolMap.get(r.slug) ??
                  toolMap.get(
                    r.domain.toLowerCase().replace(/^www\./, ""),
                  ) ??
                  toolMap.get(r.name.toLowerCase());
                const hasPage = Boolean(tool);
                return (
                  <a
                    key={r.slug}
                    href={
                      hasPage
                        ? `/ai/${r.slug}`
                        : resolveOutboundUrl(r.domain, `https://${r.domain}`)
                    }
                    target={hasPage ? undefined : "_blank"}
                    rel={
                      hasPage ? undefined : "noopener noreferrer"
                    }
                    className="quiz-result-card stagger-fade-in"
                    style={{
                      animationDelay: `${0.1 + i * 0.08}s`,
                    }}
                  >
                    <div className="quiz-result-head">
                      <ProtocolIcon
                        name={r.name}
                        image={getToolImage(r)}
                        domain={r.domain}
                        size={52}
                        priority
                      />
                      <div className="quiz-result-head-text">
                        <div className="quiz-result-name">{r.name}</div>
                        <div className="quiz-result-domain">{r.domain}</div>
                      </div>
                    </div>
                    <p className="quiz-result-why">{r.why}</p>
                  </a>
                );
              })}
            </div>
            <div className="quiz-results-actions">
              <button
                type="button"
                className="quiz-action-btn quiz-action-primary"
                onClick={openCatalog}
              >
                {shortcutResults
                  ? "Посмотреть все чаты"
                  : "Открыть каталог ИИ"}
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
