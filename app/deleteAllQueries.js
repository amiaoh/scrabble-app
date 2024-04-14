"use server";

import { writeQueries } from "./writeQueries";

export async function deleteAllQueries() {
  await writeQueries([]);
}
