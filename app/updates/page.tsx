"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { updatesData } from "@/data/updates";
import { CTAButton } from "@/components/cta-button";

const categories = [
  { id: "all", label: "All Updates" },
  { id: "visa-rules", label: "Visa Rule Changes" },
  { id: "intake-deadlines", label: "Intake Deadlines" },
  { id: "scholarships", label: "Scholarship News" },
  { id: "work-rights", label: "Work Rights" },
];

export default function UpdatesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUpdates = useMemo(() => {
    return updatesData.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-navy py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="animate-blob-delay absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container-page relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Knowledge &amp; Announcements Hub
          </span>
          <h1 className="mt-6 font-serif text-5xl font-bold sm:text-6xl">
            Latest Updates &amp; <span className="shimmer-text">Insights</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Crucial updates on European student visa rules, upcoming intake deadlines, government scholarships, and post-study opportunities for students from Pakistan.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#F7F7F5" />
          </svg>
        </div>
      </section>

      {/* ── CONTROLS & ARTICLES ── */}
      <section className="container-page py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "bg-gold text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search updates or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 pl-10 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <span className="absolute left-3.5 top-3 text-slate-400 text-sm">🔍</span>
          </div>
        </div>

        {/* Updates Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((item) => (
              <article
                key={item.id}
                className="gradient-border group flex flex-col justify-between rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${item.categoryBadgeBg} ${item.categoryBadgeText}`}
                    >
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{item.readTime}</span>
                  </div>

                  <h2 className="mt-4 font-serif text-xl font-bold leading-snug text-navy group-hover:text-gold transition-colors">
                    <Link href={`/updates/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.excerpt}
                  </p>

                  <div className="mt-5 space-y-1.5 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-600">
                    <p className="font-semibold text-navy">Key Highlights:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {item.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <li key={idx} className="line-clamp-2">{takeaway}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{item.date}</span>
                  <Link
                    href={`/updates/${item.slug}`}
                    className="font-semibold text-gold inline-flex items-center gap-1 group-hover:underline"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-4xl">🔍</p>
              <h3 className="mt-3 font-serif text-xl font-bold text-navy">No updates match your search</h3>
              <p className="mt-1 text-sm text-slate-500">Try changing your search terms or clearing category filters.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA banner */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-navy p-10 text-center text-white relative">
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-gold/20 animate-spin-slow" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Free Profile Assessment</span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold">Unsure which deadline or visa pathway fits your profile?</h2>
          <p className="mt-3 max-w-xl mx-auto text-slate-300 text-sm sm:text-base">
            Our study abroad counselors review your transcripts, degrees, and budget to provide a tailored European roadmap.
          </p>
          <CTAButton href="/contact" variant="light" className="mt-8 animate-pulse-glow">
            Speak With An Advisor Free →
          </CTAButton>
        </div>
      </section>
    </>
  );
}
