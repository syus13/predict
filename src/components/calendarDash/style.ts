import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledCalendarDash = styled.div`
  font-family: 'Poppins';
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
  border-radius: 8px;
  width: 224px;
  padding: 8px;

  > select {
    font-weight: 600;
    font-size: 16px;
    color: ${colors.blue1};
    border: none;
    cursor: pointer;
  }

  > option {
    font-size: 13px;
    font-weight: 400;
  }
`
export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${colors.gray800};
  margin: 0 3px;
  line-height: 150%;
  letter-spacing: 0.2px;
`
