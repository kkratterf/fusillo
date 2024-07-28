// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Slider } from "@fusillo/ui/components/slider";

export const SliderPreview = () => (
  <Preview>
    <Slider defaultValue={[25]} max={100} step={1} />
  </Preview>
);

export const SliderRange = () => (
  <Preview>
    <Slider defaultValue={[25, 75]} max={100} step={1} />
  </Preview>
);

export const SliderStep = () => (
  <Preview>
    <Slider defaultValue={[50]} step={10} max={100} />
  </Preview>
);

export const SliderOverlap = () => (
  <Preview>
    <Slider defaultValue={[25, 75]} step={10} max={100} minStepsBetweenThumbs={1} />
  </Preview>
);
