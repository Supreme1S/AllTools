import type { Metadata } from "next";
import { getAllEvents } from "@/lib/mock-data";
import { NewsClient } from "./NewsClient";

export const metadata: Metadata = {
  title: "Новости",
  description:
    "Индустриальная хроника: релизы, листинги, апдейты, регуляторные сдвиги и значимые анонсы.",
};

export default function NewsPage() {
  const events = getAllEvents();
  return <NewsClient events={events} />;
}
