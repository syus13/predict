import { StyledButtonLogin } from '../buttonLogin/style'

type buttonLoginProps = {
  onClick?: () => void
}

export function ButtonLogin({ onClick }: buttonLoginProps) {
  return (
    <>
      <StyledButtonLogin onClick={onClick} type="submit">
        <div>Entrar</div>
      </StyledButtonLogin>
    </>
  )
}
