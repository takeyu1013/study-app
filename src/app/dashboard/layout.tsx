import { Menu } from "@/app/_component/menu";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session.user);
  }
  return (
    <main>
      {children}
      <Menu />
    </main>
  );
}
