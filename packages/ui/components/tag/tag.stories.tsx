// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Tag } from "./tag";
import { TagIcon } from "../icon";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    colors: {
      control: "select",
      options: [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
      description: "Define the color of message communicated by the badge",
      table: {
        defaultValue: { summary: "blue" },
        type: { summary: null },
      },
    },
  },
  args: {
    colors: "blue",
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays an element for categorizing or markup.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=635-3323&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Red: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Markup
    </Tag>
  ),
  args: {
    colors: "red",
  },
};

export const Orange: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Markup
    </Tag>
  ),
  args: {
    colors: "orange",
  },
};

export const Amber: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "amber",
  },
};

export const Yellow: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "yellow",
  },
};

export const Lime: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "lime",
  },
};

export const Green: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "green",
  },
};

export const Emerald: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "emerald",
  },
};

export const Teal: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "teal",
  },
};

export const Cyan: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "cyan",
  },
};

export const Sky: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "sky",
  },
};

export const Blue: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "blue",
  },
};

export const Indigo: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "indigo",
  },
};

export const Violet: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "violet",
  },
};

export const Purple: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "purple",
  },
};

export const Fuchsia: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "fuchsia",
  },
};

export const Pink: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "pink",
  },
};

export const Rose: Story = {
  render: (args) => (
    <Tag {...args}>
      <TagIcon />
      Umbrella
    </Tag>
  ),
  args: {
    colors: "rose",
  },
};
