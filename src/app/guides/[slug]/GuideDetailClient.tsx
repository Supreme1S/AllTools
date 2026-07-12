"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Guide } from "@/types";

/** Parse inline markdown: **bold**, `code`, [link](url) */
function parseInline(text: string): React.ReactNode {
  const regex = /(\*\*(.+?)\*\*)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))/g;
  const parts: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.slice(lastIdx, match.index));
    }
    if (match[1]) {
      // **bold**
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[3]) {
      // `code`
      parts.push(<code key={match.index}>{match[4]}</code>);
    } else if (match[5]) {
      // [text](url)
      parts.push(
        <a key={match.index} href={match[7]} target="_blank" rel="noopener noreferrer">
          {match[6]}
        </a>
      );
    }
    lastIdx = regex.lastIndex;
  }
  if (lastIdx < text.length) {
    parts.push(text.slice(lastIdx));
  }
  return parts.length > 0 ? <>{parts}</> : text;
}

/** Determine blockquote callout type from content */
function getCalloutClass(content: string): string {
  if (content.includes("⚠️") || content.includes("Предупреждение") || content.includes("Красные флаги") || content.includes("Красный флаг"))
    return "callout-warning";
  if (content.includes("💡") || content.includes("Совет"))
    return "callout-tip";
  if (content.includes("📌") || content.includes("Ключевое") || content.includes("Важно"))
    return "callout-key";
  return "callout-default";
}

function renderMarkdown(md: string): React.ReactNode[] {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent = "";
  let codeLang = "";
  let listItems: string[] = [];
  let inList = false;
  let listOrdered = false;

  const flushList = () => {
    if (listItems.length > 0) {
      const renderedItems = listItems.map((item, i) => (
        <li key={i}>{parseInline(item)}</li>
      ));
      if (listOrdered) {
        elements.push(
          <ol key={`ol-${elements.length}`}>{renderedItems}</ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`}>{renderedItems}</ul>
        );
      }
      listItems = [];
      inList = false;
      listOrdered = false;
    }
  };

  // Helper: collect consecutive lines that match a predicate
  const peekConsecutive = (startIdx: number, pred: (line: string) => boolean): number => {
    let j = startIdx;
    while (j < lines.length && pred(lines[j]) && lines[j].trim() !== "") {
      j++;
    }
    return j;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // --- Fenced code blocks ---
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`pre-${elements.length}`}>
            {codeLang && <div className="code-lang">{codeLang}</div>}
            <code>{codeContent.trim()}</code>
          </pre>
        );
        codeContent = "";
        codeLang = "";
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
        codeLang = trimmed.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += line + "\n";
      continue;
    }

    // --- Headings ---
    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={`h3-${elements.length}`}>{parseInline(trimmed.slice(4))}</h3>
      );
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={`h2-${elements.length}`}>{parseInline(trimmed.slice(3))}</h2>
      );
      continue;
    }
    if (trimmed.startsWith("# ")) {
      flushList();
      elements.push(
        <h1 key={`h1-${elements.length}`}>{parseInline(trimmed.slice(2))}</h1>
      );
      continue;
    }

    // --- Horizontal rule ---
    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      flushList();
      elements.push(<hr key={`hr-${elements.length}`} />);
      continue;
    }

    // --- Tables: lines starting with | ---
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList();
      // Collect all consecutive table rows
      const tableEnd = peekConsecutive(i, (l) => l.trim().startsWith("|") && l.trim().endsWith("|"));
      const tableLines = lines.slice(i, tableEnd);
      i = tableEnd - 1; // skip consumed lines

      // Parse rows
      const rows: string[][] = [];
      for (const tl of tableLines) {
        const cells = tl
          .split("|")
          .slice(1, -1) // remove empty first/last from split
          .map((c) => c.trim());
        if (cells.length > 0) rows.push(cells);
      }

      if (rows.length < 2) continue; // need at least header + separator

      const headerRow = rows[0];
      const sepRow = rows[1];

      // Check if second row is a separator (all dashes or :---+---)
      const isSep = sepRow.every((c) => /^:?-{3,}:?$/.test(c));
      if (!isSep) continue;

      const bodyRows = rows.slice(2);
      const alignments = sepRow.map((c) => {
        if (c.startsWith(":") && c.endsWith(":")) return "center";
        if (c.endsWith(":")) return "right";
        return "left";
      });

      elements.push(
        <div className="table-wrap" key={`table-${elements.length}`}>
          <table>
            <thead>
              <tr>
                {headerRow.map((cell, ci) => (
                  <th key={ci} style={{ textAlign: alignments[ci] as "left" | "center" | "right" }}>
                    {parseInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ textAlign: alignments[ci] as "left" | "center" | "right" }}>
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // --- Blockquotes ---
    if (trimmed.startsWith("> ")) {
      flushList();
      const bqEnd = peekConsecutive(i, (l) => l.trim().startsWith("> "));
      const bqLines = lines.slice(i, bqEnd);
      i = bqEnd - 1;

      const bqContent = bqLines
        .map((l) => l.trim().slice(2))
        .join("\n");
      const calloutClass = getCalloutClass(bqContent);

      // Render blockquote content as mini markdown (paragraphs only)
      const bqParagraphs = bqContent.split("\n\n").filter((p) => p.trim());
      elements.push(
        <blockquote key={`bq-${elements.length}`} className={calloutClass}>
          {bqParagraphs.map((p, pi) => (
            <p key={pi}>{parseInline(p.trim().replace(/\n/g, " "))}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // --- Lists ---
    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      inList = true;
      listOrdered = false;
      continue;
    }
    if (/^\d+\.\s/.test(trimmed)) {
      listItems.push(trimmed.replace(/^\d+\.\s/, ""));
      inList = true;
      listOrdered = true;
      continue;
    }

    // --- Empty line ---
    if (trimmed === "") {
      if (inList) flushList();
      continue;
    }

    // --- Fall through: paragraph ---
    if (inList) flushList();

    elements.push(<p key={`p-${elements.length}`}>{parseInline(line)}</p>);
  }

  flushList();
  return elements;
}

export function GuideDetailClient({ guide }: { guide: Guide }) {
  return (
    <div className="page-wrap">
      <Link href="/guides" className="back-link">
        <ArrowLeft size={15} />
        Все гайды
      </Link>

      <div className="guide-detail-header">
        <span className="guide-detail-category">{guide.category}</span>
        <h1 className="guide-detail-title">{guide.title}</h1>
        <p className="guide-detail-excerpt">{guide.excerpt}</p>
      </div>

      <div className="guide-content-card">{renderMarkdown(guide.content_md)}</div>
    </div>
  );
}
