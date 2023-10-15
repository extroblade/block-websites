import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from '@/shared/api';

const accountKey = ['account'];
export const useAccountQuery = () => {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: accountKey,
  });
};

export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess: (data) => {
      queryClient.setQueryData(accountKey, data);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries(accountKey);
    },
  });
};
