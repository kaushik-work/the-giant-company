import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { CtaBand, FaqBlock, LinkChips, SeoHero } from "@/components/SeoBlocks";
import { comparisons, contactHref, getComparison } from "@/lib/seo";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}
type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const c = getComparison((await params).slug);
  if (!c) return {};
  return { title: c.title, description: c.intro, alternates: { canonical: `/compare/${c.slug}` }, openGraph: { url: `/compare/${c.slug}`, title: `${c.title} | The Gaint Company`, description: c.intro } };
}

export default async function ComparePage({ params }: P) {
  const c = getComparison((await params).slug);
  if (!c) notFound();
  const s = getService(c.service)!;
  const path = `/compare/${c.slug}`;
  const cta = contactHref(c.service, path);
  return (
    <>
      <Header />
      <main>
        <SeoHero crumbs={[{ name: "Compare", href: "/compare" }, { name: c.title, href: path }]} title={c.h1} sub={c.intro} cta={cta} ctaLabel="Talk it through" />
        <section className="section pt0">
          <div className="container narrow">
            <div className="cmp" role="table">
              <div className="cmp-row head" role="row"><span /><strong>{c.a}</strong><strong>{c.b}</strong></div>
              {c.rows.map(([k, a, b]) => (
                <div className="cmp-row" role="row" key={k}><span>{k}</span><p>{a}</p><p>{b}</p></div>
              ))}
            </div>
          </div>
        </section>
        <section className="section alt">
          <div className="container narrow">
            <div className="cmp-choose">
              <div>
                <h3>Choose {c.a.toLowerCase()} if</h3>
                <ul>{c.chooseA.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div>
                <h3>Choose {c.b.toLowerCase()} if</h3>
                <ul>{c.chooseB.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
            <p className="cmp-verdict"><strong>Our take:</strong> {c.verdict}</p>
          </div>
        </section>
        <FaqBlock items={c.faqs} />
        <LinkChips heading="Related" links={[{ label: s.title, href: `/services/${s.slug}` }, ...comparisons.filter((x) => x.slug !== c.slug).slice(0, 4).map((x) => ({ label: x.title, href: `/compare/${x.slug}` }))]} />
        <CtaBand href={cta} />
      </main>
    </>
  );
}
