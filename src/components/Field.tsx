import { ComponentPropsWithoutRef, type FC } from 'react';

type FieldProps =  ComponentPropsWithoutRef<"div">

const Field: FC<FieldProps> = (props) => {
    
  return (
<div {...props} className='flex flex-col space-y-1'> 
{props.children}
</div>
)
}

export default Field