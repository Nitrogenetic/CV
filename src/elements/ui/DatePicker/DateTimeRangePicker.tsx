import cls from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Children } from '~types'
import { TextInput, TimeSelect } from '~ui'
import { DateTime } from '~utils'
import { Popover, PopoverProps } from '~ux'
import { DatePicker, DatePickerProps } from './DatePicker'
export interface DateTimeRangePickerProps extends Omit<DatePickerProps, 'dates' | 'onDateChange'> {
  startDate: Date | null
  endDate: Date | null
  popover?: Omit<PopoverProps, 'show' | 'onHide' | 'panel' | 'children' | 'containerParent'>
  className?: string
  inputSize?: 'md' | 'sm'
  availableRange?: [Date | string | null, Date | string | null]
  displayValue: (startTime: string, endTime: string) => string
  onDatesChange: (startDate: Date | null, endDate: Date | null) => void
}

export const rangedBetweenDays = (day: Dayjs, firstDate: Dayjs, secondDate: Dayjs) =>
  DateTime.isBetweenBy(day, firstDate, secondDate)

export const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = memo(props => {
  const {
    disabledDays,
    disabledMonths,
    displayValue,
    onDatesChange,
    popover,
    // value,
    inputSize = 'md',
    className,
    rangedDays = rangedBetweenDays,
    availableRange
  } = props

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(props.startDate))
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(props.endDate))
  const [startTime, setStartTime] = useState<string>(dayjs().format())
  const [endTime, setEndTime] = useState<string>(dayjs().format())

  const containerParentRef = useRef<HTMLDivElement>(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const hideDatePickerPopover = useCallback(() => setShowDatePicker(false), [])

  const [startDateTime, setStartDateTime] = useState<Dayjs | undefined>()
  const [endDateTime, setEndDateTime] = useState<Dayjs | undefined>()

  const [error, setError] = useState('')

  const dateTimeFormat = 'D.MM.YYYY h:mm a'

  const firstDayInRangeStartTime =
    availableRange &&
    dayjs(startDateTime).format('YYYY-MM-DD') === dayjs(availableRange[0]).format('YYYY-MM-DD') &&
    (availableRange[0] as string)

  const firstDayInRangeEndTime =
    availableRange &&
    dayjs(endDateTime).format('YYYY-MM-DD') === dayjs(availableRange[1]).format('YYYY-MM-DD') &&
    dayjs(startDateTime).format('YYYY-MM-DD') === dayjs(availableRange[1]).format('YYYY-MM-DD') &&
    (availableRange[1] as string)

  const lastDayInRangeStartTime =
    availableRange &&
    dayjs(endDateTime).format('YYYY-MM-DD') === dayjs(availableRange[0]).format('YYYY-MM-DD') &&
    dayjs(startDateTime).format('YYYY-MM-DD') === dayjs(availableRange[0]).format('YYYY-MM-DD') &&
    (availableRange[1] as string)

  const lastDayInRangeEndTime =
    availableRange &&
    dayjs(endDateTime).format('YYYY-MM-DD') === dayjs(availableRange[1]).format('YYYY-MM-DD') &&
    (availableRange[1] as string)

  useEffect(() => {
    setStartDateTime(startDate?.hour(dayjs(startTime).hour()).minute(dayjs(startTime).minute()))
    setEndDateTime(endDate?.hour(dayjs(endTime).hour()).minute(dayjs(endTime).minute()))
  }, [startTime, endTime, startDate, endDate])

  useEffect(() => {
    onDatesChange(startDateTime?.toDate() || null, endDateTime?.toDate() || null)
  }, [startDateTime, endDateTime])

  useEffect(() => {
    validateDateTimes()
  }, [startTime, endTime])

  const handleDatePickerDateChange = (date: Dayjs) => {
    /* 1. If no startDate */
    if (!startDate) {
      /* 1A. If date gt endDate, we need to set both dates */
      if (endDate && DateTime.diff(date, endDate) > 0) {
        // onDatesChange(endDate.toDate(), date.toDate())
        setStartDate(endDate)
        setEndDate(date)
        return
      }

      /* 1B. Sets startDate */
      // onDatesChange(date.toDate(), endDate && endDate.toDate())
      setStartDate(date)
      return
    }

    /* 2. If no endDate */
    if (!endDate) {
      /* 2A. If date lt startDate, we need to set both dates */
      if (startDate && DateTime.diff(startDate, date) > 0) {
        // onDatesChange(date.toDate(), startDate.toDate())
        setStartDate(date)
        setEndDate(startDate)
        return
      }

      /* 2B. Sets endDate */
      // onDatesChange(startDate.toDate(), date.toDate())
      setEndDate(date)
      return
    }

    /* 3. If both dates set the greatest one and reset other */
    if (startDate && endDate) {
      /* 3A. If changedDate gt endDate it must be start date */
      const isStartDate = DateTime.diff(date, endDate) > 0

      if (isStartDate) {
        // onDatesChange(date.toDate(), null)
        setStartDate(date)
        setEndDate(null)
      } else {
        // onDatesChange(null, date.toDate())
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
    return startDate && endDate ? rangedDays(day, startDate, endDate) : true
  }

  const handleDisabledDays = (day: Dayjs, date: Dayjs | null) => {
    if (disabledDays) return disabledDays(day)
    else return date ? day.month() === date.month() : false
  }

  const handleDisabledFirstDate = (day: Dayjs) => {
    if (!availableRange?.[0]) {
      return false
    }
    if (+dayjs(dayjs(day).format('YYYY-MM-DD')) >= +dayjs(dayjs(availableRange[0]).format('YYYY-MM-DD'))) {
      if (!availableRange[1]) {
        return false
      }
      if (+dayjs(dayjs(day).format('YYYY-MM-DD')) <= +dayjs(dayjs(availableRange[1]).format('YYYY-MM-DD'))) {
        return false
      }
    }
    return true
  }

  const handleDisabledSecondDate = (day: Dayjs) => {
    if (!availableRange?.[0]) {
      return false
    }
    if (+dayjs(dayjs(day).format('YYYY-MM-DD')) >= +dayjs(dayjs(availableRange[0]).format('YYYY-MM-DD'))) {
      if (!availableRange[1]) {
        return false
      }
      if (+dayjs(dayjs(day).format('YYYY-MM-DD')) <= +dayjs(dayjs(availableRange[1]).format('YYYY-MM-DD'))) {
        return false
      }
    }
    return true
  }

  const validateDateTimes = () => {
    if (startDateTime && endDateTime && DateTime.diff(startDateTime, endDateTime) >= 0) {
      const message = 'End time must be greater than start time'

      setError(message)

      return
    } else {
      setError('')
    }
  }

  const isWrongTime = false

  return (
    <Popover
      show={showDatePicker}
      onHide={hideDatePickerPopover}
      position={'right'}
      containerStyle={{ transform: 'translate(-0%, -50%)', left: '100%', top: '50%' }}
      padding={16}
      containerParent={containerParentRef.current as HTMLElement}
      panel={
        <div className={'flex flex-col gap-5 bg-neutral-14 p-15 rounded-10 min-w-[500px]'}>
          <div className={'inline-flex space-x-2 mb-10'}>
            <DatePicker
              className={'no-border-r rounded-tr-0 rounded-br-0'}
              dates={[startDate, endDate]}
              onDateChange={(_, date) => handleDatePickerDateChange(dayjs(date))}
              disabledMonths={startDisabledMonths}
              rangedDays={handleRangedDays}
              disabledDays={handleDisabledFirstDate}
            />
            <DatePicker
              className={'no-border-l rounded-tl-0 rounded-bl-0'}
              dates={[startDate, endDate]}
              onDateChange={(_, date) => handleDatePickerDateChange(dayjs(date))}
              disabledMonths={endDisabledMonths}
              rangedDays={handleRangedDays}
              forcedDate
              disabledDays={handleDisabledSecondDate}
            />
          </div>
          <p className={'text-white'}>Select a start time</p>
          <TimeSelect
            textInputProps={{ error, readOnly: true }}
            className={cls({ 'border border-red-2': isWrongTime })}
            name={'startTime'}
            fromTime={firstDayInRangeStartTime || undefined}
            toTime={firstDayInRangeEndTime || undefined}
            value={startTime}
            onChange={e => setStartTime(e)}
          />
          <p className={'text-white'}>Select end time</p>
          <TimeSelect
            textInputProps={{ error, readOnly: true }}
            className={cls({ 'border border-red-2': isWrongTime })}
            name={'endTime'}
            fromTime={lastDayInRangeStartTime || undefined}
            toTime={lastDayInRangeEndTime || undefined}
            value={endTime}
            onChange={e => setEndTime(e)}
          />
        </div>
      }
      {...popover}
    >
      <div ref={containerParentRef}>
        <TextInput
          name={'dateTimeRangePicker'}
          value={displayValue(startDateTime?.format(dateTimeFormat) || '', endDateTime?.format(dateTimeFormat) || '')}
          className={cls(className, { 'py-20': inputSize === 'md', 'py-14': inputSize === 'sm' })}
          onFocus={() => setShowDatePicker(true)}
          onClick={() => setShowDatePicker(true)}
          onChange={() => null}
        />
      </div>
    </Popover>
  )
})

DateTimeRangePicker.displayName = 'DateTimeRangePicker'
