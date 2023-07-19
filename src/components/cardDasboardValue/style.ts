import styled from 'styled-components'
import { colors } from '../../themeColors'

export const ContainerDashboardCardValue = styled.div`
  display: flex;
`

export const StyledDashboardCardValue = styled.h1<{ color: string }>`
  font-weight: 600;
  font-size: 26px;
  color: ${({ color }) => `${color}`};
  margin-left: 5px;
`

export const StyledDashboardPercentege = styled.div<{
  backgroundColor: string
}>`
  width: 45px;
  height: 17px;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: 100px;
  font-weight: 300;
  font-size: 12px;
  color: ${colors.white};
  margin-left: 16px;
  margin-top: 9px;
  text-align: center;
`
