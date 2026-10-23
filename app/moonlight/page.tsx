import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import ProjectCard from "@/components/ProjectCard";
import { getProject } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Moonlight — AI trip planner chatbot built on Claude",
  description:
    "Moonlight is a Claude-powered AI travel planner with a personality. It plans itineraries in conversation, knows 65 destinations and captures leads straight into a CRM — without ever quoting a price.",
  alternates: { canonical: "/moonlight" },
  openGraph: { url: "/moonlight", title: "Moonlight — AI trip planner | The Gaint Company", description: "A Claude-powered travel chatbot that plans trips and captures leads." },
};

const personas = [
  { title: "Gen Z", text: "Casual and punchy, with short sentences and slang that feels natural, not forced.", sample: "Japan in October is *chef's kiss*. Solo or with someone?" },
  { title: "Millennials", text: "Friendly and structured, with travel-hack references and a clear plan.", sample: "Great pick. Tokyo, Kyoto, Osaka works well in 7 days. Want the route?" },
  { title: "45+ travellers", text: "Warm, respectful and clear, focused on comfort, culture and ease.", sample: "Wonderful choice. We can keep the pace relaxed with comfortable stays." },
];

const flow = [
  { icon: "chat", title: "Chat", text: "The traveller says where they want to go. Moonlight asks about dates, group, duration and style." },
  { icon: "brain", title: "Plan", text: "Destination knowledge is loaded on demand, so highlights, food, visas and the best season are accurate." },
  { icon: "doc", title: "Finalise", text: "The itinerary is agreed in conversation and returned as structured data." },
  { icon: "call", title: "Capture", text: "Moonlight asks for name, WhatsApp and email through an inline form." },
  { icon: "crm", title: "Hand off", text: "The lead and itinerary land in the CRM, and the team sends the quote." },
];

const guardrails = [
  { title: "Never quotes a price", text: "Pricing stays with the ground team, so customers never see made-up numbers." },
  { title: "Rate limiting", text: "Per-IP request limits protect the service from abuse and runaway cost." },
  { title: "Session handling", text: "Conversations keep context across messages and devices." },
  { title: "Locked-down access", text: "An API protection filter and a CORS allow-list restrict who can call it." },
];

export default function MoonlightPage() {
  const crm = getProject("trripah-crm");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Moonlight", item: `${SITE_URL}/moonlight` },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Moonlight AI Trip Planner",
        applicationCategory: "TravelApplication",
        operatingSystem: "Web, iOS, Android",
        description: "A Claude-powered AI travel planner that plans itineraries in conversation and captures leads into a CRM.",
        creator: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="section pt0 moon-hero">
          <div className="container">
            <div className="moon-panel center">
              <p className="eyebrow">Featured · AI product</p>
              <h1 className="page-title">Meet Moonlight.<br /><em>Trripah&apos;s AI trip planner.</em></h1>
              <p className="section-sub">
                A Claude-powered travel chatbot with a personality. She adapts to Gen Z, millennials and
                older travellers, knows 65 destinations, plans the itinerary in conversation and hands a
                ready lead to the sales team — without ever quoting a price.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-red" href="/contact">Build something like this</Link>
                <Link className="link-arrow" href="/projects/trripah-crm">See the CRM it feeds</Link>
              </div>
              <div className="chat" aria-hidden="true">
                <div className="bubble me">I want to go to Japan for 7 days</div>
                <div className="bubble ai">Japan in October is *chef&apos;s kiss*. Are you going solo or with someone?</div>
                <div className="bubble me">With my partner — we love food</div>
                <div className="bubble ai">Perfect. Tokyo → Kyoto → Osaka is a foodie dream. Can I get your WhatsApp so the team can send the quote?</div>
              </div>
              <ul className="pillars">
                <li><strong>Persona-driven</strong><span>Tone adapts to the traveller</span></li>
                <li><strong>65 destinations</strong><span>Knowledge loaded on demand</span></li>
                <li><strong>Lead capture</strong><span>Straight into the CRM</span></li>
                <li><strong>Everywhere</strong><span>Web, CRM and mobile app</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container head-center">
            <p className="eyebrow">Personality</p>
            <h2>One planner, <em>every traveller</em></h2>
            <p className="section-sub">Moonlight reads who she is talking to and adjusts her style.</p>
            <div className="bento compact">
              {personas.map((p) => (
                <article className="tile" style={{ "--span": 2 } as React.CSSProperties} key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="mini-chat persona-sample"><span className="bubble ai">{p.sample}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container head-center">
            <p className="eyebrow">How it works</p>
            <h2>From first message to <em>qualified lead</em></h2>
            <ol className="flow-steps">
              {flow.map((f, i) => (
                <li className="tile" key={f.title}>
                  <span className="num">0{i + 1}</span>
                  <div className="icon-chip"><Icon name={f.icon} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="container head-center">
            <p className="eyebrow">Under the hood</p>
            <h2>Built to be <em>safe in production</em></h2>
            <div className="bento compact">
              {guardrails.map((g) => (
                <article className="tile" style={{ "--span": 3 } as React.CSSProperties} key={g.title}>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </article>
              ))}
            </div>
            <ul className="chips center-chips">
              {["Claude Haiku 4.5", "Java 21", "Spring Boot 3", "MongoDB", "Docker", "DigitalOcean"].map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </section>

        {crm && (
          <section className="section alt">
            <div className="container head-center">
              <p className="eyebrow">Connected</p>
              <h2>Leads flow into the <em>CRM</em></h2>
              <div className="bento mt"><ProjectCard p={crm} span={6} /></div>
              <div className="hero-cta mt center-cta">
                <Link className="btn btn-red" href="/contact">Talk to us about an AI assistant</Link>
                <Link className="link-arrow" href="/services/ai-intelligent-automation">AI & automation services</Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
