import { StyledLinkMenu, Links, ContainerMenu } from './style'
import items from '../menuItens/arrayItens'
import { colors } from '@/themeColors'

type MenuItemsProps = {
  marginLeft: string
}

export default function MenuItens({ marginLeft }: MenuItemsProps) {
  return (
    <ContainerMenu>
      {items.map(item => (
        <StyledLinkMenu
          marginLeft={marginLeft}
          key={item.id}
          color={colors.white}
          to={item.url}
        >
          {item.icon}
          <Links>{item.text}</Links>
        </StyledLinkMenu>
      ))}
    </ContainerMenu>
  )
}
