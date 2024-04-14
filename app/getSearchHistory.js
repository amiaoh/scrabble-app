"use server";

import path from "path";
import fs from "fs";
import { writeQueries } from "./writeQueries";

export async function getSearchHistory() {
  const filePath = path.join(
    process.cwd(),
    "app",
    "data",
    "searchHistory.json"
  );
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.log(error);
    await writeQueries([]);
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
