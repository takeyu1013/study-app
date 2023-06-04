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
  const [isPending, startTransition] = useTransition();
  const [timer, setTimer] = useState(setTimeout(() => undefined));
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { push } = useRouter();

  return (
    <>
      <Search
        type="search"
        placeholder="シェフやレシピを検索"
        onChange={(event) => {
          startTransition(() => {
            clearTimeout(timer);
            setTimer(
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
              }, 1000)
            );
          });
        }}
        ref={inputRef}
      />
      {(isPending || inputRef.current?.value !== q) && <div>Loading...</div>}
      <List q={q} />
    </>
  );
}
