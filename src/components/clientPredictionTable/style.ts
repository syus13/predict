import styled from 'styled-components'
import { colors } from '../../themeColors'

const { blue2, gray800, gray100 } = colors

export const StyledClientPredictionTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;

  thead,
  tbody {
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }

  thead {
    color: ${blue2};
    th:nth-child(1) {
      text-align: left;
    }
  }

  tbody {
    color: ${gray800};
    tr {
      td:nth-child(1) {
        text-align: left;
      }
    }
  }

  tr {
    th:nth-child(1),
    td {
      text-align: left;
    }

    td,
    th {
      padding: 2px;
    }
  }
`

export const StyledContainerClientPredictionTable = styled.div`
  padding: 10px;
  background-color: ${gray100};
  border-radius: 10px;
`
