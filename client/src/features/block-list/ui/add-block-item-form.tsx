import { HTMLInputTypeAttribute } from 'react';

import { AddBlockItemDtoType } from '@/shared/api';
import { Button, SelectField, TextField } from '@/shared/ui';

import { useAddBlockItemForm } from '../model/use-add-block-item-form';

const typeOptions = [
  { label: 'Website', value: AddBlockItemDtoType.Website },
  { label: 'Keyword', value: AddBlockItemDtoType.KeyWord },
];

const chosenOption: Record<
  AddBlockItemDtoType,
  {
    inputType: HTMLInputTypeAttribute;
    placeholder: string;
  }
> = {
  KeyWord: {
    inputType: 'text',
    placeholder: 'Enter Keyword',
  },
  Website: {
    inputType: 'text',
    placeholder: 'Enter Website',
  },
};

export const AddBlockItemForm = () => {
  const { handleSubmit, register, isLoading, type } = useAddBlockItemForm();
  return (
    <form className={'flex gap-2'} onSubmit={handleSubmit}>
      <SelectField
        options={typeOptions}
        className={'grow max-w-[200px]'}
        selectProps={{ ...register('type') }}
      />
      <TextField
        className={'grow'}
        inputProps={{
          type: chosenOption[type].inputType,
          placeholder: chosenOption[type].placeholder,
          ...register('data'),
        }}
      />
      <Button disabled={isLoading}>Block</Button>
    </form>
  );
};
