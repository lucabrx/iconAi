import clsx from "clsx";
import { Spinner } from "./Spinner";

 const  Button = (
  props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
  }
) => {
  const { variant, isLoading, ...rest } = props;

  const color =
    (variant ?? "primary") === "primary"
      ? "bg-blue-600 hover:bg-blue-700 transition-all duration-300"
      : "bg-transparent underline font-semibold text-slate-50 hover:ring-2 hover:ring-blue-600";

  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center justify-center gap-2 rounded px-4 py-2 disabled:bg-gray-600",
        color
      )}
    >
      {isLoading && <Spinner />}
      {props.children}
    </button>
  );
}

export default Button