import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

function Auth({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      }
    })

    return () => {
      unsub()
    }
  }, [auth])
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
