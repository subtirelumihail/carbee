"use client";
import { Badge, Card, Flex, Group, List, Stack, Text } from "@mantine/core";
import { FC, memo } from "react";

import { addMinutesToDate, formatDate, formatTime } from "@/utils/date";

import { AppointmentType } from "./Appointments";

export interface AppointmentCardInterface {
  appointment: AppointmentType;
}

export const statuses = {
  SCHEDULED: {
    label: "SCHEDULED",
    color: "yellow",
  },
  PAID: {
    label: "PAID",
    color: "orange",
  },
  COMPLETE: {
    label: "COMPLETE",
    color: "green",
  },
  IN_PROGRESS: {
    label: "IN PROGRESS",
    color: "blue",
  },
};

const Appointments: FC<AppointmentCardInterface> = memo(function Appointments({
  appointment,
}) {
  const renderStartStopTime = () => {
    if (appointment.status === "COMPLETE") {
      const start = formatTime(appointment.scheduledTime);
      const completed = addMinutesToDate(
        appointment.scheduledTime,
        appointment.duration
      );

      return (
        <Flex direction="column">
          <Text weight="bold">Started/Completed</Text>
          <Text>
            {start} / {completed}
          </Text>
        </Flex>
      );
    }

    return (
      <Flex direction="column">
        <Text weight="bold">Start time</Text>
        <Text>{formatTime(appointment.scheduledTime)}</Text>
      </Flex>
    );
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="xl">
        <Text weight={500}>{formatDate(appointment.scheduledTime)}</Text>
        <Badge color={statuses[appointment.status]?.color} variant="light">
          {statuses[appointment.status]?.label}
        </Badge>
      </Group>

      <Stack>
        {renderStartStopTime()}
        <Flex direction="column">
          <Text weight="bold">Service</Text>
          <List>
            <List.Item>
              <Text>{appointment.workOrder.service}</Text>
            </List.Item>
          </List>
        </Flex>
      </Stack>
    </Card>
  );
});

export default Appointments;
