import type { Metadata } from "next";
import { MoreClient } from "./MoreClient";
import { getAllServices } from "@/lib/catalog/queries";

export const metadata: Metadata = {
  title: "Ещё — FAQ, битва проектов, чекер дропов, калькулятор",
  description:
    "FAQ по платформе, битва проектов (king of the hill), чекер аирдропов (Wrapped-формат), калькулятор трейдера и новости индустрии.",
};

export default async function MorePage() {
  const tools = await getAllServices();
  return <MoreClient tools={tools} />;
}
