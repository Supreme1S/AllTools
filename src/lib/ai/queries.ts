import { getAllServices } from "@/lib/catalog/queries";
import {
  AI_FEATURED_DOMAINS,
  classifyAiTool,
  type AiCategoryId,
} from "@/lib/ai/config";
import { CATEGORY_KEYS } from "@/lib/catalog/category-labels";
import type { Service } from "@/types";

const AI_CATEGORY = CATEGORY_KEYS.AI;

function domainKey(domain: string): string {
  return domain.toLowerCase().replace(/^www\./, "");
}

function featuredRank(domain: string): number {
  const key = domainKey(domain);
  const idx = AI_FEATURED_DOMAINS.findIndex(
    (d) => key === d || key.endsWith(`.${d}`) || key.includes(d),
  );
  return idx === -1 ? 999 : idx;
}

export async function getAiServices(): Promise<Service[]> {
  const all = await getAllServices();
  return all.filter((s) => s.category === AI_CATEGORY);
}

export async function getAiServicesByCategory(
  category: AiCategoryId,
): Promise<Service[]> {
  const tools = await getAiServices();
  if (category === "all") return tools;
  return tools.filter((s) => classifyAiTool(s) === category);
}

export async function getFeaturedAiServices(): Promise<Service[]> {
  const tools = await getAiServices();
  const featured = tools
    .filter((s) => featuredRank(s.domain) < 999)
    .sort((a, b) => featuredRank(a.domain) - featuredRank(b.domain));

  if (featured.length >= 8) return featured.slice(0, 8);

  const seen = new Set(featured.map((s) => s.id));
  const rest = tools
    .filter((s) => !seen.has(s.id))
    .slice(0, 8 - featured.length);
  return [...featured, ...rest];
}
