"use client";

// Import core
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { CircleCheckBig, TriangleAlert, OctagonX } from "../icon";
import "./toast.css";

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const ToastProvider = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      richColors
      gap={12}
      theme={theme as ToasterProps["theme"]}
      className="toaster"
      toastOptions={{
        classNames: {
          toast: "toast-component",
          description: "toast-description",
          actionButton: "toast-action-button",
          success: "toast-brand",
          error: "toast-error",
          warning: "toast-warning",
        },
      }}
      icons={{
        success: <CircleCheckBig size={20} />,
        warning: <TriangleAlert size={20} />,
        error: <OctagonX size={20} />,
      }}
      {...props}
    />
  );
};
