import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ProjectCard from "@/components/ProjectCard";
import { getService, services } from "@/lib/services";
import { getProject } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: `${s.title} in Bengaluru`,
    description: `${s.text} ${s.intro}`.slice(0, 300),
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { url: `/services/${s.slug}`, title: `${s.title} | The Gaint Company`, description: s.text },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = s.related.map(getProject).filter((p): p is NonNullable<typeof p> => !!p);
  const others = services.filter((x) => x.slug !== s.slug);

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
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Link href="/services" className="back">← All services</Link>
            <div className="icon-chip hero-chip"><Icon name={s.icon} size={30} /></div>
            <h1 className="page-title">{s.title}</h1>
            <p className="section-sub">{s.intro}</p>
            <div className="hero-cta center-cta">
              <Link className="btn btn-red" href="/contact">Discuss your project</Link>
              <Link className="link-arrow" href="/projects">See our work</Link>
            </div>
          </div>
        </section>

        <section className="section pt0">
          <div className="container">
            <div className="bento">
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

        {related.length > 0 && (
          <section className="section alt">
            <div className="container head-center">
              <p className="eyebrow">Proof</p>
              <h2>Where we&apos;ve <em>done it</em></h2>
              <div className="bento mt">
                {related.map((p) => <ProjectCard key={p.slug} p={p} span={related.length === 1 ? 6 : related.length === 2 ? 3 : 2} />)}
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container head-center">
            <h2>More services</h2>
            <ul className="chips center-chips">
              {others.map((o) => <li key={o.slug}><Link href={`/services/${o.slug}`}>{o.title}</Link></li>)}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
