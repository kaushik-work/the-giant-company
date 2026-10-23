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
        <div className="trust-card">
          <p className="trust-label"><i className="dot" /> Trusted by businesses across travel, education, real estate &amp; trade</p>
          <div className="trust-marquee">
            <ul className="trust-track">
              {items.map((it) => <Cell key={it.key} it={it} />)}
              {items.map((it) => <Cell key={`${it.key}-2`} it={it} />)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
