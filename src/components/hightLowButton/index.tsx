import { colors } from '../../themeColors'
import { StyledButton, BackgroundButtonContainer } from './style'

type BtnProps = {
  inHigh: boolean
  changeStatus: () => void
}

export default function HightLowButton({ inHigh, changeStatus }: BtnProps) {
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
    <BackgroundButtonContainer>
      <StyledButton
        color={highButtonColor}
        backgroundColor={highButtonBackground}
        type="submit"
        onClick={handleHighButtonClick}
        textColor={highButtonColor}
      >
        Em alta
      </StyledButton>
      <StyledButton
        color={lowButtonColor}
        backgroundColor={lowButtonBackground}
        type="submit"
        onClick={handleLowButtonClick}
        textColor={lowButtonColor}
      >
        Em baixa
      </StyledButton>
    </BackgroundButtonContainer>
  )
}
