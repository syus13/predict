import React from 'react'
import bgLoginImg from '../../../assets/image/bgLoginImg.png'
import { StyledBgLogin } from './style'

export default function BgLogin() {
  return (
    <StyledBgLogin>
      <img src={bgLoginImg} alt=" Imagem de fundo" />
    </StyledBgLogin>
  )
}
