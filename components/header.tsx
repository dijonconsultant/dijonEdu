"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CTAButton } from "@/components/cta-button";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Scholarships", "/scholarship"],
  ["How It Works", "/how-it-works"],
  ["Updates", "/updates"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] min-h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center" onClick={closeMenu}>
          <Image
            src="/team/dijon_cons_logo.png"
            alt="Dijon Consultant"
            width={384}
            height={120}
            priority
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:gap-1.5 text-[13px] 2xl:text-sm font-medium text-slate-700 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative whitespace-nowrap rounded-lg px-2.5 py-1.5 2xl:px-3 2xl:py-2 transition-colors hover:bg-slate-100 hover:text-navy group"
            >
              {label}
              <span className="absolute bottom-1 left-2.5 right-2.5 h-0.5 scale-x-0 rounded-full bg-gold transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right CTA actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:00351925152120"
            className="whitespace-nowrap text-[13px] 2xl:text-sm font-medium text-slate-600 hover:text-navy transition-colors inline-flex items-center gap-1.5"
          >
            <span>📞</span>
            <span>Call Us</span>
          </a>
          <CTAButton
            href="/contact"
            className="whitespace-nowrap px-4 py-2 text-xs 2xl:text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
          >
            Free Consultation
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl p-2 text-navy transition-all duration-200 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* ── Mobile menu — full screen slide-down ── */}
      <div
        className={`lg:hidden absolute inset-x-0 top-full z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {/* Clean white panel — no blur/dark bg */}
        <div className="bg-white border-b border-slate-200 shadow-2xl">
          {/* Brand accent bar at top */}
          <div className="h-1 w-full bg-gradient-to-r from-navy via-gold to-navy" />

          <nav className="px-5 pt-4 pb-3 flex flex-col">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-slate-800 transition-all duration-150 hover:bg-slate-50 hover:pl-6 hover:text-gold border-b border-slate-100 last:border-0"
              >
                {label}
                <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* CTA section */}
          <div className="px-5 pt-2 pb-6 flex flex-col gap-3 bg-slate-50/60">
            <a
              href="tel:00351925152120"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-gold/40 hover:text-gold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-base">📞</span>
              <div>
                <p className="text-xs text-slate-400 leading-none mb-0.5">Call us</p>
                <p className="font-semibold text-slate-800">00351 92 5152 120</p>
              </div>
            </a>
            <CTAButton href="/contact" onClick={closeMenu} className="w-full justify-center py-3 text-sm font-semibold">
              Free Consultation →
            </CTAButton>
          </div>
        </div>

        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 -z-10 bg-black/20"
          onClick={closeMenu}
        />
      </div>
    </header>
  );
}
