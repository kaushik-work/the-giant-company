import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";
import { COVER, CoverArt } from "@/lib/cover";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}

// Bare cover art (no title) for blog cards.
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug);
  return new ImageResponse(<CoverArt cluster={post?.cluster ?? ""} />, COVER);
}
