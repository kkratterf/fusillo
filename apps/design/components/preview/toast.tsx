// Import core
// Import customs
import Preview from "@components/preview/preview";
import { Button } from "@fusillo/ui/components/button";
import { toast } from "@fusillo/ui/components/toast";

export const ToastPreview = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast("Your message has been sent.");
        }}>
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastSimple = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast("Your message has been sent.");
        }}>
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWithTitle = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast("Your message has been sent.", {
            description: "There was a problem with your request.",
          });
        }}>
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWithAction = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast("Your message has been sent.", {
            description: "There was a problem with your request.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }}>
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastBrand = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast.success("Your message has been sent.", {
            description: "There was a problem with your request.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }}>
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastDanger = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast.error("Your message has been sent.", {
            description: "There was a problem with your request.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }}>
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWarning = () => {
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast.warning("Your message has been sent.", {
            description: "There was a problem with your request.",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }}>
        Show Toast
      </Button>
    </Preview>
  );
};
