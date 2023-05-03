import { Flex, Title } from "@tremor/react";
import Image from "next/image";
import { ScrollArea } from "./_component/ui/scroll-area";
import { Menu } from "@/app/_component/Menu";
import { Search } from "./_component/Search";

export default function Home() {
  return (
    <main className="p-2 bg-neutral-100 h-screen">
      <Search />
      <Title>注目のシェフ</Title>
      <ScrollArea>
        <Flex justifyContent="start" className="gap-3">
          {[...Array(10)].map((_, index) => {
            return (
              <Image
                key={index}
                alt="image"
                src="https://placekitten.com/150/250"
                width={150}
                height={250}
                className="rounded-2xl shrink-0"
              />
            );
          })}
        </Flex>
      </ScrollArea>
      <Title>話題のレシピ</Title>
      <Title>シェフ</Title>
      <Menu />
    </main>
  );
}
