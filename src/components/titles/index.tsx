import { StyledTitle } from './style'
import TitleCardDasboard from '../../components/titleCard'

type TitleProps = {
  text: string
  size: number
  color: string
  marginLeft: string
  marginBottom?: string
  fFamily?: string
  fWeight?: number
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
  marginBottom,
  fFamily,
  fWeight
}: TitleProps) {
  return (
    <StyledTitle
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      fSize={size}
      color={color}
      family={fFamily}
      weight={fWeight}
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
