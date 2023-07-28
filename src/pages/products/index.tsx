import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { colors } from '../../themeColors'
import { filterIcon } from '../../assets/icons'
import ProductsTable from '../../components/productsTable'
import ResearchPrediction from '../../components/researchPrediction'
import Title from '../../components/titles'
import {
  StyledProductsContainer,
  ProductStatus,
  ButtonFilter,
  StyledFilter
} from './style'
import ProductFilter from '../../components/productFilter'
import GetListProduct, {
  GetListProductProps
} from '../../apiRequest/getProduct/list'

const TableHeaders = ['ID', 'Produto', 'Status', 'Percentual']

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [productData, setProductData] = useState<GetListProductProps>()
  const [filterOpen, setFilterOpen] = useState(false)
  const [filter, setFilter] = useState<'TODOS' | 'EM_ALTA' | 'EM_BAIXA'>(
    'TODOS'
  )
  const [currentPage, setCurrentPage] = useState(1)
  const toggleFilter = () => setFilterOpen(!filterOpen)
  const navigateTo = useNavigate()
  const goToPage = (url: string) => {
    navigateTo(url)
  }
  const startSearch = async () => {
    try {
      const classification = filter === 'TODOS' ? undefined : filter
      const result = await GetListProduct(
        searchTerm,
        currentPage,
        classification
      )
      setProductData(result)
    } catch (error) {
      alert((error as any).message)
    }
  }

  useEffect(() => {
    startSearch()
  }, [currentPage])

  return (
    <div>
      <StyledProductsContainer>
        <Title
          marginLeft="28px"
          text="Produtos"
          size={32}
          color={colors.gray900}
        />
        <StyledProductsContainer>
          <ProductsTable
            totalPagesListed={productData?.numberOfElements || 0}
            totalPagesListedInAPI={productData?.totalElements || 0}
            currentPage={productData?.number || 0}
            numberItemPage={productData?.size || 0}
            changePage={page => setCurrentPage(page)}
            title={
              <ResearchPrediction
                startSearch={startSearch}
                onChange={event => setSearchTerm(event.currentTarget.value)}
                value={searchTerm}
                height="0px"
                icon={
                  <StyledFilter>
                    <ButtonFilter onClick={toggleFilter} type="button">
                      <img src={filterIcon} />
                    </ButtonFilter>
                  </StyledFilter>
                }
                boxShadow=""
                paddingLeft="0px"
                marginBottom="30px"
              />
            }
            button=""
            width="100%"
            headers={TableHeaders}
          >
            {productData &&
              productData.content.map(apiData => (
                <tr
                  key={apiData.id}
                  className="onClick"
                  onClick={() => goToPage(`/apiData/${apiData.id}`)}
                >
                  <td className="column1">{apiData.id}</td>
                  <td className="column2">{apiData.nome}</td>
                  <td>
                    <ProductStatus
                      color={
                        apiData.classificacao === 'EM_ALTA'
                          ? `${colors.success}`
                          : `${colors.error}`
                      }
                      backgroundColor={
                        apiData.classificacao === 'EM_ALTA'
                          ? `${colors.lightGreen}`
                          : `${colors.lightRed}`
                      }
                    >
                      {apiData.classificacao === 'EM_ALTA'
                        ? 'Em alta'
                        : 'em baixa'}
                    </ProductStatus>
                  </td>
                  <td>{String(apiData.percentual).replace('.', ',')}%</td>
                </tr>
              ))}
          </ProductsTable>

          {filterOpen ? (
            <ProductFilter
              totalProducts={productData?.totalElements}
              onApplyFilter={startSearch}
              setFilterOpen={setFilterOpen}
              filter={filter}
              setFilter={setFilter}
            />
          ) : null}
        </StyledProductsContainer>
      </StyledProductsContainer>
    </div>
  )
}
