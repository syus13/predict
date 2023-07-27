import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledTop = styled.div<{ width: string }>`
  position: fixed;
  padding: 0 22px;
  right: 0;
  width: ${({ width }) => `${width}`};
  height: 90px;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: ${colors.white};
  z-index: 1;

  div {
    margin-right: 10px;
  }
  p {
    font-size: 16px;
    color: ${colors.gray900};
  }
  span {
    font-size: 12px;
    color: ${colors.gray600};
  }

  button {
    background-color: ${colors.white};
    border: none;
    cursor: pointer;
  }
`
export const Logged = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export const BgIcon = styled.div`
  background-color: ${colors.blue1};
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 7px 0px 0px 8px;
  margin-right: 10px;
`
export const StyledUser = styled.div`
  p {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.gray900};
    margin-bottom: -5px;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray600};
  }
`
