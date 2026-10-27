import Link from "next/link";

export type PostCard = { slug: string; title: string; description: string; keyword: string; tags: string[]; cluster: string; minutes: number; pillar: boolean; date: string; accent: string };

export const fmtDate = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export function Byline({ date, minutes }: { date: string; minutes: number }) {
  return (
    <div className="bl-byline">
      <img src="/icon.png" alt="" width={24} height={24} />
      <span>The Gaint Company team</span>
      <i>·</i>
      <span>{fmtDate(date)}</span>
      <i>·</i>
      <span>{minutes} min read</span>
    </div>
  );
}

export default function BlogCard({ p }: { p: PostCard }) {
  return (
    <Link href={`/blog/${p.slug}`} className="bl-card" style={{ "--bl-accent": p.accent } as React.CSSProperties}>
      <div className="bl-body">
        <span className="bl-pill">{p.cluster}</span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <Byline date={p.date} minutes={p.minutes} />
      </div>
    </Link>
  );
}
