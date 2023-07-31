import { useEffect, useState } from 'react'
import { colors } from '@/themeColors'
import Title from '@/components/titles'
import CardPrediction from '../../components/cardPrediction'
import { StyledDashboardContainer } from '@/dashboardPage/style'
import { ContainerCard } from './style'
import ResearchPrediction from '@/components/researchPrediction'
import GetListPrediction, {
  GetListPredictionProps
} from '../../apiRequest/getPrediction/List'

const TABLE_HEADER = ['Produto', 'Próx. compra']

export default function PagePredictions() {
  const [searchTerm, setSearchTerm] = useState('')
  const [listPrediction, setListPrediction] =
    useState<GetListPredictionProps | null>(null)

  const startSearch = async () => {
    try {
      const result = await GetListPrediction(searchTerm)
      setListPrediction(result)
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('Ocorreu um erro desconhecido.')
      }
    }
  }

  useEffect(() => {
    startSearch()
  }, [])

  return (
    <div>
      <StyledDashboardContainer>
        <Title
          fFamily="Sora"
          fWeight={600}
          marginLeft="10px"
          text="Predições"
          size={32}
          color={colors.gray900}
          marginBottom="30px"
          marginTop="40ps"
        />
        <ResearchPrediction
          startSearch={startSearch}
          onChange={event => setSearchTerm(event.target.value)}
          value={searchTerm}
          icon=""
          boxShadow="0px 7px 30px rgba(0, 0, 0, 0.1)"
          paddingLeft="20px"
          height="100px"
          marginBottom=""
        />
      </StyledDashboardContainer>
      <ContainerCard>
        {listPrediction &&
          listPrediction.content.map(apiData => (
            <CardPrediction
              key={apiData.id}
              id={apiData.id}
              name={apiData.nome}
              tableTitle={TABLE_HEADER}
              table={apiData.produtos.map(apiDataProducts => (
                <tr key={apiDataProducts.id}>
                  <td className="column2">{apiDataProducts.nome}</td>
                  <td className="column3">{apiDataProducts.proximaCompra}</td>
                </tr>
              ))}
            />
          ))}
      </ContainerCard>
    </div>
  )
}
