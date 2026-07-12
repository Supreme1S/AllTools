import type { Metadata } from "next";
import { getTopServices } from "@/lib/catalog/queries";
import { getTopPlatformMeta, getTierlistCategories, getCategoryLabel } from "@/lib/catalog/top-platforms";
import { TierListClient } from "./TierListClient";
import type { TierEntry, Service } from "@/types";
import { TIER_CONFIG, TIER_ORDER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Тир-лист",
  description:
    "Лучшие площадки по уровням S/A/B/C/D — биржи, DeFi, кошельки, аналитика, инфраструктура и AI.",
};

function assignTiers(services: Service[]): TierEntry[] {
  const tiered: Record<string, Service[]> = { S: [], A: [], B: [], C: [], D: [] };

  for (const service of services) {
    const meta = getTopPlatformMeta(service.domain);
    if (!meta) continue;
    tiered[meta.tier].push(service);
  }

  for (const tier of TIER_ORDER) {
    tiered[tier].sort((a, b) => {
      const ma = getTopPlatformMeta(a.domain)!;
      const mb = getTopPlatformMeta(b.domain)!;
      return ma.order - mb.order;
    });
  }

  return TIER_ORDER.map((tier) => ({
    tier,
    services: tiered[tier],
    min_score: TIER_CONFIG[tier],
    color: "",
    bg_color: "",
    border_color: "",
  }));
}

const TIER_LABELS: Record<string, string> = {
  S: "Отраслевые бенчмарки — без компромиссов по безопасности, ликвидности и UX",
  A: "Превосходные площадки с малозначительными оговорками",
  B: "Надёжные решения с осознанными компромиссами",
  C: "Средний эшелон — для специфических задач, требует вдумчивого подхода",
  D: "Нишевые инструменты и зона риска",
};

export default async function TierListPage() {
  const services = await getTopServices();
  const tiers = assignTiers(services);
  const categories = getTierlistCategories().map((cat) => ({
    key: cat,
    label: getCategoryLabel(cat),
  }));

  return <TierListClient tiers={tiers} categories={categories} labels={TIER_LABELS} />;
}
