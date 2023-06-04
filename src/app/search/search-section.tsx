"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Search } from "@/app/dashboard/search";

export default function SearchSection() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  return (
    <>
      <Search
        type="search"
        placeholder="シェフやレシピを検索"
        onChange={(event) =>
          startTransition(() => {
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
          })
        }
      />
      {isPending && <div>Loading...</div>}
    </>
  );
}
