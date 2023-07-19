import styled from 'styled-components'

interface StyledTitleProps {
  fSize: number
  color: string
  marginBottom?: string
  marginLeft: string
}

export const StyledTitle = styled.h1<StyledTitleProps>`
  font-family: 'Poppins';
  font-size: ${({ fSize }) => `${fSize}px`};
  color: ${({ color }) => color};
  font-weight: 600;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
`
