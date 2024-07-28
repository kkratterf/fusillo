"use client";

// Import core
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { VariantProps } from "class-variance-authority";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import { toggleVariants } from "../toggle";
import "./toggle-group.css";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  variant: "default",
});

export const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("toggle-group-component", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
        }),
        className
      )}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
