import { type FC } from 'react';

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
<div className='flex items-center justify-center text-sm text-text-sec-light dark:text-text-sec-dark'> 
designed by <a href="github.com"> lucabrx</a>
</div>
)
}

export default Footer