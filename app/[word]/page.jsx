"use client";

import { DisplayWords } from "@/components/DisplayWords";
import { AllLetterInputs } from "@/components/AllLetterInputs";
import Link from "next/link";
import { getAnagrams } from "../getAnagrams";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getSearchHistory } from "../getSearchHistory";
import { addQuery } from "../addQuery";
import { SearchHistory } from "@/components/SearchHistory";

export default function Word() {
  const [anagrams, setAnagrams] = useState([]);
  const currentURL = usePathname();
  const currentURLWithoutSlash = currentURL.substring(1);
  const [letters, setLetters] = useState(["", ""]);
  const joinedLetters = letters.join("");

  useEffect(() => {
    const getAnagramsFromBackendAndSetState = async () => {
      const newAnagrams = await getAnagrams(currentURLWithoutSlash);
      setAnagrams(newAnagrams);
    };
    getAnagramsFromBackendAndSetState();
    getSearchHistory();
  }, []);
  return (
    <div>
      <h2>{currentURLWithoutSlash}</h2>
      <AllLetterInputs
        value={letters}
        onChange={(newInput) => setLetters(newInput)}
      />
      <Link
        onClick={async () => {
          await addQuery(joinedLetters);
        }}
        href={`/${joinedLetters}`}
      >
        Submit
      </Link>
      <DisplayWords anagrams={anagrams} />
      <SearchHistory />
    </div>
  );
}
