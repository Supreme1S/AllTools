import { buildCatalogSnapshot } from "@/lib/catalog/merge";
import { readReferralsRegistry } from "@/lib/catalog/referrals-config";
import { fetchCryptonCatalog } from "@/lib/catalog/sources/crypton";
import { fetchMaxyCatalog } from "@/lib/catalog/sources/maxy";
import { writeCatalogSnapshot } from "@/lib/catalog/storage";
import type { CatalogSnapshot } from "@/lib/catalog/types";

export async function syncCatalog(): Promise<CatalogSnapshot> {
  const registry = await readReferralsRegistry();
  const [crypton, maxy] = await Promise.all([
    fetchCryptonCatalog(),
    fetchMaxyCatalog(),
  ]);

  const snapshot = await buildCatalogSnapshot(crypton, maxy, registry);
  await writeCatalogSnapshot(snapshot);
  return snapshot;
}
