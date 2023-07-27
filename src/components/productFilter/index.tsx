import React, { Dispatch, SetStateAction } from 'react'
import { colors } from '../../themeColors'
import Selected from '../selected'
import SubTitle from '../subTitle'
import {
  ContainerProduct,
  FullContainer,
  StyledSubTitle,
  StyledProduct
} from './style'
import BtnContactUs from '../contactUsComp/btnContactUs'
type ProductFilterProps = {
  filter: 'TODOS' | 'EM_ALTA' | 'EM_BAIXA'
  setFilter: (filter: 'TODOS' | 'EM_ALTA' | 'EM_BAIXA') => void
  setFilterOpen: Dispatch<SetStateAction<boolean>>
  onApplyFilter: () => void
  totalProducts?: number
  totalProductsInHigh?: number
  totalProductsLow?: number
}

export default function ProductFilter({
  filter,
  setFilter,
  setFilterOpen,
  onApplyFilter,
  totalProducts,
  totalProductsInHigh,
  totalProductsLow
}: ProductFilterProps) {
  return (
    <FullContainer>
      <ContainerProduct>
        <StyledSubTitle>
          <SubTitle
            text="Filtrar por:"
            size={14}
            color={colors.gray900}
            fontWeight={600}
          />

          <SubTitle
            text="Status"
            size={12}
            color={colors.gray900}
            fontWeight={500}
          />
        </StyledSubTitle>
        <StyledProduct>
          <Selected
            selected={filter === 'TODOS'}
            onChange={() => setFilter('TODOS')}
            text="Todos"
            fontSize="12px"
          />
          <span className="totalProd">{totalProducts}</span>
        </StyledProduct>

        <StyledProduct>
          <Selected
            selected={filter === 'EM_ALTA'}
            onChange={() => setFilter('EM_ALTA')}
            text="Em alta"
            fontSize="12px"
          />
          <span className="totalProd">{totalProductsInHigh}</span>
        </StyledProduct>

        <StyledProduct>
          <Selected
            selected={filter === 'EM_BAIXA'}
            onChange={() => setFilter('EM_BAIXA')}
            text="Em baixa"
            fontSize="12px"
          />
          <span className="totalProd">{totalProductsLow}</span>
        </StyledProduct>

        <BtnContactUs
          onClick={() => {
            onApplyFilter()
            setFilterOpen(false)
          }}
          text="Aplicar"
        />
      </ContainerProduct>
    </FullContainer>
  )
}
