"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ParallaxHero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Disable if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Parallax rate: moves at ~28% of scroll speed for subtle, premium depth
          const scroll = window.scrollY;
          if (scroll < 1000) {
            setOffsetY(scroll * 0.28);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute -inset-y-12 inset-x-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.06)`,
          willChange: "transform",
        }}
      >
        <Image
          src="/hero-campus.jpg"
          alt="European university campus"
          fill
          className="object-cover object-center opacity-45"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-[#1e232d]/85" />
    </div>
  );
}
