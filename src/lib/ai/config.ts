import type { Service } from "@/types";

export type AiCategoryId =
  | "chat"
  | "code"
  | "image"
  | "video"
  | "audio"
  | "text"
  | "productivity"
  | "all";

export type AiCategory = {
  id: AiCategoryId;
  label: string;
  hint: string;
};

export const AI_CATEGORIES: AiCategory[] = [
  { id: "all", label: "Все", hint: "Полный список ИИ-сервисов" },
  {
    id: "chat",
    label: "Аналитика и ресёрч",
    hint: "Чаты, поиск, анализ, ассистенты",
  },
  {
    id: "code",
    label: "Код и разработка",
    hint: "IDE, автодополнение, агенты для разработки",
  },
  {
    id: "image",
    label: "Изображения",
    hint: "Генерация и редактирование изображений",
  },
  {
    id: "video",
    label: "Видео",
    hint: "Генерация и монтаж видео",
  },
  {
    id: "audio",
    label: "Аудио и музыка",
    hint: "Озвучка, транскрипция, аудио",
  },
  {
    id: "text",
    label: "Тексты и копирайтинг",
    hint: "Статьи, рекламные тексты, SEO",
  },
  {
    id: "productivity",
    label: "Продуктивность",
    hint: "Презентации, заметки, автоматизация",
  },
];

// ═══════════════════════════════════════════════════════════════
// Primary classification: slug → category (hand-curated, authoritative)
// ═══════════════════════════════════════════════════════════════
const SLUG_CATEGORY_MAP: Record<string, Exclude<AiCategoryId, "all">> = {
  // ── Аналитика и ресёрч ──
  openai: "chat",
  claude: "chat",
  deepseek: "chat",
  perplexity: "chat",
  gemini: "chat",
  "notion-ai": "chat",
  robogpt: "chat",
  multiai: "chat",
  "easy-peasy-ai": "chat",

  // ── Код и разработка ──
  cursor: "code",
  codeium: "code",
  "github-copilot": "code",
  replit: "code",
  tabnine: "code",
  codewhisperer: "code",
  codepal: "code",
  codiga: "code",
  "snyk-code": "code",
  "sourcegraph-cody": "code",
  fig: "code",
  mintlify: "code",
  documatic: "code",
  askcodi: "code",
  opencode: "code",

  // ── Изображения ──
  midjorney: "image",
  "bluewillow-ai": "image",
  playgroundai: "image",
  craiyon: "image",
  "mage-space": "image",
  "stable-diffusion-videos": "image",
  looka: "image",
  scenario: "image",
  "rosebud-ai": "image",
  "dream-by-wombo": "image",
  "designs-ai": "image",
  aiwriteart: "image",
  adrenaline: "image",

  // ── Видео ──
  synthesia: "video",
  invideo: "video",
  pictory: "video",
  lumen5: "video",
  heygen: "video",
  "d-id": "video",
  colossyan: "video",
  elai: "video",
  fliki: "video",
  tavus: "video",
  veed: "video",
  visper: "video",
  wisecut: "video",
  deepbrain: "video",
  runway: "video",
  pika: "video",

  // ── Аудио и музыка ──
  eleven: "audio",
  "murf-ai": "audio",
  speechify: "audio",
  "suno-ai": "audio",
  beatoven: "audio",
  wavtool: "audio",
  macwhisper: "audio",
  "altered-studio": "audio",
  fineshare: "audio",
  lovo: "audio",
  zvukogram: "audio",
  ispeech: "audio",
  steosvoice: "audio",
  "hitpaw-voice-changer": "audio",
  beyondwords: "audio",

  // ── Тексты и копирайтинг ──
  jasper: "text",
  writersonic: "text",
  "frase-io": "text",
  "hypotenuse-ai": "text",
  closerscopy: "text",
  copymonkey: "text",
  rytr: "text",
  "article-forge": "text",
  gerwin: "text",
  charm: "text",
  katteb: "text",
  moonbeam: "text",
  peppertype: "text",
  wordhero: "text",
  sudowrite: "text",

  // ── Продуктивность ──
  gammaai: "productivity",
  beautiful: "productivity",
  slidesai: "productivity",
  pitch: "productivity",
  kroma: "productivity",
  slidebean: "productivity",
  tome: "productivity",
  venngage: "productivity",
  mem: "productivity",
  kickresume: "productivity",
  "excel-formula-bot": "productivity",
  sheetgod: "productivity",
  reflect: "productivity",
  deepl: "productivity",
  tinywow: "productivity",
};

// ═══════════════════════════════════════════════════════════════
// Fallback: regex rules for slugs not in SLUG_CATEGORY_MAP
// ═══════════════════════════════════════════════════════════════
const CATEGORY_RULES: { id: Exclude<AiCategoryId, "all">; re: RegExp }[] = [
  {
    id: "code",
    re: /cursor|codeium|copilot|replit|tabnine|codi|codex|windsurf|devin|jetbrains|opencode|antigravity|zed|code\.|code\b|sourcegraph|github.*copilot|amazon.*code/i,
  },
  {
    id: "image",
    re: /midjourney|dall|stable.?diff|leonardo|bluewillow|playground|artbreeder|photo|image|pixlr|canva|designs.?ai|illustration|flux/i,
  },
  {
    id: "video",
    re: /video|runway|synthesia|invideo|pictory|lumen5|heygen|descript|animat|film|clip/i,
  },
  {
    id: "audio",
    re: /voice|speech|eleven|audio|music|murf|beatoven|sound|whisper|podcast|beyondwords|tts|transcri/i,
  },
  {
    id: "text",
    re: /write|copy|jasper|writesonic|copy\.ai|article|content|seo|hypotenuse|closers|copywriting|paragraph|rytr/i,
  },
  {
    id: "productivity",
    re: /notion|gamma|slides|beautiful\.ai|present|workflow|automation|productivity|calendar|meet|summar/i,
  },
  {
    id: "chat",
    re: /chat|gpt|claude|gemini|grok|perplex|poe|character|assistant|deepseek|kimi|qwen|llama|mistral|anthropic|openai|x\.ai|research|ask/i,
  },
];

export function classifyAiTool(service: Service): Exclude<AiCategoryId, "all"> {
  // 1. Check manual slug map (authoritative source)
  if (service.slug && SLUG_CATEGORY_MAP[service.slug]) {
    return SLUG_CATEGORY_MAP[service.slug];
  }
  // 2. Regex fallback for slugs not yet in the map
  const hay = `${service.name} ${service.domain} ${service.short_description}`.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.re.test(hay)) return rule.id;
  }
  return "chat";
}

/** Maps quiz task IDs → classifyAiTool category IDs */
export const QUIZ_TASK_TO_CATEGORY: Record<string, AiCategoryId> = {
  conv: "text",
  research: "chat",
  image: "image",
  video: "video",
  audio: "audio",
  code: "code",
  productivity: "productivity",
  chat: "chat",
};

export const AI_FEATURED_DOMAINS = [
  "cursor.com",
  "claude.ai",
  "chat.openai.com",
  "openai.com",
  "gemini.google.com",
  "midjourney.com",
  "codeium.com",
  "replit.com",
  "notion.com",
  "gamma.app",
  "deepl.com",
  "beta.elevenlabs.io",
  "elevenlabs.io",
  "invideo.io",
];

export type AiPick = {
  name: string;
  domain: string;
  note: string;
};

export const AI_EDITOR_PICKS: AiPick[] = [
  {
    name: "Claude",
    domain: "claude.ai",
    note: "Сильный в коде и длинных текстах",
  },
  {
    name: "ChatGPT",
    domain: "chat.openai.com",
    note: "Универсальный старт, Codex для кода",
  },
  {
    name: "Cursor",
    domain: "cursor.com",
    note: "IDE с ИИ — если пишешь проекты",
  },
  {
    name: "Gemini",
    domain: "gemini.google.com",
    note: "Хорош в визуале и мультимодальности",
  },
];

export type AiStarterBlock = {
  title: string;
  body: string;
};

export const AI_STARTER_BLOCKS: AiStarterBlock[] = [
  {
    title: "С чего начать",
    body: "Выбери одну модель под задачу: чат для идей, IDE для кода, отдельный сервис для картинок. Не нужно платить за всё сразу — многие дают free tier.",
  },
  {
    title: "Для вайбкодинга",
    body: "ChatGPT или Claude + Cursor/OpenCode/Replit. Домен от $1–2, фронт на Vercel бесплатно. Для бэкенда — VPS из каталога, деплой поможет сделать сам ИИ.",
  },
  {
    title: "Под Web3",
    body: "ИИ ускоряет ресёрч, тексты и UI. Для ончейн-задач всё равно нужны биржи, кошельки и аналитика из основного каталога — ИИ их не заменяет.",
  },
];

export type AiIdeTool = {
  name: string;
  url: string;
  price: string;
  domain: string;
};

export const AI_IDE_TOOLS: AiIdeTool[] = [
  { name: "Cursor", url: "https://cursor.com", price: "$20/мес", domain: "cursor.com" },
  { name: "OpenCode", url: "https://opencode.ai", price: "Open Source", domain: "opencode.ai" },
  { name: "VS Code", url: "https://code.visualstudio.com", price: "Free", domain: "code.visualstudio.com" },
  { name: "Devin Desktop", url: "https://devin.ai", price: "Free / $20", domain: "devin.ai" },
  { name: "Replit", url: "https://replit.com", price: "Free / $20", domain: "replit.com" },
  { name: "Zed", url: "https://zed.dev", price: "Open Source", domain: "zed.dev" },
];

export type AiResourceLink = {
  label: string;
  url: string;
};

export const AI_RESOURCE_LINKS: AiResourceLink[] = [
  { label: "Anthropic Docs", url: "https://docs.anthropic.com/en/docs" },
  { label: "OpenAI Docs", url: "https://platform.openai.com/docs" },
  { label: "Gemini Docs", url: "https://ai.google.dev/docs" },
  { label: "Cursor Docs", url: "https://docs.cursor.com" },
  { label: "DeepSeek Docs", url: "https://api-docs.deepseek.com" },
  { label: "Midjourney Docs", url: "https://docs.midjourney.com" },
  { label: "Runway Docs", url: "https://docs.runwayml.com" },
  { label: "ElevenLabs Docs", url: "https://elevenlabs.io/docs/overview" },
  { label: "Replit Docs", url: "https://docs.replit.com" },
  { label: "Vercel AI SDK", url: "https://sdk.vercel.ai/docs" },
  { label: "GitHub Copilot Docs", url: "https://docs.github.com/en/copilot" },
  { label: "Notion AI Docs", url: "https://www.notion.so/help/category/ai" },
];

// ═══════════════════════════════════════════════════════════════
// QUIZ — опросник-онбординг (воронка: категория → уточнение → бюджет)
// ═══════════════════════════════════════════════════════════════

export type QuizStepId = "task" | "q2" | "budget";

export type QuizStep = {
  id: QuizStepId;
  question: string;
  options: { id: string; label: string }[];
};

/** Первый вопрос — выбор категории */
export const QUIZ_Q1: QuizStep = {
  id: "task",
  question: "Какая задача основная?",
  options: [
    { id: "conv", label: "Тексты и копирайтинг" },
    { id: "research", label: "Аналитика и ресёрч" },
    { id: "image", label: "Изображения" },
    { id: "video", label: "Видео" },
    { id: "audio", label: "Аудио и музыка" },
    { id: "code", label: "Код и разработка" },
    { id: "productivity", label: "Продуктивность" },
    { id: "chat", label: "Просто общаться" },
  ],
};

export type Q2Config = {
  question: string;
  options: { id: string; label: string }[];
};

/** Второй вопрос — уточнение, свой для каждой категории */
export const QUIZ_Q2: Record<string, Q2Config> = {
  conv: {
    question: "Какой формат?",
    options: [
      { id: "blog", label: "Веду блог / пишу статьи" },
      { id: "marketing", label: "Маркетинг и копирайтинг" },
      { id: "seo", label: "SEO и ключевые слова" },
      { id: "fun", label: "Балуюсь / пробую" },
    ],
  },
  research: {
    question: "Что анализируешь?",
    options: [
      { id: "science", label: "Научные исследования" },
      { id: "business", label: "Бизнес-аналитика и рынки" },
      { id: "factcheck", label: "Факт-чекинг и новости" },
      { id: "fun", label: "Балуюсь / пробую" },
    ],
  },
  image: {
    question: "Для чего создаёшь?",
    options: [
      { id: "pro", label: "Профессиональный дизайн" },
      { id: "social", label: "Соцсети и контент" },
      { id: "fun", label: "Балуюсь / пробую" },
    ],
  },
  video: {
    question: "Что генерируешь?",
    options: [
      { id: "avatar", label: "Полноценные видео с аватаром" },
      { id: "clips", label: "Короткие клипы / рилсы" },
      { id: "montage", label: "Монтаж и субтитры" },
      { id: "fun", label: "Балуюсь / пробую" },
    ],
  },
  audio: {
    question: "Что нужно?",
    options: [
      { id: "tts", label: "Озвучка текста / дубляж" },
      { id: "music", label: "Генерация музыки" },
      { id: "transcribe", label: "Транскрибация / распознавание" },
      { id: "fun", label: "Балуюсь / пробую" },
    ],
  },
  code: {
    question: "Какой уровень?",
    options: [
      { id: "pro", label: "Профессиональная разработка" },
      { id: "vibe", label: "Вайбкодинг / хобби" },
      { id: "learn", label: "Только учусь" },
      { id: "fun", label: "Балуюсь / пробую" },
    ],
  },
  productivity: {
    question: "Какая задача?",
    options: [
      { id: "presentation", label: "Сделать презентацию" },
      { id: "documents", label: "Написать документ" },
      { id: "resume", label: "Оформить резюме" },
      { id: "fun", label: "Балуюсь / пробую" },
    ],
  },
};

/** Короткое описание выбранной категории — показывается перед Q2 */
export const QUIZ_CATEGORY_LABELS: Record<string, string> = {
  conv: "Тексты и копирайтинг",
  research: "Аналитика и ресёрч",
  image: "Изображения",
  video: "Видео",
  audio: "Аудио и музыка",
  code: "Код и разработка",
  productivity: "Продуктивность",
};

/** Третий вопрос — бюджет */
export const QUIZ_Q3: QuizStep = {
  id: "budget",
  question: "Какой бюджет?",
  options: [
    { id: "free", label: "Ищу бесплатный инструмент" },
    { id: "mid", label: "Готов на подписку $10–20" },
    { id: "premium", label: "Важен максимум возможностей" },
  ],
};

export type QuizResult = {
  name: string;
  domain: string;
  slug: string;
  why: string;
  image?: string | null;
};

export type QuizAnswers = {
  task: string;
  q2: string;
  budget: string;
};

/** Shortcut for «Просто общаться» — сразу в результат */
export const SHORTCUT_RESULTS: QuizResult[] = [
  {
    name: "ChatGPT",
    domain: "chat.openai.com",
    slug: "openai",
    image: "https://www.google.com/s2/favicons?domain=chat.openai.com&sz=128",
    why: "Универсальный чат: генерация идей, текст, код, перевод. Бесплатного тира достаточно для ежедневного общения.",
  },
  {
    name: "DeepSeek",
    domain: "deepseek.com",
    slug: "deepseek",
    image: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128",
    why: "Мощный бесплатный чат — анализирует, объясняет, генерирует код и текст. Всё без подписки.",
  },
  {
    name: "Claude",
    domain: "claude.ai",
    slug: "claude",
    image: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
    why: "Лучший для длинных вдумчивых диалогов. Бесплатный тир — десятки разговоров в день.",
  },
];

// ──────────────── Results engine ────────────────

type ResultRecipe = {
  name: string;
  domain: string;
  slug: string;
  why: string;
  image?: string;
};

export const RESULT_IMAGES: Record<string, string> = {
  deepseek: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=128",
  claude: "https://www.google.com/s2/favicons?domain=claude.ai&sz=128",
  perplexity: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
  pika: "https://www.google.com/s2/favicons?domain=pika.art&sz=128",
  opencode: "https://www.google.com/s2/favicons?domain=opencode.ai&sz=128",
  runway: "https://www.google.com/s2/favicons?domain=runwayml.com&sz=128",
  gemini: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
  leonardo: "https://www.google.com/s2/favicons?domain=leonardo.ai&sz=128",
  ideogram: "https://www.google.com/s2/favicons?domain=ideogram.ai&sz=128",
  openai: "https://www.google.com/s2/favicons?domain=chat.openai.com&sz=128",
  jasper: "https://www.google.com/s2/favicons?domain=jasper.ai&sz=128",
  writersonic: "https://www.google.com/s2/favicons?domain=writesonic.com&sz=128",
  "frase-io": "https://www.google.com/s2/favicons?domain=frase.io&sz=128",
  "hypotenuse-ai": "https://www.google.com/s2/favicons?domain=hypotenuse.ai&sz=128",
  midjorney: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128",
  "stable-diffusion-videos": "https://www.google.com/s2/favicons?domain=replicate.com&sz=128",
  playgroundai: "https://www.google.com/s2/favicons?domain=playgroundai.com&sz=128",
  "bluewillow-ai": "https://www.google.com/s2/favicons?domain=bluewillow.ai&sz=128",
  craiyon: "https://www.google.com/s2/favicons?domain=craiyon.com&sz=128",
  synthesia: "https://www.google.com/s2/favicons?domain=synthesia.io&sz=128",
  heygen: "https://www.google.com/s2/favicons?domain=labs.heygen.com&sz=128",
  "d-id": "https://www.google.com/s2/favicons?domain=d-id.com&sz=128",
  pictory: "https://www.google.com/s2/favicons?domain=pictory.ai&sz=128",
  veed: "https://www.google.com/s2/favicons?domain=veed.io&sz=128",
  wisecut: "https://www.google.com/s2/favicons?domain=wisecut.video&sz=128",
  eleven: "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128",
  "murf-ai": "https://www.google.com/s2/favicons?domain=murf.ai&sz=128",
  speechify: "https://www.google.com/s2/favicons?domain=speechify.com&sz=128",
  "suno-ai": "https://www.google.com/s2/favicons?domain=suno.ai&sz=128",
  beatoven: "https://www.google.com/s2/favicons?domain=beatoven.ai&sz=128",
  wavtool: "https://www.google.com/s2/favicons?domain=wavtool.com&sz=128",
  macwhisper: "https://www.google.com/s2/favicons?domain=goodsnooze.gumroad.com&sz=128",
  cursor: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
  "github-copilot": "https://www.google.com/s2/favicons?domain=github.com&sz=128",
  replit: "https://www.google.com/s2/favicons?domain=replit.com&sz=128",
  codeium: "https://www.google.com/s2/favicons?domain=codeium.com&sz=128",
  gammaai: "https://www.google.com/s2/favicons?domain=gamma.app&sz=128",
  beautiful: "https://www.google.com/s2/favicons?domain=beautiful.ai&sz=128",
  slidesai: "https://www.google.com/s2/favicons?domain=slidesai.io&sz=128",
  "notion-ai": "https://www.google.com/s2/favicons?domain=notion.com&sz=128",
  mem: "https://www.google.com/s2/favicons?domain=get.mem.ai&sz=128",
  kickresume: "https://www.google.com/s2/favicons?domain=kickresume.com&sz=128",
};

const EMPTY: ResultRecipe[] = [
  { name: "ChatGPT", domain: "chat.openai.com", slug: "openai", why: "Универсальный старт — от текстов до кода." },
];

// Порядок в каждом пуле строго: [0]=premium, [1]=mid, [2]=free
function pickByBudget(r: ResultRecipe[], budget: string, isFun: boolean): ResultRecipe[] {
  if (isFun) return [r[0], r[r.length - 1]];   // fun → best + cheapest
  if (budget === "free") return [r[2], r[1]];   // free → best free + mid-aspirational
  if (budget === "premium") return [r[0], r[1]];// premium → only top-tier
  return [r[1], r[0]];                          // mid → best mid + premium-aspirational
}

/** Fallback — используется только при недоступности AI-персонализации.
 *  Основная логика подбора теперь в /api/ai/personalize (DeepSeek Flash). */
export function getQuizResults(answers: QuizAnswers): QuizResult[] {
  const { task } = answers;
  if (task === "chat") return SHORTCUT_RESULTS;
  // Generic fallback: ChatGPT as universal starter
  return EMPTY.map((r) => ({ ...r, image: RESULT_IMAGES[r.slug] ?? undefined }));
}

// ═══════════════════════════════════════════════════════════════
// MODEL COMPARISON — сравнение моделей под задачу
// ═══════════════════════════════════════════════════════════════

export type ModelCompareEntry = {
  task: string;
  best: { name: string; price: string; strength: string; domain: string };
  budget: { name: string; price: string; strength: string; domain: string };
};

export const MODEL_COMPARISONS: ModelCompareEntry[] = [
  {
    task: "Текст и ресёрч",
    best: { name: "Claude", domain: "claude.ai", price: "$20/мес", strength: "Лучший в длинных текстах и аналитике. Контекст до 200K токенов — можно скормить книгу и задавать вопросы." },
    budget: { name: "DeepSeek", domain: "deepseek.com", price: "Бесплатно", strength: "Мощная бесплатная альтернатива. Хорош в аналитике и сложных запросах, уступает Claude в точности." },
  },
  {
    task: "Код и разработка",
    best: { name: "Cursor + Claude", domain: "cursor.com", price: "$20/мес", strength: "IDE с AI-агентом: автодополнение, рефакторинг, поиск по кодовой базе. Стандарт индустрии." },
    budget: { name: "GitHub Copilot Free", domain: "github.com", price: "Бесплатно", strength: "Бесплатное автодополнение в VS Code. Базовые подсказки и генерация — хватит для обучения." },
  },
  {
    task: "Картинки и дизайн",
    best: { name: "Midjourney", domain: "midjourney.com", price: "$10+/мес", strength: "Лучшее качество изображений. Фотореализм, стилизация, вариативность — эталон в индустрии." },
    budget: { name: "Stable Diffusion", domain: "replicate.com", price: "Бесплатно / Open Source", strength: "Локальная генерация без цензуры и лимитов. Требует мощную видеокарту." },
  },
  {
    task: "Видео и аудио",
    best: { name: "Runway + ElevenLabs", domain: "runwayml.com", price: "$15+ и $6+/мес", strength: "Генерация видео из текста + озвучка с клонированием голоса. Связка для создателей контента." },
    budget: { name: "Pika + Suno", domain: "pika.art", price: "Бесплатно", strength: "Бесплатная генерация коротких видео и музыки. Достаточно для экспериментов и прототипов." },
  },
];

// ═══════════════════════════════════════════════════════════════
// HOW TO START — пошаговый старт для билдера
// ═══════════════════════════════════════════════════════════════

export type HowToStep = {
  num: number;
  title: string;
  body: string;
};

export const HOW_TO_START_STEPS: HowToStep[] = [
  {
    num: 1,
    title: "Выбери AI-модель и IDE",
    body: "Подписка ChatGPT Plus $20/мес или Claude Pro $20/мес (год $17/мес). Бесплатно — DeepSeek, Copilot Free или Devin Desktop. Установи Cursor или VS Code — и можешь начинать писать код голосом.",
  },
  {
    num: 2,
    title: "Купи домен и настрой хостинг",
    body: "Домен от $1 на NameCheap или SpaceShip. Фронтенд — Vercel или GitHub Pages (бесплатно). Для бэкенда возьми VDS за $4-10 из каталога — AI сам настроит деплой.",
  },
  {
    num: 3,
    title: "Деплой и итерации",
    body: "Покажи AI референсы дизайна с Dribbble или Awwwards. Он напишет код, задеплоит на Vercel и объяснит каждый шаг. Не зацикливайся на идеале — релизь MVP и улучшай.",
  },
];

// ═══════════════════════════════════════════════════════════════
// YOUTUBE GUIDES — гайды на русском
// ═══════════════════════════════════════════════════════════════

export type YouTubeGuide = {
  label: string;
  url: string;
  note?: string;
};

export const YOUTUBE_GUIDES_RU: YouTubeGuide[] = [
  { label: "Вайбкодинг с нуля (Riley Brown)", url: "https://www.youtube.com/watch?v=Px_yUq5Nos0", note: "43 мин · 35 терминов" },
  { label: "Vibe Coding 2026 (Tech With Lucy)", url: "https://www.youtube.com/watch?v=syrDx15PHCs", note: "9 мин · 81K просмотров" },
  { label: "Claude Code — полный гайд (AI Master)", url: "https://www.youtube.com/watch?v=RywmhLTFeFk", note: "19 мин · 3 проекта" },
  { label: "Cursor IDE 2.0 (Riley Brown)", url: "https://www.youtube.com/watch?v=2aldTxnbNt0", note: "2.5 ч · 340K просмотров" },
  { label: "Cursor 2.0 для новичков (Tech With Tim)", url: "https://www.youtube.com/watch?v=l30Eb76Tk5s", note: "27 мин · 250K просмотров" },
  { label: "ChatGPT 5.5 — полный обзор (AI Master)", url: "https://www.youtube.com/watch?v=McOK2URVyNg", note: "27 мин · GPT-5.5 + Codex" },
  { label: "Perplexity AI — лучше Google? (2026)", url: "https://www.youtube.com/watch?v=-jgxCRCfyJg", note: "Полный туториал" },
  { label: "Midjourney V7 — все параметры", url: "https://promptmake.net/blog/midjourney-v7-guide", note: "sref, cref, Draft Mode" },
  { label: "ElevenLabs — голосовое клонирование (AIMode)", url: "https://www.youtube.com/watch?v=06fsOAs82eQ", note: "8 мин · лицензия для YouTube" },
  { label: "AI-фильммейкинг 2026 (Boldly with AI)", url: "https://www.boldlywithai.com/blog/ai-filmmaking-workflow-2026", note: "Midjourney → Runway → DaVinci" },
];

export const YOUTUBE_GUIDES_EN: YouTubeGuide[] = [
  { label: "Vibe Coding 101 (Riley Brown)", url: "https://www.youtube.com/watch?v=Px_yUq5Nos0", note: "43 min · 35 fundamentals" },
  { label: "How to Vibe Code in 2026 (Tech With Lucy)", url: "https://www.youtube.com/watch?v=syrDx15PHCs", note: "9 min · 81K views" },
  { label: "Ultimate Claude Code Guide (AI Master)", url: "https://www.youtube.com/watch?v=RywmhLTFeFk", note: "19 min · 3 projects" },
  { label: "Cursor 2.0 Full Course (Riley Brown)", url: "https://www.youtube.com/watch?v=2aldTxnbNt0", note: "2.5h · 340K views" },
  { label: "Cursor 2.0 Beginners (Tech With Tim)", url: "https://www.youtube.com/watch?v=l30Eb76Tk5s", note: "27 min · 250K views" },
  { label: "ChatGPT 5.5 Full Guide (AI Master)", url: "https://www.youtube.com/watch?v=McOK2URVyNg", note: "27 min · GPT-5.5 + Codex" },
  { label: "Perplexity AI Tutorial 2026", url: "https://www.youtube.com/watch?v=-jgxCRCfyJg", note: "Research tool guide" },
  { label: "Midjourney V7 — All Parameters", url: "https://promptmake.net/blog/midjourney-v7-guide", note: "sref, cref, Draft Mode" },
  { label: "ElevenLabs Tutorial (AIMode)", url: "https://www.youtube.com/watch?v=06fsOAs82eQ", note: "8 min · commercial license" },
  { label: "AI Filmmaking 2026 (Boldly with AI)", url: "https://www.boldlywithai.com/blog/ai-filmmaking-workflow-2026", note: "Midjourney → Runway → DaVinci" },
];

export const YOUTUBE_GUIDES_ES: YouTubeGuide[] = [
  { label: "Vibe Coding desde cero (Riley Brown)", url: "https://www.youtube.com/watch?v=Px_yUq5Nos0", note: "43 min · 35 fundamentos" },
  { label: "Cómo hacer Vibe Coding (Tech With Lucy)", url: "https://www.youtube.com/watch?v=syrDx15PHCs", note: "9 min · 81K vistas" },
  { label: "Guía completa Claude Code (AI Master)", url: "https://www.youtube.com/watch?v=RywmhLTFeFk", note: "19 min · 3 proyectos" },
  { label: "Cursor 2.0 curso completo (Riley Brown)", url: "https://www.youtube.com/watch?v=2aldTxnbNt0", note: "2.5h · 340K vistas" },
  { label: "Cursor 2.0 principiantes (Tech With Tim)", url: "https://www.youtube.com/watch?v=l30Eb76Tk5s", note: "27 min · 250K vistas" },
  { label: "ChatGPT 5.5 guía completa (AI Master)", url: "https://www.youtube.com/watch?v=McOK2URVyNg", note: "27 min · GPT-5.5 + Codex" },
  { label: "Perplexity AI tutorial 2026", url: "https://www.youtube.com/watch?v=-jgxCRCfyJg", note: "Guía de investigación" },
  { label: "Midjourney V7 — todos los parámetros", url: "https://promptmake.net/blog/midjourney-v7-guide", note: "sref, cref, Draft Mode" },
  { label: "ElevenLabs tutorial (AIMode)", url: "https://www.youtube.com/watch?v=06fsOAs82eQ", note: "8 min · licencia comercial" },
  { label: "Cine con IA 2026 (Boldly with AI)", url: "https://www.boldlywithai.com/blog/ai-filmmaking-workflow-2026", note: "Midjourney → Runway → DaVinci" },
];

export const YOUTUBE_GUIDES_ZH: YouTubeGuide[] = [
  { label: "Vibe Coding 完整入门 (Riley Brown)", url: "https://www.youtube.com/watch?v=Px_yUq5Nos0", note: "43分钟 · 35个基础概念" },
  { label: "2026 Vibe Coding 教程 (Tech With Lucy)", url: "https://www.youtube.com/watch?v=syrDx15PHCs", note: "9分钟 · 81K观看" },
  { label: "Claude Code 完整指南 (AI Master)", url: "https://www.youtube.com/watch?v=RywmhLTFeFk", note: "19分钟 · 3个项目" },
  { label: "Cursor 2.0 完全教程 (Riley Brown)", url: "https://www.youtube.com/watch?v=2aldTxnbNt0", note: "2.5小时 · 340K观看" },
  { label: "Cursor 2.0 初学者 (Tech With Tim)", url: "https://www.youtube.com/watch?v=l30Eb76Tk5s", note: "27分钟 · 250K观看" },
  { label: "ChatGPT 5.5 完整指南 (AI Master)", url: "https://www.youtube.com/watch?v=McOK2URVyNg", note: "27分钟 · GPT-5.5 + Codex" },
  { label: "Perplexity AI 2026 教程", url: "https://www.youtube.com/watch?v=-jgxCRCfyJg", note: "研究工具指南" },
  { label: "Midjourney V7 — 所有参数", url: "https://promptmake.net/blog/midjourney-v7-guide", note: "sref, cref, Draft Mode" },
  { label: "ElevenLabs 教程 (AIMode)", url: "https://www.youtube.com/watch?v=06fsOAs82eQ", note: "8分钟 · 商业许可" },
  { label: "AI电影制作 2026 (Boldly with AI)", url: "https://www.boldlywithai.com/blog/ai-filmmaking-workflow-2026", note: "Midjourney → Runway → DaVinci" },
];

export const YOUTUBE_GUIDES_ALL: Record<string, YouTubeGuide[]> = {
  "Русский": YOUTUBE_GUIDES_RU,
  "English": YOUTUBE_GUIDES_EN,
  "Español": YOUTUBE_GUIDES_ES,
  "中文": YOUTUBE_GUIDES_ZH,
};

// ═══════════════════════════════════════════════════════════════
// DEPLOY SERVICES — домены, хостинг, дизайн-вдохновение
// ═══════════════════════════════════════════════════════════════

export type DeployService = {
  name: string;
  url: string;
  price: string;
  note: string;
  domain: string;
};

export const DEPLOY_DOMAINS: DeployService[] = [
  { name: "NameCheap", url: "https://www.namecheap.com", price: "от $1", note: "Проверенный регистратор, принимает крипту", domain: "namecheap.com" },
  { name: "SpaceShip", url: "https://www.spaceship.com", price: "от $2", note: "Новый регистратор с простым интерфейсом и прозрачными ценами", domain: "spaceship.com" },
  { name: "Porkbun", url: "https://porkbun.com", price: "от $2", note: "Забавный дизайн, дёшево, хорошая поддержка", domain: "porkbun.com" },
];

export const DEPLOY_HOSTING: DeployService[] = [
  { name: "Vercel", url: "https://vercel.com", price: "Бесплатно", note: "Лучший хостинг для Next.js — деплой в один клик из GitHub", domain: "vercel.com" },
  { name: "GitHub Pages", url: "https://pages.github.com", price: "Бесплатно", note: "Для статических сайтов — хостинг прямо из репозитория", domain: "github.com" },
  { name: "Cloudflare Pages", url: "https://pages.cloudflare.com", price: "Бесплатно", note: "Быстрый CDN, авто-деплой из Git, безлимитный трафик", domain: "cloudflare.com" },
];

export const DEPLOY_INSPIRATION: DeployService[] = [
  { name: "Dribbble", url: "https://dribbble.com", price: "Бесплатно", note: "Дизайн-работы UI/UX — лучший источник визуальных референсов", domain: "dribbble.com" },
  { name: "Awwwards", url: "https://www.awwwards.com", price: "Бесплатно", note: "Сайты-победители в дизайне — вдохновение для лендингов и веб-приложений", domain: "awwwards.com" },
  { name: "Variant", url: "https://dribbble.com", price: "Бесплатно", note: "Крупнейшая площадка для дизайн-вдохновения и портфолио", domain: "dribbble.com" },
];

// ═══════════════════════════════════════════════════════════════
// CATEGORY COUNTS
// ═══════════════════════════════════════════════════════════════

export function getAiCategoryCounts(
  tools: Service[],
): Record<Exclude<AiCategoryId, "all">, number> {
  const counts: Record<Exclude<AiCategoryId, "all">, number> = {
    chat: 0,
    code: 0,
    image: 0,
    video: 0,
    audio: 0,
    text: 0,
    productivity: 0,
  };
  for (const tool of tools) {
    counts[classifyAiTool(tool)]++;
  }
  return counts;
}
