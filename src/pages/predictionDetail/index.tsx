import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { colors } from '../../themeColors'
import {
  GetHistoricalPrediction,
  GetHistoricalPredictionProps
} from '../../apiRequest/getPrediction/historic'
import {
  GetClient,
  GetClientProps
} from '../../apiRequest/getPrediction/client'
import {
  GetEndingPrediction,
  GetEndingPredictionProps
} from '../../apiRequest/getPrediction/ending'
import { GetLowPrediction } from '../../apiRequest/getPrediction/low'
import TitleIcon from '../../components/titleWI'
import { StyledLinkMenu } from '../../components/menuItens/style'
import { StyledCheckIcon } from '../../components/cardPrediction/style'
import { StyledContainerTable } from '../dashboard/style'
import { arrowLeft, check, facialCleanser, history } from '../../assets/icons'
import DataClient from '../../components/dataClient'
import { ContainerDetails } from './style'
import ProductsTable from '../../components/productsTable'

const tableHeader = ['ID', 'Produto', 'Última compra', 'Qtd.', 'Dar baixa']
const tableHeaderWithEnding = [
  'ID',
  'Produto',
  'Última compra',
  'Próx. compra',
  'Qtd.',
  'Dar baixa'
]

// export default function CustomerInformationDetail() {
//   const [historyData, setHistoryData] = useState<GetHistoricalPredictionProps>(
//     []
//   )
//   const [endingData, setEndingData] = useState<GetEndingPredictionProps>([])
//   const [clientData, setClientData] = useState<GetClientProps>()
//   const { id } = useParams()

//   const fetchPredictionData = async () => {
//     try {
//       const historyResult = await GetHistoricalPrediction(id!)
//       setHistoryData(historyResult)

//       const endingResult = await GetEndingPrediction(id!)
//       setEndingData(endingResult)

//       const clientResult = await GetClient(id!)
//       setClientData(clientResult)
//     } catch (error) {
//       alert((error as any).message)
//     }
//   }

//   const decreaseProduct = async (productId: number) => {
//     const result = await GetLowPrediction(id!, productId)
//     if (result.baixa) {
//       fetchPredictionData()
//       alert('Produto baixado')
//     }
//   }

//   const removeStock = async (productId: number) => {
//     const result = await GetLowPrediction(id!, productId)
//     if (result.baixa) {
//       fetchPredictionData()
//       alert('Produto baixado')
//     }
//   }

//   useEffect(() => {
//     fetchPredictionData()
//   }, [id])

export default function CustomerInformationDetail() {
  const [historyData, setHistoryData] = useState<GetHistoricalPredictionProps>(
    []
  )
  const [endingData, setEndingData] = useState<GetEndingPredictionProps>([])
  const [clientData, setClientData] = useState<GetClientProps | undefined>(
    undefined
  ) // Inicializa clientData como undefined
  const { id } = useParams()

  const fetchPredictionData = async () => {
    try {
      const historyResult = await GetHistoricalPrediction(id!)
      setHistoryData(historyResult)

      const endingResult = await GetEndingPrediction(id!)
      setEndingData(endingResult)

      const clientResult = await GetClient(id!)
      setClientData(clientResult)
    } catch (error) {
      console.error(error.message) // Exibir o erro no console para depuração
      alert('Ocorreu um erro ao buscar os dados do cliente.')
    }
  }

  const decreaseProduct = async (productId: number) => {
    const result = await GetLowPrediction(id!, productId)
    if (result.baixa) {
      fetchPredictionData()
      alert('Produto baixado')
    }
  }

  const removeStock = async (productId: number) => {
    const result = await GetLowPrediction(id!, productId)
    if (result.baixa) {
      fetchPredictionData()
      alert('Produto baixado')
    }
  }

  useEffect(() => {
    fetchPredictionData()
  }, [id])

  return (
    <ContainerDetails>
      <StyledContainerTable>
        <StyledLinkMenu
          marginLeft="0px"
          color={colors.gray900}
          to="/predictions"
        >
          <TitleIcon
            marginLeft="10px"
            fontSize="16px"
            icon={<img src={arrowLeft} />}
            title="Predições"
            color={colors.gray900}
            background={colors.gray200}
            borderRadius="100px"
          />
        </StyledLinkMenu>
      </StyledContainerTable>
      <StyledContainerTable>
        <DataClient
          name={clientData?.nome || ''}
          phone={clientData?.telefone || ''}
          email={clientData?.email || ''}
        />
      </StyledContainerTable>
      <StyledContainerTable>
        <ProductsTable
          button=""
          width="45%"
          headers={tableHeader}
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.gray200}
              color={colors.gray900}
              icon={<img src={history} />}
              title="Histórico"
            />
          }
        >
          {historyData.map(data => (
            <tr key={data.id}>
              <td className="column1">{data.id}</td>
              <td className="column2">{data.nome}</td>
              <td>{data.ultimaCompra}</td>
              <td>{data.quantidade}</td>
              <td className="arrow">
                <StyledCheckIcon
                  onClick={() => decreaseProduct(data.id)}
                  type="button"
                >
                  <img src={check} />
                </StyledCheckIcon>
              </td>
            </tr>
          ))}
        </ProductsTable>
        <ProductsTable
          button=""
          width="53%"
          headers={tableHeaderWithEnding}
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.lightRed}
              color={colors.error}
              icon={<img src={facialCleanser} color={colors.error} />}
              title="Produtos esgotando"
            />
          }
        >
          {endingData.map(data => (
            <tr key={data.id}>
              <td className="column1">{data.id}</td>
              <td className="column2">{data.nome}</td>
              <td className="column3">{data.ultimaCompra}</td>
              <td>{data.proximaCompra}</td>
              <td>{data.quantidade}</td>
              <td className="arrow">
                <StyledCheckIcon
                  onClick={() => removeStock(data.id)}
                  type="button"
                >
                  <img src={check} />
                </StyledCheckIcon>
              </td>
            </tr>
          ))}
        </ProductsTable>
      </StyledContainerTable>
    </ContainerDetails>
  )
}
