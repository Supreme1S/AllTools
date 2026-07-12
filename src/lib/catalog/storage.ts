import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { CatalogSnapshot } from "@/lib/catalog/types";

const DATA_DIR = path.join(process.cwd(), "data");
const CATALOG_PATH = path.join(DATA_DIR, "catalog.json");

export function getCatalogPath() {
  return CATALOG_PATH;
}

export async function readCatalogSnapshot(): Promise<CatalogSnapshot | null> {
  try {
    const raw = await readFile(CATALOG_PATH, "utf8");
    return JSON.parse(raw) as CatalogSnapshot;
  } catch {
    return null;
  }
}

export async function writeCatalogSnapshot(snapshot: CatalogSnapshot) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(CATALOG_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
}
