import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Loader from '../components/Loader'

export const AuthContext = createContext()

function Auth({ children }) {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [auth])
  if (loading) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
