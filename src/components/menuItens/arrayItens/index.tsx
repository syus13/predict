import { colors } from '../../../themeColors'
import { chartLine, facialCleanserWhite, pieTwo } from '@/assets/icons'

const items = [
  {
    id: 1,
    icon: <img src={pieTwo} alt="" />,
    text: 'Dashboard',
    url: '/dashboard'
  },
  {
    id: 2,
    icon: <img src={chartLine} alt="" />,
    text: 'Predições',
    url: '/predict'
  },
  {
    id: 3,
    icon: (
      <img src={facialCleanserWhite} alt="" style={{ color: colors.black }} />
    ),
    text: 'Produtos',
    url: '/products'
  }
]

export default items
