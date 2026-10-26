import type { Metadata } from "next";
import Header from "@/components/Header";
import { Crumbs, CtaBand, Tiles } from "@/components/SeoBlocks";
import { problems } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Solutions: problems we fix with software",
  description: "Automate quote emails, capture WhatsApp leads, replace Excel, parse documents and more. Practical software solutions from a Bengaluru studio.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Crumbs items={[{ name: "Solutions", href: "/solutions" }]} />
            <h1 className="page-title">Problems we <em>fix</em></h1>
            <p className="section-sub">Start from the headache. Each page shows how we solve it.</p>
          </div>
        </section>
        <section className="section pt0">
          <div className="container">
            <Tiles span={3} items={problems.map((p) => ({ title: p.title, text: p.problem, href: `/solutions/${p.slug}` }))} />
          </div>
        </section>
        <CtaBand href="/contact?from=%2Fsolutions" />
      </main>
    </>
  );
}
