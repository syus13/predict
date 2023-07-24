import Input from '../../components/loginComp/inputLogin'
import { ContentLogin, StyledLogin, StyledSubtitle, StyledTitle } from './style'
import BgLogin from '../../components/loginComp/bgLogin'

export default function Login() {
  return (
    <StyledLogin>
      <ContentLogin>
        <StyledSubtitle>Seja bem vindo!</StyledSubtitle>
        <StyledTitle>Realize seu Login</StyledTitle>
        <Input eyes={false} />
      </ContentLogin>
      <div>
        <BgLogin />
      </div>
    </StyledLogin>
  )
}
