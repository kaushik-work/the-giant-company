import type { Metadata } from "next";
import Skin from "@/components/Skin";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { steps } from "@/lib/data";

export const metadata: Metadata = {
  title: "How we work — our software development process",
  description: "Discover, design, build, launch and support: how The Gaint Company takes a software project from idea to production.",
  alternates: { canonical: "/process" },
};

const models = [
  { icon: "doc", title: "Fixed-scope project", text: "A defined deliverable with agreed scope, timeline and cost. Best for websites, MVPs and well-understood tools." },
  { icon: "crm", title: "Dedicated team", text: "An engineering team that works as an extension of yours, month to month, on a growing product." },
  { icon: "workflow", title: "Support & improvement", text: "Monitoring, security updates and steady improvements after launch." },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <Skin />
      <main>
        <PageHero eyebrow="How we work" title={<>From idea to <em>launch</em> in four steps</>}>
          A clear process with demos along the way, so you always know where the project stands.
        </PageHero>

        <section className="section pt0">
          <div className="container">
            <ol className="process-list">
              {steps.map((s) => (
                <li className="process-step" key={s.n}>
                  <span className="num big">{s.n}</span>
                  <div>
                    <h2>{s.title}</h2>
                    <p>{s.text}</p>
                    <ul className="checklist">{s.details.map((d) => <li key={d}>{d}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section alt">
          <div className="container head-center">
            <h2>Ways to <em>work with us</em></h2>
            <div className="bento mt">
              {models.map((m) => (
                <article className="tile" style={{ "--span": 2 } as React.CSSProperties} key={m.title}>
                  <div className="icon-chip"><Icon name={m.icon} /></div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </article>
              ))}
            </div>
            <div className="hero-cta mt center-cta">
              <Link className="btn btn-red" href="/contact">Start a project</Link>
              <Link className="link-arrow" href="/faq">Read the FAQ</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
