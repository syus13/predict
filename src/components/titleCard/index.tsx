import { ReactNode } from 'react'
import { StyledTitleCard } from './style'

type TitleCardProps = {
  children: ReactNode
  color: string
}

export default function TitleCardDasboard({ children, color }: TitleCardProps) {
  return <StyledTitleCard color={color}>{children}</StyledTitleCard>
}
