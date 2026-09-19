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
            src="/dijon-consultant-logo.svg"
            alt="Dijon Consultant"
            width={384}
            height={120}
            priority
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop nav - single line, never wraps */}
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
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg p-1.5 text-navy transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-20 border-b border-slate-200 bg-white/98 px-5 py-5 shadow-xl backdrop-blur-xl lg:hidden">
          <nav className="container-page flex flex-col gap-1">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-navy transition hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 mt-2 flex flex-col gap-2">
              <a
                href="tel:00351925152120"
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2"
              >
                📞 Call Us (00351 92 5152 120)
              </a>
              <CTAButton href="/contact" onClick={closeMenu} className="w-full justify-center">
                Free Consultation
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
