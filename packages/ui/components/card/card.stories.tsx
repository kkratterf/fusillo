// Import core
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BellRing, Check } from "@fusillo/ui/components/icon";
// Import customs
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Switch } from "../switch";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays a card with header, content, and footer.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=233-752&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export const WithForm: Story = {
  render: (args) => (
    <Card {...args} className="w-[340px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
  args: {},
};

export const WithMapping: Story = {
  render: (args) => (
    <Card className="w-[420px]" {...args}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" border-default flex items-center space-x-4 rounded border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-md-medium leading-none">Push Notifications</p>
            <p className="text-md text-description">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div className="p-4">
          {notifications.map((notification, index) => (
            <div key={index} className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="bg-brand flex size-2 translate-y-1 rounded-full" />
              <div className="space-y-1">
                <p className="text-md-medium leading-none">{notification.title}</p>
                <p className="text-md text-description">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  ),
  args: {},
};
