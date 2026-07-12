"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Sparkles } from "lucide-react";
import type { Service } from "@/types";

type LogoEntry = { image: string; name: string };

export function AiLogoCarousel({ tools }: { tools: Service[] }) {
  const logos = useMemo(() => {
    const seen = new Set<string>();
    const list: LogoEntry[] = [];
    for (const t of tools) {
      if (t.image && !seen.has(t.image)) {
        seen.add(t.image);
        list.push({ image: t.image, name: t.name });
      }
    }
    return list;
  }, [tools]);

  const len = logos.length;
  const [tick, setTick] = useState(0);
  const [slotA, setSlotA] = useState<LogoEntry | null>(null);
  const [slotB, setSlotB] = useState<LogoEntry | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    logos.forEach((l) => {
      const img = new window.Image();
      img.src = l.image;
    });
    if (logos.length > 0 && !initialized.current) {
      setSlotA(logos[0]);
      if (logos.length > 1) setSlotB(logos[1]);
      initialized.current = true;
    }
  }, [logos]);

  useEffect(() => {
    if (len < 2) return;
    const id = setInterval(() => {
      setTick((t) => (t + 1) % len);
    }, 2800);
    return () => clearInterval(id);
  }, [len]);

  const prevTick = useRef(0);
  useEffect(() => {
    if (len < 2) return;
    if (tick === prevTick.current) return;
    prevTick.current = tick;

    const showA = tick % 2 === 0;

    if (showA) {
      setSlotA(logos[tick % len]);
      const nextForB = logos[(tick + 1) % len];
      const timer = setTimeout(() => setSlotB(nextForB), 750);
      return () => clearTimeout(timer);
    } else {
      setSlotB(logos[tick % len]);
      const nextForA = logos[(tick + 1) % len];
      const timer = setTimeout(() => setSlotA(nextForA), 750);
      return () => clearTimeout(timer);
    }
  }, [tick, len, logos]);

  if (logos.length === 0) {
    return (
      <div className="quiz-logo-carousel-wrap">
        <div className="quiz-logo-carousel">
          <div className="quiz-logo-placeholder">
            <Sparkles size={40} className="quiz-logo-sparkle" />
          </div>
        </div>
        <div className="quiz-logo-caption">&nbsp;</div>
      </div>
    );
  }

  if (logos.length === 1) {
    return (
      <div className="quiz-logo-carousel-wrap">
        <div className="quiz-logo-carousel">
          <img src={logos[0].image} alt={logos[0].name} className="quiz-logo-img quiz-logo-visible" />
        </div>
        <div className="quiz-logo-caption">{logos[0].name}</div>
      </div>
    );
  }

  const showA = tick % 2 === 0;

  return (
    <div className="quiz-logo-carousel-wrap">
      <div className="quiz-logo-carousel">
        {slotA && (
          <img key="slot-a" src={slotA.image} alt={slotA.name}
            className={`quiz-logo-img${showA ? " quiz-logo-visible" : " quiz-logo-hidden"}`} />
        )}
        {slotB && (
          <img key="slot-b" src={slotB.image} alt={slotB.name}
            className={`quiz-logo-img${showA ? " quiz-logo-hidden" : " quiz-logo-visible"}`} />
        )}
      </div>
      <div className="quiz-logo-caption">{logos[tick % len]?.name}</div>
    </div>
  );
}
