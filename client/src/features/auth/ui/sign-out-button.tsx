import { Button } from '@/shared/ui';

import { useSignOut } from '../model/use-sign-out';

export const SignOutButton = () => {
  const { signOut, isLoading } = useSignOut();
  return (
    <Button onClick={signOut} disabled={isLoading} variant={'outlined'}>
      Sign Out
    </Button>
  );
};
