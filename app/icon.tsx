import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#ff3131", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, fontWeight: 900, borderRadius: 14 }}>
        G
      </div>
    ),
    size
  );
}
