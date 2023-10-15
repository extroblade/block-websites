import { useAccountQuery, useUpdateAccountMutation } from '@/entities/account';

export const useToggleBlocking = () => {
  const { data, isSuccess } = useAccountQuery();
  const { mutate, isLoading } = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (!data) {
      return;
    }
    mutate({
      isBlockingEnabled: !data?.isBlockingEnabled,
    });
  };
  return {
    isLoading,
    toggleBlocking,
    isBlockingEnabled: data?.isBlockingEnabled ?? false,
    isReady: isSuccess,
  };
};
