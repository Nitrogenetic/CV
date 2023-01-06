import React, { forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes, memo } from 'react'
import cls from 'classnames'
import { Children, ClassName, HtmlButtonProps } from '~types'
import { ConditionalRender, Loader } from '~ux'
import { Link } from '@reach/router'

export type ButtonKindType = 'primary' | 'neutral' | 'violet' | 'red' | 'inline' | 'violet-inline' | 'option'
export type ButtonSizeType = 'lg' | 'md' | 'sm' | 'icon'

const buttonOptionVariant = (active: boolean) =>
  cls('btn-option', {
    'btn-option-inactive': !active,
    'btn-option-active': active
  })

const getButtonKindClass = (kind: ButtonKindType, size: ButtonSizeType, active: boolean, className?: ClassName) => {
  const isPrimaryInline = kind === 'inline'
  const isVioletInline = kind === 'violet-inline'
  const isOption = kind === 'option'
  const isInline = isPrimaryInline || isVioletInline

  return cls(className, 'btn', {
    'btn-lg': !isInline && size === 'lg',
    'btn-md': (!isInline && !size) || size === 'md',
    'btn-sm': !isInline && size === 'sm',
    'btn-icon': !isInline && size === 'icon',

    'btn-primary': kind === 'primary',
    'btn-neutral': !kind || kind === 'neutral',
    'btn-violet': kind === 'violet',
    'btn-red': kind === 'red',
    'btn-primary-inline': isPrimaryInline,
    'btn-violet-inline': isVioletInline,
    [buttonOptionVariant(active)]: isOption
  })
}
export interface ButtonProps extends HtmlButtonProps {
  className?: ClassName
  children: Children
  kind?: ButtonKindType
  loading?: boolean
  active?: boolean
  size?: ButtonSizeType
  to?: string
  target?: HTMLAttributeAnchorTarget
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  dataTesting?: string
  isRoutingLink?: boolean
  loaderProps?: HTMLAttributes<typeof Loader>
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
      className,
      kind = 'neutral',
      type = 'button',
      size = 'md',
      active = false,
      to,
      target,
      children,
      loading,
      dataTesting,
      isRoutingLink = true,
      loaderProps,
      ...rest
    } = props

    const button = (
      <button
        ref={ref}
        className={getButtonKindClass(kind, size, active, className)}
        type={type}
        data-testing={dataTesting}
        {...rest}
      >
        {loading ? <Loader width={22} height={22} {...loaderProps} /> : children}
      </button>
    )

    if (to) {
      return (
        <ConditionalRender
          condition={isRoutingLink}
          otherwise={
            <a href={to} target={target}>
              {button}
            </a>
          }
        >
          <Link to={to} target={target}>
            {button}
          </Link>
        </ConditionalRender>
      )
    }

    return button
  })
)

Button.displayName = 'Button'
