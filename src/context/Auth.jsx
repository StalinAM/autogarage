import { createContext, useRef, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

function Auth({ children }) {
  const currentUserRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      currentUserRef.current = user
      setLoading(false)
    })

    return () => unsubscribe()
  }, [auth])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider value={{ currentUser: currentUserRef.current }}>
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
