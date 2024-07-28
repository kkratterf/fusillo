// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "brand", "danger", "warning"],
      description: "Define the type of message communicated by the badge.",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: null },
      },
    },
    value: {
      description: "The progress value.",
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
  args: {
    status: "default",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8872&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: "default",
    value: 33,
  },
};

export const Brand: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: "brand",
    value: 33,
  },
};

export const Danger: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: "danger",
    value: 33,
  },
};

export const Warning: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: "warning",
    value: 33,
  },
};
