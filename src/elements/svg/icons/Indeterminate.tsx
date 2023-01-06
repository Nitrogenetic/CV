import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Inderterminate: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props
  return (
    <svg
      className={cls('fill-current', className)}
      width="8"
      height="4"
      viewBox="0 0 8 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <rect y="0.650391" width="8" height="2.7" rx="0.67" fill="" />
    </svg>
  )
})

Inderterminate.displayName = 'Inderterminate'
