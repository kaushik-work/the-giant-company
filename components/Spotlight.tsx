"use client";

import { useEffect } from "react";

// Light-and-shadow effect: tiles get a soft spotlight that follows the cursor.
export default function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const sel = ".tile, .pcard, .info-card, .card, .steps li, .process-step, .trust-card, .glass-stats > div, .pillars li";
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(sel);
      if (!el) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
