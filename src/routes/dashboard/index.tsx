import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { colors } from '../../themeColors'
import { dateUtils } from '../../components/ui/dateUtils'
import Dashboard from '../../dashboardPage'
import { ContainerTableStyle } from './styles'
import {
  GetDashboardTableClient,
  GetDashboardTableProduct
} from '../../services/GetDashboardResumo/getDashboardTabela'
import HightLowButton from '../../components/hightLowButton'
import { TableProduct } from '../../components/TableProduct'
import { TitleWithIcon } from '../../components/TitleWithIcon'
import { ChevronRight } from '../../assets/icons/ChevronRight'
import { EveryUser } from '../../assets/icons/EveryUser'
import { FacialCleanser } from '../../assets/icons/FacialCleanser'

const ProductTableTitle = ['ID', 'Product', 'Percentage', ' ']
const ClientTableTitle = ['ID', 'Client', 'Percentage', ' ']

// Separate table row rendering logic into a reusable component
const TableRow = ({ dashboardData, url }) => (
  <tr key={dashboardData.id} className="onClick" onClick={() => navigate(url)}>
    <td className="column1">{dashboardData.id}</td>
    <td className="column2">{dashboardData.nome}</td>
    <td className="column3">{dashboardData.percentual}%</td>
    <td className="arrow">
      <ChevronRight />
    </td>
  </tr>
)

export function DashboardPage() {
  const [highProducts, setHighProducts] = useState(false)
  const [highClients, setHighClients] = useState(false)
  const [dates, setDates] = useState(dateUtils.getThisMonth())
  const [productTableData, setProductTableData] = useState([])
  const [clientTableData, setClientTableData] = useState([])

  // Destructuring props for better readability
  const toggleHighProducts = () => setHighProducts(prev => !prev)
  const toggleHighClients = () => setHighClients(prev => !prev)
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch product table data
    ;(async () => {
      try {
        const resultProducts = await GetDashboardTableProduct(
          dates.end,
          dates.start,
          highProducts ? 'EM_BAIXA' : 'EM_ALTA'
        )
        setProductTableData(resultProducts)
      } catch (error) {
        alert(error.message)
      }
    })()
  }, [highProducts, dates])

  useEffect(() => {
    // Fetch client table data
    ;(async () => {
      try {
        const resultClients = await GetDashboardTableClient(
          dates.end,
          dates.start,
          highClients ? 'LOW' : 'HIGH'
        )
        setClientTableData(resultClients)
      } catch (error) {
        alert(error.message)
      }
    })()
  }, [highClients, dates])

  const goToPage = url => {
    navigate(url)
  }

  return (
    <div>
      <Dashboard setDates={setDates} dates={dates} />

      <ContainerTableStyle>
        <TableProduct
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.blue4}
              color={colors.gray900}
              icon={<FacialCleanser color={colors.blue1} />}
              title="Products"
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
            />
          ))}
        </TableProduct>

        <TableProduct
          title={
            <TitleWithIcon
              marginLeft="10px"
              fontSize="16px"
              background={colors.blue1}
              color={colors.gray900}
              icon={<EveryUser />}
              title="Clients"
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
            />
          ))}
        </TableProduct>
      </ContainerTableStyle>
    </div>
  )
}
