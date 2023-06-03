"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebouncedValue } from "@mantine/hooks";

import { Search } from "@/app/dashboard/search";

export default function SearchSection() {
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const { push } = useRouter();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [debaoucedValue] = useDebouncedValue(value, 1000);

  useEffect(() => {
    console.log("call API", debaoucedValue);
    setIsLoading(false);
    const param = debaoucedValue.trim();
    if (param === "") {
      push(pathname);
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", param);
    push(pathname + "?" + params.toString());
  }, [debaoucedValue, searchParams, pathname, push]);

  return (
    <>
      <Search
        type="search"
        placeholder="シェフやレシピを検索"
        value={value}
        onChange={(event) => {
          setIsLoading(true);
          const {
            target: { value },
          } = event;
          setValue(value);
        }}
      />
      {isLoading && <div>Loading...</div>}
    </>
  );
}
