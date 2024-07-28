// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Toggle } from "./toggle";
import { Bold } from "../icon";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "outline"],
      description: "Define the look and feel of the toggle",
      table: {
        defaultValue: { summary: "default" },
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
  args: {
    variant: "default",
    disabled: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A two-state button that can be either on or off.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8885&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Base: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    variant: "default",
    disabled: false,
  },
};

export const Outline: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    variant: "outline",
    disabled: false,
  },
};

export const WithText: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
      Bold
    </Toggle>
  ),
  args: {
    variant: "default",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle bold">
      <Bold />
    </Toggle>
  ),
  args: {
    variant: "default",
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};
