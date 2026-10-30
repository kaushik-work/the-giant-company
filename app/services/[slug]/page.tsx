import type { Metadata } from "next";
import Skin from "@/components/Skin";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ProjectCard from "@/components/ProjectCard";
import { FaqBlock } from "@/components/SeoBlocks";
import { allServices, getService } from "@/lib/services";
import { getProject } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";
import { cities, contactHref, getIndustry, hasCityPage, hasIndustryHub } from "@/lib/seo";
import { CtaBand } from "@/components/SeoBlocks";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.seoTitle ?? `${s.title} in Bengaluru`,
    description: `${s.text} ${s.intro}`.slice(0, 300),
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { url: `/services/${s.slug}`, title: `${s.title} | The Gaint Company`, description: s.text },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = s.related.map(getProject).filter((p): p is NonNullable<typeof p> => !!p);
  const others = allServices.filter((x) => x.slug !== s.slug);
  const cta = contactHref(s.slug, `/services/${s.slug}`);
  const process = s.process ?? [
    { title: "Discover", text: "A call to understand your process, users and goals, and what success looks like." },
    { title: "Scope in writing", text: "A written scope, timeline and cost before any build begins, so there are no surprises." },
    { title: "Design", text: "Prototypes, data model and architecture you can react to early." },
    { title: "Build in short sprints", text: "Each sprint ends in a working demo, with a shared board to see progress at any time." },
    { title: "Launch and support", text: "Release, monitoring and support, with documentation so you are never locked in." },
  ];
  const industries = (s.industries ?? []).map((i) => getIndustry(i)).filter((i): i is NonNullable<typeof i> => !!i);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name: s.title, item: `${SITE_URL}/services/${s.slug}` },
        ],
      },
      {
        "@type": "Service",
        name: s.title,
        description: s.intro,
        url: `${SITE_URL}/services/${s.slug}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
        ...(s.slug === "seo-services" ? { serviceType: ["Search engine optimization", "Generative engine optimization", "Answer engine optimization", "Technical SEO", "Local SEO"] } : {}),
        ...(s.points.length ? { hasOfferCatalog: { "@type": "OfferCatalog", name: s.title, itemListElement: s.points.map((x) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: x.title, description: x.text } })) } } : {}),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <Skin />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Link href="/services" className="back">← All services</Link>
            <div className="icon-chip hero-chip"><Icon name={s.icon} size={30} /></div>
            <h1 className="page-title">{s.title}</h1>
            <p className="section-sub">{s.intro}</p>
            <div className="hero-cta center-cta">
              <Link className="btn btn-red" href={cta}>Discuss your project</Link>
              <Link className="link-arrow" href="/projects">See our work</Link>
            </div>
          </div>
        </section>

        {s.body && (
          <section className="section pt0">
            <div className="container narrow">
              <div className="prose">{s.body.map((para) => <p key={para.slice(0, 30)}>{para}</p>)}</div>
            </div>
          </section>
        )}

        <section className="section pt0">
          <div className="container head-center">
            <h2>What we build</h2>
            <div className="bento compact mt">
              {s.points.map((p, i) => (
                <article className="tile" style={{ "--span": 3 } as React.CSSProperties} key={p.title}>
                  <span className="num">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
            <ul className="chips center-chips">{s.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>

        {s.deliverables && (
          <section className="section alt">
            <div className="container narrow">
              <h2 className="head-center">What you get</h2>
              <ul className="svc-list">{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container head-center">
            <h2>How we <em>work</em></h2>
            <div className="mt"><ol className="svc-steps">{process.map((st, i) => <li key={st.title}><span>{i + 1}</span><div><h3>{st.title}</h3><p>{st.text}</p></div></li>)}</ol></div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section alt">
            <div className="container head-center">
              <h2>Where we&apos;ve <em>done it</em></h2>
              <div className="bento mt">
                {related.map((p) => <ProjectCard key={p.slug} p={p} span={related.length === 1 ? 6 : related.length === 2 ? 3 : 2} />)}
              </div>
            </div>
          </section>
        )}

        {industries.length > 0 && (
          <section className="section pt0">
            <div className="container head-center">
              <h2>Industries we build for</h2>
              <ul className="chips center-chips">
                {industries.map((i) => <li key={i.slug}>{hasIndustryHub(i.slug) ? <Link href={`/industries/${i.slug}`}>{i.name}</Link> : i.name}</li>)}
              </ul>
            </div>
          </section>
        )}

        {s.costFactors && (
          <section className="section alt">
            <div className="container narrow">
              <h2 className="head-center">What affects the cost</h2>
              <p className="section-sub head-center-sub">We do not publish a single price, because it would mislead. These are the things that move it. We agree scope and cost in writing before any build starts.</p>
              <ul className="svc-list">{s.costFactors.map((d) => <li key={d}>{d}</li>)}</ul>
              <div className="hero-cta center-cta mt"><Link className="btn btn-red" href={cta}>Get a scoped estimate</Link></div>
            </div>
          </section>
        )}

        {s.faqs && <FaqBlock items={s.faqs} />}

        {hasCityPage(s.slug) && (
        <section className="section pt0">
          <div className="container head-center">
            <h2>{s.title} across India</h2>
            <p className="section-sub">Built in Bengaluru, delivered remotely to clients across India and worldwide.</p>
            <ul className="chips center-chips">
              {cities.map((c) => <li key={c.slug}><Link href={`/services/${s.slug}/${c.slug}`}>{c.name}</Link></li>)}
            </ul>
          </div>
        </section>
        )}

        <section className="section pt0">
          <div className="container head-center">
            <h2>More services</h2>
            <ul className="chips center-chips">
              {others.map((o) => <li key={o.slug}><Link href={`/services/${o.slug}`}>{o.title}</Link></li>)}
            </ul>
          </div>
        </section>

        <CtaBand href={cta} />
      </main>
    </>
  );
}
