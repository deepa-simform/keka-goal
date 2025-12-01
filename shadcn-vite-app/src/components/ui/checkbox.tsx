"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded border border-ds-gray-300 bg-white transition-colors",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ds-brand-100 focus-visible:border-ds-brand-300",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-ds-brand-50 data-[state=checked]:border-ds-brand-600",
        "data-[state=indeterminate]:bg-ds-brand-50 data-[state=indeterminate]:border-ds-brand-600",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-ds-brand-600"
      >
        <CheckIcon className="size-3" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
