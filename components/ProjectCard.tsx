import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/projects/${p.slug}`} className="project">
      <div className={`thumb ${p.logo ? "thumb-logo" : p.cls}`}>
        {p.logo ? <img src={p.logo} alt={`${p.name} logo`} loading="lazy" /> : <span>{p.emoji} {p.name}</span>}
      </div>
      <h3>{p.name}</h3>
      <p>{p.summary}</p>
      <span className="tag">{p.industry}</span>
      <span className="more">View project →</span>
    </Link>
  );
}
