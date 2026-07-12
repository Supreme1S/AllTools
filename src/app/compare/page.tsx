import type { Metadata } from "next";
import { getAllServices } from "@/lib/catalog/queries";
import { CompareClient } from "./CompareClient";

export const metadata: Metadata = {
  title: "Сравнение платформ",
  description:
    "Сопоставление крипто-платформ по категории, кастодиальности, фиату и P2P.",
};

export default async function ComparePage() {
  const services = await getAllServices();
  return <CompareClient services={services} />;
}
