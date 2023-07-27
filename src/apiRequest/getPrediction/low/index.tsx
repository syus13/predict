import { isAxiosError } from 'axios'
import api from '../../configApi'

export type GetLowPredictionProps = {
  email: string
  nome: string
  telefone: string
}

export async function GetLowPrediction(
  id: string,
  produtoId: number
): Promise<{ baixa: true }> {
  try {
    const token = localStorage.getItem('AUTH-TOKEN')
    const result = await api.post(`/app/predicao/${id}/baixa`, {
      produtoId,
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
