import type { Metadata } from "next";
import {
  getAiServices,
  getFeaturedAiServices,
} from "@/lib/ai/queries";
import { AiPageClient } from "./AiPageClient";

export const metadata: Metadata = {
  title: "ИИ",
  description:
    "Нейросети и AI-сервисы: чаты, код, картинки, видео, голос — подобрано под задачи.",
};

export default async function AiPage() {
  const [tools, featured] = await Promise.all([
    getAiServices(),
    getFeaturedAiServices(),
  ]);

  return <AiPageClient tools={tools} featured={featured} />;
}
