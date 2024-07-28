// Import core
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// Import customs
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=233-757&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="border-default text-md flex h-[160px] w-[320px] items-center justify-center rounded border border-dashed">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="michael">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="michael">Michael Scott</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dwight">Dwight Schrute</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
  args: {},
};
