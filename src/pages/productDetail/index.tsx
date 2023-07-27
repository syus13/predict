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
  const [clientesOnHigh, setClientesOnHigh] = useState<GetProductClientProps>(
    []
  )

  const [summary, setSummary] = useState<GetProductSummaryProps>()

  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const resultEmBaixa = await GetProductClient(id!, 'EM_BAIXA')
        const resultEmAlta = await GetProductClient(id!, 'EM_ALTA')
        setClientLow(resultEmBaixa)
        setClientesOnHigh(resultEmAlta)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [id])

  useEffect(() => {
    ;(async () => {
      try {
        const resultResumo = await GetProductSummary(id!)
        setSummary(resultResumo)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [id])

  return (
    <div>
      <ContainerDetails>
        <StyledContainerTable>
          <StyledLinkMenu to="/produtos" color={colors.gray900}>
            <TitleIcon
              fontSize="16px"
              icon={arrowLeft}
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
            text={summary?.nome || ''}
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
            value={summary?.media120Dias || 0}
            backgroundColor=""
            cardBackground={colors.blue1}
            width="210px"
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
              icon={trendingDown}
              title="Cliente em baixa"
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
              icon={trendingUp}
              title="Clientes em alta"
            />
          }
          button=""
          width="49%"
          headers={TitleTable}
        >
          {clientesOnHigh.map(apiData => (
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