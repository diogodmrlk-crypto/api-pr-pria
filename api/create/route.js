import { loadDB, saveDB } from "@/lib/db";
import { v4 as uuid } from "uuid";

export async function GET(req, { params }) {
  const db = loadDB();
  return Response.json(db.resources[params.id]?.data || []);
}

export async function POST(req, { params }) {
  const body = await req.json();
  const db = loadDB();

  const resource = db.resources[params.id];
  if (!resource) return Response.json({ error: true });

  const keyData = {
    id: uuid(),
    key: body.key,
    used: false,
    device: "",
    expire: body.expire || 1,
    createdAt: Date.now(),
    activatedAt: 0,
    type: body.type || "daily"
  };

  resource.data.push(keyData);
  saveDB(db);

  return Response.json(keyData);
}
