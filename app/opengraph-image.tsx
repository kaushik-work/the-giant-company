import { ImageResponse } from "next/og";

export const alt = "The Gaint Company — Software that automates your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 900, letterSpacing: -1 }}>
          <span>THE&nbsp;</span><span style={{ color: "#2563ff" }}>GAINT</span><span>&nbsp;COMPANY</span>
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 40, letterSpacing: -3 }}>
          Software that automates your business.
        </div>
        <div style={{ fontSize: 30, color: "#555", marginTop: 32 }}>Custom software · CRMs · AI chatbots · Bengaluru</div>
      </div>
    ),
    size
  );
}
