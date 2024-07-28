"use client";

// Import core
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./slider.css";

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn("slider-component", className)} {...props}>
    <SliderPrimitive.Track className="slider-track">
      <SliderPrimitive.Range className="slider-range" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="slider-thumb" />
    <SliderPrimitive.Thumb className="slider-thumb" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
