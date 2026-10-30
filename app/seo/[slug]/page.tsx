import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqBlock, LinkChips, SeoHero, Tiles } from "@/components/SeoBlocks";
import { contactHref } from "@/lib/seo";
import { disciplines, getDiscipline } from "@/lib/seo-disciplines";
import { seoPackages } from "@/lib/seo-packages";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return disciplines.map((d) => ({ slug: d.slug }));
}
type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const d = getDiscipline((await params).slug);
  if (!d) return {};
  return { title: d.title, description: d.description, alternates: { canonical: `/seo/${d.slug}` }, openGraph: { url: `/seo/${d.slug}`, title: `${d.title} | The Gaint Company`, description: d.description } };
}

export default async function DisciplinePage({ params }: P) {
  const d = getDiscipline((await params).slug);
  if (!d) notFound();
  const path = `/seo/${d.slug}`;
  const cta = contactHref("seo-services", path);
  const pkg = seoPackages.find((p) => p.slug === d.package)!;
  const others = disciplines.filter((x) => x.slug !== d.slug);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${d.name} (${d.short})`,
        description: d.description,
        url: `${SITE_URL}${path}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
        serviceType: d.name,
        hasOfferCatalog: { "@type": "OfferCatalog", name: `${d.short} work`, itemListElement: d.work.map((w) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: w.title, description: w.text } })) },
      },
      {
        "@type": "DefinedTerm",
        name: d.short,
        description: d.definition,
        url: `${SITE_URL}${path}`,
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <SeoHero crumbs={[{ name: "SEO packages", href: "/seo" }, { name: d.short, href: path }]} title={d.h1} sub={d.definition} cta={cta} ctaLabel="Book a free audit" />

        <section className="section pt0">
          <div className="container">
            <dl className="seo-facts">
              <div><dt>Stands for</dt><dd>{d.name}</dd></div>
              <div><dt>Goal</dt><dd>{d.goal}</dd></div>
              <div><dt>Where it shows</dt><dd>{d.where}</dd></div>
            </dl>
          </div>
        </section>

        <section className="section alt">
          <div className="container narrow head-center">
            <h2>Why <em>{d.short}</em> matters</h2>
            <ul className="checklist seo-promises">{d.why.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </section>

        <section className="section">
          <div className="container head-center">
            <h2>What we do for <em>{d.short}</em></h2>
            <div className="mt"><Tiles items={d.work} span={2} /></div>
          </div>
        </section>

        <section className="section alt">
          <div className="container narrow head-center">
            <h2>The {d.short} <em>checklist</em></h2>
            <p className="section-sub">What we check and fix on every site.</p>
            <ul className="checklist seo-promises">{d.checklist.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </section>

        <section className="section">
          <div className="container head-center">
            <h2>How we <em>measure</em> it</h2>
            <div className="mt"><Tiles items={d.measures} span={3} /></div>
          </div>
        </section>

        <section className="section alt">
          <div className="container narrow head-center">
            <h2>Mistakes we <em>avoid</em></h2>
            <ul className="checklist seo-promises">{d.mistakes.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </section>

        <section className="section">
          <div className="container narrow head-center">
            <h2>Where it fits in our <em>packages</em></h2>
            <p className="section-sub">{d.short} work is delivered through <Link href={`/seo#${pkg.slug}`}>{pkg.name}</Link>: {pkg.summary} All four packages share the same foundations, so you do not need three separate strategies.</p>
            <div className="hero-cta center-cta mt"><Link className="btn btn-red" href="/seo">See all packages</Link></div>
          </div>
        </section>

        <FaqBlock items={d.faqs} />
        <LinkChips
          heading="Related"
          links={[
            ...others.map((o) => ({ label: `${o.short}: ${o.name}`, href: `/seo/${o.slug}` })),
            { label: "SEO vs GEO vs AEO", href: "/blog/seo-vs-geo-vs-aeo" },
            { label: "SEO service overview", href: "/services/seo-services" },
          ]}
        />
        <CtaBand href={cta} title={`Start with a free ${d.short} review`} />
      </main>
    </>
  );
}
