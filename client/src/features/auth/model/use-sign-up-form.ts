import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { authControllerSignUp } from '@/shared/api';
import { ROUTES } from '@/shared/constants';

export const useSignUpForm = () => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const router = useRouter();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess: () => {
      router.push(ROUTES.HOME);
    },
  });

  const errorMessage = error ? `Sign up failed` : null;

  return {
    register,
    mutate,
    isLoading,
    errorMessage,
    handleSubmit: handleSubmit((data) => mutate(data)),
  };
};
