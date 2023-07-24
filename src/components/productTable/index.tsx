import { ReactNode } from 'react'
import { Pagination } from '../pagination'
import {
  StyledContainerStatus,
  StyledContainerTable,
  StyledTableProduct
} from './style'

type ProductTableProps = {
  children: ReactNode
  headers: string[]
  width: string
  button: ReactNode
  title: ReactNode
  totalPagesListed?: number
  totalPagesListedInAPI?: number
  currentPage?: number
  numberItemPage?: number
  changePage?: (page: number) => void
}

export default function ProductTable({
  children,
  headers,
  width,
  button,
  title,
  totalPagesListed = 0,
  totalPagesListedInAPI = 0,
  currentPage = 0,
  numberItemPage = 0,
  changePage
}: ProductTableProps) {
  const pagination = !!changePage

  return (
    <StyledContainerTable width={width}>
      <StyledContainerStatus>
        <span>{title}</span>
        <span>{button}</span>
      </StyledContainerStatus>
      <StyledTableProduct>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </StyledTableProduct>
      {pagination && (
        <Pagination
          totalPagesListed={totalPagesListed}
          totalPagesListedInAPI={totalPagesListedInAPI}
          currentPage={currentPage}
          numberItemPage={numberItemPage}
          changePage={changePage}
        />
      )}
    </StyledContainerTable>
  )
}
