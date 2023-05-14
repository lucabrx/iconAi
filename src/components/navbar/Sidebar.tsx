import { Brush, Home, User, UserCheck, UserMinus, Users2, X } from 'lucide-react';
import { useRef, type FC } from 'react';
import { useClickOutside } from '~/hooks/useClickOutside';
import useLockOverflow from '~/hooks/useLockOverflow';
import SidebarItem from './SidebarItem';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { api } from '~/utils/api';
import { useBuyCredits } from '~/hooks/useBuyCredits';
import Button from '../Button';

interface SidebarProps {
  onClick: () => void;
  closeEvent: () => void;
  state: boolean;
}

const Sidebar: FC<SidebarProps> = ({onClick,state,closeEvent}) => {
  const {data : session} = useSession()
  const { buyCredits } = useBuyCredits();
  const isLoggedIn = !!session;
  const credits = api.users.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });
  
    const sidebarRef = useRef<HTMLDivElement>(null);

    useLockOverflow(state)
    useClickOutside(sidebarRef,onClick)
  return (
<div ref={sidebarRef} className='absolute right-0 top-0 h-screen w-[300px] px-4
bg-neutral-50 dark:bg-neutral-900 z-50
'> 
<X onClick={onClick} size={36} className='cursor-pointer absolute top-4 right-4 rounded-md hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20 dark:text-bg-light text-bg-dark'/>
<div className='pt-[72px] flex flex-col items-center justify-center w-full space-y-4'>
  
<Link className='w-full' href="/">
<SidebarItem
icon={Home}
label="Home"
onClick={closeEvent}
/>
</Link>
<Link className='w-full' href="/generate">
<SidebarItem
icon={Brush}
label="Generate"
onClick={closeEvent}
/>
</Link>
<Link className='w-full' href="/collection">
<SidebarItem
icon={User}
label="Profile"
onClick={closeEvent}
/>
</Link>
<Link className='w-full' href="/community">
<SidebarItem
icon={Users2}
label="Community"
onClick={closeEvent}
/>
</Link>
{
session ? (
  <SidebarItem
  icon={UserMinus}
  label="Logout"
  onClick={closeEvent} 
  />
)
:
(
  <SidebarItem
  icon={UserCheck}
  label="Login"
  onClick={() => {
    signIn("google")
    closeEvent()
  }} 
  />
)
}
{ session && (
    <div className='flex w-full items-center justify-between px-4'>
  <p className=' font-bold text-center'>{credits.data?.credits} Credits</p>
  <Button onClick={buyCredits} variant="cta">Buy Credits</Button>
</div>
  )
  }
</div>

</div>
)
}

export default Sidebar