import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getAppointments, Paginate } from "@/services/appointments";

const useGetAppointments = () => {
  const [paginate, setPaginate] = useState<Paginate>({});
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: ["appointments", paginate],
    queryFn: () => {
      return getAppointments(paginate);
    },
    refetchOnWindowFocus: false,
  });

  const handleNextPage = () => {
    setPaginate({
      after: data?.nextCursor,
    });
  };

  const handlePreviousPage = () => {
    setPaginate({
      before: data?.prevCursor,
    });
  };

  return {
    appointments: data?.appointments,
    pagination: {
      prevCursor: data?.prevCursor,
      nextCursor: data?.nextCursor,
    },
    isLoading,
    isFetching,
    error,
  };
};

export default useGetAppointments;
