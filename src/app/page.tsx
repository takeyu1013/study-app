import Link from "next/link";

import { Button } from "@/app/_component/button";

import { Login } from "./_component/login";

export default function Home() {
  return (
    <main className="flex gap-2 h-screen items-center justify-center">
      <Login />
      <Link href={"/search"}>
        <Button variant="outline">ログインせずに始める</Button>
      </Link>
    </main>
  );
}
