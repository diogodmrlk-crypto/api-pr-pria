import { loadDB, saveDB } from "@/lib/db";

export async function POST(req, { params }) {
  const { key, device } = await req.json();
  const db = loadDB();

  const resource = db.resources[params.id];
  if (!resource) return Response.json({ valid: false });

  const found = resource.data.find(k => k.key === key);
  if (!found) return Response.json({ valid: false });

  if (found.used) return Response.json({ valid: false });

  found.used = true;
  found.device = device;
  found.activatedAt = Date.now();

  saveDB(db);

  return Response.json({ valid: true });
}
