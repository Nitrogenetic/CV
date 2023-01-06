import React, { useState } from 'react'
import {
  OrchestraAvatarChip,
  OrchestraAvatarChipColorType,
  OrchestraAvatarChipDetailPopover,
  OrchestraAvatarChipKindType
} from '~ui'
import { Popover } from '~ux'
import cls from 'classnames'

export type AvatarChipUser = {
  name: string
  email: string
  kind: OrchestraAvatarChipKindType
  avatar?: string
}

export interface OrchestraAvatarChipListProps {
  users: AvatarChipUser[]
  isRestUsersPopover?: boolean
  restUsersPopoverActions?: { label: string; onClick: () => void }[]
}

const ORCHESTRA_AVATAR_CHIP_COLORS: OrchestraAvatarChipColorType[] = ['melon', 'tomato', 'blueberry']

export const OrchestraAvatarChipList: React.FC<OrchestraAvatarChipListProps> = ({
  users,
  isRestUsersPopover = false,
  restUsersPopoverActions
}) => {
  const [isShowParticipantsPopover, setIsShowParticipantsPopover] = useState(false)
  const toggleParticipantsPopover = (value: boolean) => () => setIsShowParticipantsPopover(value)
  const renderAvatarsRestCountPopover = (restUsers: AvatarChipUser[]) => {
    const length = restUsers.length
    return (
      <Popover
        show={isShowParticipantsPopover && isRestUsersPopover}
        position={['right', 'left']}
        align={'start'}
        reposition
        padding={8}
        onClickOutside={toggleParticipantsPopover(false)}
        panel={
          <div className={'p-8 shadow-basic-1 border border-gray-10 rounded-12 bg-white'}>
            <div className={'mb-8 font-bold text-12 text-gray-70'}>Participants ({length})</div>
            <hr className={'mb-8 border border-gray-20'} />
            {restUsers.map((user, index) => {
              return (
                <OrchestraAvatarChipDetailPopover
                  avatarProps={{ ...user, color: ORCHESTRA_AVATAR_CHIP_COLORS[index % 3] }}
                  popoverProps={{ padding: 20 }}
                  key={user.email}
                >
                  <div className={'flex items-center p-4 mb-8 rounded-8 group hover:bg-gray-90'}>
                    <OrchestraAvatarChip
                      name={user.name || user.email}
                      avatar={user.avatar}
                      kind={user.kind}
                      hidePopover
                      size={'sm'}
                      color={ORCHESTRA_AVATAR_CHIP_COLORS[index % 3]}
                      wrapperClassName={'mr-8'}
                    />
                    <div className={'font-bold text-12 text-gray-80 whitespace-nowrap group-hover:text-white'}>
                      {user.name || user.email}
                    </div>
                  </div>
                </OrchestraAvatarChipDetailPopover>
              )
            })}
            <hr className={'mb-8 border border-gray-20'} />
            {(restUsersPopoverActions || []).map(action => {
              return (
                <div
                  key={action.label}
                  onClick={action.onClick}
                  className={
                    'py-8 px-10 rounded-8 font-bold text-12 text-gray-80 whitespace-nowrap cursor-pointer select-none hover:bg-gray-20'
                  }
                >
                  {action.label}
                </div>
              )
            })}
          </div>
        }
      >
        <div
          key={length}
          onClick={toggleParticipantsPopover(true)}
          className={cls(
            'w-32 h-32 bg-gray-100 font-proxima rounded-8 inline-flex justify-center items-center text-white font-bold',
            { 'cursor-pointer': isRestUsersPopover }
          )}
        >
          +{length}
        </div>
      </Popover>
    )
  }

  const sortedUsers = (users || []).sort((a, b) => {
    const aWeight = a.kind === 'collaborator' ? 2 : a.kind === 'facilitator' ? 1 : 0
    const bWeight = b.kind === 'collaborator' ? 2 : b.kind === 'facilitator' ? 1 : 0

    if (aWeight < bWeight) return 1
    if (aWeight > bWeight) return -1
    return 0
  })

  const first4Users = (sortedUsers || []).slice(0, 4)
  const restUsers = (sortedUsers || []).slice(3) // 3 but not 4 because last user not renders
  return (
    <div className={'flex flex-wrap space-x-2'}>
      {first4Users.map((user, index) => {
        const { name, email, kind, avatar } = user
        if (index === 3 && sortedUsers.length > 4) return renderAvatarsRestCountPopover(restUsers)

        return (
          <OrchestraAvatarChipDetailPopover
            avatarProps={{ ...user, color: ORCHESTRA_AVATAR_CHIP_COLORS[index % 3] }}
            popoverProps={{ padding: 20, position: ['top', 'bottom'], align: 'center' }}
            key={user.email}
          >
            <OrchestraAvatarChip
              hidePopover
              name={name || email}
              size={'sm'}
              avatar={avatar}
              kind={kind}
              color={ORCHESTRA_AVATAR_CHIP_COLORS[index % 3]}
            />
          </OrchestraAvatarChipDetailPopover>
        )
      })}
    </div>
  )
}

OrchestraAvatarChipList.displayName = 'OrchestraAvatarChipList'
