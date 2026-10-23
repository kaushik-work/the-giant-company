import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesBento from "@/components/ServicesBento";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Custom software, CRM, web, AI & automation",
  description: "Custom software, CRM development, web development, workflow automation, SaaS and AI chatbots from a Bengaluru software studio.",
  alternates: { canonical: "/services" },
};

const stack = ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "Java / Spring Boot", "Flutter", "Python", "PostgreSQL", "MongoDB", "Claude API", "Razorpay", "Docker", "AWS", "Vercel"];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/services/${s.slug}`,
      name: s.title,
    })),
  };
  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <PageHero eyebrow="What we do" title={<>End-to-end engineering, <em>one team</em></>}>
          Delivered as a dedicated team or a fixed-scope project.
        </PageHero>
        <section className="section pt0">
          <div className="container">
            <ServicesBento />
            <h2 className="mt center-text">Our stack</h2>
            <ul className="chips center-chips">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="hero-cta mt center-cta">
              <Link className="btn btn-red" href="/contact">Start a project</Link>
              <Link className="link-arrow" href="/projects">See our work</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
