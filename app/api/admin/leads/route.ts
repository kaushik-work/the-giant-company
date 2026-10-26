import { NextResponse } from "next/server";
import { STATUSES, readLeads, writeLeads, type Status } from "@/lib/leads";

export const runtime = "nodejs";

export async function PATCH(req: Request) {
  const { id, status } = (await req.json().catch(() => ({}))) as { id?: string; status?: Status };
  if (!id || !status || !STATUSES.includes(status)) return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  const list = await readLeads();
  const lead = list.find((l) => l.id === id);
  if (!lead) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  lead.status = status;
  await writeLeads(list);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const { id } = (await req.json().catch(() => ({}))) as { id?: string };
  const list = await readLeads();
  await writeLeads(list.filter((l) => l.id !== id));
  return NextResponse.json({ ok: true });
}
