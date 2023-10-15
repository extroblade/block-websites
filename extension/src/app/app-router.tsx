import { useSessionQuery } from "@/entities/session";
import { PageSpinner } from "@/shared/ui";
import { HomePage } from "@/pages/home";
import { NotAuthPage } from "@/pages/not-auth";

export const AppRouter = () => {
  const { isLoading, isSuccess } = useSessionQuery();
  if (isLoading) {
    return <PageSpinner />;
  }
  if (isSuccess) {
    return <HomePage />;
  }
  return <NotAuthPage />;
};
