// Import core
import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
// Import customs
import { ScrollArea, ScrollBar } from "./scroll-area";
import { Separator } from "../separator";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Augments native scroll functionality for custom, cross-browser styling.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-fusillo---design-system?node-id=540-8874&t=nua4UmG9Iu1hfUAm-1",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} className="border-default h-40 w-48 rounded border">
      <div className="p-4">
        <h4 className="text-md-medium mb-4 leading-none">Tags</h4>
        {Array.from({ length: 50 })
          .map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
          .map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-md" key={tag}>
                {tag}
              </div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
      </div>
    </ScrollArea>
  ),
  args: {},
};

export interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea {...args} className="border-default w-96 whitespace-nowrap rounded border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] size-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="text-description pt-2 text-sm">
              Photo by <span className="text font-semibold">{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
  args: {},
};
