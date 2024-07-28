// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Badge } from "@fusillo/ui/components/badge";
import { Activity, AlertTriangle, Info, XCircle } from "@fusillo/ui/components/icon";

export const BadgePreview = () => (
  <Preview>
    <Badge>
      <Activity />
      Active
    </Badge>
  </Preview>
);

export const BadgeDefault = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge status="default">
        <Activity />
        Active
      </Badge>
      <Badge status="default">Active</Badge>
      <Badge status="default">
        <Activity />
      </Badge>
      <Badge status="default">7</Badge>
    </div>
  </Preview>
);

export const BadgeBrand = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge status="brand">
        <Info />
        Information
      </Badge>
      <Badge status="brand">Information</Badge>
      <Badge status="brand">
        <Info />
      </Badge>
      <Badge status="brand">7</Badge>
    </div>
  </Preview>
);

export const BadgeDanger = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge status="danger">
        <XCircle />
        Error
      </Badge>
      <Badge status="danger">Error</Badge>
      <Badge status="danger">
        <XCircle />
      </Badge>
      <Badge status="danger">7</Badge>
    </div>
  </Preview>
);

export const BadgeWarning = () => (
  <Preview>
    <div className="grid justify-items-center gap-3 sm:flex">
      <Badge status="warning">
        <AlertTriangle />
        Caution
      </Badge>
      <Badge status="warning">Caution</Badge>
      <Badge status="warning">
        <AlertTriangle />
      </Badge>
      <Badge status="warning">7</Badge>
    </div>
  </Preview>
);
