import cls from 'classnames'
import React, { FC } from 'react'
import { IconProps } from '~icons'

export const Line: FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="8"
      height="1"
      viewBox="0 0 8 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <line y1="0.5" x2="8" y2="0.5" stroke="" />
    </svg>
  )
}

Line.displayName = 'Line'
