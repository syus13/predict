import { useEffect, useState } from 'react'
import ArrowCD from '../../assets/icons/chevronDown.svg'
import UserIcon from '../../assets/icons/user.svg'
import Title from '../titles'
import UserLogged, { UserLoggedProps } from '../../services/userLogged'
import { BgIcon, Logged, StyledTop, StyledUser } from './style'
import Settings from '../settings'

type TopProps = {
  width: string
}
type UserProps = {
  name: string
  email: string
}

function User({ name, email }: UserProps) {
  return (
    <StyledUser>
      <p>{name}</p>
      <span>{email}</span>
    </StyledUser>
  )
}

export default function PageTop({ width }: TopProps) {
  const [openConfig, setOpenConfig] = useState(false)
  const [logged, setLogged] = useState<UserLoggedProps | undefined>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserLogged()
        setLogged(result)
        setLoading(false)
      } catch (error) {
        alert((error as any).message)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <Title text="" size={0} color="" marginLeft="" />
  }

  const handleOpen = () => {
    setOpenConfig(!openConfig)
  }

  return (
    <div>
      <StyledTop width={width}>
        <Logged>
          <BgIcon>
            <img src={UserIcon} />
          </BgIcon>
          <User name={logged?.nome ?? ''} email={logged?.email ?? ''} />
          <button onClick={handleOpen} type="button">
            <img src={ArrowCD} />
          </button>
        </Logged>
      </StyledTop>
      {openConfig && <Settings />}
    </div>
  )
}
