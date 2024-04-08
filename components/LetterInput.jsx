"use client";

export function LetterInput({ value, onChange }) {
  return (
    <input
      style={{ width: "1rem" }}
      value={value}
      onChange={(e) => {
        if (e.target.value.length < 2 && /[a-z/\s]$/.test(e.target.value)) {
          onChange(e.target.value);
        }
        return;
      }}
    />
  );
}
