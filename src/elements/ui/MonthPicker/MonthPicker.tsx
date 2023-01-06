import React, { memo, useState } from 'react'
import cls from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import { ClassName } from '~types'
import { MonthPickerHeader, MonthPickerMonths } from './components'

export type MonthPickerKindType = 'primary'

const monthPickerBaseKind = 'flex flex-col p-20 border rounded-8 shadow-drop active-ring'
const monthPickerPrimaryKind = 'border-neutral-9 bg-neutral-13'

export const getDatePickerKindClass = (kind: MonthPickerKindType, className?: ClassName) => {
  return cls(className, monthPickerBaseKind, { [`${monthPickerPrimaryKind}`]: !kind || kind === 'primary' })
}
export interface MonthPickerProps {
  className?: ClassName
  dates: (Date | Dayjs | null)[]
  kind?: MonthPickerKindType
  onDateChange: (dates: Date[], date: Date) => void
  rangedMonths?: (date: Dayjs) => boolean
}

export const MonthPicker: React.FC<MonthPickerProps> = memo(props => {
  const { className, kind = 'primary', dates, onDateChange, rangedMonths = () => false } = props

  const [dateId, handleDateId] = useState<number>(0)

  const nextDateId = () => {
    const nextId = dateId + 1
    const datesLength = dates.length - 1
    if (nextId > datesLength) handleDateId(0)
    else handleDateId(nextId)
  }

  const currentDate = dayjs(dates[dateId])
  const currentDateMonth = currentDate.year()
  const newForcedDate = currentDate.year(currentDateMonth)
  const [calendarDate, setCalendarDate] = useState(newForcedDate)

  const getThisDate = (date: Dayjs | null) => (date && date.toDate()) as Date

  const getNextDates = (date: Date | null): Date[] => {
    const nextDates = [...dates]
    nextDates[dateId] = date
    return nextDates as Date[]
  }

  const setDates = (date: Dayjs | null) => {
    const thisDate = getThisDate(date)
    const nextDates = getNextDates(thisDate)
    onDateChange(nextDates, thisDate)
    nextDateId()
  }

  const setPreviousYear = () => setCalendarDate(calendarDate.subtract(1, 'year'))
  const setNextYear = () => setCalendarDate(calendarDate.add(1, 'year'))

  return (
    <div className={getDatePickerKindClass(kind, className)}>
      <MonthPickerHeader date={calendarDate} onNextYearChange={setNextYear} onPreviousYearChange={setPreviousYear} />
      <MonthPickerMonths
        calendarDate={calendarDate}
        currentDate={currentDate}
        kind={kind}
        setMonth={date => setDates(dayjs(date))}
        rangedMonths={rangedMonths}
      />
    </div>
  )
})

MonthPicker.displayName = 'MonthPicker'
