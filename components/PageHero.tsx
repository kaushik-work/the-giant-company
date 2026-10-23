export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container head-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        {children && <p className="section-sub">{children}</p>}
      </div>
    </section>
  );
}
