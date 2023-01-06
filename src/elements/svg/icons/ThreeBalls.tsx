import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const ThreeBalls: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="6.125" cy="21" r="6.125" />
      <circle cx="21.875" cy="21" r="6.125" />
      <circle cx="14" cy="7" r="6.125" />
    </svg>
  )
})

ThreeBalls.displayName = 'ThreeBalls'
