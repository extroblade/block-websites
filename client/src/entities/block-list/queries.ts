import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from '@/shared/api';

const blockListKey = ['block-list'] as unknown[];
export const useBlockListQuery = ({ q }: { q?: string }) => {
  return useQuery({
    queryFn: () => blockListControllerGetList({ q }),
    queryKey: blockListKey.concat([{ q }]),
    keepPreviousData: true,
  });
};

export const useAddBlockItemMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    onSettled: async () => {
      await queryClient.invalidateQueries(blockListKey);
    },
  });
};
export const useRemoveBlockItemMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    onSettled: async () => {
      await queryClient.invalidateQueries(blockListKey);
    },
  });
};
