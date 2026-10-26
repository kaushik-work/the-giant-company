import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";
import { COVER, CoverArt } from "@/lib/cover";

export const size = COVER;
export const contentType = "image/png";
export const alt = "Article cover";

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug);
  return new ImageResponse(<CoverArt cluster={post?.cluster ?? ""} title={post?.title ?? "The Gaint Company"} />, size);
}
