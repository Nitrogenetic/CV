import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~icons'

export const InviteUsers: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.33398 5.33333C5.80674 5.33333 7.00065 4.13943 7.00065 2.66667C7.00065 1.19391 5.80674 0 4.33398 0C2.86122 0 1.66732 1.19391 1.66732 2.66667C1.66732 4.13943 2.86122 5.33333 4.33398 5.33333ZM2.33398 6C1.22941 6 0.333984 6.89519 0.333984 7.99976V10.2974C0.333984 12.5675 8.33398 12.5675 8.33398 10.2974V7.99933C8.33398 6.89476 7.43855 6 6.33398 6H2.33398ZM9.00065 2.66667C9.00065 2.29848 9.29913 2 9.66732 2C10.0355 2 10.334 2.29848 10.334 2.66667V3.33333H11.0067C11.3713 3.33333 11.6673 3.62867 11.6673 4C11.6673 4.368 11.3667 4.66667 11.0067 4.66667H10.334V5.33333C10.334 5.70152 10.0355 6 9.66732 6C9.29913 6 9.00065 5.70152 9.00065 5.33333V4.66667H8.32798C7.96332 4.66667 7.66732 4.37067 7.66732 4C7.66732 3.632 7.96799 3.33333 8.32798 3.33333H9.00065V2.66667Z"
        fill=""
      />
    </svg>
  )
})

InviteUsers.displayName = 'InviteUsers'
