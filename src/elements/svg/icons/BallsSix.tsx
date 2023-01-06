import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const BallsSix: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 38 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="19" cy="35.875" r="6.125" />
      <circle cx="6.75" cy="28" r="6.125" />
      <circle cx="31.25" cy="28" r="6.125" />
      <circle cx="6.75" cy="14" r="6.125" />
      <circle cx="31.25" cy="14" r="6.125" />
      <circle cx="19" cy="6.125" r="6.125" />
    </svg>
  )
})

BallsSix.displayName = 'BallsSix'
