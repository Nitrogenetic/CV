import cls from 'classnames'
import React, { memo } from 'react'
import { IconProps } from '~icons'

export const CrossCircle: React.FC<IconProps> = memo(props => {
  const { className, ...rest } = props

  return (
    <svg
      className={cls(className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="9" cy="9" r="7.5" fill="#FF5473" />
      <path
        d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L10.0607 9L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L9 10.0607L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L7.93934 9L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L9 7.93934L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z"
        fill="white"
      />
    </svg>
  )
})

CrossCircle.displayName = 'CrossCircle'
