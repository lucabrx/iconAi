import { type VariantProps, cva } from 'class-variance-authority';
import { type ButtonHTMLAttributes, type FC } from 'react';
import cn from '~/utils/cn';
import { Spinner } from './Spinner';

const buttonVariants = cva("rounded-md flex justify-center items-center gap-4", {
  variants: {
     variant: {
        cta: "bg-cta-light dark:bg-cta-dark p-2 px-4 rounded-md text-bg-light dark:text-bg-light hover:bg-cta-dark dark:hover:bg-cta-hover-dark",
        ghost : "bg-transparent p-2 px-4 rounded-md text-bg-dark dark:text-bg-light hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20 font-[500] text-[16px] h-full flex justify-center items-center pt-3",
        "google" : "shadow-sm bg-[#fefffe] hover:bg-[#fefffe]/70 text-[#111926]",
        "github" : "shadow-sm bg-[#27272a] hover:bg-[#27272a]/70 text-[#fefffe]",
       
     },
  },
  defaultVariants: {
      variant: "cta"
  }
})


interface ItemContainerProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}


const Button: FC<ItemContainerProps> = ({className, variant,isLoading, ...props}) => {
  return (
<button  
{...props}
className={cn(buttonVariants({variant,className}))}> 
 {isLoading && <Spinner />}
{props.children}
</button>
)
}

export default Button