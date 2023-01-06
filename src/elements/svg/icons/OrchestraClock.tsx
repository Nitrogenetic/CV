import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const OrchestraClock: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10ZM9.99995 11.0002H14.9C15.5 11.0002 15.9 10.6002 15.9 10.0002C15.9 9.40017 15.5 9.00017 14.9 9.00017H11V5.10017C11 4.50017 10.6 4.10017 9.99995 4.10017C9.39995 4.10017 8.99995 4.50017 8.99995 5.10017V10.0002C8.99995 10.6002 9.39995 11.0002 9.99995 11.0002Z"
        fill=""
      />
    </svg>
  )
})

OrchestraClock.displayName = 'OrchestraClock'
