#!/usr/bin/env python3
"""Generate fully Russian defi/batch1.ts from structured content."""

from __future__ import annotations

import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "src/lib/catalog/content/defi/batch1.ts"
DATA = Path(__file__).resolve().parent / "batch1_ru_content.json"

QUOTED = {
    "10kswap", "9inch", "across-bridge", "angle-bridge-by-l0", "avalon-finance",
    "base-name-service", "bastion-protocol", "beefy-finance", "celer-cbridge",
    "connext-bridge", "core-bridge-by-l0", "dao-maker",
}


def slug_key(slug: str) -> str:
    return f'"{slug}"' if slug in QUOTED else slug


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def render_entry(slug: str, e: dict) -> str:
    key = slug_key(slug)
    facts = e.get("facts", [])
    tips = e.get("tips", [])
    warnings = e.get("warnings", [])
    lines = [
        f"  {key}: {{",
        f'    short:\n      "{esc(e["short"])}",',
        f'    long:\n      "{esc(e["long"])}",',
        f'    tagline: "{esc(e["tagline"])}",',
        f'    highlight:\n      "{esc(e["highlight"])}",',
        "    facts: [",
    ]
    for f in facts:
        lines.append(f'      "{esc(f)}",')
    lines.append("    ],")
    lines.append("    tips: [")
    for t in tips:
        lines.append(f'      "{esc(t)}",')
    lines.append("    ],")
    lines.append("    warnings: [")
    for w in warnings:
        lines.append(f'      "{esc(w)}",')
    lines.append("    ],")
    lines.append("  },")
    return "\n".join(lines)


def main() -> None:
    data: dict[str, dict] = json.loads(DATA.read_text(encoding="utf-8"))
    parts = [
        'import type { PlatformContent } from "@/lib/catalog/content/types";\n',
        "\nexport const DEFI_BATCH_1: Record<string, PlatformContent> = {\n",
    ]
    for slug in data:
        parts.append(render_entry(slug, data[slug]))
        parts.append("\n")
    parts.append("};\n")
    OUT.write_text("".join(parts), encoding="utf-8")
    print(f"Wrote {len(data)} entries to {OUT}")


if __name__ == "__main__":
    main()
