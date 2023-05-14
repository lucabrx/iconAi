import { type ComponentPropsWithoutRef, type FC } from 'react';

type InputProps =  ComponentPropsWithoutRef<"input"> 

const Input: FC<InputProps> = (props) => {
  return (
<input
{...props}
type="text" 

className='rounded  border  focus:ring-2 focus:ring-cta-light focus:dark:ring-cta-dark dark:border-my-gray-200 border-my-gray-500 text-bg-dark dark:text-bg-light p-2 outline-none'
/>
)
}

export default Input