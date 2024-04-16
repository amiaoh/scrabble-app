export function DisplayWords({ anagrams, compulsoryLetter }) {
  const filteredAnagrams = anagrams.filter((anagram) => {
    return anagram.includes(compulsoryLetter) && anagram.length >= 2;
  });
  if (!filteredAnagrams) {
    return <p>No anagrams to display.</p>;
  }
  return (
    <div>
      <h3>Anagrams</h3>
      <ul>
        {filteredAnagrams.map((word, index) => {
          return <li key={index}>{word}</li>;
        })}
      </ul>
    </div>
  );
}
