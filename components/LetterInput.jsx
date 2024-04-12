"use client";

export function LetterInput({ value, onChange, width, placeholder }) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      style={{ width }}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        return;
      }}
    />
  );
}
