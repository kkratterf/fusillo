"use client";

// Import core
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./avatar.css";

const avatarVariants = cva("avatar-component", {
  variants: {
    size: {
      xs: "avatar-xs",
      sm: "avatar-sm",
      md: "avatar-md",
      lg: "avatar-lg",
      xl: "avatar-xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & VariantProps<typeof avatarVariants>
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root ref={ref} className={cn(avatarVariants({ size }), className)} {...props} />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("avatar-image", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback ref={ref} className={cn("avatar-fallback", className)} {...props} />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
