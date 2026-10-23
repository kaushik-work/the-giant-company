import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Gaint Company — Software Development",
  description:
    "Custom software, CRMs, web platforms and workflow automation built in Bengaluru.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
