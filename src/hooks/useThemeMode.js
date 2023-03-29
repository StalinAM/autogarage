import { useState, useEffect } from 'react'

const useThemeMode = () => {
  /* Uses the window.matchMedia method to check if the operating system (OS) has a dark color preference. If so, the light theme is set to 'dark'; otherwise, it is set to 'light'. */

  const themeOS =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

  /* Checks if there is a local theme stored in the browser cache, using the window.localStorage.getItem() method. If there is a local theme, it sets it as the light theme instead of the OS theme. */

  const localTheme = window.localStorage.getItem('theme')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    themeOS && !localTheme
      ? setTheme(themeOS)
      : localTheme && setTheme(localTheme)
  }, [])

  /* Defines a toggleTheme function that changes the theme state between 'light' and 'dark' and also updates the theme stored in the browser cache using window.localStorage.setItem(). */

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
      return
    }

    window.localStorage.setItem('theme', 'light')
    setTheme('light')
  }

  return [theme, toggleTheme]
}

export default useThemeMode
