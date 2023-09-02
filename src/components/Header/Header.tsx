import {
  Burger,
  Button,
  Flex,
  Group,
  Header as MantineHeader,
  MediaQuery,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { signOut, useSession } from "next-auth/react";
import { FC, PropsWithChildren, useState } from "react";

import RouteLinks from "../RouteLinks";

export interface HeaderProps extends PropsWithChildren {
  opened: boolean;
  setOpened(opened: boolean): void;
}

const Header: FC<HeaderProps> = ({ opened = false, setOpened = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery("(min-width: 48em)");
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    setLoading(true);
    try {
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MantineHeader height={{ base: 70 }} p="md">
      <Flex align="center">
        <Group position="apart" grow className="w-full">
          <Flex direction="row" align="center" gap={12}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </MediaQuery>
            <Text size="xl" color="primary" weight="bold">
              Carbee
            </Text>
          </Flex>
          {session && (
            <Flex justify="flex-end" gap={40}>
              {smallScreen && (
                <Group spacing={20}>
                  <RouteLinks />
                </Group>
              )}
              <Button
                loading={loading}
                variant="subtle"
                onClick={() => signOut()}
              >
                Sign out
              </Button>
            </Flex>
          )}
        </Group>
      </Flex>
    </MantineHeader>
  );
};

export default Header;
