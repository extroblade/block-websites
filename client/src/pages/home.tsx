import { AddBlockItemForm, BlockList } from '@/features/block-list';
import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { Header } from '@/shared/ui';
import { Profile } from '@/widgets/profile';

export const HomePage = () => {
  return (
    <main className={'min-h-screen flex flex-col'}>
      <Header right={<Profile />} />
      <div className={'grid grid-cols-[150px_1fr]'}>
        <aside className={'px-5 pt-10'}>
          <ToggleBlockingButton className={'w-full'} />
        </aside>
        <main className={'pt-10 px-5'}>
          <h1 className={'text-2xl'}>Block List</h1>
          <AddBlockItemForm />
          <BlockList className={'mt-3'} />
        </main>
      </div>
    </main>
  );
};
