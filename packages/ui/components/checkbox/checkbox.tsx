"use client";

// Import core
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import { Check } from "../icon";
import "./checkbox.css";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn("checkbox-component peer", className)} {...props}>
    <CheckboxPrimitive.Indicator className={cn("checkbox-indicator")}>
      <Check />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
