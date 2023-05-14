import { type ComponentPropsWithoutRef, type FC } from 'react';

type ItemContainerProps = ComponentPropsWithoutRef<"button"> 


const ItemContainer: FC<ItemContainerProps> = (props) => {
  return (
<button {...props} className='p-1 rounded-md hover:bg-my-gray-500/30 dark:hover:bg-my-gray-200/20'> 

{props.children}
</button>
)
}

export default ItemContainer