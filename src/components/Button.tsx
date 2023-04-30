import { ComponentPropsWithoutRef, type FC } from 'react';

type ButtonProps = ComponentPropsWithoutRef<"button"> 

const Button: FC<ButtonProps> = (props) => {
  return (
<button 
className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
{...props}> 
{props.children}
</button>
)
}

export default Button