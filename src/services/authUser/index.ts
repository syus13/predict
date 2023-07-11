import { isAxiosError } from 'axios'
import api from '../configApi'

export async function AuthUser(email: string, senha: string) {
  try {
    const result = await api.post('/central/autenticacao/login', {
      email,
      senha
    })

    if (result.status === 200) {
      api.defaults.headers.common.Authorization = `${result.data.type} ${result.data.token}`
      localStorage.setItem('token', JSON.stringify(result.data))
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
  return { login: false, message: 'Erro' }
}
