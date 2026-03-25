"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-background hover:bg-muted/50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-foreground">
                {item.question}
              </span>
              <span className="text-muted-foreground shrink-0 text-lg leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 py-4 bg-muted/30 text-base text-muted-foreground leading-relaxed border-t border-border">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
