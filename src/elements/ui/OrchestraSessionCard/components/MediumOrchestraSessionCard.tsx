import { FC, useMemo } from 'react'
import dayjs from 'dayjs'
import cls from 'classnames'
import { navigate } from '@reach/router'

import { MeetingType } from '~types'
import { OrchestraAvatarChipKindType, OrchestraButton, OrchestraSessionCardProps, OrchestraAvatarChipList } from '~ui'
import * as Icon from '~icons'
import OrchestraSessionCardMenu from './OrchestraSessionCardMenu'
import { ConditionalRender } from '~ux'

interface MediumOrchestraSessionCardProps extends Omit<OrchestraSessionCardProps, 'size'> {
  description: string
}

export const MediumOrchestraSessionCard: FC<MediumOrchestraSessionCardProps> = props => {
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

  const { title = '', external, hosts, startTime, preworkAssignment, participants, owner } = session

  const isCronofySession = external && external.type === 'google_meets'
  const isUserHost = useMemo(() => Boolean(hosts.find(host => host.id === currentUser.id)), [currentUser, hosts])
  const minutesToStart = Math.floor((+dayjs(startTime) - +dayjs()) / 1000 / 60)

  const isPreworksExist = preworkAssignment && preworkAssignment?.tasks?.length > 0
  const preworkTasksLeft =
    isPreworksExist && preworkAssignment.tasks.length - preworkAssignment?.currentUserResponses?.length

  const renderButtons = () => {
    if (minutesToStart <= 5) {
      return (
        <OrchestraButton kind={'primary'} size={'small'} onClick={() => onJoin(session)}>
          Join session
        </OrchestraButton>
      )
    }

    if (isUserHost) {
      return (
        <div className={'flex'}>
          {isPreworksExist && (
            <OrchestraButton
              kind={'secondary'}
              className={'flex justify-center items-center mr-8'}
              size={'small'}
              to={`/participant/meeting/${session.id}/welcome`}
            >
              <Icon.TabletFolder className={'h-18'} />
            </OrchestraButton>
          )}
          <OrchestraButton kind={'secondary'} size={'small'} onClick={() => onPlan(session)}>
            Plan session
          </OrchestraButton>
        </div>
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
      className={cls('bg-white p-12 flex rounded-12 shadow-interactive-1', className)}
    >
      <div className={'w-full flex flex-col'}>
        <div className={'flex items-start justify-between'}>
          <h4 className={'text-private font-bold max-w-144'}>{title}</h4>
          <div className={'flex items-center justify-between space-x-12'}>
            {isCronofySession && <Icon.Cronofy className={'w-16 h-16'} />}
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
        <ConditionalRender condition={preworkAssignment?.statistics?.responded > 0}>
          <div
            className="w-fit-content py-4 pl-8 pr-13 mb-10 bg-information rounded-8 text-white text-11 font-bold select-none cursor-pointer"
            onClick={() => onViewResponses(session)}
          >
            <div className={'inline-block mr-10'}>
              View {preworkAssignment?.statistics?.responded} / {participants.length} responses
            </div>
            <Icon.ArrowChevronRight className={'inline-block w-5'} />
          </div>
        </ConditionalRender>
        <ConditionalRender condition={!!preworkAssignment?.tasks?.length}>
          <div
            className={cls(
              'w-fit-content py-4 px-8 rounded-8 bg-blueberry-10 text-information text-11 font-bold select-none',
              { 'cursor-pointer': preworkTasksLeft > 0 }
            )}
            onClick={async () => preworkTasksLeft > 0 && (await navigate(`/participant/meeting/${session.id}/welcome`))}
          >
            {preworkTasksLeft > 0 ? (
              <Icon.Chart className={'inline-block mr-8'} />
            ) : (
              <Icon.CheckInCircleFilled className={'inline-block mr-8'} />
            )}
            <div className={'inline-block'}>
              {preworkTasksLeft > 0 ? `${preworkTasksLeft} pre-work tasks left` : 'Pre-work completed'}
            </div>
          </div>
        </ConditionalRender>
        <div className={'flex items-center justify-between mt-auto'}>
          <OrchestraAvatarChipList
            users={avatarChipUsers}
            isRestUsersPopover
            restUsersPopoverActions={[
              {
                label: 'Manage participants',
                onClick: () => navigate(`/facilitator/meeting/${session.id}/designer/participants`)
              }
            ]}
          />
          {renderButtons()}
        </div>
      </div>
    </div>
  )
}

MediumOrchestraSessionCard.displayName = 'MediumOrchestraSessionCard'
