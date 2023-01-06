import React, { memo } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import { DatePickerKindType } from '~ui'
import { DateTime } from '~utils'

const getDatePickerDaysLabelKindClass = (kind: DatePickerKindType, className?: ClassName) => {
  return cls(className, 'date-picker-label', {
    'date-picker-label-primary': !kind || kind === 'primary'
  })
}

export interface DatePickerDaysLabelsProps {
  className?: ClassName
  kind?: DatePickerKindType
}

// Render the label for day of the week
// This method is used as a map callback as seen here
export const DatePickerDaysLabels: React.FC<DatePickerDaysLabelsProps> = memo(props => {
  const { className, kind = 'primary' } = props

  const week = DateTime.week()

  return (
    <div className={'grid grid-cols-7 gap-3 px-20 py-9'}>
      {week.map(day => {
        return (
          <div className={getDatePickerDaysLabelKindClass(kind, className)} key={day.toISOString()}>
            {day.format('dd')}
          </div>
        )
      })}
    </div>
  )
})

DatePickerDaysLabels.displayName = 'DatePickerDaysLabels'
