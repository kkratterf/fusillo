"use client";

// Import core
import * as React from "react";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import "./textarea.css";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return <textarea className={cn("textarea-component", className)} ref={ref} {...props} />;
  }
);
Textarea.displayName = "Textarea";
