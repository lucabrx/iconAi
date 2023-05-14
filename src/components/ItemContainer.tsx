import { type VariantProps, cva } from 'class-variance-authority';
import { type ButtonHTMLAttributes, type FC } from 'react';
import cn from '~/utils/cn';

const containerVariants = cva("rounded-md", {
  variants: {
     variant: {
        solid: "bg-cta-light dark:bg-cta-dark p-1.5 rounded-md text-bg-light dark:text-bg-light",
        ghost: "p-1.5 rounded-md hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20"
     },
  },
  defaultVariants: {
      variant: "ghost"
  }
})


interface ItemContainerProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof containerVariants> {

}


const ItemContainer: FC<ItemContainerProps> = ({className, variant, ...props}) => {
  return (
<button  
{...props}
className={cn(containerVariants({variant,className}))}> 
{props.children}
</button>
)
}

export default ItemContainer