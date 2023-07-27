import twohands from '../../../assets/image/twohands.png'
import { StyledContactUs } from './style'
import BtnContactUs from '../btnContactUs'

export default function BgContact() {
  return (
    <StyledContactUs>
      <div>
        <img src={twohands} alt="duas mãos" />
      </div>
      <div>
        Precisando de <span>ajuda ou suporte</span> em algo?
      </div>
      <BtnContactUs text="Fale conosco" />
    </StyledContactUs>
  )
}
