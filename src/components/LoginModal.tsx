import {  type FC, useRef, useState } from 'react';
import useLoginModal from '~/hooks/useLoginModal';
import Button from './Button';
import { X } from 'lucide-react';
import useLockOverflow from '~/hooks/useLockOverflow';
import { useClickOutside } from '~/hooks/useClickOutside';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

interface LoginModalProps {
  
}

const LoginModal: FC<LoginModalProps> = ({}) => {
    const loginModal = useLoginModal();
    const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false)
    const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>(false)
    const modalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useLockOverflow(loginModal.isOpen)
    useClickOutside(modalRef, loginModal.close)

    function loginWithGoogle() {
      try {
        setIsLoadingGoogle(true)
        signIn("google")
      } catch(e) {
        console.log(e)
      } finally {
    setIsLoadingGoogle(false)
  }
    }
    function loginWithGithub() {
      try {
        setIsLoadingGithub(true)
        signIn("github")
        // router.reload()
      } catch(e) {
        console.log(e)
      } finally {
        setIsLoadingGithub(false)
  }
    }

  return (
<>
{loginModal.isOpen && (
     <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
     <div  className='relative w-full md:w-4/6 lg:w-2/6 px0:w-2/6 h-full lg:h-auto md:h-auto mx-auto '>
     <div  className={`translate duration-300 h-full 
      ${loginModal.isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
      <div ref={modalRef} className='translate h-full lg:h-auto md:h-auto  rounded-md shadow-lg relative flex flex-col w-full bg-bg-light dark:bg-bg-dark outline-none focus:outline-none'>
      <div className='flex items-center p-4 rounded-t-md justify-center relative border-b border-neutral-700/50 '>
      <button onClick={loginModal.close} className='absolute right-2 top-2 cursor-pointer p-1 rounded-md hover:bg-slate-600/20'><X /></button>
      <h2 className='text-xl font-semibold'>Login to your account</h2>
      </div>
      <p className='text-slate-900/80 text-center w-full py-2'>Welcome to our amazing icon creator</p>
      <div className='relative flex-auto px-6 pt-2 pb-6 flex flex-col gap-2'>
      
      <Button onClick={loginWithGoogle} className='py-2 px-4' variant="google">
      {!isLoadingGoogle &&  <Image alt='google' src='./google.svg' height={24} width={24} />}
      Sign in with Google
      </Button>     
      <Button onClick={loginWithGithub} className='py-2 px-4' variant="github">
      {!isLoadingGithub && <Image alt='github' src='./github.svg' height={24} width={24} />
      }
      Sign in with Github  
      </Button>     
     
      </div>
     </div>
     </div>
     </div>
     </div>
)}
</>
)
}

export default LoginModal