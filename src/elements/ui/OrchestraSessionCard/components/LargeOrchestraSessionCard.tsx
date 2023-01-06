import { FC, useMemo } from 'react'
import dayjs from 'dayjs'
import cls from 'classnames'

import { MeetingType } from '~types'
import {
  OrchestraButton,
  OrchestraTaskResponsesChip,
  OrchestraSessionCardProps,
  OrchestraAvatarChipKindType,
  OrchestraAvatarChipList,
  Tooltip
} from '~ui'
import * as Icon from '~icons'
import { MINUTE } from '~utils'
import OrchestraSessionCardMenu from './OrchestraSessionCardMenu'

interface LargeOrchestraSessionCardProps extends Omit<OrchestraSessionCardProps, 'size'> {
  description: string
}

export const LargeOrchestraSessionCard: FC<LargeOrchestraSessionCardProps> = props => {
  const {
    className,
    session = {} as MeetingType,
    currentUser,
    onJoin,
    onPlan,
    onViewResponses,
    onDuplicate,
    onRemove,
    description
  } = props

  const { title = '', hosts, startTime, participants, owner } = session

  const is5MinutesBeforeStart = useMemo(() => +dayjs(startTime) - +dayjs() <= 5 * MINUTE, [startTime])
  const isUserHost = useMemo(() => Boolean(hosts.find(host => host.id === currentUser.id)), [currentUser, hosts])
  const minutesToStart = Math.floor((+dayjs(startTime) - +dayjs()) / 1000 / 60)

  const renderButton = () => {
    if (is5MinutesBeforeStart) {
      return (
        <OrchestraButton kind={'primary'} size={'small'} onClick={() => onJoin(session)}>
          Join session
        </OrchestraButton>
      )
    }

    if (isUserHost) {
      return (
        <OrchestraButton kind={'secondary'} size={'small'} onClick={() => onPlan(session)}>
          Plan session
        </OrchestraButton>
      )
    }

    return null
  }

  const avatarChipUsers = participants.map(participant => {
    const { email, fullName, avatar } = participant
    const avatarString = avatar?.url
    const name = fullName
    const isUserHost = Boolean(hosts.find(host => host.id === participant.id))
    const isUserOwner = owner.id === participant.id
    const kind: OrchestraAvatarChipKindType = isUserOwner ? 'collaborator' : isUserHost ? 'facilitator' : 'member'

    return {
      name,
      email,
      kind,
      avatar: avatarString
    }
  })

  return (
    <div
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }}
      className={cls('bg-white p-12 flex rounded-12 shadow-interactive-1 space-x-12', className)}
    >
      <img src="/images/cover.jpg" alt="cover" className={'h-177 w-112'} />
      <div className={'w-full flex flex-col'}>
        <div className={'flex items-center justify-between mb-12'}>
          <h4 className={'text-private font-bold max-w-144'}>{title}</h4>
          <div className={'flex items-center justify-between space-x-12'}>
            <OrchestraTaskResponsesChip tasksLenght={14} completedTaskLength={8} />
            <OrchestraSessionCardMenu
              session={session}
              onPlan={onPlan}
              onDuplicate={onDuplicate}
              onRemove={onRemove}
              onViewResponses={onViewResponses}
            />
          </div>
        </div>
        <div className={'mb-38 flex items-baseline'}>
          <small className={'text-gray-70 font-semibold mr-12'}>{description}</small>
          {/*TODO when backend add isRecurring field to session */}
          {/*<Tooltip text={'Recurring session'}>*/}
          {/*  <Icon.Resend className={'w-9 mr-7 text-blue-70 hover:text-blue-90'} />*/}
          {/*</Tooltip>*/}
          {minutesToStart <= 15 && minutesToStart > 0 && (
            <>
              <span className={'inline-block align-middle w-4 h-4 rounded-full bg-coral-70 mr-8'} />
              <small className={'text-coral-70 font-semibold'}>in {minutesToStart} min</small>
            </>
          )}
        </div>
        <div className={'flex items-center justify-between mt-auto'}>
          <OrchestraAvatarChipList users={avatarChipUsers} />
          {renderButton()}
        </div>
      </div>
    </div>
  )
}

LargeOrchestraSessionCard.displayName = 'LargeOrchestraSessionCard'
