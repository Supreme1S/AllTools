import type { Metadata } from "next";
import { Suspense } from "react";
import {
  getAllServices,
  getSortedCategories,
} from "@/lib/catalog/queries";
import { CatalogPageClient } from "./CatalogPageClient";

export const metadata: Metadata = {
  title: "Каталог",
  description:
    "Биржи, DeFi, кошельки, AI и инфра — в одном каталоге. Человечные описания и прямые ссылки.",
};

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const services = await getAllServices();
  const categories = getSortedCategories(services);

  return (
    <Suspense fallback={null}>
      <CatalogPageClient
        services={services}
        categories={categories}
        initialSearch={q ?? ""}
      />
    </Suspense>
  );
}
