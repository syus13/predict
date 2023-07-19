import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledTitleIcon = styled.div<{
  color: string
  fontSize: string
  marginLeft: string
}>`
  display: flex;
  align-items: center;
  color: ${({ color }) => `${color}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: 600;
  span {
    margin-left: ${({ marginLeft }) => `${marginLeft}`};
  }
`

export const StyledContainerIcon = styled.div<{
  backgroundColor: string
  borderRadius?: string
}>`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  border-radius: ${({ borderRadius }) => `${borderRadius || '8px'}`};
  width: 40px;
  height: 40px;
  padding: 9px 17px 15px 9px;
  margin-right: 12px;

  label {
    font-family: 'Poppins';
    font-size: 20px;
    color: ${colors.gray900};
    font-weight: 600;
  }
`

export const StyledContainerWithIcon = styled.div<{ marginBottom?: string }>`
  margin-bottom: ${({ marginBottom }) => `${marginBottom}`};
`
