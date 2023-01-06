import React, { useCallback } from 'react'
import cls from 'classnames'
import * as Icon from '../svg/icons'

export interface MenuItemProps {
  label: string
  secondLabel?: string
  shortcut?: string
  arrowRight?: boolean
  iconName?: Icon.AllIconNames
  avatar?: string
  isOnline?: boolean
  selected?: boolean
  disabled?: boolean
  onClick?: (item: MenuItemProps, e: React.MouseEvent) => void
  className?: string
  id: string
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const {
    label,
    secondLabel,
    shortcut,
    arrowRight,
    iconName,
    selected,
    disabled,
    isOnline,
    avatar,
    onClick,
    className
  } = props

  const renderIcon = () => {
    const CurrentIcon = Icon[iconName]
    if (!CurrentIcon) return null
    return (
      <div className={'w-20 h-20 flex justify-center items-center mr-10'}>
        <CurrentIcon
          className={cls('max-w-20 max-h-20 min-w-20', {
            'text-gray-40': disabled,
            'text-gray-90': !selected && !disabled,
            'text-white': selected && !disabled
          })}
        />
      </div>
    )
  }
  const renderArrowRight = () => {
    if (!arrowRight) return null
    return (
      <Icon.ArrowChevronRight
        className={cls('w-6 ml-8', {
          'text-gray-40': disabled,
          'text-gray-90': !selected && !disabled,
          'text-white': selected && !disabled
        })}
      />
    )
  }
  const renderLabel = () => {
    return (
      <div>
        <div
          className={cls('flex items-center text-12 font-bold', {
            'text-gray-90': !selected && !disabled,
            'text-white': selected,
            'text-gray-40': disabled
          })}
        >
          <div>{label}</div>
          {isOnline && !disabled && <div className="w-8 h-8 ml-4 rounded-full bg-[#018535]" />}
        </div>
        {secondLabel && (
          <div
            className={cls('text-11', {
              'text-gray-70': !selected && !disabled,
              'text-white': selected,
              'text-gray-40': disabled
            })}
          >
            {secondLabel}
          </div>
        )}
      </div>
    )
  }
  const renderShortcut = () => {
    if (!shortcut) return null
    return (
      <div
        className={cls('text-11 whitespace-nowrap', {
          'text-gray-80': !selected && !disabled,
          'text-white': selected,
          'text-gray-40': disabled
        })}
      >
        {shortcut}
      </div>
    )
  }
  const renderCheckIcon = () => {
    if (!selected || avatar || arrowRight) return null
    return <Icon.Check className={'ml-8 text-white w-12'} />
  }
  const renderAvatar = () => {
    if (!avatar) return null
    return (
      <img
        className={cls('w-32 h-32 max-w-32 max-h-32 mr-8 rounded-8', { 'opacity-40': disabled })}
        src={avatar}
        alt="avatar"
      />
    )
  }

  const handleClick = useCallback((e: React.MouseEvent) => onClick(props, e), [props])

  return (
    <div
      className={cls('w-full flex items-center px-12 py-8 rounded-8 select-none group', className, {
        'bg-inherit cursor-default': disabled,
        'cursor-pointer': !disabled,
        'bg-gray-90': selected && !disabled,
        'bg-inherit hover:bg-gray-20 active:bg-gray-30': !selected && !disabled
      })}
      onClick={handleClick}
    >
      {renderAvatar()}
      {renderIcon()}
      {renderLabel()}
      <div className="flex items-center ml-auto">
        {renderShortcut()}
        {renderArrowRight()}
        {renderCheckIcon()}
      </div>
    </div>
  )
}

export { MenuItem }
