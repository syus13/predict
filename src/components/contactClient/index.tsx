import React, { ReactNode } from 'react'
import { ContactClientStyle, ContainerIcon, StyledIcon } from './style'

type ContactClientProps = {
  phoneIcon: ReactNode
  phone: string
  mailIcon: ReactNode
  email: string
}

export default function ContactClient({
  phoneIcon,
  phone,
  email,
  mailIcon
}: ContactClientProps) {
  return (
    <ContactClientStyle>
      <ContainerIcon>
        <StyledIcon>{phoneIcon}</StyledIcon>
        <div>{phone}</div>
      </ContainerIcon>
      <ContainerIcon>
        <StyledIcon>{mailIcon}</StyledIcon>
        <div>{email}</div>
      </ContainerIcon>
    </ContactClientStyle>
  )
}
