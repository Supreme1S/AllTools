"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS, FAQ_CATEGORIES, type FaqItem } from "@/lib/faq";
import { cn } from "@/lib/utils";

function FaqCard({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("faq-card", open && "faq-card-open")}>
      <button type="button" className="faq-card-trigger" onClick={() => setOpen(!open)}>
        <span className="faq-card-question">{item.question}</span>
        <ChevronDown size={20} className={cn("faq-chevron", open && "faq-chevron-open")} />
      </button>
      <div className={cn("faq-card-body", open && "faq-card-body-open")}>
        <div className="faq-card-answer">
          <p>{item.answer}</p>
          {item.guideLink && (
            <Link href={`/guides/${item.guideLink.slug}`} className="faq-guide-link">
              {item.guideLink.label} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="more-section">
      <div className="more-section-head">
        <h2 className="more-section-title">FAQ</h2>
        <p className="more-section-desc">Частые вопросы про платформу, крипту и ИИ</p>
      </div>

      {FAQ_CATEGORIES.map((cat) => {
        const items = FAQ_ITEMS.filter((i) => i.category === cat.id);
        if (items.length === 0) return null;
        return (
          <div key={cat.id} className="faq-category-group">
            <h3 className="faq-category-title">{cat.label}</h3>
            {items.map((item) => (
              <FaqCard key={item.id} item={item} />
            ))}
          </div>
        );
      })}
    </section>
  );
}
