import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined';

export type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center',
        {
          primary:
            'text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50',
          secondary:
            'text-white bg-red-500 hover:bg-red-600 disabled:opacity-50',
          outlined:
            'border border-slate-300 hover:border-slate-400 disabled:opacity-50',
        }[variant],
      )}
    />
  );
};
