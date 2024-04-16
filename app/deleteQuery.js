"use server";

import { getSearchHistory } from "./getSearchHistory";
import { writeQueries } from "./writeQueries";

export async function deleteQuery(queryToBeDeleted) {
  const queries = await getSearchHistory();
  const newQueries = queries.filter((query) => query !== queryToBeDeleted);
  await writeQueries(newQueries);
}
