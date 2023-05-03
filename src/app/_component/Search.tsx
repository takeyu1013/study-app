"use client";

import { SearchIcon } from "@heroicons/react/solid";
import { Input } from "./ui/input";

export default function Search() {
  return <Input icon={SearchIcon} placeholder="シェフやレシピを検索" />;
}
