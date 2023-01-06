import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Union: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3.5L3 7.25C3 8.90685 4.34315 10.25 6 10.25C7.65685 10.25 9 8.90685 9 7.25L9 3.5C9 1.84314 7.65685 0.5 6 0.5C4.34315 0.5 3 1.84315 3 3.5ZM6 2C6.82843 2 7.5 2.67157 7.5 3.5L7.5 7.25C7.5 8.07843 6.82843 8.75 6 8.75C5.17157 8.75 4.5 8.07843 4.5 7.25L4.5 3.5C4.5 2.67157 5.17157 2 6 2ZM11.25 6.5C10.8358 6.5 10.5 6.83579 10.5 7.25C10.5 9.73528 8.48528 11.75 6 11.75C3.51472 11.75 1.5 9.73528 1.5 7.25C1.5 6.83579 1.16421 6.5 0.75 6.5C0.335786 6.5 0 6.83579 0 7.25C0 10.3097 2.29027 12.8345 5.25 13.2036V14.75C5.25 15.1642 5.58579 15.5 6 15.5C6.41421 15.5 6.75 15.1642 6.75 14.75V13.2036C9.70973 12.8345 12 10.3097 12 7.25C12 6.83579 11.6642 6.5 11.25 6.5Z"
        fill=""
      />
    </svg>
  )
})

Union.displayName = 'Union'
