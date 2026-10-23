import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { getProject, projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const url = `/projects/${p.slug}`;
  return {
    title: `${p.name} — ${p.industry} case study`,
    description: `${p.tagline} ${p.summary}`.slice(0, 300),
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: `${p.name} | The Gaint Company`, description: p.tagline },
    twitter: { card: "summary_large_image", title: p.name, description: p.tagline },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
          { "@type": "ListItem", position: 3, name: p.name, item: `${SITE_URL}/projects/${p.slug}` },
        ],
      },
      {
        "@type": "CreativeWork",
        name: p.name,
        description: p.overview,
        url: `${SITE_URL}/projects/${p.slug}`,
        genre: p.industry,
        keywords: p.stack.join(", "),
        creator: { "@id": `${SITE_URL}/#organization` },
        ...(p.url ? { sameAs: p.url } : {}),
      },
    ],
  };
  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="hero project-hero">
          <div className="container">
            <Link href="/projects" className="back">← All projects</Link>
            <p className="eyebrow">{p.industry}</p>
            <h1 className="page-title">{p.name}</h1>
            <p className="lead">{p.tagline}</p>
            <div className="hero-cta">
              {p.url && <a className="btn" href={p.url} target="_blank" rel="noopener">Visit {p.url.replace("https://", "")} ↗</a>}
              <Link className="btn btn-ghost" href="/#contact">Build something similar</Link>
            </div>
            <div className={`project-banner ${p.logo ? (p.logoDark ? "thumb-logo thumb-dark" : "thumb-logo") : p.cls}`}>
              {p.logo ? <img src={p.logo} alt={`${p.name} logo`} /> : <span>{p.emoji} {p.name}</span>}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <h2>Overview</h2>
            <p className="prose">{p.overview}</p>
            <h2 className="mt">What we built</h2>
            <ul className="checklist">{p.built.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <h2>{p.slug === "trripah-crm" ? "Automations & features" : "Highlights"}</h2>
            <div className="grid grid-3 mt">
              {p.features.map((f) => (
                <article className="card" key={f.title}><h3>{f.title}</h3><p>{f.text}</p></article>
              ))}
            </div>
            <h2 className="mt">Tech stack</h2>
            <ul className="chips">{p.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>More projects</h2>
            <div className="grid grid-3 mt">
              {others.map((o) => (
                <Link key={o.slug} href={`/projects/${o.slug}`} className="project">
                  <div className={`thumb ${o.logo ? (o.logoDark ? "thumb-logo thumb-dark" : "thumb-logo") : o.cls}`}>
                    {o.logo ? <img src={o.logo} alt="" /> : <span>{o.emoji} {o.name}</span>}
                  </div>
                  <h3>{o.name}</h3><p>{o.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
