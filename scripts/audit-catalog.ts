import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { isGenericDisplayName, resolveDisplayName } from "../src/lib/catalog/display-name";
import { getBrandId } from "../src/lib/catalog/brand-merge";
import type { CatalogTool } from "../src/lib/catalog/types";

const catalogPath = resolve(__dirname, "../data/catalog.json");
const snapshot = JSON.parse(readFileSync(catalogPath, "utf8")) as {
  tools: CatalogTool[];
};
const tools = snapshot.tools;

console.log("=== Catalog audit ===\n");
console.log(`Total tools: ${tools.length}`);

const slugCounts = new Map<string, number>();
const domainCounts = new Map<string, number>();
const brandCounts = new Map<string, CatalogTool[]>();

for (const tool of tools) {
  slugCounts.set(tool.slug, (slugCounts.get(tool.slug) ?? 0) + 1);
  domainCounts.set(tool.domain, (domainCounts.get(tool.domain) ?? 0) + 1);
  const brand = getBrandId(tool.domain, tool.name);
  const bucket = brandCounts.get(brand) ?? [];
  bucket.push(tool);
  brandCounts.set(brand, bucket);
}

const dupSlugs = [...slugCounts.entries()].filter(([, c]) => c > 1);
const dupDomains = [...domainCounts.entries()].filter(([, c]) => c > 1);
const dupBrands = [...brandCounts.entries()].filter(([, arr]) => arr.length > 1);

console.log(`Duplicate slugs: ${dupSlugs.length}`);
console.log(`Duplicate domains: ${dupDomains.length}`);
console.log(`Duplicate brand groups: ${dupBrands.length}`);

if (dupBrands.length > 0) {
  console.log("\nTop brand duplicates:");
  dupBrands
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 8)
    .forEach(([brand, arr]) => {
      console.log(
        `  ${brand}: ${arr.map((t) => `${t.name} (${t.domain})`).join(" | ")}`,
      );
    });
}

const genericNames = tools.filter((t) => isGenericDisplayName(t.name));
console.log(`\nGeneric names in catalog.json: ${genericNames.length}`);
if (genericNames.length > 0) {
  console.log(
    "  Sample fixes:",
    genericNames
      .slice(0, 5)
      .map((t) => `${t.name} → ${resolveDisplayName(t.name, t.domain)}`)
      .join("; "),
  );
}

const noImage = tools.filter((t) => !t.image && !t.enrichment?.logo);
console.log(`\nMissing source image: ${noImage.length} (favicon fallback at runtime)`);

const noDesc = tools.filter((t) => !t.description?.trim());
console.log(`Missing raw description: ${noDesc.length} (templates/facts at runtime)`);

console.log("\nAudit complete.");
