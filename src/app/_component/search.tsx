"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/app/_component/input";

export const Search = () => {
  return (
    <Input type="search" icon={SearchIcon} placeholder="シェフやレシピを検索" />
  );
};
