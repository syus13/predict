import React from 'react'
import { StyledSubTitle } from './style'

type SubTitleProps = {
  fontWeight: number
  size: number
  color: string
  text: string
}

export default function SubTitle({
  text,
  size,
  color,
  fontWeight
}: SubTitleProps) {
  return (
    <div>
      <StyledSubTitle fontWeight={fontWeight} size={size} color={color}>
        {text}
      </StyledSubTitle>
    </div>
  )
}
