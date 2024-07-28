// Import core
import * as React from "react";
import localFont from "next/font/local";
import type { Preview, Renderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
// Import customs
import "../styles/globals.css";

const GeistSans = localFont({
  src: "../public/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
});

const GeistMono = localFont({
  src: "../public/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
});

const preview: Preview = {
  decorators: [
    (Story: any) => (
      <div className={`bg-background text font-sans ${GeistMono.variable} ${GeistSans.variable}`}>
        <Story />
      </div>
    ),
    withThemeByClassName<Renderer>({
      themes: {
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "Light",
    }),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    nextjs: {
      appDirectory: true,
    },
    docs: {
      source: {
        type: "code",
      },
      themes: {
        Light: "",
        Dark: "dark",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
