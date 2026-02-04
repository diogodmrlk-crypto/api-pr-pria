import { loadDB, saveDB } from "@/lib/db";
import { v4 as uuid } from "uuid";

export async function GET(req,{params}){

 const db = loadDB();
 return Response.json(db.projects[params.id]?.keys || []);
}

export async function POST(req,{params}){

 const db = loadDB();
 const body = await req.json();

 const project = db.projects[params.id];

 if(!project) return Response.json({error:true});

 const key = {
  id: uuid(),
  key: body.key,
  used:false,
  device:"",
  createdAt: Date.now()
 };

 project.keys.push(key);

 saveDB(db);

 return Response.json(key);
}
