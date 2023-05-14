import { Brush, Home, User, UserCheck, UserMinus, Users2, X } from 'lucide-react';
import { useRef, type FC } from 'react';
import { useClickOutside } from '~/hooks/useClickOutside';
import useLockOverflow from '~/hooks/useLockOverflow';
import SidebarItem from './SidebarItem';
import { useSession } from 'next-auth/react';

interface SidebarProps {
  onClick: () => void;
  closeEvent: () => void;
  state: boolean;
}

const Sidebar: FC<SidebarProps> = ({onClick,state,closeEvent}) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const {data : session} = useSession()

    useLockOverflow(state)
    useClickOutside(sidebarRef,onClick)
  return (
<div ref={sidebarRef} className='absolute right-0 top-0 h-screen w-[300px] px-4
bg-neutral-50 dark:bg-neutral-900
'> 
<X onClick={onClick} size={36} className='absolute top-4 right-4 rounded-md hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20 dark:text-bg-light text-bg-dark'/>
<div className='pt-[72px] flex flex-col items-center justify-center w-full space-y-4'>

<SidebarItem
icon={Home}
label="Home"
onClick={closeEvent}
/>
<SidebarItem
icon={Brush}
label="Generate"
onClick={closeEvent}
/>
<SidebarItem
icon={User}
label="Profile"
onClick={closeEvent}
/>
<SidebarItem
icon={Users2}
label="Community"
onClick={closeEvent}
/>
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
  onClick={closeEvent} 
  />
)
}
</div>

</div>
)
}

export default Sidebar