import "./globals.css";

import { FC, PropsWithChildren } from "react";

import RootStyleRegistry from "./theme-provider";

export const metadata = {
  title: "Carbee",
};

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="en">
      <body id="carbee-app">
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
