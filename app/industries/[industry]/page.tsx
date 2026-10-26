import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { CtaBand, Proof, SeoHero, Tiles } from "@/components/SeoBlocks";
import { getIndustry, hasIndustryHub, hasIndustryPage, industryHubs, useCase } from "@/lib/seo";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return industryHubs.map((slug) => ({ industry: slug }));
}
export const dynamicParams = false;

type P = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const i = getIndustry((await params).industry);
  if (!i || !hasIndustryHub(i.slug)) return {};
  const description = `Custom software, CRMs, websites and automation for ${i.who}. Built by a Bengaluru studio working with clients across India and worldwide.`;
  return { title: `Software for ${i.name}`, description, alternates: { canonical: `/industries/${i.slug}` }, openGraph: { url: `/industries/${i.slug}`, title: `Software for ${i.name} | The Gaint Company`, description } };
}

export default async function IndustryPage({ params }: P) {
  const i = getIndustry((await params).industry);
  if (!i || !hasIndustryHub(i.slug)) notFound();
  const path = `/industries/${i.slug}`;
  return (
    <>
      <Header />
      <main>
        <SeoHero
          crumbs={[{ name: "Industries", href: "/industries" }, { name: i.name, href: path }]}
          title={<>Software for <em>{i.name.toLowerCase()}</em></>}
          sub={`We build custom software, CRMs, websites and automation for ${i.who}.`}
          cta={`/contact?from=${encodeURIComponent(path)}`}
        />
        <section className="section pt0">
          <div className="container head-center">
            <h2>Problems we are usually asked to fix</h2>
            <div className="mt"><Tiles span={2} items={i.pains.map((p) => ({ title: p, text: "" }))} /></div>
          </div>
        </section>
        <section className="section alt">
          <div className="container head-center">
            <h2>How our services apply</h2>
            <div className="mt"><Tiles span={2} items={services.map((s) => ({ title: s.title, text: useCase(s, i), href: hasIndustryPage(i.slug, s.slug) ? `${path}/${s.slug}` : `/services/${s.slug}` }))} /></div>
          </div>
        </section>
        <Proof slugs={i.proof.length ? i.proof : ["trripah-crm", "campusgo", "keerthi-builders"]} heading={i.proof.length ? `Our work in ${i.name.toLowerCase()}` : "Closest work we have shipped"} />
        <CtaBand href={`/contact?from=${encodeURIComponent(path)}`} />
      </main>
    </>
  );
}
