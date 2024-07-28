"use client";

// Import core
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./separator.css";

export const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "separator-component",
      orientation === "horizontal" ? "separator-horizontal" : "separator-vertical",
      className
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
