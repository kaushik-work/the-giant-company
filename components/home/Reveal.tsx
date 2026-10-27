"use client";

import { useEffect } from "react";

// Fades sections in as they scroll into view. Content is fully visible without JS or with reduced motion.
export default function Reveal() {
  useEffect(() => {
    const root = document.querySelector(".hx");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    root.classList.add("fx-on");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
