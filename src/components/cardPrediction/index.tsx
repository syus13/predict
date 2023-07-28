import { ReactNode } from 'react'
import { colors } from '../../themeColors'
import { chevronRight, userCard } from '../../assets/icons/index'
import TitleIcon from '../titleWI'
import { StyledLinkMenu } from '../menuItens/style'
import { CardWrapper, ClientCardContainer, ChevronIcon } from './style'
import { ClientPredictionTable } from '../clientPredictionTable'

type CardPredicaoProps = {
  id: number
  name: string
  tableTitle: string[]
  table: ReactNode
}

export default function CardPrediction({
  id,
  name,
  table,
  tableTitle
}: CardPredicaoProps) {
  const commonLinkProps = {
    marginLeft: '0px',
    color: colors.gray900,
    to: `/informacoesclientes/${id}`
  }

  return (
    <StyledLinkMenu {...commonLinkProps}>
      <ClientCardContainer>
        <CardWrapper>
          <TitleIcon
            marginLeft="10px"
            fontSize="16px"
            icon={<img src={userCard} />}
            title={name}
            color={colors.gray900}
            background={colors.blue4}
            borderRadius="100px"
            marginBottom="20px"
          />
          <ChevronIcon>
            <img src={chevronRight} />
          </ChevronIcon>
        </CardWrapper>
        <ClientPredictionTable headers={tableTitle}>
          {table}
        </ClientPredictionTable>
      </ClientCardContainer>
    </StyledLinkMenu>
  )
}
