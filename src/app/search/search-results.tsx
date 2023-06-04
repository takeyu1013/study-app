export default function SearchResults({ query }: { query: string }) {
  return (
    <ul>
      {["aaa", "bbb", "ccc", "ddd"]
        .filter((string) => {
          if (query === "") return true;
          return string.includes(query);
        })
        .map((string, index) => {
          return <li key={index}>{string}</li>;
        })}
    </ul>
  );
}
