import { PropsWithChildren } from "react";

import Protected from "@/components/Protected";
import AppShell from "@/layout/AppShell";

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <Protected>
      <AppShell>{children}</AppShell>
    </Protected>
  );
};

export default RootLayout;
