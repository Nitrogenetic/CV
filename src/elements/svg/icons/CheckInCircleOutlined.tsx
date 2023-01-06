import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const CheckInCircleOutlined: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 20 20"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        d="M1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001ZM3.33366 10.0001C3.33366 6.31818 6.31843 3.33341 10.0003 3.33341C13.6822 3.33341 16.667 6.31818 16.667 10.0001C16.667 13.682 13.6822 16.6667 10.0003 16.6667C6.31843 16.6667 3.33366 13.682 3.33366 10.0001ZM13.948 8.06319C14.2589 7.72392 14.236 7.19678 13.8968 6.88579C13.5575 6.57479 13.0304 6.59771 12.7194 6.93698L8.78021 11.2342L7.30718 9.46659C7.01254 9.11303 6.48707 9.06526 6.13351 9.3599C5.77994 9.65453 5.73217 10.18 6.02681 10.5336L8.11014 13.0336C8.26407 13.2183 8.49028 13.3275 8.73066 13.3332C8.97103 13.3389 9.20215 13.2404 9.36462 13.0632L13.948 8.06319Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

CheckInCircleOutlined.displayName = 'CheckInCircleOutlined'
