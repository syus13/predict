import { useState, ChangeEvent, useContext } from 'react'
import { eye, eyeOffLine } from '../../../assets/icons'
import { colors } from '../../../themeColors'
import { ButtonLogin } from '../btnLogin'
import {
  StyledContainerInput,
  StyledEye,
  StyledInput,
  StyledLabel
} from './style'
import Selected from '../../selected'
import { ForgotPassword } from '../../../pages/login/style'
import AuthenticateUser from '@/apiRequest/authenticateUser'
import { AuthContext } from '@/assets/contexts'

type InputProps = {
  eyes: boolean
}

export default function Input({ eyes }: InputProps) {
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(eyes)
  const { setAuth } = useContext(AuthContext)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const login = async () => {
    const result = await AuthenticateUser(email, password, setAuth)
    if (result.login) {
      window.location.href = '/dashboard'
      return
    }
    alert(result.message)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div>
      <form>
        <StyledContainerInput>
          <StyledInput
            border={colors.success}
            id="user"
            placeholder="Insira seu e-mail"
            onChange={handleEmailChange}
            value={email}
          />
          <StyledLabel htmlFor="user" selected={false}>
            E-mail
          </StyledLabel>
        </StyledContainerInput>

        <StyledContainerInput>
          <StyledInput
            border={colors.success}
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Insira sua senha"
            onChange={handlePasswordChange}
            value={password}
          />
          <StyledLabel htmlFor="password" selected={false}>
            Senha
          </StyledLabel>

          <StyledEye>
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <img src={eye} alt="Show Password" />
              ) : (
                <img src={eyeOffLine} alt="Hide Password" />
              )}
            </button>
          </StyledEye>
        </StyledContainerInput>
      </form>

      <ForgotPassword>
        <Selected
          selected={remember}
          onChange={() => setRemember(!remember)}
          text="Lembrar-me"
          fontSize="12px"
        />
        <span>Esqueci minha senha</span>
      </ForgotPassword>
      <ButtonLogin onClick={login} />
    </div>
  )
}
