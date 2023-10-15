import { ROUTES } from '@/shared/constants';
import { Button, Link, TextField } from '@/shared/ui';

import { useSignUpForm } from '../model/use-sign-up-form';

export const SignUpForm = () => {
  const { register, errorMessage, isLoading, handleSubmit } = useSignUpForm();
  return (
    <form className={'flex flex-col gap-2'} onSubmit={handleSubmit}>
      <TextField
        label={'Email'}
        inputProps={{
          type: 'email',
          ...register('email', { required: true }),
        }}
      />
      <TextField
        label={'Password'}
        inputProps={{
          type: 'password',
          ...register('password', { required: true }),
        }}
      />
      <Button disabled={isLoading}>Sign Up</Button>
      <Link className={'text-center'} href={ROUTES.SIGN_IN}>
        Sign In
      </Link>
      {errorMessage && (
        <div className={'text-rose-500 text-center'}>{errorMessage}</div>
      )}
    </form>
  );
};
