import { SignUpForm } from '@/features/auth';
import { FormPageLayout, Header } from '@/shared/ui';
export const SignUpPage = () => {
  return (
    <FormPageLayout
      header={<Header />}
      title={'Sign Up'}
      form={<SignUpForm />}
    />
  );
};
