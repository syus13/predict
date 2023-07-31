import styled from 'styled-components'

interface StyledTitleProps {
  fSize: number
  color: string
  marginBottom?: string
  marginLeft: string
  family?: string
  weight?: number
  marginTop?: string
}

export const StyledTitle = styled.h1<StyledTitleProps>`
  font-size: ${({ fSize }) => `${fSize}px`};
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => `${weight}`};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  font-family: ${({ family }) => family};
  margin-top: ${({ marginTop }) => marginTop};
`
