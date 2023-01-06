import React, { memo } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import { MonthPickerKindType } from '../MonthPicker'
import { Dayjs } from 'dayjs'
import * as Icon from '~icons'

const monthPickerHeaderBaseKind = 'relative flex items-center mb-12 justify-center'
const monthPickerHeaderPrimaryKind = 'border-neutral-9'

const getMonthPickerHeaderKindClass = (kind: MonthPickerKindType, className?: ClassName) => {
  return cls(className, monthPickerHeaderBaseKind, {
    [monthPickerHeaderPrimaryKind]: !kind || kind === 'primary'
  })
}

export interface MonthPickerHeaderProps {
  date: Dayjs
  className?: ClassName
  kind?: MonthPickerKindType
  onNextYearChange: () => void
  onPreviousYearChange: () => void
}

export const MonthPickerHeader = memo((props: MonthPickerHeaderProps) => {
  const { className, kind = 'primary', date, onNextYearChange, onPreviousYearChange } = props

  const title = date.format('YYYY')

  return (
    <div className={getMonthPickerHeaderKindClass(kind, className)}>
      <div onClick={onPreviousYearChange} className={'w-full'}>
        <Icon.ArrowChevronLeft
          className={cls('w-14 h-14 cursor-pointer hover:text-white', {
            'neutral-icon': !kind || kind === 'primary'
          })}
        />
      </div>
      <h4
        className={cls({
          'm-0 text-white px-6 mx-24 border border-violet-3 rounded-6': !kind || kind === 'primary'
        })}
      >
        {title}
      </h4>
      <div onClick={onNextYearChange} className={'w-full'}>
        <Icon.ArrowChevronRight
          className={cls('w-14 h-14 ml-auto cursor-pointer hover:text-white', {
            'neutral-icon': !kind || kind === 'primary'
          })}
        />
      </div>
    </div>
  )
})

MonthPickerHeader.displayName = 'MonthPickerHeader'
