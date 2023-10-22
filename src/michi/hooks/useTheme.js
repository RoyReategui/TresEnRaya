import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (window.localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    window.localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, handleChangeTheme }
}
