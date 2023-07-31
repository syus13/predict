import styled from 'styled-components'

export const StyledDashboardCard = styled.div<{
  backgroundColor: string
  width: string
  paddingBottom?: string
  boxShadow?: string
}>`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2px;
  display: flex;
  justify-content: space-start;
  align-items: center;
  background: ${({ backgroundColor }) => `${backgroundColor}`};
  width: ${({ width }) => `${width}`};
  border-radius: 18px;
  height: 70px;
  padding: 18px 8px 8px 8px;
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}`};
  box-shadow: ${({ boxShadow }) => `${boxShadow}`};
`
