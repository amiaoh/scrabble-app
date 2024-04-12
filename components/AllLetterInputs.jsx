import { LetterInput } from "./LetterInput";

export function AllLetterInputs({ value, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="m-2" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="player-letters">Player Letters</label>
        <LetterInput
          placeholder="scrabbl"
          width="6rem"
          name="player-letters"
          value={value[0]}
          onChange={(newLetter) => {
            if (newLetter.length <= 7) {
              onChange([newLetter, value[1]]);
            }
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="player-letters">Board Letters</label>
        <LetterInput
          placeholder="e"
          width="1rem"
          name="board-letters"
          value={value[1]}
          onChange={(newLetter) => {
            if (newLetter.length <= 1) {
              onChange([value[0], newLetter]);
            }
          }}
        />
      </div>
    </div>
  );
}
