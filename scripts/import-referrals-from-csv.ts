#!/usr/bin/env tsx
/**
 * Import referral URLs from platforms-official.csv into data/referrals.json
 *
 * Usage:
 *   npm run referrals:import
 *   npm run referrals:import -- path/to/custom.csv
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  readReferralsRegistry,
  writeReferralsRegistry,
} from "../src/lib/catalog/referrals-config";

const DEFAULT_CSV = path.join(process.cwd(), "data", "platforms-official.csv");

function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === "," && !inQuotes) {
      fields.push(current);
      current = "";
      continue;
    }
    current += char;
  }

  fields.push(current);
  return fields;
}

function isValidReferralUrl(raw: string): boolean {
  try {
    const url = new URL(raw.trim());
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

function isSkipMarker(raw: string): boolean {
  const value = raw.trim().toLowerCase();
  return ["skip", "-", "n/a", "na", "нет", "no", "none", "пропуск", "нельзя"].includes(value);
}

async function main() {
  const csvPath = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_CSV;
  const raw = await readFile(csvPath, "utf8");
  const lines = raw.trim().split("\n");
  if (lines.length < 2) {
    console.error("CSV is empty.");
    process.exitCode = 1;
    return;
  }

  const header = parseCsvLine(lines[0]);
  const domainIdx = header.indexOf("domain");
  const referralIdx = header.indexOf("your_referral_url");
  const nameIdx = header.indexOf("name");

  if (domainIdx === -1 || referralIdx === -1) {
    console.error("CSV must contain columns: domain, your_referral_url");
    process.exitCode = 1;
    return;
  }

  const registry = await readReferralsRegistry();
  let imported = 0;
  let skipped = 0;
  let markedSkip = 0;
  let invalid = 0;

  for (const line of lines.slice(1)) {
    if (!line.trim() || line.includes("===")) continue;

    const cols = parseCsvLine(line);
    const domain = (cols[domainIdx] ?? "").trim().toLowerCase().replace(/^www\./, "");
    const referralUrl = (cols[referralIdx] ?? "").trim();
    const name = nameIdx >= 0 ? (cols[nameIdx] ?? "").trim() : "";

    if (!domain) continue;
    if (!referralUrl) {
      skipped += 1;
      continue;
    }

    if (isSkipMarker(referralUrl)) {
      registry.entries[domain] = {
        url: "",
        status: "no_program",
        updatedAt: new Date().toISOString(),
        note: name
          ? `skip: cannot register (${name})`
          : "skip: cannot register",
      };
      markedSkip += 1;
      continue;
    }

    if (!isValidReferralUrl(referralUrl)) {
      console.warn(`Invalid URL (need https://): ${domain} -> ${referralUrl}`);
      invalid += 1;
      continue;
    }

    registry.entries[domain] = {
      url: referralUrl,
      status: "ready",
      updatedAt: new Date().toISOString(),
      note: name ? `imported from CSV (${name})` : "imported from CSV",
    };
    imported += 1;
  }

  await writeReferralsRegistry(registry);

  console.log(`CSV: ${csvPath}`);
  console.log(`Imported: ${imported}`);
  console.log(`Marked skip (no ref): ${markedSkip}`);
  console.log(`Skipped (empty): ${skipped}`);
  if (invalid > 0) console.log(`Invalid: ${invalid}`);
  console.log("\nNext step: npm run sync:catalog");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
