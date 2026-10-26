import type { Metadata } from "next";
import Header from "@/components/Header";
import { CtaBand, Crumbs, Tiles } from "@/components/SeoBlocks";
import { industries, hasIndustryHub } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Industries we build software for",
  description: "Custom software, CRMs, websites and automation for travel, education, real estate, export-import, manufacturing, healthcare, retail, logistics and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Crumbs items={[{ name: "Industries", href: "/industries" }]} />
            <h1 className="page-title">Software for <em>your industry</em></h1>
            <p className="section-sub">The problems repeat across sectors. See how our services apply to yours.</p>
          </div>
        </section>
        <section className="section pt0">
          <div className="container">
            <Tiles span={2} items={industries.filter((i) => hasIndustryHub(i.slug)).map((i) => ({ title: i.name, text: `For ${i.who}.`, href: `/industries/${i.slug}` }))} />
          </div>
        </section>
        <CtaBand href="/contact?from=%2Findustries" />
      </main>
    </>
  );
}
