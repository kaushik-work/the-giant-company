"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Action = { label: string; href: string; primary?: boolean };
type Msg = { id: number; from: "bot" | "me"; text: string; actions?: Action[] };

const topics = [
  {
    id: "crm", label: "A CRM or lead system",
    reply: ["We build CRMs around how you actually sell: leads from your site and WhatsApp in one pipeline, quotes, reminders and payments.", "Our Trripah CRM sends branded quote requests to the right partners in one click and logs every reply."],
    actions: [{ label: "How we build CRMs", href: "/services/crm-development" }, { label: "See Trripah CRM", href: "/projects/trripah-crm" }],
    need: "CRM",
  },
  {
    id: "bot", label: "A chatbot or WhatsApp bot",
    reply: ["A good bot has a persona, your own knowledge and a clean hand-off, so every lead reaches your team with context.", "Moonlight, our trip planner, chats like a travel-obsessed friend and captures the lead once the plan is final."],
    actions: [{ label: "Chatbot services", href: "/services/ai-intelligent-automation" }, { label: "Meet Moonlight", href: "/moonlight" }],
    need: "AI chatbot",
  },
  {
    id: "web", label: "A site that brings enquiries",
    reply: ["Fast Next.js sites with search set-up, enquiry forms and call buttons built in, not bolted on later.", "Keerthi Builders and FIDO Exim are good examples."],
    actions: [{ label: "Website development", href: "/services/web-development" }, { label: "Keerthi Builders", href: "/projects/keerthi-builders" }],
    need: "Website",
  },
  {
    id: "auto", label: "Kill manual work",
    reply: ["If your team copies data between emails, sheets and chats, that is a workflow waiting to be automated.", "We map the process first, then automate the hand-offs: emails, document reading, status and reports."],
    actions: [{ label: "Workflow automation", href: "/services/workflow-automation" }],
    need: "Automation",
  },
  {
    id: "app", label: "A mobile app",
    reply: ["Flutter apps for Android and iOS from one codebase, wired to your backend, CRM and AI.", "Our Trripah app runs on live data with an AI concierge built in."],
    actions: [{ label: "Mobile app development", href: "/services/mobile-app-development" }, { label: "Trripah app", href: "/projects/trripah-mobile-app" }],
    need: "Custom software",
  },
  {
    id: "unsure", label: "Not sure yet",
    reply: ["No problem. Tell us the messy process you want gone and we will say honestly what is worth building, and what is not."],
    actions: [],
    need: "",
  },
];

export default function HeroChat() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const idRef = useRef(0);
  const box = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const calm = useRef(false);

  const wait = (ms: number) => new Promise<void>((res) => timers.current.push(setTimeout(res, calm.current ? 0 : ms)));
  const push = (m: Omit<Msg, "id">) => setMsgs((cur) => [...cur, { ...m, id: ++idRef.current }]);

  async function botSay(lines: string[], actions?: Action[]) {
    for (let i = 0; i < lines.length; i++) {
      setTyping(true);
      await wait(650);
      setTyping(false);
      push({ from: "bot", text: lines[i], actions: i === lines.length - 1 ? actions : undefined });
      if (i < lines.length - 1) await wait(250);
    }
  }

  useEffect(() => {
    calm.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    botSay(["hey, what are you trying to build?"]);
    const t = timers.current;
    return () => t.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    box.current?.scrollTo({ top: box.current.scrollHeight, behavior: calm.current ? "auto" : "smooth" });
  }, [msgs, typing]);

  async function choose(id: string) {
    if (typing) return;
    const t = topics.find((x) => x.id === id)!;
    setPicked(id);
    push({ from: "me", text: t.label });
    const start = t.need ? { label: "Start with this", href: `/contact?need=${encodeURIComponent(t.need)}&from=${encodeURIComponent("/")}`, primary: true } : { label: "Tell us about it", href: `/contact?from=${encodeURIComponent("/")}`, primary: true };
    await botSay(t.reply, [...t.actions, start]);
  }

  return (
    <div className="hx-chat" role="region" aria-label="Guided demo: tell us what you want to build">
      <div className="hx-chat-top">
        <span className="hx-dots" aria-hidden="true"><i /><i /><i /></span>
        <strong>Ask the studio</strong>
        <span className="hx-live"><i /> guided demo</span>
      </div>
      <div className="hx-chat-body" ref={box} aria-live="polite">
        {msgs.map((m) => (
          <div key={m.id} className={`hx-msg ${m.from}`}>
            <p>{m.text}</p>
            {m.actions && (
              <div className="hx-actions">
                {m.actions.map((a) => (
                  <Link key={a.label} href={a.href} className={a.primary ? "primary" : ""}>{a.label}{a.primary ? " →" : ""}</Link>
                ))}
              </div>
            )}
          </div>
        ))}
        {typing && <div className="hx-msg bot typing" aria-label="typing"><span /><span /><span /></div>}
      </div>
      <div className="hx-chips">
        {topics.filter((t) => t.id !== picked).map((t) => (
          <button key={t.id} type="button" disabled={typing || msgs.length === 0} onClick={() => choose(t.id)}>{t.label}</button>
        ))}
      </div>
    </div>
  );
}
