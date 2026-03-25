"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative max-w-5xl mx-auto py-20 px-4">
      {/* Section header */}
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
          Support
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-foreground mt-2 mb-3">
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground text-base max-w-md mx-auto">
          Everything you need to know before you buy. Can't find what you're
          looking for?{" "}
          <a
            href="/contact-us"
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Just ask us.
          </a>
        </p>
      </div>

      {/* FAQ grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-200 overflow-hidden
                ${
                  isOpen
                    ? "border-primary/40 bg-primary/5 dark:bg-primary/10 shadow-sm"
                    : "border-border bg-background hover:border-border/80 hover:bg-muted/30"
                }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full text-left flex justify-between items-start gap-4 px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
              >
                <span
                  className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold transition-all duration-200
                    ${
                      isOpen
                        ? "border-primary text-primary rotate-45"
                        : "border-border text-muted-foreground"
                    }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Still have questions? We respond to every message within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:support@keyversely.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Email support
          </a>
          <a
            href="/help-center"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-semibold hover:bg-muted/50 transition-colors"
          >
            Visit Help Center
          </a>
        </div>
      </div>
    </section>
  );
}
