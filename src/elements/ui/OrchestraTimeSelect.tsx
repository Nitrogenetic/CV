import React, { memo, forwardRef } from 'react'
import { OrchestraButton, OrchestraButtonProps, OrchestraSelect } from '~ui'
import { ClassName } from '~types'
import { DateTime, zeroPad } from '~utils'
import dayjs from 'dayjs'
import cls from 'classnames'

export type OrchestraTimeSelectRange = 5 | 10 | 15 | 30 | 60
export interface OrchestraTimeSelectProps {
  className?: ClassName
  optionClassName?: ClassName
  optionsClassName?: ClassName
  buttonProps?: Omit<OrchestraButtonProps, 'ref'>
  fromTime?: string
  toTime?: string
  date: string
  range?: OrchestraTimeSelectRange
  onChange: (value: string) => void
}

export const OrchestraTimeSelect = memo(
  forwardRef<HTMLDivElement, OrchestraTimeSelectProps>((props, ref) => {
    const {
      className,
      optionClassName,
      optionsClassName,
      buttonProps,
      date,
      fromTime,
      toTime,
      range = 5,
      onChange
    } = props

    const currentDate = dayjs(date).format('HH:mm')

    const fromDateTime = fromTime ? dayjs(fromTime) : dayjs()
    const toDateTime = toTime ? dayjs(toTime) : dayjs()

    const fromHours = fromDateTime && fromDateTime.hour()
    const toHours = toDateTime && toDateTime.hour()

    const rangedParts = 60 / range

    const getSplittersPreviousTime = (previousValue: string) => previousValue.split(':')

    const optionsArray = new Array(23 * rangedParts).fill(0).reduce(acc => {
      const previousTime = acc[acc.length - 1]?.value

      let nextDateHour: number
      let nextDateMinute: number

      if (previousTime) {
        const [prevHour, prevMinute] = getSplittersPreviousTime(previousTime)
        const previousDate = dayjs()
          .hour(+prevHour)
          .minute(+prevMinute)
          .second(0)

        const toTimeDiff = DateTime.diff(toDateTime, previousDate, 'minute')
        if (!toTimeDiff) return acc
        const reductionCondition = toTimeDiff < range

        const nextDate = reductionCondition
          ? previousDate.add(toTimeDiff + 1, 'minute')
          : previousDate.add(range, 'minute')
        nextDateHour = nextDate.hour()
        nextDateMinute = nextDate.minute()
      } else {
        nextDateHour = fromDateTime.hour()
        nextDateMinute = fromDateTime.minute()
      }
      const isFromHours = fromHours ? nextDateHour >= fromHours : true
      const isToHours = toHours ? nextDateHour <= toHours : true

      if (!isFromHours || !isToHours) return acc

      const twelveFormatHour = !(nextDateHour % 12) ? 12 : nextDateHour % 12
      const isPm = nextDateHour > 12

      // 24 nextDateHours format for value / 12 for label
      const validHour = zeroPad(nextDateHour, 2)
      const validFormatHour = zeroPad(twelveFormatHour, 2)
      const validMinute = zeroPad(nextDateMinute, 2)

      const label = validFormatHour + ':' + validMinute + (isPm ? ' pm' : ' am')
      const value = validHour + ':' + validMinute

      return [...acc, { label, value }]
    }, [])

    const handleChangeTime = (value: string) => {
      const [hour, minute] = getSplittersPreviousTime(value)
      onChange(
        dayjs()
          .hour(+hour)
          .minute(+minute)
          .toISOString()
      )
    }

    return (
      <div className={cls(className, 'flex justify-start')} ref={ref}>
        <OrchestraSelect
          optionsClassName={cls('max-h-[208px] max-w-160 overflow-y-scroll overflow-x-hidden', optionsClassName)}
          optionClassName={optionClassName}
          options={optionsArray}
          selected={currentDate}
          onSelect={handleChangeTime}
          renderLabel={() => <OrchestraButton {...buttonProps} />}
        />
      </div>
    )
  })
)

OrchestraTimeSelect.displayName = 'OrchestraTimeSelect'
