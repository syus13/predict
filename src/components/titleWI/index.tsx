import { ReactNode } from 'react'
import {
  StyledTitleIcon,
  StyledContainerIcon,
  StyledContainerWithIcon
} from './style'

type TitleProps = {
  icon: ReactNode
  title: string
  color: string
  background: string
  borderRadius?: string
  marginBottom?: string
  fontSize: string
  marginLeft: string
  onClick?: () => void
}

export default function TitleIcon({
  icon,
  title,
  color,
  background,
  borderRadius,
  marginBottom,
  fontSize,
  marginLeft,
  onClick
}: TitleProps) {
  return (
    <StyledContainerWithIcon marginBottom={marginBottom}>
      <StyledTitleIcon
        color={color}
        fontSize={fontSize}
        marginLeft={marginLeft}
        onClick={onClick}
      >
        <StyledContainerIcon
          backgroundColor={background}
          borderRadius={borderRadius}
        >
          {icon}
        </StyledContainerIcon>
        <span>{title}</span>
      </StyledTitleIcon>
    </StyledContainerWithIcon>
  )
}
