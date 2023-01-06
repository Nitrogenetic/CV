import React, { forwardRef, HTMLAttributeAnchorTarget, memo } from 'react'
import { Children, ClassName } from '~types'
import cls from 'classnames'
import { ConditionalRender } from '~ux'
import { Link } from '@reach/router'

export type OrchestraLinkType = 'default' | 'mono' | 'inverse'

export type OrchestraLinkSize = 'large' | 'medium' | 'small' | 'xsmall'

const getLinkClass = (type: OrchestraLinkType, size: OrchestraLinkSize, className?: ClassName) => {
  return cls(className, 'orchestra-link', {
    'orchestra-link-large': size === 'large',
    'orchestra-link-medium': size === 'medium',
    'orchestra-link-small': size === 'small',
    'orchestra-link-xsmall': size === 'xsmall',

    'orchestra-link-default': type === 'default',
    'orchestra-link-mono': type === 'mono',
    'orchestra-link-inverse': type === 'inverse'
  })
}

export type HtmlLinkProps = Omit<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'className'
>
export interface OrchestraLinkProps extends HtmlLinkProps {
  className?: ClassName
  children?: Children
  type?: OrchestraLinkType
  size?: OrchestraLinkSize
  to?: string
  isInternalLink?: boolean
  target?: HTMLAttributeAnchorTarget
}

export const OrchestraLink = memo(
  forwardRef<HTMLLinkElement, OrchestraLinkProps>((props, ref) => {
    const {
      className,
      children,
      type = 'default',
      size = 'medium',
      to,
      isInternalLink = false,
      target,
      ...rest
    } = props

    return (
      <div>
        <ConditionalRender
          condition={isInternalLink}
          otherwise={
            <a className={getLinkClass(type, size, className)} href={to} target={target || '_blank'} {...rest}>
              {children}
            </a>
          }
        >
          <Link className={getLinkClass(type, size, className)} to={to} target={target}>
            {children}
          </Link>
        </ConditionalRender>
      </div>
    )
  })
)

OrchestraLink.displayName = 'OrchestraLink'
