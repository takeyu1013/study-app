import * as React from "react";

import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <div className="relative">
      <SearchIcon color="#908E96" className="absolute left-4 top-[10px] w-5 h-5" />
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl bg-[#EEEDEF] pl-12 pr-4 py-2 font-bold ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Search.displayName = "Search";

export { Search };
