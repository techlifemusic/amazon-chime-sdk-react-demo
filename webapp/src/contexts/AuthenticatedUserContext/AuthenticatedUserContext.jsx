import React, { createContext, useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify'

// :: ---

const AuthenticatedUserContext = createContext(null)

export function AuthenticatedUserContextProvider({ children }) {
  const [user, setUser] = useState(null)

  const refreshUser = async () => {
    try {
      setUser(await Auth.currentAuthenticatedUser())
    } catch (_) {
      setUser(null)
    }
  }

  useEffect(() => {
    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
        case 'signOut':
          refreshUser()
          break
        default:
          break
      }
    }

    Hub.listen('auth', listener)
    refreshUser()

    return () => Hub.remove('auth', listener)
  }, [])

  return (
    <AuthenticatedUserContext.Provider value={user}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

export default AuthenticatedUserContext
