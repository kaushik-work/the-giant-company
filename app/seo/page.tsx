import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqBlock, LinkChips, SeoHero, Tiles } from "@/components/SeoBlocks";
import { contactHref } from "@/lib/seo";
import { disciplines } from "@/lib/seo-disciplines";
import { matrix, measures, roadmap, seoPackages, seoProductFaqs } from "@/lib/seo-packages";
import { SITE_URL } from "@/lib/site";

const path = "/seo";
const title = "SEO and AI Search Packages | Audit, Technical SEO, Content and GEO";
const description =
  "Four SEO packages from a Bangalore software studio: an SEO and AI-search audit, technical foundation, monthly growth retainer and AI search (GEO and AEO). Clear scope, monthly reporting, no ranking promises.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title: `${title} | The Gaint Company`, description },
};

export default function SeoProductPage() {
  const cta = contactHref("seo-services", path);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}${path}#service`,
        name: "SEO and AI Search Optimization",
        description,
        url: `${SITE_URL}${path}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
        serviceType: ["Search engine optimization", "Generative engine optimization", "Answer engine optimization", "Technical SEO", "Local SEO"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SEO packages",
          itemListElement: seoPackages.map((p) => ({
            "@type": "Offer",
            url: `${SITE_URL}${path}#${p.slug}`,
            itemOffered: { "@type": "Service", name: p.name, description: p.summary },
          })),
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <SeoHero
          crumbs={[{ name: "SEO packages", href: path }]}
          title={<>SEO and AI search, <em>packaged</em> so you know what you get</>}
          sub="Four clear packages from a software studio that fixes the site itself. Start with a free audit conversation, pick what you need, and get monthly reports in plain language. We do not promise rankings."
          cta={cta}
          ctaLabel="Book a free audit"
        />

        <section className="section pt0">
          <div className="container">
            <div className="seo-packages">
              {seoPackages.map((p, i) => (
                <article className={`seo-package${p.featured ? " featured" : ""}`} id={p.slug} key={p.slug}>
                  <header>
                    <span className="num">0{i + 1}</span>
                    {p.featured && <span className="pill">Most chosen</span>}
                    <h2>{p.name}</h2>
                    <p className="seo-package-tag">{p.tagline}</p>
                    <dl>
                      <div><dt>Best for</dt><dd>{p.forWho}</dd></div>
                      <div><dt>Duration</dt><dd>{p.duration}</dd></div>
                    </dl>
                  </header>
                  <div>
                    <p>{p.summary}</p>
                    <h3>What is included</h3>
                    <ul className="checklist">{p.includes.map((x) => <li key={x}>{x}</li>)}</ul>
                    <p className="seo-package-outcome"><strong>You get:</strong> {p.outcome}</p>
                    <Link className="btn btn-red" href={contactHref("seo-services", `${path}#${p.slug}`)}>Ask about {p.name}</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container head-center">
            <h2>SEO, AEO and GEO, <em>explained</em></h2>
            <p className="section-sub">Three goals, one foundation. Each has its own page with the checklist, measures and mistakes we watch for.</p>
            <div className="mt">
              <Tiles items={disciplines.map((d) => ({ title: `${d.short}: ${d.name}`, text: `${d.goal} ${d.definition}`, href: `/seo/${d.slug}` }))} span={2} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container head-center">
            <h2>Compare the <em>packages</em></h2>
            <p className="section-sub">Mix and match. Most clients start with the audit and continue with what it shows they need.</p>
            <div className="seo-matrix-wrap mt">
              <table className="seo-matrix">
                <thead>
                  <tr>
                    <th scope="col">What is covered</th>
                    {seoPackages.map((p) => <th scope="col" key={p.slug}>{p.name}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {matrix.map((r) => (
                    <tr key={r.row}>
                      <th scope="row">{r.row}</th>
                      {r.values.map((v, i) => (
                        <td key={i}>{v ? <span aria-label="Included">✓</span> : <span aria-label="Not included" className="no">–</span>}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container head-center">
            <h2>Your first <em>90 days</em></h2>
            <div className="mt"><Tiles items={roadmap} span={3} /></div>
          </div>
        </section>

        <section className="section alt">
          <div className="container head-center">
            <h2>What we <em>measure and report</em></h2>
            <p className="section-sub">Every package is tied to numbers you can check yourself in your own Search Console and analytics.</p>
            <div className="mt"><Tiles items={measures} span={2} /></div>
          </div>
        </section>

        <section className="section">
          <div className="container narrow head-center">
            <h2>Why a <em>software studio</em> for SEO</h2>
            <p className="section-sub">Most SEO reports stop at a list of problems. We are developers, so rendering, speed, schema and internal linking are fixed in your site. This site is built the same way: a sitemap, structured data on every page, llms.txt and Markdown versions of our posts.</p>
            <ul className="checklist seo-promises">
              <li>You own every account, report and piece of content.</li>
              <li>Written scope and price before work starts, no long-term lock-in.</li>
              <li>No bought links, link networks or thin mass-produced pages.</li>
              <li>No ranking or citation guarantees, because nobody can honestly give them.</li>
            </ul>
          </div>
        </section>

        <FaqBlock items={seoProductFaqs} />
        <LinkChips
          heading="Read more"
          links={[
            ...disciplines.map((d) => ({ label: `${d.short} services`, href: `/seo/${d.slug}` })),
            { label: "SEO service overview", href: "/services/seo-services" },
            { label: "SEO vs GEO vs AEO", href: "/blog/seo-vs-geo-vs-aeo" },
            { label: "TheSuper30 alternatives", href: "/blog/thesuper30-alternatives" },
            { label: "How we work", href: "/process" },
          ]}
        />
        <CtaBand href={cta} title="Start with a free SEO and AI-search audit conversation" />
      </main>
    </>
  );
}
