// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Define the dimention of the avatar",
      table: {
        defaultValue: { summary: "lg" },
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
    size: "lg",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Visual representation of a user or entity.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=164-293&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const ExtraSmall: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4" alt="@kkratterf" />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4" alt="@kkratterf" />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4" alt="@kkratterf" />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: "md",
  },
};

export const Large: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4" alt="@kkratterf" />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/70836137?s=400&v=4" alt="@kkratterf" />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: "xl",
  },
};

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="" alt="@kkratterf" />
      <AvatarFallback>FK</AvatarFallback>
    </Avatar>
  ),
};
