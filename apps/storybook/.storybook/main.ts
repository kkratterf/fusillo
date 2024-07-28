// Import core
import type { StorybookConfig } from "@storybook/nextjs";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../stories/*.stories.mdx", "../../../packages/ui/components/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-styling-webpack"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
  staticDirs: [
    {
      from: "../../../node_modules/geist/dist/fonts/geist-sans",
      to: "/public/fonts/geist-sans",
    },
    {
      from: "../../../node_modules/geist/dist/fonts/geist-mono",
      to: "/public/fonts/geist-mono",
    },
  ],
  typescript: { reactDocgen: "react-docgen" },
};
export default config;
