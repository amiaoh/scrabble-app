"use client";

import { DisplayWords } from "@/components/DisplayWords";
import { AllLetterInputs } from "@/components/AllLetterInputs";
import Link from "next/link";

import { getAnagrams } from "../actions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Word() {
  const [anagrams, setAnagrams] = useState([]);
  const currentURL = usePathname();
  const currentURLWithoutSlash = currentURL.substring(1);
  const [letters, setLetters] = useState(["scrabbl", "e"]);
  const joinedLetters = letters.join("");

  useEffect(() => {
    const getAnagramsFromBackendAndSetState = async () => {
      const newAnagrams = await getAnagrams(currentURLWithoutSlash);
      setAnagrams(newAnagrams);
    };
    getAnagramsFromBackendAndSetState();
  }, []);
  return (
    <div>
      <h2>{currentURLWithoutSlash}</h2>
      <AllLetterInputs
        value={letters}
        onChange={(newInput) => setLetters(newInput)}
      />
      <Link className="material-icons" href={`/${joinedLetters}`}>
        Submit
      </Link>
      <DisplayWords anagrams={anagrams} />
    </div>
  );
}
