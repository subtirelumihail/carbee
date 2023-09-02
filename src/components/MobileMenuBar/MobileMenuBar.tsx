import { Aside as MantineAside, Stack, Text } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

import RouteLinks from "@/components/RouteLinks";

export interface MobileMenuBarProps extends PropsWithChildren {
  opened: boolean;
}

const MobileMenuBar: FC<MobileMenuBarProps> = ({ opened = false }) => {
  if (!opened) {
    return null;
  }

  return (
    <MantineAside p="md" width={{ sm: 200, lg: 220 }}>
      <Stack>
        <RouteLinks />
      </Stack>
    </MantineAside>
  );
};

export default MobileMenuBar;
