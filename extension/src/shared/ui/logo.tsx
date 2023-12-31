import { clsx } from "clsx";
import { NAMES } from "@/shared/constants";
import { ADMIN_SIGN_IN_URL } from "@/shared/constants/routes.ts";
export const Logo = ({ className }: { className?: string }) => {
  return (
    <a
      href={ADMIN_SIGN_IN_URL}
      target={"_blank"}
      className={clsx(
        className,
        "flex items-center gap-2 justify-center text-xl",
      )}
    >
      <Boat className={"w-12 h-12"} />
      {NAMES.MAIN_TITLE}
    </a>
  );
};

const Boat = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20 21c-1.39 0-2.78-.47-4-1.32c-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.752 8.752 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2c.98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l2.18-7.65l-2.23-.73V4h-5V1H9v3H4v6.62l-2.23.73L3.95 19zM6 6h12v3.97L12 8L6 9.97V6z"
      ></path>
    </svg>
  );
};
