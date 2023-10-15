import { protectedPage } from '@/features/auth';
import { HomePage } from '@/pages/home';
import { withTitle } from '@/shared/ui';

export default withTitle({
  Component: protectedPage(HomePage),
  title: 'Home',
});
