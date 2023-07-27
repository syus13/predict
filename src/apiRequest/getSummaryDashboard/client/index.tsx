import { isAxiosError, AxiosError, AxiosResponse } from 'axios'
import api from '../../configApi'
import { GetProductsProps } from '../product'

export default async function GetClientsDashboard(
  dataInicio: string,
  dataFim: string,
  classificacao: 'EM_BAIXA' | 'EM_ALTA'
): Promise<GetProductsProps[]> {
  try {
    const token = localStorage.getItem('AUTH-TOKEN')
    const result: AxiosResponse<GetProductsProps[]> = await api.get(
      '/app/dashboard/clientes',
      {
        params: {
          dataFim,
          dataInicio,
          classificacao
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-TENANT-ID': 'arnia'
        }
      }
    )

    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (isAxiosError(error)) {
      const status = (error as AxiosError).response?.status

      if (status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}
