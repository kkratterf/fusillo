// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Button } from "@fusillo/ui/components/button";
import { Input } from "@fusillo/ui/components/input";
import { Label } from "@fusillo/ui/components/label";
import { Popover, PopoverContent, PopoverTrigger } from "@fusillo/ui/components/popover";

export const PopoverPreview = () => (
  <Preview>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="input-docs col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="input-docs col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="input-docs col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="input-docs col-span-2" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </Preview>
);
