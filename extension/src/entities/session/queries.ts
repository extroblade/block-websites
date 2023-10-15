import { useQuery, useQueryClient } from "@tanstack/react-query";

import { authControllerGetSessionInfo } from "@/shared/api";

const sessionKey = ["session"];

const second = 1000;
const minute = second * 60;
export const useSessionQuery = () => {
  return useQuery({
    queryKey: sessionKey,
    queryFn: authControllerGetSessionInfo,
    retry: 0,
    staleTime: 5 * minute,
  });
};

export const useResetSession = () => {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries();
};
