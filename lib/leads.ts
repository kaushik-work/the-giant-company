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

export async function readLeads(): Promise<Lead[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return [];
  }
}

export async function writeLeads(list: Lead[]) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(list, null, 2));
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
    raw: Object.keys(out).length ? "" : message,
  };
}
