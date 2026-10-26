import type { Metadata } from "next";
import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — The Gaint Company",
  description: "Websites, CRMs, AI products and SaaS platforms built by The Gaint Company for travel, education, real estate and trade businesses.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="section pj-page">
        <div className="container">
          <div className="pj-head">
            <h1 className="page-title">Projects we&apos;ve shipped</h1>
            <p className="section-sub">AI chatbots, CRMs, SaaS products and business websites for travel, education, real estate and trade.</p>
          </div>
          <ProjectsGrid projects={projects} />
        </div>
      </main>
    </>
  );
}
