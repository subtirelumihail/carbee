import { Navbar as MantineNavbar, Stack } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

import RouteLinks from "@/components/RouteLinks";

const Navbar: FC<PropsWithChildren> = () => {
  return (
    <MantineNavbar p="md" width={{ sm: 350, lg: 350 }}>
      <Stack>
        <RouteLinks />
      </Stack>
    </MantineNavbar>
  );
};

export default Navbar;
