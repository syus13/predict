import React, { ReactNode, useEffect, useState, createContext } from 'react'
import api from '../../services/configApi'

type ContextType = {
  auth: boolean
}

export const AuthContext = createContext<ContextType>({
  auth: false
})

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<boolean>(false)

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }

    const { type, token: authToken } = JSON.parse(token)
    api.defaults.headers.common.Authorization = `${type} ${authToken}`
    setAuth(true)
  }

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  )
}
