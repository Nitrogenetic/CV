import React, { memo, forwardRef } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import * as Icon from '~icons'
import { OptionType } from '~types'
import { OrchestraTimeRangeSelect } from './components'

export interface OrchestraTimeRangeProps {
  timeRange: Dayjs[] | string[]
  interval?: number
  fromTime?: Dayjs
  toTime?: Dayjs
  setTimeRange(date: Dayjs[]): void
}

export const OrchestraTimeRange = memo(
  forwardRef<HTMLDivElement, OrchestraTimeRangeProps>((props, ref) => {
    const {
      timeRange,
      interval = 15,
      fromTime = dayjs().set('hours', 0).set('minutes', 0),
      toTime = dayjs().set('hours', 23).set('minutes', 59),
      setTimeRange
    } = props

    const dayFormat = 'YYYY-MM-DD'

    const startTimeForDisplay = dayjs(timeRange[0]).format('h:mma')
    const endTimeForDisplay = dayjs(timeRange[1]).format('h:mma')

    const startTimeValue = dayjs(timeRange[0]).format('H:mm')
    const endTimeValue = dayjs(timeRange[1]).format('H:mm')

    const timeOptions = new Array(23)
      .fill(0)
      .map((_, hourIndex) => {
        const hourStep = hourIndex + 1
        const fromHour = fromTime.hour()
        const fromMinute = fromTime.minute()
        const toHour = toTime.hour()
        const toMinute = toTime.minute()
        if (hourStep < fromHour || hourStep > toHour) {
          return
        }
        const format = hourStep > 12 ? 'pm' : 'am'
        const twelveFormatHour = hourStep % 12 === 0 ? 12 : hourStep % 12
        const minutesStepsCount = 60 / interval
        const hoursMinutesOptions = new Array(minutesStepsCount)
          .fill(0)
          .map((_, minutesIndex) => {
            if (hourStep === fromHour && minutesIndex * interval < fromMinute) {
              return
            }
            if (hourStep === toHour && minutesIndex * interval > toMinute) {
              return
            }
            if (minutesIndex === 0) {
              const zeroTimeOption = `${twelveFormatHour}:00${format}`
              return { label: zeroTimeOption, value: `${hourStep}:00` }
            }
            const minuteOption = (interval * minutesIndex).toString()
            const correctMinuteOption = minuteOption.length === 1 ? '0' + minuteOption : minuteOption
            const timeOption = `${twelveFormatHour}:${correctMinuteOption}${format}`

            return { label: timeOption, value: `${hourStep}:${correctMinuteOption}` }
          })
          .filter(i => !!i)
        if (!hoursMinutesOptions.length) {
          return
        }
        return hoursMinutesOptions
      })
      .flat()
      .filter(i => !!i) as OptionType[]

    const handleSelectStartTime = hourMinute => {
      const day = dayjs(timeRange[0]).format(dayFormat)
      const dateTime = dayjs(day + hourMinute)
      setTimeRange([dateTime, dayjs(timeRange[1])])
    }

    const handleSelectEndTime = hourMinute => {
      const day = dayjs(timeRange[1]).format(dayFormat)
      const dateTime = dayjs(day + hourMinute)
      setTimeRange([dayjs(timeRange[0]), dateTime])
    }

    const startTimeValueIndex = timeOptions.findIndex(option => option.value === startTimeValue)
    const endTimeOptions = timeOptions.filter((option, index) => {
      return index > startTimeValueIndex
    })

    return (
      <div className="flex items-center">
        <OrchestraTimeRangeSelect timeOptions={timeOptions} onSelect={handleSelectStartTime} selected={startTimeValue}>
          <Icon.OrchestraClock className={'h-20 w-20 mr-11 fill-gray-80'} />
          {startTimeForDisplay}
        </OrchestraTimeRangeSelect>
        &mdash;
        <OrchestraTimeRangeSelect timeOptions={endTimeOptions} onSelect={handleSelectEndTime} selected={endTimeValue}>
          {endTimeForDisplay}
        </OrchestraTimeRangeSelect>
      </div>
    )
  })
)

OrchestraTimeRange.displayName = 'OrchestraTimeRange'
