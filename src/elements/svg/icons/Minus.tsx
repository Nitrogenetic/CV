import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Minus: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M1 0C0.447715 0 0 0.447716 0 1C0 1.55228 0.447715 2 1 2C8.09743 2 5.28086 2 13 2C13.5523 2 14 1.55229 14 1C14 0.447716 13.5523 4.76837e-07 13 4.76837e-07C5.32668 4.76837e-07 8.0717 0 1 0Z"
        fill=""
      />
    </svg>
  )
})

Minus.displayName = 'Minus'
