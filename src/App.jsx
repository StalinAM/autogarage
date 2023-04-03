import { Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './styles/Theme'
import GlobalStyles from './styles/GlobalStyles'
import useThemeMode from './hooks/useThemeMode'
import Dashboard from './routes/Dashboard'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import { AuthContext } from './context/Auth'
function App() {
  const [theme, toggleTheme] = useThemeMode()
  const { currentUser } = useContext(AuthContext)
  const ProtectDashboard = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/' />
    }
    return children
  }
  const ProtectLogin = ({ children }) => {
    if (currentUser) {
      return <Navigate to='/dashboard' />
    }
    return children
  }
  return (
    <>
      <GlobalStyles theme={theme === 'dark' ? dark : light} />
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectLogin>
                <SignIn />
              </ProtectLogin>
            }
          />
          <Route
            path='/signup'
            element={
              <ProtectLogin>
                <SignUp />
              </ProtectLogin>
            }
          />
          <Route
            path='/dashboard'
            element={
              <ProtectDashboard>
                <Dashboard theme={theme} toggleTheme={toggleTheme} />
              </ProtectDashboard>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
