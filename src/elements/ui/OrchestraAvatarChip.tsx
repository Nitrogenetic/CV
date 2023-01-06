import React, { forwardRef, memo, useRef, useState } from 'react'
import { PopoverAlign, PopoverPosition } from 'react-tiny-popover'
import { AttachmentType, ClassName } from '~types'
import { HTMLDivElementProps } from '~ui'
import { ConditionalRender, Popover } from '~ux'
import cls from 'classnames'
import * as Icon from '../svg/icons'

export interface OrchestraAvatarChipProps extends Omit<HTMLDivElementProps, 'className'> {
  wrapperClassName?: ClassName
  className?: ClassName
  avatarClassName?: ClassName
  lettersClassName?: string
  kind?: OrchestraAvatarChipKindType
  theme?: OrchestraAvatarChipThemeType
  size?: OrchestraAvatarChipSizeType
  outlined?: boolean
  ringed?: boolean
  prefixClassName?: ClassName
  avatar?: AttachmentType | string
  name: string
  viewType?: OrchestraAvatarChipViewType
  noPopover?: boolean
  popoverPosition?: Exclude<PopoverPosition, 'custom'>
  popoverAlign?: PopoverAlign
  dataTesting?: string
  color?: OrchestraAvatarChipColorType
  hidePopover?: boolean
}

export type OrchestraAvatarChipColorType = 'melon' | 'tomato' | 'blueberry'
export type OrchestraAvatarChipThemeType = 'light' | 'inverse'
export type OrchestraAvatarChipKindType = 'collaborator' | 'facilitator' | 'member'
export type OrchestraAvatarChipSizeType = 'xs' | 'sm' | 'md' | 'lg'
export type OrchestraAvatarChipViewType = 'name' | 'email'

const getOrchestraAvatarChipKindClass = (
  theme: OrchestraAvatarChipThemeType,
  color: OrchestraAvatarChipColorType,
  kind: OrchestraAvatarChipKindType,
  size: OrchestraAvatarChipSizeType,
  outlined: boolean,
  ringed: boolean,
  withAvatar: boolean,
  className?: ClassName
) =>
  cls(className, 'inline-flex justify-center items-center overflow-hidden', {
    // *size type
    'w-24 h-24 rounded-8 text-12 font-bold': size === 'xs',
    'w-32 h-32 rounded-8 text-12 font-bold': size === 'sm',
    'w-48 h-48 rounded-8 text-18 font-bold': size === 'md',
    'w-96 h-96 rounded-24 text-32 font-extrabold': size === 'lg',

    // facilitator or collaborator colors
    'border-2 border-grape-100 text-grape-100': kind === 'collaborator',
    'border-2 border-melon-70 text-melon-70': color === 'melon' && kind === 'facilitator',
    'border-2 border-blueberry-70 text-blueberry-70': color === 'blueberry' && kind === 'facilitator',
    'border-2 border-tomato-70 text-tomato-70': color === 'tomato' && kind === 'facilitator',

    // member colors
    'border-transparent bg-melon-10 text-melon-100': color === 'melon' && kind === 'member' && !withAvatar,
    'border-transparent bg-blueberry-10 text-blueberry-90': color === 'blueberry' && kind === 'member' && !withAvatar,
    'border-transparent bg-tomato-10 text-tomato-90': color === 'tomato' && kind === 'member' && !withAvatar,

    // idk what is it...
    'bg-gray-90 text-turquoise': color === 'melon' && theme === 'inverse' && !withAvatar,
    'text-acidic border-2 border-acidic bg-gray-90': kind === 'collaborator' && theme === 'inverse' && !withAvatar,
    'text-pink bg-gray-90': kind === 'facilitator' && theme === 'inverse' && !withAvatar
    // 'orchestra-avatar-chip-ringed': ringed
  })

const getOrchestraAvatarChipPrefixClass = (
  theme: OrchestraAvatarChipThemeType,
  size: OrchestraAvatarChipSizeType,
  kind?: OrchestraAvatarChipKindType,
  color?: OrchestraAvatarChipColorType,
  className?: ClassName
) =>
  cls(className, 'absolute -bottom-5 -right-2', {
    'text-grape-100': theme === 'light' && kind === 'collaborator',
    'text-melon-70': theme === 'light' && color === 'melon' && kind !== 'collaborator',
    'text-blueberry-70': theme === 'light' && color === 'blueberry' && kind !== 'collaborator',
    'text-tomato-70': theme === 'light' && color === 'tomato' && kind !== 'collaborator',
    'text-pink': theme === 'inverse',
    'w-12 h-12': size === 'xs',
    'w-16 h-16': size === 'sm',
    'w-24 h-24': size === 'md',
    'w-32 h-32': size === 'lg'
  })

const getRandomDefaultColor = (): OrchestraAvatarChipColorType => {
  const colors: OrchestraAvatarChipColorType[] = ['melon', 'blueberry', 'tomato']
  const colorIndex = Math.round(Math.random() * 10) % 3
  return colors[colorIndex]
}
export const OrchestraAvatarChip = memo(
  forwardRef<HTMLDivElement, OrchestraAvatarChipProps>((props, ref) => {
    const {
      name = '',
      avatar,
      viewType = 'name',
      className,
      avatarClassName,
      lettersClassName,
      wrapperClassName,
      color = getRandomDefaultColor(),
      kind = 'member',
      theme = 'light',
      size = 'md',
      ringed = true,
      outlined = false,
      prefixClassName,
      noPopover,
      popoverPosition,
      popoverAlign,
      dataTesting,
      children,
      hidePopover = false,
      ...rest
    } = props
    const [isOpenPopover, setIsOpenPopover] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

    const userNameView = viewType === 'name'
    const emailView = viewType === 'email'
    const extraSmallSize = size === 'xs'

    const letters = userNameView
      ? name && !extraSmallSize
        ? name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('')
        : 'JD'
      : emailView
      ? name.substring(0, 1).toUpperCase()
      : ''

    const src = typeof avatar === 'string' ? avatar : avatar?.url

    const renderAvatar = () => {
      return (
        <>
          {avatar ? (
            <div
              data-testing={dataTesting}
              className={cls('bg-cover bg-no-repeat bg-center w-full h-full', avatarClassName)}
              style={{ backgroundImage: `url(${src})` }}
            />
          ) : (
            <span className={lettersClassName ? lettersClassName : 'select-none'}>{letters}</span>
          )}
          {children}
        </>
      )
    }

    const handleOrchestraAvatarChipPopoverOpen = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpenPopover(true)
      }, 500)
    }

    const handleOrchestraAvatarChipPopoverClose = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsOpenPopover(false)
    }

    if (noPopover) {
      return (
        <div className={'relative flex'}>
          <div
            ref={ref}
            className={getOrchestraAvatarChipKindClass(theme, color, kind, size, outlined, ringed, !!avatar, className)}
            onMouseEnter={handleOrchestraAvatarChipPopoverOpen}
            onMouseLeave={handleOrchestraAvatarChipPopoverClose}
            {...rest}
          >
            {renderAvatar()}
          </div>
          <ConditionalRender condition={kind !== 'member'}>
            <Icon.Badge className={getOrchestraAvatarChipPrefixClass(theme, size, kind, color, prefixClassName)} />
          </ConditionalRender>
        </div>
      )
    }

    return (
      <Popover
        position={popoverPosition}
        align={popoverAlign}
        show={isOpenPopover && !hidePopover}
        onHide={() => null}
        panel={
          <ConditionalRender condition={!!name} otherwise={<></>}>
            <div className={'bg-neutral-12 text-white rounded p-4'}>{name}</div>
          </ConditionalRender>
        }
        containerStyle={{ zIndex: '10' }}
      >
        <div className={cls('relative flex', wrapperClassName)}>
          <div
            className={getOrchestraAvatarChipKindClass(theme, color, kind, size, outlined, ringed, !!avatar, className)}
            ref={ref}
            {...rest}
            onMouseEnter={handleOrchestraAvatarChipPopoverOpen}
            onMouseLeave={handleOrchestraAvatarChipPopoverClose}
          >
            {renderAvatar()}
          </div>
          <ConditionalRender condition={kind !== 'member'}>
            <Icon.Badge className={getOrchestraAvatarChipPrefixClass(theme, size, kind, color, prefixClassName)} />
          </ConditionalRender>
        </div>
      </Popover>
    )
  })
)

OrchestraAvatarChip.displayName = 'OrchestraAvatarChip'
