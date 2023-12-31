import { isAxiosError } from 'axios'
import api from '../configApi'

export type UserLoggedProps = {
  email: string
  id: number
  nome: string
}

export default async function UserLogged(): Promise<UserLoggedProps> {
  try {
    const token = localStorage.getItem('AUTH-TOKEN')
    const result = await api.get('/central/usuario/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (isAxiosError(error)) {
      const { status } = error.response || {}

      switch (status) {
        case 401:
          throw new Error('Unauthorized')
        case 403:
          throw new Error('Forbidden')
        case 404:
          throw new Error('Not Found')
      }
    }
  }
  throw new Error('Page under maintenance')
}
