"use client";

// Import core
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./scroll-area.css";

export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("scroll-area-component", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="scroll-area-viewport">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "scroll-bar-component",
      orientation === "vertical" && "scroll-bar-vertical",
      orientation === "horizontal" && "scroll-bar-horizontal",
      className
    )}
    {...props}>
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn("scroll-area-thumb", orientation === "vertical" && "flex-1")}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
