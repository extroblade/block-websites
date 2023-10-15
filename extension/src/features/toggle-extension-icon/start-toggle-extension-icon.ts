import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api";
import { setBrowserInterval, setIcon } from "@/shared/lib";

export function startToggleExtensionIcon() {
  setBrowserInterval(
    "update-block-rules",
    async () => {
      console.log("start sync");
      const isAuth = await authControllerGetSessionInfo().then(
        () => true,
        () => false,
      );

      if (!isAuth) {
        setIcon("/hey.png");
        return;
      }

      const isBlockingEnabled = await accountControllerGetAccount().then(
        (r) => r.isBlockingEnabled,
      );

      if (!isBlockingEnabled) {
        setIcon("/sleaping.png");
        return;
      }

      setIcon("/shield.png");
      return;
    },
    5 * 1000,
  );
}
