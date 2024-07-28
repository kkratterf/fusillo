"use client";

// Import core
import * as React from "react";
import { DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import { Search } from "../icon";
import { Dialog, DialogContent } from "../dialog";
import "./command.css";

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={cn("command-component", className)} {...props} />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="command-dialog-content p-0">
        <Command className="command-dialog">{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

export const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="command-input-container" cmdk-input-wrapper="">
    <Search className="command-input-search" />
    <CommandPrimitive.Input ref={ref} className={cn("command-input", className)} {...props} />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List ref={ref} className={cn("command-list", className)} {...props} />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="command-empty" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group ref={ref} className={cn("command-group", className)} {...props} />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("command-separator", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item ref={ref} className={cn("command-item", className)} {...props} />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

export const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("command-shortcut", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";
