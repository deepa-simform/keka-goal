import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold border transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-ds-brand-100 focus-visible:ring-offset-0",
  {
    variants: {
      variant: {
        default:
          "bg-ds-brand-600 border-ds-brand-600 text-white hover:bg-ds-brand-700 hover:border-ds-brand-700 focus-visible:ring-ds-brand-100 shadow-ds-xs",
        destructive:
          "bg-ds-error-600 border-ds-error-600 text-white hover:bg-ds-error-700 hover:border-ds-error-700 focus-visible:ring-ds-error-100 shadow-ds-xs",
        outline:
          "bg-white border-ds-gray-300 text-ds-gray-700 hover:bg-ds-gray-50 focus-visible:ring-ds-brand-100 shadow-ds-xs",
        secondary:
          "bg-ds-brand-50 border-ds-brand-200 text-ds-brand-700 hover:bg-ds-brand-100 focus-visible:ring-ds-brand-100 shadow-ds-xs",
        ghost:
          "bg-transparent border-transparent text-ds-gray-700 hover:bg-ds-gray-100 focus-visible:ring-ds-brand-100",
        link: "bg-transparent border-transparent text-ds-brand-700 underline-offset-4 hover:underline focus-visible:ring-ds-brand-100",
      },
      size: {
        sm: "h-9 px-3.5 py-2 text-sm leading-5 has-[>svg]:px-3.5 [&_svg]:size-5",
        default:
          "h-10 px-4 py-2.5 text-sm leading-5 has-[>svg]:px-4 [&_svg]:size-5",
        lg: "h-11 px-4.5 py-2.5 text-base leading-6 has-[>svg]:px-4.5 [&_svg]:size-5",
        xl: "h-12 px-5 py-3 text-base leading-6 has-[>svg]:px-5 [&_svg]:size-5",
        "icon-sm": "size-9 p-2 [&_svg]:size-5",
        icon: "size-10 p-2.5 [&_svg]:size-5",
        "icon-lg": "size-11 p-3 [&_svg]:size-5",
        "icon-xl": "size-12 p-3.5 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
