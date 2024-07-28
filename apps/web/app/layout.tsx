// Import core
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// Import customs
import { ToastProvider } from "@fusillo/ui/components/toast";
import { ThemeProvider } from "@components/theme-provider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Fusillo",
  description: "A well-cooked design system boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
