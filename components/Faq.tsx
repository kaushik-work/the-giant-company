import { faqs } from "@/lib/site";
import JsonLd from "./JsonLd";

export default function Faq({ limit, schema = true }: { limit?: number; schema?: boolean }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      {schema && <JsonLd data={data} />}
      <div className="faq">
        {items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
