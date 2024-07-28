// Import core
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
// Import customs
import { ChevronsUpDown } from "../icon";
import { Button } from "../button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

type CollapsibleDemoProps = {
  open?: boolean;
  onOpenChange?: (newOpen: boolean) => void;
};

const CollapsibleDemo = ({ open, onOpenChange, ...restArgs }: CollapsibleDemoProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={handleOpenChange} className="w-[340px] space-y-2" {...restArgs}>
      <div className="flex items-center justify-between space-x-4 px-4">
        <p className="text-md-semibold">@kkratterf starred 3 repositories</p>
        <CollapsibleTrigger asChild>
          <Button variant="text" icon={true}>
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="border-default text-md rounded border px-4 py-3 font-mono">
        @design-system/foundations
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="border-default text-md rounded border px-4 py-3 font-mono">@design-system/tokens</div>
        <div className="border-default text-md rounded border px-4 py-3 font-mono">@fusillo/ui</div>
        <div className="border-default text-md rounded border px-4 py-3 font-mono">
          @design-system/visualizations
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the collapsible.",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: null },
      },
    },
    disabled: {
      control: "boolean",
      description: "Prevent user actions when certain conditions are not met.",
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
    onOpenChange: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An interactive component which expands/collapses a panel.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=550-41441&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: (args) => <CollapsibleDemo {...args} />,
  args: {
    open: false,
    onOpenChange: () => null,
    disabled: false,
    defaultOpen: false,
  },
};
