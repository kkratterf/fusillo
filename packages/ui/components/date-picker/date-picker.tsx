"use client";

// Import core
import * as React from "react";
import { format } from "date-fns";
// Import customs
import { cn } from "@fusillo/lib/twMerge";
import { Calendar as CalendarIcon } from "../icon";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

export const DatePicker = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"secondary"}
          className={cn("w-[280px] justify-start text-left font-normal", !date && "text-description")}>
          <CalendarIcon className="mr-2 size-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
};
DatePicker.displayName = "DatePicker";
