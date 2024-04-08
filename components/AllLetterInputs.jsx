import { LetterInput } from "./LetterInput";

export function AllLetterInputs({ value, onChange }) {
  const letterInputSeed = Array(8)
    .fill(0)
    .map((_, i) => (
      <LetterInput
        key={i}
        value={value[i]}
        onChange={(newLetter) => {
          onChange([...value.slice(0, i), newLetter, ...value.slice(i + 1)]);
        }}
      />
    ));
  return letterInputSeed;
}
