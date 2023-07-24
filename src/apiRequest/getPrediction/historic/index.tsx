import { isAxiosError } from 'axios'
import api from '../../configApi'

export type GetHistoricalPredictionProps = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
}[]

export async function GetHistoricalPrediction(
  id: string
): Promise<GetHistoricalPredictionProps> {
  try {
    const result = await api.get(`/app/predicao/${id}/historico`)
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
