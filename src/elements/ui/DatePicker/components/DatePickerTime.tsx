import React, { memo } from 'react'
import { LabelField } from '~ux'
import { DateTimeSelect } from '~ui'

export interface DatePickerTimeProps {
  startDateTime: Date
  endDateTime: Date
  timeStart?: number[]
  timeEnd?: number[]
  timeStep?: number
  onStartDateTimeChange: (date: Date) => void
  onEndDateTimeChange: (date: Date) => void
}

export const DatePickerTime: React.FC<DatePickerTimeProps> = memo(props => {
  const { startDateTime, endDateTime, onStartDateTimeChange, onEndDateTimeChange, ...rest } = props

  return (
    <div className={'w-55% p-24'}>
      <LabelField name={'startDateTime'} label={'From'}>
        <DateTimeSelect
          name={'startDateTime'}
          value={startDateTime.toISOString()}
          onChange={dateTime => onStartDateTimeChange(new Date(dateTime))}
          textInputProps={{
            placeholder: 'Select start time...'
          }}
          {...rest}
        />
      </LabelField>
      <LabelField name={'endDateTime'} label={'To'}>
        <DateTimeSelect
          name={'endDateTime'}
          value={endDateTime.toISOString()}
          onChange={dateTime => onEndDateTimeChange(new Date(dateTime))}
          textInputProps={{
            placeholder: 'Select end time...'
          }}
          {...rest}
        />
      </LabelField>
    </div>
  )
})

DatePickerTime.displayName = 'DatePickerTime'
