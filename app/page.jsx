"use client";
import { AllLetterInputs } from "@/components/AllLetterInputs";
import { useState } from "react";
import { getAnagrams } from "./actions";
import { DisplayWords } from "@/components/DisplayWords";

export default function Home() {
  const [letters, setLetters] = useState([
    "s",
    "c",
    "r",
    "a",
    "b",
    "b",
    "l",
    "e",
  ]);
  const [currentAnagrams, setCurrentAnagrams] = useState(null);
  return (
    <div>
      <h1>Scrabble Solver</h1>
      <p>This is the home page</p>
      <AllLetterInputs
        value={letters}
        onChange={(newLetters) => setLetters(newLetters)}
      />

      <button
        onClick={async () => {
          setCurrentAnagrams(await getAnagrams(letters));
        }}
      >
        Submit
      </button>
      <DisplayWords anagrams={currentAnagrams} />
    </div>
  );
}
