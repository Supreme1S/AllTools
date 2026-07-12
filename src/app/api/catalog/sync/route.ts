import { NextResponse } from "next/server";
import { syncCatalog } from "@/lib/catalog/sync";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST() {
  if (process.env.NODE_ENV === "production" && !process.env.ALLOW_CATALOG_SYNC) {
    return NextResponse.json(
      { error: "Catalog sync is disabled in production." },
      { status: 403 },
    );
  }

  try {
    const snapshot = await syncCatalog();
    return NextResponse.json({
      ok: true,
      syncedAt: snapshot.syncedAt,
      stats: snapshot.stats,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sync failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
