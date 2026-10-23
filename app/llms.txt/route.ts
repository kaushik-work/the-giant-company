import { projects } from "@/lib/projects";
import { contact } from "@/lib/data";
import { services } from "@/lib/services";
import { faqs, site, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

## Contact
- Phone / WhatsApp: ${contact.phone}
- Address: ${contact.address}
- Website: ${SITE_URL}

## Services
${services.map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.text}`).join("\n")}

## Projects
${projects.map((p) => `- [${p.name}](${SITE_URL}/projects/${p.slug}) (${p.industry}): ${p.summary}`).join("\n")}

## FAQ
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
