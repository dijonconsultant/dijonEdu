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
      main.querySelectorAll(".team-profile").forEach(observe);
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