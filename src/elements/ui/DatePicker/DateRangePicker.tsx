import React, { useState, memo } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DateTime } from '~utils'
import { DatePickerProps, DatePicker } from './DatePicker'

export interface DateRangePickerProps extends Omit<DatePickerProps, 'dates' | 'onDateChange'> {
  startDate: Date | null
  endDate: Date | null
  onDatesChange: (startDate: Date | null, endDate: Date | null) => void
}

export const rangedBetweenDays = (day: Dayjs, firstDate: Dayjs, secondDate: Dayjs) =>
  DateTime.isBetweenBy(day, firstDate, secondDate)

export const DateRangePicker: React.FC<DateRangePickerProps> = memo(props => {
  const { disabledDays, disabledMonths, onDatesChange, rangedDays = rangedBetweenDays } = props

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(props.startDate))
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(props.endDate))

  const handleDatePickerDateChange = (date: Dayjs) => {
    /* 1. If no startDate */
    if (!startDate) {
      /* 1A. If date gt endDate, we need to set both dates */
      if (endDate && DateTime.diff(date, endDate) > 0) {
        onDatesChange(endDate.toDate(), date.toDate())
        setStartDate(endDate)
        setEndDate(date)
        return
      }

      /* 1B. Sets startDate */
      onDatesChange(date.toDate(), endDate && endDate.toDate())
      setStartDate(date)
      return
    }

    /* 2. If no endDate */
    if (!endDate) {
      /* 2A. If date lt startDate, we need to set both dates */
      if (startDate && DateTime.diff(startDate, date) > 0) {
        onDatesChange(date.toDate(), startDate.toDate())
        setStartDate(date)
        setEndDate(startDate)
        return
      }

      /* 2B. Sets endDate */
      onDatesChange(startDate.toDate(), date.toDate())
      setEndDate(date)
      return
    }

    /* 3. If both dates set the greatest one and reset other */
    if (startDate && endDate) {
      /* 3A. If changedDate gt endDate it must be start date */
      const isStartDate = DateTime.diff(date, endDate) > 0

      if (isStartDate) {
        onDatesChange(date.toDate(), null)
        setStartDate(date)
        setEndDate(null)
      } else {
        onDatesChange(null, date.toDate())
        setStartDate(null)
        setEndDate(date)
      }
      return
    }
  }

  /* Needs to render datepicker with 1 month offset from start */
  // const initialStateDate = addMonths(startDate || new Date(), 1)

  const startDisabledMonths = (date: Dayjs, withYear?: boolean) => {
    const now = dayjs()

    if (disabledMonths) {
      return disabledMonths(date, withYear)
    } else {
      return now.month() < date.month() && now.year() === date.year()
    }
  }

  const endDisabledMonths = (date: Dayjs, withYear?: boolean) => {
    const now = dayjs()
    if (disabledMonths) {
      return disabledMonths(date, withYear)
    } else {
      return now.month() + 1 > date.month() && now.year() === date.year()
    }
  }

  const handleRangedDays = (day: Dayjs) => {
    return startDate && endDate ? rangedDays(day, startDate, endDate) : false
  }

  // const handleDisabledDays = (day: Dayjs, date: Dayjs | null) => {
  //   if (disabledDays) return disabledDays(day)
  //   else return date ? day.month() === date.month() : false
  // }

  return (
    <div className={'inline-flex space-x-2'}>
      <DatePicker
        className={'no-border-r rounded-tr-0 rounded-br-0'}
        dates={[startDate, endDate]}
        onDateChange={(_, date) => handleDatePickerDateChange(dayjs(date))}
        disabledMonths={startDisabledMonths}
        disabledDays={disabledDays}
        rangedDays={handleRangedDays}
      />
      <DatePicker
        className={'no-border-l rounded-tl-0 rounded-bl-0'}
        dates={[startDate, endDate]}
        onDateChange={(_, date) => handleDatePickerDateChange(dayjs(date))}
        disabledMonths={endDisabledMonths}
        disabledDays={disabledDays}
        rangedDays={handleRangedDays}
        forcedDate
      />
    </div>
  )
})

DateRangePicker.displayName = 'DateRangePicker'
