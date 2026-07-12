import {
  CATEGORY_TAB_ORDER,
  normalizeCategoryKey,
} from "@/lib/catalog/category-labels";
import { catalogToolsToServices, catalogToolToService } from "@/lib/catalog/adapter";
import { readCatalogSnapshot } from "@/lib/catalog/storage";
import { compareTopPlatform, getTopPlatformMeta } from "@/lib/catalog/top-platforms";
import type { CatalogSnapshot } from "@/lib/catalog/types";
import type { Service } from "@/types";

export type CatalogStats = {
  total: number;
  withReferral: number;
  withImage: number;
  syncedAt: string | null;
};

let snapshotCache: CatalogSnapshot | null | undefined;
let servicesCache: Service[] | null = null;

const useCatalogCache = process.env.NODE_ENV === "production";

async function getSnapshot(): Promise<CatalogSnapshot | null> {
  if (useCatalogCache && snapshotCache !== undefined) return snapshotCache;
  const snapshot = await readCatalogSnapshot();
  if (useCatalogCache) snapshotCache = snapshot;
  return snapshot;
}

export function clearCatalogCache() {
  snapshotCache = undefined;
  servicesCache = null;
}

export async function getCatalogStats(): Promise<CatalogStats> {
  const snapshot = await getSnapshot();
  if (!snapshot) {
    return { total: 0, withReferral: 0, withImage: 0, syncedAt: null };
  }
  return {
    total: snapshot.stats.total,
    withReferral: snapshot.stats.with_referral,
    withImage: snapshot.tools.filter((t) => t.image).length,
    syncedAt: snapshot.syncedAt,
  };
}

export async function getAllServices(): Promise<Service[]> {
  if (useCatalogCache && servicesCache) return servicesCache;
  const snapshot = await getSnapshot();
  if (!snapshot) return [];
  const services = catalogToolsToServices(snapshot.tools).sort((a, b) => {
    const top = compareTopPlatform(a.domain, b.domain);
    if (top !== 0) return top;
    return a.name.localeCompare(b.name, "ru");
  });
  if (useCatalogCache) servicesCache = services;
  return services;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const snapshot = await getSnapshot();
  if (!snapshot) return null;
  const tool = snapshot.tools.find((t) => t.slug === slug);
  return tool ? catalogToolToService(tool) : null;
}

export async function getTopServices(): Promise<Service[]> {
  const services = await getAllServices();
  return services.filter((s) => getTopPlatformMeta(s.domain) !== null);
}

export function getCategoryCounts(services: Service[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const s of services) {
    const key = normalizeCategoryKey(s.category) ?? s.category;
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

export function getSortedCategories(services: Service[]): string[] {
  const counts = getCategoryCounts(services);
  return Object.keys(counts).sort((a, b) => {
    const ia = CATEGORY_TAB_ORDER.indexOf(a);
    const ib = CATEGORY_TAB_ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return counts[b]! - counts[a]!;
  });
}
