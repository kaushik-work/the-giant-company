import Header from "./Header";
import PageHero from "./PageHero";

export type LegalSection = { title: string; body: (string | string[])[] };

export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow={eyebrow} title={title}>{intro}</PageHero>
        <section className="section pt0">
          <div className="container narrow legal">
            <p className="legal-updated">Last updated: {updated}</p>
            <nav className="legal-toc" aria-label="On this page">
              {sections.map((s, i) => <a key={s.title} href={`#s${i + 1}`}>{i + 1}. {s.title}</a>)}
            </nav>
            {sections.map((s, i) => (
              <article id={`s${i + 1}`} key={s.title}>
                <h2>{i + 1}. {s.title}</h2>
                {s.body.map((b, j) =>
                  Array.isArray(b) ? (
                    <ul key={j}>{b.map((li) => <li key={li}>{li}</li>)}</ul>
                  ) : (
                    <p key={j}>{b}</p>
                  )
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
