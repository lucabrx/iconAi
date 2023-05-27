import { Icon } from 'lucide-react';
import { type FC } from 'react';
import ItemContainer from './ItemContainer';

interface HomeCardProps {
  icon: Icon;
  title: string;
  description: string;
}

const HomeCard: FC<HomeCardProps> = ({
    icon: Icon,
    title,
    description,
}) => {
  return (
<div 
style={{backdropFilter: 'blur(20px)'}}
className='w-[200px] h-[150px] dark:bg-blue-900/20 bg-blue-300/30 flex justify-center items-center relative rounded-md shadow-sm bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  '> 
<ItemContainer className='absolute top-2 left-2 hover:bg-cta-light dark:bg-cta-dark bg-cta-light hover:dark:bg-cta-dark select-none cursor-default'>
<Icon size={18} className='text-bg-light' />
</ItemContainer>
<h2 className='font-[500] text-bg-dark dark:text-bg-light'>{title}</h2>

<p className='absolute bottom-2 left-2 text-sm text-text-sec-light dark:text-text-sec-dark font-light'>
{description}
</p>
</div>
)
}

export default HomeCard