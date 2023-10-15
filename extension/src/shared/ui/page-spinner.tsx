import { clsx } from "clsx";

import { Spinner } from "@/shared/ui";

export const PageSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "fixed bg-slate-100 left-0 top-0 right-0 bottom-0 flex justify-center items-center",
        className,
      )}
    >
      <Spinner className={"text-teal-600 w-24 h-24"} />
    </div>
  );
};
