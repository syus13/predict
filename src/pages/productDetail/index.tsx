import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { colors } from '../../themeColors'
import DashboardCard from '../../components/cardDashboard'
import { ContainerDetails } from '../predictionDetail/style'
import { StyledLinkMenu } from '../../components/menuItens/style'
import ProductsTable from '../../components/productsTable'
import Title from '../../components/titles'
import TitleIcon from '../../components/titleWI'
import { StyledContainerTable } from '../../pages/dashboard/style'
import { arrowLeft, trendingDown, trendingUp } from '../../assets/icons'
import GetProductClient, {
  GetProductClientProps
} from '../../apiRequest/getProduct/client'
import {
  GetProductSummary,
  GetProductSummaryProps
} from '../../apiRequest/getProduct/summaryProduct'

const TitleTable = ['ID', 'Cliente', 'Percentual', 'Quantidade']

export default function ProductInformationDetail() {
  const [clientLow, setClientLow] = useState<GetProductClientProps>([])
  const [clientesInHigh, setClientInHigh] = useState<GetProductClientProps>([])

  console.log(clientLow, 'Teste array')

  const [summary, setSummary] = useState<GetProductSummaryProps>()

  const { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const resultLow = await GetProductClient(id!, 'EM_BAIXA')
        const resultInHigh = await GetProductClient(id!, 'EM_ALTA')
        //console.log(resultLow, resultInHigh, 'teste de log clientes')

        setClientLow(resultLow)
        setClientInHigh(resultInHigh)
      } catch (error) {
        alert((error as any).message)
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {
    async function fetchSummary() {
      try {
        const resultSummary = await GetProductSummary(id!)
        setSummary(resultSummary)
      } catch (error) {
        alert((error as any).message)
      }
    }
    fetchSummary()
  }, [id])

  if (!summary) {
    return null
  }

  return (
    <div>
      <ContainerDetails>
        <StyledContainerTable>
          <StyledLinkMenu
            marginLeft="0px"
            color={colors.gray900}
            to="/dashboard"
          >
            <TitleIcon
              fontSize="16px"
              icon={<img src={arrowLeft} />}
              title="Detalhamento"
              color={colors.gray900}
              background={colors.gray200}
              borderRadius="100px"
              marginLeft="10px"
            />
          </StyledLinkMenu>
        </StyledContainerTable>
        <StyledContainerTable>
          <Title
            fFamily="Sora"
            fWeight={700}
            text={summary.nome || ''}
            size={24}
            color={colors.blue1}
            marginLeft=""
            marginBottom="20px"
          />
        </StyledContainerTable>
        <StyledContainerTable>
          <DashboardCard
            boxShadow="0px 7px 30px rgba(0, 0, 0, 0.1)"
            titleColor={colors.white}
            textColor={colors.white}
            description="Média 120 dias"
            status=""
            type=""
            value={summary.media120Dias || 0}
            backgroundColor=""
            cardBackground={colors.blue1}
            width="200px"
            paddingBottom="40px"
          />
          <DashboardCard
            boxShadow="0px 7px 30px rgba(0, 0, 0, 0.1)"
            titleColor={colors.gray900}
            textColor={colors.blue1}
            description="Ultimos 30 dias"
            status=""
            type=""
            value={summary.ultimos30Dias || 0}
            percentage={summary?.percentualUltimos30Dias || 0}
            backgroundColor={colors.success}
            cardBackground={colors.white}
            width="200px"
            paddingBottom="40px"
          />
          <DashboardCard
            boxShadow="0px 7px 30px rgba(0, 0, 0, 0.1)"
            titleColor={colors.gray900}
            textColor={colors.blue1}
            description="Ultimos 60 dias"
            status=""
            type=""
            value={summary.ultimos60Dias || 0}
            backgroundColor=""
            cardBackground={colors.white}
            width="200px"
            paddingBottom="40px"
          />
          <DashboardCard
            boxShadow="0px 7px 30px rgba(0, 0, 0, 0.1)"
            titleColor={colors.gray900}
            textColor={colors.blue1}
            description="Ultimos 90 dias"
            status=""
            type=""
            value={summary.ultimos90Dias || 0}
            backgroundColor=""
            cardBackground={colors.white}
            width="200px"
            paddingBottom="40px"
          />
          <DashboardCard
            boxShadow="0px 7px 30px rgba(0, 0, 0, 0.1)"
            titleColor={colors.gray900}
            textColor={colors.blue1}
            description="Ultimos 120 dias"
            status=""
            type=""
            value={summary.ultimos120Dias || 0}
            backgroundColor=""
            cardBackground={colors.white}
            width="200px"
            paddingBottom="40px"
          />
        </StyledContainerTable>
      </ContainerDetails>
      <StyledContainerTable>
        <ProductsTable
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.error}
              color={colors.gray900}
              icon={<img src={trendingDown} />}
              title="Clientes em baixa"
            />
          }
          button=""
          width="49%"
          headers={TitleTable}
        >
          {clientLow.map(apiData => (
            <tr key={apiData.id}>
              <td className="column1">{apiData.id}</td>
              <td className="column2">{apiData.nome}</td>
              <td className="column3">
                {String(apiData.percentual).replace('.', ',')}%
              </td>
              <td>{apiData.quantidade}</td>
            </tr>
          ))}
        </ProductsTable>
        <ProductsTable
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.success}
              color={colors.gray900}
              icon={<img src={trendingUp} />}
              title="Clientes em alta"
            />
          }
          button=""
          width="49%"
          headers={TitleTable}
        >
          {clientesInHigh.map(apiData => (
            <tr key={apiData.id}>
              <td className="column1">{apiData.id}</td>
              <td className="column2">{apiData.nome}</td>
              <td className="column3">
                {String(apiData.percentual).replace('.', ',')}%
              </td>
              <td>{apiData.quantidade}</td>
            </tr>
          ))}
        </ProductsTable>
      </StyledContainerTable>
    </div>
  )
}
