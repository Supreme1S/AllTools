import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/catalog/queries";
import { getPlatformContent } from "@/lib/catalog/content";
import { AI_CONTENT } from "@/lib/catalog/content/ai/ai-content";
import { AiDetailClient } from "./AiDetailClient";
import type { Service } from "@/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // Try catalog first, then AI_CONTENT
  const catalogService = await getServiceBySlug(slug);
  const aiContent = getPlatformContent(slug);

  if (catalogService) {
    return {
      title: `${catalogService.name} — ИИ`,
      description: aiContent?.short ?? catalogService.short_description,
    };
  }
  if (aiContent) {
    return {
      title: `${slug} — ИИ`,
      description: aiContent.short,
    };
  }
  return { title: "Инструмент не найден" };
}

export default async function AiDetailPage({ params }: Props) {
  const { slug } = await params;

  // 1) Try catalog first
  const catalogService = await getServiceBySlug(slug);

  // 2) Try AI_CONTENT (for tools not in catalog like claude, deepseek, etc.)
  const content = getPlatformContent(slug);

  if (!catalogService && !content) notFound();

  // Build a synthetic service if not in catalog but has content
  let service: Service | null = catalogService ?? null;
  if (!service && content) {
    service = {
      id: slug,
      slug,
      name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
      domain: "",
      category: "Нейросети",
      subcategory: null,
      website_url: "",
      referral_url: null,
      outbound_url: "",
      image: null,
      short_description: content.short,
      long_description: content.long,
      detail_tagline: content.tagline,
      detail_insights: [
        { kind: "highlight", text: content.highlight },
        ...(content.facts ?? []).map((t) => ({ kind: "fact" as const, text: t })),
        ...(content.tips ?? []).map((t) => ({ kind: "tip" as const, text: t })),
        ...(content.warnings ?? []).map((t) => ({ kind: "warning" as const, text: t })),
      ],
      custody_type: "",
      supports_fiat: false,
      supports_p2p: false,
      created_at: "",
      updated_at: "",
    };
  }

  return <AiDetailClient service={service!} content={content} />;
}
