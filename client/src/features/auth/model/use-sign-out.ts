import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { useResetSession } from '@/entities/session';
import { authControllerSignOut } from '@/shared/api';
import { ROUTES } from '@/shared/constants';

export const useSignOut = () => {
  const router = useRouter();
  const resetSession = useResetSession();
  const { isLoading, mutate } = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess: async () => {
      await router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return { isLoading, signOut: () => mutate({}) };
};
