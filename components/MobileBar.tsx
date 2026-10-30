import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/lib/data";

// Sticky call-to-action bar shown on phones only.
export default function MobileBar() {
  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick contact">
      <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener" className="wa"><WhatsappLogo size={20} weight="fill" aria-hidden="true" /> WhatsApp</a>
      <a href="/contact" className="primary">Start a project</a>
    </div>
  );
}
