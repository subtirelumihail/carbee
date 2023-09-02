"use client";
import { Stack } from "@mantine/core";
import React from "react";

import Appointments from "@/components/Appointments";
import Availability from "@/components/Availability";

function Page() {
  return (
    <Stack>
      <Availability />
      <Appointments />
    </Stack>
  );
}

export default Page;
