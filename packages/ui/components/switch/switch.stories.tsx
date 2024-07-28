"use client";

// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// Import customs
import { Switch } from "./switch";
import { Label } from "../label";
import { ToastProvider, toast } from "../toast";
import { Button } from "../button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../form";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

const SwitchFormDemo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <h3 className="text-heading-body mb-4">Email Notifications</h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="border-default flex flex-row items-center justify-between gap-4 rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-lg">Marketing emails</FormLabel>
                    <FormDescription>Receive emails about new products, features, and more.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <FormItem className="border-default flex flex-row items-center justify-between gap-4 rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-lg">Security emails</FormLabel>
                    <FormDescription>Receive emails about your account security.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} disabled aria-readonly />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
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
  args: {
    disabled: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A control that allows the user to toggle between checked and not checked.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8880&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => <Switch {...args} id="airplane-mode" />,
  args: {
    disabled: false,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <Switch {...args} id="airplane-mode" />,
  args: {
    disabled: true,
  },
};

export const WithForm: Story = {
  render: (args) => (
    <div>
      <SwitchFormDemo {...args} />
      <ToastProvider />
    </div>
  ),
  args: {
    disabled: false,
  },
};
