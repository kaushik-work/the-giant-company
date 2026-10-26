import type { Metadata } from "next";
import Header from "@/components/Header";
import BlogIndex from "@/components/BlogIndex";
import { Crumbs, CtaBand } from "@/components/SeoBlocks";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: AI chatbots, WhatsApp, lead generation, websites and AI coding",
  description: "Practical guides on AI chatbots, WhatsApp chatbots, lead generation, website development, no-code tools, AI coding and workflow automation, from a Bangalore software company.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);
  const cards = posts.map(({ slug, title, description, keyword, tags, cluster, minutes, pillar }) => ({ slug, title, description, keyword, tags, cluster, minutes, pillar }));
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Crumbs items={[{ name: "Blog", href: "/blog" }]} />
            <h1 className="page-title">Practical guides for <em>growing businesses</em></h1>
            <p className="section-sub">AI chatbots, WhatsApp, lead generation, websites, no-code and AI coding. Written from what we build.</p>
          </div>
        </section>
        <section className="section pt0">
          <div className="container">
            <BlogIndex posts={cards} tags={tags} />
          </div>
        </section>
        <CtaBand href="/contact?from=%2Fblog" />
      </main>
    </>
  );
}
