import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const RadioButton: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#262A37" stroke="" />
      <rect x="4" y="4" width="8" height="8" rx="4" fill="" />
    </svg>
  )
})

RadioButton.displayName = 'RadioButton'
