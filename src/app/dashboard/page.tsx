import { Bold, Flex, Title } from "@tremor/react";
import Image from "next/image";

import { ScrollArea } from "@/app/_component/scroll-area";
import { Search } from "@/app/_component/search";

export default function Page() {
  return (
    <main className="p-2 bg-neutral-100 h-screen">
      <Search />
      <Title>注目のシェフ</Title>
      <ScrollArea>
        <Flex justifyContent="start" className="gap-3">
          {[...Array(10)].map((_, index) => {
            return (
              <div key={index} className="relative shrink-0">
                <Image
                  alt="image"
                  src="https://placekitten.com/150/250"
                  width={150}
                  height={250}
                  className="rounded-2xl"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black rounded-b-2xl">
                  <Bold className="text-white absolute left-4 bottom-2">
                    Foo
                  </Bold>
                </div>
              </div>
            );
          })}
        </Flex>
      </ScrollArea>
      <Title>話題のレシピ</Title>
      <Title>シェフ</Title>
    </main>
  );
}
