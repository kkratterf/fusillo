// Import core
import React, { ReactNode } from "react";
// Import customs

type PreviewProps = {
  children: ReactNode;
};

const Preview: React.FC<PreviewProps> = ({ children }) => {
  return (
    <div className="bg-background nx-border nx-border-gray-200 dark:nx-border-neutral-800 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4 flex justify-center px-10 py-20">
      {children}
    </div>
  );
};

export default Preview;
