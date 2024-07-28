// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "For sighted users to preview content available behind a link.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8866&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Base: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-md-semibold">@nextjs</h4>
            <p className="text-md">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <span className="text-description text-sm">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  args: {},
};
