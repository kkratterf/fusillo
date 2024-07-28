"use client";

// Import core
import * as React from "react";
// Import customs
import Preview from "@components/preview/preview";
import { cn } from "@fusillo/lib/twMerge";
import { Button } from "@fusillo/ui/components/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@fusillo/ui/components/command";
import { Popover, PopoverContent, PopoverTrigger } from "@fusillo/ui/components/popover";
import { Check, ChevronsUpDown } from "@fusillo/ui/components/icon";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const ComboboxDemo = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[240px] justify-between">
          {value ? frameworks.find((framework) => framework.value === value)?.label : "Select framework..."}
          <ChevronsUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}>
                <Check className={cn("mr-2", value === framework.value ? "opacity-100" : "opacity-0")} />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export const ComboboxPreview = () => (
  <Preview>
    <ComboboxDemo />
  </Preview>
);
