"use client";

import { useState } from "react";
import Link from "next/link";
import { CTAButton } from "@/components/cta-button";

const previewFaqs = [
  {
    q: "Can I apply from Pakistan without IELTS?",
    a: "Many universities in Poland, Hungary, and Portugal accept an English Proficiency Certificate (Medium of Instruction - MOI) from your previous degree if it was taught in English. However, requirements vary by institution and programme; our team verifies individual university exemptions for you.",
    icon: "📝",
    tag: "Eligibility"
  },
  {
    q: "What are the upcoming deadlines for 2026 / 2027 intakes?",
    a: "Spring intakes (February/March starts) accept applications between September and December. Fall 2026 intakes (September/October starts) open between January and May. We recommend starting at least 4–6 months in advance to complete degree attestations and visa booking comfortably.",
    icon: "📅",
    tag: "Timeline"
  },
  {
    q: "How much bank statement is required for European student visas?",
    a: "Proof of funds depends on the destination. For example, Germany requires a blocked account of approximately €11,208 to €11,904, while Poland and Portugal assess sponsor bank statements covering 1 year of estimated living costs (typically €6,000–€9,000). We assist with source of funds documentation and consular verification.",
    icon: "💶",
    tag: "Finance & Visa"
  },
  {
    q: "Can international students work legally while studying?",
    a: "Yes. Most European countries permit international students to work part-time (up to 20 hours per week during semesters and full-time during breaks). In Germany, the limit is 140 full days per year. Many countries also provide 1–2 year post-study work search visas upon graduation.",
    icon: "💼",
    tag: "Work Rights"
  }
];

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-gold">Got Questions?</span>
          <h2 className="section-title mt-3">Frequently Asked Questions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500 leading-relaxed">
            Quick answers to the most common queries from students and parents planning their European education from Pakistan.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {previewFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`gradient-border overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                  isOpen ? "shadow-lg ring-1 ring-gold/20" : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl">
                      {faq.icon}
                    </span>
                    <div>
                      <span className="inline-block mb-1 text-xs font-semibold uppercase tracking-wider text-gold">
                        {faq.tag}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-navy sm:text-xl">
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-navy font-bold transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-navy text-white border-navy" : "hover:border-gold hover:text-gold"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                      <p className="max-w-3xl leading-relaxed text-slate-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div>
            <h4 className="font-serif text-lg font-bold text-navy">Looking for more detailed guidance?</h4>
            <p className="text-sm text-slate-500 mt-1">Browse our complete question bank covering scholarships, embassy interviews, accommodation, and arrival tips.</p>
          </div>
          <CTAButton href="/faq" variant="secondary" className="shrink-0 text-sm">
            View All FAQs (8+ Questions) →
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
