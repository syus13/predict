import { isAxiosError } from 'axios'
import api from '../../configApi'

export type GetProductsProps = {
  id: number
  nome: string
  percentual: number
}

export default async function GetProductsDashboard(
  dataInicio: string,
  dataFim: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<GetProductsProps[]> {
  try {
    const response = await api.get('/app/dashboard/produtos', {
      params: {
        dataFim,
        dataInicio,
        classificacao
      }
    })

    if (response.status === 200) {
      return response.data as GetProductsProps[]
    }

    throw new Error('Não foi possível obter os dados do servidor.')
  } catch (error) {
    if (isAxiosError(error)) {
      const status = error.response?.status

      if (status === 401) {
        throw new Error('Unauthorized.')
      }
      if (status === 403) {
        throw new Error('Forbidden')
      }
      if (status === 404) {
        throw new Error('Not Found')
      }
    }

    throw new Error(
      'Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.'
    )
  }
}
