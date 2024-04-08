"use client";
import { AllLetterInputs } from "@/components/AllLetterInputs";
import { useState } from "react";
import { getAnagrams } from "./actions";

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
  return (
    <div>
      <h1>Scrabble Solver</h1>
      <p>This is the home page</p>
      <AllLetterInputs
        value={letters}
        onChange={(newLetters) => setLetters(newLetters)}
      />

      <button onClick={() => getAnagrams()}>Submit</button>
    </div>
  );
}
