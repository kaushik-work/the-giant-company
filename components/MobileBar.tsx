import { contact } from "@/lib/data";

// Sticky call-to-action bar shown on phones only.
export default function MobileBar() {
  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick contact">
      <a href={`tel:${contact.phoneHref}`}>📞 Call</a>
      <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener" className="wa">💬 WhatsApp</a>
      <a href="/contact" className="primary">Start a project</a>
    </div>
  );
}
