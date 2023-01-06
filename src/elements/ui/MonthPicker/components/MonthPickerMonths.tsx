import React, { memo, useState } from 'react'
import cls from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import { Children, ClassName } from '~types'
import { DateTime } from '~utils'
import { MonthPickerKindType } from '../MonthPicker'

export interface DatePickerDayProps {
  variant: MonthPickerKindType
  month: Dayjs
  date: Dayjs
  children: Children
  setMonth: (date: Date) => void
  rangedMonths?: (day: Dayjs) => boolean
}

type MonthlyPickerMonthType = 'today' | 'selected' | 'default' | 'range'
type MonthPositionType = 'left' | 'center' | 'right'

const getDatePickerDayVariantClass = (
  kind: MonthPickerKindType,
  type?: MonthlyPickerMonthType,
  position?: MonthPositionType,
  transition?: boolean
) => {
  return cls(
    'text-14 text-white text-center px-12 cursor-pointer transition duration-150 ease-in hover:bg-violet-1',
    kind,
    {
      'bg-violet-2': type === 'selected',
      'border-2 border-box border-violet-3': type === 'today',
      'bg-violet-1': type === 'range',
      'bg-neutral-9 hover:bg-violet-1 duration-150': type === 'default'
    },
    {
      'transform -translate-x-4': transition && position === 'left',
      'transform translate-x-4': transition && position === 'right',
      'transform -translate-y-4': transition && position === 'center'
    }
  )
}

export const MonthPickerMonth: React.FC<DatePickerDayProps> = memo(props => {
  const { variant, month, date, setMonth, rangedMonths = () => false, children } = props
  const [transition, setTransition] = useState(false)
  const nowDate = dayjs()
  const monthNumber = month.month() + 1
  const isCurrentMonth = month && DateTime.isSameBy(month, dayjs(date), ['month', 'year'])
  const isTodayMonth = month && DateTime.isSameBy(month, nowDate, ['month', 'year'])
  const isInRange = rangedMonths && rangedMonths(month)

  let type: MonthlyPickerMonthType

  if (isTodayMonth) {
    type = 'today'
  }

  if (isCurrentMonth && !isTodayMonth) {
    type = 'selected'
  }

  if (isInRange) {
    type = 'range'
  }

  if (!isTodayMonth && !isCurrentMonth && !isInRange) {
    type = 'default'
  }

  let position: MonthPositionType
  monthNumber === 1 || (monthNumber && monthNumber % 3 === 1)
    ? (position = 'left')
    : monthNumber && monthNumber % 3 === 0
    ? (position = 'right')
    : (position = 'center')

  const handleTransition = () => {
    if (transition) {
      const timer = setTimeout(() => setTransition(false), 100)
      return () => {
        clearTimeout(timer)
      }
    }
  }

  return (
    <div
      className={getDatePickerDayVariantClass(variant, type as MonthlyPickerMonthType, position, transition)}
      onClick={() => setMonth(month.toDate())}
      onMouseEnter={() => setTransition(true)}
      onMouseOut={handleTransition}
    >
      {children}
    </div>
  )
})

MonthPickerMonth.displayName = 'MonthPickerMonth'

const monthPickerDaysBaseVariant = 'grid grid-rows-4 grid-cols-3 gap-1'

const monthPickerDaysPrimaryVariant = ''

const getMonthPickerMonthKindClass = (kind: MonthPickerKindType, className?: ClassName) => {
  return cls(className, monthPickerDaysBaseVariant, {
    [monthPickerDaysPrimaryVariant]: !kind || kind === 'primary'
  })
}

export interface MonthPickerMonthsProps {
  className?: ClassName
  variant?: MonthPickerKindType
  kind?: MonthPickerKindType
  currentDate: Dayjs
  calendarDate: Dayjs
  setMonth: (date: Date) => void
  rangedMonths?: (day: Dayjs) => boolean
}
export const MonthPickerMonths: React.FC<MonthPickerMonthsProps> = memo(props => {
  const { className, kind = 'primary', currentDate, calendarDate, setMonth, rangedMonths = () => false } = props
  const months = DateTime.month(calendarDate)

  return (
    <div>
      <div className={getMonthPickerMonthKindClass(kind, className)}>
        {months.map(month => {
          return (
            <MonthPickerMonth
              key={month.toISOString()}
              variant={kind}
              month={month}
              date={currentDate}
              setMonth={setMonth}
              rangedMonths={rangedMonths}
            >
              {month.format('MMMM')}
            </MonthPickerMonth>
          )
        })}
      </div>
    </div>
  )
})

MonthPickerMonths.displayName = 'MonthPickerMonths'
