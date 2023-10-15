import { ROUTES } from '@/shared/constants';
import { Button, Link, TextField } from '@/shared/ui';

import { useSignInForm } from '../model/use-sign-in-form';

export const SignInForm = () => {
  const { register, errorMessage, isLoading, handleSubmit } = useSignInForm();
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
      <Button disabled={isLoading}>Sign In</Button>
      <Link className={'text-center'} href={ROUTES.SIGN_UP}>
        Sign Up
      </Link>
      {errorMessage && (
        <div className={'text-rose-500 text-center'}>{errorMessage}</div>
      )}
    </form>
  );
};
