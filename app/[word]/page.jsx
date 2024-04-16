"use client";

import { DisplayWords } from "@/components/DisplayWords";
import Link from "next/link";
import { getAnagrams } from "../getAnagrams";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getSearchHistory } from "../getSearchHistory";
import { addQuery } from "../addQuery";
import { SearchHistory } from "@/components/SearchHistory";
import { LetterInput } from "@/components/LetterInput";

export default function Word() {
  const [anagrams, setAnagrams] = useState([]);
  const currentURL = usePathname();
  const currentURLWithoutSlash = currentURL.substring(1);
  const [playerLetters, setPlayerLetters] = useState("");
  const [boardLetter, setBoardLetter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const joinedLetters = playerLetters.concat(boardLetter);
  const anyInputIsEmpty =
    playerLetters.length === 0 || boardLetter.length === 0;

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
        href={anyInputIsEmpty ? `${currentURL}` : `/${joinedLetters}`}
      >
        Submit
      </Link>
      <div style={{ color: "red" }}>
        {errorMessage ? <p>{errorMessage}</p> : null}
      </div>
      <DisplayWords anagrams={anagrams} />
      <SearchHistory />
    </div>
  );
}
