"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const observed = new WeakSet<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    const observeSections = () => {
      Array.from(main.children).forEach((child) => {
        if (child.tagName === "SECTION" && !observed.has(child)) {
          observed.add(child);
          observer.observe(child);
        }
      });
    };

    observeSections();
    const mutations = new MutationObserver(observeSections);
    mutations.observe(main, { childList: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
