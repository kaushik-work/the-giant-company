import Link from "next/link";
import Icon from "./Icon";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p, span = 2 }: { p: Project; span?: number }) {
  const wide = span >= 4;
  const dark = !p.logo || p.logoDark;
  return (
    <Link
      href={p.slug === "moonlight-ai" ? "/moonlight" : `/projects/${p.slug}`}
      className={`pcard${wide ? " pcard-wide" : ""}${dark ? " pcard-dark" : ""}`}
      style={{ "--span": span } as React.CSSProperties}
    >
      <div className="pcard-media">
        {p.logo ? (
          <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
        ) : (
          <div className="pcard-icon"><Icon name={p.icon ?? "code"} size={40} /></div>
        )}
        {p.slug === "moonlight-ai" && (
          <div className="pcard-chat" aria-hidden="true">
            <span className="bubble me">7 days in Japan, we love food</span>
            <span className="bubble ai">Tokyo → Kyoto → Osaka is a foodie dream.</span>
          </div>
        )}
      </div>
      <div className="pcard-body">
        <span className="tag">{p.industry}</span>
        <h3>{p.name}</h3>
        <p>{p.summary}</p>
      </div>
      <span className="pcard-go" aria-hidden="true">↗</span>
    </Link>
  );
}
