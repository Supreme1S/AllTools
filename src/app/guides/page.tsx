import type { Metadata } from "next";
import { trainingResources } from "@/lib/training-resources";
import { getAllGuides } from "@/lib/mock-data";
import { GuidesClient } from "./GuidesClient";

export const metadata: Metadata = {
  title: "Гайды",
  description:
    "Лучшие обучающие ресурсы: академии, wiki, курсы и документация по крипте, DeFi, ИИ и не только.",
};

export default function GuidesPage() {
  const guides = getAllGuides();
  return <GuidesClient resources={trainingResources} guides={guides} />;
}
