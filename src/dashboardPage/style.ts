import styled from 'styled-components'
import { colors } from '../themeColors'

export const StyledDashboardCard = styled.div<{
  backgroundColor: string
  width: string
  paddingBottom?: string
  boxShadow?: string
  title: string
  colorTitle: string
  circleBar: string
}>`
  display: flex;
  justify-content: space-start;
  align-items: center;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  width: ${({ width }) => `${width}`};
  border-radius: 18px;
  height: 90px;
  padding: 18px 8px 8px 8px;
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}`};
  box-shadow: ${({ boxShadow }) => `${boxShadow}`};
`

export const StyledDashboard = styled.div`
  background: ${colors.blue1};
  border-radius: 24px;
  padding: 30px;
  width: 100%;

  h1 {
    color: ${colors.white};
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 30px;
  }
`

export const StyledDashboardContainer = styled.div`
  padding: 22px;
  width: 100%;
  background: ${colors.white};
`

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-bottom: 30px;
`

export const RadialBarStyles = styled.div`
  padding-bottom: 50px;
`
