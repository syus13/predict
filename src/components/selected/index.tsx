import { Checkbox, StyledSelect } from './style'

type CbProps = {
  text: string
  fontSize: string
  checked: boolean
  onChange: () => void
}

export default function Selected({
  text,
  fontSize,
  checked,
  onChange
}: CbProps) {
  return (
    <StyledSelect fontSize={fontSize}>
      <Checkbox checked={checked} type="checkbox" onChange={onChange} />
      <span>{text}</span>
    </StyledSelect>
  )
}
