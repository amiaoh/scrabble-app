"use client";
import { LetterInput } from "@/components/LetterInput";
import { useState } from "react";
export default function Home() {
  const [letter, setLetter] = useState("");
  return (
    <div>
      <h1>Scrabble Solver</h1>
      <p>This is the home page</p>
      <LetterInput
        value={letter}
        onChange={(newLetter) => setLetter(newLetter)}
      />
      <button onClick={() => console.log(letter)}>Submit</button>
    </div>
  );
}
