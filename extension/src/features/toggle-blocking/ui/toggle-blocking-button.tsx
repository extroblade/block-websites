import { Button, Spinner } from "@/shared/ui";

import { useToggleBlocking } from "../model/use-toggle-blocking";

export const ToggleBlockingButton = ({ className }: { className?: string }) => {
  const { isBlockingEnabled, isLoading, isReady, toggleBlocking } =
    useToggleBlocking();
  if (!isReady) {
    return <Spinner />;
  }
  return (
    <Button
      disabled={isLoading}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
      onClick={toggleBlocking}
      className={className}
    >
      {isBlockingEnabled ? "Disable" : "Enable"}
    </Button>
  );
};
