import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Scrabble Solver</h1>
      <p>This is the home page</p>
      <Link href="/about">About</Link>
    </div>
  );
}
