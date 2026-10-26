import { NextResponse } from "next/server";
import { STATUSES, StorageUnavailable, deleteLead, setLeadStatus, type Status } from "@/lib/leads";

export const runtime = "nodejs";

const fail = (e: unknown) => NextResponse.json({ ok: false, error: e instanceof StorageUnavailable ? "No storage configured" : "Failed" }, { status: 503 });

export async function PATCH(req: Request) {
  const { id, status } = (await req.json().catch(() => ({}))) as { id?: string; status?: Status };
  if (!id || !status || !STATUSES.includes(status)) return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  try {
    return (await setLeadStatus(id, status)) ? NextResponse.json({ ok: true }) : NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  } catch (e) {
    return fail(e);
  }
}

export async function DELETE(req: Request) {
  const { id } = (await req.json().catch(() => ({}))) as { id?: string };
  if (!id) return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  try {
    await deleteLead(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return fail(e);
  }
}
