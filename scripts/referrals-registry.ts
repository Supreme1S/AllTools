#!/usr/bin/env tsx
/**
 * Referral registry CLI — NOT auto-registration.
 * Tracks which domains need your manual affiliate links.
 *
 * Usage:
 *   npm run referrals:report
 *   npm run referrals:set -- binance.com "https://accounts.binance.com/register?ref=YOUR_CODE"
 *   npm run referrals:skip -- kraken.com "geo / KYC"
 *   npm run referrals:init
 */
import { readCatalogSnapshot } from "../src/lib/catalog/storage";
import {
  readReferralsRegistry,
  writeReferralsRegistry,
  getReferralsPath,
} from "../src/lib/catalog/referrals-config";
import type { ReferralStatus } from "../src/lib/catalog/types";

const [, , command, domainArg, ...urlParts] = process.argv;
const urlArg = urlParts.join(" ").trim();

async function report() {
  const snapshot = await readCatalogSnapshot();
  if (!snapshot) {
    console.error("No catalog.json — run `npm run sync:catalog` first.");
    process.exitCode = 1;
    return;
  }

  const groups: Record<ReferralStatus, typeof snapshot.tools> = {
    ready: [],
    manual_exchange: [],
    manual_kyc: [],
    no_program: [],
    pending: [],
  };

  for (const tool of snapshot.tools) {
    groups[tool.referral_status].push(tool);
  }

  console.log(`Registry file: ${getReferralsPath()}\n`);
  console.log("Stats:", snapshot.stats);
  console.log("\n--- Needs your referral (CEX) ---");
  for (const tool of groups.manual_exchange.slice(0, 30)) {
    console.log(`  ${tool.domain.padEnd(28)} ${tool.name}`);
  }
  if (groups.manual_exchange.length > 30) {
    console.log(`  ... +${groups.manual_exchange.length - 30} more`);
  }

  console.log("\n--- Needs KYC / manual approval ---");
  for (const tool of groups.manual_kyc) {
    console.log(`  ${tool.domain.padEnd(28)} ${tool.name}`);
  }

  console.log("\n--- Ready with referral ---");
  for (const tool of groups.ready) {
    console.log(`  ${tool.domain.padEnd(28)} ${tool.outbound_url}`);
  }

  console.log("\n--- Skipped (no ref, clean URL) ---");
  const registry = await readReferralsRegistry();
  const skipped = Object.entries(registry.entries).filter(
    ([, entry]) => !entry.url && entry.status === "no_program",
  );
  for (const [domain, entry] of skipped) {
    console.log(`  ${domain.padEnd(28)} ${entry.note ?? ""}`);
  }
  if (skipped.length === 0) console.log("  (none)");
}

async function setReferral() {
  if (!domainArg || !urlArg) {
    console.error('Usage: npm run referrals:set -- <domain> "<referral-url>"');
    process.exitCode = 1;
    return;
  }

  const registry = await readReferralsRegistry();
  const domain = domainArg.toLowerCase().replace(/^www\./, "");

  registry.entries[domain] = {
    url: urlArg,
    status: "ready",
    updatedAt: new Date().toISOString(),
    note: "manual",
  };

  await writeReferralsRegistry(registry);
  console.log(`Saved referral for ${domain}`);
  console.log(`Re-run: npm run sync:catalog`);
}

async function skipReferral() {
  if (!domainArg) {
    console.error('Usage: npm run referrals:skip -- <domain> ["reason"]');
    process.exitCode = 1;
    return;
  }

  const registry = await readReferralsRegistry();
  const domain = domainArg.toLowerCase().replace(/^www\./, "");

  registry.entries[domain] = {
    url: "",
    status: "no_program",
    updatedAt: new Date().toISOString(),
    note: urlArg ? `skip: ${urlArg}` : "skip: cannot register",
  };

  await writeReferralsRegistry(registry);
  console.log(`Marked ${domain} as skip — will use clean official URL`);
  console.log(`Re-run: npm run sync:catalog`);
}

async function initFromCatalog() {
  const snapshot = await readCatalogSnapshot();
  if (!snapshot) {
    console.error("No catalog.json — run `npm run sync:catalog` first.");
    process.exitCode = 1;
    return;
  }

  const registry = await readReferralsRegistry();
  let added = 0;

  for (const tool of snapshot.tools) {
    if (registry.entries[tool.domain]) continue;
    if (tool.referral_status !== "manual_exchange" && tool.referral_status !== "manual_kyc") {
      continue;
    }
    registry.entries[tool.domain] = {
      url: "",
      status: tool.referral_status,
      note: "TODO: add your referral URL",
      updatedAt: new Date().toISOString(),
    };
    added += 1;
  }

  await writeReferralsRegistry(registry);
  console.log(`Initialized ${added} placeholder entries in ${getReferralsPath()}`);
  console.log("Fill empty url fields, then: npm run referrals:set -- domain.com \"https://...\"");
}

async function main() {
  switch (command) {
    case "set":
      await setReferral();
      break;
    case "skip":
      await skipReferral();
      break;
    case "init":
      await initFromCatalog();
      break;
    case "report":
    default:
      await report();
      break;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
