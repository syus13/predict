import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CalendarDash from '../components/calendarDash'
import { colors } from '../themeColors'
import {
  StyledCardContainer,
  StyledTitle,
  StyledDashboard,
  StyledDashboardContainer
} from './style'
import GetSummaryData, { ResumeDashboard } from '../apiRequest/getDashboard'
import DashboardCard from '@/components/cardDashboard'
import { GraphicRadialBar } from '@/components/graphicRadialBar'
// import GraphicRadialBar from '../components/graphicRadialBar'

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
  console.log(summary?.percentualTotalProdutosAlta)
  return (
    <StyledDashboardContainer>
      <StyledDashboard>
        <StyledTitle>
          <span>Dashboard</span>
          <CalendarDash setDate={setDate} />
        </StyledTitle>
        <StyledCardContainer>
          <DashboardCard
            description="Total"
            titleColor={colors.white}
            radialBar={
              <GraphicRadialBar
                series={summary?.percentualTotalProdutosAlta || 0}
              />
            }
            type="produtos"
            status="em alta"
            value={summary?.quantidadeProdutosAlta || 0}
            percentage={summary?.percentualVariacaoProdutosAlta || 0}
            backgroundColor={colors.success}
            cardBackground={colors.blueCard}
            textColor={colors.white}
            width="250px"
          />
          <DashboardCard
            description="Total"
            titleColor={colors.white}
            radialBar={
              <GraphicRadialBar
                series={summary?.percentualTotalProdutosBaixa || 0}
              />
            }
            type="produtos"
            status="em baixa"
            value={summary?.quantidadeProdutosBaixa || 0}
            percentage={summary?.percentualVariacaoProdutosBaixa || 0}
            backgroundColor={colors.error}
            cardBackground={colors.blueCard}
            textColor={colors.white}
            width="250px"
          />
          <DashboardCard
            description="Total"
            titleColor={colors.white}
            radialBar={
              <GraphicRadialBar
                series={summary?.percentualTotalClientesAlta || 0}
              />
            }
            type="clientes"
            status="em alta"
            value={summary?.quantidadeClientesAlta || 0}
            percentage={summary?.percentualVariacaoClientesAlta || 0}
            backgroundColor={colors.success}
            cardBackground={colors.blueCard}
            textColor={colors.white}
            width="250px"
          />
          <DashboardCard
            description="Total"
            titleColor={colors.white}
            radialBar={
              <GraphicRadialBar
                series={summary?.percentualTotalClientesBaixa || 0}
              />
            }
            type="clientes"
            status="em baixa"
            value={summary?.quantidadeClientesBaixa || 0}
            percentage={summary?.percentualVariacaoClientesBaixa || 0}
            backgroundColor={colors.error}
            cardBackground={colors.blueCard}
            textColor={colors.white}
            width="250px"
          />
        </StyledCardContainer>
      </StyledDashboard>
    </StyledDashboardContainer>
  )
}
