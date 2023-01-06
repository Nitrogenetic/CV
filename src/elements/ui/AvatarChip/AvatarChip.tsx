import React, { forwardRef, memo, useRef, useState } from 'react'
import { PopoverAlign, PopoverPosition } from 'react-tiny-popover'
import { AttachmentType, Children, ClassName } from '~types'
import { HTMLDivElementProps, RadiantFullIndicator } from '~ui'
import { Popover } from '~ux'
import cls from 'classnames'
import './AvatarChip.css'
export interface AvatarChipProps extends Omit<HTMLDivElementProps, 'className'> {
  className?: ClassName
  avatarClassName?: ClassName
  children?: Children
  lettersClassName?: string
  kind?: AvatarChipKindType
  ringed?: boolean
  outlined?: boolean
  avatar: AttachmentType | string
  name: string
  viewType?: AvatarChipViewType
  progress?: number
  noPopover?: boolean
  popoverPosition?: Exclude<PopoverPosition, 'custom'>
  popoverAlign?: PopoverAlign
  dataTesting?: string
}

export type AvatarChipKindType = 'primary'
export type AvatarChipViewType = 'user-name' | 'user-email'

const getAvatarChipKindClass = (kind: AvatarChipKindType, outlined: boolean, ringed: boolean, className?: ClassName) =>
  cls(className, 'avatar-chip', {
    'avatar-chip-outlined': outlined,
    'avatar-chip-ringed': ringed
  })

export const AvatarChip = memo(
  forwardRef<HTMLDivElement, AvatarChipProps>((props, ref) => {
    const {
      className,
      avatarClassName,
      lettersClassName,
      kind = 'primary',
      ringed = true,
      outlined = true,
      avatar,
      name = '',
      viewType = 'user-name',
      progress,
      noPopover,
      popoverPosition,
      popoverAlign,
      dataTesting,
      children,
      ...rest
    } = props
    const [isOpenPopover, setIsOpenPopover] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

    const userNameView = viewType === 'user-name'
    const emailView = viewType === 'user-email'

    const letters = userNameView
      ? name
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
              className={cls('bg-cover bg-no-repeat bg-center w-full h-full rounded-full', avatarClassName)}
              style={{ backgroundImage: `url(${src})` }}
            />
          ) : (
            <small className={lettersClassName ? lettersClassName : 'xs-bold select-none'}>{letters}</small>
          )}
          {Number.isInteger(progress) && (
            <>
              <span
                className={
                  'z-2 bg-white border-2 border-neutral-9 text-8 text-green-2.5 rounded-full absolute -top-8 -right-4 leading-10 py-2 px-4 font-bold'
                }
              >
                {progress + '%'}
              </span>
              <RadiantFullIndicator filledDivisions={progress} className={'absolute w-36 h-36 text-green-1'} />
            </>
          )}
          {children}
        </>
      )
    }

    const handleAvatarChipPopoverOpen = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpenPopover(true)
      }, 500)
    }

    const handleAvatarChipPopoverClose = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsOpenPopover(false)
    }

    if (noPopover) {
      return (
        <div
          className={getAvatarChipKindClass(kind, outlined, ringed, className)}
          ref={ref}
          {...rest}
          onMouseEnter={handleAvatarChipPopoverOpen}
          onMouseLeave={handleAvatarChipPopoverClose}
        >
          {renderAvatar()}
        </div>
      )
    }

    return (
      <Popover
        position={popoverPosition}
        align={popoverAlign}
        show={isOpenPopover}
        onHide={() => null}
        panel={<div className={'bg-neutral-12 text-white rounded p-4'}>{name || 'John Doe'}</div>}
        containerStyle={{ zIndex: '10' }}
        childrenProps={{
          className: getAvatarChipKindClass(kind, outlined, ringed, className),
          ref: ref,
          ...rest,
          onMouseEnter: handleAvatarChipPopoverOpen,
          onMouseLeave: handleAvatarChipPopoverClose
        }}
      >
        {renderAvatar()}
      </Popover>
    )
  })
)

AvatarChip.displayName = 'AvatarChip'
