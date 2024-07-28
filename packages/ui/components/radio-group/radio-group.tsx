"use client";

// Import core
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import { Circle } from "../icon";
import "./radio-group.css";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("radio-group-component", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item ref={ref} className={cn("radio-group-item", className)} {...props}>
      <RadioGroupPrimitive.Indicator className="radio-group-item-indicator">
        <Circle />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
