import * as React from "react";

import { SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <div className="flex gap-2 rounded-md border bg-transparent px-3 py-2 text-sm">
      <SearchIcon />
      <input
        type={type}
        className={cn(
          "placeholder:text-muted-foreground w-full bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
