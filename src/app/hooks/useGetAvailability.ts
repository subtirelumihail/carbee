import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getAvailability } from "@/services/availability";

const useGetAvailability = () => {
  const [date, setDate] = useState<Date | null>(null);
  const { isLoading, isFetching, error, data, refetch } = useQuery({
    queryKey: ["availability", date],
    queryFn: () => {
      return getAvailability(date);
    },
    enabled: !!date,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const handleFetch = (newDate: Date) => {
    if (newDate === date) {
      refetch();
    } else {
      setDate(newDate);
    }
  };

  return {
    fetchAvailability: handleFetch,
    availability: data,
    date,
    isLoading,
    isFetching,
    error,
  };
};

export default useGetAvailability;
