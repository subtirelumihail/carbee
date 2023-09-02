"use client";
import { Button, Grid, Group, Loader, Stack, Text, Title } from "@mantine/core";

import useGetAppointments from "@/app/hooks/useGetAppointments";

import AppointmentCard from "./AppointmentCard";

// [BUG]: We don't get a startTime and completeTime
// [SOLUTION]: We take in consideration the startTime to be the same with the
// scheduledTime and we calculate the completeTime based on the duration and the scheduledTime

export type AppointmentType = {
  id: string;
  paymentId: string;
  userId: string;
  duration: number;
  scheduledTime: string;
  status: "SCHEDULED" | "PAID" | "COMPLETE" | "IN_PROGRESS";
  workOrder: {
    service: string;
  };
};

const Appointments = () => {
  const { isFetching, appointments, pagination } = useGetAppointments();

  return (
    <Stack>
      <Title>Appointments</Title>
      {isFetching && (
        <Group>
          <Text>Getting appointments</Text>
          <Loader />
        </Group>
      )}
      {!isFetching && appointments?.length === 0 && (
        <Text>No appointments available</Text>
      )}
      <Grid>
        {appointments?.map((appointment: AppointmentType) => (
          <Grid.Col md={6} lg={3} key={appointment.id}>
            <AppointmentCard appointment={appointment} />
          </Grid.Col>
        ))}
      </Grid>
      <Group>
        {pagination.hasPreviousPage && (
          <Button onClick={pagination.goPreviousPage}>Previous</Button>
        )}
        {pagination.hasNextPage && (
          <Button onClick={pagination.goNextPage}>Next</Button>
        )}
      </Group>
    </Stack>
  );
};

export default Appointments;
