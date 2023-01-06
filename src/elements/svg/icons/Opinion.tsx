import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Opinion: React.FC<IconProps> = memo(props => {
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
      <path
        d="M12.875 0.5C12.0466 0.5 11.375 1.17157 11.375 2V14C11.375 14.8284 12.0466 15.5 12.875 15.5H13.625C14.4534 15.5 15.125 14.8284 15.125 14V2C15.125 1.17157 14.4534 0.5 13.625 0.5H12.875Z"
        fill=""
      />
      <path
        d="M6.125 6.5C6.125 5.67157 6.79657 5 7.625 5H8.375C9.20343 5 9.875 5.67157 9.875 6.5V14C9.875 14.8284 9.20343 15.5 8.375 15.5H7.625C6.79657 15.5 6.125 14.8284 6.125 14V6.5Z"
        fill=""
      />
      <path
        d="M0.875 9.5C0.875 8.67157 1.54657 8 2.375 8H3.125C3.95343 8 4.625 8.67157 4.625 9.5V14C4.625 14.8284 3.95343 15.5 3.125 15.5H2.375C1.54657 15.5 0.875 14.8284 0.875 14V9.5Z"
        fill=""
      />
    </svg>
  )
})

Opinion.displayName = 'Opinion'
