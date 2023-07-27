import { isAxiosError } from 'axios'
import api from '../configApi'
import { Dispatch, SetStateAction } from 'react'

export default async function AuthenticateUser(
  email: string,
  senha: string,
  setAuth: Dispatch<SetStateAction<boolean>>
) {
  try {
    const result = await api.post(
      '/central/autenticacao/login',
      { email: email, senha: senha },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (result.status === 200) {
      api.defaults.headers.common.Authorization = `${result.data.type} ${result.data.token}`
      localStorage.setItem('AUTH-TOKEN', result.data.token)
      setAuth(true)
      return { login: true }
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { login: false, message: 'Unauthorized' }
      }
      if (error.response?.status === 403) {
        return { login: false, message: 'Forbidden' }
      }
      if (error.response?.status === 404) {
        return { login: false, message: 'Not Found' }
      }
    }
  }
  return { login: false, message: 'Page under maintenance' }
}
