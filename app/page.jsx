"use client";
import { AllLetterInputs } from "@/components/AllLetterInputs";
import { useState } from "react";
import Link from "next/link";
import { SearchHistory } from "@/components/SearchHistory";
import { addQuery } from "./addQuery";

import "tailwindcss/tailwind.css";

export default function Home() {
  const [letters, setLetters] = useState(["", ""]);
  const joinedLetters = letters.join("");
  return (
    <div>
      <h1>Scrabble Solver</h1>
      <p>This is the home page</p>
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
      <SearchHistory />
    </div>
  );
}
