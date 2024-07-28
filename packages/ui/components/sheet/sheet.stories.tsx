// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Extends the Dialog component to display content that complements the main content of the screen.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8877&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type SheetCustomProps = {
  side?: "top" | "bottom" | "left" | "right";
};

type Story = StoryObj<SheetCustomProps>;

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open</Button>
      </SheetTrigger>
      <SheetContent side={args.side}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when youre done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Michael Scott" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@mscott" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  args: {
    side: "right",
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Define the direction in which the sheet will open",
      table: {
        defaultValue: { summary: "right" },
        type: { summary: null },
      },
    },
  },
};
