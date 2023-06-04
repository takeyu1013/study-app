"use client";

import { useRef, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Search } from "@/app/dashboard/search";

export default function SearchSection() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { push } = useRouter();

  const [timer, setTimer] = useState(setTimeout(() => undefined));
  const inputRef = useRef<HTMLInputElement>(null);
  const { current } = inputRef;

  return (
    <>
      <Search
        type="search"
        placeholder="シェフやレシピを検索"
        onChange={(event) =>
          startTransition(() => {
            clearTimeout(timer);
            setTimer(
              setTimeout(() => {
                const {
                  target: { value },
                } = event;
                const param = value.trim();
                if (param === "") {
                  push(pathname);
                  return;
                }
                const params = new URLSearchParams(searchParams.toString());
                params.set("q", param);
                push(pathname + "?" + params.toString());
              }, 1000)
            );
          })
        }
        ref={inputRef}
      />
      {(isPending || (current && current.value !== q)) && <div>Loading...</div>}
    </>
  );
}
