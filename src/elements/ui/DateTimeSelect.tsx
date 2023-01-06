import React, { memo, forwardRef } from 'react'
import { Select, SelectProps } from '~ui'
import { arrayToOptions, getDateHoursMinutesAMPMFormat, getDateTimeline } from '~utils'

export interface DateTimeSelectProps extends Omit<SelectProps, 'options'> {
  timeStart?: number[]
  timeEnd?: number[]
  timeStep?: number
  timezone?: string
}

export const DateTimeSelect = memo(
  forwardRef<HTMLInputElement, DateTimeSelectProps>((props, ref) => {
    const { value, timeStart = [8, 0], timeEnd = [23, 0], timeStep = 30, timezone, onChange, ...rest } = props

    const date = new Date(value)
    const normalizedValue = date.toISOString()

    const dateTimeline = getDateTimeline(date, timeStart, timeEnd, timeStep, timezone)
    const options = arrayToOptions(dateTimeline, getDateHoursMinutesAMPMFormat, date => date.toISOString())

    return <Select value={normalizedValue} options={options} onChange={onChange} ref={ref} {...rest} />
  })
)

DateTimeSelect.displayName = 'DateTimeSelect'
