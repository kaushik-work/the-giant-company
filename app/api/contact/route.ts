import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

const FILE = path.join(process.cwd(), "data", "submissions.json");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Enter your name";
  if (!/^\+?[0-9\s-]{10,15}$/.test(phone)) errors.phone = "Enter a valid phone number";
  if (message.length < 5 || message.length > 2000) errors.message = "Tell us a bit about your project";
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const entry = { id: randomUUID(), name, phone, message, createdAt: new Date().toISOString() };
  try {
    let list: unknown[] = [];
    try {
      list = JSON.parse(await fs.readFile(FILE, "utf8"));
    } catch {}
    list.push(entry);
    await fs.mkdir(path.dirname(FILE), { recursive: true });
    await fs.writeFile(FILE, JSON.stringify(list, null, 2));
  } catch {
    return NextResponse.json({ ok: false, error: "Could not save your enquiry" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
}
