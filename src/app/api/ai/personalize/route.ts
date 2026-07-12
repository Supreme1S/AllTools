import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  QUIZ_CATEGORY_LABELS,
  classifyAiTool,
  RESULT_IMAGES,
  type AiCategoryId,
} from "@/lib/ai/config";
import type { Service } from "@/types";

export const dynamic = "force-dynamic";
export const maxDuration = 15; // 15s max for AI response

type PersonalizeRequest = {
  answers: { task: string; q2: string; budget: string };
  tools: { name: string; domain: string; slug: string; short_description: string; image: string | null }[];
};

type PersonalizeResult = {
  name: string;
  domain: string;
  slug: string;
  why: string;
  image?: string | null;
};

function budgetLabel(budget: string): string {
  if (budget === "free") return "Ищу бесплатный инструмент";
  if (budget === "mid") return "Готов на подписку $10-20/мес";
  if (budget === "premium") return "Важен максимум возможностей (готов платить $20-200+/мес за Pro/Enterprise)";
  return budget;
}

function taskLabel(task: string): string {
  return QUIZ_CATEGORY_LABELS[task] ?? task;
}

const SYSTEM_PROMPT = `Ты — AI-консультант платформы alltools, помогаешь подобрать AI-инструменты под задачу и бюджет.

ТВОЯ ЗАДАЧА:
Проанализируй запрос клиента и каталог инструментов. Подбери 2-3 лучших инструмента из ПЕРЕДАННОГО КАТАЛОГА.

ПРАВИЛА ПОДБОРА:
1. Для бюджета "бесплатно": рекомендуй инструменты с реальными free-тирами. Опиши лимиты бесплатного тира (сколько запросов/генераций в день/месяц).
2. Для бюджета "$10-20/мес": рекомендуй лучшие mid-планы ($10-25/мес). Не предлагай планы дороже $40/мес. В крайнем случае можно предложить крутой бесплатный инструмент.
3. Для бюджета "premium ($20-200+/мес)": рекомендуй ТОЛЬКО дорогие Pro/Enterprise-планы с конкретными ценами $20-200+/мес. Никаких free-тиров и дешёвых планов. Если в каталоге нет дорогих инструментов под задачу — честно предложи лучший доступный с уточнением, что это максимум рынка.
4. Выбирай инструменты ТОЛЬКО из переданного каталога. Не придумывай новых.
5. Указывай РЕАЛЬНЫЕ цены (июнь 2026).

ФОРМАТ WHY:
Для каждого инструмента напиши 2-3 предложения на русском языке. Объясни:
- Почему этот инструмент подходит именно под задачу клиента
- Какой конкретно тарифный план и его цена
- Ключевые фичи именно под этот use-case
- Ограничения или преимущества перед конкурентами

ФОРМАТ ОТВЕТА — строгий JSON без маркдауна:
{"results":[{"name":"...","domain":"...","slug":"...","why":"..."}]}`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "DEEPSEEK_API_KEY not configured" },
        { status: 500 },
      );
    }

    const body: PersonalizeRequest = await request.json();
    const { answers, tools } = body;

    if (!answers?.task || !answers?.q2 || !answers?.budget || !tools?.length) {
      return NextResponse.json(
        { error: "Missing required fields: answers or tools" },
        { status: 400 },
      );
    }

    // Build the user prompt with context
    const userPrompt = `ДАННЫЕ КЛИЕНТА:
- Задача: ${taskLabel(answers.task)}
- Подзадача: ${answers.q2}
- Бюджет: ${budgetLabel(answers.budget)}

КАТАЛОГ ИНСТРУМЕНТОВ (только эти доступны на платформе):
${JSON.stringify(tools, null, 2)}

Подбери 2-3 лучших инструмента из каталога под задачу и бюджет клиента. Ответ — строгий JSON без маркдауна.`;

    const client = new OpenAI({
      apiKey,
      baseURL: "https://api.deepseek.com/v1",
    });

    const completion = await client.chat.completions.create({
      model: "deepseek-chat", // DeepSeek Flash (fast, cheap)
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3,
      max_tokens: 2048,
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error("Empty response from DeepSeek");
    }

    let parsed: { results?: PersonalizeResult[] };
    try {
      parsed = JSON.parse(content);
    } catch {
      // Try to extract JSON from markdown code block
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("Invalid JSON from DeepSeek");
      parsed = JSON.parse(jsonMatch[0]);
    }

    const results: PersonalizeResult[] = (parsed.results || []).map((r) => ({
      name: r.name,
      domain: r.domain,
      slug: r.slug,
      why: r.why,
      // Attach image from RESULT_IMAGES as fallback
      image: RESULT_IMAGES[r.slug] ?? null,
    }));

    return NextResponse.json({ results });
  } catch (error: any) {
    console.error("DeepSeek personalize error:", error.message || error);
    return NextResponse.json(
      {
        error: "AI personalization failed",
        detail: error.message || "Unknown error",
      },
      { status: 500 },
    );
  }
}
