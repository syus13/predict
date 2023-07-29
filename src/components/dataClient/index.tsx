import { colors } from '../../themeColors'
import { phoneIcon, mailIcon } from '../../assets/icons'
import Title from '../titles'
import { ContainerDataClient } from './style'
import ContactClient from '../contactClient'

type DataClientProps = {
  name: string
  phone: string
  email: string
}

function DataClient({ name, phone, email }: DataClientProps) {
  return (
    <ContainerDataClient>
      <Title
        fFamily="Sora"
        fWeight={600}
        marginLeft=""
        text={name}
        size={32}
        color={colors.white}
      />
      <ContactClient
        phoneIcon={<img src={phoneIcon} />}
        phone={phone}
        mailIcon={<img src={mailIcon} />}
        email={email}
      />
    </ContainerDataClient>
  )
}

export default DataClient
