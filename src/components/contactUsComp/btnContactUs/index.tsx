import { StyledBtnContactUs } from '../bgContactUS/style'

type ButtonContactUsProps = {
  text: string
  onClick?: () => void
}

export default function BtnContactUs({ text, onClick }: ButtonContactUsProps) {
  return (
    <StyledBtnContactUs onClick={onClick} type="button">
      {' '}
      {text}{' '}
    </StyledBtnContactUs>
  )
}
