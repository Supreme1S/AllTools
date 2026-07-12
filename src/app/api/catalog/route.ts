import { NextResponse } from "next/server";
import { readCatalogSnapshot } from "@/lib/catalog/storage";
import type { CatalogTool } from "@/lib/catalog/types";

export const dynamic = "force-dynamic";

function toPublicTool(tool: CatalogTool) {
  return {
    id: tool.id,
    slug: tool.slug,
    name: tool.name,
    domain: tool.domain,
    category: tool.category,
    image: tool.image,
    description: tool.description,
    website_url: tool.website_url,
    outbound_url: tool.outbound_url,
    has_referral: Boolean(tool.referral_url),
  };
}

export async function GET(request: Request) {
  const snapshot = await readCatalogSnapshot();
  if (!snapshot) {
    return NextResponse.json(
      {
        error: "Catalog not synced yet. Run `npm run sync:catalog`.",
      },
      { status: 404 },
    );
  }

  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase().trim() ?? "";
  const category = searchParams.get("category")?.toLowerCase().trim() ?? "";
  const withReferral = searchParams.get("with_referral") === "1";

  let items = snapshot.tools;

  if (q) {
    items = items.filter(
      (tool) =>
        tool.name.toLowerCase().includes(q) ||
        tool.domain.toLowerCase().includes(q),
    );
  }

  if (category) {
    items = items.filter((tool) =>
      (tool.category ?? "").toLowerCase().includes(category),
    );
  }

  if (withReferral) {
    items = items.filter((tool) => tool.referral_url);
  }

  return NextResponse.json({
    syncedAt: snapshot.syncedAt,
    stats: snapshot.stats,
    count: items.length,
    items: items.map(toPublicTool),
  });
}
