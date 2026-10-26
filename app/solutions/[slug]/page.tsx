import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { CtaBand, FaqBlock, LinkChips, Proof, SeoHero, Tiles } from "@/components/SeoBlocks";
import { contactHref, getProblem, problems } from "@/lib/seo";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}
type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const p = getProblem((await params).slug);
  if (!p) return {};
  return { title: p.title, description: `${p.problem} ${p.cost}`.slice(0, 300), alternates: { canonical: `/solutions/${p.slug}` }, openGraph: { url: `/solutions/${p.slug}`, title: `${p.title} | The Gaint Company`, description: p.problem } };
}

export default async function SolutionPage({ params }: P) {
  const p = getProblem((await params).slug);
  if (!p) notFound();
  const s = getService(p.service)!;
  const path = `/solutions/${p.slug}`;
  const cta = contactHref(p.service, path);
  return (
    <>
      <Header />
      <main>
        <SeoHero crumbs={[{ name: "Solutions", href: "/solutions" }, { name: p.title, href: path }]} title={p.h1} sub={p.problem} cta={cta} />
        <section className="section pt0">
          <div className="container narrow head-center">
            <h2>What it costs you</h2>
            <p className="section-sub">{p.cost}</p>
          </div>
        </section>
        <section className="section alt">
          <div className="container head-center">
            <h2>How we fix it</h2>
            <div className="mt"><Tiles items={p.steps} /></div>
          </div>
        </section>
        <Proof slugs={p.proof} heading="Where we have done this" />
        <FaqBlock items={p.faqs} />
        <LinkChips heading="Related" links={[{ label: s.title, href: `/services/${s.slug}` }, ...problems.filter((x) => x.slug !== p.slug).slice(0, 4).map((x) => ({ label: x.title, href: `/solutions/${x.slug}` }))]} />
        <CtaBand href={cta} />
      </main>
    </>
  );
}
