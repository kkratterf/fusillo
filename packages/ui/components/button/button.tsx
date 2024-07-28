"use client";

// Import core
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./button.css";

export const buttonVariants = cva("button-component", {
  variants: {
    variant: {
      primary: "button-primary bg-brand",
      secondary: "button-secondary",
      text: "button-text",
      link: "button-link",
      danger: "button-danger",
    },
    icon: {
      false: "",
      true: "icon-button",
    },
  },
  defaultVariants: {
    variant: "primary",
    icon: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  title?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, icon, asChild = false, title, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonContent = title || props.children;

    return (
      <Comp className={cn(buttonVariants({ variant, icon, className }))} ref={ref} {...props}>
        {buttonContent}
      </Comp>
    );
  }
);
Button.displayName = "Button";
