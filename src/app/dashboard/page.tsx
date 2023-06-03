import Image from "next/image";

import { Bold, Flex, Title } from "@tremor/react";

import { ScrollArea } from "@/app/_component/scroll-area";
import SearchSection from "@/app/dashboard/search-section";

export default function Page() {
  return (
    <main className="h-screen p-2">
      <SearchSection />
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
                <div className="absolute inset-x-0 bottom-0 h-1/3 rounded-b-2xl bg-gradient-to-b from-transparent to-black">
                  <Bold className="absolute bottom-2 left-4 text-white">Foo</Bold>
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
