import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './styles/Theme'
import GlobalStyles from './styles/GlobalStyles'
import useThemeMode from './hooks/useThemeMode'
import Dashboard from './routes/Dashboard'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
function App() {
  const [theme, toggleTheme] = useThemeMode()
  return (
    <>
      <GlobalStyles theme={theme === 'dark' ? dark : light} />
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
