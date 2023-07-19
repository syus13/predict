import React, { useState } from 'react'
import eyeOffLine from '../../../assets/icons/eyeOffLine.svg'
import eye from '../../../assets/icons/eye.svg'
import { colors } from '../../../themeColors'
import { ButtonLogin } from '../btnLogin'
import { ContainerInput, StyledEye, StyledInput, StyledLabel } from './style'
import Selected from '../../selected'
import { ForgotPassword } from '../../../routes/login/style'
import { AuthUser } from '@/services/authUser'

type InputProps = {
  eyes: boolean
}

export default function Input({ eyes }: InputProps) {
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ShowPassword, setShowPassword] = useState(eyes)

  const togglePasswordVisibility = () => {
    setShowPassword(!ShowPassword)
  }

  const login = async () => {
    const result = await AuthUser(email, password)
    if (result.login) {
      window.location.href = '/dashboard'
      return
    }
    alert(result.message)
  }

  return (
    <div>
      <form>
        <ContainerInput>
          <StyledInput
            border={colors.success}
            id="user"
            placeholder="Insira seu e-mail"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <StyledLabel htmlFor="email">E-mail</StyledLabel>
        </ContainerInput>

        <ContainerInput>
          <StyledInput
            border={colors.success}
            id="password"
            type={ShowPassword ? 'text' : 'password'}
            placeholder="Insira sua senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <StyledLabel htmlFor="senha">Senha</StyledLabel>

          <StyledEye>
            <button type="button" onClick={togglePasswordVisibility}>
              {ShowPassword ? <img src={eye} /> : <img src={eyeOffLine} />}
            </button>
          </StyledEye>
        </ContainerInput>
      </form>

      <ForgotPassword>
        <Selected
          checked={remember}
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
