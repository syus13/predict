import { isAxiosError } from 'axios'
import api from '../../configApi'

export type GetListPredictionProps = {
  content: {
    id: number
    nome: string
    produtos: {
      id: number
      nome: string
      proximaCompra: string
    }[]
  }[]

  empty: true
  first: true
  last: true
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: true
    sort: {
      empty: true
      sorted: true
      unsorted: true
    }
    unpaged: true
  }
  size: number
  sort: {
    empty: true
    sorted: true
    unsorted: true
  }
  totalElements: number
  totalPages: number
}

export default async function GetListPrediction(
  query: string
): Promise<GetListPredictionProps> {
  try {
    const result = await api.get('/app/predicao', {
      params: {
        query
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
