import {  signOut, useSession } from "next-auth/react";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { Menu } from "lucide-react";
import Link from "next/link";
import { api } from "~/utils/api";
import ThemeToggle from "./navbar/ThemeToggle";
import ItemContainer from "./ItemContainer";
import { useState } from "react";
import Sidebar from "./navbar/Sidebar";
import Button from "./Button";
import useLoginModal from "~/hooks/useLoginModal";


const Navbar = () => {
  const session = useSession();
  const { buyCredits } = useBuyCredits();
  const [openBurger,setOpenBurger] = useState<boolean>(false);
  const loginModal = useLoginModal()

  const isLoggedIn = !!session.data;

  const credits = api.users.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });
 
  return (
    <header 
    className="w-full  h-auto flex justify-center relative  border-b dark:border-b-my-gray-200/30 border-b-my-gray-500/30">
      <div className="flex justify-between items-center w-full max-w-[1200px] p-2   px-4">
        <Link href="/" className="text-[28px] mt-1 leading-[0px] font-bold">
        Icon
        <span className="text-cta-light">AI</span>
        </Link>

        <div className="hidden md:flex gap-4">
          <ItemContainer className="lg:px-4 pt-2.5">
          <Link
          className="cursor-pointer"
          href="/generate">Generate
          </Link>
          </ItemContainer >
          <ItemContainer className="lg:px-4 pt-2.5">
          <Link
          className="cursor-pointer"
          href="/collection">Profile
          </Link>
          </ItemContainer>
          <ItemContainer className="lg:px-4 pt-2.5">
          <Link
          className="cursor-pointer"
          href="/community">Community
          </Link>
          </ItemContainer>
        </div>

        <div className=" flex justify-center items-centar gap-2">
        {session.data && 
        <div className='hidden md:flex w-full items-center justify-center gap-4'>
        <p className=' font-medium text-center pt-1'>{credits.data?.credits} Credits</p>
        <Button onClick={buyCredits} variant="cta">Buy Credits</Button>
        </div>
        }
        <ThemeToggle  />

        <ItemContainer
        className="md:hidden"
        variant="ghost" 
        onClick={() => setOpenBurger(true)}>
          <Menu className="dark:text-bg-light text-bg-dark" size={32} />
        </ItemContainer>

        <div className="hidden md:flex">
        {
          session.data ? (
          <Button 
          onClick={() => signOut()}
          variant="ghost">
          Logout
          </Button>
          ) :
          (
            <Button 
            variant="cta" 
            onClick={loginModal.open}>
            Login
            </Button>
          )
        }
        </div>
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