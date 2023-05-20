"use client";

import { cn } from "@/lib/utils";
import { useMergedRef } from "@mantine/hooks";
import { Icon } from "lucide-react";
import { InputHTMLAttributes, forwardRef, useReducer, useRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: Icon;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, handleFocusChange] = useReducer(
      (_: boolean, isFocused: boolean) => {
        const { current } = inputRef;
        if (!current) return isFocused;
        if (isFocused === false) {
          current.blur();
        } else {
          current.focus();
        }
        return isFocused;
      },
      false
    );
    const mergedRef = useMergedRef(ref, inputRef);

    return (
      <div
        className={cn(
          "relative w-full flex items-center min-w-[10rem] focus:outline-none focus:ring-2 bg-white hover:bg-gray-50 text-gray-500 border-gray-300 focus:ring-blue-200 rounded-md border shadow-sm",
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
        {Icon ? (
          <Icon
            className="shrink-0 h-5 w-5 text-gray-400 ml-3.5"
            aria-hidden="true"
          />
        ) : null}
        <input
          className="w-full focus:outline-none focus:ring-0 bg-transparent pl-4 pr-4 py-2 font-medium border-0 placeholder:text-gray-500"
          type={type}
          ref={mergedRef}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
