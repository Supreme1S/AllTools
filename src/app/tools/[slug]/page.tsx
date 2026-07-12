import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getTopServices,
} from "@/lib/catalog/queries";
import { getEventsByService } from "@/lib/mock-data";
import { ServiceDetailClient } from "./ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  // Dev: не прегенерировать 880+ страниц — сильно греет ноут и тормозит сервер.
  if (process.env.NODE_ENV === "development") {
    return [];
  }
  const services = await getTopServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Сервис не найден" };
  return {
    title: service.name,
    description: service.short_description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const events = getEventsByService(service.id);

  return <ServiceDetailClient service={service} events={events} />;
}
