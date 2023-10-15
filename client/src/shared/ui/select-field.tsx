import { clsx } from 'clsx';
import { PropsWithRef, SelectHTMLAttributes, useId } from 'react';

export type SelectOptions = {
  value: string;
  label: string;
};
export type SelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: SelectOptions[];
};
export const SelectField = ({
  className,
  error,
  options,
  label,
  selectProps,
}: SelectFieldProps) => {
  const id = useId();
  return (
    <div className={clsx(className, 'flex flex-col gap-1')}>
      {label && (
        <label className={'block'} htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...selectProps}
        className={clsx(
          selectProps?.className,
          'rounded border border-slate-300 px-2 h-10 focus:border-teal-600 outline-none',
        )}
        id={id}
      >
        {options?.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <div className={'text-rose-400 text-sm'}>{error}</div>}
    </div>
  );
};
