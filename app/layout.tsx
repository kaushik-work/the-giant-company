import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import MobileBar from "@/components/MobileBar";
import Footer from "@/components/Footer";
import { contact } from "@/lib/data";
import { site, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Software Development Company in Bengaluru | The Gaint Company",
    template: "%s | The Gaint Company",
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { siteName: site.name, locale: site.locale, type: "website", url: SITE_URL, title: "The Gaint Company — Software that automates your business", description: site.description },
  twitter: { card: "summary_large_image", title: "The Gaint Company — Software that automates your business", description: site.description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      image: `${SITE_URL}/opengraph-image`,
      description: site.description,
      telephone: contact.phoneHref,
      taxID: contact.gstin,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tejas Arcade, 527/B, Dr Rajkumar Rd, Rajajinagar",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560010",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 12.9875, longitude: 77.5523 },
      areaServed: [{ "@type": "City", name: "Bengaluru" }, { "@type": "Country", name: "India" }],
      founder: [{ "@type": "Person", name: "Kaushik RK" }, { "@type": "Person", name: "Manoj Vijay" }],
      knowsAbout: ["Custom software development", "CRM development", "AI chatbots", "Workflow automation", "SaaS development"],
      sameAs: ["https://campusgoindia.com"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <JsonLd data={schema} />
        {children}
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
