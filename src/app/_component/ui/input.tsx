import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType;
}

function mergeRefs<T>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleFocusChange = (isFocused: boolean) => {
      if (isFocused === false) {
        inputRef.current?.blur();
      } else {
        inputRef.current?.focus();
      }
      setIsFocused(isFocused);
    };
    const Icon = icon;

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
          ref={mergeRefs([ref, inputRef])}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
