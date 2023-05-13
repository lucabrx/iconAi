import {Sun, Moon} from 'lucide-react'
import { useTheme } from 'next-themes'
import {type FC, useEffect, useState } from 'react'


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
    <button>
    {
        resolvedTheme === 'light' ? <Sun onClick={() => setTheme('dark')} /> : <Moon onClick={() => setTheme('light')} />
    }
    </button>
  )
}

export default ThemeToggle