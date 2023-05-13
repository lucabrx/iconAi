import {Sun, Moon} from 'lucide-react'
import { useTheme } from 'next-themes'

import { type NextPage } from 'next'


const ThemeToggle: NextPage = () => {
    const { setTheme, resolvedTheme} = useTheme()
   
      
  return (
    <button>
    {
        resolvedTheme === 'light' ? <Sun onClick={() => setTheme('dark')} /> : <Moon onClick={() => setTheme('light')} />
    }
    </button>
  )
}

export default ThemeToggle