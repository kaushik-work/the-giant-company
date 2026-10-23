import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";

// 6-column bento: one wide featured tile, then rows of equal tiles.
const spans: Record<string, number> = { "moonlight-ai": 4 };

export default function ProjectBento({ projects }: { projects: Project[] }) {
  return (
    <div className="bento">
      {projects.map((p) => <ProjectCard key={p.slug} p={p} span={spans[p.slug] ?? 2} />)}
    </div>
  );
}
