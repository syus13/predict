import styled from 'styled-components'
import { colors } from '../../../themeColors'

export const StyledContainerInput = styled.div`
  display: flex;
  position: relative;
  width: 400px;
`

export const StyledInput = styled.input<{
  border: string
}>`
  width: 400px;
  height: 56px;
  border: 1px solid ${({ border }) => `${border}`};
  border-radius: 16px;
  color: ${colors.gray900};
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
`

// export const StyledLabel = styled.div<{ selected: boolean }>`
//   font-size: 14px;
//   color: ${({ selected }) => (selected ? colors.gray900 : colors.success)};
//   position: absolute;
//   left: 0;
//   background-color: white;
//   margin-left: 20px;
//   margin-top: -10px;
//   padding: 0 5px;
// `

interface StyledLabelProps {
  htmlFor: string
  selected: boolean
}

export const StyledLabel = styled.div<StyledLabelProps>`
  font-size: 14px;
  color: ${({ selected }) => (selected ? colors.gray900 : colors.success)};
  position: absolute;
  left: 0;
  background-color: white;
  margin-left: 20px;
  margin-top: -10px;
  padding: 0 5px;
`

export const StyledEye = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;

  button {
    background-color: rgb(255, 255, 255, 0.1);
    border: none;
  }
`
