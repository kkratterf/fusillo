"use client";

// Import core
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./segmented.css";

export const Segmented = TabsPrimitive.Root;

export const SegmentedList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn("segmented-list", className)} {...props} />
));
SegmentedList.displayName = TabsPrimitive.List.displayName;

export const SegmentedTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn("segmented-trigger", className)} {...props} />
));
SegmentedTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const SegmentedContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn("segmented-content", className)} {...props} />
));
SegmentedContent.displayName = TabsPrimitive.Content.displayName;
