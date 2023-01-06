import React, { memo } from 'react'
import { IconProps } from '~icons'
import cls from 'classnames'

export const Group: React.FC<IconProps> = memo(props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M17 15.125C9.76363 15.125 3.875 21.0136 3.875 28.25C3.875 35.4864 9.76363 41.375 17 41.375C24.2364 41.375 30.125 35.4864 30.125 28.25C30.125 21.0136 24.2364 15.125 17 15.125ZM47 0C39.7636 0 33.875 5.88863 33.875 13.125C33.875 20.3614 39.7636 26.25 47 26.25C54.2364 26.25 60.125 20.3614 60.125 13.125C60.125 5.88863 54.2364 0 47 0Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M17 41.375C7.69462 41.375 0 48.9446 0 58.25V62.125C0 63.1614 0.963625 64 2 64H32C33.0364 64 33.875 63.1614 33.875 62.125V58.25C33.875 48.9446 26.3054 41.375 17 41.375ZM47 26.25C37.6946 26.25 30.125 33.8196 30.125 43.125V47C30.125 48.0364 30.9636 48.875 32 48.875H62C63.0364 48.875 64 48.0364 64 47V43.125C64 33.8196 56.3054 26.25 47 26.25Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="32" y1="41.375" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9AA0E4" />
          <stop offset="0.5028" stopColor="#C9CDFE" />
          <stop offset="1" stopColor="#E4E5FE" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="32" y1="64" x2="32" y2="26.25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8186C1" />
          <stop offset="1" stopColor="#BBBFF1" />
        </linearGradient>
      </defs>
    </svg>
  )
})

Group.displayName = 'Group'
