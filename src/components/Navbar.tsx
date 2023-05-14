import {  useSession } from "next-auth/react";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { Menu } from "lucide-react";
import Link from "next/link";
import { api } from "~/utils/api";
import ThemeToggle from "./navbar/ThemeToggle";
import ItemContainer from "./ItemContainer";
import { useState } from "react";
import Sidebar from "./navbar/Sidebar";

const Navbar = () => {
  const session = useSession();
  const { buyCredits } = useBuyCredits();
  const [openBurger,setOpenBurger] = useState<boolean>(false)

  const isLoggedIn = !!session.data;

  const credits = api.users.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });
 
  return (
    <header className="w-full  h-auto flex justify-center relative">
      <div className="flex justify-between items-center w-full max-w-[1200px] p-2 border-b dark:border-b-my-gray-200/30 border-b-my-gray-500/30 px-4">
        <Link href="/" className="text-[28px] mt-1 leading-[0px] font-bold">
        Icon
        <span className="text-cta-light">AI</span>
        </Link>

        <div className="flex justify-center items-centar gap-2">
        <ThemeToggle  />
        <ItemContainer variant="ghost" onClick={() => setOpenBurger(true)}>
          <Menu className="dark:text-bg-light text-bg-dark" size={32} />
        </ItemContainer>
        </div>
        
      </div>
      {
        openBurger && (
          <Sidebar 
          state={openBurger} 
          closeEvent={() => setOpenBurger(false)}
          onClick={() => setOpenBurger(false)} 
          />
        )
      }
    </header>
  );
}

export default Navbar