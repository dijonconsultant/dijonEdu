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
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });

    const observe = (element: Element) => {
      if (!observed.has(element)) {
        observed.add(element);
        observer.observe(element);
      }
    };

    const observeContent = () => {
      Array.from(main.children).forEach((child) => {
        if (child.tagName === "SECTION") observe(child);
      });

      // Give cards and forms the same staggered entrance used by the Services page.
      // The class is added here so server-rendered content remains visible if JavaScript
      // is unavailable.
      const revealables = main.querySelectorAll(".team-profile, article:not(.team-profile), form, section .grid > a, section .grid > li, .reveal-item, .dest-card, .why-choose-card, .update-card");
      revealables.forEach((element, index) => {
        if (!element.classList.contains("team-profile")) {
          element.classList.add("reveal-card");
          (element as HTMLElement).style.setProperty("--reveal-delay", `${(index % 6) * 80}ms`);
        }
        observe(element);
      });
    };

    observeContent();
    const mutations = new MutationObserver(observeContent);
    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
