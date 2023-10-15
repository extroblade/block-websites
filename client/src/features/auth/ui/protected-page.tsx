import { useRouter } from 'next/router';
import { PropsWithChildren, ReactElement } from 'react';

import { useSessionQuery } from '@/entities/session';
import { ROUTES } from '@/shared/constants';
import { PageSpinner } from '@/shared/ui';

export const protectedPage = <P,>(Component: (props: P) => ReactElement) => {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const { isLoading, isError } = useSessionQuery();
    if (isLoading) {
      return <PageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }
    return <Component {...props} />;
  };
};
