import styled from 'styled-components'
import { colors } from '../../themeColors'

export const FullContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const ContainerProduct = styled.div`
  position: fixed;
  background-color: ${colors.white};
  width: 200px;
  top: 0;
  margin-top: 100px;
  margin-left: 490px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.2);

  .totalProd {
    font-size: 13px;
    color: ${colors.gray600};
    font-weight: 400;
  }
`

export const StyledProduct = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledSubTitle = styled.div`
  padding-bottom: 10px;
`
export const FilterProductHr = styled.hr`
  margin: 8px 0px;
`
