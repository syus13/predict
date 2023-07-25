import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { colors } from '@/themeColors'
import { dateUtils } from '@/components/ui/dateUtils'
import Dashboard from '@/dashboardPage'
import TitleIcon from '@/components/titleWI'
import { StyledContainerTable } from './style'
import HightLowButton from '@/components/hightLowButton'
import GetProductsDashboard, {
  GetProductsProps
} from '@/apiRequest/getSummaryDashboard/product'
import GetClientsDashboard from '@/apiRequest/getSummaryDashboard/client'
import { chevronRight, everyUser, facialCleanser } from '@/assets/icons'
import ProductTable from '../../components/productTable'

const ProductTableTitle = ['ID', 'Produto', 'Percentual', ' ']
const ClientTableTitle = ['ID', 'Cliente', 'Percentual', ' ']

type DashboardData = {
  id: number
  nome: string
  percentual: number
}

type TableRowProps = {
  dashboardData: DashboardData
  url: string
  navigate: (url: string) => void
}

const TableRow: React.FC<TableRowProps> = ({
  dashboardData,
  url,
  navigate
}) => (
  <tr key={dashboardData.id} className="onClick" onClick={() => navigate(url)}>
    <td className="column1">{dashboardData.id}</td>
    <td className="column2">{dashboardData.nome}</td>
    <td className="column3">{dashboardData.percentual}%</td>
    <td className="arrow">
      <img src={chevronRight} alt="Seta para Direita" />
    </td>
  </tr>
)

export default function DashboardPage() {
  const [highProducts, setHighProducts] = useState(false)
  const [highClients, setHighClients] = useState(false)
  const [dates, setDates] = useState(dateUtils.getThisMonth())

  const [productTableData, setProductTableData] = useState<GetProductsProps[]>(
    []
  )
  const [clientTableData, setClientTableData] = useState<GetProductsProps[]>([])

  const toggleHighProducts = () => {
    setHighProducts(prevHighProducts => !prevHighProducts)
  }

  const toggleHighClients = () => {
    setHighClients(prevHighClients => !prevHighClients)
  }

  const navigate = useNavigate()

  async function fetchData() {
    try {
      const resultProducts: GetProductsProps[] = await GetProductsDashboard(
        dates.end,
        dates.start,
        highProducts ? 'EM_BAIXA' : 'EM_ALTA'
      )
      setProductTableData(resultProducts)
    } catch (error: any) {
      alert(error.message)
    }
  }

  async function fetchClientData() {
    try {
      const resultClients: GetProductsProps = await GetClientsDashboard(
        dates.end,
        dates.start,
        highClients ? 'EM_BAIXA' : 'EM_ALTA'
      )
      setClientTableData([resultClients])
    } catch (error: any) {
      alert(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [highProducts, dates])

  useEffect(() => {
    fetchClientData()
  }, [highClients, dates])

  const goToPage = (url: string) => {
    navigate(url)
  }

  return (
    <div>
      <Dashboard setDate={setDates} date={dates} />

      <StyledContainerTable>
        <ProductTable
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.blue4}
              color={colors.gray900}
              icon={<img src={facialCleanser} color={colors.blue1} />}
              title="Produtos"
            />
          }
          button={
            <HightLowButton
              inHigh={highProducts}
              changeStatus={toggleHighProducts}
            />
          }
          width="49%"
          headers={ProductTableTitle}
        >
          {productTableData.map(dashboardData => (
            <TableRow
              key={dashboardData.id}
              dashboardData={dashboardData}
              url={`/informacoesprodutos${dashboardData.id}`}
              navigate={goToPage}
            />
          ))}
        </ProductTable>

        <ProductTable
          title={
            <TitleIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.blue1}
              color={colors.gray900}
              icon={<img src={everyUser} />}
              title="Clientes"
            />
          }
          button={
            <HightLowButton
              inHigh={highClients}
              changeStatus={toggleHighClients}
            />
          }
          width="49%"
          headers={ClientTableTitle}
        >
          {clientTableData.map(dashboardData => (
            <TableRow
              key={dashboardData.id}
              dashboardData={dashboardData}
              url={`/informacoesprodutosclientes/${dashboardData.id}`}
              navigate={goToPage}
            />
          ))}
        </ProductTable>
      </StyledContainerTable>
    </div>
  )
}
