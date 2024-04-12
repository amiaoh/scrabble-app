"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function SearchHistory() {
  const [allQueries, setAllQueries] = useState(["as", "fd"]);
  const currentURL = usePathname();

  useEffect(() => {
    const newQueries = [...allQueries, currentURL.substring(1)];
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
      {allQueries.map((query, index) => {
        return <p key={index}>{query}</p>;
      })}
    </div>
  );
}
