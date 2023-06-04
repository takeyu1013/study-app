import { PropsWithChildren } from "react";

import SearchSection from "@/app/search/search-section";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen p-2">
      <SearchSection />
      {children}
    </div>
  );
}
