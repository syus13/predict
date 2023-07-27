import { isAxiosError } from 'axios'
import api from '../../configApi'

export type GetProductProps = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}[]

export async function GetProductStatus(
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProductProps> {
  try {
    const token = localStorage.getItem('AUTH-TOKEN')
    const result = await api.get(`/app/cliente/${id}/produtos`, {
      params: {
        classificacao
      },
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
      if (error.response?.status === 401) {
        throw new Error('Unauthorized')
      }
      if (error.response?.status === 403) {
        throw new Error('Forbidden')
      }
      if (error.response?.status === 404) {
        throw new Error('Not Found')
      }
    }
  }
  throw new Error('Page under maintenance')
}
