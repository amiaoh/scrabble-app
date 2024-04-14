"use server";

import path from "path";
import fs from "fs";

export async function writeQueries(queries) {
  const filePath = path.join(
    process.cwd(),
    "app",
    "data",
    "searchHistory.json"
  );
  fs.writeFileSync(filePath, JSON.stringify(queries, null, 2), "utf8");
}
