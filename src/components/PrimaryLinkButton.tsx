import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

const PrimaryLinkButton = (
  props: LinkProps & { children: ReactNode; className?: string }
) => {
  const { className, ...propsWithoutClassname } = props;

  return (
    <Link
      className={clsx(
        "rounded bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-2 px-4",
        className ?? ""
      )}
      {...propsWithoutClassname}
    >
      {props.children}
    </Link>
  );
}

export default PrimaryLinkButton