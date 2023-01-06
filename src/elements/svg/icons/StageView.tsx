import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const StageView: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2C0 0.89543 0.895432 0 2 0L2 2L2 3.33333L2 7L18 7L18 2L2 2L2 0L18 0C19.1046 0 20 0.895431 20 2L20 7C20 8.10457 19.1046 9 18 9L2 9C0.895432 9 0 8.10457 0 7L0 3.33333L0 2ZM11 13C11 11.8954 11.8954 11 13 11L18 11C19.1046 11 20 11.8954 20 13L20 18C20 19.1046 19.1046 20 18 20L13 20C11.8954 20 11 19.1046 11 18L11 14.3333L11 13ZM18 13L13 13L13 14.3333L13 18L18 18L18 13ZM2 11C0.895431 11 0 11.8954 0 13L0 14.3333L0 18C0 19.1046 0.895432 20 2 20L7 20C8.10457 20 9 19.1046 9 18L9 13C9 11.8954 8.10457 11 7 11L2 11ZM2 13L7 13L7 18L2 18L2 14.3333L2 13Z"
        fill=""
      />
    </svg>
  )
})

StageView.displayName = 'StageView'
