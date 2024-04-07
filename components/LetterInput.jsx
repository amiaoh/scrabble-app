"use client";
import { useState } from "react";

export function LetterInput({ value, onChange }) {
  return (
    <input
      style={{ width: "1rem" }}
      placeholder="a"
      value={value}
      onChange={(e) => {
        if (e.target.value.length <= 1 && /[a-z]$/.test(e.target.value)) {
          onChange(e.target.value);
        }
        return;
      }}
    />
  );
}
