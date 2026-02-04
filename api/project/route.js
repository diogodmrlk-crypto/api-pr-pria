import { loadDB, saveDB } from "@/lib/db";
import { v4 as uuid } from "uuid";

export async function POST(req){

 const { name } = await req.json();

 const db = loadDB();
 const id = uuid();

 db.projects[id] = {
  name,
  keys:[]
 };

 saveDB(db);

 return Response.json({ id });
}
