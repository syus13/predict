import styled from 'styled-components'

export const StyledSubTitle = styled.div<{
  size: number
  color: string
  fontWeight: number
}>`
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => `${color}`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  text-align: left;
`
