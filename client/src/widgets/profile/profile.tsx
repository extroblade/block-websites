import { useSessionQuery } from '@/entities/session';
import { SignOutButton } from '@/features/auth';
import { Spinner } from '@/shared/ui';

export const Profile = () => {
  const { data: session } = useSessionQuery();
  if (!session) {
    return <Spinner />;
  }
  return (
    <div className={'flex gap-2 items-center justify-center'}>
      {session?.email}
      <SignOutButton />
    </div>
  );
};
