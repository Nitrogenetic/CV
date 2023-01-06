import React, { forwardRef, HTMLAttributeAnchorTarget, HTMLAttributes, memo } from 'react'
import { ConditionalRender, Loader } from '~ux'
import { Children, ClassName, HtmlButtonProps } from '~types'
import { Link } from '@reach/router'
import cls from 'classnames'

export type OrchestraButtonKindType =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'ghost-inverse'
  | 'inverse'
  | 'violet-inline'
  | 'option'
export type OrchestraButtonSizeType = 'small' | 'medium' | 'large'

const getButtonKindClass = (
  kind: OrchestraButtonKindType,
  size: OrchestraButtonSizeType,
  active: boolean,
  className?: ClassName
) => {
  return cls(className, 'orchestra-btn', {
    'orchestra-btn-large': size === 'large',
    'orchestra-btn-medium': size === 'medium',
    'orchestra-btn-small': size === 'small',

    'orchestra-btn-primary': kind === 'primary',
    'orchestra-btn-secondary': kind === 'secondary',
    'orchestra-btn-ghost': kind === 'ghost',
    'orchestra-btn-ghost-inverse': kind === 'ghost-inverse',
    'orchestra-btn-inverse': kind === 'inverse'
  })
}
export interface OrchestraButtonProps extends HtmlButtonProps {
  className?: ClassName
  children: Children
  kind?: OrchestraButtonKindType
  loading?: boolean
  active?: boolean
  size?: OrchestraButtonSizeType
  to?: string
  target?: HTMLAttributeAnchorTarget
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  dataTesting?: string
  externalLink?: boolean
  loaderProps?: HTMLAttributes<typeof Loader>
}

export const OrchestraButton = memo(
  forwardRef<HTMLButtonElement, OrchestraButtonProps>((props, ref) => {
    const {
      className,
      kind = 'primary',
      type = 'button',
      size = 'medium',
      active = false,
      to,
      target,
      children,
      loading,
      dataTesting,
      externalLink = true,
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
        <ConditionalRender condition={loading} otherwise={children}>
          <Loader width={22} height={22} {...loaderProps} />
        </ConditionalRender>
      </button>
    )

    if (to) {
      return (
        <ConditionalRender
          condition={externalLink}
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

OrchestraButton.displayName = 'OrchestraButton'
