import Image from 'next/image';
import { type FC } from 'react';

interface UserProfileProps {
    image: string | undefined | null; 
    name: string | undefined | null;
    email: string | undefined | null;
}

const UserProfile: FC<UserProfileProps> = ({image,email,name}) => {
  return (
<div className='w-full flex items-center md:justify-start justify-center gap-4 pt-4 md:pt-8'> 
<div className='relative w-[84px] md:w-[96px] h-[84px] md:h-[96px]'>
{
    image && email && name && (
        <Image 
fill 
className='rounded-full'
src={image}
alt={name}
/>
)
}
</div>
<div>
<p className='text-xl font-bold'>{name}</p>
<p className='text-text-sec-light dark:text-text-sec-dark'>{email}</p>
</div>
</div>
)
}

export default UserProfile