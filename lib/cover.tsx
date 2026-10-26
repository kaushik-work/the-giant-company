import { accentFor } from "./blog-theme";

export const COVER = { width: 1200, height: 630 };

// Cover art for a blog post. With a title it is the social share image; without, it is the bare card art.
export function CoverArt({ cluster, title }: { cluster: string; title?: string }) {
  const accent = accentFor(cluster);
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0b0b0f", overflow: "hidden", fontFamily: "sans-serif" }}>
      <div style={{ position: "absolute", width: 900, height: 900, borderRadius: 450, left: -260, top: -380, background: `radial-gradient(circle, ${accent}cc 0%, ${accent}00 68%)`, display: "flex" }} />
      <div style={{ position: "absolute", width: 760, height: 760, borderRadius: 380, right: -240, bottom: -380, background: `radial-gradient(circle, ${accent}88 0%, ${accent}00 66%)`, display: "flex" }} />
      {[300, 480, 660].map((s) => (
        <div key={s} style={{ position: "absolute", width: s, height: s, borderRadius: s / 2, right: 120 - s / 2 + 150, top: 315 - s / 2, border: `2px solid ${accent}55`, display: "flex" }} />
      ))}
      <div style={{ position: "absolute", width: 120, height: 120, borderRadius: 60, right: 210, top: 255, background: accent, opacity: 0.9, display: "flex" }} />
      <div style={{ position: "absolute", left: 64, top: 56, display: "flex", padding: "10px 22px", borderRadius: 999, background: "rgba(255,255,255,0.14)", color: "#fff", fontSize: 26, fontWeight: 700 }}>{cluster}</div>
      {title && (
        <div style={{ position: "absolute", left: 64, bottom: 110, width: 900, display: "flex", color: "#fff", fontSize: title.length > 70 ? 54 : 64, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>{title}</div>
      )}
      <div style={{ position: "absolute", left: 64, bottom: 48, display: "flex", color: "rgba(255,255,255,0.7)", fontSize: 26, fontWeight: 700 }}>THE GAINT COMPANY</div>
    </div>
  );
}
