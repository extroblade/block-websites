import Head from 'next/head';
import { PropsWithChildren, ReactElement } from 'react';

import { NAMES } from '@/shared/constants';

export const withTitle = <P,>({
  title,
  Component,
}: {
  Component: (props: P) => ReactElement;
  title: string;
}) => {
  return function PageWithTitle(props: PropsWithChildren<P>) {
    const pageTitle = `${title} | ${NAMES.MAIN_TITLE}`;
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} key="title" />
        </Head>
        <Component {...props} />
      </>
    );
  };
};
