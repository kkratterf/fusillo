// Import core
import * as React from "react";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./input.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return <input type={type} className={cn("input-component", className)} ref={ref} {...props} />;
});
Input.displayName = "Input";
