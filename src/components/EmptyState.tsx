import { type FC } from 'react';
import useLoginModal from '~/hooks/useLoginModal';
import Button from './Button';



const EmptyState: FC= ({}) => {
    const loginModal = useLoginModal()
  return (
<div 
      className="h-[60vh] flex flex-col gap-4 justify-center items-center 
      "
    >
     <div className="text-center"> 
    <h2 className='text-2xl font-bold dark:text-neutral-50 text-neutral-950'>
      You need to be logged in to view this page.
    </h2>
    <h3 className='font-light text-neutral-700 dark:text-neutral-200 mt-2'>
        Sign up to get started.
    </h3>
      </div>
        <Button onClick={loginModal.open}>Sign up</Button>
        
      
    </div>
)
}

export default EmptyState