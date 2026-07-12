#!/usr/bin/env python3
"""Generate fully Russian web3/batch4.ts."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/lib/catalog/content/web3/batch4.ts"
DATA = Path(__file__).resolve().parent / "batch4_ru_content.json"

QUOTED = {"monad-fantasy-top", "monad-monad-xyz"}


def slug_key(slug: str) -> str:
    return f'"{slug}"' if slug in QUOTED else slug


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def render_entry(slug: str, e: dict) -> str:
    key = slug_key(slug)
    lines = [
        f"  {key}: {{",
        f'    short:\n      "{esc(e["short"])}",',
        f'    long:\n      "{esc(e["long"])}",',
        f'    tagline: "{esc(e["tagline"])}",',
        f'    highlight:\n      "{esc(e["highlight"])}",',
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
    data: dict[str, dict] = json.loads(DATA.read_text(encoding="utf-8"))
    expected = [
        "kgen", "kiichain", "kintsu", "kuru", "lagrange", "layeredge", "layerhub",
        "linera", "linktr", "litvm", "logx", "lombard", "loyalty", "magicnewton",
        "magmastaking", "mahojin", "manta", "mantrachain", "mavryk", "mawari",
        "mayan", "megaeth", "meteora", "metri", "mezo", "miden", "midl",
        "milkyway", "minara", "mira", "moca", "mode", "monad-fantasy-top",
        "monad-monad-xyz", "moonbirds", "moonveil", "morph", "morpho",
        "movementlabs", "multipli", "multivmlabs", "myriad", "myshell", "n1",
        "nado", "nexira", "nexus", "noble", "nodeops", "nodepay",
    ]
    if list(data.keys()) != expected:
        raise SystemExit(f"Slug order mismatch: got {len(data)} keys")
    parts = [
        'import type { PlatformContent } from "@/lib/catalog/content/types";\n\n',
        "export const WEB3_BATCH_4: Record<string, PlatformContent> = {\n",
    ]
    for slug in expected:
        parts.append(render_entry(slug, data[slug]))
        parts.append("\n")
    parts.append("};\n")
    OUT.write_text("".join(parts), encoding="utf-8")
    print(f"Wrote {len(expected)} entries to {OUT}")


if __name__ == "__main__":
    main()
