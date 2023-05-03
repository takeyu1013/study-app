"use client";

import { cn } from "@/lib/utils";
import {
  ElementType,
  InputHTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from "react";
import { mergeRefs } from "react-merge-refs";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ElementType;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocusChange = (isFocused: boolean) => {
      const { current } = inputRef;
      if (!current) return;
      if (isFocused === false) {
        current.blur();
      } else {
        current.focus();
      }
      setIsFocused(isFocused);
    };

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
          ref={mergeRefs([inputRef, ref])}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
