import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { Crumbs, CtaBand } from "@/components/SeoBlocks";
import { getAllPosts, getAllTags, tagSlug } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllTags()).map((t) => ({ tag: t.slug }));
}
type P = { params: Promise<{ tag: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { tag } = await params;
  const t = (await getAllTags()).find((x) => x.slug === tag);
  if (!t) return {};
  return { title: `${t.label}: guides and articles`, description: `All our articles on ${t.label.toLowerCase()}.`, alternates: { canonical: `/blog/tag/${tag}` } };
}

export default async function TagPage({ params }: P) {
  const { tag } = await params;
  const info = (await getAllTags()).find((x) => x.slug === tag);
  if (!info) notFound();
  const posts = (await getAllPosts()).filter((p) => p.tags.some((t) => tagSlug(t) === tag));
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container narrow head-center">
            <Crumbs items={[{ name: "Blog", href: "/blog" }, { name: info.label, href: `/blog/tag/${tag}` }]} />
            <h1 className="page-title">{info.label}</h1>
            <p className="section-sub">{posts.length} {posts.length === 1 ? "article" : "articles"} on this topic.</p>
          </div>
        </section>
        <section className="section pt0">
          <div className="container">
            <div className="bl-grid">
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="bl-card">
                  <span className="bl-meta">{p.pillar ? "Guide" : p.cluster} · {p.minutes} min read</span>
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  <span className="pj-link">Read <i>→</i></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <CtaBand href={`/contact?from=${encodeURIComponent(`/blog/tag/${tag}`)}`} />
      </main>
    </>
  );
}
