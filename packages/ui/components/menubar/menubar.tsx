"use client";

// Import core
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import { Check, ChevronRight, Circle } from "../icon";
import "./menubar.css";

export const MenubarMenu = MenubarPrimitive.Menu;

export const MenubarGroup = MenubarPrimitive.Group;

export const MenubarPortal = MenubarPrimitive.Portal;

export const MenubarSub = MenubarPrimitive.Sub;

export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

export const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root ref={ref} className={cn("menubar-component", className)} {...props} />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

export const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger ref={ref} className={cn("menubar-trigger", className)} {...props} />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

export const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn("menubar-subtrigger", inset && "pl-8", className)}
    {...props}>
    {children}
    <ChevronRight />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

export const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "menubar-subcontent data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

export const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "menubar-content data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

export const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item ref={ref} className={cn("menubar-item", inset && "pl-8", className)} {...props} />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

export const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn("menubar-checkbox-item", className)}
    checked={checked}
    {...props}>
    <span className="menubar-checkbox-item-span">
      <MenubarPrimitive.ItemIndicator>
        <Check className="menubar-checkbox-item-icon" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

export const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem ref={ref} className={cn("menubar-radio-item", className)} {...props}>
    <span className="menubar-radio-item-span">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="menubar-radio-item-icon" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

export const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label ref={ref} className={cn("menubar-label", inset && "pl-8", className)} {...props} />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

export const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("menubar-separator", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

export const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("menubar-shortcut", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";
