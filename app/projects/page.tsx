import type { Metadata } from "next";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — The Gaint Company",
  description: "Websites, CRMs, AI products and platforms we have built.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h1 className="page-title">Projects we&apos;ve shipped</h1>
          <p className="section-sub">From AI chatbots to CRMs, SaaS products and business websites — across travel, education, real estate and trade.</p>
          <div className="grid grid-3">{projects.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
        </div>
      </main>
    </>
  );
}
