import React, { memo } from 'react'
import cls from 'classnames'
import { ClassName, UserType } from '~types'
import * as Icon from '~icons'
import { AvatarChip } from '~ui'
import { ConditionalRender } from '~ux'
import './UserChip.css'

export type UserChipVariantType = 'primary'
export interface UserChipProps {
  className?: ClassName
  user: UserType
  onTimesClick?: () => void
}

export const UserChip: React.FC<UserChipProps> = memo(props => {
  const { className, user, onTimesClick } = props

  if (!user) return null

  const { avatar, fullName, username, email } = user

  return (
    <div className={cls('user-chip', className)}>
      <AvatarChip
        avatar={avatar || ''}
        name={fullName || username || email || 'Unknown user'}
        className={'w-25 h-25 mr-6'}
      />
      <small className={'mr-auto'}>{fullName || username || email}</small>
      <ConditionalRender condition={!!onTimesClick}>
        <Icon.Times className={'w-7 h-7 ml-10 neutral-icon hover:text-red-2'} onClick={onTimesClick} />
      </ConditionalRender>
    </div>
  )
})

UserChip.displayName = 'UserChip'
