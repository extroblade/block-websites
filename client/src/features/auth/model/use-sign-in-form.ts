import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { authControllerSignIn } from '@/shared/api';
import { ROUTES } from '@/shared/constants';

export const useSignInForm = () => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const router = useRouter();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = error ? `Sign in failed` : null;

  return {
    register,
    mutate,
    isLoading,
    errorMessage,
    handleSubmit: handleSubmit((data) => mutate(data)),
  };
};
