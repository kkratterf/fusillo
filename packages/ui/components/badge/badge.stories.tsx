// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Badge } from "./badge";
import { Activity, AlertTriangle, Info, XCircle } from "../icon";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    status: "default",
  },
  argTypes: {
    status: {
      control: "select",
      options: ["default", "brand", "danger", "warning"],
      description: "Define the type of message communicated by the badge",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Visual indicator for states or numeric values such as tallies and scores.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=233-749&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (args) => (
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge {...args}>
        <Activity />
        Active
      </Badge>
      <Badge {...args}>Active</Badge>
      <Badge {...args}>
        <Activity />
        <span className="sr-only">Active</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    status: "default",
  },
};

export const Brand: Story = {
  render: (args) => (
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge {...args}>
        <Info />
        Information
      </Badge>
      <Badge {...args}>Information</Badge>
      <Badge {...args}>
        <Info />
        <span className="sr-only">Information</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    status: "brand",
  },
};

export const Danger: Story = {
  render: (args) => (
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge {...args}>
        <XCircle />
        Error
      </Badge>
      <Badge {...args}>Error</Badge>
      <Badge {...args}>
        <XCircle />
        <span className="sr-only">Error</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    status: "danger",
  },
};

export const Warning: Story = {
  render: (args) => (
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge {...args}>
        <AlertTriangle />
        Caution
      </Badge>
      <Badge {...args}>Caution</Badge>
      <Badge {...args}>
        <AlertTriangle />
        <span className="sr-only">Caution</span>
      </Badge>
      <Badge {...args}>7</Badge>
    </div>
  ),
  args: {
    status: "warning",
  },
};
