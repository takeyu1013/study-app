"use client";

import { SearchIcon } from "@heroicons/react/solid";
import { Input } from "@/app/_component/ui/input";

export const Search = () => {
  return (
    <Input type="search" icon={SearchIcon} placeholder="シェフやレシピを検索" />
  );
};
