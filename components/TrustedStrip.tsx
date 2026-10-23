import { projects } from "@/lib/projects";

type Item = { key: string; logo?: string; name: string };

const items: Item[] = [
  ...projects.filter((p) => p.logo && !p.logoDark).map((p) => ({ key: p.slug, logo: p.logo, name: p.name })),
  { key: "nap", name: "Nap Meridian" },
];

function Cell({ it }: { it: Item }) {
  return (
    <li className="trust-cell">
      {it.logo ? <img src={it.logo} alt={`${it.name} logo`} loading="lazy" /> : <span className="trust-wordmark">{it.name}</span>}
    </li>
  );
}

// Auto-scrolling client strip; the list is rendered twice for a seamless loop.
export default function TrustedStrip() {
  return (
    <section className="trusted" aria-label="Businesses we have built for">
      <div className="container">
        <p className="trust-label">Trusted by businesses across travel, education, real estate &amp; trade</p>
      </div>
      <div className="trust-marquee">
        <ul className="trust-track">
          {[...items, ...items, ...items, ...items].map((it, i) => <Cell key={`${it.key}-${i}`} it={it} />)}
        </ul>
      </div>
    </section>
  );
}
