// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Separator } from "@fusillo/ui/components/separator";

export const SeparatorPreview = () => (
  <Preview>
    <div>
      <div className="space-y-1">
        <h4 className="text-lg-semibold leading-none">fusillo Design System</h4>
        <p className="text-md text-description">Crafting inclusive experiences for everyone</p>
      </div>
      <Separator className="my-4" />
      <div className="text-md flex h-5 items-center space-x-4">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  </Preview>
);

export const SeparatorHorizontal = () => (
  <Preview>
    <div>
      <h4 className="text-lg-semibold leading-none">fusillo Design System</h4>
      <Separator className="my-4" />
      <p className="text-md text-description">Crafting inclusive experiences for everyone</p>
    </div>
  </Preview>
);

export const SeparatorVertical = () => (
  <Preview>
    <div className="text-md flex h-5 items-center space-x-4">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </Preview>
);
