import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledProductsTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin-top: 32px;

  thead {
    font-size: 12px;
    color: ${colors.blue4};
    font-weight: 400;
    text-align: center;
    background-color: ${colors.blue1};

    tr {
      th:nth-child(2) {
        text-align: left;
      }
      th:nth-child(5) {
        padding-right: 20px;
      }
      th:nth-child(4) {
        padding-right: 20px;
      }
      th:nth-child(6) {
        padding-right: 20px;
      }
    }
  }

  tbody {
    font-size: 12px;
    color: ${colors.gray900};
    background-color: ${colors.gray50};
    font-weight: 400;
    text-align: center;

    .arrow {
      padding-right: 16px;
    }

    .column3,
    .column1 {
      text-align: center;
    }

    .column2 {
      text-align: left;
    }

    .onClick {
      cursor: pointer;
    }
  }

  td,
  th {
    padding: 16px 0px 16px 20px;
    border-bottom: 8px solid white;
  }

  tbody > tr:nth-child(even),
  th > th:nth-child(even) {
    background-color: ${colors.gray100};
  }
`

export const StyledTable = styled.div<{ width: string }>`
  width: ${({ width }) => `${width}`};
  background-color: ${colors.white};
  box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.1);
  padding: 32px;
  border-radius: 24px;
  margin: 34px 0px;
`

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: space-between;
`
