"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function SearchHistory() {
  const [allQueries, setAllQueries] = useState(["as", "fd"]);
  const currentURL = usePathname();

  useEffect(() => {
    const newQueries = [...allQueries, currentURL.substring(1)].slice(-10);
    setAllQueries(
      newQueries.filter((query) => query.length > 0 && query !== "about")
    );
  }, [currentURL]);

  if (currentURL === "/about") {
    return <></>;
  }

  return (
    <div>
      <h3>Search History</h3>
      <h4>Last 10 searches</h4>
      {allQueries.map((query, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <p>{query}</p>
            <button
              onClick={() => {
                setAllQueries([
                  ...allQueries.slice(0, index),
                  ...allQueries.slice(index + 1),
                ]);
              }}
              style={{ height: "2rem" }}
            >
              ❌
            </button>
          </div>
        );
      })}
    </div>
  );
}
