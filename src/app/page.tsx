import { Flex, Title } from "@tremor/react";
import Search from "./_component/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-2 bg-neutral-100 h-screen">
      <Search />
      <Title>注目のシェフ</Title>
      <Flex justifyContent="start" className="gap-4">
        <Image
          alt="image"
          src="https://placekitten.com/150/250"
          width={150}
          height={250}
          className="rounded-2xl"
        />
        <Image
          alt="image"
          src="https://placekitten.com/150/250"
          width={150}
          height={250}
          className="rounded-2xl"
        />
      </Flex>
      <Title>話題のレシピ</Title>
      <Title>シェフ</Title>
    </main>
  );
}
