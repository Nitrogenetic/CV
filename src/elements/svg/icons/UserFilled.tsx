import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const UserFilled: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M7.5 6.5C7.5 8.981 9.519 11 12 11C14.481 11 16.5 8.981 16.5 6.5C16.5 4.019 14.481 2 12 2C9.519 2 7.5 4.019 7.5 6.5ZM20 21C20.5523 21 21 20.5523 21 20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20C3 20.5523 3.44772 21 4 21H20Z"
        fill=""
      />
    </svg>
  )
})

UserFilled.displayName = 'UserFilled'