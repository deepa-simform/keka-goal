import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-ds-gray-300 bg-white px-3.5 py-2.5 text-base text-ds-gray-900 placeholder:text-ds-gray-500 transition-colors resize-y",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ds-brand-100 focus-visible:border-ds-brand-300",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-ds-gray-50",
        "aria-invalid:border-ds-error-300 aria-invalid:focus-visible:ring-ds-error-100",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
