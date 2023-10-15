import { clsx } from 'clsx';
import { InputHTMLAttributes, PropsWithRef, useId } from 'react';

export type TextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};
export const TextField = ({
  className,
  error,
  label,
  inputProps,
}: TextFieldProps) => {
  const id = useId();
  return (
    <div className={clsx(className, 'flex flex-col gap-1')}>
      {label && (
        <label className={'block'} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={clsx(
          inputProps?.className,
          'rounded border border-slate-300 px-2 h-10 focus:border-teal-600 outline-none',
        )}
        id={id}
      />
      {error && <div className={'text-rose-400 text-sm'}>{error}</div>}
    </div>
  );
};
