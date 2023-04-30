import { type ComponentPropsWithoutRef, type FC } from 'react';

type InputProps =  ComponentPropsWithoutRef<"input"> 

const Input: FC<InputProps> = (props) => {
  return (
<input
{...props}
type="text" 
className='rounded p-1 border border-gray-200 focus:ring-2 focus:ring-blue-500 text-slate-900'
/>
)
}

export default Input