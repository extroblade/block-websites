import { Button, Logo } from "@/shared/ui";
import { createTab } from "@/shared/lib";
import { ADMIN_SIGN_IN_URL } from "@/shared/constants/routes.ts";

export const NotAuthPage = () => {
  return (
    <div className={"p-8 flex flex-col  justify-center gap-8 max-w-[350px]"}>
      <Logo />
      <h2 className={"p-4 text-xl text-center font-bold"}>
        You are not authorized
      </h2>
      <Button onClick={() => createTab(ADMIN_SIGN_IN_URL)}>Sign in</Button>
    </div>
  );
};
