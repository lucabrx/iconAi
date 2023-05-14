import { forwardRef, type FC } from 'react';

interface GenerateModalProps {
  
}

const GenerateModal = forwardRef<HTMLDivElement, GenerateModalProps>(({}, ref) => {
  return (
<div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70'>
GenerateModal
</div>
)
})

export default GenerateModal