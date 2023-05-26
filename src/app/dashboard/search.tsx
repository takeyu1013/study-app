"use client";

import { SearchIcon } from "lucide-react";
import { SearchInput } from "@/app/_component/search-input";

export const Search = () => {
  return (
    <SearchInput
      type="search"
      icon={SearchIcon}
      placeholder="シェフやレシピを検索"
    />
  );
};
