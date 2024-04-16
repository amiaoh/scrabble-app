"use client";
import { use, useEffect, useState } from "react";
import { getSearchHistory } from "@/app/getSearchHistory";
import { deleteQuery } from "@/app/deleteQuery";
import { deleteAllQueries } from "@/app/deleteAllQueries";

export function SearchHistory() {
  const [allQueries, setAllQueries] = useState([]);

  return (
    <div className="block max-w-sm p-6 m-4 bg-gray-100 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="text-lg font-bold text-scrabble-green ">Search History</h3>
      <p className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
        Last 5 searches
      </p>
      <div className="flex flex-row">
        <button
          className="text-white bg-scrabble-green
      hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={async () => {
            const updatedQueries = await getSearchHistory();
            setAllQueries(updatedQueries);
          }}
        >
          Refresh Search History
        </button>
        <button
          className="text-white bg-scrabble-green
                  hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={async () => {
            deleteAllQueries();
            const updatedQueries = await getSearchHistory();
            setAllQueries(updatedQueries);
          }}
        >
          Clear all
        </button>
      </div>
      {allQueries === undefined ? (
        <></>
      ) : (
        allQueries.map((query, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <p>{query}</p>
              <button
                onClick={async () => {
                  await deleteQuery(query);
                  const updatedQueries = await getSearchHistory();
                  setAllQueries(updatedQueries);
                }}
                style={{ height: "2rem" }}
              >
                ❌
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
