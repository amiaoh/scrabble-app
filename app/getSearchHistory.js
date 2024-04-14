"use server";

import path from "path";
import fs from "fs";

export async function getSearchHistory() {
  const filePath = path.join(
    process.cwd(),
    "app",
    "data",
    "searchHistory.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
