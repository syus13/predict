import { isAxiosError } from 'axios'
import api from '../../configApi'

export type GetClientProps = {
  email: string
  nome: string
  telefone: string
}

export async function GetClient(id: string): Promise<GetClientProps> {
  try {
    const token = localStorage.getItem('AUTH-TOKEN')
    const result = await api.get(`/app/cliente/${id}`, {
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
