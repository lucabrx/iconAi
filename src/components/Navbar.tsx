import {  useSession } from "next-auth/react";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import  Button  from "./Button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { api } from "~/utils/api";
import ThemeToggle from "./navbar/ThemeToggle";

const Navbar = () => {
  const session = useSession();
  const { buyCredits } = useBuyCredits();

  const isLoggedIn = !!session.data;

  const credits = api.users.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });
 
  return (
    <header className="w-full  h-auto flex justify-center">
      <div className="flex justify-between items-center w-full max-w-[1200px] p-2">
        <Link href="/" className="text-[28px] leading-[0px] font-bold">
        Icon
        <span className="text-cta-light">AI</span>
        </Link>
        <ThemeToggle  />
        <button className="bg-cta-light p-1.5 rounded-md dark:bg-red-500" >
          <Menu color="#F9FAFB" />
        </button>
        
        
      </div>
    </header>
  );
}

export default Navbar