#!/usr/bin/env python3
"""Generate batch3.ts with Russian-only content for WEB3_BATCH_3."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT.parents[0] / "src/lib/catalog/content/web3/batch3.ts"
DATA = ROOT / "batch3_ru_content.json"

SLUGS = [
    "gate2", "genlayer", "gensyn", "getgrass", "getoptimum", "getoro", "gigaverse",
    "glacier", "glob", "gobob", "godaylight", "gokite", "gomble", "gonative", "google",
    "gpu", "gradient", "group", "grvt", "gte", "halliday", "hamsterkombatgame", "hana",
    "helioschain", "hemi", "heyelsa", "hibachi", "huddle01", "humanity", "hyli", "hylo",
    "hyperbolic", "hyperlane", "ika", "incentiv", "infinifi", "infinityg", "initia",
    "inkonchain", "intuition", "io", "iopn", "irys", "ithaca", "jiritsu", "kadena",
    "kalshi", "kamino", "katana-katana-network", "kerneldao",
]

QUOTED = {"katana-katana-network"}


def slug_key(slug: str) -> str:
    return f'"{slug}"' if slug in QUOTED else slug


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def render_entry(slug: str, e: dict) -> str:
    key = slug_key(slug)
    lines = [
        f"  {key}: {{",
        f"    short:",
        f'      "{esc(e["short"])}",',
        f"    long:",
        f'      "{esc(e["long"])}",',
        f'    tagline: "{esc(e["tagline"])}",',
        f"    highlight:",
        f'      "{esc(e["highlight"])}",',
        "    facts: [",
    ]
    for f in e["facts"]:
        lines.append(f'      "{esc(f)}",')
    lines.append("    ],")
    lines.append("    tips: [")
    for t in e["tips"]:
        lines.append(f'      "{esc(t)}",')
    lines.append("    ],")
    lines.append("    warnings: [")
    for w in e["warnings"]:
        lines.append(f'      "{esc(w)}",')
    lines.append("    ],")
    lines.append("  },")
    return "\n".join(lines)


def main() -> None:
    raw: dict[str, dict] = json.loads(DATA.read_text(encoding="utf-8"))
    missing = [s for s in SLUGS if s not in raw]
    if missing:
        raise SystemExit(f"Missing entries: {missing}")
    if len(SLUGS) != 50:
        raise SystemExit(f"Expected 50 slugs, got {len(SLUGS)}")

    parts = [
        'import type { PlatformContent } from "@/lib/catalog/content/types";\n',
        "\nexport const WEB3_BATCH_3: Record<string, PlatformContent> = {\n",
    ]
    for slug in SLUGS:
        parts.append(render_entry(slug, raw[slug]))
        parts.append("\n")
    parts.append("};\n")

    text = "".join(parts)
    OUT.write_text(text, encoding="utf-8")
    keys = sum(1 for slug in SLUGS if f"{slug_key(slug)}: {{" in text)
    print(f"Wrote {OUT}")
    print(f"Lines: {len(text.splitlines())}")
    print(f"Entries: {keys}")


if __name__ == "__main__":
    main()
