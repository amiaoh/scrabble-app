"use client";

export function LetterInput({ value, onChange, width }) {
  return (
    <input
      style={{ width }}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        return;
      }}
    />
  );
}
