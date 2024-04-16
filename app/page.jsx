"use client";
import { useState } from "react";
import Link from "next/link";
import { SearchHistory } from "@/components/SearchHistory";
import { addQuery } from "./addQuery";
import { LetterInput } from "@/components/LetterInput";

export default function Home() {
  const [playerLetters, setPlayerLetters] = useState("");
  const [boardLetter, setBoardLetter] = useState("");
  const joinedLetters = playerLetters.concat(boardLetter);
  const [errorMessage, setErrorMessage] = useState(null);
  const anyInputIsEmpty =
    playerLetters.length === 0 || boardLetter.length === 0;
  return (
    <div>
      <h1>Scrabble Solver</h1>
      <p>This is the home page</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="m-2"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="player-letters">Player Letters</label>
          <LetterInput
            placeholder="scrabbl"
            width="6rem"
            name="player-letters"
            value={playerLetters}
            onChange={(newPlayerLetters) => {
              if (newPlayerLetters.length <= 7) {
                setPlayerLetters(newPlayerLetters);
              }
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="player-letters">Board Letter</label>
          <LetterInput
            placeholder="e"
            width="1rem"
            name="board-letters"
            value={boardLetter}
            onChange={(newBoardLetter) => {
              if (newBoardLetter.length <= 1) {
                setBoardLetter(newBoardLetter);
              }
            }}
          />
        </div>
      </div>
      <Link
        onClick={async () => {
          if (anyInputIsEmpty) {
            setErrorMessage(
              "Please enter 1-7 player letters and 1 board letter"
            );
            return;
          }
          await addQuery(joinedLetters);
        }}
        href={anyInputIsEmpty ? `/` : `/${joinedLetters}`}
      >
        Submit
      </Link>

      <div style={{ color: "red" }}>
        {errorMessage ? <p>{errorMessage}</p> : null}
      </div>
      <SearchHistory />
    </div>
  );
}
