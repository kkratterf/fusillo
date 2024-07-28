"use client";

// Import core
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./switch.css";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root className={cn("switch-component", className)} {...props} ref={ref}>
    <SwitchPrimitives.Thumb className={cn("switch-thumb")} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
