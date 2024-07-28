// Import core
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./tag.css";

export const tagVariants = cva("tag-component", {
  variants: {
    colors: {
      red: "tag-red",
      orange: "tag-orange",
      amber: "tag-amber",
      yellow: "tag-yellow",
      lime: "tag-lime",
      green: "tag-green",
      emerald: "tag-emerald",
      teal: "tag-teal",
      cyan: "tag-cyan",
      sky: "tag-sky",
      blue: "tag-blue",
      indigo: "tag-indigo",
      violet: "tag-violet",
      purple: "tag-purple",
      fuchsia: "tag-fuchsia",
      pink: "tag-pink",
      rose: "tag-rose",
    },
  },
  defaultVariants: {
    colors: "blue",
  },
});

export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {}

export function Tag({ className, colors, ...props }: TagProps) {
  return <div className={cn(tagVariants({ colors }), className)} {...props} />;
}
