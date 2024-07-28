import { Html, Head, Main, NextScript } from "next/document";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
