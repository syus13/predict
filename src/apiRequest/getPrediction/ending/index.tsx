//import { isAxiosError } from 'axios'
import api from '../../configApi'

export type GetEndingPredictionProps = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
  proximaCompra: string
}[]

// export async function GetEndingPrediction(
//   id: string
// ): Promise<GetEndingPredictionProps> {
//   try {
//     const token = localStorage.getItem('AUTH-TOKEN')
//     const result = await api.get(`/app/predicao/${id}/esgotando`, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//         'X-TENANT-ID': 'arnia'
//       }
//     })

//     if (result.status === 200) {
//       return result.data
//     }
//   } catch (error) {
//     if (isAxiosError(error)) {
//       if (error.response?.status === 401) {
//         throw new Error('Unauthorized')
//       }
//       if (error.response?.status === 403) {
//         throw new Error('Forbidden')
//       }
//       if (error.response?.status === 404) {
//         throw new Error('Not Found')
//       }
//     }
//   }
//   throw new Error('Page under maintenance')
// }

export async function GetEndingPrediction(
  id: string
): Promise<GetEndingPredictionProps> {
  try {
    const token = localStorage.getItem('AUTH-TOKEN')
    const result = await api.get(`/app/predicao/${id}/esgotando`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    return result.data
  } catch (error) {
    throw new Error('Failed to fetch ending prediction')
  }
}
