"use client";
import { useEffect, useState } from "react";
import { getSearchHistory } from "@/app/getSearchHistory";
import { deleteQuery } from "@/app/deleteQuery";
import { deleteAllQueries } from "@/app/deleteAllQueries";

export function SearchHistory() {
  const [allQueries, setAllQueries] = useState([]);

  useEffect(() => {
    const getSearchHistoryFromBackendAndSetState = async () => {
      const searchHistory = await getSearchHistory();
      setAllQueries(searchHistory);
      console.log("fetched queries");
    };
    console.log("running useeffect");
    getSearchHistoryFromBackendAndSetState();
  }, []);

  return (
    <div>
      <h3>Search History</h3>
      <h4>Last 5 searches</h4>
      <button
        onClick={async () => {
          deleteAllQueries();
          const updatedQueries = await getSearchHistory();
          setAllQueries(updatedQueries);
        }}
      >
        Clear all history
      </button>

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
