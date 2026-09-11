"use client";

import { useState } from "react";
import { CTAButton } from "@/components/cta-button";

const faqs = [
  { q: "Can I apply from Pakistan?", a: "Yes. International students can apply subject to the eligibility and admission rules of the selected university and programme.", icon: "🇵🇰" },
  { q: "Can I apply for Bachelor's and Master's programmes?", a: "Yes. The available level depends on the university, programme and your academic qualification.", icon: "🎓" },
  { q: "Do I need IELTS?", a: "Language requirements vary by university and programme. The exact accepted evidence must be checked before application.", icon: "📝" },
  { q: "Can you guarantee admission or a visa?", a: "No. Admission is decided by the university and visa decisions are made by the competent authorities.", icon: "⚖️" },
  { q: "Can you help with documents?", a: "Yes. We can guide applicants on the documents required for the selected university and application.", icon: "📄" },
  { q: "What is the cost of studying in Europe?", a: "Tuition and living costs vary substantially by country, university, programme and city. We provide a course-specific estimate rather than one universal figure.", icon: "💰" },
  { q: "Can I work while studying in Europe?", a: "Most European countries allow international students to work part-time during their studies (typically 20 hours/week). Rules vary by country. We can guide you on the specifics for your chosen destination.", icon: "💼" },
  { q: "Is there a post-study work permit?", a: "Yes — many countries offer post-study work visas. For example: UK (Graduate Route, 2 years), Germany (18-month job seeker visa), Canada (PGWP up to 3 years). We provide guidance on work permit options for your destination.", icon: "🛂" },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy py-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="animate-blob-delay absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="container-page relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Frequently Asked Questions
          </span>
          <h1 className="mt-6 font-serif text-5xl font-bold sm:text-6xl lg:text-7xl">
            Your questions, <span className="shimmer-text">answered.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Everything you may want to know before planning your European education with Dijon Consultants.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#FAF8F2" />
          </svg>
        </div>
      </section>

      {/* ── FAQ LIST ── */}
      <section className="container-page max-w-4xl py-24">
        <div className="space-y-4">
          {faqs.map(({ q, a, icon }, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={q}
                className={`gradient-border overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 ${isOpen ? "shadow-lg ring-1 ring-navy/10" : ""}`}
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl transition-colors group-hover:bg-navy/10">
                    {icon}
                  </span>
                  <span className="flex-1 font-serif text-lg font-bold text-navy sm:text-xl">{q}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-navy transition-all duration-300 ${isOpen ? "rotate-45 bg-navy text-white border-navy" : ""}`}>
                    +
                  </span>
                </button>

                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4">
                      <p className="max-w-3xl leading-7 text-slate-600">{a}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-navy p-10 text-center text-white relative">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
          <p className="text-3xl">🤔</p>
          <h2 className="mt-4 font-serif text-2xl font-bold">Still have questions?</h2>
          <p className="mt-3 text-slate-300">Our team is happy to answer anything not covered above — completely free.</p>
          <CTAButton href="/contact" variant="light" className="mt-7 animate-pulse-glow">
            Ask Us Directly →
          </CTAButton>
        </div>
      </section>
    </>
  );
}
