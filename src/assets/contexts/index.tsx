import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction
} from 'react'
import api from '../../apiRequest/configApi'

type ContextType = {
  auth: boolean
  setAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<ContextType>({
  auth: false,
  setAuth: () => []
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
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
