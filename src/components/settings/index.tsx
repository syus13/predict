import React from 'react'
import { useNavigate } from 'react-router-dom'
import logoutIcon from '../../assets/icons/logout.svg'
import api from '../../apiRequest/configApi'
import { colors } from '../../themeColors'
import { StyledSettings } from './style'
import TitleIcon from '../titleWI'
import { settingTwo } from '@/assets/icons'

export default function Settings() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    api.defaults.headers.common.Authorization = ''
    navigate('/', { replace: true })
  }

  const settingsConfig = [
    {
      icon: <img src={settingTwo} alt="Configurações" />,
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
            marginLeft="-10px"
            icon={config.icon}
            title={config.title}
            color={colors.gray600}
            background=""
            fontSize="14px"
            onClick={config.onClick}
          />
          {index !== settingsConfig.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </StyledSettings>
  )
}
