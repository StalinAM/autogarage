import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './styles/Theme'
import GlobalStyles from './styles/GlobalStyles'
import useThemeMode from './hooks/useThemeMode'
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
function App() {
  const [theme, toggleTheme] = useThemeMode()
  return (
    <>
      <GlobalStyles theme={theme === 'dark' ? dark : light} />
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
