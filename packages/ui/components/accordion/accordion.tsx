"use client";

// Import core
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// Import customs
import { ChevronDown } from "../icon";
import { cn } from "@fusillo/lib/twMerge";
import "./accordion.css";

export const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <AccordionPrimitive.Root ref={ref} className={cn("accordion-root", className)} {...props} />;
});
Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("accordion-item", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="accordion-header">
    <AccordionPrimitive.Trigger ref={ref} className={cn("accordion-trigger", className)} {...props}>
      {children}
      <ChevronDown className="accordion-icon" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={cn("accordion-content", className)} {...props}>
    <div className="accordion-content-children">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
