import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerMenu = styled.div`
  margin-bottom: 50px;
`

export const StyledLinkMenu = styled(Link)<{
  color: string
  marginLeft?: string
}>`
  font-family: Poppins;
  cursor: pointer;
  display: flex;
  justify-content: start;
  margin: 20px 30px 42px 16px;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%; /* 24px */
  letter-spacing: 0.2px;
  color: ${({ color }) => `${color}`};
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
`
export const Links = styled.div`
  margin-left: 20px;
`
