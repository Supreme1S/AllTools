import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function getCategoryLabel(categoryValue: string): string {
  const map: Record<string, string> = {
    exchange: "Биржи",
    instant_exchange: "Обменники",
    wallet: "Кошельки",
    bridge: "Бриджи",
    analytics: "Аналитика",
    card_payment: "Карты",
    dex_aggregator: "DEX-агрегаторы",
  };
  return map[categoryValue] || categoryValue;
}

export function getCustodyLabel(type: string): string {
  const map: Record<string, string> = {
    "non-custodial": "Некастодиальный",
    custodial: "Кастодиальный",
    hybrid: "Гибридный",
  };
  return map[type] || type;
}
