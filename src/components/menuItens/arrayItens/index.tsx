import ToDash from '../../../assets/icons/pieTwo.svg'
import ToPredict from '../../../assets/icons/chartLine.svg'
import ToProduct from '../../../assets/icons/facialCleanser.svg'
import { colors } from '../../../themeColors'

const items = [
  {
    id: 1,
    icon: <img src={ToDash} alt="" />,
    text: 'Dashboard',
    url: '/dashboard'
  },
  {
    id: 2,
    icon: <img src={ToPredict} alt="" />,
    text: 'Predições',
    url: '/predicoes'
  },
  {
    id: 3,
    icon: <img src={ToProduct} alt="" style={{ color: colors.black }} />,
    text: 'Produtos',
    url: '/produtos'
  }
]

export default items
