"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { resolveProtocolIconUrl } from "@/lib/catalog/icons";

type ProtocolIconProps = {
  name: string;
  image?: string | null;
  domain?: string;
  size?: number;
  className?: string;
  priority?: boolean;
};

function initialsFromName(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9\u0400-\u04FF]/g, " ").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase() || "?";
}

function hueFromString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % 360;
}

/** Generate an SVG data-URI that draws the initials as an image — the ultimate fallback. */
function initialsDataUri(name: string, hue: number, size: number): string {
  const initials = initialsFromName(name);
  const bg = `hsl(${hue}, 18%, 14%)`;
  const fg = `hsl(${hue}, 55%, 78%)`;
  const fontSize = Math.round(size * 0.38);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" rx="${Math.round(size * 0.3)}" fill="${bg}"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-weight="700" font-size="${fontSize}" fill="${fg}" letter-spacing="-0.04em">${initials}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function ProtocolIcon({
  name,
  image,
  domain,
  size = 40,
  className,
}: ProtocolIconProps) {
  const domainFavicon = domain ? resolveProtocolIconUrl(null, domain) : null;

  // Fallback chain: provided image → domain favicon → inline SVG (always an <img>)
  const chain = useMemo(() => {
    const candidates: string[] = [];
    if (image) candidates.push(image);
    if (domainFavicon && domainFavicon !== image) candidates.push(domainFavicon);
    const seed = domain || name;
    candidates.push(initialsDataUri(name, hueFromString(seed), size));
    return candidates;
  }, [image, domainFavicon, name, domain, size]);

  const [idx, setIdx] = useState(0);
  const src = chain[Math.min(idx, chain.length - 1)];

  const handleError = () => setIdx((i) => i + 1);

  return (
    <div
      className={cn("protocol-icon", className)}
      style={
        {
          "--icon-size": `${size}px`,
          "--icon-hue": hueFromString(domain || name),
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {/* ALWAYS an <img> — ultimate fallback is an inline SVG, never a <span> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" onError={handleError} />
    </div>
  );
}
