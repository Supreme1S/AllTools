import fs from "node:fs";
import path from "node:path";
import { applyExchangeCategory } from "../src/lib/catalog/exchange-classification";

const catalogPath = path.join(process.cwd(), "data/catalog.json");
const snapshot = JSON.parse(fs.readFileSync(catalogPath, "utf8")) as {
  tools: Array<{
    name: string;
    domain: string;
    website_url: string;
    category: string | null;
  }>;
};

snapshot.tools = snapshot.tools.map((tool) => applyExchangeCategory(tool));
fs.writeFileSync(catalogPath, `${JSON.stringify(snapshot, null, 2)}\n`);

const counts: Record<string, number> = {};
for (const tool of snapshot.tools) {
  const cat = tool.category ?? "—";
  counts[cat] = (counts[cat] ?? 0) + 1;
}

console.log("Reclassified exchange categories:");
console.log(JSON.stringify(counts, null, 2));
