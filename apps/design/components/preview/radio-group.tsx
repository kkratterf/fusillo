"use client";

// Import core
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// Import customs
import Preview from "@components/preview/preview";
import { Label } from "@fusillo/ui/components/label";
import { RadioGroup, RadioGroupItem } from "@fusillo/ui/components/radio-group";
import { Button } from "@fusillo/ui/components/button";
import { toast } from "@fusillo/ui/components/toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@fusillo/ui/components/form";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

const RadioGroupForm = () => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">All new messages</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">Direct messages and mentions</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const RadioGroupPreview = () => (
  <Preview>
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  </Preview>
);

export const RadioGroupDefault = () => (
  <Preview>
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r4" />
        <Label htmlFor="r4">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r5" />
        <Label htmlFor="r5">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r6" />
        <Label htmlFor="r6">Compact</Label>
      </div>
    </RadioGroup>
  </Preview>
);

export const RadioGroupWithForm = () => (
  <Preview>
    <RadioGroupForm />
  </Preview>
);
