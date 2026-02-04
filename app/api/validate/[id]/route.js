import { loadDB, saveDB } from "@/lib/db";

export async function POST(req,{params}){

 const { key, device } = await req.json();

 const db = loadDB();
 const project = db.projects[params.id];

 if(!project) return Response.json({valid:false});

 const found = project.keys.find(k => k.key === key);

 if(!found) return Response.json({valid:false});

 if(found.used) return Response.json({valid:false});

 found.used = true;
 found.device = device;

 saveDB(db);

 return Response.json({valid:true});
}
