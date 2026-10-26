import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { StorageUnavailable, addLead, notifyLead, type Lead } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const company = String(body.company ?? "").trim();
  const message = String(body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Enter your name";
  if (!/^\+?[0-9\s-]{10,15}$/.test(phone)) errors.phone = "Enter a valid phone number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Enter a valid work email";
  else if (/@(gmail|googlemail)\.com$/.test(email)) errors.email = "Please use your work email, not Gmail";
  if (company.length < 2 || company.length > 120) errors.company = "Enter your company name";
  if (message.length < 5 || message.length > 2000) errors.message = "Tell us a bit about your project";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const entry: Lead = { id: randomUUID(), name, phone, email, company, message, status: "new", createdAt: new Date().toISOString() };
  try {
    await addLead(entry);
  } catch (e) {
    const unavailable = e instanceof StorageUnavailable;
    // Tell the visitor honestly, so the form can offer WhatsApp instead of losing the enquiry.
    return NextResponse.json({ ok: false, fallback: true, error: unavailable ? "We could not save your enquiry right now." : "Could not save your enquiry" }, { status: unavailable ? 503 : 500 });
  }
  await notifyLead(entry);
  return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
}
