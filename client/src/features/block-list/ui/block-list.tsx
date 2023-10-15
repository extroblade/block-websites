import { Spinner, TextField } from '@/shared/ui';

import { useBlockItems } from '../model/use-block-items';
import { BlockItem } from './block-item';

export const BlockList = ({ className }: { className?: string }) => {
  const { q, setQ, items, isLoading } = useBlockItems();

  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;
  return (
    <div className={className}>
      <TextField
        className={'mb-2'}
        label={'Search...'}
        inputProps={{
          value: q,
          onChange: (e) => setQ(e.target.value),
        }}
      />
      <div
        className={'rounded-xl bg-slate-100/50 px-10 flex flex-col py-6 gap-6'}
      >
        {isLoading && <Spinner className={'text-teal-600 w-10 h-10 mx-auto'} />}

        {isEmptyText && (
          <div className={'text-xl font-medium text-center py-2'}>
            List is empty...
          </div>
        )}

        {isItems && items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};
