import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — questions about working with us",
  description: "Answers about what The Gaint Company builds, how long projects take, automation, AI chatbots and how to get started.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="FAQ" title={<>Questions, <em>answered</em></>}>
          Can&apos;t find what you&apos;re looking for? Call or message us.
        </PageHero>
        <section className="section pt0">
          <div className="container narrow">
            <Faq />
            <div className="hero-cta mt center-cta">
              <Link className="btn btn-red" href="/contact">Ask us directly</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
