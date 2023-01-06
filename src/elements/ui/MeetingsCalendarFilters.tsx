import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import cls from 'classnames'
import { MeetingCalendarChip } from '~ui'
import { Popover } from '~ux'
import { ClassName, DayMeetingsSchedule, MeetingType, OptionType } from '~types'
import { useMeetingsPage } from '~hooks'
import * as Icon from '~icons'

export type MeetingCalendarFilterVariantType = 'primary'

type MeetingStatusOptionValuesType = 'all' | 'upcoming' | 'live' | 'ended'
type MeetingStatusOptionLabelsType = 'All' | 'Upcoming' | 'Live' | 'Ended'
type MeetingStatusOptionType = { label: MeetingStatusOptionLabelsType; value: MeetingStatusOptionValuesType }
export interface MeetingsCalendarFiltersProps {
  className?: ClassName
  variant?: MeetingCalendarFilterVariantType
  daysMeetingsSchedule: DayMeetingsSchedule[]
}

const meetingCalendarFilterBaseVariant = 'w-141 p-10 rounded-8 bg-neutral-12 mt-16'

const getMeetingCalendarFilterVariantClass = (variant: MeetingCalendarFilterVariantType, className?: ClassName) =>
  cls(className, meetingCalendarFilterBaseVariant, {})

const MeetingsCalendarFilters: FC<MeetingsCalendarFiltersProps> = memo(props => {
  const { className, variant = 'primary', daysMeetingsSchedule } = props

  const meetingsStatusFilterState = {
    all: 0,
    upcoming: 0,
    draft: 0,
    ended: 0,
    live: 0
  }

  const [show, onHide] = useState(false)
  const [statusesState, setStatusesState] = useState<typeof meetingsStatusFilterState>(meetingsStatusFilterState)

  const hidePopover = useCallback(() => onHide(false), [])

  const { statuses, changeMeetingsPageStatus } = useMeetingsPage()

  useEffect(() => {
    const all: MeetingType[] = []
    const upcoming: MeetingType[] = []
    const ended: MeetingType[] = []
    const live: MeetingType[] = []

    const scheduleArray = daysMeetingsSchedule.map(scheduleOneDay => scheduleOneDay.schedule)

    scheduleArray.map(schedule => {
      return schedule.map(meetingTime => {
        const { meetings } = meetingTime
        return meetings.forEach(meeting => {
          const { status } = meeting
          all.push(meeting)
          switch (status) {
            case 'upcoming':
              upcoming.push(meeting)
              break
            case 'ended':
              ended.push(meeting)
              break
            case 'live':
            case 'ready to start':
              live.push(meeting)
          }
        })
      })
    })
    setStatusesState(prevStats => ({
      ...prevStats,
      all: all.length,
      upcoming: upcoming.length,
      ended: ended.length,
      live: live.length
    }))
  }, [daysMeetingsSchedule])

  const handleMeetingFiltersChange = (option: OptionType, checked: boolean) => {
    const isCurrentStatus = !!statuses.find(status => status.value === option.value)
    const isOnlyOneStatus = statuses.length === 1 && isCurrentStatus
    if (checked) {
      if (isOnlyOneStatus) {
        changeMeetingsPageStatus([{ label: 'All', value: 'all' }])
      } else {
        changeMeetingsPageStatus(statuses.filter(s => s.label !== option.label))
      }
    } else {
      changeMeetingsPageStatus([...statuses, option])
    }
  }

  return (
    <div className={'relative inline-flex items-center mr-27 cursor-pointer'}>
      <Popover
        show={show}
        onHide={hidePopover}
        position={'bottom'}
        align={'end'}
        panel={
          <div className={getMeetingCalendarFilterVariantClass(variant, className)}>
            {MEETING_STATUS_OPTIONS.map((option, index) => {
              const checked = !!statuses.find(s => s.label === option.label)
              const optionValue = option.value
              const meetingsLength = statusesState[optionValue]
              return (
                <MeetingCalendarChip
                  key={index}
                  chipType={'status-filter'}
                  option={option}
                  meetingsLength={meetingsLength}
                  checked={checked}
                  onChange={handleMeetingFiltersChange}
                />
              )
            })}
          </div>
        }
      >
        <div
          className={'inline-flex items-center text-14 text-white hover:text-primary-4'}
          onClick={() => onHide(!show)}
        >
          <Icon.Filter className={'w-14 h-9 mr-6'} />
          {statuses.length > 0
            ? statuses.length >= 2
              ? statuses[statuses.length - 1]?.label
              : statuses.map((status, index) => {
                  const { value, label } = status
                  return <p key={value + index}>{label}</p>
                })
            : 'All'}
          <Icon.ArrowChevronDown className={'w-12 h-6 ml-6 ' + (show ? 'transform rotate-180' : '')} />
        </div>
      </Popover>
    </div>
  )
})

MeetingsCalendarFilters.displayName = 'MeetingsCalendarFilters'

export { MeetingsCalendarFilters }

export const MEETING_STATUS_OPTIONS: MeetingStatusOptionType[] = [
  { label: 'All', value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Live', value: 'live' },
  { label: 'Ended', value: 'ended' }
]
