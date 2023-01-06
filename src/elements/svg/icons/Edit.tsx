import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Edit: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props
  return (
    <svg
      className={cls('fill-current', className)}
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M16.8204 3.03417L14.0506 0.290171C13.8631 0.104378 13.6087 0 13.3435 0C13.0783 0 12.8239 0.104378 12.6364 0.290171L11.6071 1.30992C11.4109 1.50427 11.4109 1.81937 11.6071 2.01372L15.0807 5.45499C15.2768 5.64934 15.5949 5.64934 15.7911 5.45499L16.8204 4.43524C17.0079 4.24945 17.1133 3.99746 17.1133 3.73471C17.1133 3.47195 17.0079 3.21996 16.8204 3.03417Z"
        fill=""
      />
      <path
        d="M10.5615 3.04993C10.3653 2.85558 10.0473 2.85558 9.85111 3.04993L0.294263 12.5179C0.0823442 12.7279 -0.023899 13.0206 0.00453794 13.3162L0.335109 16.7521L3.6901 16.9657C3.97836 16.984 4.26065 16.8785 4.4649 16.6762L14.0351 7.19499C14.2312 7.00064 14.2312 6.68554 14.0351 6.49119L10.5615 3.04993Z"
        fill=""
      />
    </svg>
  )
})

Edit.displayName = 'Edit'
