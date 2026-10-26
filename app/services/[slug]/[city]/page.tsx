import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqBlock, LinkChips, Proof, SeoHero, Tiles } from "@/components/SeoBlocks";
import { cities, cityFaqs, cityServiceSlugs, contactHref, getCity, getIndustry, hasCityPage, hasIndustryPage, useCase } from "@/lib/seo";
import { getService, services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return services.filter((s) => hasCityPage(s.slug)).flatMap((s) => cities.map((c) => ({ slug: s.slug, city: c.slug })));
}

export const dynamicParams = false;

type P = { params: Promise<{ slug: string; city: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug, city } = await params;
  const s = getService(slug), c = getCity(city);
  if (!s || !c || !hasCityPage(s.slug)) return {};
  const path = `/services/${s.slug}/${c.slug}`;
  const title = `${s.title} in ${c.name}`;
  const description = `${s.title} for ${c.name} businesses. ${s.text} Built by a Bengaluru studio working with clients across India and worldwide.`;
  return { title, description, alternates: { canonical: path }, openGraph: { url: path, title: `${title} | The Gaint Company`, description } };
}

export default async function ServiceCityPage({ params }: P) {
  const { slug, city } = await params;
  const s = getService(slug), c = getCity(city);
  if (!s || !c || !hasCityPage(s.slug)) notFound();
  const path = `/services/${s.slug}/${c.slug}`;
  const cta = contactHref(s.slug, path);
  const sectors = c.sectors.map((id) => getIndustry(id)!);
  const proof = [...new Set([...s.related, ...sectors.flatMap((i) => i.proof)])];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${s.title} in ${c.name}`,
    description: s.intro,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "City", name: c.name },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <SeoHero
          crumbs={[{ name: "Services", href: "/services" }, { name: s.title, href: `/services/${s.slug}` }, { name: c.name, href: path }]}
          title={<>{s.title} for <em>{c.name}</em> businesses</>}
          sub={`${c.blurb} ${s.intro}`}
          cta={cta}
        />

        <section className="section pt0">
          <div className="container head-center">
            <h2>What it looks like in {c.name}</h2>
            <p className="section-sub">Three kinds of business we expect to meet in {c.name}, and what {s.title.toLowerCase()} does for each.</p>
            <div className="mt">
              <Tiles span={2} items={sectors.map((i) => ({ title: i.name, text: useCase(s, i), href: hasIndustryPage(i.slug, s.slug) ? `/industries/${i.slug}/${s.slug}` : undefined }))} />
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container head-center">
            <h2>What you get</h2>
            <div className="mt"><Tiles items={s.points} /></div>
            <ul className="chips center-chips">{s.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>

        <section className="section">
          <div className="container head-center">
            <h2>How we work with {c.name} teams</h2>
            <div className="mt">
              <Tiles span={2} items={[
                { title: "Remote, with real calls", text: `We are in Bengaluru and work with clients across India and worldwide. Workshops, demos and reviews happen on video, and we are happy to meet if you are in Bengaluru.` },
                { title: "Written scope first", text: "You get a proposal with scope, timeline and cost before any build starts, so there are no surprises." },
                { title: "Demos every sprint", text: "A working demo at the end of each short sprint and a shared board to see progress at any time." },
              ]} />
            </div>
          </div>
        </section>

        <Proof slugs={proof} heading="Work that applies" />
        <FaqBlock items={cityFaqs(s, c)} />

        <LinkChips heading={`${s.title} in other cities`} links={[...c.nearby, ...cities.map((x) => x.slug).filter((x) => x !== c.slug && !c.nearby.includes(x)).slice(0, 4)].map((x) => ({ label: getCity(x)!.name, href: `/services/${s.slug}/${x}` }))} />
        <LinkChips heading={`More services for ${c.name} businesses`} links={services.filter((x) => x.slug !== s.slug).map((x) => ({ label: x.title, href: cityServiceSlugs.includes(x.slug) ? `/services/${x.slug}/${c.slug}` : `/services/${x.slug}` }))} />
        <CtaBand href={cta} title={`Planning ${s.title.toLowerCase()} in ${c.name}?`} />
      </main>
    </>
  );
}
