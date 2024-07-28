// Import core
import React, { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// Import customs

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</main>;
};

export default Main;
