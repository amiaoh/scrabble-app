export function DisplayWords({ anagrams }) {
  if (!anagrams) {
    return <p>No anagrams to display.</p>;
  }
  return (
    <div>
      <h3>Anagrams</h3>
      <ul>
        {anagrams.map((word, index) => {
          return <li key={index}>{word}</li>;
        })}
      </ul>
    </div>
  );
}
