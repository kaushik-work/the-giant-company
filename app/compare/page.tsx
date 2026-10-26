import type { Metadata } from "next";
import Header from "@/components/Header";
import { Crumbs, CtaBand, Tiles } from "@/components/SeoBlocks";
import { comparisons } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Comparisons: build vs buy and more",
  description: "Honest comparisons to help you choose: custom vs off-the-shelf CRM, build vs buy, WordPress vs custom, in-house vs studio, AI vs rule-based bots.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Crumbs items={[{ name: "Compare", href: "/compare" }]} />
            <h1 className="page-title">Make the <em>right call</em></h1>
            <p className="section-sub">Straight comparisons, including when the cheaper option is the right one.</p>
          </div>
        </section>
        <section className="section pt0">
          <div className="container">
            <Tiles span={3} items={comparisons.map((c) => ({ title: c.title, text: c.intro, href: `/compare/${c.slug}` }))} />
          </div>
        </section>
        <CtaBand href="/contact?from=%2Fcompare" />
      </main>
    </>
  );
}
