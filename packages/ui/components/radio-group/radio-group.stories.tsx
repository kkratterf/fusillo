"use client";

// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// Import customs
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "../label";
import { Button } from "../button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form";
import { ToastProvider, toast } from "../toast";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
});

const RadioGroupFormDemo = () => {
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

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "select",
      options: ["default", "comfortable", "compact"],
      description: "The value of the radio item that should be checked when initially rendered.",
      table: {
        type: { summary: null },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        defaultValue: { summary: false },
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8873&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
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
  ),
  args: {
    defaultValue: "comfortable",
  },
};

export const WithForm: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <RadioGroupFormDemo {...args} />
      <ToastProvider />
    </div>
  ),
  args: {},
  argTypes: {
    defaultValue: { table: { disable: true } },
  },
};
