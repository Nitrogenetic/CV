import React, { forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes, memo } from 'react'
import { ConditionalRender, Loader } from '~ux'
import { AttachmentType, Children, ClassName, HtmlButtonProps } from '~types'
import cls from 'classnames'
import { Link } from '@reach/router'
import * as Icon from '../svg/icons'

export type OrchestraAvatarButtonThemeType = 'light' | 'inverse'
export type OrchestraAvatarButtonKindType = 'collaborator' | 'facilitator' | 'member'
export type OrchestraAvatarButtonSizeType = 'sm' | 'md' | 'lg'
export type OrchestraAvatarButtonViewType = 'name' | 'email'

const getAvatarButtonKindClass = (
  kind: OrchestraAvatarButtonKindType,
  size: OrchestraAvatarButtonSizeType,
  active: boolean,
  withAvatar: boolean,
  className?: ClassName
) => {
  return cls(className, 'orchestra-avatar-button', {
    // size
    'orchestra-avatar-button-sm': size === 'sm',
    'orchestra-avatar-button-md': size === 'md',
    'orchestra-avatar-button-lg': size === 'lg',

    'orchestra-avatar-button-member': kind === 'member' && !withAvatar,
    'orchestra-avatar-button-collaborator': kind === 'collaborator' && !withAvatar,
    'orchestra-avatar-button-facilitator': kind === 'facilitator' && !withAvatar
  })
}

const getOrchestraAvatarChipPreffixClass = (size: OrchestraAvatarButtonSizeType, className?: ClassName) =>
  cls(className, 'absolute -bottom-5 -right-5 z-2', {
    'w-16 h-16': size === 'sm',
    'w-24 h-24': size === 'md',
    'w-32 h-32': size === 'lg'
  })

export interface OrchestraAvatarButtonProps extends HtmlButtonProps {
  className?: ClassName
  lettersClassName?: string
  avatarClassName?: ClassName
  preffixClassName?: ClassName
  name: string
  avatar?: AttachmentType | string
  viewType?: 'name' | 'email'
  children?: Children
  kind?: OrchestraAvatarButtonKindType
  preffix?: Children
  loading?: boolean
  active?: boolean
  size?: OrchestraAvatarButtonSizeType
  to?: string
  target?: HTMLAttributeAnchorTarget
  dataTesting?: string
  loaderProps?: HTMLAttributes<typeof Loader>
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const OrchestraAvatarButton = memo(
  forwardRef<HTMLButtonElement, OrchestraAvatarButtonProps>((props, ref) => {
    const {
      className,
      lettersClassName,
      avatarClassName,
      preffixClassName,
      name,
      avatar,
      viewType = 'name',
      kind = 'member',
      type = 'button',
      size = 'md',
      active = false,
      preffix,
      to,
      target,
      children,
      loading,
      dataTesting,
      loaderProps,
      ...rest
    } = props

    const userNameView = viewType === 'name'
    const emailView = viewType === 'email'

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
              className={cls(
                'bg-cover bg-no-repeat bg-center w-full h-full hover:bg-opacity-medium active:bg-gray-90 active:bg-opacity-large focus:orchestra-blue-ring',
                avatarClassName
              )}
              style={{ backgroundImage: `url(${src})` }}
            />
          ) : (
            <span className={lettersClassName ? lettersClassName : 'select-none'}>{letters}</span>
          )}
          {children}
          <ConditionalRender condition={!!preffix}>
            <Icon.Badge className={cls(getOrchestraAvatarChipPreffixClass(size, preffixClassName))} />
          </ConditionalRender>
        </>
      )
    }

    const button = (
      <button
        ref={ref}
        className={getAvatarButtonKindClass(kind, size, active, !!avatar, className)}
        type={type}
        data-testing={dataTesting}
        {...rest}
      >
        <ConditionalRender condition={loading} otherwise={renderAvatar()}>
          <Loader width={22} height={22} {...loaderProps} />
        </ConditionalRender>
      </button>
    )

    if (to) {
      return (
        <Link to={to} target={target}>
          {button}
        </Link>
      )
    }

    return button
  })
)

OrchestraAvatarButton.displayName = 'OrchestraAvatarButton'
