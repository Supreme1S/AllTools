#!/usr/bin/env python3
"""Apply full Russian prose to batch1 and regenerate TS."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT_JSON = ROOT / "batch1_ru_content.json"
GENERATE = ROOT / "generate_batch1_ru.py"

# Full Russian content — imported from generated module
from batch1_ru_all_entries import ENTRIES  # noqa: E402


def main() -> None:
    slugs = [s["slug"] for s in json.loads((ROOT / "defi-batch-1.json").read_text())]
    missing = [s for s in slugs if s not in ENTRIES]
    if missing:
        raise SystemExit(f"Missing entries: {missing}")
    ordered = {k: ENTRIES[k] for k in slugs}
    for slug, e in ordered.items():
        if len(e.get("facts", [])) != 3:
            raise SystemExit(f"{slug}: need 3 facts, got {len(e.get('facts', []))}")
    OUT_JSON.write_text(json.dumps(ordered, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(ordered)} entries")
    subprocess.run([sys.executable, str(GENERATE)], check=True)


if __name__ == "__main__":
    main()
