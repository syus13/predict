import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledProductsContainer = styled.div`
  margin-top: 110px;
`

export const ProductStatus = styled.div<{
  backgroundColor: string
  color: string
}>`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  width: 80px;
  height: 30px;
  border-radius: 6px;
  padding-top: 6px;
  color: ${({ color }) => `${color}`};
  margin: 0 auto;
  font-weight: 500;
`

export const ButtonFilter = styled.button`
  background-color: ${colors.gray100};
  border: none;
  cursor: pointer;
`

export const StyledFilter = styled.div`
  background-color: ${colors.gray100};
  width: 56px;
  height: 56px;
  padding: 15px 14px 9px 14px;
  border-radius: 12px;
  margin-left: 16px;
`
