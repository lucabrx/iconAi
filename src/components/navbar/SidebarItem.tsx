import { type LucideIcon } from 'lucide-react';
import { type FC } from 'react';
import ItemContainer from '../ItemContainer';


interface SidebarItemProps {
    icon: LucideIcon,
    label: string;
    onClick: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    onClick, 
}) => {

  
  return (
  <div 
  onClick={onClick}
  className='flex justify-between items-center w-full p-2 rounded-md hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20 px-4'> 
  <ItemContainer variant="solid">
  <Icon size={24} className='text-bg-light dark:text-bg-light'/>
  </ItemContainer>
  <span className='text-bg-dark dark:text-bg-light font-semibold'>{label}</span>
  </div> 
)
}

export default SidebarItem