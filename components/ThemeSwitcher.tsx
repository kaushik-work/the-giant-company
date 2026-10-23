"use client";

import { useEffect, useState } from "react";

const themes = [
  { id: "sky", label: "Sky", color: "linear-gradient(135deg,#2563ff,#8b5cf6)" },
  { id: "mint", label: "Mint", color: "linear-gradient(135deg,#12b76a,#06b6d4)" },
  { id: "sunny", label: "Sunny", color: "linear-gradient(135deg,#ff7a00,#ff3d81)" },
];

// Temporary picker for choosing the final palette. Remove once a theme is chosen.
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("sky");
  useEffect(() => setTheme(document.documentElement.dataset.theme || "sky"), []);
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
