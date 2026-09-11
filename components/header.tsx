"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CTAButton } from "@/components/cta-button";

const links = [
  ["Home", "/"], ["About Us", "/about"], ["Services", "/services"],
  ["How It Works", "/how-it-works"], ["FAQ", "/faq"], ["Contact", "/contact"]
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
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="container-page flex min-h-20 items-center justify-between gap-5">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2" onClick={closeMenu}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white font-serif font-bold text-lg shadow-md transition-transform group-hover:scale-105">
            D
          </div>
          <span className="font-serif text-xl font-bold text-navy">
            Dijon <span className="text-gold">Consultants</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 xl:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-navy group"
            >
              {label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 rounded-full bg-gold transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a href="tel:00351925152120" className="text-sm font-medium text-slate-500 hover:text-navy transition-colors">
            📞 Call Us
          </a>
          <CTAButton href="/contact" className="px-5 py-2.5 text-sm shadow-md hover:shadow-lg transition-shadow">
            Free Consultation
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg p-1.5 text-navy transition hover:bg-slate-100 xl:hidden"
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
        <div className="absolute inset-x-0 top-full z-20 border-b border-slate-200 bg-white/95 px-5 py-5 shadow-xl backdrop-blur-xl xl:hidden">
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
            <CTAButton href="/contact" onClick={closeMenu} className="mt-3 w-full justify-center">
              Free Consultation
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  );
}
