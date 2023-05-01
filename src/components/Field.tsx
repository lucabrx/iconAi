import clsx from 'clsx';
import { ComponentPropsWithoutRef, type FC } from 'react';

type FieldProps =  ComponentPropsWithoutRef<"div">

const Field: FC<FieldProps> = (props) => {
    
  return (
<div {...props} className={clsx("flex flex-col gap-1", props.className)}> 
{props.children}
</div>
)
}

export default Field