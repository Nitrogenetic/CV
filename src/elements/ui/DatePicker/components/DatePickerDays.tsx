import cls from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React, { FC, memo, PropsWithChildren } from 'react'
import { ClassName } from '~types'
import { DatePickerKindType } from '~ui'
import { DateTime } from '~utils'

type DatePickerDayType = 'today' | 'selected' | 'disabled' | 'range' | 'out'

const getDatePickerDayVariantClass = (kind: DatePickerKindType, type?: DatePickerDayType) => {
  const kinds = {
    primary: 'date-picker-day-primary'
  }

  const typeKinds = {
    primary: {
      today: 'date-picker-day-primary-today',
      selected: 'date-picker-day-primary-select',
      disabled: 'date-picker-day-primary-disabled',
      range: 'date-picker-day-primary-range',
      out: 'date-picker-day-primary-out'
    }
  }

  return cls('date-picker-day', kinds[kind], type && typeKinds[kind][type])
}

export interface DatePickerDayProps {
  kind?: DatePickerKindType
  day: Dayjs
  date: Dayjs
  dates: (Date | null)[]
  today?: Date
  setDates: (date: Date) => void
  disabledDays?: (day: Dayjs) => boolean
  rangedDays?: (day: Dayjs) => boolean
}

const DatePickerDay: FC<PropsWithChildren<DatePickerDayProps>> = memo(props => {
  const { kind = 'primary', day, date, dates, today, setDates, disabledDays, rangedDays } = props

  const findCurrentDayInDates = () => dates.find(date => date && DateTime.isSameDay(day, dayjs(date)))

  /* ClassName + space for extra class */
  let type

  // Check if calendar date is same day as today
  const isToday = today && DateTime.isSameDay(day, dayjs(date))

  // Check if calendar date is same day as currently selected date
  const isCurrent = findCurrentDayInDates()

  // Check days oin range logic
  const isInRange = rangedDays && rangedDays(day)

  // Check if calendar date is in the same month as the state month and year
  const isInMonth = day.month() === date.month() && day.year() === date.year()

  // Check disabled days
  const isDisabled = disabledDays && disabledDays(day)

  if (isToday) {
    type = 'today'
  }

  if (isCurrent) {
    type = 'selected'
  }

  if (isDisabled) {
    type = 'disabled'
  }

  if (isInRange && !isDisabled && isInMonth) {
    type = 'range'
  }

  if (!isInMonth && !isDisabled) {
    type = 'out'
  }

  const style = {
    gridColumn: `(${day.date()} % 7) / span 1`
  }

  return (
    <div
      className={getDatePickerDayVariantClass(kind, type as DatePickerDayType)}
      style={style}
      onClick={() => !isDisabled && setDates(day.toDate())}
    >
      {props.children}
    </div>
  )
})

DatePickerDay.displayName = 'DatePickerDay'

const getDatePickerDaysVariantClass = (variant: DatePickerKindType, className?: ClassName) => {
  return cls(className, 'date-picker-days', {
    'date-picker-days-primary': !variant || variant === 'primary'
  })
}

export interface DatePickerDaysProps {
  className?: ClassName
  kind?: DatePickerKindType
  calendarDate: Dayjs
  currentDate: Dayjs
  dates: Date[]
  setDates: (date: Date) => void
  disabledDays?: (day: Dayjs) => boolean
  rangedDays?: (day: Dayjs) => boolean
}
// Render a calendar date as returned from the calendar builder function
// This method is used as a map callback as seen here
export const DatePickerDays: React.FC<DatePickerDaysProps> = props => {
  const { className, kind = 'primary', calendarDate, currentDate, dates, setDates, disabledDays, rangedDays } = props
  const days = DateTime.calendar(calendarDate)
  return (
    <div className={getDatePickerDaysVariantClass(kind, className)}>
      {days.map(day => {
        return (
          <DatePickerDay
            key={day.toISOString()}
            date={currentDate}
            day={day}
            dates={dates}
            kind={kind}
            setDates={setDates}
            disabledDays={disabledDays}
            rangedDays={rangedDays}
          >
            {day.date()}
          </DatePickerDay>
        )
      })}
    </div>
  )
}

DatePickerDays.displayName = 'DatePickerDays'
