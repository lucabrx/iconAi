import { X } from 'lucide-react';
import { type FC } from 'react';

interface SidebarProps {
  onClick: () => void
}

const Sidebar: FC<SidebarProps> = ({onClick}) => {
  return (
<div className='absolute right-0 top-0 h-screen w-[300px] bg-red-200'> 
<X onClick={onClick} size={36} className='absolute top-4 right-4 rounded-md hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20 dark:text-bg-light text-bg-dark'/>
Sidebar
</div>
)
}

export default Sidebar