import type { CatalogTool } from "@/lib/catalog/types";
import { AI_CONTENT } from "@/lib/catalog/content/ai/ai-content";
import { ANALYTICS_CONTENT } from "@/lib/catalog/content/analytics/analytics-content";
import { CEX_CONTENT } from "@/lib/catalog/content/cex";
import { DEFI_CONTENT } from "@/lib/catalog/content/defi";
import { DEX_CONTENT } from "@/lib/catalog/content/dex";
import { SERVICES_CONTENT } from "@/lib/catalog/content/services/services-content";
import { WALLETS_CONTENT } from "@/lib/catalog/content/wallets";
import { WEB3_CONTENT } from "@/lib/catalog/content/web3";
import { TOOLS_CONTENT } from "@/lib/catalog/content/tools-content/tools-content";
import type { PlatformContent } from "@/lib/catalog/content/types";

const REGISTRY: Record<string, PlatformContent> = {
  ...AI_CONTENT,
  ...ANALYTICS_CONTENT,
  ...CEX_CONTENT,
  ...DEX_CONTENT,
  ...WALLETS_CONTENT,
  ...DEFI_CONTENT,
  ...WEB3_CONTENT,
  ...TOOLS_CONTENT,
  ...SERVICES_CONTENT,
};

export function getPlatformContent(slug: string): PlatformContent | null {
  return REGISTRY[slug] ?? null;
}

export function hasPlatformContent(slug: string): boolean {
  return slug in REGISTRY;
}

export function getPlatformContentOrNull(tool: CatalogTool): PlatformContent | null {
  return getPlatformContent(tool.slug);
}
