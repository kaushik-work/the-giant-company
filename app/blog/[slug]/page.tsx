import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import BlogCard, { Byline } from "@/components/BlogCard";
import { Crumbs, CtaBand, FaqBlock } from "@/components/SeoBlocks";
import { accentFor } from "@/lib/blog-theme";
import { getAllPosts, getPost, renderMarkdown, tagSlug } from "@/lib/blog";
import { contactHref } from "@/lib/seo";
import { getService } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}
type P = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const p = await getPost((await params).slug);
  if (!p) return {};
  const path = `/blog/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    keywords: [p.keyword, ...p.tags],
    alternates: { canonical: path, types: { "text/markdown": `/blog/${p.slug}.md` } },
    openGraph: { type: "article", url: path, title: `${p.title} | The Gaint Company`, description: p.description, publishedTime: p.date, modifiedTime: p.updated },
  };
}

export default async function PostPage({ params }: P) {
  const post = await getPost((await params).slug);
  if (!post) notFound();
  const all = await getAllPosts();
  const { html, toc } = renderMarkdown(post.body);
  const path = `/blog/${post.slug}`;
  const service = post.service ? getService(post.service) : undefined;
  const related = post.related.map((s) => all.find((x) => x.slug === s)).filter((x): x is NonNullable<typeof x> => !!x);
  const more = related.length ? related : all.filter((x) => x.slug !== post.slug && x.cluster === post.cluster).slice(0, 3);
  const cta = contactHref(post.service ?? "", path);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished: post.date,
    dateModified: post.updated,
    keywords: [post.keyword, ...post.tags].join(", "),
    wordCount: post.words,
    author: { "@type": "Organization", name: "The Gaint Company", url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="post-hero">
          <div className="container post-hero-in">
            <Crumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: path }]} />
            <span className="bl-pill" style={{ "--bl-accent": accentFor(post.cluster) } as React.CSSProperties}>{post.cluster}</span>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-lead">{post.description}</p>
            <Byline date={post.updated} minutes={post.minutes} />
            <img className="post-cover" src={`/blog-cover/${post.slug}`} alt="" width={1200} height={630} />
          </div>
        </section>

        <article className="section pt0">
          <div className="container post-wrap">
            {toc.length > 2 && (
              <nav className="post-toc" aria-label="In this article">
                <strong>In this article</strong>
                <ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>)}</ol>
              </nav>
            )}
            <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div className="container narrow">
            <ul className="chips">
              {post.tags.map((t) => <li key={t}><Link href={`/blog/tag/${tagSlug(t)}`}>{t}</Link></li>)}
            </ul>
          </div>
        </article>

        {post.faqs.length > 0 && <FaqBlock items={post.faqs} />}

        {service && (
          <section className="section pt0">
            <div className="container narrow">
              <div className="post-service">
                <div>
                  <strong>{service.title}</strong>
                  <p>{service.text}</p>
                </div>
                <Link className="btn" href={`/services/${service.slug}`}>See the service</Link>
              </div>
            </div>
          </section>
        )}

        {more.length > 0 && (
          <section className="section pt0">
            <div className="container">
              <h2 className="head-center">Keep reading</h2>
              <div className="bl-grid three mt">
                {more.map((p) => <BlogCard key={p.slug} p={{ ...p, accent: accentFor(p.cluster) }} />)}
              </div>
            </div>
          </section>
        )}

        <CtaBand href={cta} title="Want this built for your business?" />
      </main>
    </>
  );
}
