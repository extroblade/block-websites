import { clsx } from 'clsx';
import { ReactNode } from 'react';

import { Logo } from '@/shared/ui';

export const Header = ({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) => {
  return (
    <header
      className={clsx(
        'w-full px-4 bg-white py-5 border-b border-b-slate-300 flex justify-between items-center',
        className,
      )}
    >
      <Logo />
      {right}
    </header>
  );
};
