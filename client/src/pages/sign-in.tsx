import { SignInForm } from '@/features/auth';
import { FormPageLayout, Header } from '@/shared/ui';

export const SignInPage = () => {
  return (
    <FormPageLayout
      header={<Header />}
      title={'Sign In'}
      form={<SignInForm />}
    />
  );
};
