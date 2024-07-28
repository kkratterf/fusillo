"use client";

// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// Import customs
import { Input } from "./input";
import { Button } from "../button";
import { Label } from "../label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { ToastProvider, toast } from "../toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const InputFormDemo = (args: any) => {
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
                <Input type={args.type} placeholder={args.placeholder} {...field} />
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

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "date", "time", "url", "search", "tel", "file"],
      description: "Define how the input element behaves and appears in the form.",
      table: {
        defaultValue: { summary: "text" },
        type: { summary: null },
      },
    },
    placeholder: {
      description: "Guide users in filling the input field",
    },
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A basic widget for getting the user input in a text field.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8867&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} className="w-[340px]" />,
  args: {
    type: "email",
    placeholder: "Email",
    disabled: false,
  },
};

export const File: Story = {
  render: (args) => <Input {...args} className="w-[340px]" />,
  args: {
    type: "file",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <Input {...args} className="w-[340px]" />,
  args: { ...Default.args, disabled: true },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-[340px] max-w-sm items-center gap-2">
      <Label htmlFor="email">{args.placeholder}</Label>
      <Input {...args} id="email" />
    </div>
  ),
  args: { ...Default.args },
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-[340px] max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
  args: { ...Default.args },
};

export const WithForm: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <InputFormDemo {...args} />
      <ToastProvider />
    </div>
  ),
  args: { ...Default.args },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};
