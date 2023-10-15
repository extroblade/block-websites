import { AppProvider } from "@/app/app-provider";
import { AppRouter } from "@/app/app-router.tsx";

export const App = () => {
  return (
    <>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>
  );
};
