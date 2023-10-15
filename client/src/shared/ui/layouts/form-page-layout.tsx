import { ReactNode } from 'react';

export const FormPageLayout = ({
  title,
  form,
  header,
}: {
  title: string;
  form?: ReactNode;
  header: ReactNode;
}) => {
  return (
    <div className={'min-h-screen flex flex-col bg-slate-100'}>
      {header}
      <main className={'flex grow flex-col pt-24'}>
        <div
          className={
            'rounded-xl border self-center border-slate-300 w-full px-14 pt-8 pb-16 max-w-[400px] bg-white'
          }
        >
          <h1 className={'text-2-xl font-medium mb-6'}>{title}</h1>
          {form}
        </div>
      </main>
    </div>
  );
};
