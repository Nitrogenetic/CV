import React, { memo } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import { getDateHoursMinutesFormat } from '~utils'
import './TimeChip.css'

export interface TimeChipProps {
  className?: ClassName
  start: string
  end: string
}

export const TimeChip: React.FC<TimeChipProps> = memo(props => {
  const { className, start, end } = props

  const startDate = new Date(start)
  const endDate = new Date(end)

  const time = `${getDateHoursMinutesFormat(startDate)} - ${getDateHoursMinutesFormat(endDate)}`

  return (
    <div className={cls('time-chip', className)}>
      <small className={'xs-bold'}>{time}</small>
    </div>
  )
})

TimeChip.displayName = 'TimeChip'
