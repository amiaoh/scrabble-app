"use server";

import { SearchHistory } from "@/components/SearchHistory";
import { writeQueries } from "./writeQueries";

export async function deleteAllQueries() {
  await writeQueries([]);
}
