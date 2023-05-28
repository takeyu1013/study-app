"use client";

import { forwardRef, InputHTMLAttributes, useReducer, useRef } from "react";

import { cn } from "@/lib/utils";
import { useMergedRef } from "@mantine/hooks";
import { Icon } from "lucide-react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: Icon;
};

const SearchInput = forwardRef<HTMLInputElement, InputProps>(({ className, type, icon: Icon, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, handleFocusChange] = useReducer((_: boolean, isFocused: boolean) => {
    const { current } = inputRef;
    if (!current) return isFocused;
    if (isFocused === false) {
      current.blur();
    } else {
      current.focus();
    }
    return isFocused;
  }, false);
  const mergedRef = useMergedRef(ref, inputRef);

  return (
    <div
      className={cn(
        "relative flex w-full min-w-[10rem] items-center rounded-md border border-gray-300 bg-white text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200",
        isFocused && "ring-2",
        className
      )}
      onFocus={() => {
        handleFocusChange(true);
      }}
      onBlur={() => {
        handleFocusChange(false);
      }}
    >
      {Icon ? <Icon className="ml-3.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" /> : null}
      <input
        className="w-full border-0 bg-transparent px-4 py-2 font-medium placeholder:text-gray-500 focus:outline-none focus:ring-0"
        type={type}
        ref={mergedRef}
        {...props}
      />
    </div>
  );
});
SearchInput.displayName = "SearchInput";

export { SearchInput };
