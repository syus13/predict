import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CalendarDash from '../components/calendarDash'
import { colors } from '../themeColors'
import {
  StyledDashboardCard,
  StyledCardContainer,
  StyledTitle,
  StyledDashboard,
  StyledDashboardContainer
} from './style'
import CircleBar from '../components/circleBar'
import GetSummaryData, { ResumeDashboard } from '../services/getDashboard'

type CalendarProps = {
  date: { end: string; start: string }
  setDate: Dispatch<SetStateAction<{ end: string; start: string }>>
}

export default function Dashboard({ date, setDate }: CalendarProps) {
  const [summary, setSummary] = useState<ResumeDashboard>()

  useEffect(() => {
    ;(async () => {
      try {
        const result = await GetSummaryData(date.end, date.start)
        setSummary(result)
      } catch (error) {
        alert((error as any).message)
      }
    })()
  }, [date])

  return (
    <StyledDashboardContainer>
      <StyledDashboard>
        <StyledTitle>
          <span>Dashboard</span>
          <CalendarDash setDate={setDate} />
        </StyledTitle>
        <StyledCardContainer>
          <StyledDashboardCard
            text="Total"
            colorTitle={colors.white}
            circleBar={
              <CircleBar series={summary?.percentualTotalProdutosAlta || 0} />
            }
            type="produtos"
            status="em alta"
            value={summary?.quantidadeProdutosAlta || 0}
            percentage={summary?.percentualVariacaoProdutosAlta || 0}
            backgroundColor={colors.success}
            backgroundCard={colors.blueCard}
            color={colors.white}
            width="250px"
          />
          <StyledDashboardCard
            text="Total"
            colorTitle={colors.white}
            circleBar={
              <CircleBar series={summary?.percentualTotalProdutosBaixa || 0} />
            }
            type="produtos"
            status="em baixa"
            value={summary?.quantidadeProdutosBaixa || 0}
            percentage={summary?.percentualVariacaoProdutosBaixa || 0}
            backgroundColor={colors.error}
            backgroundCard={colors.blueCard}
            color={colors.white}
            width="250px"
          />
          <StyledDashboardCard
            text="Total"
            colorTitle={colors.white}
            circleBar={
              <CircleBar series={summary?.percentualTotalClientesAlta || 0} />
            }
            type="clientes"
            status="em alta"
            value={summary?.quantidadeClientesAlta || 0}
            percentage={summary?.percentualVariacaoClientesAlta || 0}
            backgroundColor={colors.success}
            backgroundCard={colors.blueCard}
            color={colors.white}
            width="250px"
          />
          <StyledDashboardCard
            text="Total"
            colorTitle={colors.white}
            circleBar={
              <CircleBar series={summary?.percentualTotalClientesBaixa || 0} />
            }
            type="clientes"
            status="em baixa"
            value={summary?.quantidadeClientesBaixa || 0}
            percentage={summary?.percentualVariacaoClientesBaixa || 0}
            backgroundColor={colors.error}
            backgroundCard={colors.blueCard}
            color={colors.white}
            width="250px"
          />
        </StyledCardContainer>
      </StyledDashboard>
    </StyledDashboardContainer>
  )
}
