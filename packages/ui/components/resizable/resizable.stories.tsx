"use client";

// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
// Import customs
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./resizable";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: { table: { disable: true } },
    autoSaveId: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    onLayout: { table: { disable: true } },
    disablePointerEventsDuringResize: { table: { disable: true } },
    storage: { table: { disable: true } },
    style: { table: { disable: true } },
    tagName: { table: { disable: true } },
    units: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component: "Accessible resizable panel groups and layouts with keyboard support.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=2322-3479&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: (args) => (
    <ResizablePanelGroup className="border-default w-full rounded-lg border" {...args}>
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: {
    direction: "horizontal",
  },
};

export const Vertical: Story = {
  render: (args) => (
    <ResizablePanelGroup className="border-default min-h-[200px] w-full rounded-lg border" {...args}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: { direction: "vertical" },
};

export const Handle: Story = {
  render: (args) => (
    <ResizablePanelGroup className="border-default min-h-[200px] w-full rounded-lg border" {...args}>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  args: { direction: "horizontal" },
};
