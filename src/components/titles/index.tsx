import { StyledTitle } from './style'
import TitleCardDasboard from '../../components/titleCard'

type TitleProps = {
  text: string
  size: number
  color: string
  marginLeft: string
  marginBottom?: string
}

type CardTitleProps = {
  type: string
  status: string
  text?: string
  color: string
}

export default function Title({
  text,
  size,
  color,
  marginLeft,
  marginBottom
}: TitleProps) {
  return (
    <StyledTitle
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      fSize={size}
      color={color}
    >
      {text}
    </StyledTitle>
  )
}

export function CardTitle({ type, status, text, color }: CardTitleProps) {
  return (
    <TitleCardDasboard color={color}>
      <span>
        {text} <strong>{type}</strong> {status}
      </span>
    </TitleCardDasboard>
  )
}
