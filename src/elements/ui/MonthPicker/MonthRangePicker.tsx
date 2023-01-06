import React, { useState, memo } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DateTime } from '~utils'
import { MonthPicker } from '~ui'
import { MonthPickerProps } from './MonthPicker'
import { ClassName } from '~types'
import cls from 'classnames'
export interface MonthRangePickerProps extends Omit<MonthPickerProps, 'dates' | 'onDateChange'> {
  className?: ClassName
  startDate: Date | null
  endDate: Date | null
  onDatesChange: (startDate: Date | null, endDate: Date | null) => void
}

export const rangedBetweenMonths = (day: Dayjs, firstDate: Dayjs, secondDate: Dayjs) =>
  DateTime.isBetweenBy(day, firstDate, secondDate, 'month', '[]')

export const MonthRangePicker: React.FC<MonthRangePickerProps> = memo(props => {
  const { className, onDatesChange, rangedMonths = rangedBetweenMonths } = props

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

  const handleRangedMonths = (day: Dayjs) => {
    return startDate && endDate ? rangedMonths(day, startDate, endDate) : false
  }

  return (
    <div className={'inline-flex'}>
      <MonthPicker
        className={cls(className)}
        dates={[startDate, endDate]}
        onDateChange={(_, date) => handleDatePickerDateChange(dayjs(date))}
        rangedMonths={handleRangedMonths}
      />
    </div>
  )
})

MonthRangePicker.displayName = 'MonthRangePicker'
