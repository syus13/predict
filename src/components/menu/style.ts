import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledMenu = styled.div`
  background-color: ${colors.blue1};
  color: ${colors.white};
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 10;
`

export const StyledLogo = styled.div`
  margin: 35px;
  margin-left: 50px;
  margin-bottom: 100px;
  width: 126px;
  height: 28px;
  cursor: pointer;
`
