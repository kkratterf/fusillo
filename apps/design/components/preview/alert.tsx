// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Alert, AlertIcon, AlertDescription, AlertTitle } from "@fusillo/ui/components/alert";
import { AlertTriangle, Info, Megaphone, XCircle } from "@fusillo/ui/components/icon";

export const AlertPreview = () => (
  <Preview>
    <Alert>
      <AlertIcon>
        <Megaphone />
      </AlertIcon>
      <AlertTitle>Notice</AlertTitle>
      <AlertDescription>
        This is a general notification for your attention. It provides neutral information or basic reminders
        for everyday tasks.
      </AlertDescription>
    </Alert>
  </Preview>
);

export const AlertBrand = () => (
  <Preview>
    <Alert status="brand">
      <AlertIcon>
        <Info />
      </AlertIcon>
      <AlertTitle>Did you know?</AlertTitle>
      <AlertDescription>
        Here&apos;s some useful information or context about the current process or section that might be
        helpful to you.
      </AlertDescription>
    </Alert>
  </Preview>
);

export const AlertDanger = () => (
  <Preview>
    <Alert status="danger">
      <AlertIcon>
        <XCircle />
      </AlertIcon>
      <AlertTitle>Error Detected!</AlertTitle>
      <AlertDescription>
        Critical issue encountered! Please address this error immediately to prevent system failure or data
        loss.
      </AlertDescription>
    </Alert>
  </Preview>
);

export const AlertWarning = () => (
  <Preview>
    <Alert status="warning">
      <AlertIcon>
        <AlertTriangle />
      </AlertIcon>
      <AlertTitle>Caution Advised</AlertTitle>
      <AlertDescription>
        Be cautious! There are certain risks associated with this action. Review and proceed with care.
      </AlertDescription>
    </Alert>
  </Preview>
);
