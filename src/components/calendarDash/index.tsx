import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { calendar } from '../../assets/icons'
import { StyledCalendarDash, Text } from './style'
import { dateUtils } from '../ui/dateUtils'

type DateRange = { end: string; start: string }

type CalendarDashProps = {
  setDate: Dispatch<SetStateAction<DateRange>>
}

export default function CalendarDash({ setDate }: CalendarDashProps) {
  const handleHalfTimeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const HalfTime = Number(event.target.value)
    const selectedDateRange =
      HalfTime === 0
        ? dateUtils.getThisMonth()
        : dateUtils.getLastDays(HalfTime)

    setDate(selectedDateRange)
  }

  return (
    <StyledCalendarDash>
      <img src={calendar} alt="Calendar" />
      <Text>Mostrar:</Text>
      <select onChange={handleHalfTimeChange} name="HalfTime" id="HalfTime">
        <option value={0}>Este mês</option>
        <option value={30}>30 dias</option>
        <option value={60}>60 dias</option>
        <option value={90}>90 dias</option>
        <option value={120}>120 dias</option>
      </select>
    </StyledCalendarDash>
  )
}
