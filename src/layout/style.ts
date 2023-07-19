import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const StyledContainer = styled.div<{
  marginLeft: string
  width: string
}>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
  width: ${({ width }) => `${width}`};
`

export const StyledPage = styled.div<{ marginLeft: string; width: string }>`
  margin-top: 90px;
  margin-left: ${({ marginLeft }) => `${marginLeft}`};
  width: ${({ width }) => `${width}`};
`
