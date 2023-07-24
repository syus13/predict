import { ChangeEvent } from 'react'
import { research } from '../../assets/icons'
import { colors } from '../../themeColors'
import { ContainerResearch, StyledResearchPrediction } from './style'

import {
  StyledContainerInput,
  StyledInput
} from '../loginComp/inputLogin/style'

type FilterProps = {
  icon: React.ReactNode
  boxShadow: string
  paddingLeft: string
  height: string
  marginBottom: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  startSearch: () => void
}

export function ResearchPrediction({
  icon,
  boxShadow,
  paddingLeft,
  height,
  marginBottom,
  onChange,
  value,
  startSearch
}: FilterProps) {
  return (
    <ContainerResearch
      height={height}
      paddingLeft={paddingLeft}
      boxShadow={boxShadow}
      marginBottom={marginBottom}
    >
      <StyledContainerInput>
        <div>
          <StyledInput
            onChange={onChange}
            value={value}
            type="text"
            name=""
            id=""
            placeholder="Pesquise uma palavra-chave"
            border={colors.gray300}
          />

          <StyledResearchPrediction onClick={startSearch}>
            <img src={research} />
          </StyledResearchPrediction>
        </div>
        {icon}
      </StyledContainerInput>
    </ContainerResearch>
  )
}
