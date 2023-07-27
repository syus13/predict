import { ReactNode } from 'react'
import { ContainerStatus, StyledTable, StyledProductsTable } from './style'
import Pagination from '../pagination'

type ProductsTableProps = {
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

export default function ProductsTable({
  children,
  headers,
  width,
  button,
  title,
  totalPagesListed,
  totalPagesListedInAPI,
  currentPage,
  numberItemPage,
  changePage
}: ProductsTableProps) {
  return (
    <StyledTable width={width}>
      <ContainerStatus>
        <span>{title}</span>
        <span>{button}</span>
      </ContainerStatus>
      <StyledProductsTable>
        <thead>
          <tr>
            {headers.map(title => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </StyledProductsTable>
      {changePage && (
        <Pagination
          totalPagesListed={totalPagesListed ?? 0}
          totalPagesListedInAPI={totalPagesListedInAPI ?? 0}
          currentPage={currentPage ?? 0}
          numberItemPage={numberItemPage ?? 0}
          changePage={page => changePage(page)}
        />
      )}
    </StyledTable>
  )
}
