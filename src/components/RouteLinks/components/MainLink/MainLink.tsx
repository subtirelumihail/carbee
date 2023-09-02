import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import React from "react";

interface MainLinkProps {
  icon?: React.ReactNode;
  color: string;
  label: string;
  onClick: () => void;
}

const MainLink = ({ icon, color, label, onClick }: MainLinkProps) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={onClick}
    >
      <Group>
        {icon && (
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
        )}

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default MainLink;
