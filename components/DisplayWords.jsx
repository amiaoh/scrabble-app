export function DisplayWords({ anagrams }) {
  if (!anagrams) {
    return <p>No anagrams to display. Hit submit to get started!</p>;
  }
  return (
    <ul>
      {anagrams.map((word, index) => {
        return <li key={index}>{word}</li>;
      })}
    </ul>
  );
}
