"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "noir", label: "Black & red", color: "linear-gradient(135deg,#0b0b0f 45%,#ff3131 55%)" },
  { id: "mint", label: "Mint", color: "linear-gradient(135deg,#0fa968,#84cc16)" },
  { id: "sunny", label: "Sunny", color: "linear-gradient(135deg,#f26b00,#ffb000)" },
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
