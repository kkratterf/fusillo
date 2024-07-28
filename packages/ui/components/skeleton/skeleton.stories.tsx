// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { Skeleton } from "./skeleton";
import { Card, CardContent } from "../card";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      control: "radio",
      options: ["circle", "line"],
      description: "Represent the element that the skeleton is replacing",
      table: {
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Use to show a placeholder while content is loading.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8878&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Circle: Story = {
  render: (args) => (
    <div className="flex h-24 w-[320px] items-center justify-center">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    shape: "circle",
  },
};

export const Line: Story = {
  render: (args) => (
    <div className="flex h-24 w-[320px] items-center justify-center">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    shape: "line",
  },
};

export const WithCard: Story = {
  render: (args) => (
    <Card>
      <CardContent className="flex items-center space-x-4 pt-6">
        <Skeleton shape="circle" />
        <div className="space-y-2">
          <Skeleton shape="line" className="w-[250px]" />
          <Skeleton shape="line" className="w-[200px]" />
        </div>
      </CardContent>
    </Card>
  ),
  argTypes: {
    shape: { table: { disable: true } },
  },
};
