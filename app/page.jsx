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
    <div className="flex min-h-screen flex-col items-start  px-4">
      <h1 className="text-3xl font-extrabold text-scrabble-green p-4">
        Scrabble Solver
      </h1>
      <div className="m-2 px-6">
        <div className=" gap-6 mb-6 flex-row flex">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="player-letters"
            >
              Player Letters
            </label>
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
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="player-letters"
            >
              Board Letter
            </label>
            <LetterInput
              placeholder="e"
              width="2rem"
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
          className="text-white bg-scrabble-green
           hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      </div>

      <div style={{ color: "red" }}>
        {errorMessage ? <p>{errorMessage}</p> : null}
      </div>
      <SearchHistory />
    </div>
  );
}
