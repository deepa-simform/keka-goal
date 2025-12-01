import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-lg border border-ds-gray-300 bg-white text-ds-gray-900 placeholder:text-ds-gray-500 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ds-brand-100 focus-visible:border-ds-brand-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-ds-gray-50 aria-invalid:border-ds-error-300 aria-invalid:focus-visible:ring-ds-error-100 file:border-0 file:bg-transparent file:text-sm file:font-medium",
  {
    variants: {
      size: {
        sm: "h-9 px-3 py-2 text-sm leading-5",
        default: "h-10 px-3.5 py-2.5 text-sm leading-5",
        lg: "h-11 px-3.5 py-2.5 text-base leading-6",
        xl: "h-12 px-4 py-3 text-base leading-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
}

function Input({ className, type, size = "default", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
