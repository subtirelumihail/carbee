"use client";
import { Chip, Flex, Group, Loader, Stack, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

import useGetAvailability from "@/app/hooks/useGetAvailability";
import { addDaysToDate, formatTime } from "@/utils/date";

function Availability() {
  const { isFetching, availability, date, fetchAvailability } =
    useGetAvailability();

  const minDate = addDaysToDate(1);

  return (
    <Stack>
      <Flex gap={10}>
        <Group>
          <Text>Check availability: </Text>
          <DatePickerInput
            minDate={minDate}
            placeholder="Pick date"
            mx="auto"
            miw={150}
            value={date}
            disabled={isFetching}
            onChange={fetchAvailability}
          />
          {isFetching && <Loader size="xs" />}
        </Group>
      </Flex>
      <Flex wrap="wrap" gap={10}>
        {availability?.map((availability: string) => (
          <Chip key={availability}>{formatTime(availability)}</Chip>
        ))}
      </Flex>
    </Stack>
  );
}

export default Availability;
