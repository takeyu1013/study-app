import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { Menu } from "@/app/_component/menu";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session.user);
  } else {
    redirect("/");
  }

  return (
    <main>
      {children}
      <Menu />
    </main>
  );
}
