import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
`
export const ContentLogin = styled.div`
  font-family: Sora;
  display: block;
  margin: 0 auto;
`

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${colors.gray600};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
`

export const StyledSubtitle = styled.div`
  font-size: 20px;
  color: ${colors.gray800};
  font-weight: 400;
  text-align: left;
  line-height: 140%;
  letter-spacing: 0.2px;
`

export const StyledTitle = styled.div`
  font-size: 36px;
  color: ${colors.gray900};
  font-weight: 600;
  text-align: left;
  line-height: 140%;
  margin-bottom: 50px;
`
