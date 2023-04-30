
import Link, { type LinkProps } from "next/link";
import { FC, type ReactNode } from "react";
interface PrimaryLinkProps {
    children: ReactNode
    href: string;
}
 const PrimaryLink: FC<PrimaryLinkProps> = ( { children, href }) => {
  return (
    <Link className="hover:text-blue-500 text-lg transition-all duration-300"  href={href}>
      {children}
    </Link>
  );
}
export default PrimaryLink