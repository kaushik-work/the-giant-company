import type { Metadata } from "next";
import { parseMessage, readLeads, storageKind } from "@/lib/leads";
import LeadsBoard, { type LeadRow } from "@/components/LeadsBoard";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Leads", robots: { index: false, follow: false } };

export default async function AdminPage() {
  let dbError = false;
  const leads = (await readLeads().catch(() => { dbError = true; return []; })).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const rows: LeadRow[] = leads.map((l) => ({ ...l, status: l.status ?? "new", parsed: parseMessage(l.message) }));
  return <LeadsBoard initial={rows} storage={storageKind()} dbError={dbError} />;
}
