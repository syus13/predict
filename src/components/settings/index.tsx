import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoutIcon from '../../assets/icons/logout.svg'
import settingTwoIcon from '../../assets/icons/settingTWO.svg'
import api from '../../services/configApi'
import { colors } from '../../themeColors'
import { StyledSettings } from './style'
import TitleIcon from '../titleWI'

export default function Settings() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    api.defaults.headers.common.Authorization = ''
    navigate('/', { replace: true })
  }

  const settingsConfig = [
    {
      icon: <img src={settingTwoIcon} alt="Configurações" />,
      title: 'Configurações',
      onClick: () => {}
    },
    {
      icon: <img src={logoutIcon} alt="Sair" />,
      title: 'Sair',
      onClick: handleLogout
    }
  ]

  return (
    <StyledSettings>
      {settingsConfig.map((config, index) => (
        <React.Fragment key={index}>
          <TitleIcon
            marginLeft="0px"
            icon={config.icon}
            title={config.title}
            color={colors.gray600}
            background=""
            fontSize="13px"
            onClick={config.onClick}
          />
          {index !== settingsConfig.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </StyledSettings>
  )
}
