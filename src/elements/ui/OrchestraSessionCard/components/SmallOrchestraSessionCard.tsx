import { FC } from 'react'
import cls from 'classnames'

import { MeetingType } from '~types'
import * as Icon from '~icons'
import { OrchestraAvatarChipKindType, OrchestraSessionCardProps, OrchestraAvatarChipList, Tooltip } from '~ui'
import OrchestraSessionCardMenu from './OrchestraSessionCardMenu'

interface SmallOrchestraSessionCardProps extends Omit<OrchestraSessionCardProps, 'size'> {
  description: string
}

export const SmallOrchestraSessionCard: FC<SmallOrchestraSessionCardProps> = props => {
  const { className, session = {} as MeetingType, onPlan, onViewResponses, onDuplicate, onRemove, description } = props

  const { title = '', external, participants, owner, hosts } = session

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

  const isCronofySession = external && external.type === 'google_meets'
  return (
    <div
      style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }}
      className={cls('bg-white p-12 flex rounded-12 shadow-interactive-1', className)}
    >
      <div className={'w-full flex flex-col'}>
        <div className={'flex items-center justify-between mb-12'}>
          <h4 className={'text-private font-bold max-w-144'}>{title}</h4>
          <OrchestraSessionCardMenu
            session={session}
            onPlan={onPlan}
            onDuplicate={onDuplicate}
            onRemove={onRemove}
            onViewResponses={onViewResponses}
          />
        </div>
        <div className={'mb-38 flex items-baseline'}>
          <small className={'text-12 text-gray-70 font-semibold mr-8'}>{description}</small>
          {/*TODO when backend add isRecurring field to session */}
          {/*<Tooltip text={'Recurring session'}>*/}
          {/*  <Icon.Resend className={'w-9 mr-7 text-blue-70 hover:text-blue-90'} />*/}
          {/*</Tooltip>*/}
        </div>
        <div className={'flex items-center justify-between mt-auto'}>
          <OrchestraAvatarChipList users={avatarChipUsers} />
          {isCronofySession && <Icon.Cronofy className={'w-16 h-16'} />}
        </div>
      </div>
    </div>
  )
}

SmallOrchestraSessionCard.displayName = 'SmallOrchestraSessionCard'
