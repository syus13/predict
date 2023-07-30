import { useEffect, useState } from 'react'
import { user, chevronDown } from '../../assets/icons'
import UserLogged, { UserLoggedProps } from '../../apiRequest/userLogged'
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await UserLogged()
        setLogged(result)
      } catch (error) {
        alert((error as any).message)
      }
    }

    fetchData()
  }, [])

  const handleOpen = () => {
    setOpenConfig(!openConfig)
  }

  return (
    <div>
      <StyledTop width={width}>
        <Logged>
          <BgIcon>
            <img src={user} />
          </BgIcon>
          <User name={logged?.nome ?? ''} email={logged?.email ?? ''} />
          <button onClick={handleOpen} type="button">
            <img src={chevronDown} />
          </button>
        </Logged>
      </StyledTop>
      {openConfig && <Settings />}
    </div>
  )
}
