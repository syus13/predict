import styled from 'styled-components'
import { colors } from '../../themeColors'

export const StyledResearchPrediction = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
`

export const ContainerResearch = styled.div<{
  paddingLeft: string
  boxShadow: string
  height: string
  marginBottom: string
}>`
  width: 100%;
  background-color: ${colors.white};
  padding: 20px;
  padding-left: ${({ paddingLeft }) => paddingLeft};
  border-radius: 20px;
  height: ${({ height }) => height};
  box-shadow: ${({ boxShadow }) => boxShadow};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`
