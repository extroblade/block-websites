import { useForm } from 'react-hook-form';

import { useAddBlockItemMutation } from '@/entities/block-list';
import { AddBlockItemDtoType } from '@/shared/api';

export const useAddBlockItemForm = () => {
  const { register, watch, reset, handleSubmit } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>({
    defaultValues: { type: AddBlockItemDtoType.Website },
  });

  const { mutate, isLoading } = useAddBlockItemMutation();
  const type = watch('type');
  return {
    handleSubmit: handleSubmit((data) => {
      mutate(data, { onSuccess: () => reset() });
    }),
    isLoading,
    register,
    type,
  };
};
