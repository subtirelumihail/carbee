"use client";
import { Anchor, Box, Center, Stack, Title } from "@mantine/core";
import { useSession } from "next-auth/react";
import React, { FC, PropsWithChildren } from "react";

const Protected: FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return <>{children}</>;
  }

  return (
    <Center>
      <Box m={20}>
        <Stack align="center">
          <Title>You are not authenticated</Title>
          <Anchor href="/api/auth/signin">Click here to sign in</Anchor>
        </Stack>
      </Box>
    </Center>
  );
};

export default Protected;
