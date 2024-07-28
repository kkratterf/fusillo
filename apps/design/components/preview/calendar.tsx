"use client";

// Import core
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";
// Import customs
import Preview from "@components/preview/preview";
import { Calendar } from "@fusillo/ui/components/calendar";
import { cn } from "@fusillo/lib/twMerge";
import { Button } from "@fusillo/ui/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@fusillo/ui/components/form";
import { Popover, PopoverContent, PopoverTrigger } from "@fusillo/ui/components/popover";
import { toast } from "@fusillo/ui/components/toast";
import { CalendarIcon } from "@fusillo/ui/components/icon";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const CalendarForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-subtle border-default mt-2 w-[340px] rounded border p-4">
          <code className="text">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="secondary"
                      className={cn("w-60 pl-3 text-left font-normal", !field.value && "text-placeholder")}>
                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="opacity-disabled ml-auto size-4" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    initialFocus
                    className="calendar-fix"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const CalendarPreview = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Preview>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border-default calendar-fix rounded border"
      />
    </Preview>
  );
};

export const CalendarWithForm = () => (
  <Preview>
    <CalendarForm />
  </Preview>
);
