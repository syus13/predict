import { Link } from 'react-router-dom'
import logo from '../../assets/image/logoW3.svg'
import { StyledMenu, StyledLogo } from './style'
import BgContact from '../contactUsComp/bgContactUS'
import MenuItens from '../menuItens'

export default function Menu() {
  return (
    <StyledMenu>
      <Link to="/dashboard">
        <StyledLogo>
          <img src={logo} alt="logo W3" />
        </StyledLogo>
      </Link>
      <MenuItens marginLeft="30px" />
      <BgContact />
    </StyledMenu>
  )
}

// export default function Menu() {
//   return (
//     <StyledMenu>
//       <Link to="/dashboard">
//         <StyledLogo backgroundImage={`url(${logo})`} />
//       </Link>
//       <MenuItens marginLeft="20px" />
//       <BgContact />
//     </StyledMenu>
//   )
// }
