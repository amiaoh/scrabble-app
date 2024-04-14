"use server";

import { getSearchHistory } from "./getSearchHistory";
import { writeQueries } from "./writeQueries";
export async function addQuery(newQuery) {
  const queryHistory = await getSearchHistory();
  writeQueries([...queryHistory, newQuery]);
}
