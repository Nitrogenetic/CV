import React, { memo } from 'react'
import cls from 'classnames'
import * as Icon from '~icons'
import { ClassName } from '~types'
import { DatePickerKindType } from '~ui'
import { Dayjs } from 'dayjs'

const getDatePickerHeaderKindClass = (kind: DatePickerKindType, className?: ClassName) => {
  return cls(className, 'date-picker-header', {
    'date-picker-header-primary': !kind || kind === 'primary'
  })
}

export interface DatePickerHeaderProps {
  date: Dayjs
  className?: ClassName
  kind?: DatePickerKindType
  nextMonth: (e: React.MouseEvent<HTMLDivElement>) => void
  previousMonth: (e: React.MouseEvent<HTMLDivElement>) => void
  disabledMonths: (date: Dayjs, withYear?: boolean) => boolean
}

export const DatePickerHeader = memo((props: DatePickerHeaderProps) => {
  const { className, kind = 'primary', date, nextMonth, previousMonth, disabledMonths } = props

  const title = date.format('MMMM YYYY')
  const prevMonthDate = date.subtract(1, 'month')
  const nextMonthDate = date.add(1, 'month')

  const isPrevMonthDisabled = (withYear?: boolean) => disabledMonths(prevMonthDate, withYear)
  const isNextMonthDisabled = (withYear?: boolean) => disabledMonths(nextMonthDate, withYear)

  const handlePrevMonthChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.shiftKey) {
      if (!isPrevMonthDisabled(true)) previousMonth(e)
    } else {
      if (!isPrevMonthDisabled()) previousMonth(e)
    }
  }

  const handleNextMonthChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.shiftKey) {
      if (isNextMonthDisabled(true)) nextMonth(e)
    } else {
      if (!isNextMonthDisabled()) nextMonth(e)
    }
  }

  return (
    <div className={getDatePickerHeaderKindClass(kind, className)}>
      <h4 className={cls({ 'text-gray-100': !kind || kind === 'primary' })}>{title}</h4>
      <nav className={'flex items-center'}>
        <Icon.ArrowChevronLeft
          className={cls('w-16 h-12 mr-16 cursor-pointer', {
            'neutral-icon': !kind || kind === 'primary',
            hidden: isPrevMonthDisabled()
          })}
          onClick={handlePrevMonthChange}
        />
        <Icon.ArrowChevronRight
          className={cls('w-16 h-12 cursor-pointer', {
            'neutral-icon': !kind || kind === 'primary',
            hidden: isNextMonthDisabled()
          })}
          onClick={handleNextMonthChange}
        />
      </nav>
    </div>
  )
})

DatePickerHeader.displayName = 'DatePickerHeader'
