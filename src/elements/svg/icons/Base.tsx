import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Base: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx="4.5" cy="4.5" r="4.5" fill="" />
    </svg>
  )
})

Base.displayName = 'Base'
