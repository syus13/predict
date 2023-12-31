import { ReactNode } from 'react'
import Menu from '../components/menu'
import PageTop from '../components/pagetop'
import { StyledContainer, StyledPage, Wrapper } from './style'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Menu />
      <StyledContainer width="1322.88px" marginLeft="190.08px">
        <PageTop width="2000px" />
        <StyledPage width="1035" marginLeft="65px">
          {children}
        </StyledPage>
      </StyledContainer>
    </Wrapper>
  )
}
