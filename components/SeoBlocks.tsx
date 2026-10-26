import Link from "next/link";
import JsonLd from "./JsonLd";
import ProjectCard from "./ProjectCard";
import { getProject } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export type Crumb = { name: string; href: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.href === "/" ? "" : c.href}` })),
  };
  return (
    <>
      <JsonLd data={data} />
      <nav className="seo-crumbs" aria-label="Breadcrumb">
        {all.map((c, i) => (
          <span key={c.href}>{i < all.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}</span>
        ))}
      </nav>
    </>
  );
}

export function SeoHero({ crumbs, title, sub, cta, ctaLabel = "Discuss your project" }: { crumbs: Crumb[]; title: React.ReactNode; sub: string; cta: string; ctaLabel?: string }) {
  return (
    <section className="page-hero">
      <div className="container narrow head-center">
        <Crumbs items={crumbs} />
        <h1 className="page-title">{title}</h1>
        <p className="section-sub">{sub}</p>
        <div className="hero-cta center-cta">
          <Link className="btn btn-red" href={cta}>{ctaLabel}</Link>
          <Link className="link-arrow" href="/projects">See our work</Link>
        </div>
      </div>
    </section>
  );
}

export function Tiles({ items, span = 3 }: { items: { title: string; text: string; href?: string }[]; span?: number }) {
  return (
    <div className="bento compact">
      {items.map((p, i) => (
        <article className="tile" style={{ "--span": span } as React.CSSProperties} key={p.title}>
          <span className="num">0{i + 1}</span>
          <h3>{p.href ? <Link href={p.href}>{p.title}</Link> : p.title}</h3>
          <p>{p.text}</p>
        </article>
      ))}
    </div>
  );
}

export function Proof({ slugs, heading = "Related work" }: { slugs: string[]; heading?: string }) {
  const list = slugs.map(getProject).filter((p): p is NonNullable<typeof p> => !!p).slice(0, 3);
  if (!list.length) return null;
  return (
    <section className="section alt">
      <div className="container head-center">
        <h2>{heading}</h2>
        <div className="bento mt">
          {list.map((p) => <ProjectCard key={p.slug} p={p} span={list.length === 1 ? 6 : list.length === 2 ? 3 : 2} />)}
        </div>
      </div>
    </section>
  );
}

export function FaqBlock({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="section">
      <div className="container narrow head-center">
        <h2>Questions, <em>answered</em></h2>
        <JsonLd data={data} />
        <div className="faq mt">
          {items.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LinkChips({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <section className="section pt0">
      <div className="container head-center">
        <h2>{heading}</h2>
        <ul className="chips center-chips">
          {links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
        </ul>
      </div>
    </section>
  );
}

export function CtaBand({ href, title = "Tell us what you need", text = "A real person calls you back within one business day. We work with clients across India and worldwide." }: { href: string; title?: string; text?: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="seo-cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link className="btn btn-red" href={href}>Start a project</Link>
        </div>
      </div>
    </section>
  );
}
