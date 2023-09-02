"use client";

import { AppShell as MantineAppShell } from "@mantine/core";
import { memo, useState } from "react";

import Header from "@/components/Header";
import MobileMenuBar from "@/components/MobileMenuBar";

const AppShell = memo(function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <MantineAppShell
      bg="gray.0"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      aside={<MobileMenuBar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      {children}
    </MantineAppShell>
  );
});

export default AppShell;
