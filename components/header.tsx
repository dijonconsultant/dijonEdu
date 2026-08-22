"use client";

import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "@/components/cta-button";

const links = [
  ["Home", "/"], ["About Us", "/about"], ["Services", "/services"],
  ["How It Works", "/how-it-works"], ["FAQ", "/faq"], ["Contact", "/contact"]
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return <header className="relative border-b border-slate-200 bg-white">
    <div className="container-page flex min-h-20 items-center justify-between gap-5">
      <Link href="/" className="font-serif text-xl font-bold text-navy" onClick={closeMenu}>Dijon <span className="text-slate-500">Consultants</span></Link>
      <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 xl:flex">
        {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-navy">{label}</Link>)}
      </nav>
      <div className="hidden xl:block"><CTAButton href="/contact" className="px-4 py-2">Consultation €200</CTAButton></div>
      <button type="button" className="rounded-md p-2 text-navy xl:hidden" aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span className="block h-0.5 w-6 bg-current" /><span className="my-1.5 block h-0.5 w-6 bg-current" /><span className="block h-0.5 w-6 bg-current" />
      </button>
    </div>
    {isOpen && <div className="absolute inset-x-0 top-full z-20 border-b border-slate-200 bg-white px-5 py-5 shadow-lg xl:hidden"><nav className="container-page flex flex-col gap-4 text-sm font-medium text-navy">{links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}<CTAButton href="/contact" onClick={closeMenu} className="mt-2 w-full">Consultation €200</CTAButton></nav></div>}
  </header>;
}
