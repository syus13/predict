import styled from 'styled-components'
import { colors } from '../../themeColors'

type styledButtonProps = {
  color: string
  backgroundColor: string
}

export const styledButton = styled.button<styledButtonProps>`
  width: 90px;
  height: 24px;
  border-radius: 5px;
  border: none;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  background: ${props => props.background};
`

export const backgroundButton = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.gray50};
  border: 1px solid ${colors.gray300};
  border-radius: 8px;
  width: 200px;
  padding: 7px 7px 6px;
`
