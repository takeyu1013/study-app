"use client";

import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";

export default function Search() {
  return <TextInput icon={SearchIcon} placeholder="シェフやレシピを検索" />;
}
