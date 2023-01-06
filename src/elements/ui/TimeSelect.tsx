import React, { memo, useEffect, useState, forwardRef } from 'react'
import cls from 'classnames'
import { Select, SelectProps } from '~ui'
import { zeroPad } from '~utils'
import { ClassName, OptionType } from '~types'
import dayjs from 'dayjs'

export interface TimeSelectProps {
  className?: ClassName
  optionsClassName?: ClassName
  firstSelectClassName?: ClassName
  secondSelectClassName?: ClassName
  name: string
  value: string
  onChange: (value: string) => void
  fromTime?: string
  toTime?: string
  textInputProps?: SelectProps['textInputProps']
}

export const TimeSelect = memo(
  forwardRef<HTMLDivElement, TimeSelectProps>((props, ref) => {
    const {
      className,
      optionsClassName,
      firstSelectClassName,
      secondSelectClassName,
      name,
      fromTime,
      toTime,
      value,
      onChange,
      textInputProps
    } = props

    const fromDateTime = fromTime ? dayjs(fromTime) : null
    const toDateTime = toTime ? dayjs(toTime) : null

    const fromHours = fromDateTime && fromDateTime.hour()
    const fromMinutes = fromDateTime && fromDateTime.minute()

    const toHours = toDateTime && toDateTime.hour()
    const toMinutes = toDateTime && toDateTime.minute()

    const date = dayjs(value)

    const [hours, setHours] = useState(date.hour().toString())
    const [minutes, setMinutes] = useState(date.minute().toString())

    const hoursOptions = new Array(23)
      .fill(0)
      .map((_, index) => {
        const hour = index + 1

        const isFromHours = fromHours ? hour >= fromHours : true
        const isToHours = toHours ? hour <= toHours : true

        if (!isFromHours || !isToHours) return

        const twelveFormatHour = hour % 12 === 0 ? 12 : hour % 12
        const isPm = hour > 12

        const label = twelveFormatHour + (isPm ? ' pm' : ' am')

        return {
          label,
          value: hour.toString()
        }
      })
      .filter(i => !!i) as OptionType[]

    const minutesOptions = new Array(60)
      .fill(0)
      .map((_, index) => {
        if (+hours === 24) {
          return (
            index === 0 && {
              label: zeroPad(index, 2) + 'm',
              value: index.toString()
            }
          )
        }

        if (fromHours && toHours && fromHours === toHours) {
          const zeroToMinutes = toMinutes ?? -1

          if (index >= fromMinutes! && index <= zeroToMinutes) {
            return {
              label: zeroPad(index, 2) + 'm',
              value: index.toString()
            }
          } else return
        }

        if (fromHours && +hours === fromHours) {
          if (index >= fromMinutes!) {
            return {
              label: zeroPad(index, 2) + 'm',
              value: index.toString()
            }
          } else return
        }

        if (toHours && +hours === toHours) {
          const zeroToMinutes = toMinutes ?? -1

          if (index <= zeroToMinutes) {
            return {
              label: zeroPad(index, 2) + 'm',
              value: index.toString()
            }
          } else return
        }

        return {
          label: zeroPad(index, 2) + 'm',
          value: index.toString()
        }
      })
      .filter(i => !!i) as OptionType[]

    const handleHoursChange = (hours: string) => {
      setHours(hours)
      const nextDate = date.hour(+hours)

      onChange(nextDate.toISOString())
    }

    const handleMinutesChange = (minutes: string) => {
      setMinutes(minutes)
      const nextDate = date.minute(+minutes)

      onChange(nextDate.toISOString())
    }

    useEffect(() => {
      if (fromTime && fromHours?.toString() && fromMinutes?.toString()) {
        if (fromHours > +hours) {
          handleHoursChange(fromHours.toString())
        }

        if (fromHours === +hours) {
          if (fromMinutes > +minutes) {
            handleMinutesChange(fromMinutes.toString())
          }
        }
      }

      if (toTime && toHours?.toString() && toMinutes?.toString()) {
        if (toHours < +hours) {
          handleHoursChange(toHours.toString())
        }

        if (toHours === +hours) {
          if (toMinutes < +minutes) {
            handleMinutesChange(toMinutes.toString())
          }
        }
      }
    }, [fromTime, toTime, value])

    return (
      <div className={cls(className, 'flex justify-start')} ref={ref}>
        <Select
          isInputSearchable
          optionsClassName={optionsClassName}
          className={cls(firstSelectClassName, 'flex-2 mr-16')}
          name={name + 'Hours'}
          value={hours}
          options={hoursOptions}
          onChange={handleHoursChange}
          textInputProps={textInputProps}
        />
        <Select
          isInputSearchable
          optionsClassName={optionsClassName}
          className={cls(secondSelectClassName, 'flex-1')}
          name={name + 'Minutes'}
          value={minutes}
          options={minutesOptions}
          onChange={handleMinutesChange}
          textInputProps={textInputProps}
        />
      </div>
    )
  })
)

TimeSelect.displayName = 'TimeSelect'
