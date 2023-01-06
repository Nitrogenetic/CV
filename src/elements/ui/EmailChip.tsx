import React, { memo } from 'react'
import cls from 'classnames'
import { ClassName } from '~types'
import * as Icon from '~icons'
import { AvatarChip } from '~ui'

export type EmailChipVariantType = 'primary'

export interface EmailChipProps {
  className?: ClassName
  email: string
  onTimesClick?: (value: string) => void
}

export const EmailChip: React.FC<EmailChipProps> = memo(props => {
  const { className, email, onTimesClick } = props

  return (
    <div className={cls(className, 'h-26 inline-flex items-center rounded-16 pl-1 pr-8 text-neutral-1 bg-neutral-7')}>
      <AvatarChip avatar={''} name={email} viewType={'user-email'} className={'w-25 h-25 mr-6'} />
      <small className={'mr-auto'}>{email}</small>
      {onTimesClick && <Icon.Times className={'w-7 h-7 ml-10 neutral-icon'} onClick={() => onTimesClick(email)} />}
    </div>
  )
})

EmailChip.displayName = 'EmailChip'
