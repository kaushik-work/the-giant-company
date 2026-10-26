import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { Crumbs, CtaBand } from "@/components/SeoBlocks";
import { cities } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Where we work: software development across India",
  description: "A Bengaluru software studio working with businesses in Bengaluru, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune and more, remotely and worldwide.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Crumbs items={[{ name: "Locations", href: "/locations" }]} />
            <h1 className="page-title">Built in Bengaluru, <em>working everywhere</em></h1>
            <p className="section-sub">We work remotely with clients across India and worldwide. Pick your city to see how our services apply.</p>
          </div>
        </section>
        <section className="section pt0">
          <div className="container loc-grid">
            {cities.map((c) => (
              <div className="loc-card" key={c.slug}>
                <h2>{c.name}</h2>
                <p>{c.region}</p>
                <ul>{services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}/${c.slug}`}>{s.title}</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </section>
        <CtaBand href="/contact?from=%2Flocations" />
      </main>
    </>
  );
}
