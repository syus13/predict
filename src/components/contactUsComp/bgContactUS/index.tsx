import twohands from '../../../assets/image/twohands.png'
import { StyledContactUs, BtnContactUs } from './style'

export default function BgContact() {
  return (
    <StyledContactUs>
      <div>
        <img src={twohands} alt="duas mãos" />
      </div>

      <div>
        Precisando de <span>ajuda ou suporte</span> em algo?
      </div>

      <BtnContactUs type="button">Fale conosco</BtnContactUs>
    </StyledContactUs>
  )
}
