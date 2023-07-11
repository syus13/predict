import { colors } from '../../themeColors'
import * as S from './style'

type BtnProps = {
  inHigh: boolean
  changeStatus: () => void
}

export default function ButtonStatus({ inHigh, changeStatus }: BtnProps) {
  const highButtonColor = inHigh ? colors.gray500 : colors.white
  const highButtonBackground = inHigh ? colors.white : colors.success
  const lowButtonColor = inHigh ? colors.white : colors.gray500
  const lowButtonBackground = inHigh ? colors.error : colors.white

  const handleHighButtonClick = () => {
    if (inHigh) {
      changeStatus()
    }
  }

  const handleLowButtonClick = () => {
    if (!inHigh) {
      changeStatus()
    }
  }

  return (
    <S.backgroundButton>
      <S.styledButton
        color={highButtonColor}
        backgroundColor={highButtonBackground}
        type="submit"
        onClick={handleHighButtonClick}
      >
        Em alta
      </S.styledButton>
      <S.styledButton
        color={lowButtonColor}
        backgroundColor={lowButtonBackground}
        type="submit"
        onClick={handleLowButtonClick}
      >
        Em baixa
      </S.styledButton>
    </S.backgroundButton>
  )
}
