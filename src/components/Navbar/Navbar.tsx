import { Navbar as MantineNavbar, Stack } from "@mantine/core";
import { FC } from "react";

import RouteLinks from "@/components/RouteLinks";

const Navbar: FC = () => {
  return (
    <MantineNavbar p="md" width={{ sm: 350, lg: 350 }}>
      <Stack>
        <RouteLinks />
      </Stack>
    </MantineNavbar>
  );
};

export default Navbar;
