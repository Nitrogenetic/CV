import React, { FC } from 'react'
import { ClassName } from '~types'
import * as Icon from '../svg/icons/EXPORT'
import cls from 'classnames'
import { AllIconNames } from '../svg/icons'

interface OrchestraTaskResponsesChipProps {
  className?: ClassName
  iconName?: AllIconNames
  iconClassName?: ClassName
  tasksLenght: number
  completedTaskLength: number
}

export const OrchestraTaskResponsesChip: FC<OrchestraTaskResponsesChipProps> = props => {
  const { className, iconName, iconClassName, tasksLenght, completedTaskLength } = props

  const renderIcon = () => {
    const CurrentIcon = Icon[iconName]
    const iconDefaultStyles = 'w-11 h-8 text-inherit mr-6'

    if (!iconName) {
      return <Icon.Copy className={cls(iconDefaultStyles, iconClassName)} />
    } else {
      return CurrentIcon ? <CurrentIcon className={cls(iconDefaultStyles, iconClassName)} /> : null
    }
  }

  return (
    <div className={cls('flex items-center px-8 py-4 w-fit bg-gray-20 rounded-6 text-black', className)}>
      {renderIcon()}
      <p className={'text-11 text-gray-40 font-bold'}>
        <span className={'text-black'}>{completedTaskLength}</span> / <span>{tasksLenght}</span>
      </p>
    </div>
  )
}
OrchestraTaskResponsesChip.displayName = 'OrchestraTaskResponsesChip'
