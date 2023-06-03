"use client";

import { memo, useDeferredValue, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Search } from "@/app/dashboard/search";

export default function SearchSection() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "default");
  const deferredQuery = useDeferredValue(query);

  console.log("q", query);
  return (
    <div>
      <Search
        placeholder="シェフやレシピを検索"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {deferredQuery && <SlowList text={deferredQuery} />}
    </div>
  );
}

const SlowList = memo(function SlowList({ text }: { text: string }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowItem({ text }: { text: string }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className="item">Text: {text}</li>;
}
