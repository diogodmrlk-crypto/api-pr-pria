import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "database.json");

export function loadDB() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function saveDB(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
