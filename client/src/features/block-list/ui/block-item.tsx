import { useRemoveBlockItemMutation } from '@/entities/block-list';
import { AddBlockItemDtoType } from '@/shared/api';
import { Link } from '@/shared/ui';

export const BlockItem = ({
  id,
  data,
  type,
}: {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}) => {
  const { mutate, isLoading } = useRemoveBlockItemMutation();
  const handleRemove = () => {
    mutate(id);
  };
  return (
    <div className={'flex gap-2'}>
      <div>
        {type === 'Website' ? (
          <Link target={'_blank'} className={'text-lg'} href={data}>
            {data}
          </Link>
        ) : (
          <div className={'text-lg'}>{data}</div>
        )}
        <div className={'text-slate-500'}>{type}</div>
      </div>
      <button
        onClick={handleRemove}
        disabled={isLoading}
        className={
          'ml-auto p-4 text-rose-500 hover:text-rose-600 hover:bg-slate-200 rounded-xl cursor-pointer disabled:opacity-50'
        }
      >
        <Trash className={'w-5 h-5'} />
      </button>
    </div>
  );
};
const Trash = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="0.75em"
      height="1em"
      viewBox="0 0 12 16"
    >
      <path
        fillRule="evenodd"
        d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
