import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqBlock, LinkChips, Proof, SeoHero, Tiles } from "@/components/SeoBlocks";
import { contactHref, getIndustry, industries, industryFaqs, useCase } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return industries.flatMap((i) => services.map((s) => ({ industry: i.slug, slug: s.slug })));
}
type P = { params: Promise<{ industry: string; slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { industry, slug } = await params;
  const i = getIndustry(industry), s = getService(slug);
  if (!i || !s) return {};
  const path = `/industries/${i.slug}/${s.slug}`;
  const title = `${s.title} for ${i.name}`;
  const description = `${useCase(s, i)} Built by a Bengaluru studio working with ${i.who} across India and worldwide.`;
  return { title, description, alternates: { canonical: path }, openGraph: { url: path, title: `${title} | The Gaint Company`, description } };
}

export default async function IndustryServicePage({ params }: P) {
  const { industry, slug } = await params;
  const i = getIndustry(industry), s = getService(slug);
  if (!i || !s) notFound();
  const path = `/industries/${i.slug}/${s.slug}`;
  const cta = contactHref(s.slug, path);
  const proof = [...new Set([...i.proof, ...s.related])];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${s.title} for ${i.name}`,
    description: useCase(s, i),
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    audience: { "@type": "Audience", audienceType: i.who },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <SeoHero
          crumbs={[{ name: "Industries", href: "/industries" }, { name: i.name, href: `/industries/${i.slug}` }, { name: s.title, href: path }]}
          title={<>{s.title} for <em>{i.name.toLowerCase()}</em></>}
          sub={`${useCase(s, i)} ${s.intro}`}
          cta={cta}
        />
        <section className="section pt0">
          <div className="container head-center">
            <h2>The problems this fixes</h2>
            <p className="section-sub">Common in {i.who}.</p>
            <div className="mt"><Tiles span={2} items={i.pains.map((p) => ({ title: p, text: "" }))} /></div>
          </div>
        </section>
        <section className="section alt">
          <div className="container head-center">
            <h2>What we build</h2>
            <div className="mt"><Tiles items={s.points} /></div>
            <ul className="chips center-chips">{s.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>
        <Proof slugs={proof} heading={i.proof.length ? "Related work" : "Closest work we have shipped"} />
        <FaqBlock items={industryFaqs(s, i)} />
        <LinkChips heading={`More for ${i.name.toLowerCase()}`} links={services.filter((x) => x.slug !== s.slug).map((x) => ({ label: x.title, href: `/industries/${i.slug}/${x.slug}` }))} />
        <LinkChips heading={`${s.title} for other industries`} links={industries.filter((x) => x.slug !== i.slug).map((x) => ({ label: x.name, href: `/industries/${x.slug}/${s.slug}` }))} />
        <CtaBand href={cta} />
      </main>
    </>
  );
}
