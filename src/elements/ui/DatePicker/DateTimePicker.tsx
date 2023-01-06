import React, { useState, memo, useEffect } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { Controller, useForm } from 'react-hook-form'
import { DatePicker, DatePickerProps, disabledPastDays, disabledPastMonths, getDatePickerKindClass } from './DatePicker'
import { rangedBetweenDays } from './DateRangePicker'
import { Form, FormField } from '~ux'
import { TimeSelect } from '~ui'
import cls from 'classnames'
import { DateTime } from '~utils'

export interface DateTimePickerProps extends Omit<DatePickerProps, 'dates' | 'onDateChange'> {
  startTime: string | null
  endTime: string | null
  fromTime?: string
  toTime?: string
  onDateTimeChange: (startDateTime: string, endDateTime: string) => void
}

export const DateTimePicker: React.FC<DateTimePickerProps> = memo(props => {
  const {
    className,
    kind = 'primary',
    fromTime,
    toTime,
    onDateTimeChange,
    disabledDays = disabledPastDays,
    disabledMonths = disabledPastMonths,
    rangedDays = rangedBetweenDays
  } = props

  const dateTimePickerForm = useForm({
    defaultValues: {
      startTime: props.startTime || new Date().toISOString(),
      endTime: props.endTime || new Date().toISOString()
    }
  })

  const { watch, setValue, setError, clearErrors } = dateTimePickerForm

  const startTime = watch('startTime')
  const endTime = watch('endTime')

  const startDateTime = dayjs(startTime)
  const endDateTime = dayjs(endTime)

  const [calendarDate, setCalendarDate] = useState<Dayjs>(dayjs(startDateTime))

  /*
    Idk why but FormLabel doesn't see error from formContext
    Tried to pass all form or control prop - Am I missing something?
  */
  const validateDateTimes = () => {
    if (DateTime.diff(startDateTime, endDateTime) >= 0) {
      const message = 'End time must be greater than start time'

      setError('startTime', { message })
      setError('endTime', { message })

      return
    }

    clearErrors(['startTime', 'endTime'])
  }

  /* Sync up date times with calendar date date/month/year */
  useEffect(() => {
    if (startDateTime) {
      const localStartDateTime = startDateTime
        .date(calendarDate.date())
        .month(calendarDate.month())
        .year(calendarDate.year())

      setValue('startTime', localStartDateTime.toISOString())
    }

    if (endDateTime) {
      const localEndDateTime = endDateTime
        .date(calendarDate.date())
        .month(calendarDate.month())
        .year(calendarDate.year())

      setValue('endTime', localEndDateTime.toISOString())
    }
  }, [calendarDate])

  useEffect(() => {
    validateDateTimes()
    onDateTimeChange(startTime, endTime)
  }, [startTime, endTime])

  const handleDisabledMonths = (date: Dayjs, withYear?: boolean) => {
    const now = dayjs()

    if (disabledMonths) {
      return disabledMonths(date, withYear)
    } else {
      return now.month() + 1 > date.month() && now.year() === date.year()
    }
  }

  const handleRangedDays = (day: Dayjs) =>
    startDateTime && endDateTime ? rangedDays(day, startDateTime, endDateTime) : true

  const handleDisabledDays = (day: Dayjs, date: Dayjs | null) => {
    if (disabledDays) return disabledDays(day)
    else return date ? day.month() === date.month() : false
  }

  const handleSubmit = (form: any) => null

  return (
    <div className={cls('flex flex-col p-24', getDatePickerKindClass(kind, className))}>
      <DatePicker
        className={'no-border no-ring no-py'}
        kind={kind}
        dates={[calendarDate]}
        onDateChange={(_, date) => setCalendarDate(dayjs(date))}
        disabledDays={(day: Dayjs) => handleDisabledDays(day, startDateTime)}
        disabledMonths={handleDisabledMonths}
        rangedDays={handleRangedDays}
      />
      <Form className={''} form={dateTimePickerForm} onSubmit={handleSubmit}>
        <FormField name={'startTime'} label={'Start'}>
          {error => {
            return (
              <Controller
                name={'startTime'}
                render={controller => {
                  const { field } = controller

                  return <TimeSelect textInputProps={{ error }} fromTime={fromTime} toTime={toTime} {...field} />
                }}
              />
            )
          }}
        </FormField>
        <FormField name={'endTime'} label={'End'}>
          {error => {
            return (
              <Controller
                name={'endTime'}
                render={controller => {
                  const { field } = controller

                  return <TimeSelect textInputProps={{ error }} fromTime={fromTime} toTime={toTime} {...field} />
                }}
              />
            )
          }}
        </FormField>
      </Form>
    </div>
  )
})

DateTimePicker.displayName = 'DateTimePicker'
