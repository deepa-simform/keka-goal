import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        gray: "bg-ds-gray-100 text-ds-gray-700",
        primary: "bg-ds-brand-50 text-ds-brand-700",
        error: "bg-ds-error-50 text-ds-error-700",
        warning: "bg-ds-warning-50 text-ds-warning-700",
        success: "bg-ds-success-50 text-ds-success-700",
        blue: "bg-ds-blue-50 text-ds-blue-700",
        blueLight: "bg-ds-blue-light-50 text-ds-blue-light-700",
        blueGray: "bg-ds-blue-gray-50 text-ds-blue-gray-700",
        indigo: "bg-ds-indigo-50 text-ds-indigo-700",
        purple: "bg-ds-purple-50 text-ds-purple-700",
        pink: "bg-ds-pink-50 text-ds-pink-700",
        rose: "bg-ds-rose-50 text-ds-rose-700",
        orange: "bg-ds-orange-50 text-ds-orange-700",
      },
      size: {
        sm: "h-[22px] px-2 py-0.5 text-xs leading-[18px] rounded-2xl gap-1",
        md: "h-6 px-2.5 py-0.5 text-sm leading-5 rounded-2xl gap-1",
        lg: "h-7 px-3 py-1 text-sm leading-5 rounded-2xl gap-1.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  onClose?: () => void;
  dot?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  avatar?: string;
  flag?: string;
}

function Badge({
  className,
  variant,
  size,
  children,
  onClose,
  dot,
  iconLeft,
  iconRight,
  avatar,
  flag,
  ...props
}: BadgeProps) {
  const iconSize =
    size === "sm" ? "size-3" : size === "md" ? "size-3.5" : "size-4";
  const dotSize =
    size === "sm" ? "size-1.5" : size === "md" ? "size-2" : "size-2";
  const avatarSize =
    size === "sm" ? "size-4" : size === "md" ? "size-5" : "size-5";

  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "rounded-full",
            dotSize,
            variant === "gray" && "bg-ds-gray-500",
            variant === "primary" && "bg-ds-brand-500",
            variant === "error" && "bg-ds-error-500",
            variant === "warning" && "bg-ds-warning-500",
            variant === "success" && "bg-ds-success-500",
            variant === "blue" && "bg-ds-blue-500",
            variant === "blueLight" && "bg-ds-blue-light-500",
            variant === "blueGray" && "bg-ds-blue-gray-500",
            variant === "indigo" && "bg-ds-indigo-500",
            variant === "purple" && "bg-ds-purple-500",
            variant === "pink" && "bg-ds-pink-500",
            variant === "rose" && "bg-ds-rose-500",
            variant === "orange" && "bg-ds-orange-500"
          )}
        />
      )}
      {avatar && (
        <img
          src={avatar}
          alt=""
          className={cn("rounded-full object-cover", avatarSize)}
        />
      )}
      {flag && (
        <img
          src={flag}
          alt=""
          className={cn(
            "rounded-sm object-cover",
            size === "sm" ? "size-4" : "size-5"
          )}
        />
      )}
      {iconLeft && <span className={iconSize}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={iconSize}>{iconRight}</span>}
      {onClose && (
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Remove badge"
        >
          <X className={iconSize} />
        </button>
      )}
    </span>
  );
}

export { Badge, badgeVariants };
