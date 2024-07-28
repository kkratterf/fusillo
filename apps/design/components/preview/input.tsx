"use client";

// Import core
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// Import customs
import Preview from "@components/preview/preview";
import { Input } from "@fusillo/ui/components/input";
import { Label } from "@fusillo/ui/components/label";
import { Button } from "@fusillo/ui/components/button";
import { toast } from "@fusillo/ui/components/toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@fusillo/ui/components/form";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const InputFormDemo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[340px] space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="@mscott" {...field} className="input-docs" />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const InputPreview = () => (
  <Preview>
    <Input type="email" placeholder="Email" className="input-docs w-80" />
  </Preview>
);

export const InputFile = () => (
  <Preview>
    <Input type="file" className="input-docs w-80" />
  </Preview>
);

export const InputDisabled = () => (
  <Preview>
    <Input placeholder="Email" disabled className="input-docs w-80" />
  </Preview>
);

export const InputWithLabel = () => (
  <Preview>
    <div className="grid w-80 max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" className="input-docs" />
    </div>
  </Preview>
);

export const InputWithButton = () => (
  <Preview>
    <div className="flex w-80 max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" className="input-docs" />
      <Button type="submit">Subscribe</Button>
    </div>
  </Preview>
);

export const InputWithForm = () => (
  <Preview>
    <InputFormDemo />
  </Preview>
);
