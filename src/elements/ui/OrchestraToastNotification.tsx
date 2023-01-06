import React, { FC, memo } from 'react'
import { AllIconNames, IconProps } from '~icons'
import { OrchestraButton, OrchestraButtonProps } from '~ui'
import { ConditionalRender } from '~ux'
import { ClassName } from '~types'
import cls from 'classnames'
import * as Icon from '~icons'

export interface OrchestraToastNotificationProps {
  className?: ClassName
  titleClassName?: ClassName
  iconName?: AllIconNames
  iconProps?: IconProps
  title: string
  buttonProps?: Omit<OrchestraButtonProps, 'ref'>
}

const OrchestraToastNotification: FC<OrchestraToastNotificationProps> = memo(props => {
  const { className, titleClassName, iconName, iconProps, title, buttonProps } = props

  const CurrentIcon = Icon[iconName]

  return (
    <div className={cls('flex items-center space-x-12 pl-12 pr-4 py-4 rounded-12', className)}>
      <ConditionalRender condition={!!iconName}>
        <CurrentIcon {...iconProps} />
      </ConditionalRender>
      <span className={cls('text-14 font-bold', titleClassName)}>{title}</span>
      <OrchestraButton kind={'ghost'} size={'small'} {...buttonProps} />
    </div>
  )
})

OrchestraToastNotification.displayName = 'OrchestraToastNotification'

export { OrchestraToastNotification }
