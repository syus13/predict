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
  font-family: 'Poppins';
  width: 335px;
  height: 311px;

  top: 0;
  margin-top: 280px;
  margin-left: 430px;
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
  margin-bottom: 15px;
`

export const StyledSubTitle = styled.div`
  padding-bottom: 10px;
`
export const FilterProductHr = styled.hr`
  margin: 8px 0px;
`
