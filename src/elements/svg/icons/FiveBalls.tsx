import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const FiveBalls: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="11" cy="29.375" r="6.125" />
      <circle cx="25" cy="29.375" r="6.125" />
      <circle cx="6.625" cy="15.375" r="6.125" />
      <circle cx="29.375" cy="15.375" r="6.125" />
      <circle cx="18" cy="6.625" r="6.125" />
    </svg>
  )
})

FiveBalls.displayName = 'FiveBalls'
