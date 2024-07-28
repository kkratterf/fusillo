// Import core
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./badge.css";

const badgeVariants = cva("badge-component", {
  variants: {
    status: {
      default: "badge-default",
      brand: "badge-brand",
      danger: "badge-danger",
      warning: "badge-warning",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, status, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ status }), className)} {...props} />;
}

export { Badge, badgeVariants };
