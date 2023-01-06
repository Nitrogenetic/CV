import React, { memo, useState } from 'react'
import cls from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import { ClassName } from '~types'
import { DateTime } from '~utils'
import { DatePickerHeader, DatePickerDaysLabels, DatePickerDays } from './components'
import './DatePicker.css'

export type DatePickerKindType = 'primary'

export const getDatePickerKindClass = (kind: DatePickerKindType, className?: ClassName) => {
  return cls(className, 'date-picker', { 'date-picker-primary': !kind || kind === 'primary' })
}
export interface DatePickerProps {
  className?: ClassName
  kind?: DatePickerKindType
  dates: (Date | Dayjs | null)[]
  noToday?: boolean
  onDateChange: (dates: Date[], date: Date) => void
  disabledMonths?: (date: Dayjs, withYear?: boolean) => boolean
  disabledDays?: (day: Dayjs) => boolean
  rangedDays?: (day: Dayjs) => boolean
  forcedDate?: boolean
}

export const disabledPastDays = (day: Dayjs) => {
  return DateTime.diff(dayjs(), day, 'days') > 0
}
export const disabledPastMonths = (date: Dayjs, withYear?: boolean) => {
  const today = dayjs()
  const diff = dayjs.duration(today.diff(date))

  const isAfterMonths = diff.months() > 0
  const isYearMonths = withYear ? diff.years() > 0 : true

  return isAfterMonths && isYearMonths
}

export const DatePicker: React.FC<DatePickerProps> = memo(props => {
  const {
    dates,
    className,
    kind = 'primary',
    onDateChange,
    disabledMonths,
    disabledDays,
    rangedDays = () => false,
    forcedDate
  } = props

  /* Needs to define what date to change */

  const [dateId, handleDateId] = useState<number>(0)

  const nextDateId = () => {
    const nextId = dateId + 1
    const datesLength = dates.length - 1
    if (nextId > datesLength) handleDateId(0)
    else handleDateId(nextId)
  }

  const currentDate = dayjs(dates[dateId])
  const currentDateMonth = currentDate.month()
  const newForcedDate = forcedDate ? currentDate.month(currentDateMonth + 1) : currentDate
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

  const setPreviousMonth = () => setCalendarDate(calendarDate.subtract(1, 'month'))
  const setNextMonth = () => setCalendarDate(calendarDate.add(1, 'month'))
  const setPreviousYear = () => setCalendarDate(calendarDate.subtract(1, 'year'))
  const setNextYear = () => setCalendarDate(calendarDate.add(1, 'year'))
  const previousMonth = (e: React.MouseEvent<HTMLOrSVGElement>) => (e.shiftKey ? setPreviousYear() : setPreviousMonth())
  const nextMonth = (e: React.MouseEvent<HTMLOrSVGElement>) => (e.shiftKey ? setNextYear() : setNextMonth())

  return (
    <div className={getDatePickerKindClass(kind, className)}>
      <DatePickerHeader
        date={calendarDate}
        kind={kind}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
        disabledMonths={disabledMonths || disabledPastMonths}
      />
      <div className={cls('flex')}>
        <div className={cls('w-full')}>
          <DatePickerDaysLabels kind={kind} />
          <DatePickerDays
            calendarDate={calendarDate}
            currentDate={calendarDate}
            kind={kind}
            dates={dates as Date[]}
            setDates={date => setDates(dayjs(date))}
            disabledDays={disabledDays || disabledPastDays}
            rangedDays={rangedDays}
          />
        </div>
      </div>
    </div>
  )
})

DatePicker.displayName = 'DatePicker'
