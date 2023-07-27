import { isAxiosError } from 'axios'
import api from '../configApi'

export type ResumeDashboard = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}

export default async function GetSummaryData(
  dataInicio: string,
  dataFim: string
): Promise<ResumeDashboard> {
  try {
    const token = localStorage.getItem('AUTH-TOKEN')
    const response = await api.get('/app/dashboard/resumo', {
      params: {
        dataFim,
        dataInicio
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })

    if (response.status === 200) {
      return response.data as ResumeDashboard
    }
  } catch (error) {
    if (isAxiosError(error)) {
      const status = error.response?.status
      switch (status) {
        case 401:
          throw new Error('Operação não autorizada 1')
        case 403:
          throw new Error('Usuário não tem permissão de acesso')
        case 404:
          throw new Error('Página não encontrada')
      }
    }
  }
  throw new Error('Página em manutenção')
}
