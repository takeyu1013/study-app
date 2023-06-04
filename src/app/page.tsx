import Link from "next/link";

import { Button } from "@/app/_component/button";

import { Login } from "./_component/login";

export default function Home() {
  return (
    <main className="flex gap-2 h-screen items-center justify-center">
      <Login />
      <Button variant="outline">
        <Link href={"/dashboard"}>ログインせずに始める</Link>
      </Button>
    </main>
  );
}
