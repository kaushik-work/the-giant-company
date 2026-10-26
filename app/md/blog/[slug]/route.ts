import { getAllPosts, getPost } from "@/lib/blog";
import { postToMarkdown } from "@/lib/llms";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug);
  if (!post) return new Response("Not found", { status: 404 });
  return new Response(postToMarkdown(post), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // The HTML page is the canonical one; keep these copies out of search results.
      "X-Robots-Tag": "noindex",
      Link: `<https://thegaintcompany.com/blog/${post.slug}>; rel="canonical"`,
    },
  });
}
