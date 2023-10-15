import { useState } from 'react';

import { useBlockListQuery } from '@/entities/block-list';
import { useDebouncedValue } from '@/shared/lib';

export const useBlockItems = () => {
  const [q, setQ] = useState('');
  const { data, isLoading } = useBlockListQuery({
    q: useDebouncedValue(q, 400),
  });

  return { items: data?.items ?? [], isLoading, q, setQ };
};
