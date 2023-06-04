"use client";

import { useRef, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Search } from "@/app/dashboard/search";

function List({ q }: { q: string }) {
  return (
    <ul>
      {["aaa", "bbb", "ccc", "ddd"]
        .filter((string) => {
          if (q === "") return true;
          return string.includes(q);
        })
        .map((string, index) => {
          return <li key={index}>{string}</li>;
        })}
    </ul>
  );
}

export default function SearchSection() {
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const { push } = useRouter();
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Search
        type="search"
        placeholder="シェフやレシピを検索"
        onChange={(event) => {
          startTransition(() => {
            setTimeout(() => {
              const {
                target: { value },
              } = event;
              const param = value.trim();
              console.log("param", param);
              if (param === "") {
                push(pathname);
                return;
              }
              const params = new URLSearchParams(searchParams.toString());
              params.set("q", param);
              push(pathname + "?" + params.toString());
            }, 1000);
          });
        }}
        ref={inputRef}
      />
      {isPending && <div>Loading...</div>}
      <List q={searchParams.get("q") || ""} />
    </>
  );
}
