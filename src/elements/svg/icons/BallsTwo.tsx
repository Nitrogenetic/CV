import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const BallsTwo: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 7 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="7" cy="21" r="6.125" />
      <circle cx="21" cy="21" r="6.125" />
    </svg>
  )
})

BallsTwo.displayName = 'BallsTwo'
