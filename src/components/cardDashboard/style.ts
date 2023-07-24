import styled from 'styled-components'

export const StyledDashboardCard = styled.div<{
  backgroundColor: string
  width: string
  paddingBottom?: string
  boxShadow?: string
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
