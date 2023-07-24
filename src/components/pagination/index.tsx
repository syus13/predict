import { ReactNode, MouseEventHandler } from 'react'
import { chevronLeft, chevronRight } from '../../assets/icons'
import {
  StyledContainer,
  StyledPagesContainer,
  StyledPagesButton
} from './style'

type ButtonIconProps = {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

type PaginationProps = {
  totalPagesListed: number
  totalPagesListedInAPI: number
  currentPage: number
  numberItemPage: number
  changePage: (page: number) => void
}

export default function Pagination({
  totalPagesListed,
  totalPagesListedInAPI,
  currentPage,
  numberItemPage,
  changePage
}: PaginationProps) {
  const length = Math.ceil(totalPagesListedInAPI / numberItemPage)
  const pageNumbers = Array.from({ length }, (_, soma) => soma + 1)

  return (
    <StyledContainer>
      <div>
        <p>
          {totalPagesListed} de {totalPagesListedInAPI} itens
        </p>
      </div>
      <StyledPagesContainer>
        {length > 1 && currentPage > 1 && (
          <ButtonIcon onClick={() => changePage(currentPage - 1)}>
            <img src={chevronLeft} />
          </ButtonIcon>
        )}

        {pageNumbers.map(iten => (
          <StyledPagesButton
            className={iten === currentPage ? 'active' : ''}
            key={iten}
            onClick={() => changePage(iten)}
          >
            {iten}
          </StyledPagesButton>
        ))}

        {length > 1 && currentPage < length && (
          <ButtonIcon onClick={() => changePage(currentPage + 1)}>
            <img src={chevronRight} />
          </ButtonIcon>
        )}
      </StyledPagesContainer>
    </StyledContainer>
  )
}

function ButtonIcon({ onClick, children }: ButtonIconProps) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}
