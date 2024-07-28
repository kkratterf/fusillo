// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Button } from "@fusillo/ui/components/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@fusillo/ui/components/tooltip";
import { FilePlus } from "@fusillo/ui/components/icon";

export const TooltipPreview = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipOutline = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipFilled = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent type="fill">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipSide = () => (
  <Preview>
    <div className="grid justify-items-center gap-5 sm:flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </Preview>
);
