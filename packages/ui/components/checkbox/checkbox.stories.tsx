"use client";

// Import core
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// Import customs
import { Checkbox } from "./checkbox";
import { Label } from "../label";
import { Button } from "../button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { ToastProvider, toast } from "../toast";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const FormSchema = z.object({
  mobile: z.boolean().default(false).optional(),
});

const CheckboxReactHookFormSingle = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mobile: true,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className="border-default flex flex-row items-start space-x-3 space-y-0 rounded border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Use different settings for my mobile devices</FormLabel>
                <FormDescription>
                  You can manage your mobile notifications in the{" "}
                  <Link href="/examples/forms">mobile settings</Link> page.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const FormSchemaMultiple = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const CheckboxReactHookFormMultiple = () => {
  const form = useForm<z.infer<typeof FormSchemaMultiple>>({
    resolver: zodResolver(FormSchemaMultiple),
    defaultValues: {
      items: ["recents", "home"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchemaMultiple>) {
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
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-lg-medium text">Sidebar</FormLabel>
                <FormDescription>Select the items you want to display in the sidebar.</FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(field.value?.filter((value) => value !== item.id));
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item.label}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "The controlled checked state of the checkbox.",
      table: {
        type: { summary: null },
      },
    },
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A control that allows a user to select one or more options from a number of choices.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=233-753&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => <Checkbox id="terms-default" {...args} />,
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <Checkbox id="terms-disabled" {...args} />,
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="terms-label" />
      <Label htmlFor="terms-label">Accept terms and conditions</Label>
    </div>
  ),
  args: {
    disabled: false,
  },
};

export const WithFormSingle: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <CheckboxReactHookFormSingle {...args} />
      <ToastProvider />
    </div>
  ),
  args: {},
  argTypes: {
    checked: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
};

export const WithFormMultiple: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <CheckboxReactHookFormMultiple {...args} />
      <ToastProvider />
    </div>
  ),
  args: {},
  argTypes: {
    checked: { table: { disable: true } },
    disabled: { table: { disable: true } },
  },
};
