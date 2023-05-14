import {Sun, Moon} from 'lucide-react'
import { useTheme } from 'next-themes'
import {type FC, useEffect, useState } from 'react'
import ItemContainer from '../ItemContainer'


const ThemeToggle: FC = () => {
    const { setTheme, resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
      }
      
  return (
    
     <ItemContainer variant="ghost">
    {
        resolvedTheme === 'light' ? 
        <Sun 
        className="dark:text-bg-light text-bg-dark"
        size={28} 
        onClick={() => setTheme('dark')} 
        /> 
        :
         <Moon 
         className="dark:text-bg-light text-bg-dark"
         size={28} 
         onClick={() => setTheme('light')} 
         />
    }
    </ItemContainer>

   
  )
}

export default ThemeToggle