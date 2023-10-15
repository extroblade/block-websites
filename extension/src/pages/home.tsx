import { Button, Logo } from "@/shared/ui";
import { createTab } from "@/shared/lib";
import { ADMIN_URL } from "@/shared/constants";
import { ToggleBlockingButton } from "@/features/toggle-blocking";

export const HomePage = () => {
  return (
    <div className={"p-8 flex flex-col  justify-center gap-8 max-w-[350px]"}>
      <Logo />
      <ToggleBlockingButton />
      <Button onClick={() => createTab(ADMIN_URL)}>Manage Extension</Button>
    </div>
  );
};
