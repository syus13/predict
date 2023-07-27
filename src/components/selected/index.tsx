import { Checkbox, StyledSelect } from './style'

type CbProps = {
  text: string
  fontSize: string
  selected: boolean
  onChange: () => void
}

export default function Selected({
  text,
  fontSize,
  selected,
  onChange
}: CbProps) {
  return (
    <StyledSelect fontSize={fontSize}>
      <Checkbox checked={selected} type="checkbox" onChange={onChange} />
      <span>{text}</span>
    </StyledSelect>
  )
}
