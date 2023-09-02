"use client";

import { AppShell as MantineAppShell, useMantineTheme } from "@mantine/core";
import { useState } from "react";

import Header from "@/components/Header";
import MobileMenuBar from "@/components/MobileMenuBar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <MantineAppShell
      styles={{
        main: {
          background: theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      aside={<MobileMenuBar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      {children}
    </MantineAppShell>
  );
};

export default AppShell;
