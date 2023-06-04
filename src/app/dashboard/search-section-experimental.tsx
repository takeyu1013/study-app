"use client";

import { Suspense, useDeferredValue, useState } from "react";

import { Search } from "@/app/dashboard/search";

function SearchResults({ query }: { query: string }) {
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

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <Search
        type="search"
        placeholder="シェフやレシピを検索"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}
