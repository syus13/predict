import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledSettings = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 50px;
  z-index: 1001;
  margin-right: 20px;
  width: 175px;
  background-color: ${colors.white};
  padding: 10px 14px 10px 8px;
  border-radius: 20px;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  hr {
    margin: 5px 0;
  }
`
