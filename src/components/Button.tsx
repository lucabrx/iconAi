import { type VariantProps, cva } from 'class-variance-authority';
import { type ButtonHTMLAttributes, type FC } from 'react';
import cn from '~/utils/cn';

const buttonVariants = cva("rounded-md", {
  variants: {
     variant: {
        cta: "bg-cta-light dark:bg-cta-dark p-2 px-4 rounded-md text-bg-light dark:text-bg-light hover:bg-cta-dark dark:hover:bg-cta-hover-dark",
        ghost : "bg-transparent p-2 px-4 rounded-md text-bg-dark dark:text-bg-light hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20 font-[500] text-[16px] h-full flex justify-center items-center pt-3",
       
     },
  },
  defaultVariants: {
      variant: "cta"
  }
})


interface ItemContainerProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

}


const Button: FC<ItemContainerProps> = ({className, variant, ...props}) => {
  return (
<button  
{...props}
className={cn(buttonVariants({variant,className}))}> 
{props.children}
</button>
)
}

export default Button