"use client";

import { useSearchParams } from "next/navigation";

import SearchResults from "@/app/search/search-results";

export default function Page() {
  const params = useSearchParams();
  const query = params.get("q") || "";

  return (
    <main>
      <SearchResults query={query} />
    </main>
  );
}
