import { Menu } from "@/app/_component/menu";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <Menu />
    </main>
  );
}
