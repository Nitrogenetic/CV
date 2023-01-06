import React, { memo, forwardRef, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import * as Icon from '~icons'
import { Popover } from '../ux/Popover'
import { OrchestraButton, OrchestraDatePicker, OrchestraTimeRange } from '~ui'
import { ConditionalRender } from '../ux/ConditionalRender'
import cls from 'classnames'
import { ClassName } from '~types'

export interface OrchestraDayTimeRangePickerProps {
  dayTimeRange: Dayjs[] | string[]
  className?: ClassName
  error?: string
  setDayTimeRange(dayTimeRange: string[]): void
}

export const OrchestraDayTimeRangePicker = memo(
  forwardRef<HTMLDivElement, OrchestraDayTimeRangePickerProps>((props, ref) => {
    const { dayTimeRange, error, className, setDayTimeRange } = props

    const dayFormat = 'YYYY-MM-DD'
    const timeFormat = 'HH:mm:ssZ[Z]'

    const [isAddDateClicked, setIsAddDateClicked] = useState(false)
    const [isAddTimeClicked, setIsAddTimeClicked] = useState(false)
    // const [timezone, setTimezone] = useState('America/New_York')

    const timezone = dayjs.tz.guess()

    const handleSelectOneDay = (date: Dayjs) => {
      const day = dayjs(date).format(dayFormat)
      const rangedTime = dayTimeRange.map(dayTime => dayjs(dayTime).format(timeFormat))
      const dayRangedTime = [
        dayjs(day + ' ' + rangedTime[0]).toISOString(),
        dayjs(day + ' ' + rangedTime[1]).toISOString()
      ]
      setDayTimeRange(dayRangedTime)
    }

    const handleSetTimeRange = (timeRange: Dayjs[]) => {
      const rangedStringTime = [dayjs(timeRange[0]).toISOString(), dayjs(timeRange[1]).toISOString()]
      setDayTimeRange(rangedStringTime)
    }

    return (
      <div className={cls(className)}>
        <div className="mb-8">
          <div className="flex space-x-12">
            {/* date */}
            <ConditionalRender
              condition={isAddDateClicked}
              otherwise={
                <OrchestraButton className={'text-gray-80'} kind="ghost" onClick={() => setIsAddDateClicked(true)}>
                  <Icon.OrchestraCalendar className={'h-20 w-20 mr-11 fill-gray-80'} />
                  Add a date
                </OrchestraButton>
              }
            >
              <OrchestraDatePicker
                // selectedDate={dayjs(dayTimeRange[0])}
                selectedDate={dayjs(dayTimeRange[0])}
                setSelectedDate={handleSelectOneDay}
              />
            </ConditionalRender>

            {/* time */}
            <ConditionalRender
              condition={isAddTimeClicked}
              otherwise={
                <OrchestraButton className={'text-gray-80'} kind="ghost" onClick={() => setIsAddTimeClicked(true)}>
                  <Icon.OrchestraClock className={'h-20 w-20 mr-11 fill-gray-80'} />
                  Add a time
                </OrchestraButton>
              }
            >
              <OrchestraTimeRange fromTime={dayjs()} timeRange={dayTimeRange} setTimeRange={handleSetTimeRange} />
            </ConditionalRender>
          </div>

          {/* error */}
          <ConditionalRender condition={!!error}>
            <div className={'flex items-center space-x-12'}>
              <Icon.Error className={'w-14 h-14 text-error'} />
              <span className={'text-14 text-gray-90 font-semibold'}>{error}</span>
            </div>
          </ConditionalRender>
        </div>

        {/* timezone */}
        <ConditionalRender condition={isAddDateClicked || isAddTimeClicked}>
          <div className="flex items-center w-full p-12 rounded-12 bg-blueberry-10 text-12 font-semibold mb-16">
            <Icon.OrchestraInfo className={'w-17 h-17 mr-12'} />
            <span>This is in the {timezone} timezone.</span>
          </div>
        </ConditionalRender>
      </div>
    )
  })
)

OrchestraDayTimeRangePicker.displayName = 'OrchestraDayTimeRangePicker'
