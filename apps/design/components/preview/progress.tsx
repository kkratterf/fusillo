// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Progress } from "@fusillo/ui/components/progress";

export const ProgressPreview = () => (
  <Preview>
    <Progress value={33} className="w-3/5" />
  </Preview>
);

export const ProgressDefault = () => (
  <Preview>
    <Progress status="default" value={33} className="w-3/5" />
  </Preview>
);

export const ProgressBrand = () => (
  <Preview>
    <Progress status="brand" value={33} className="w-3/5" />
  </Preview>
);

export const ProgressDanger = () => (
  <Preview>
    <Progress status="danger" value={33} className="w-3/5" />
  </Preview>
);

export const ProgressWarning = () => (
  <Preview>
    <Progress status="warning" value={33} className="w-3/5" />
  </Preview>
);
