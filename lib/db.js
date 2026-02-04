import fs from "fs";
import path from "path";

const file = path.join(process.cwd(), "data/db.json");

export function loadDB(){
 return JSON.parse(fs.readFileSync(file));
}

export function saveDB(data){
 fs.writeFileSync(file, JSON.stringify(data,null,2));
}
