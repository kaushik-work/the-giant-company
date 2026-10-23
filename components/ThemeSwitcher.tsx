"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "noir", label: "Black & red", color: "linear-gradient(135deg,#0b0b0f 45%,#ff3131 55%)" },
  { id: "bloom", label: "Navy, cobalt & red", color: "linear-gradient(135deg,#021861 35%,#255dce 35% 65%,#de1110 65%)" },
  { id: "earth", label: "Charcoal & amber", color: "linear-gradient(135deg,#090907 35%,#6c5636 35% 65%,#b99d73 65%)" },
];

// Temporary picker for choosing the final palette. Remove once a theme is chosen.
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("noir");
  useEffect(() => setTheme(document.documentElement.dataset.theme || "noir"), []);
  const pick = (id: string) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try { localStorage.setItem("theme", id); } catch {}
  };
  return (
    <div className="theme-switch" role="group" aria-label="Preview colour theme">
      <span>Theme</span>
      {themes.map((t) => (
        <button key={t.id} aria-label={t.label} title={t.label} aria-pressed={theme === t.id} style={{ background: t.color }} onClick={() => pick(t.id)} />
      ))}
    </div>
  );
}
