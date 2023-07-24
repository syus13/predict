import {
  ContainerDashboardCardValue,
  StyledDashboardPercentege,
  StyledDashboardCardValue
} from './style'

type DashboardCardProps = {
  total: number
  percentage?: number
  backgroundColor: string
  color: string
}

export default function DashboardCardValue({
  total,
  percentage,
  backgroundColor,
  color
}: DashboardCardProps) {
  return (
    <ContainerDashboardCardValue>
      <StyledDashboardCardValue color={color}>
        {total?.toLocaleString('pt-br')}
      </StyledDashboardCardValue>

      {!!percentage && (
        <StyledDashboardPercentege backgroundColor={backgroundColor}>
          {percentage > 0 && '+'}
          {`${percentage}%`}
        </StyledDashboardPercentege>
      )}
    </ContainerDashboardCardValue>
  )
}
