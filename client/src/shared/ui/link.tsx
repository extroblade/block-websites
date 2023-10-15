import { clsx } from 'clsx';
import NextLink from 'next/link';
export type LinkProps = {
  className?: string;
} & Parameters<typeof NextLink>[0];
export const Link = ({ className, ...props }: LinkProps) => {
  return (
    <NextLink
      {...props}
      className={clsx(
        className,
        'p-1 text-teal-500 hover:text-teal-600 cursor-pointer',
      )}
    />
  );
};
