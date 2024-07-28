// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Alert, AlertIcon, AlertDescription, AlertTitle } from "./alert";
import { AlertTriangle, Info, Megaphone, XCircle } from "../icon";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "brand", "danger", "warning"],
      description: "Define the type of message communicated by the alert",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: null },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Displays a callout for user attention.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=233-751&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertIcon>
        <Megaphone />
      </AlertIcon>
      <AlertTitle>Notice</AlertTitle>
      <AlertDescription>
        This is a general notification for your attention. It provides neutral information or basic reminders
        for everyday tasks.
      </AlertDescription>
    </Alert>
  ),
  args: {
    status: "default",
  },
};

export const Brand: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertIcon>
        <Info />
      </AlertIcon>
      <AlertTitle>Did you know?</AlertTitle>
      <AlertDescription>
        Here&apos;s some useful information or context about the current process or section that might be
        helpful to you.
      </AlertDescription>
    </Alert>
  ),
  args: {
    status: "brand",
  },
};

export const Danger: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertIcon>
        <XCircle />
      </AlertIcon>
      <AlertTitle>Error Detected!</AlertTitle>
      <AlertDescription>
        Critical issue encountered! Please address this error immediately to prevent system failure or data
        loss.
      </AlertDescription>
    </Alert>
  ),
  args: {
    status: "danger",
  },
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertIcon>
        <AlertTriangle />
      </AlertIcon>
      <AlertTitle>Caution Advised</AlertTitle>
      <AlertDescription>
        Be cautious! There are certain risks associated with this action. Review and proceed with care.
      </AlertDescription>
    </Alert>
  ),
  args: {
    status: "warning",
  },
};
