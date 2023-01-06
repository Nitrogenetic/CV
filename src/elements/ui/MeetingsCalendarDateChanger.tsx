import React, { FC, memo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { ArrowChevronLeft, ArrowChevronRight, Calendar } from '~icons'
import { Button, DatePicker, DateRangePicker, MonthRangePicker, MonthPicker } from '~ui'
import { ConditionalRender, Popover } from '~ux'
import { useMeetingsPage } from '~hooks'
import { ClassName } from '~types'
import cls from 'classnames'
import { DateTime } from '~utils'

export interface MeetingsCalendarDateChangerProps {
  className?: ClassName
}

type DateKindType = 'day' | 'week' | 'month'

const MeetingsCalendarDateChanger: FC<MeetingsCalendarDateChangerProps> = memo(props => {
  const { className } = props

  const { week, date, isDailyView, isWeeklyView, isMonthlyView, isRangeDates, changeMeetingsPageDate } =
    useMeetingsPage()

  const [show, setShow] = useState(false)

  const startDate = date[0].toDate()
  const endDate = date[date.length - 1].toDate()

  const noMonthlyView = isDailyView || isWeeklyView

  const handleChangeRangeDates = (startDate: Date | null, endDate: Date | null) => {
    if (startDate && endDate) {
      const dayjsStartDate = dayjs(startDate)
      const dayjsEndDate = dayjs(endDate)
      let newEndDate
      if (isMonthlyView) {
        const date = dayjsEndDate.startOf('month')
        const daysInMonth = date.daysInMonth()
        newEndDate = dayjsEndDate.add(daysInMonth - 1, 'day')
      } else {
        newEndDate = dayjsEndDate
      }
      changeMeetingsPageDate([dayjsStartDate, newEndDate])
      setShow(false)
    }
  }

  const handleChangeDateArray = (date: Dayjs[], dateKind: DateKindType, action: 'substract' | 'add') => {
    const firstDate = date[0]
    const lastDate = date[date.length - 1]

    const isSubstractAction = action === 'substract'

    if (isRangeDates) {
      return isSubstractAction ? [firstDate.subtract(1, dateKind), lastDate] : [firstDate, lastDate.add(1, dateKind)]
    } else {
      return isSubstractAction ? [firstDate.subtract(1, dateKind)] : [lastDate.add(1, dateKind)]
    }
  }

  const renderPanelContent = () => {
    return (
      <>
        <ConditionalRender condition={isMonthlyView}>
          <ConditionalRender
            condition={isRangeDates}
            otherwise={
              <MonthPicker
                className={'w-[300px]'}
                dates={date}
                onDateChange={(_, date) => changeMeetingsPageDate([dayjs(date)])}
              />
            }
          >
            <MonthRangePicker
              className={'w-[300px]'}
              startDate={startDate}
              endDate={endDate}
              onDatesChange={handleChangeRangeDates}
            />
          </ConditionalRender>
        </ConditionalRender>
        <ConditionalRender condition={noMonthlyView}>
          <ConditionalRender
            condition={isRangeDates}
            otherwise={
              <DatePicker
                className={'w-264'}
                dates={isWeeklyView ? (week as Dayjs[]) : date}
                onDateChange={(_, date) => changeMeetingsPageDate([dayjs(date)])}
                disabledDays={day => !day}
              />
            }
          >
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              onDatesChange={handleChangeRangeDates}
              disabledDays={day => !day}
            />
          </ConditionalRender>
        </ConditionalRender>
      </>
    )
  }

  const renderDatesPanel = (date: Dayjs[]) => {
    const firstDate = date[0]
    const secondDate = date[date.length - 1]
    // !Same dates view
    const isSameDay = date.length && DateTime.isSameDay(firstDate, secondDate)
    const isSameMonth = date.length && DateTime.isSameBy(firstDate, secondDate, ['month', 'year'])

    // !view without same dates
    const weeklyBaseView = `${date[0].format('MMMM')} ${week[0].format('DD')} - ${week[6].format('DD')}`
    const monthlyBaseView = date[0].format('MMMM YYYY')
    const dailyView = `${date[0].format('MMMM')} ${date[0].format('DD')}`

    // !Range view
    const weeklyRangeForSameDateView = `${date[0].format('MMMM')} ${date[0].date()}`
    const monthlyRangeForSameDateView = `${date[0].format('MMMM YYYY')}`
    const weeklyRangeForDoubleDatesView = `${date[0].format('MMMM')} ${date[0].date()} - ${date[date.length - 1].format(
      'MMMM'
    )} ${date[date.length - 1].date()}`
    const monthlyRangeForDoubleDatesView = `${date[0].format('MMMM YYYY')} - ${date[date.length - 1].format(
      'MMMM YYYY'
    )}`

    return (
      <>
        <ConditionalRender condition={isWeeklyView}>
          <ConditionalRender condition={isRangeDates} otherwise={weeklyBaseView}>
            <ConditionalRender condition={isSameDay} otherwise={weeklyRangeForDoubleDatesView}>
              {weeklyRangeForSameDateView}
            </ConditionalRender>
          </ConditionalRender>
        </ConditionalRender>

        <ConditionalRender condition={isMonthlyView}>
          <ConditionalRender condition={isRangeDates} otherwise={monthlyBaseView}>
            <ConditionalRender condition={isSameMonth} otherwise={monthlyRangeForDoubleDatesView}>
              {monthlyRangeForSameDateView}
            </ConditionalRender>
          </ConditionalRender>
        </ConditionalRender>

        <ConditionalRender condition={isDailyView}>{dailyView}</ConditionalRender>
      </>
    )
  }

  return (
    <div className={cls('relative inline-flex items-center mr-24', className)}>
      <ArrowChevronLeft
        className={'w-6 h-12 mr-12 neutral-icon'}
        onClick={() => {
          if (isDailyView) {
            changeMeetingsPageDate(handleChangeDateArray(date!, 'day', 'substract'))
          } else if (isWeeklyView) {
            changeMeetingsPageDate(handleChangeDateArray(date, 'week', 'substract'))
          } else {
            changeMeetingsPageDate(handleChangeDateArray(date, 'month', 'substract'))
          }
        }}
      />
      <Popover
        containerClassName={'z-100'}
        show={show}
        onHide={() => setShow(false)}
        position={'bottom'}
        align={'start'}
        padding={8}
        panel={renderPanelContent()}
      >
        <Button
          className={cls('min-w-170', { 'text-neutral-2': isRangeDates })}
          kind={isRangeDates ? 'red' : 'neutral'}
          onClick={() => setShow(true)}
        >
          <Calendar className={'w-16 h-16 -mt-1 mr-6'} />
          {renderDatesPanel(date)}
        </Button>
      </Popover>
      <ArrowChevronRight
        className={'w-6 h-12 ml-12 neutral-icon'}
        onClick={() => {
          if (isDailyView) {
            changeMeetingsPageDate(handleChangeDateArray(date, 'day', 'add'))
          } else if (isWeeklyView) {
            changeMeetingsPageDate(handleChangeDateArray(date, 'week', 'add'))
          } else {
            changeMeetingsPageDate(handleChangeDateArray(date, 'month', 'add'))
          }
        }}
      />
    </div>
  )
})

MeetingsCalendarDateChanger.displayName = 'MeetingsCalendarDateChanger'

export { MeetingsCalendarDateChanger }
