import Link from "next/link";
import Icon from "./Icon";
import type { Project } from "@/lib/projects";

const href = (p: Project) => (p.slug === "moonlight-ai" ? "/moonlight" : `/projects/${p.slug}`);

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const featured = projects.find((p) => p.slug === "moonlight-ai");
  const rest = projects.filter((p) => p !== featured);
  return (
    <>
      {featured && (
        <Link href={href(featured)} className="pj-feature">
          <div>
            <span className="pj-tag">Featured · {featured.industry}</span>
            <h2>{featured.name}</h2>
            <p>{featured.summary}</p>
            <span className="pj-link">View project <i>→</i></span>
          </div>
          <div className="pj-chat" aria-hidden="true">
            <span className="bubble me">7 days in Japan, we love food</span>
            <span className="bubble ai">Tokyo → Kyoto → Osaka is a foodie dream. Can I get your WhatsApp for the quote?</span>
          </div>
        </Link>
      )}
      <div className="pj-grid">
        {rest.map((p) => (
          <Link key={p.slug} href={href(p)} className="pj-card">
            <span className={`pj-logo${p.logoDark || !p.logo ? " dark" : ""}`}>
              {p.logo ? <img src={p.logo} alt={`${p.name} logo`} loading="lazy" /> : <Icon name={p.icon ?? "code"} size={26} />}
            </span>
            <span className="pj-tag">{p.industry}</span>
            <h3>{p.name}</h3>
            <p>{p.tagline}</p>
            <span className="pj-link">View project <i>→</i></span>
          </Link>
        ))}
      </div>
    </>
  );
}
