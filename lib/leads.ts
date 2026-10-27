import { promises as fs } from "fs";
import path from "path";

export const STATUSES = ["new", "contacted", "won", "lost"] as const;
export type Status = (typeof STATUSES)[number];

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  company?: string;
  message: string;
  createdAt: string;
  status?: Status;
};

const FILE = path.join(process.cwd(), "data", "submissions.json");

// ---- Storage ----
// Order of preference: MongoDB (MONGODB_URI), then Upstash Redis over REST, then a local JSON file for development.
// On Vercel with neither configured there is nowhere durable to write, and we say so instead of pretending.
// MongoDB uses its own database (MONGODB_DB, default "gaint_company") so it never touches other projects' data on the same cluster.
const KV_URL = () => process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const KV_TOKEN = () => process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
const HASH = "gc:leads";

export type StorageKind = "mongodb" | "redis" | "file" | "none";
export const storageKind = (): StorageKind =>
  process.env.MONGODB_URI ? "mongodb" : KV_URL() && KV_TOKEN() ? "redis" : process.env.VERCEL ? "none" : "file";

type MongoLead = Omit<Lead, "id"> & { _id: string };
const globalForMongo = globalThis as unknown as { _gcMongo?: Promise<import("mongodb").Collection<MongoLead>> };

// One client per server instance, reused across requests.
function leadsCollection() {
  if (!globalForMongo._gcMongo) {
    globalForMongo._gcMongo = import("mongodb").then(async ({ MongoClient }) => {
      const client = new MongoClient(process.env.MONGODB_URI as string, { serverSelectionTimeoutMS: 8000 });
      await client.connect();
      return client.db(process.env.MONGODB_DB || "gaint_company").collection<MongoLead>("leads");
    });
    globalForMongo._gcMongo.catch(() => { globalForMongo._gcMongo = undefined; });
  }
  return globalForMongo._gcMongo;
}
const fromDoc = ({ _id, ...rest }: MongoLead): Lead => ({ id: _id, ...rest });

export class StorageUnavailable extends Error {
  constructor() {
    super("No durable lead storage is configured");
  }
}

async function kv(...cmd: (string | number)[]) {
  const res = await fetch(KV_URL(), {
    method: "POST",
    headers: { Authorization: `Bearer ${KV_TOKEN()}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });
  const json = (await res.json()) as { result?: unknown; error?: string };
  if (!res.ok || json.error) throw new Error(json.error ?? `Redis error ${res.status}`);
  return json.result;
}

async function readFileLeads(): Promise<Lead[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return [];
  }
}
async function writeFileLeads(list: Lead[]) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(list, null, 2));
}

export async function readLeads(): Promise<Lead[]> {
  const kind = storageKind();
  if (kind === "mongodb") {
    return (await (await leadsCollection()).find({}).sort({ createdAt: -1 }).toArray()).map(fromDoc);
  }
  if (kind === "redis") {
    const vals = ((await kv("HVALS", HASH)) as string[]) ?? [];
    return vals.map((v) => JSON.parse(v) as Lead);
  }
  return kind === "file" ? readFileLeads() : [];
}

export async function addLead(lead: Lead) {
  const kind = storageKind();
  if (kind === "mongodb") {
    const { id, ...rest } = lead;
    await (await leadsCollection()).insertOne({ _id: id, ...rest });
  } else if (kind === "redis") {
    await kv("HSET", HASH, lead.id, JSON.stringify(lead));
  } else if (kind === "file") {
    const list = await readFileLeads();
    list.push(lead);
    await writeFileLeads(list);
  } else {
    throw new StorageUnavailable();
  }
}

export async function setLeadStatus(id: string, status: Status) {
  const kind = storageKind();
  if (kind === "mongodb") {
    return (await (await leadsCollection()).updateOne({ _id: id }, { $set: { status } })).matchedCount > 0;
  }
  if (kind === "redis") {
    const raw = (await kv("HGET", HASH, id)) as string | null;
    if (!raw) return false;
    await kv("HSET", HASH, id, JSON.stringify({ ...(JSON.parse(raw) as Lead), status }));
    return true;
  }
  if (kind === "file") {
    const list = await readFileLeads();
    const l = list.find((x) => x.id === id);
    if (!l) return false;
    l.status = status;
    await writeFileLeads(list);
    return true;
  }
  throw new StorageUnavailable();
}

export async function deleteLead(id: string) {
  const kind = storageKind();
  if (kind === "mongodb") return void (await (await leadsCollection()).deleteOne({ _id: id }));
  if (kind === "redis") return void (await kv("HDEL", HASH, id));
  if (kind === "file") return writeFileLeads((await readFileLeads()).filter((l) => l.id !== id));
  throw new StorageUnavailable();
}

// Optional email alert for each new lead, through Resend. Never blocks or fails the enquiry.
export async function notifyLead(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!key || !to) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || "The Gaint Company <onboarding@resend.dev>",
        to: to.split(",").map((e) => e.trim()),
        subject: `New enquiry: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
        text: `${lead.name}\n${lead.company ?? ""}\n${lead.phone}\n${lead.email ?? ""}\n\n${lead.message}\n\nReceived ${lead.createdAt}`,
      }),
    });
  } catch {
    /* alerts are best effort */
  }
}

// The contact flow stores answers as "Label: value" lines in `message`; split them back out for display.
export function parseMessage(message: string) {
  const out: Record<string, string> = {};
  for (const line of message.split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) out[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();
  }
  return {
    needs: (out["looking for"] ?? "").split(",").map((s) => s.trim()).filter(Boolean),
    industry: out["industry"],
    budget: out["budget"],
    timeline: out["timeline"],
    details: out["details"],
    source: out["source"],
    raw: Object.keys(out).length ? "" : message,
  };
}
