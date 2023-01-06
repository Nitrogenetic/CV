import { navigate } from '@reach/router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import * as Icon from '~icons'
import { ClassName, MeetingType, UserType } from '~types'
import { AvatarChip, Button, MeetingContextMenu, MoreChip, StatusChip } from '~ui'
import { getAssignmentTasksOnly } from '~utils'
import { ConditionalRender } from '~ux'

dayjs.extend(relativeTime)

export interface MeetingRowProps {
  className?: ClassName
  meeting: MeetingType
  noContextMenu?: boolean
  onShowAllUsers?: (meeting: MeetingType) => void
  onRowClick: (meeting: MeetingType) => void
  onRemoveClick?: (meeting: MeetingType) => void
  onResultsClick?: (meeting: MeetingType) => void
  onCloneClick?: (meeting: MeetingType) => void
}

const VISIBLE_CHIPS_COUNT = 4

const MeetingRow: FC<MeetingRowProps> = memo(props => {
  const {
    className,
    meeting,
    onShowAllUsers = () => null,
    onRowClick,
    onResultsClick = () => null,
    onRemoveClick = () => null,
    onCloneClick = () => null,
    noContextMenu = false
  } = props

  const { title, startTime, endTime, guests, hosts, visitors, preworkAssignment, postworkAssignment, status } = meeting
  const [timelineLabel, setTimelineLabel] = useState('')
  const [timeOffsetLabel, setTimeOffsetLabel] = useState('')

  const isMeetingEnded = dayjs().isAfter(endTime)

  const allUsers = [...guests, ...hosts, ...visitors]

  // Generate in 2 hours, 2 days ago string

  useEffect(() => {
    if (startTime && endTime) {
      if (dayjs(startTime) > dayjs()) {
        setTimeOffsetLabel(dayjs(startTime).fromNow())
      } else {
        setTimeOffsetLabel(dayjs().to(dayjs(startTime)))
      }
      const startTimeLabel = dayjs(startTime).format('DD MMMM YYYY H:mm a')
      const endTimeLabel = dayjs(endTime).format('HH:mm a')
      setTimelineLabel(`${startTimeLabel} - ${endTimeLabel}`)
    }
  }, [startTime, endTime])

  const handleRowClick = useCallback(() => onRowClick(meeting), [])

  return (
    <div
      className={
        'flex bg-neutral-12 rounded-8 pt-20 pb-18 px-24 mb-10 justify-between transition-colors cursor-pointer hover:bg-neutral-9 ' +
        className
      }
      onClick={handleRowClick}
    >
      <div className={'cursor-pointer'}>
        <div className={'flex items-center mb-6'}>
          <h5 className={'text-white mr-10'}>{title}</h5>
          <StatusChip className={'text-10 py-4 px-8'} status={status} />
        </div>
        <div className={'flex items-center'}>
          <span
            className={'pr-10 text-neutral-3 border-r border-solid border-neutral-3 text-14 leading-14 font-normal'}
          >
            {timelineLabel}
          </span>
          <span className={'pl-10 text-neutral-3'}>{timeOffsetLabel}</span>
        </div>
      </div>
      <div className={'flex items-center'}>
        {allUsers.map(({ id, avatar, fullName, email }: UserType, index: number) => {
          if (index > VISIBLE_CHIPS_COUNT) return null

          const moreUsers = allUsers.slice(VISIBLE_CHIPS_COUNT).length

          if (index === VISIBLE_CHIPS_COUNT) {
            return (
              <MoreChip
                key={`${id}_${index}`}
                className={'w-36 h-36'}
                onClick={e => {
                  e.stopPropagation()
                  onShowAllUsers(meeting)
                }}
              >
                + {moreUsers}
              </MoreChip>
            )
          }

          let assignmentProgress: number | undefined = 0
          let responsesLength = 0

          if (isMeetingEnded) {
            if (postworkAssignment) {
              const { allResponses, tasks } = postworkAssignment

              for (const response of allResponses) {
                const { email: responseEmail } = response

                if (email === responseEmail) responsesLength++
              }

              assignmentProgress = Math.floor((responsesLength / getAssignmentTasksOnly(tasks).length) * 100)
            } else assignmentProgress = undefined
          } else {
            if (preworkAssignment) {
              const { allResponses, tasks } = preworkAssignment

              for (const response of allResponses) {
                const { email: responseEmail } = response

                if (email === responseEmail) responsesLength++
              }

              assignmentProgress = Math.floor((responsesLength / getAssignmentTasksOnly(tasks).length) * 100)
            } else assignmentProgress = undefined
          }

          return (
            <AvatarChip
              key={`${id}_${index}`}
              avatar={avatar || ''}
              name={fullName}
              className={'w-36 h-36 mx-6'}
              onClick={e => {
                e.stopPropagation()
                onShowAllUsers(meeting)
              }}
              progress={assignmentProgress}
            />
          )
        })}

        {status === 'ended' && (
          <Button
            className={'flex items-center space-x-6 h-36 mx-20'}
            onClick={e => {
              e.stopPropagation()
              navigate(`/facilitator/meeting/${meeting.id}/details`)
            }}
          >
            <Icon.Play className={'w-15 h-15'} />
            <span>Watch a recording</span>
          </Button>
        )}

        <ConditionalRender condition={!noContextMenu}>
          <MeetingContextMenu
            meeting={meeting}
            onRemoveClick={onRemoveClick}
            onResultsClick={onResultsClick}
            onCloneClick={onCloneClick}
          />
        </ConditionalRender>
      </div>
    </div>
  )
})

MeetingRow.displayName = 'MeetingRow'

export { MeetingRow }
