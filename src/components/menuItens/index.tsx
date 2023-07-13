import { LinkMenu, Links, ContainerMenu } from './style'
import items from '../menuItens/arrayItens'
import { colors } from '@/themeColors'

type MenuItemsProps = {
  marginLeft: string
}

export default function MenuItens({ marginLeft }: MenuItemsProps) {
  return (
    <ContainerMenu>
      {items.map(item => (
        <LinkMenu
          marginLeft={marginLeft}
          key={item.id}
          color={colors.white}
          to={item.url}
        >
          {item.icon}
          <Links>{item.text}</Links>
        </LinkMenu>
      ))}
    </ContainerMenu>
  )
}
