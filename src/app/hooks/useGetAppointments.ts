import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

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

  const handleNextPage = useCallback(() => {
    setPaginate({
      after: data?.pageInfo?.nextCursor,
    });
  }, [data]);

  const handlePreviousPage = useCallback(() => {
    setPaginate({
      before: data?.pageInfo?.previousCursor,
    });
  }, [data]);

  return {
    appointments: data?.appointments,
    pagination: {
      ...data?.pageInfo,
      goNextPage: handleNextPage,
      goPreviousPage: handlePreviousPage,
    },
    isLoading,
    isFetching,
    error,
  };
};

export default useGetAppointments;
