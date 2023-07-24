import { ReactNode } from 'react'
import {
  StyledContainerClientPredictionTable,
  StyledClientPredictionTable
} from './style'

type ClientPredictionTableProps = {
  children: ReactNode
  headers: string[]
}

export function ClientPredictionTable({
  children,
  headers
}: ClientPredictionTableProps) {
  return (
    <StyledContainerClientPredictionTable>
      <StyledClientPredictionTable>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </StyledClientPredictionTable>
    </StyledContainerClientPredictionTable>
  )
}
