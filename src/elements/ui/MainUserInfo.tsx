import React, { FC, memo } from 'react'
import { ClassName, UserType } from '~types'
import { AvatarChip } from '~ui'

export interface MainUserInfoProps {
  user?: UserType
  className?: ClassName
  onClick?(value?: any): void
}

const MainUserInfo: FC<MainUserInfoProps> = memo(props => {
  const { user, className = '', onClick } = props

  if (!user) {
    return null
  }

  const { email, avatar, firstName, lastName } = user
  const userFullName = !firstName && !lastName ? 'No name' : firstName || '' + ' ' + lastName || ''

  return (
    <div onClick={onClick} className={'flex items-center space-x-17 ' + className}>
      <AvatarChip name={'avatar'} avatar={avatar} className={'rounded-full w-32 h-32'} />
      <div className={'flex flex-col justify-between'}>
        <span className={'text-neutral-1 text-12 text-bold'}>{userFullName}</span>
        <span className={'text-12 text-neutral-4'}>{email}</span>
      </div>
    </div>
  )
})

MainUserInfo.displayName = 'MainUserInfo'

export { MainUserInfo }
