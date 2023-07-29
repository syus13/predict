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
import {
  arrowLeft,
  check,
  facialCleanserRed,
  history
} from '../../assets/icons'
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

export default function CustomerInformationDetail() {
  const [historyData, setHistoryData] = useState<GetHistoricalPredictionProps>(
    []
  )
  const [endingData, setEndingData] = useState<GetEndingPredictionProps>([])
  const [clientData, setClientData] = useState<GetClientProps | undefined>(
    undefined
  )
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
      console.error(error)
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
        <StyledLinkMenu marginLeft="0px" color={colors.gray900} to="/predict">
          <TitleIcon
            marginLeft="10px"
            fontSize="20px"
            icon={<img src={arrowLeft} />}
            title="Predição"
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
          width="60%"
          headers={tableHeader}
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="20px"
              background={colors.gray200}
              color={colors.gray900}
              icon={<img src={history} />}
              title="Histórico"
            />
          }
        >
          {Array.isArray(historyData) &&
            historyData.map(data => (
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
          width="70%"
          headers={tableHeaderWithEnding}
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="20px"
              background={colors.lightRed}
              color={colors.error}
              icon={<img src={facialCleanserRed} back-groud={colors.black} />}
              title="Produtos esgotando"
            />
          }
        >
          {Array.isArray(endingData) &&
            endingData.map(data => (
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
