// Import core
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Button } from "./button";
import { Download, Search } from "../icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Define the text label displayed on the button.",
      table: {
        type: { summary: null },
      },
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "text", "link", "danger"],
      description: "Define the priority of the button",
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: null },
      },
    },
    icon: {
      control: "boolean",
      description: "Display an icon button",
      table: {
        defaultValue: { summary: false },
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
  args: {
    title: "Button",
    variant: "primary",
    icon: false,
    asChild: false,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Triggers an event or action. They let users know what will happen next.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=119-6&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary",
    variant: "secondary",
  },
};

export const Text: Story = {
  args: {
    title: "Text",
    variant: "text",
  },
};

export const Link: Story = {
  args: {
    title: "Link",
    variant: "link",
  },
};

export const Danger: Story = {
  args: {
    title: "Danger",
    variant: "danger",
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button variant={args.variant}>
      <Download />
      Download
    </Button>
  ),
  args: {
    variant: "primary",
  },
  argTypes: {
    title: { table: { disable: true } },
    icon: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};

export const Icon: Story = {
  render: (args) => (
    <Button {...args} icon={true}>
      <Search />
      <span className="sr-only">search</span>
    </Button>
  ),
  args: {
    title: undefined,
    variant: "secondary",
    icon: true,
  },
  argTypes: {
    title: { table: { disable: true } },
    asChild: { table: { disable: true } },
  },
};
